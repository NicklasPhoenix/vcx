import { User } from 'next-auth'

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

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    stripeCustomerId?: string | null
  }
}
