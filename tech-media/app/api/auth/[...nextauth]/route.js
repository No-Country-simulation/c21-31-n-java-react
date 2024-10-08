import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

console.log(process.env.GOOGLE_ID)
const handler = NextAuth({
    providers:[ GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
      })],
      pages: {
        signIn: '/auth/login',  // Personaliza la ruta de inicio de sesión
      },
})

export {handler as GET ,handler as POST}