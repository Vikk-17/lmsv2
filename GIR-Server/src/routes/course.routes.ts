import express from "express";
// import moduleRoutes from "./module.routes";
import {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller";
const router=express.Router()

router.route("/").get(getAllCourses).post(createCourse);
// router.use("/:courseid/modules", moduleRoutes);
router
  .route("/:courseid")
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);

export default router;