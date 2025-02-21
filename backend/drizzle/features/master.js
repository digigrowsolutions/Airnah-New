import { db } from '../db.js'
import { masterTable } from '../schema/master.js'

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
