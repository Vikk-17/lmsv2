// can add course
// can get details of course
// can update course

const express = require("express");
const router = express.Router();

const {
    getAllCourses,
    getDetailsById,
    addCourse,
    updateCourseById
} = require("../../controllers/instructor-controllers/course.controller");


router.get("/get", getAllCourses);
router.get("/get/:id", getDetailsById);
router.post("/add", addCourse);
router.put("/update/:id", updateCourseById);

module.exports = router;
