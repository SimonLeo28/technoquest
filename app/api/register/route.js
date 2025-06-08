import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB";
import register from "../models/register";

export async function POST(req) {
  try {
    console.log("Reached register API...");

    await connectDB();
    console.log("Connected to database...");

    const data = await req.json();
    console.log("Data received successfully:");
    console.log(data);

    const newEntry = new register(data);
    console.log("Model created...");

    const savedEntry = await newEntry.save();
    console.log("Data saved to database successfully.");

    return NextResponse.json(
      { message: "Registration successful", savedEntry },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Error inserting data", error },
      { status: 500 }
    );
  }
}
