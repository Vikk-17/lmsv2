import { Schema, model, Document } from "mongoose";

export interface ITeacherApply extends Document {
  name: string;
  phoneNumber: string;
  email: string;
  address?: string;
  submit: boolean;
  approved: boolean;
  rejected: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const teacherApplySchema = new Schema<ITeacherApply>(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      default: "",
    },
    submit: { type: Boolean, default: false },
    approved: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TeacherApply = model<ITeacherApply>("teacherApply", teacherApplySchema);

export default TeacherApply;
