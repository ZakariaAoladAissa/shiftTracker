// app/api/shifts/route.js
import { NextResponse } from "next/server";
import Shift from "../../../models/shift";
import  { getServerSession } from "next-auth";
import { handler } from "../auth/[...nextauth]/route";
import { connectToDB } from "@/utils/database";

// GET: Fetch all shifts for the logged-in user
export async function GET(req) {
    const { userId } = await req.json();

  try {
    // Fetch shifts for the authenticated user
    const shifts = await Shift.find({ userId: userId}).exec();
    return NextResponse.json(shifts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch shifts" }, { status: 500 });
  }
}

// POST: Create a new shift for the logged-in user
export async function POST(req) {
    
    const { userId, establishment, hoursWorked, hourlyRate, date } = await req.json();  
    // Check if userId is provided
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
  
    try {
        await connectToDB()

      // Create a new shift using the userId passed in the request
      const newShift = new Shift({
        establishment,
        hoursWorked,
        hourlyRate,
        date,
        userId: userId,  // Use the userId passed with the request
      });
      await newShift.save();
    console.log(newShift)

      return NextResponse.json(newShift, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to create shift" }, { status: 500 });
    }
  }
  