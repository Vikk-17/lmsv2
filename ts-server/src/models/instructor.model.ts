import { Schema, model, Types, Document } from 'mongoose';


interface ICertificate {
  name: string;
  url: string;
}


interface ISocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  personalWebsite?: string;
}


export interface IInstructor extends Document {
  _id: Types.ObjectId;
  specializations?: string[];
  experience?: number;
  certificates?: ICertificate[];
  socialLinks?: ISocialLinks;
  courcesUploaded?: Types.ObjectId[];
  isVerified: boolean;
}


const instructorSchema = new Schema<IInstructor>({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  specializations: {
    type: [String],
  },
  experience: {
    type: Number,
    min: 0,
  },
  certificates: [
    {
      name: { type: String, trim: true },
      url: { type: String, trim: true },
    },
  ],
  socialLinks: {
    linkedin: { type: String, trim: true },
    github: { type: String, trim: true },
    twitter: { type: String, trim: true },
    personalWebsite: { type: String, trim: true },
  },
  courcesUploaded: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Cource', 
    },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
});


const Instructor = model<IInstructor>('Instructor', instructorSchema);
export default Instructor;
