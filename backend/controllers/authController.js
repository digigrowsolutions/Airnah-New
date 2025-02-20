const { Webhook } = require('svix')
const { insertUser, updateUser, deleteUser } = require('../models/userModel')
const { CLERK_WEBHOOK_SECRET } = require('../config')
const { clerkClient } = require('@clerk/express')

exports.handleWebhook = async (req, res) => {
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
		case 'user.updated': {
			const email = event.data.email_addresses.find(
				(email) => email.id === event.data.primary_email_address_id
			)?.email_address
			const name = `${event.data.first_name} ${event.data.last_name}`.trim()
			if (!email || name === '')
				return res.status(400).send('Invalid user data')

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
					{ email, name, role: event.data.public_metadata.role }
				)
			}
			break
		}
		case 'user.deleted':
			await deleteUser({ clerk_user_id: event.data.id })
			break
		default:
			return res.status(400).send('Unhandled event')
	}

	res.status(200).send('Webhook handled successfully')
}
