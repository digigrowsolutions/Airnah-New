import { decimal, pgTable } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers.js'

export const masterTable = pgTable('master', {
	master_id: id,
	GBP_rate: decimal(19, 2),
	INR_rate: decimal(19, 2),
	gold_rate: decimal(19, 2),
	diamond_rate: decimal(19, 2),
	created_at,
	updated_at,
})
