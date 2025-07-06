import { NextRequest, NextResponse } from 'next/server';
import { AuthService } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip authentication for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Get the admin token from cookies
    const token = request.cookies.get('admin-token')?.value;
    console.log('Middleware - Token found:', !!token);
    console.log('Middleware - Request path:', request.nextUrl.pathname);

    if (!token) {
      console.log('Middleware - No token, redirecting to login');
      // Redirect to login if no token
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Verify the token
    const user = await AuthService.verifyToken(token);
    console.log('Middleware - Token verification result:', !!user);
    
    if (!user) {
      console.log('Middleware - Invalid token, redirecting to login');
      // Redirect to login if token is invalid
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    console.log('Middleware - Token valid, proceeding to:', request.nextUrl.pathname);

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