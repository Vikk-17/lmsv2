import { Schema, model } from "mongoose";

const moduleSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    video: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    quiz: [
      {
        type: Schema.Types.ObjectId,
        ref: "Quiz",
      },
    ],
    assignment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
      },
    ],
    order: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

//delete all related videos after deletion of a given module
moduleSchema.pre("findOneAndDelete", async function (next) {
  try {
    const moduleId = this.getQuery()._id;
    await model("Video").deleteMany({ module: moduleId });
    next();
  } catch (error) {
    next(error);
  }
});

const Module = model("Module", moduleSchema);
export default Module;
