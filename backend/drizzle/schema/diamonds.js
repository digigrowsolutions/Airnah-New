import { relations } from 'drizzle-orm'
import { decimal, pgEnum, pgTable, text } from 'drizzle-orm/pg-core'
import { created_at, id, updated_at } from '../schemaHelpers.js'
import { orderItemsTable } from './orderItems.js'
import { favoritesTable } from './favorites.js'
import { cartTable } from './cart.js'
import { reviewsTable } from './reviews.js'

export const diamondSize = ['0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4']
export const diamondSizeEnum = pgEnum('size', diamondSize)
export const diamondClarity = ['SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'VVS1', 'IF']
export const diamondClarityEnum = pgEnum('clarity', diamondClarity)
export const diamondShape = [
	'round',
	'princess',
	'emerald',
	'asscher',
	'oval',
	'pear',
	'marquise',
	'radiant',
	'cushion',
	'heart',
]
export const diamondShapeEnum = pgEnum('shape', diamondShape)
export const diamondColor = ['D', 'E', 'F', 'G', 'H']
export const diamondColorEnum = pgEnum('color', diamondColor)
export const diamondCut = ['regular', 'best', 'premium']
export const diamondCutEnum = pgEnum('cut', diamondCut)

export const diamondsTable = pgTable('diamonds', {
	diamond_id: id,
	name: text().notNull(),
	size: diamondSizeEnum().default('0.5'),
	image_URL: text(),
	shape: diamondShapeEnum().default('round'),
	cut: diamondCutEnum().default('regular'),
	color: diamondColorEnum().default('D'),
	clarity: diamondClarityEnum().default('IF'),
	price: decimal(10, 2),
	created_at,
	updated_at,
})

export const diamondsRelations = relations(diamondsTable, ({ many }) => ({
	orderItems: many(orderItemsTable),
	favorites: many(favoritesTable),
	cartItems: many(cartTable),
	reviews: many(reviewsTable),
}))
