import { pgTable, text, integer, serial } from 'drizzle-orm/pg-core'
import { id, created_at } from '../schemaHelpers.js'
import { userTable } from './users.js'
import { productsTable } from './products.js'
import { relations } from 'drizzle-orm'

export const reviewsTable = pgTable('reviews', {
	review_id: id,
	user_id: serial('user_id').references(() => userTable.user_id, {
		onDelete: 'cascade',
	}),
	product_id: serial().references(() => productsTable.product_id, {
		onDelete: 'cascade',
	}),
	rating: integer().notNull(),
	// .check((rating) => rating.gte(1).lte(5)),
	comment: text(),
	created_at,
})

export const reviewRelations = relations(reviewsTable, ({ one }) => ({
	user: one(userTable, {
		fields: [reviewsTable.user_id],
		references: [userTable.user_id],
	}),
	product: one(productsTable, {
		fields: [reviewsTable.product_id],
		references: [productsTable.product_id],
	}),
}))
