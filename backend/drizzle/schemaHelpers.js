import { decimal, integer, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const id = serial().primaryKey()

export const created_at = timestamp('created_at', { withTimezone: true })
	.notNull()
	.defaultNow()

export const updated_at = timestamp('updated_at', { withTimezone: true })
	.notNull()
	.defaultNow()
	.$onUpdate(() => new Date())

export const quantity = integer().notNull()

export const price = decimal(10, 2).notNull()

export const description = text().notNull()

export const image_URL = text()
