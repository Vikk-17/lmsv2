import express from "express";
import moduleRoutes from "./module.routes.js";
import {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  getCourseDetailsById,
  enrollCourse,
  getEnrolledCourses,
  getEnrolledStudents,
} from "../controllers/course.controller.js";
const router = express.Router();

router.route("/").get(getAllCourses).post(createCourse);
router
  .route("/:courseName")
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);
router.get("/getCourseById/:courseId", getCourseDetailsById);
router.use("/:courseid/modules", moduleRoutes);
router.get("/get-enrolled-courses/:studentId", getEnrolledCourses);
router.get("/get-enrolled-students/:courseId", getEnrolledStudents);
router.post("/enroll-now", enrollCourse);
export default router;
