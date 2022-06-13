import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'

export default NextAuth({
  providers: [
    RedditProvider({
      clientId: process.env.RedditClientId,
      clientSecret: process.env.RedditClientSecret,
    }),
  ],
})
