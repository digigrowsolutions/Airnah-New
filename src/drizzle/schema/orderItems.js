import { integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers'
import { productsTable } from './products'
import { ordersTable } from './orders'
import { relations } from 'drizzle-orm'

export const orderItemsTable = pgTable('order_items', {
	order_item_id: id,
	order_id: serial().references(() => ordersTable.order_id, {
		onDelete: 'cascade',
	}),
	product_id: serial().references(() => productsTable.product_id, {
		onDelete: 'cascade',
	}),
	quantity: integer().notNull(),
	price: integer().notNull(),
	created_at,
	updated_at,
})

export const orderItemsRelations = relations(orderItemsTable, ({ one }) => ({
	order: one(ordersTable, {
		fields: [orderItemsTable.order_id],
		references: [ordersTable.order_id],
	}),
	product: one(productsTable, {
		fields: [orderItemsTable.product_id],
		references: [productsTable.product_id],
	}),
}))
