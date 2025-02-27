import { pgTable, serial } from 'drizzle-orm/pg-core'
import { created_at, updated_at } from '../schemaHelpers.js'
import { userTable } from './users.js'
import { productsTable } from './products.js'
import { relations } from 'drizzle-orm'
import { diamondsTable } from './diamonds.js'
import { ringStylesTable } from './ringStyles.js'

export const favoritesTable = pgTable('favorites', {
	favourite_id: serial('favourite_id').primaryKey(),
	user_id: serial('user_id').references(() => userTable.user_id, {
		onDelete: 'cascade',
	}),
	product_id: serial().references(() => productsTable.product_id, {
		onDelete: 'cascade',
	}),
	diamond_id: serial().references(() => diamondsTable.diamond_id, {
		onDelete: 'cascade',
	}),
	ring_style_id: serial().references(() => ringStylesTable.ring_style_id, {
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
	diamond: one(diamondsTable, {
		fields: [favoritesTable.diamond_id],
		references: [diamondsTable.diamond_id],
	}),
	ringStyle: one(ringStylesTable, {
		fields: [favoritesTable.ring_style_id],
		references: [ringStylesTable.ring_style_id],
	}),
}))
