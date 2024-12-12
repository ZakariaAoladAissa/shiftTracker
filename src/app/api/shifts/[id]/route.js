// app/api/shifts/[id]/route.js
import { NextResponse } from 'next/server';
import Shift from '../../../../models/shift';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth'; // Path to your auth options

// GET: Fetch a specific shift by ID (User-specific)
export async function GET({ params }) {
  const { id } = params;
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }

  try {
    // Find the shift by ID and ensure it belongs to the logged-in user
    const shift = await Shift.findOne({ _id: id, userId: session.user.id });

    if (!shift) {
      return NextResponse.json({ error: "Shift not found or not authorized" }, { status: 404 });
    }
    return NextResponse.json(shift);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch shift" }, { status: 500 });
  }
}

// PUT: Update a specific shift by ID (User-specific)
export async function PUT(request, { params }) {
  const { id } = params;
  const { establishmentName,userId, hoursWorked, moneyPerHour, date } = await request.json();

  try {
    // Find the shift by ID and ensure it belongs to the logged-in user
    const updatedShift = await Shift.findOneAndUpdate(
      { _id: id, userId: userId },
      { establishmentName, hoursWorked, moneyPerHour, date },
      { new: true }
    );

    if (!updatedShift) {
      return NextResponse.json({ error: "Shift not found or not authorized" }, { status: 404 });
    }
    return NextResponse.json(updatedShift);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update shift" }, { status: 500 });
  }
}

// DELETE: Delete a specific shift by ID (User-specific)
export async function DELETE(req,{ params }) {
  const { id } = params;
  const { userId } = await req.json();

  try {
    // Find the shift by ID and ensure it belongs to the logged-in user
    const deletedShift = await Shift.findOneAndDelete({ _id: id, userId: userId });

    if (!deletedShift) {
      return NextResponse.json({ error: "Shift not found or not authorized" }, { status: 404 });
    }
    return NextResponse.json({ message: "Shift deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete shift" }, { status: 500 });
  }
}
