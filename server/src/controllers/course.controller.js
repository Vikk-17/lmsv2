import Course from "../models/course.model.js";
import {
  insertIntoCourse,
  findAllCourses,
  findCourseById,
  updateCourseById,
  deleteCourseById,
} from "../services/db/course.service.js";

export const getAllCourses = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const totalCourses = await Course.countDocuments();
    const courses = await Course.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalPages = Math.ceil(totalCourses / limit);

    return res.status(200).json({
      courses,
      totalCourses,
      totalPages,
      currentPage: page,
      limit,
    });
  } catch (error) {
    console.error("🔥 Error in getAllCourses:", error); // ✅ add this
    return res.status(500).json({
      message: "Internal server error",
      error: error.message || error,
    });
  }
};

export const createCourse = async (req, res) => {
  try {
    const courseData = req.body;
    const newCourse = await insertIntoCourse(courseData);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const getCourse = async (req, res) => {
  try {
    const courseId = req.params.courseid;
    const course = await findCourseById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Sorry! No course found." });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const id = req.params.courseid;
    const updateData = req.body;
    const updatedCourse = await updateCourseById(id, updateData);
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const id = req.params.courseid;
    const deletedCourse = await deleteCourseById(id);
    res.status(200).json(deletedCourse);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};
