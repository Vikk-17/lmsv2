import { Request, Response } from "express";
import { createUser, getUserById, getAllUsers,getUserByEmail } from "../services/user.service";
import {signAccessToken} from "../services/auth/auth.service"
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {sendRejectionMail,sendApprovalMail} from "../services/otp/mailSender"

const prisma = new PrismaClient();

export const registerAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { confirmPassword, ...userData } = req.body;

    // Check if user already exists
    const existingUser = await getUserByEmail(userData.email);
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Create user
    const user = await createUser({ ...userData, role: "admin" }); 
    // Create token
    const token = await signAccessToken({
      userId: user.id,
      name: user.name,
      email: user.email,
      role: "admin",
    });

    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 1000 }); // 1 minute

    res.status(201).json({
      message: "Registration successful",
      token,
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: "admin",
      },
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getInstructorApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const Instructors= await prisma.instructorApply.findMany({
      where: {
        submit: true,
      },
    });
    if (Instructors.length === 0) {
      res.status(200).json({ message: "No Instructor found" });
      return;
    }
    res.status(200).json({ success: true, Instructors});
  } catch (error) {
    console.error("Error fetching teacher applications:", error);
    res.status(500).json({ message: "Error fetching applications", error });
  }
};

export const instructorReject = async (req: Request, res: Response): Promise<void> => {
  const { email, name } = req.body;

  try {
    if (!email) {
      res.status(400).json({ message: "Email is required!" });
      return;
    }

    const updated = await prisma.instructorApply.updateMany({
      where: { email },
      data: {
        rejected: true,
        approved: false,
      },
    });

    if (updated.count === 0) {
      res.status(404).json({ message: "No application found with this email." });
      return;
    }

    await sendRejectionMail({ email, name });

    res.status(200).json({ message: "Instructor application rejected" });
  } catch (error) {
    console.error("Reject error:", error);
    res.status(500).json({ message: "Some error occurred", error });
  }
};

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
  const { email, name, password, phoneNumber } = req.body;

  if (!email || !name || !phoneNumber) {
    res.status(400).json({
      message: "Enter required fields like: Email, Phone Number, Name",
    });
    return;
  }

  try {
    // Check if application exists
    const application = await prisma.instructorApply.findUnique({ where: { email } });

    if (!application) {
      res.status(404).json({ message: "No application found with this email." });
      return;
    }

    // Check if user already exists
    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      res.status(409).json({ message: "Account already exists." });
      return;
    }

    // Approve application
    await prisma.instructorApply.update({
      where: { email },
      data: {
        approved: true,
        rejected: false,
      },
    });

    const realPassword = password || `GIR5151@${phoneNumber}`;
    const hashedPassword = await bcrypt.hash(realPassword, 10);

    // Create instructor user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        role: "instructor",
        instructor: {
          create: {}, // Create linked Instructor record
        },
      },
      include: {
        instructor: true,
      },
    });

    // Send approval email
    await sendApprovalMail({ email, password: realPassword, name });

    res.status(201).json({
      message: "Instructor created successfully",
  instructorId: newUser.id,
  data: newUser,
    });
  } catch (error: any) {
    console.error("Error creating instructor:", error);
    res.status(500).json({
      message: "Server error while creating instructor.",
      error: error.message || "Unknown error",
    });
  }
};