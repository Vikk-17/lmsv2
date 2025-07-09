import Course from "../../models/course.model.js";
import Category from "../../models/category.model.js";

export const findAllCourses = async () => {
  return await Course.find()
  .populate({
    path: 'instructor',
    select: '',
    populate: {
    path: 'user',
    model: 'User',
    select: 'name'
  }
  })
  .populate('category')
};
export const insertIntoCourse = async (CourseData) => {
  return await Course.create(CourseData);
};

export const findCourseById = async (CourseId) => {
  return await Course.findById(CourseId).populate("module");
};
export const updateCourseById = async (CourseId, updateData) => {
  return await Course.findByIdAndUpdate(CourseId, updateData, { new: true });
};
export const deleteCourseById = async (CourseId) => {
  return await Course.findByIdAndDelete(CourseId);
};
