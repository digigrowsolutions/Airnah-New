import { eq } from 'drizzle-orm'
import { db } from '../db.js'
import { productsTable } from '../schema/products.js'

export async function addProduct(data) {
	const newProduct = await db.insert(productsTable).values(data).returning()
	if (newProduct == null) throw new Error('Failed to insert product')

	return { success: true }
}

export async function getAllProducts() {
	const products = await db
		.select({
			product_id: productsTable.product_id,
			name: productsTable.name,
			category: productsTable.category,
			total_cost_INR: productsTable.total_cost_INR,
			total_cost_GBP: productsTable.total_cost_GBP,
			total_cost_USD: productsTable.total_cost_USD,
		})
		.from(productsTable)

	if (products == null) throw new Error('Failed to get all products')

	return products
}

export async function getAllDiamonds() {
	const products = await db
		.select({
			product_id: productsTable.product_id,
			name: productsTable.name,
			diamond_price_INR: productsTable.diamond_price_INR,
			diamond_price_GBP: productsTable.diamond_price_GBP,
			diamond_price_USD: productsTable.diamond_price_USD,
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
			head_style_price_INR: productsTable.head_style_price_INR,
			head_style_price_GBP: productsTable.head_style_price_GBP,
			head_style_price_USD: productsTable.head_style_price_USD,
			head_metal: productsTable.head_metal,
			head_metal_price_INR: productsTable.head_metal_price_INR,
			head_metal_price_GBP: productsTable.head_metal_price_GBP,
			head_metal_price_USD: productsTable.head_metal_price_USD,
			shank_style: productsTable.shank_style,
			shank_style_price_INR: productsTable.shank_style_price_INR,
			shank_style_price_GBP: productsTable.shank_style_price_GBP,
			shank_style_price_USD: productsTable.shank_style_price_USD,
			shank_metal: productsTable.shank_metal,
			shank_metal_price_INR: productsTable.shank_metal_price_INR,
			shank_metal_price_GBP: productsTable.shank_metal_price_GBP,
			shank_metal_price_USD: productsTable.shank_metal_price_USD,
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
