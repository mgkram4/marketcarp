import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials?.email === "test@example.com" && credentials?.password === "password") {
          return {
            id: "1",
            name: "Test User",
            email: "test@example.com",
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
