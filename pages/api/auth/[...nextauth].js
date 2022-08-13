import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "../../../models/UserModel";
import connectDB from "../../../lib/connectDB";
// import bcrypt from "bcrypt";

connectDB();
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const email = credentials.email;
        const password = credentials.password;
        const user = await Users.findOne({ email });
        if (!user) {
          throw new Error("You haven't registered yet");
        }
        if (user) {
          return signInUser({ password, user });
        }
        // If you return null then an error will be displayed advising the user to check their details.
        // return null;
      },

      // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token;

      return session;
    },
  },
});

const signInUser = async ({ password, user }) => {
  const isMatch = password == user.password;
  if (!isMatch) {
    throw new Error("Password not correct");
  }

  return user;
};
