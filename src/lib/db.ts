import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!)

export async function getUserById(id: string) {
  const [user] = await sql`
    SELECT * FROM users WHERE id = ${id}
  `
  return user
}

export async function updateUserStripeCustomerId(userId: string, stripeCustomerId: string) {
  await sql`
    UPDATE users SET stripe_customer_id = ${stripeCustomerId} WHERE id = ${userId}
  `
}

export async function getUserByStripeCustomerId(stripeCustomerId: string) {
  const [user] = await sql`
    SELECT * FROM users WHERE stripe_customer_id = ${stripeCustomerId}
  `
  return user
}

export { sql }
