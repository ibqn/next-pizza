import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  requestHeaders.set("x-origin", request.nextUrl.origin)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  return response
}
