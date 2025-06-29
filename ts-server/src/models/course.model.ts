import mongoose, { Schema, model, Types, Document } from "mongoose";

interface ILecture {
  title: string;
  videoUrl: string;
  public_id: string;
  freePreview?: boolean;
}


export interface ICourse extends Document {
  title: string;
  image: string;
  subtitle?: string;
  description?: string;
  instructor: Types.ObjectId;
  module: Types.ObjectId[];
  tag: string[];
  category: string;
  language: string;
  progress: number;
  princing?: number;
  objective?: string;
  curriculam: ILecture[];
  isPublished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}


const lectureSchema = new Schema<ILecture>({
  title: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  videoUrl: {
    type: String,
    required: true,
    unique: true,
  },
  public_id: {
    type: String,
    required: true,
    unique: true,
  },
  freePreview: {
    type: Boolean,
  },
});


const courseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
    module: [
      {
        type: Schema.Types.ObjectId,
        ref: "Module",
      },
    ],
    tag: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
    },
    princing: Number,
    objective: String,
    curriculam: [lectureSchema],
    isPublished: Boolean,
  },
  { timestamps: true }
);


const Course = model<ICourse>("Course", courseSchema);
export default Course;
