import { and, avg, count, eq } from 'drizzle-orm'
import { db } from '../db.js'
import { productsTable } from '../schema/products.js'
import { reviewsTable } from '../schema/reviews.js'
import { favoritesTable } from '../schema/favorites.js'

export async function addProduct(data) {
	const newProduct = await db.insert(productsTable).values(data).returning()
	if (newProduct == null) throw new Error('Failed to insert product')

	return { success: true }
}

export async function getAllProducts(clerk_user_id) {
	const products = await db
		.select({
			product_id: productsTable.product_id,
			SKU: productsTable.SKU,
			name: productsTable.name,
			category: productsTable.category,
			carat: productsTable.carat,
			total_cost: productsTable.total_cost,
			average_rating: avg(reviewsTable.rating).as('average_rating'),
			review_count: count(reviewsTable.review_id).as('review_count'),
			favorite_id: favoritesTable.favourite_id,
			image_URL: productsTable.image_URL,
		})
		.from(productsTable)
		.leftJoin(
			reviewsTable,
			eq(productsTable.product_id, reviewsTable.product_id)
		)
		.leftJoin(
			favoritesTable,
			and(
				eq(productsTable.product_id, favoritesTable.product_id),
				eq(favoritesTable.user_id, clerk_user_id)
			)
		)
		.groupBy(productsTable.product_id, favoritesTable.favourite_id)

	if (!products) throw new Error('Failed to get all products')

	return products
}

export async function getAllDiamonds() {
	const products = await db
		.select({
			product_id: productsTable.product_id,
			name: productsTable.name,
			diamond_price: productsTable.diamond_price,
		})
		.from(productsTable)
		.where(eq(productsTable.category, 'diamond'))

	if (products == null) throw new Error('Failed to get all diamonds')

	return products
}

export async function getAllRings() {
	const products = await db
		.select({
			product_id: productsTable.product_id,
			name: productsTable.name,
			head_style: productsTable.head_style,
			head_style_price: productsTable.head_style_price,
			head_metal: productsTable.head_metal,
			head_metal_price: productsTable.head_metal_price,
			shank_style: productsTable.shank_style,
			shank_style_price: productsTable.shank_style_price,
			shank_metal: productsTable.shank_metal,
			shank_metal_price: productsTable.shank_metal_price,
		})
		.from(productsTable)
		.where(eq(productsTable.category, 'ring'))

	if (products == null) throw new Error('Failed to get all rings')

	return products
}

export async function getProduct(product_id) {
	const product = await db
		.select()
		.from(productsTable)
		.where(eq(productsTable.product_id, product_id))

	if (product == null) throw new Error('Failed to get product')

	return product
}

export async function updateProduct(product_id, updatedData) {
	if (updatedData.created_at) {
		updatedData.created_at = new Date(updatedData.created_at)
	}
	if (updatedData.updated_at) {
		updatedData.updated_at = new Date(updatedData.updated_at)
	}
	const updatedProduct = await db
		.update(productsTable)
		.set(updatedData)
		.where(eq(productsTable.product_id, product_id))
		.returning()

	if (updatedProduct == null) throw new Error('Failed to update product')

	return { success: true }
}
