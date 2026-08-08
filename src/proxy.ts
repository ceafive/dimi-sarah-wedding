import { NextRequest, NextResponse } from "next/server";

// Simple site-wide gate — set SITE_PASSWORD in .env.local. This is a
// low-stakes "did you get an invite" wall, not real auth. If the env var
// isn't set, the gate fails closed (blocks everyone) rather than open.
export const ACCESS_COOKIE = "wedding_access";

export function proxy(request: NextRequest) {
  const sitePassword = process.env.SITE_PASSWORD;
  const cookieValue = request.cookies.get(ACCESS_COOKIE)?.value;
  const hasAccess = !!sitePassword && cookieValue === sitePassword;

  if (hasAccess) return NextResponse.next();

  const url = new URL("/enter", request.url);
  url.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|admin|enter|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|ico|otf|ttf)$).*)",
  ],
};
