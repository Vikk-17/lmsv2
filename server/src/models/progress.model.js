import mongoose from "mongoose";

// Schema to track the progress of individual lectures in a course
const LectureProgressSchema = new mongoose.Schema({
  lectureId: {
    type: String,
    required: true, // Each lecture must have a unique ID
  },
  viewed: Boolean, // Marks whether the lecture has been viewed by the user
});

// Schema to track the overall course progress for a user
const CourseProgressSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, // ID of the user taking the course
  },
  courseId: {
    type: String,
    required: true, // ID of the course being tracked
  },
  completed: Boolean, // Indicates whether the user has completed the course
  completionDate: {
    type: Date,
    required: true, // The date when the course was completed
  },
  lectureProgress: [LectureProgressSchema], // An array storing progress on each lecture
});

// Creating and exporting the model
const CourseProgress = mongoose.model("CourseProgress", CourseProgressSchema);
export default CourseProgress;
