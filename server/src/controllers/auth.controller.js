import { insertUser, findUserByEmail } from "../services/db/user.service.js";
import { comparePassword } from "../services/auth/auth.service.js";
import {
  signAccessToken,
  verifyAccessToken,
} from "../services/auth/auth.service.js";
import otpSender from "../models/otpSender.model.js";
import { sendEmailService } from "../services/otp/otpSender.js";

import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    const user = await insertUser({ ...data, role: "student" });
    res.status(201).json({
      message: "register successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: "internal error", error: error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const ismatch = await comparePassword(password, user.password);
    if (!ismatch) {
      return res.status(400).json({ message: "invalid credentials" });
    }
    const token = await signAccessToken({
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1 * 60 * 1000,
    });
    res.status(200).json({ message: "login successful", token: token });
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
};

export const sendEmailController = async (req, res) => {
  const { email } = req.body;

  const check = await User.findOne({ email });
  if (!check) {
    try {
      const otp = String(await sendEmailService(email)); // ✅ Declare & convert to string directly

      const test = await otpSender.findOneAndUpdate(
        { email: email.trim().toLowerCase() },
        { otp, updatedAt: new Date() },
        { new: true, upsert: true }
      );

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Email sending failed" });
    }
  } else {
    res.status(400).json({ message: "Email already exists !!" });
  }
};

export const signupOtpValidate = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const record = await otpSender.findOne({ email, otp });

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
    await otpSender.deleteOne({ _id: record._id });

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

export const googleLoginController = async (req, res) => {
  try {
    const user = req.user;

    // If user creation failed or blocked (e.g. already signed up via normal login)
    if (!user) {
      return res.redirect(
        "http://localhost:5173/login?error=google_login_blocked"
      );
    }

    const token = await signAccessToken({
      userId: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1 * 60 * 1000,
    });

    res.redirect(`http://localhost:5173/auth/success?token=${token}`);
  } catch (error) {
    console.error("Google Login Error:", error);
    res.status(500).json({ message: "Google login failed", error });
  }
};

// export const googleLoginController = async (req, res) => {
//   try {
//     const user = req.user;
//     if (!user)
//       return res.status(401).json({ message: "Authentication failed" });

//     const token = await signAccessToken({
//       userId: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//     });

//     // Set cookie like normal login
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "None",
//       maxAge: 1 * 60 * 1000,
//     });

//     res.redirect(`http://localhost:5173/auth/success?token=${token}`);
//     // or:
//     // res.status(200).json({ message: "Google Login Successful", token });
//   } catch (error) {
//     console.error("Google Login Error:", error);
//     res.status(500).json({ message: "Google login failed", error });
//   }
// };

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    req.logout?.(); // for passport session, even though not used

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Logout failed", error });
  }
};
