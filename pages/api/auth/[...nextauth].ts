import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import User from "../../../models/User";
import connectDB from "@/config/db";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await connectDB(); // Ensure MongoDB is connected

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        await User.create({
          googleId: user.id,
          name: user.name,
          email: user.email,
          avatar: user.image,
        });
      }

      return true;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;  // ✅ No more TypeScript error!
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
