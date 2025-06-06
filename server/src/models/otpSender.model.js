import { Schema, model } from "mongoose";

const otpSenderSchema = new Schema(
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

const otpSender = model("otpSender ", otpSenderSchema);
export default otpSender;
