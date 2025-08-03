import Course from "../models/course.model.js";
import Rating from "../models/rating.model.js";
import User from "../models/user.model.js";
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

    const coursesWithRatings = await Course.aggregate([
      {
        $sort: { createdAt: -1 },
      },
      { $skip: skip },
      { $limit: limit },
      {
        $lookup: {
          from: "ratings", // 👈 name of Rating collection (match actual MongoDB collection name)
          localField: "_id",
          foreignField: "course",
          as: "ratings",
        },
      },
      {
        $addFields: {
          averageRating: { $avg: "$ratings.rating" },
          totalRatings: { $size: "$ratings" },
        },
      },
      {
        $project: {
          ratings: 0, // 👈 exclude full ratings array from response
        },
      },
    ]);

    const totalPages = Math.ceil(totalCourses / limit);

    return res.status(200).json({
      courses: coursesWithRatings,
      totalCourses,
      totalPages,
      currentPage: page,
      limit,
    });
  } catch (error) {
    console.error("🔥 Error in getAllCourses:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message || error,
    });
  }
};

export const getCourseDetailsById = async (req, res) => {
  try {
    const { courseId } = req.params;
    if (!courseId)
      return res.status(404).json({ message: "No Course Id Found" });

    const courseDetails = await Course.findById(courseId);
    if (!courseDetails)
      return res.status(404).json({ message: "No Course Found with this id" });
    return res
      .status(200)
      .json({ message: "Course Fetched Sucessfully", courseDetails });
  } catch (error) {
    console.error("Error Getting Course:");
    res
      .status(500)
      .json({ message: "Error Getting Course Details By id", error });
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
    const courseName = req.params.courseName;
    const course = await Course.findOne({ title: courseName });
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

export const enrollCourse = async (req, res) => {
  const { studentId, courseId } = req.body;

  if (!studentId || !courseId) {
    return res
      .status(400)
      .json({ message: "Enter Required Fields: studentId, courseId" });
  }

  try {
    const student = await User.findById(studentId);
    if (!student) return res.status(404).json({ message: "No Student Found" });

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "No Course Found" });
    // ✅ Check using .includes on the course.studentsEnrolled array
    const alreadyEnrolled = course.studentsEnrolled.includes(studentId);
    if (alreadyEnrolled) {
      return res.status(400).json({ message: "Already Enrolled" });
    }

    // ✅ Push values
    student.enrolledCourses.push(courseId);
    course.studentsEnrolled.push(studentId);

    // ✅ Save both
    await student.save();
    await course.save();

    return res.status(200).json({ message: "Course Added Successfully" });
  } catch (error) {
    console.error("Error enrolling student:", error);
    return res.status(500).json({
      message: "Enroll Error",
      error: error.message,
    });
  }
};

export const getEnrolledCourses = async (req, res) => {
  const { studentId } = req.params;
  if (!studentId) {
    return res.status(400).json({ message: "No Student Id provided" });
  }

  try {
    const student = await User.findById(studentId).populate("enrolledCourses");
    if (!student) return res.status(404).json({ message: "No Student Found" });

    return res.status(200).json({
      message: "Courses fetched successfully",
      enrolledCourses: student.enrolledCourses,
    });
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    return res.status(500).json({
      message: "Error fetching enrolled courses",
      error: error.message,
    });
  }
};

export const getEnrolledStudents = async (req, res) => {
  const { courseId } = req.params;
  if (!courseId) {
    return res.status(400).json({ message: "No Course Id provided" });
  }

  try {
    const course = await Course.findById(courseId).populate("studentsEnrolled");
    if (!course) return res.status(404).json({ message: "No Course Found" });

    return res.status(200).json({
      message: "Enrolled students fetched successfully",
      enrolledStudents: course.studentsEnrolled,
    });
  } catch (error) {
    console.error("Error fetching enrolled students:", error);
    return res.status(500).json({
      message: "Error fetching enrolled students",
      error: error.message,
    });
  }
};
