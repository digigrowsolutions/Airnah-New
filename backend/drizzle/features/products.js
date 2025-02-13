import { eq } from 'drizzle-orm'
import { db } from '../db.js'
import { productsTable } from '../schema/products.js'

export async function addProduct(data) {
	const newProduct = await db.insert(productsTable).values(data).returning()
	if (newProduct == null) throw new Error('Failed to insert user')

	return { success: true }
}

export async function getAllProducts() {
	const products = await db.select().from(productsTable)

	if (products == null) throw new Error('Failed to get products')

	return products
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
