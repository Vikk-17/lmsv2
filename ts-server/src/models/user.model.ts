import { Document, Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "student" | "trainer" | "admin";
  profile?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    pincode?: string;
    country?: string;
  };
  bio?: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  _id: string; 
}

const userSchema = new Schema<IUserDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "trainer", "admin"],
      default: "student",
      required: true,
    },
    profile: { type: String },
    phone: { type: String },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
    },
    bio: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = model<IUserDocument>("User", userSchema);
export default User;
