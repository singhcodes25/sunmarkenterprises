import mongoose from "mongoose";
import { DB_QUOTE_NAME } from "../constants/constants";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB_Quote = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: DB_QUOTE_NAME,
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  console.log("DB connected successfully");

  return cached.conn;
};
