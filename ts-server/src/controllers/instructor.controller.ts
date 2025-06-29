import { Request, Response } from "express";
import teacherApply from "../models/teacherApply.model";
import User from "../models/user.model";
import { insertUser, findUserByEmail } from "../services/db/user.service";

export const registerInstructor = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
      res.status(400).json({ message: "user already exists" });
      return;
    }
    const user = await insertUser({ ...data, role: "trainer" });
    res.status(201).json({
      message: "register successfully",
      user: user,
    });
  } catch (error: any) {
    res.status(500).json({ message: "internal error", error: error });
  }
};

export const instructorApply = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phoneNumber, email, address } = req.body;

    // Name, phoneNumber, and email required check
    if (!name || !phoneNumber || !email) {
      res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, phoneNumber and email",
      });
      return;
    }

    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      res.status(400).json({
        success: false,
        message: "This email already exists",
      });
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();

    const isAppliedTeacher = await teacherApply.findOne({ email: normalizedEmail });
    if (isAppliedTeacher) {
      res.status(400).json({
        success: false,
        message: "This email already exists",
      });
      return;
    }

    const isPhoneExist = await teacherApply.findOne({ phoneNumber });
    if (isPhoneExist) {
      res.status(400).json({
        success: false,
        message: "Phone Number exists",
      });
      return;
    }

    const instructorData = {
      name,
      phoneNumber,
      email: normalizedEmail,
      address,
      success: true,
      submit: true,
    };

    const newInstructorData = await teacherApply.create(instructorData);

    res.status(201).json({
      success: true,
      message: "Instructor application submitted successfully",
      data: newInstructorData,
    });
  } catch (error: any) {
    console.error("Error making apply teach:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
