import { integer, pgTable, serial } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers.js'
import { userTable } from './users.js'
import { productsTable } from './products.js'
import { relations } from 'drizzle-orm'

export const cartTable = pgTable('cart', {
	cart_id: id,
	user_id: serial('user_id').references(() => userTable.user_id, {
		onDelete: 'cascade',
	}),
	product_id: serial().references(() => productsTable.product_id, {
		onDelete: 'cascade',
	}),
	quantity: integer(),
	created_at,
	updated_at,
})

export const cartRelations = relations(cartTable, ({ one }) => ({
	user: one(userTable, {
		fields: [cartTable.user_id],
		references: [userTable.user_id],
	}),
	product: one(productsTable, {
		fields: [cartTable.product_id],
		references: [productsTable.product_id],
	}),
}))
