import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCourseProgress = async (req: Request, res: Response): Promise<void> => {
  const { userId, courseId } = req.params;

  if (!userId || !courseId) {
    res.status(400).json({ message: "Missing userId or courseId in parameters." });
    return;
  }

  try {
    const progress = await prisma.courseProgress.findFirst({
      where: {
        userId: parseInt(userId),
        courseId: parseInt(courseId),
      },
      include: {
        lectureProgress: true,
      },
    });

    if (!progress) {
      res.status(404).json({ message: "Progress not found." });
      return;
    }

    res.status(200).json(progress);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLectureProgress = async (req: Request, res: Response): Promise<void> => {
  const { userId, courseId, lectureId } = req.body;

  if (!userId || !courseId || !lectureId) {
    res.status(400).json({ message: "Missing userId, courseId, or lectureId in request body." });
    return;
  }

  try {
    let progress = await prisma.courseProgress.findFirst({
      where: {
        userId,
        courseId,
      },
    });

    if (!progress) {
      progress = await prisma.courseProgress.create({
        data: {
          userId,
          courseId,
          completed: false,
          completionDate: null,
        },
      });
    }

    const existingLecture = await prisma.lectureProgress.findFirst({
      where: {
        courseProgressId: progress.id,
        lectureId,
      },
    });

    if (existingLecture) {
      await prisma.lectureProgress.update({
        where: {
          id: existingLecture.id,
        },
        data: {
          viewed: true,
        },
      });
    } else {
      await prisma.lectureProgress.create({
        data: {
          courseProgressId: progress.id,
          lectureId,
          viewed: true,
        },
      });
    }

    const updatedProgress = await prisma.courseProgress.findUnique({
      where: { id: progress.id },
      include: { lectureProgress: true },
    });

    res.status(200).json({ message: "Lecture progress updated.", progress: updatedProgress });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const markCourseCompleted = async (req: Request, res: Response): Promise<void> => {
  const { userId, courseId } = req.params;

  if (!userId || !courseId) {
    res.status(400).json({ message: "Missing userId or courseId in parameters." });
    return;
  }

  try {
    const progress = await prisma.courseProgress.findFirst({
      where: {
        userId: parseInt(userId),
        courseId: parseInt(courseId),
      },
    });

    if (!progress) {
      res.status(404).json({ message: "Progress not found." });
      return;
    }

    const updated = await prisma.courseProgress.update({
      where: { id: progress.id },
      data: {
        completed: true,
        completionDate: new Date(),
      },
      include: {
        lectureProgress: true,
      },
    });

    res.status(200).json({ message: "Course marked as completed.", progress: updated });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
