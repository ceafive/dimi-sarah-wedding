import { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE } from "@/proxy";

const SITE_PASSWORD = process.env.SITE_PASSWORD;

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (!SITE_PASSWORD || password !== SITE_PASSWORD) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ACCESS_COOKIE, SITE_PASSWORD, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 180, // 180 days
    path: "/",
  });
  return response;
}
