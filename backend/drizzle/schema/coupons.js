import { pgTable, text, integer, date } from 'drizzle-orm/pg-core'
import { id } from '../schemaHelpers.js'

export const couponsTable = pgTable('coupons', {
	coupon_id: id,
	code: text().notNull().unique(),
	discount_percentage: integer().notNull(),
	expiry_date: date().notNull(),
	max_uses: integer().default(1),
})
