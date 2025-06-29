import { Schema, model, Types, Document } from "mongoose";
import { CallbackError } from "mongoose";

export interface IModule extends Document {
  title: string;
  course: Types.ObjectId;
  video: Types.ObjectId[];
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
}


const moduleSchema = new Schema<IModule>(
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
    order: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);


moduleSchema.pre("findOneAndDelete", async function (next) {
  try {
    const moduleId = this.getQuery()._id;
    await model("Video").deleteMany({ module: moduleId });
    next();
  } catch (error) {
     next(error as CallbackError); 
  }
});


const Module = model<IModule>("Module", moduleSchema);
export default Module;
