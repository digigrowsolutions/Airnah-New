import { eq } from 'drizzle-orm'
import { db } from '../db.js'
import { diamondsTable } from '../schema/diamonds.js'

export async function addDiamond(data) {
	const newProduct = await db.insert(diamondsTable).values(data).returning()
	if (newProduct == null) throw new Error('Failed to insert diamond')

	return { success: true }
}

export async function getAllDiamonds() {
	const products = await db
		.select({
			diamond_id: diamondsTable.diamond_id,
			name: diamondsTable.name,
			category: diamondsTable.clarity,
			price: diamondsTable.price,
		})
		.from(diamondsTable)

	if (products == null) throw new Error('Failed to get all diamonds')

	return products
}

export async function updateDiamond(product_id, updatedData) {
	if (updatedData.created_at) {
		updatedData.created_at = new Date(updatedData.created_at)
	}
	if (updatedData.updated_at) {
		updatedData.updated_at = new Date(updatedData.updated_at)
	}
	const updatedProduct = await db
		.update(diamondsTable)
		.set(updatedData)
		.where(eq(diamondsTable.diamond_id, product_id))
		.returning()

	if (updatedProduct == null) throw new Error('Failed to update diamond')

	return { success: true }
}

export async function getDiamond(product_id) {
	const product = await db
		.select()
		.from(diamondsTable)
		.where(eq(diamondsTable.diamond_id, product_id))

	if (product == null) throw new Error('Failed to get diamond')

	return product
}
