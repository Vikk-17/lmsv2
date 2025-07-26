import { Schema, model } from "mongoose";

const ratingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

// Ensure 1 rating per user per course
ratingSchema.index({ user: 1, course: 1 }, { unique: true });

const Rating = model("Rating", ratingSchema);
export default Rating;
