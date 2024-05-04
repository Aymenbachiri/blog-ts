import User from "@/models/user";
import connectToDB from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();

  await connectToDB();

  const hashedPassword = await bcrypt.hash(password, 5);
  console.log("Creating a new user...");
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  console.log("New user object:", newUser);
  try {
    console.log("Saving the new user to the database...");
    await newUser.save();
    console.log("User has been saved successfully.");
    return new NextResponse("User has been created", { status: 201 });
  } catch (error) {
    console.error("Error during user registration:", error);
    return new NextResponse("Failed to register user", { status: 500 });
  }
};
