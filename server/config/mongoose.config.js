import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: "dndParty",
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ");
    throw error;
  }
}

export default dbConnect;
