import { Schema, model, Document, Types } from "mongoose";

export interface IStudent extends Document {
  _id: Types.ObjectId;
  enrolledCourses: Types.ObjectId[];
  dob?: Date;
  wishList: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}

const studentSchema = new Schema<IStudent>(
  {
    _id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    enrolledCourses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    dob: {
      type: Date,
    },
    wishList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const Student = model<IStudent>("Student", studentSchema);
export default Student;
