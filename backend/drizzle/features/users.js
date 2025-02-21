import { db } from '../db.js'
import { cartTable } from '../schema/cart.js'
import { favoritesTable } from '../schema/favorites.js'
import { productsTable } from '../schema/products.js'
import { userTable } from '../schema/users.js'
import { and, eq } from 'drizzle-orm'
import { getUserByClerkId } from './helpers.js'

export async function insertUser(data) {
	const [newUser] = await db
		.insert(userTable)
		.values(data)
		.returning()
		.onConflictDoUpdate({
			target: [userTable.clerk_user_id],
			set: data,
		})

	if (newUser == null) throw new Error('Failed to insert user')

	return newUser
}

export async function updateUser({ clerk_user_id }, data) {
	const [updatedUser] = await db
		.update(userTable)
		.set(data)
		.where(eq(userTable.clerk_user_id, clerk_user_id))
		.returning()

	if (updatedUser == null) throw new Error('Failed to update user')

	return updatedUser
}

export async function deleteUser({ clerk_user_id }) {
	const [deletedUser] = await db
		.update(userTable)
		.set({
			email: 'redacted@deleted.com',
			name: 'Deleted User',
			clerk_user_id: 'deleted',
		})
		.where(eq(userTable.clerk_user_id, clerk_user_id))
		.returning()

	if (deletedUser == null) throw new Error('Failed to delete user')

	return deletedUser
}

export async function getUserFavorites({ clerk_user_id }) {
	// const user = await getUserByClerkId(clerk_user_id)
	const data = await db
		.select({
			favorite_id: favoritesTable.favourite_id,
			product_id: favoritesTable.product_id,
			product_name: productsTable.name,
		})
		.from(favoritesTable)
		.innerJoin(
			productsTable,
			eq(favoritesTable.product_id, productsTable.product_id)
		)
		.where(eq(favoritesTable.user_id, clerk_user_id))

	if (data == null) throw new Error('Failed to get User Favorites')

	return data
}

export async function addToFavorites({ clerk_user_id, product_id }) {
	const user = await getUserByClerkId(clerk_user_id)
	const result = await db.insert(favoritesTable).values({
		user_id: user[0].user_id,
		product_id: product_id,
	})

	if (!result) throw new Error('Failed to add to favorites')

	return { success: true }
}

export async function removeFromFavorites({ clerk_user_id, product_id }) {
	const user = await getUserByClerkId(clerk_user_id)
	await db
		.delete(favoritesTable)
		.where(
			and(
				eq(favoritesTable.user_id, user[0].user_id),
				eq(favoritesTable.product_id, product_id)
			)
		)

	return { success: true }
}

export async function getUserCart({ clerk_user_id }) {
	// const user = await getUserByClerkId(clerk_user_id)
	const data = await db
		.select({
			cart_id: cartTable.cart_id,
			product_id: cartTable.product_id,
			product_name: productsTable.name,
			quantity: cartTable.quantity,
		})
		.from(cartTable)
		.innerJoin(
			productsTable,
			eq(cartTable.product_id, productsTable.product_id)
		)
		.where(eq(cartTable.user_id, clerk_user_id))

	if (data == null) throw new Error('Failed to get User Cart')

	return data
}

export async function addToCart({ clerk_user_id, product_id, quantity }) {
	// const user = await getUserByClerkId(clerk_user_id)
	const result = await db.insert(cartTable).values({
		// user_id: user[0].user_id,
		user_id: clerk_user_id,
		product_id: product_id,
		quantity: quantity,
	})

	if (!result) throw new Error('Failed to add to cart')

	return { success: true }
}

export async function removeFromCart({ clerk_user_id, product_id }) {
	const user = await getUserByClerkId(clerk_user_id)
	await db
		.delete(cartTable)
		.where(
			and(
				eq(cartTable.user_id, user[0].user_id),
				eq(cartTable.product_id, product_id)
			)
		)

	return { success: true }
}

export async function getAllUsers() {
	const users = await db.select().from(userTable)

	if (users == null) throw new Error('Failed to get products')

	return users
}
