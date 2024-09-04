
import { withAuth } from 'next-auth/middleware';
import { NextRequest, NextResponse } from 'next/server';

const publicPages = ['/login', "/register"];

const authMiddleware = withAuth(
    {
        callbacks: {
            authorized: ({ token }) => token != null
        },
        pages: {
            signIn: '/login'
        }
    }
);

export default function middleware(req: NextRequest) {

    const isPublicPage = publicPages.includes(req.nextUrl.pathname);

    if (isPublicPage) {
        return NextResponse.next();
    } else {
        return (authMiddleware as any)(req);
    }
}

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};