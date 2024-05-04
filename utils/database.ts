import mongoose from "mongoose";
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("connected to MongoDB");
  } catch (error) {
    throw new Error("Failed to connect to mongoDb");
  }
};
export default connectToDB;
