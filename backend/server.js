import express from 'express'
import { Webhook } from 'svix'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import ngrok from '@ngrok/ngrok'
import {
	insertUser,
	updateUser,
	deleteUser,
	getUserFavorites,
	getUserCart,
	addToFavorites,
	removeFromFavorites,
	addToCart,
	removeFromCart,
	getAllUsers,
} from './drizzle/features/users.js'
import { clerkClient } from '@clerk/express'
import cors from 'cors'
import {
	addProduct,
	getAllProducts,
	getProduct,
	updateProduct,
} from './drizzle/features/products.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.json())
app.use(cors())

const CLERK_WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_KEY

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
				await clerkClient.users.updateUserMetadata(user.clerk_user_id, {
					publicMetadata: {
						dbId: user.user_id,
						role: user.role,
					},
				})
			} else {
				await updateUser(
					{ clerk_user_id: event.data.id },
					{
						email,
						name,
						role: event.data.public_metadata.role,
					}
				)
			}
			break
		case 'user.deleted':
			if (event.data.id != null) {
				await deleteUser({ clerk_user_id: event.data.id })
			}
			break
		default:
			return res.status(400).send('Unhandled event')
	}

	res.status(200).send('Webhook handled successfully')
})

app.get('/api/users/getFavorites/:clerk_user_id', async (req, res) => {
	try {
		const { clerk_user_id } = req.params
		const data = await getUserFavorites({ clerk_user_id })
		res.json(data)
	} catch (err) {
		console.error('getFavorites User Error: ', err)
		res.status(500).json({ error: 'Failed to get User Favorites' })
	}
})

app.post('/api/users/addToFavorites', async (req, res) => {
	try {
		const { clerk_user_id, product_id } = req.body
		await addToFavorites({ clerk_user_id, product_id })
		res.json({ success: true })
	} catch (err) {
		console.error('addToFavorites Error:', err)
		res.status(500).json({ error: 'Failed to add to Favorites' })
	}
})

app.delete(
	'/api/users/deleteFavorites/:clerk_user_id/:product_id',
	async (req, res) => {
		try {
			const { clerk_user_id, product_id } = req.params
			await removeFromFavorites({ clerk_user_id, product_id })
			res.json({ success: true })
		} catch (err) {
			console.error('removeFromFavorites Error:', err)
			res.status(500).json({ error: 'Failed to remove from Favorites' })
		}
	}
)

app.get('/api/users/getCart/:clerk_user_id', async (req, res) => {
	try {
		const { clerk_user_id } = req.params
		const data = await getUserCart({ clerk_user_id })
		res.json(data)
	} catch (err) {
		console.error('getCart User Error: ', err)
		res.status(500).json({ error: 'Failed to get User Cart' })
	}
})

app.post('/api/users/addToCart', async (req, res) => {
	try {
		const { clerk_user_id, product_id, quantity } = req.body
		await addToCart({ clerk_user_id, product_id, quantity })
		res.json({ success: true })
	} catch (err) {
		console.error('addToCart Error:', err)
		res.status(500).json({ error: 'Failed to add to Cart' })
	}
})

app.delete(
	'/api/users/deleteCart/:clerk_user_id/:product_id',
	async (req, res) => {
		try {
			const { clerk_user_id, product_id } = req.params
			await removeFromCart({ clerk_user_id, product_id })
			res.json({ success: true })
		} catch (err) {
			console.error('removeFromCart Error:', err)
			res.status(500).json({ error: 'Failed to remove from Cart' })
		}
	}
)

app.post('/api/admin/addProduct', async (req, res) => {
	try {
		const data = req.body
		await addProduct(data)
		res.json({ success: true })
	} catch (err) {
		console.log('addProduct Error:', err)
		res.status(500).json({ error: 'Failed to add product' })
	}
})

app.get('/api/admin/getAllProducts', async (req, res) => {
	try {
		const data = await getAllProducts()
		res.json(data)
	} catch (err) {
		console.log('addProduct Error: ' + err)
		res.status(500).json({ error: 'Failed to get all products' })
	}
})

app.put('/api/admin/updateProduct/:product_id', async (req, res) => {
	try {
		const updatedProduct = await updateProduct(req.params.product_id, req.body)
		res.json(updatedProduct)
	} catch (err) {
		console.log('updateProduct Error: ' + err)
		res.status(500).json({ error: 'Failed to update product' })
	}
})

app.get('/api/admin/getAllUsers', async (req, res) => {
	try {
		const data = await getAllUsers()
		res.json(data)
	} catch (err) {
		console.log('getAllUsers Error: ' + err)
		res.status(500).json({ error: 'Failed to get all users' })
	}
})

app.get('/api/getProduct/:product_id', async (req, res) => {
	try {
		const { product_id } = req.params
		const data = await getProduct(product_id)
		res.json(data)
	} catch (err) {
		console.log('getProduct Error: ' + err)
		res.status(500).json({ error: 'Failed to get product' })
	}
})

app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

ngrok
	.connect({ addr: 4000, authtoken_from_env: true })
	.then((listener) => console.log(`Ingress established at: ${listener.url()}`))
