import { pgTable, text, integer, date } from 'drizzle-orm/pg-core'
import { id } from '../schemaHelpers.js'

export const couponsTable = pgTable('coupons', {
	coupon_id: id,
	code: text().notNull().unique(),
	discount_percentage: integer().notNull(),
	// .check((discount) => discount.gte(1).lte(100)),
	expiry_date: date().notNull(),
	max_uses: integer().default(1),
})
