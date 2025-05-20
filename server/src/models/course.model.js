// Importing Schema and model from mongoose to define the schema for the Course model
import { Schema, model } from "mongoose";

// Defining the schema structure for the Course collection
const courseSchema = new Schema(
  {
    // Title of the course - must be a unique, non-empty, trimmed string
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    // Optional subtitle for the course - trimmed string
    subtitle: {
      type: String,
      trim: true,
    },
    // Optional description of the course - trimmed string
    description: {
      type: String,
      trim: true,
    },
    // Reference to the instructor of the course - required ObjectId pointing to Instructor model
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "Instructor",
      required: true,
    },
    // Array of ObjectIds referencing Module documents related to this course
    module: [
      {
        type: Schema.Types.ObjectId,
        ref: "Module",
      },
    ],
    // Tags associated with the course - defaults to an empty array
    tag: {
      type: [String],
      default: [],
    },
    // Course category - required, trimmed string
    category: {
      type: String,
      trim: true,
      required: true,
    },
    // Language in which the course is offered - required string
    language: {
      type: String,
      required: true,
    },
    // Progress of the course (e.g., completion %) - defaults to 0
    progress: {
      type: Number,
      default: 0,
    },
  },
  // Automatically adds createdAt and updatedAt timestamps to the document
  { timestamps: true }
);

// Middleware to clean up related modules and videos before deleting a course
courseSchema.pre("findOneAndDelete", async function (next) {
  try {
    // Get the course ID from the query
    const courseId = this.getQuery()._id;
    // Find all modules related to this course
    const modules = await model("Module").find({ course: courseId });
    // Extract the IDs of those modules
    const modulesIds = modules.map((m) => m._id);
    // Delete all videos related to the found modules
    await model("Video").deleteMany({ module: { $in: modulesIds } });
    // Delete all modules related to the course
    await model("Module").deleteMany({ course: courseId });
    // Proceed to next middleware or operation
    next();
  } catch (error) {
    // Pass any errors to the next middleware
    next(error);
  }
});

// Creating the Course model based on the schema
const Course = model("Course", courseSchema);

// Exporting the Course model for use in other parts of the application
export default Course;
