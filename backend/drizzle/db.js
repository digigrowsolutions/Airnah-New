// import { drizzle } from 'drizzle-orm/node-postgres'
// import * as schema from './schema.js'

// export const db = drizzle({
// 	schema,
// 	connection: {
// 		password: process.env.DB_PASSWORD,
// 		database: process.env.DB_NAME,
// 		user: process.env.DB_USER,
// 		host: process.env.DB_HOST,
// 	},
// })

// import { drizzle } from 'drizzle-orm/node-postgres'
// import * as schema from './schema.js'
// import pkg from 'pg'
// const { Pool } = pkg

// // Set up the PostgreSQL connection pool
// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL, // Your DB connection string from env
// })

// // Create the Drizzle ORM instance with the schema
// export const db = drizzle(pool, { schema })

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables

const connection = postgres(process.env.DATABASE_URL, { ssl: false }) // Ensure the password is correctly set

export const db = drizzle(connection)
