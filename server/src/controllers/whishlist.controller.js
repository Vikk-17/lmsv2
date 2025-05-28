import Student from "../models/student.model.js";
import Course from "../models/course.model.js";

export const addTowishList = async (req, res) => {
  const { course_id, student_id } = req.body;
  try {
    const course = await Course.findById(course_id);
    if (!course) {
      return res.status(404).json({ message: "Course Not Found!" });
    }
    const student = await Student.findById(student_id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found!" });
    }
    const alreadyExists = student.wishList.includes(course_id);
    if (alreadyExists) {
      return res.status(400).json({ message: "Course already in wish list" });
    }
    student.wishList.push(course_id);
    await student.save();
    res
      .status(200)
      .json({ message: "Course added to cart", wishList: student.wishList });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getWhishListItems = async (req, res) => {
  const { student_id } = req.params;
  try {
    const student = await Student.findById(student_id).populate("wishList");
    if (!student) {
      return res.status(404).json({ message: "Student not Found" });
    }
    res.status(200).json({ whisList: student.wishList });
  } catch (err) {
    return res.status(500).json({ message: "An Error occured:", error: err });
  }
};
export const deleteWishListItem = async (req, res) => {
  const { course_id, student_id } = req.body;

  try {
    // Find the student
    const student = await Student.findById(student_id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if course exists in wishList
    const index = student.wishList.indexOf(course_id);
    if (index === -1) {
      return res.status(404).json({ message: "Course not found in wish list" });
    }

    // Remove the course from wishList
    student.wishList.splice(index, 1);
    await student.save();

    return res.status(200).json({
      message: "Course removed from wish list",
      wishList: student.wishList,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message });
  }
};

export const deleteAllWhishListItems = async (req, res) => {
  const { student_id } = req.body;
  try {
    const student = await Student.findById(student_id).populate("wishList");
    if (!student) {
      return res.status(404).json({ message: "Student not Found" });
    }

    student.wishList = [];
    await student.save();

    return res
      .status(200)
      .json({ message: "All Items are removed Successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An Error occurred", error: err.message });
  }
};
