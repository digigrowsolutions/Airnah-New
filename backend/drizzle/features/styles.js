import { eq } from 'drizzle-orm'
import { db } from '../db.js'
import { ringStylesTable } from '../schema/ringStyles.js'

export async function addStyle(data) {
	const newProduct = await db.insert(ringStylesTable).values(data).returning()
	if (newProduct == null) throw new Error('Failed to insert style')

	return { success: true }
}

export async function getAllStyles() {
	const products = await db
		.select({
			ring_style_id: ringStylesTable.ring_style_id,
			name: ringStylesTable.name,
			category: ringStylesTable.head_style,
			total_cost: ringStylesTable.head_style_price,
		})
		.from(ringStylesTable)

	if (products == null) throw new Error('Failed to get all styles')

	return products
}

export async function updateStyle(product_id, updatedData) {
	if (updatedData.created_at) {
		updatedData.created_at = new Date(updatedData.created_at)
	}
	if (updatedData.updated_at) {
		updatedData.updated_at = new Date(updatedData.updated_at)
	}
	const updatedProduct = await db
		.update(ringStylesTable)
		.set(updatedData)
		.where(eq(ringStylesTable.ring_style_id, product_id))
		.returning()

	if (updatedProduct == null) throw new Error('Failed to update style')

	return { success: true }
}
