import { Request, Response } from "express";
import { verifyAccessToken } from "../services/auth/auth.service";
import prisma from "../config/prisma"; // ✅ adjust path if different

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      res.status(401).json({ error: "Token not found" });
      return;
    }

    // ✅ Decode token (assumes it returns payload with userId)
    const decoded = await verifyAccessToken(token);

    // Optionally fetch user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }, // Assuming token has `id` field
      include: {
        student: true,
        instructor: true,
        admin: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(user);
  } catch (error: any) {
    console.error("Get User Error:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
};
