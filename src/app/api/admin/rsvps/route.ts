import { NextResponse } from "next/server";
import { getAllRSVPs, getRSVPStats } from "@/lib/db";

// Simple admin password protection (set in .env.local)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "dimi-sarah-2025";

export async function GET(request: Request) {
  try {
    // Check for admin password in header
    const authHeader = request.headers.get("Authorization");
    const providedPassword = authHeader?.replace("Bearer ", "");
    
    if (providedPassword !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    
    const [rsvps, stats] = await Promise.all([
      getAllRSVPs(),
      getRSVPStats(),
    ]);
    
    return NextResponse.json({
      success: true,
      stats,
      rsvps,
    });
    
  } catch (error) {
    console.error("Admin RSVP fetch error:", error);
    
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
