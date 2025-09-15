// import { NextResponse } from "next/server";
// import connectDB from "../lib/connectDB";
// import register from "../models/register";

// export async function POST(req) {
//   try {
//     console.log("Reached register API...");

//     await connectDB();
//     console.log("Connected to database...");

//     const data = await req.json();
//     console.log("Data received successfully:");
//     console.log(data);

//     const newEntry = new register(data);
//     console.log("Model created...");

//     const savedEntry = await newEntry.save();
//     console.log("Data saved to database successfully.");

//     return NextResponse.json(
//       { message: "Registration successful", savedEntry },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Registration error:", error);
//     return NextResponse.json(
//       { message: "Error inserting data", error },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB";

export async function POST(req) {
  try {
    console.log("Reached register API...");

    const pool = await connectDB();
    console.log("Connected to database...");

    const data = await req.json();
    console.log("Data received successfully:", data);

    // Destructure based on your table schema
    const { name, email, selectedProblem } = data; 
    // 👆 adjust fields according to your `register` table

    const query = `
      INSERT INTO register (name, email, selectedProblem)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, selectedProblem]; // Adjust based on your fields

    const result = await pool.query(query, values);

    console.log("Data saved to database successfully.");

    return NextResponse.json(
      { message: "Registration successful", savedEntry: result.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Error inserting data", error: error.message },
      { status: 500 }
    );
  }
}
