import mongoose, { Schema, Document, Types, Model } from "mongoose";


interface IQuestion {
  _id: Types.ObjectId;
  questionText: string;
  options: string[];
  correctAnswer: string;
}


export interface IAssignment extends Document {
  course: Types.ObjectId;
  title: string;
  description?: string;
 questions: Types.DocumentArray<IQuestion>;
  createdBy: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}


const questionSchema = new Schema<IQuestion>({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  questionText: { type: String, required: true },
  options: [String],
  correctAnswer: { type: String, required: true },
});


const assignmentSchema = new Schema<IAssignment>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    title: { type: String, required: true },
    description: String,
    questions: [questionSchema],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
  },
  { timestamps: true }
);


const Assignment: Model<IAssignment> = mongoose.model<IAssignment>(
  "Assignment",
  assignmentSchema
);

export default Assignment;
