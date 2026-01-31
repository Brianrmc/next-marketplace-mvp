import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect(new URL("/", process.env.NEXTAUTH_URL));

  res.cookies.set("user-role", "", {
    path: "/",
    maxAge: 0,
  });

  res.cookies.set("user-id", "", {
    path: "/",
    maxAge: 0,
  });

  return res;
}