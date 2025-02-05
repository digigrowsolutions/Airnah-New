import { relations } from 'drizzle-orm'
import { integer, numeric, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
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
	price: numeric(10, 2).notNull(),
	stock_quantity: integer().default(0),
	image_URL: text(),
	status: productStatusEnum().default('active'),
	created_at,
	updated_at,
})

export const productsRelations = relations(productsTable, ({ many }) => ({
	orderItems: many(orderItemsTable),
	favorites: many(favoritesTable),
	cartItems: many(cartTable),
	reviews: many(reviewsTable),
}))
