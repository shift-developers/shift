import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const protocol = request.nextUrl.protocol;

  // Redirect non-www to www
  if (host === 'shiftmastersessions.com') {
    return NextResponse.redirect(
      `${protocol}//www.shiftmastersessions.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301 // Permanent redirect
    );
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};