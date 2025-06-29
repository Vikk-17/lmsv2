import { Request, Response } from "express";
import CourseProgress from "../models/progress.model";

export const getCourseProgress = async (req: Request, res: Response): Promise<void> => {
  const { userId, courseId } = req.params;

  if (!userId || !courseId) {
    res.status(400).json({ message: "Missing userId or courseId in parameters." });
    return;
  }

  try {
    const progress = await CourseProgress.findOne({ userId, courseId });
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
    let progress = await CourseProgress.findOne({ userId, courseId });

    if (!progress) {
      // Create new progress document if not found
      progress = new CourseProgress({
        userId,
        courseId,
        completed: false,
        completionDate: null,
        lectureProgress: [],
      });
    }

    const lectureIndex = progress.lectureProgress.findIndex(
      (lec) => lec.lectureId === lectureId
    );

    if (lectureIndex !== -1) {
      progress.lectureProgress[lectureIndex].viewed = true;
    } else {
      progress.lectureProgress.push({ lectureId, viewed: true });
    }

    await progress.save();

    res.status(200).json({ message: "Lecture progress updated.", progress });
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
    const progress = await CourseProgress.findOne({ userId, courseId });

    if (!progress) {
      res.status(404).json({ message: "Progress not found." });
      return;
    }

    progress.completed = true;
    progress.completionDate = new Date();

    await progress.save();

    res.status(200).json({ message: "Course marked as completed.", progress });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
