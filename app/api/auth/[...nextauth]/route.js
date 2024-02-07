import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import connectionDB from "@utils/database";
import NextAuth from "next-auth"
import User from "@models/user";


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser?._id.toString();
      session.user.site_admin = sessionUser?.site_admin
      

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      console.log(profile);
      console.log(user);
      try {
        await connectionDB()
 
        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.toLowerCase(),
            image: profile.picture || profile.avatar_url,
            site_admin: false,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
}

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };