import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

//handling authentication via create a handle function


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_SECRETE_ID,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})

export { handler as GET, handler as POST};