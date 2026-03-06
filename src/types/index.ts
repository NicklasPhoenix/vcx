import 'next-auth'

declare module 'next-auth' {
  interface User {
    stripeCustomerId?: string | null
  }
  interface Session {
    user: User & {
      id: string
      stripeCustomerId?: string | null
    }
  }
}

// Note: next-auth/jwt augmentation is handled in next-auth v5 differently
// The JWT type is inferred from the callbacks
