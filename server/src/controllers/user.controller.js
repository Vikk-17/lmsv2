import EmailOtpSignup from "../models/emailsender.model.js";
import emailsenderModel from "../models/emailsender.model.js";
import User from "../models/user.model.js";
import { verifyAccessToken } from "../services/auth/auth.service.js";
import { forgetPasswordEmail } from "../services/otp/otpSender.js";
import bcrypt from "bcryptjs";

export const getUser = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error("token not found!!");
    const user = await verifyAccessToken(token);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const getOtp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    if (!email) {
      return res.status(404).json({ message: "email not found" });
    }
    const isEmailExist = await User.findOne({ email: email, role: "student" });
    if (!isEmailExist) {
      return res.status(404).json({ message: "User not exist" });
    }

    const otp = await forgetPasswordEmail(email);

    const emailSend = await EmailOtpSignup.findOneAndUpdate(
      { email: email },
      { otp: otp },
      { new: true, upsert: true }
    );
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const signupOtpValidateUser = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const record = await EmailOtpSignup.findOne({ email, otp });

    if (!record) {
      return res.status(400).json({ success: false, message: "Invalid OTP!" });
    }
    console.log("Found Record:", record);

    const otpGeneratedTime = new Date(record.updatedAt).getTime();
    const currentTime = Date.now();
    const differenceInMinutes = (currentTime - otpGeneratedTime) / (1000 * 60);

    if (differenceInMinutes > 10) {
      return res.status(400).json({
        success: false,
        message: "Your OTP has expired. Please request a new one.",
      });
    }

    // Optionally delete the OTP record now
    await EmailOtpSignup.deleteOne({ _id: record._id });

    return res
      .status(200)
      .json({ success: true, message: "OTP verified successfully!" });
  } catch (error) {
    console.error("OTP validation error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error during OTP verification!",
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    // ✅ Check for all fields
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // ✅ Password strength validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+?])[A-Za-z\d!@#$%^&*()_+?]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character (!,@,#,$,%,^,&,*,(,),_,+,?)",
      });
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Update the password in the database
    const updatedUser = await User.findOneAndUpdate(
      { email: email.trim().toLowerCase() },
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change Password Error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
