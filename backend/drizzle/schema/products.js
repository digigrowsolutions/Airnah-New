import { relations } from 'drizzle-orm'
import { decimal, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers.js'
import { orderItemsTable } from './orderItems.js'
import { favoritesTable } from './favorites.js'
import { cartTable } from './cart.js'
import { reviewsTable } from './reviews.js'

export const productStatus = ['active', 'inactive']
export const diamondSource = ['natural', 'labgrown']
export const productCategory = ['ring', 'necklace', 'pendant', 'diamond']
export const productStatusEnum = pgEnum('product_status', productStatus)
export const diamondSourceEnum = pgEnum('source', diamondSource)
export const productCategoryEnum = pgEnum('product_category', productCategory)

export const productsTable = pgTable('products', {
	product_id: id,
	name: text().notNull(),
	category: productCategoryEnum().default('ring'),
	description: text(),
	image_URL: text(),
	status: productStatusEnum().default('active'),
	source: diamondSourceEnum().default('natural'),
	shape: text(),
	cut: text(),
	color: text(),
	clarity: text(),
	carat: decimal(10, 2),
	diamond_price_INR: decimal(10, 2),
	diamond_price_GBP: decimal(10, 2),
	diamond_price_USD: decimal(10, 2),
	head_style: text(),
	head_style_price_INR: decimal(10, 2),
	head_style_price_GBP: decimal(10, 2),
	head_style_price_USD: decimal(10, 2),
	head_metal: text(),
	head_metal_price_INR: decimal(10, 2),
	head_metal_price_GBP: decimal(10, 2),
	head_metal_price_USD: decimal(10, 2),
	shank_style: text(),
	shank_style_price_INR: decimal(10, 2),
	shank_style_price_GBP: decimal(10, 2),
	shank_style_price_USD: decimal(10, 2),
	shank_metal: text(),
	shank_metal_price_INR: decimal(10, 2),
	shank_metal_price_GBP: decimal(10, 2),
	shank_metal_price_USD: decimal(10, 2),
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
