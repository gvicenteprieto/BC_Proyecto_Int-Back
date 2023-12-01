import mongoose from "mongoose";
import { config } from "dotenv";
config();

const DATABASE = process.env.DATABASE || "mongodb://localhost:27017/Integrador_back"; 

const connect = async () => {
  try {
    await mongoose.connect(DATABASE);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database");
    console.log(error);
  }
};

export default connect;