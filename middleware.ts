import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  // publicRoutes: ['/', '/api/webhook'],
  publicRoutes: ['/', '/dashboard', '/settings', '/visualizer'], // REMOVE WHEN PUBLIC
  ignoredRoutes: [
    '/((?!api|trpc))(_next.*|.+.[w]+$)',
    '/dashboard',
    '/settings',
    'visualizer',
  ], // REMOVE WHEN PUBLIC
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
