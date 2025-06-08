import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB";
import contact from "../models/contact";

export async function POST(req) {
    try {
        console.log("Reached...");
        
        await connectDB();
        console.log("Connected to database...");
        

        const data = await req.json();
        console.log("Data recieved successfully.");
       console.log(data);
        
        
        const newItem = new contact(data);
       console.log("Model Used...");
        

        const savedItem = await newItem.save();
        console.log("Data sent to database successfully.");
        
        return NextResponse.json({message: "Item created successfully"}, {status: 200},{savedItem});
    }  catch(error) {
        return NextResponse.json({ message: "Error inserting data"}, {status:200},{error});
        
    }
}