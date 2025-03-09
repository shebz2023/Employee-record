import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import Employee from "@/app/models/employee";

// Connect to MongoDB
await dbConnect();

// Create a new employee
export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, role } = await request.json();

    const employee = new Employee({ firstName, lastName, email, phone, role });
    await employee.save();

    return NextResponse.json(
      { success: true, data: employee },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// Get all employees
export async function GET() {
  try {
    const employees = await Employee.find({});
    return NextResponse.json({ success: true, data: employees });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// Update an employee
export async function PUT(request) {
  try {
    const { id, firstName, lastName, phone } = await request.json();

    const employee = await Employee.findByIdAndUpdate(
      id,
      { firstName, lastName, phone },
      { new: true }
    );

    if (!employee) {
      return NextResponse.json(
        { success: false, error: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: employee });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// Delete an employee
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return NextResponse.json(
        { success: false, error: "Employee not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: employee });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
