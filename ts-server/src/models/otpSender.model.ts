import { Schema, model, Document } from "mongoose";


export interface IOtpSender extends Document {
  email: string;
  otp: string;
  createdAt?: Date;
  updatedAt?: Date;
}


const otpSenderSchema = new Schema<IOtpSender>(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const OtpSender = model<IOtpSender>("OtpSender", otpSenderSchema);
export default OtpSender;
