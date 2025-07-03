// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ DB Connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  }
};

export default connectDB;
