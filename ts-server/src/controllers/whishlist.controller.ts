import { Request, Response } from "express";
import Student from "../models/student.model";
import Course from "../models/course.model";

export const addToWishList = async (req: Request, res: Response): Promise<void> => {
  const { course_id, student_id } = req.body;

  if (!course_id || !student_id) {
    res.status(400).json({ message: "Missing course_id or student_id in request body" });
    return;
  }

  try {
    const course = await Course.findById(course_id);
    if (!course) {
      res.status(404).json({ message: "Course Not Found!" });
      return;
    }

    const student = await Student.findById(student_id);
    if (!student) {
      res.status(404).json({ message: "Student Not Found!" });
      return;
    }

    const alreadyExists = student.wishList.includes(course_id);
    if (alreadyExists) {
      res.status(400).json({ message: "Course already in wish list" });
      return;
    }

    student.wishList.push(course_id);
    await student.save();

    res.status(200).json({ message: "Course added to wish list", wishList: student.wishList });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getWishListItems = async (req: Request, res: Response): Promise<void> => {
  const { student_id } = req.params;

  if (!student_id) {
    res.status(400).json({ message: "Missing student_id in parameters" });
    return;
  }

  try {
    const student = await Student.findById(student_id).populate("wishList");
    if (!student) {
      res.status(404).json({ message: "Student not Found" });
      return;
    }

    res.status(200).json({ wishList: student.wishList });
  } catch (err: any) {
    res.status(500).json({ message: "An Error occurred", error: err.message });
  }
};

export const deleteWishListItem = async (req: Request, res: Response): Promise<void> => {
  const { course_id, student_id } = req.body;

  if (!course_id || !student_id) {
    res.status(400).json({ message: "Missing course_id or student_id in request body" });
    return;
  }

  try {
    const student = await Student.findById(student_id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    const index = student.wishList.indexOf(course_id);
    if (index === -1) {
      res.status(404).json({ message: "Course not found in wish list" });
      return;
    }

    student.wishList.splice(index, 1);
    await student.save();

    res.status(200).json({ message: "Course removed from wish list", wishList: student.wishList });
  } catch (err: any) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};

export const deleteAllWishListItems = async (req: Request, res: Response): Promise<void> => {
  const { student_id } = req.body;

  if (!student_id) {
    res.status(400).json({ message: "Missing student_id in request body" });
    return;
  }

  try {
    const student = await Student.findById(student_id);
    if (!student) {
      res.status(404).json({ message: "Student not Found" });
      return;
    }

    student.wishList = [];
    await student.save();

    res.status(200).json({ message: "All items removed successfully" });
  } catch (err: any) {
    res.status(500).json({ message: "An Error occurred", error: err.message });
  }
};
