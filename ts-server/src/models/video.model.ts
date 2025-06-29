import { Schema, model, Document, Types } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description?: string;
  url: string;
  duration?: number;
  module?: Types.ObjectId;
  order?: number;
  progress?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const videoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
    },
    duration: {
      type: Number,
    },
    module: {
      type: Schema.Types.ObjectId,
      ref: 'Module',
    },
    order: {
      type: Number,
      default: 1,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Video = model<IVideo>('Video', videoSchema);
export default Video;
