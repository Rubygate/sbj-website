import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Get the admin token from cookies
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Verify the token
    const user = AuthService.verifyToken(token);
    
    if (!user) {
      // Redirect to login if token is invalid
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Add user info to headers for use in API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', user.id);
    requestHeaders.set('x-user-email', user.email);
    requestHeaders.set('x-user-role', user.role);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
}; 