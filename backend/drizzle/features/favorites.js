import { and, eq, sql } from 'drizzle-orm'
import { db } from '../db.js'
import { favoritesTable } from '../schema/favorites.js'
import { productsTable } from '../schema/products.js'
import { ringStylesTable } from '../schema/ringStyles.js'

export async function getUserFavorites({ clerk_user_id }) {
	const data = await db
		.select({
			favorite_id: favoritesTable.favourite_id,
			product_id: favoritesTable.product_id,
			ring_style_id: favoritesTable.ring_style_id,
			product_name: productsTable.name,
			product_price: productsTable.total_cost,
			ring_style_name: ringStylesTable.name,
			ring_style_price: sql`
                ${ringStylesTable.head_style_price} +
                ${ringStylesTable.shank_style_price} +
                ${ringStylesTable.head_metal_price} +
                ${ringStylesTable.shank_metal_price}
            `.as('ring_style_price'),
		})
		.from(favoritesTable)
		.leftJoin(
			productsTable,
			eq(favoritesTable.product_id, productsTable.product_id)
		)
		.leftJoin(
			ringStylesTable,
			eq(favoritesTable.ring_style_id, ringStylesTable.ring_style_id)
		)
		.where(eq(favoritesTable.user_id, clerk_user_id))

	if (data == null) throw new Error('Failed to get User Favorites')

	return data
}

export async function addToFavorites({ user_id, product_id }) {
	const result = await db.insert(favoritesTable).values({
		user_id: user_id,
		product_id: product_id,
	})

	if (!result) throw new Error('Failed to add to favorites')

	return { success: true }
}

export async function removeFromFavorites({ clerk_user_id, product_id }) {
	console.log({ clerk_user_id, product_id })
	await db
		.delete(favoritesTable)
		.where(
			and(
				eq(favoritesTable.user_id, clerk_user_id),
				eq(favoritesTable.favourite_id, product_id)
			)
		)

	return { success: true }
}
