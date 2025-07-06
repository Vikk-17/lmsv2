import { Request, Response } from "express";
import { createUser, getUserById, getAllUsers,getUserByEmail } from "../services/user.service";
import {comparePassword} from "../services/auth/auth.service"
import {signAccessToken} from "../services/auth/auth.service"
import {sendEmailService} from "../services/otp/optSender"
import prisma from "../config/prisma";

import { PrismaClient } from "@prisma/client";

//@Desc Registration
//@Route /api/register
//@Access public

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { confirmPassword, ...userData } = req.body;
    if(!userData.email || !userData.name || !userData.password || !confirmPassword ){
      res.status(402).json({ message: "Missing required fields" });
    }

    // Check if user already exists
    const existingUser = await getUserByEmail(userData.email);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create user
    const user = await createUser({ ...userData, role: "student" }); 
    // Create token
    const token = await signAccessToken({
      userId: user.id,
      name: user.name,
      email: user.email,
      role: "student",
    });

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 1000 }); // 1 minute

    res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: "student",
      },
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

//@Desc Login
//@Route /api/login
//@Access public
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try{
    const { email, password } = req.body;
    if(!email || !password){
      res.status(402).json({message:"Missing required fields"})
    }
    const user=await getUserByEmail(email);

    if(!user){
      res.status(403).json({message:"No user exists  with email"})
      return 
    }
    if(!user.password){
      res.status(401).json({message:"User password not find"})
      return
    }
    const isMatch = await comparePassword(password, user.password);
     if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Create token
    const token = await signAccessToken({
      userId: user.id,
      name: user.name,
      email: user.email,
      role: "student",
    });
     res.cookie("token", token, { httpOnly: true, maxAge: 60 * 1000 }); // 1 minute
    res.status(200).json({ message: "Login successful", token });

    res.status(201).json({message:"Login Successfully"})
  }catch(error:any){
    res.status(501).json({message:"Server Error"})
  }
}


export const sendEmailController = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  try {
    const checkUser = await prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    if (checkUser) {
      res.status(400).json({ message: "Email already exists !!" });
      return;
    }

    const otp = String(await sendEmailService(email));

    await prisma.otpSender.upsert({
      where: { email: email.trim().toLowerCase() },
      update: {
        otp,
        updatedAt: new Date(), // optional, as @updatedAt will auto-update
      },
      create: {
        email: email.trim().toLowerCase(),
        otp,
      },
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: "Email sending failed" });
  }
};

export const signupOtpValidate = async (req: Request, res: Response): Promise<void> => {
  const { email, otp } = req.body;

  try {
    // 1. Find OTP record by email (email is unique)
    const record = await prisma.otpSender.findUnique({
      where: { email: email.trim().toLowerCase() },
    });

    // 2. Check if OTP record exists and matches
    if (!record || record.otp !== otp) {
      res.status(400).json({ success: false, message: "Invalid OTP!" });
      return;
    }

    // 3. Check timestamp validity
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

    // 4. Delete OTP record
    await prisma.otpSender.delete({
      where: { email: email.trim().toLowerCase() },
    });

    // 5. Success response
    res.status(200).json({ success: true, message: "OTP verified successfully!" });
  } catch (error: any) {
    console.error("OTP validation error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during OTP verification!",
    });
  }
};
