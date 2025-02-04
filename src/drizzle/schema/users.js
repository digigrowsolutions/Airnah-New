import { pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers'
import { relations } from 'drizzle-orm'
import { ordersTable } from './orders'
import { favoritesTable } from './favorites'
import { cartTable } from './cart'
import { reviewsTable } from './reviews'

export const userRoles = ['user', 'admin']
export const userRolesEnum = pgEnum('user_roles', userRoles)

export const userTable = pgTable('users', {
	user_id: id,
	clerk_user_id: text().notNull().unique(),
	name: text().notNull(),
	email: text().notNull().unique(),
	role: userRolesEnum().default('user'),
	created_at,
	updated_at,
})

export const userRelations = relations(userTable, ({ many }) => ({
	orders: many(ordersTable),
	favorites: many(favoritesTable),
	cartItems: many(cartTable),
	reviews: many(reviewsTable),
}))
