import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    otp: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const EmailOtpSignup = mongoose.model("EmailOtpSignup", emailSchema);
export default EmailOtpSignup;
