import { relations } from 'drizzle-orm'
import { decimal, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers.js'
import { orderItemsTable } from './orderItems.js'
import { favoritesTable } from './favorites.js'
import { cartTable } from './cart.js'
import { reviewsTable } from './reviews.js'

export const productStatus = ['active', 'inactive']
export const productCategory = ['ring', 'necklace', 'pendant']
export const productStatusEnum = pgEnum('product_status', productStatus)
export const productCategoryEnum = pgEnum('product_category', productCategory)

export const productsTable = pgTable('products', {
	product_id: id,
	name: text().notNull(),
	category: productCategoryEnum().default('ring'),
	description: text(),
	image_URL: text(),
	status: productStatusEnum().default('active'),
	gold_quantity: decimal(10, 2),
	gold_price: decimal(10, 2),
	gold_total: decimal(10, 2),
	round_quantity: decimal(10, 2),
	round_price: decimal(10, 2),
	round_total: decimal(10, 2),
	oval_quantity: decimal(10, 2),
	oval_price: decimal(10, 2),
	oval_total: decimal(10, 2),
	marquise_quantity: decimal(10, 2),
	marquise_price: decimal(10, 2),
	marquise_total: decimal(10, 2),
	emerald_quantity: decimal(10, 2),
	emerald_price: decimal(10, 2),
	emerald_total: decimal(10, 2),
	princess_quantity: decimal(10, 2),
	princess_price: decimal(10, 2),
	princess_total: decimal(10, 2),
	pear_quantity: decimal(10, 2),
	pear_price: decimal(10, 2),
	pear_total: decimal(10, 2),
	heart_quantity: decimal(10, 2),
	heart_price: decimal(10, 2),
	heart_total: decimal(10, 2),
	other_diamond_quantity: decimal(10, 2),
	other_diamond_price: decimal(10, 2),
	other_diamond_total: decimal(10, 2),
	gemstone_quantity: decimal(10, 2),
	gemstone_price: decimal(10, 2),
	gemstone_total: decimal(10, 2),
	misc_cost: decimal(10, 2),
	labour_cost: decimal(10, 2),
	other_cost: decimal(10, 2),
	total_cost_INR: decimal(10, 2),
	total_cost_GBP: decimal(10, 2),
	total_cost_USD: decimal(10, 2),
	created_at,
	updated_at,
})

export const productsRelations = relations(productsTable, ({ many }) => ({
	orderItems: many(orderItemsTable),
	favorites: many(favoritesTable),
	cartItems: many(cartTable),
	reviews: many(reviewsTable),
}))
