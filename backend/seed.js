import mongoose from "mongoose";
import dotenv from "dotenv";
import foodModel from "./models/foodModel.js";
import foodData from "./data/seedFoods.js"

dotenv.config();

const seedFoods = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await foodModel.deleteMany();         // Optional: clear old data
    await foodModel.insertMany(foodData); // Insert new seed data

    console.log("✅ Food data seeded successfully.");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedFoods();
