import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: "Usuario no existe" }, { status: 401 });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return NextResponse.json({ error: "Password incorrecto" }, { status: 401 });
  }

  const res = NextResponse.json({
    id: user.id,
    role: user.role,
  });

  res.cookies.set("user-role", user.role, {
    httpOnly: false,
    path: "/",
  });

  res.cookies.set("user-id", user.id, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
