"use server";
import mongoose from "mongoose";
let connection: mongoose.Connection | null = null;
export async function CoonectToDb() {
  if (connection) return;
  try {
    const db = await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGODB_URI}`);
    connection = db.connections[0];
  } catch (e) {
    console.log(e);
  }
}
