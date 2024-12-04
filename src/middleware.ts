import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLoggedInUser } from './appwrite/server/config';

const caseSensitiveRoutes = [
  '/PrivacyPolicy',
  '/TermsAndConditions',
  '/ContactUs',
  '/ShippingAndDelivery',
  '/CancellationAndRefund',
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  const user = await getLoggedInUser()
  

  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const isLoginPage = pathname.toLowerCase() === "/login"

  if (user && (isLoginPage)) {
    return NextResponse.redirect(new URL("/store", req.nextUrl))
  }

  const correctCasePath = caseSensitiveRoutes.find(
    (route) => route.toLowerCase() === pathname.toLowerCase()
  );

  if (correctCasePath && correctCasePath !== pathname) {
    const url = req.nextUrl.clone();
    url.pathname = correctCasePath;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};