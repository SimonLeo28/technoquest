// import { NextResponse } from "next/server";
// import connectDB from "../lib/connectDB";
// import contact from "../models/contact";

// export async function POST(req) {
//     try {
//         console.log("Reached...");
        
//         await connectDB();
//         console.log("Connected to database...");
        

//         const data = await req.json();
//         console.log("Data recieved successfully.");
//        console.log(data);
        
        
//         const newItem = new contact(data);
//        console.log("Model Used...");
        

//         const savedItem = await newItem.save();
//         console.log("Data sent to database successfully.");
        
//         return NextResponse.json({message: "Item created successfully"}, {status: 200},{savedItem});
//     }  catch(error) {
//         return NextResponse.json({ message: "Error inserting data"}, {status:200},{error});
        
//     }
// }
import { NextResponse } from "next/server";
// import connectDB from "../lib/connectDB.js";

// Assuming you have a "contact" table in PostgreSQL like:
// CREATE TABLE contact (
//   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//   name TEXT NOT NULL,
//   email TEXT UNIQUE NOT NULL,
//   message TEXT
// );

// export async function POST(req) {
//   try {
//     console.log("Reached...");

//     const pool = await connectDB(); // pg Pool
//     console.log("Connected to database...");

//     const data = await req.json();
//     console.log("Data received successfully:", data);

//     // Destructure data fields (match with your table schema)
//     const { name, email, message } = data;

//     // Insert query
//     const query = `
//       INSERT INTO contact (name, email, message)
//       VALUES ($1, $2, $3)
//       RETURNING *;
//     `;

//     const values = [name, email, message];

//     const result = await pool.query(query, values);
//     console.log("Data sent to database successfully.");

//     return NextResponse.json(
//       {
//         message: "Item created successfully",
//         savedItem: result.rows[0],
//       },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error("Error inserting data:", error);
//     return NextResponse.json(
//       { message: "Error inserting data", error: error.message },
//       { status: 500 }
//     );
//   }
// }

import connectDB from "../lib/connectDB";

export async function POST(req) {
  try {
    const pool = await connectDB();
    const { name, email, message } = await req.json();

    const result = await pool.query(
      "INSERT INTO contact (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );

    return Response.json({ message: "Item created", savedItem: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error inserting data:", error);
    return Response.json({ message: "Error inserting data", error: error.message }, { status: 500 });
  }
}
