import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const instructorApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phoneNumber, address } = req.body;

    // Validate required fields
    if (!name || !email || !phoneNumber) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Check if a user already exists with the same email
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Check if the same application already exists
    const existingApplication = await prisma.instructorApply.findUnique({
      where: { email },
    });

    if (existingApplication) {
      res.status(400).json({ message: "Application already submitted" });
      return;
    }

    // Create instructor application
    const application = await prisma.instructorApply.create({
      data: {
        name,
        email,
        phoneNumber,
        address: address || "",
        submit: true,
      },
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (err: any) {
    console.error("Error submitting instructor application:", err);
    res.status(500).json({ error: "Internal server error", details: err.message });
  }
};