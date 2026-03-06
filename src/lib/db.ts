import { neon, NeonQueryFunction } from '@neondatabase/serverless'

// Lazy-initialize database connection to avoid build-time errors
let sqlInstance: NeonQueryFunction<false, false> | null = null

function getSql(): NeonQueryFunction<false, false> {
  if (!sqlInstance) {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      throw new Error('DATABASE_URL environment variable is not set')
    }
    sqlInstance = neon(databaseUrl)
  }
  return sqlInstance
}

// Wrapper that lazily executes SQL queries
async function sqlWrapper(
  strings: TemplateStringsArray,
  ...values: any[]
): Promise<any[]> {
  return getSql()(strings, ...values)
}

// Export sql with all the NeonQueryFunction properties
export const sql = Object.assign(sqlWrapper, {
  // Add any properties that might be needed from NeonQueryFunction
}) as NeonQueryFunction<false, false>

export async function getUserById(id: string) {
  const [user] = await getSql()`
    SELECT * FROM users WHERE id = ${id}
  `
  return user
}

export async function updateUserStripeCustomerId(userId: string, stripeCustomerId: string) {
  await getSql()`
    UPDATE users SET stripe_customer_id = ${stripeCustomerId} WHERE id = ${userId}
  `
}

export async function getUserByStripeCustomerId(stripeCustomerId: string) {
  const [user] = await getSql()`
    SELECT * FROM users WHERE stripe_customer_id = ${stripeCustomerId}
  `
  return user
}
