import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const caseSensitiveRoutes = [
  '/PrivacyPolicy',
  '/TermsAndConditions',
  '/ContactUs',
  '/ShippingAndDelivery',
  '/CancellationAndRefund',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  const correctCasePath = caseSensitiveRoutes.find(
    (route) => route.toLowerCase() === pathname.toLowerCase()
  );

  if (correctCasePath && correctCasePath !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = correctCasePath;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};