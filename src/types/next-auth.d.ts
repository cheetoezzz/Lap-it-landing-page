import NextAuth from "next-auth"

declare module "next-auth" {
  interface User{
    companyName: string
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