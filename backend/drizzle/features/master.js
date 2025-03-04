import { ilike } from 'drizzle-orm'
import { db } from '../db.js'
import { diamondsTable } from '../schema/diamonds.js'
import { masterTable } from '../schema/master.js'
import { ringStylesTable } from '../schema/ringStyles.js'
import { productsTable } from '../schema/products.js'

export async function getMasterList() {
	const products = await db.select().from(masterTable)

	if (products == null) throw new Error('Failed to get all masters')

	return products
}

export async function addMasterEntry(data) {
	const newProduct = await db.insert(masterTable).values(data).returning()

	if (newProduct == null) throw new Error('Failed to insert master')

	return { success: true }
}

export async function searchProducts(search) {
	// Search both tables
	const diamondResults = await db
		.select()
		.from(diamondsTable)
		.where(ilike(diamondsTable.name, `%${search}%`))

	const ringStyleResults = await db
		.select()
		.from(ringStylesTable)
		.where(ilike(ringStylesTable.name, `%${search}%`))

	const productResults = await db
		.select()
		.from(productsTable)
		.where(ilike(productsTable.name, `%${search}%`))

	const combinedResults = [
		...diamondResults.map((item) => ({ ...item, type: 'diamond' })),
		...ringStyleResults.map((item) => ({ ...item, type: 'ringStyle' })),
		...productResults.map((item) => ({ ...item, type: 'product' })),
	]
	return combinedResults
}
