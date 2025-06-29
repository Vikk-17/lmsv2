import { Request, Response } from "express";

import {
  insertIntoCourse,
  findAllCourses,
  findCourseById,
  updateCourseById,
  deleteCourseById,
} from "../services/db/course.service";

export const getAllCourses = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses = await findAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const createCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseData = req.body;
    const newCourse = await insertIntoCourse(courseData);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = req.params.courseid;
    const course = await findCourseById(courseId);
    if (!course) {
      res.status(404).json({ message: "Sorry! No course found." });
      return;
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const updateCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.courseid;
    const updateData = req.body;
    const updatedCourse = await updateCourseById(id, updateData);
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const deleteCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.courseid;
    const deletedCourse = await deleteCourseById(id);
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
