import NextAuth from "next-auth"

declare module 'next-auth/jwt'{
  interface JWT {
    id: UserId
    role: UserRole
  }

}
declare module "next-auth" {
  interface User{
    companyName: string
    role: UserRole
  }
  interface Session {
    user: User & {
      companyName: string
    }
    token: {
        companyName: string
    }
  }
}