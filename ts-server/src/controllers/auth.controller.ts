import { Request, Response } from "express";
import { insertUser, findUserByEmail } from "../services/db/user.service";
import { comparePassword, signAccessToken } from "../services/auth/auth.service";
import otpSender from "../models/otpSender.model";
import { sendEmailService } from "../services/otp/otpSender";
import User, { IUserDocument } from "../models/user.model";

// -------------------- Register --------------------
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const user = await insertUser({ ...data, role: "student" });

    res.status(201).json({
      message: "Register successful",
      user,
    });
  } catch (error: any) {
    res.status(500).json({ message: "Internal error", error: error.message });
  }
};

// -------------------- Login --------------------
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // 👇 Ensure user._id is treated as string
    const token = await signAccessToken({
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 1000 }); // 1 minute
    res.status(200).json({ message: "Login successful", token });
  } catch (error: any) {
    res.status(500).json({ message: "Internal error", error: error.message });
  }
};

// -------------------- Send OTP Email --------------------
export const sendEmailController = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  try {
    const check = await User.findOne({ email });
    if (!check) {
      const otp = String(await sendEmailService(email));

      await otpSender.findOneAndUpdate(
        { email: email.trim().toLowerCase() },
        { otp, updatedAt: new Date() },
        { new: true, upsert: true }
      );

      res.status(200).json({ message: "Email sent successfully" });
    } else {
      res.status(400).json({ message: "Email already exists !!" });
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Email sending failed" });
  }
};

// -------------------- Validate OTP --------------------
export const signupOtpValidate = async (req: Request, res: Response): Promise<void> => {
  const { email, otp } = req.body;

  try {
    const record = await otpSender.findOne({ email, otp });

    if (!record) {
      res.status(400).json({ success: false, message: "Invalid OTP!" });
      return;
    }

    if (!record.updatedAt) {
      res.status(400).json({ success: false, message: "OTP record missing timestamp" });
      return;
    }

    const otpGeneratedTime = new Date(record.updatedAt).getTime();
    const currentTime = Date.now();
    const differenceInMinutes = (currentTime - otpGeneratedTime) / (1000 * 60);

    if (differenceInMinutes > 10) {
      res.status(400).json({
        success: false,
        message: "Your OTP has expired. Please request a new one.",
      });
      return;
    }

    await otpSender.deleteOne({ _id: record._id });

    res.status(200).json({ success: true, message: "OTP verified successfully!" });
  } catch (error: any) {
    console.error("OTP validation error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during OTP verification!",
    });
  }
};
