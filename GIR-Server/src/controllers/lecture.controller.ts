import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ➕ Add Lecture
export const addLecture = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, videoUrl, public_id, freePreview, courseId } = req.body;

    if (!title || !videoUrl || !public_id || !courseId) {
      res.status(400).json({ message: "Missing required fields." });
      return;
    }

    // Check if course exists
    const course = await prisma.course.findUnique({
      where: { id: Number(courseId) }, // 👈 courseId is Int
    });

    if (!course) {
      res.status(404).json({ message: "Course not found." });
      return;
    }

    const newLecture = await prisma.lecture.create({
      data: {
        title,
        videoUrl,
        public_id,
        freePreview,
        course: { connect: { id: Number(courseId) } },
      },
    });

    res.status(201).json({
      success: true,
      message: "Lecture created successfully.",
      lecture: newLecture,
    });
  } catch (error: any) {
    console.error("Add lecture error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

// 📥 Get All Lectures by Course
export const getLecturesByCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;

    const lectures = await prisma.lecture.findMany({
      where: { courseId: Number(courseId) }
    });

    res.status(200).json(lectures);
  } catch (error: any) {
    console.error("Get Lectures Error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ✏️ Update Lecture
export const updateLecture = async (req: Request, res: Response) => {
  try {
    const { lectureId } = req.params;
    const { title, videoUrl, public_id, freePreview } = req.body;

    const lecture = await prisma.lecture.update({
      where: { id: lectureId },
      data: {
        title,
        videoUrl,
        public_id,
        freePreview
      }
    });

    res.status(200).json({ message: "Lecture updated", lecture });
  } catch (error: any) {
    console.error("Update Lecture Error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ❌ Delete Lecture
export const deleteLecture = async (req: Request, res: Response) => {
  try {
    const { lectureId } = req.params;

    await prisma.lecture.delete({
      where: { id: lectureId }
    });

    res.status(200).json({ message: "Lecture deleted successfully" });
  } catch (error: any) {
    console.error("Delete Lecture Error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
