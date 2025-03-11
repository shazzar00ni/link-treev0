import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// For demo purposes, we'll allow access to all routes
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
}

