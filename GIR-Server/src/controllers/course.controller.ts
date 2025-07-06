import { Request, Response } from "express";
import {
  insertIntoCourse,
  findAllCourses,
  findCourseById,
  updateCourseById,
  deleteCourseById,
} from "../services/db/course.service";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// ✅ Get all courses
export const getAllCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await findAllCourses();
    if(courses.length ===0){
      res.status(404).json({message:"No course found"})
    }
    res.status(200).json(courses);
  } catch (error: any) {
    console.error("Error getting all courses:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ✅ Create a new course
export const createCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseData = req.body;

    // Validate instructorId
    const instructor = await prisma.instructor.findUnique({
      where: { id: courseData.instructorId }
    });

    if (!instructor) {
      res.status(400).json({ message: "Instructor not found with given instructorId" });
      return;
    }

    const newCourse = await insertIntoCourse(courseData);
    res.status(201).json(newCourse);
  } catch (error: any) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


// ✅ Get course by ID
export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = Number(req.params.courseid);
    if (isNaN(courseId)) {
      res.status(400).json({ message: "Invalid course ID" });
      return;
    }

    const course = await findCourseById(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.status(200).json(course);
  } catch (error: any) {
    console.error("Error getting course by ID:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ✅ Update course by ID
export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = Number(req.params.courseid);
    const updateData = req.body;

    if (isNaN(courseId)) {
      res.status(400).json({ message: "Invalid course ID" });
      return;
    }

    const updated = await updateCourseById(courseId, updateData);
    res.status(200).json(updated);
  } catch (error: any) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ✅ Delete course by ID
export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = Number(req.params.courseid);

    if (isNaN(courseId)) {
      res.status(400).json({ message: "Invalid course ID" });
      return;
    }

    const deleted = await deleteCourseById(courseId);
    res.status(200).json(deleted);
  } catch (error: any) {
    console.error("Error deleting course:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
