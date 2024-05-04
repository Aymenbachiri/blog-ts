import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
      sparse: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
