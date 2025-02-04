import { relations } from 'drizzle-orm'
import { integer, numeric, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers'
import { orderItemsTable } from './orderItems'
import { favoritesTable } from './favorites'
import { cartTable } from './cart'
import { reviewsTable } from './reviews'

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
