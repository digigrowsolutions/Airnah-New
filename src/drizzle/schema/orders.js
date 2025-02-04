import { integer, pgEnum, pgTable, serial } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers'
import { userTable } from './users'
import { relations } from 'drizzle-orm'
import { orderItemsTable } from './orderItems'
import { transactionsTable } from './transactions'

export const status = ['pending', 'paid', 'shipped', 'delivered', 'cancelled']
export const statusEnum = pgEnum('status', status)

export const ordersTable = pgTable('orders', {
	order_id: id,
	user_id: serial().references(() => userTable.user_id, {
		onDelete: 'cascade',
	}),
	total_amount: integer().notNull(),
	status: statusEnum().default('pending'),
	created_at,
	updated_at,
})

export const orderRelations = relations(ordersTable, ({ one, many }) => ({
	user: one(userTable, {
		fields: [ordersTable.user_id],
		references: [userTable.user_id],
	}),
	orderItems: many(orderItemsTable),
	transactions: many(transactionsTable),
}))
