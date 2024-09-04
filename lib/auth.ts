import { postSignIn } from "../service/login";
import { UserType } from "../service/login/type";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const nextAuthOptions: NextAuthOptions = {
    providers: [CredentialsProvider({
        name: "credentials",
        credentials: {
            login: { label: "login", type: "text" },
            password: { label: "password", type: "password" }
        },
        async authorize(credentials, req): Promise<any> {
            const response = await postSignIn({
                email: credentials?.login,
                password: credentials?.password,
            })            
            const { data } = response
            // if (data && data.statusCode >= 200 && data.statusCode <= 300 ) {
            //     return { ...response }
            // }

            return null
        },

    })],
    pages: {
        signIn: "/login",
        newUser: "/register"
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, trigger, user, session }) {
            user && (token.user = user);
            console.log(user)
            return token;
        },
        async session({ session, token }) {
            session.user = { ...(token.user as UserType) };
            return session;
        },
    }
}