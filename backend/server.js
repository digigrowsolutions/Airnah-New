import express from 'express'
import { Webhook } from 'svix'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import ngrok from '@ngrok/ngrok'
import { insertUser, updateUser, deleteUser } from './drizzle/features/users.js'
import { clerkClient, clerkMiddleware } from '@clerk/express'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(
	clerkMiddleware({
		publishableKey: process.env.CLERK_API_KEY,
		secretKey: process.env.CLERK_SECRET_KEY,
	})
)

const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_KEY

app.post('/api/users', async (req, res) => {
	try {
		const newUser = await insertUser(req.body)
		res.status(201).json(newUser)
	} catch (err) {
		console.error('Insert User Error:', err)
		res.status(500).json({ error: 'Failed to insert user' })
	}
})

app.put('/api/users/:clerk_user_id', async (req, res) => {
	try {
		const { clerk_user_id } = req.params
		const updatedUser = await updateUser({ clerk_user_id }, req.body)
		res.json(updatedUser)
	} catch (err) {
		console.error('Update User Error:', err)
		res.status(500).json({ error: 'Failed to update user' })
	}
})

app.delete('/api/users/:clerk_user_id', async (req, res) => {
	try {
		const { clerk_user_id } = req.params
		const deletedUser = await deleteUser({ clerk_user_id })
		res.json(deletedUser)
	} catch (err) {
		console.error('Delete User Error:', err)
		res.status(500).json({ error: 'Failed to delete user' })
	}
})

app.post('/webhook', async (req, res) => {
	const svixId = req.headers['svix-id']
	const svixTimestamp = req.headers['svix-timestamp']
	const svixSignature = req.headers['svix-signature']

	if (!svixId || !svixTimestamp || !svixSignature) {
		return res.status(400).send('Missing svix headers')
	}

	const body = JSON.stringify(req.body)
	const webhook = new Webhook(CLERK_WEBHOOK_SECRET)
	let event

	try {
		event = webhook.verify(body, {
			'svix-id': svixId,
			'svix-timestamp': svixTimestamp,
			'svix-signature': svixSignature,
		})
	} catch (error) {
		console.error('Error verifying webhook:', error)
		return res.status(400).send('Webhook verification failed')
	}

	switch (event.type) {
		case 'user.created':
		case 'user.updated':
			const email = event.data.email_addresses.find(
				(email) => email.id === event.data.primary_email_address_id
			)?.email_address
			const name = `${event.data.first_name} ${event.data.last_name}`.trim()
			if (email == null) return new Response('No email', { status: 400 })
			if (name === '') return new Response('No name', { status: 400 })
			if (event.type === 'user.created') {
				const user = await insertUser({
					clerk_user_id: event.data.id,
					email,
					name,
					role: 'user',
				})
				// await clerkClient.users.updateUserMetadata(user.clerk_user_id, {
				// 	publicMetadata: {
				// 		dbId: user.user_id,
				// 		role: user.role,
				// 	},
				// })
			} else {
				const updatedUser = await updateUser(
					{ clerkUserId: event.data.id },
					{
						email,
						name,
						role: event.data.public_metadata.role,
					}
				)
				// await clerkClient.users.updateUserMetadata(updatedUser.clerk_user_id, {
				// 	publicMetadata: {
				// 		dbId: updatedUser.user_id,
				// 		role: updatedUser.role,
				// 	},
				// })
			}
			break
		case 'user.deleted':
			if (event.data.id != null) {
				await deleteUser({ clerkUserId: event.data.id })
			}
			break
		default:
			return res.status(400).send('Unhandled event')
	}

	res.status(200).send('Webhook handled successfully')
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

ngrok
	.connect({ addr: 4000, authtoken_from_env: true })
	.then((listener) => console.log(`Ingress established at: ${listener.url()}`))
