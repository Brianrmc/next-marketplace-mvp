import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("user-role")?.value;

  const path = req.nextUrl.pathname;

  if (!role && ["/admin", "/client", "/provider"].some(p => path.startsWith(p))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (role === "ADMIN" && path.startsWith("/admin")) return NextResponse.next();
  if (role === "CLIENT" && path.startsWith("/client")) return NextResponse.next();
  if (role === "PROVIDER" && path.startsWith("/provider")) return NextResponse.next();

  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/admin/:path*", "/client/:path*", "/provider/:path*"],
};
