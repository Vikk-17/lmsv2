import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ➕ Add Course to Wishlist
export const addToWishList = async (req: Request, res: Response): Promise<void> => {
  const { course_id, student_id } = req.body;

  if (!course_id || !student_id) {
    res.status(400).json({ message: "Missing course_id or student_id in request body" });
    return;
  }

  try {
    const course = await prisma.course.findUnique({ where: { id: course_id } });
    if (!course) {
      res.status(404).json({ message: "Course Not Found!" });
      return;
    }

    const student = await prisma.student.findUnique({
      where: { userId: student_id },
      include: { wishList: true },
    });

    if (!student) {
      res.status(404).json({ message: "Student Not Found!" });
      return;
    }

    const alreadyExists = student.wishList.some(c => c.id === course_id);
    if (alreadyExists) {
      res.status(400).json({ message: "Course already in wish list" });
      return;
    }

    await prisma.student.update({
      where: { userId: student_id },
      data: {
        wishList: {
          connect: { id: course_id },
        },
      },
    });

    res.status(200).json({ message: "Course added to wish list" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// 📥 Get Wishlist Items
export const getWishListItems = async (req: Request, res: Response): Promise<void> => {
  const { student_id } = req.params;

  if (!student_id) {
    res.status(400).json({ message: "Missing student_id in parameters" });
    return;
  }

  try {
    const student = await prisma.student.findUnique({
      where: { userId: parseInt(student_id) },
      include: { wishList: true },
    });

    if (!student) {
      res.status(404).json({ message: "Student not Found" });
      return;
    }

    res.status(200).json({ wishList: student.wishList });
  } catch (err: any) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};

// ❌ Delete a Course from Wishlist
export const deleteWishListItem = async (req: Request, res: Response): Promise<void> => {
  const { course_id, student_id } = req.body;

  if (!course_id || !student_id) {
    res.status(400).json({ message: "Missing course_id or student_id in request body" });
    return;
  }

  try {
    const student = await prisma.student.findUnique({
      where: { userId: student_id },
      include: { wishList: true },
    });

    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    const exists = student.wishList.some(c => c.id === course_id);
    if (!exists) {
      res.status(404).json({ message: "Course not found in wish list" });
      return;
    }

    await prisma.student.update({
      where: { userId: student_id },
      data: {
        wishList: {
          disconnect: { id: course_id },
        },
      },
    });

    res.status(200).json({ message: "Course removed from wish list" });
  } catch (err: any) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};

// 🧹 Delete All Wishlist Items
export const deleteAllWishListItems = async (req: Request, res: Response): Promise<void> => {
  const { student_id } = req.body;

  if (!student_id) {
    res.status(400).json({ message: "Missing student_id in request body" });
    return;
  }

  try {
    await prisma.student.update({
      where: { userId: student_id },
      data: {
        wishList: {
          set: [],
        },
      },
    });

    res.status(200).json({ message: "All items removed successfully" });
  } catch (err: any) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};
