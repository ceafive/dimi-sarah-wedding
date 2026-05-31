import { NextRequest, NextResponse } from "next/server";
import { upsertRSVP, RSVPData } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, attendance, guests, dietary, message } = body;
    
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }
    
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    
    if (!attendance || !["attending", "not-attending"].includes(attendance)) {
      return NextResponse.json(
        { error: "Attendance must be 'attending' or 'not-attending'" },
        { status: 400 }
      );
    }
    
    const rsvpData: RSVPData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      attendance,
      guests: attendance === "attending" ? (parseInt(guests) || 1) : 0,
      dietary: dietary?.trim() || undefined,
      message: message?.trim() || undefined,
    };
    
    const result = await upsertRSVP(rsvpData);
    
    return NextResponse.json({
      success: true,
      message: attendance === "attending" 
        ? "Thank you! We can't wait to celebrate with you!" 
        : "Thank you for letting us know. We'll miss you!",
      data: {
        id: result.id,
        name: result.name,
        attendance: result.attendance,
      },
    });
    
  } catch (error) {
    console.error("RSVP submission error:", error);
    
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
