import {
  sendRejectionMail,
  sendApprovalMail,
} from "../services/otp/mailSender.js";
import teacherApply from "../models/teacherApply.model.js";
import { insertUser, findUserByEmail } from "../services/db/user.service.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const registerAdmin = async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    const user = await insertUser({ ...data, role: "admin" });
    res.status(201).json({
      message: "register successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: "internal error", error: error });
  }
};

export const getInstructorApplication = async (req, res) => {
  const teachers = await teacherApply.find({ submit: true });
  if (!teachers) {
    return res.status(402).json({ message: "No teacher found" });
  }
  return res.status(200).json({ success: true, teachers });
};

export const instructorReject = async (req, res) => {
  const { email, name } = req.body;
  try {
    if (!email) {
      res.status(400).json({ message: "Email is required!" });
    }

    const rejected = await teacherApply.findOneAndUpdate(
      { email },
      { rejected: true },
      { approved: false },
      { new: true }
    );
    sendRejectionMail(email, name);
    return res.status(200).json({ message: "User is rejected" });
  } catch (error) {
    res.status(500).json({ message: "Some Error Occured" });
  }
};

export const getAllTrainer = async (req, res) => {
  try {
    const allUser = await User.find({ role: "trainer" }).select("-password");
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const createTeacher = async (req, res) => {
  const { email, name, password, phoneNumber, bio } = req.body;

  if (!email || !name || !phoneNumber) {
    return res.status(400).json({
      message: "Enter required fields like: Email, phone Number, Name",
    });
  }

  try {
    const isEmailExist = await teacherApply.findOne({ email });

    if (!isEmailExist) {
      return res.status(404).json({
        message: "Sorry, no application found with this email.",
      });
    }

    const isexist = await User.findOne({ email });
    if (isexist) {
      return res.status(404).json({
        message: "Already have an account.",
      });
    }

    const approval = await teacherApply.findOneAndUpdate(
      { email },
      { approved: true, rejected: false },
      { new: true }
    );

    // Generate password
    let realPassword;
    if (!password) {
      realPassword = `GIR5151@${phoneNumber}`;
    } else {
      realPassword = password;
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(realPassword, saltRounds);

    // Create new instructor user
    const newInstructor = new User({
      name,
      email,
      password: hashedPassword,
      role: "trainer",
      bio,
      phone: phoneNumber,
    });

    await newInstructor.save();

    // Send approval email
    sendApprovalMail(email, realPassword, name);

    return res.status(201).json({
      message: "Instructor created successfully",
      data: newInstructor,
    });
  } catch (error) {
    console.error("Error creating instructor:", error);
    return res.status(500).json({
      message: "Server error while creating instructor.",
      error: error.message,
    });
  }
};
