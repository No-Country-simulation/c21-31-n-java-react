import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from "next-auth/providers/github";

console.log(process.env.GOOGLE_ID)
const handler = NextAuth({
    providers:[ 
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      }), 
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID, // Tu Client ID
        clientSecret: process.env.GITHUB_CLIENT_SECRET, // Tu Client Secret
      }),],
      pages: {
        signIn: '/auth/login',  // Personaliza la ruta de inicio de sesión
      },
})

export {handler as GET ,handler as POST}