import { drizzle } from 'drizzle-orm/singlestore/driver'
import * as schema from './schema'

export const db = drizzle({
	schema,
	connection: {
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
	},
})
