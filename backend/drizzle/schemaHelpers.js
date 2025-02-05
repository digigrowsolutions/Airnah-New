import { serial, timestamp } from 'drizzle-orm/pg-core'

export const id = serial().primaryKey()

export const created_at = timestamp('created_at', { withTimezone: true })
	.notNull()
	.defaultNow()

export const updated_at = timestamp('updated_at', { withTimezone: true })
	.notNull()
	.defaultNow()
	.$onUpdate(() => new Date())
