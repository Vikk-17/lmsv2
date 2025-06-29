import { Schema, model, Document } from "mongoose";


interface ILectureProgress {
  lectureId: string;
  viewed: boolean;
}


export interface ICourseProgress extends Document {
  userId: string;
  courseId: string;
  completed: boolean;
  completionDate: Date;
  lectureProgress: ILectureProgress[];
}


const LectureProgressSchema = new Schema<ILectureProgress>({
  lectureId: {
    type: String,
    required: true,
  },
  viewed: {
    type: Boolean,
    default: false,
  },
});


const CourseProgressSchema = new Schema<ICourseProgress>({
  userId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  lectureProgress: [LectureProgressSchema],
});

const CourseProgress = model<ICourseProgress>("CourseProgress", CourseProgressSchema);
export default CourseProgress;
