import { relations } from 'drizzle-orm'
import { integer, numeric, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers'

export const productStatus = ['active', 'inactive']
export const productStatusEnum = pgEnum('product_status', productStatus)

export const ProductTable = pgTable('products', {
	product_id: id,
	name: text().notNull(),
	category: text().notNull(),
	description: text().notNull(),
	price: numeric(10, 2).notNull(),
	stock_quantity: integer().notNull(),
	image_URL: text().notNull(),
	status: productStatusEnum().notNull().default('active'),
	created_at,
	updated_at,
})

export const ProductRelationships = relations(
	ProductTable,
	({ one, many }) => ({
		test: one(),
	})
)
