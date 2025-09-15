// import mongoose from "mongoose";

// let isConnected = false;  

// const DB = process.env.DATABASE_URL;

// async function connectDB() {
//   if (isConnected) {
//     console.log("Already connected to Database...");
//     return;
//   }
  
//   try {
//     await mongoose.connect(DB);
//     isConnected = true;
//     console.log("Connected to Database successfully...");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// }

// export default connectDB;
// connectDB.js
import pkg from "pg";
const { Pool } = pkg;

let pool;

async function connectDB() {
  if (pool) {
    console.log("Already connected to Database...");
    return pool;
  }

  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL, // Neon PostgreSQL URL
      ssl: {
        rejectUnauthorized: false, // Neon requires SSL
      },
    });

    console.log("PostgreSQL pool created successfully...");
    return pool;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

export default connectDB;
