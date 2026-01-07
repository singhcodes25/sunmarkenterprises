import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const adminUser = {
  id: "1",
  name: "admin",
  email: "admin@mail.com",
  password: "admin123",
};

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials.email === adminUser.email &&
          credentials.password === adminUser.password
        ) {
          return adminUser;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = "admin";
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
