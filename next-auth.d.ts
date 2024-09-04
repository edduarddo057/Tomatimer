// next-auth.d.ts
import 'next-auth';
import { DefaultSession } from 'next-auth';
import { UserType } from './services/login/type';

declare module 'next-auth' {
    interface Session {
        user: UserType & DefaultSession['user'];
    }

    interface User extends UserType { }
}
