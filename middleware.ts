import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const subdomain = hostname.split('.')[0];

  // Handle localhost with port
  if (hostname.includes('localhost')) {
    if (['jpj', 'plant', 'page', 'bonzo'].includes(subdomain)) {
      url.pathname = `/${subdomain}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

