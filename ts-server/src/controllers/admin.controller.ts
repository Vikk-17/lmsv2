import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import teacherApply from "../models/teacherApply.model";
import user from "../models/user.model";
import { insertUser, findUserByEmail } from "../services/db/user.service";
import { sendRejectionMail, sendApprovalMail } from "../services/otp/mailSender";

// Register Admin
export const registerAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const newUser = await insertUser({ ...data, role: "admin" });

    res.status(201).json({
      message: "Registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
};

// Get Instructor Applications
export const getInstructorApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const teachers = await teacherApply.find({ submit: true });

    if (!teachers || teachers.length === 0) {
      res.status(402).json({ message: "No teacher found" });
      return;
    }

    res.status(200).json({ success: true, teachers });
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications", error });
  }
};

// Reject Instructor Application
export const instructorReject = async (req: Request, res: Response): Promise<void> => {
  const { email, name } = req.body;

  try {
    if (!email) {
      res.status(400).json({ message: "Email is required!" });
      return;
    }

    await teacherApply.findOneAndUpdate(
      { email },
      { rejected: true, approved: false },
      { new: true }
    );

    await sendRejectionMail({email, name});

    res.status(200).json({ message: "User is rejected" });
  } catch (error) {
    res.status(500).json({ message: "Some error occurred", error });
  }
};

// Approve and Create Instructor Account
export const createTeacher = async (req: Request, res: Response): Promise<void> => {
  const { email, name, password, phoneNumber } = req.body;

  if (!email || !name || !phoneNumber) {
    res.status(400).json({
      message: "Enter required fields like: Email, Phone Number, Name",
    });
    return;
  }

  try {
    const isEmailExist = await teacherApply.findOne({ email });

    if (!isEmailExist) {
      res.status(404).json({
        message: "Sorry, no application found with this email.",
      });
      return;
    }

    const isExist = await user.findOne({ email });
    if (isExist) {
      res.status(409).json({
        message: "Account already exists.",
      });
      return;
    }

    await teacherApply.findOneAndUpdate(
      { email },
      { approved: true, rejected: false },
      { new: true }
    );

    const realPassword = password || `GIR5151@${phoneNumber}`;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(realPassword, saltRounds);

    const newInstructor = new user({
      name,
      email,
      password: hashedPassword,
      role: "trainer",
      phone: phoneNumber,
    });

    await newInstructor.save();
    await sendApprovalMail({ email, password: realPassword, name });


    res.status(201).json({
      message: "Instructor created successfully",
      data: newInstructor,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown server error";
    res.status(500).json({
      message: "Server error while creating instructor.",
      error: message,
    });
  }
};
