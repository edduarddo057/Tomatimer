import { postSignIn } from "../service/login";
import { UserType } from "../service/login/type";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const nextAuthOptions: NextAuthOptions = {
    secret: "ebc24059-92f1-4564-b5ba-e42eac106b2f",
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
            if (data) {
                return data
            }

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
            return token;
        },
        async session({ session, token }) {
            session.user = { ...(token.user as UserType) };
            return session;
        },
    }
}