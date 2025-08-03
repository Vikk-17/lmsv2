import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    enrolledCourses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
    provider: {
      type: String,
      enum: ["google", "local"],
      default: "local",
    },
    role: {
      type: String,
      enum: ["student", "trainer", "admin"],
      default: "student",
      required: true,
    },
    profile: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
    },
    address: {
      street: { type: String, trim: true },
      city: { type: String, trim: true },
      state: { type: String, trim: true },
      pincode: { type: String, trim: true },
      country: { type: String, trim: true },
    },
    bio: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
