import { pgTable, serial } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers.js'
import { userTable } from './users.js'
import { productsTable } from './products.js'
import { relations } from 'drizzle-orm'

export const favoritesTable = pgTable('favorites', {
	favourite_id: id,
	user_id: serial('user_id').references(() => userTable.user_id, {
		onDelete: 'cascade',
	}),
	product_id: serial().references(() => productsTable.product_id, {
		onDelete: 'cascade',
	}),
	created_at,
	updated_at,
})

export const favoritesRelations = relations(favoritesTable, ({ one }) => ({
	user: one(userTable, {
		fields: [favoritesTable.user_id],
		references: [userTable.user_id],
	}),
	product: one(productsTable, {
		fields: [favoritesTable.product_id],
		references: [productsTable.product_id],
	}),
}))
