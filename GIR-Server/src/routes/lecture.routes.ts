import express from "express";
import {
  addLecture,
  getLecturesByCourse,
  updateLecture,
  deleteLecture
} from "../controllers/lecture.controller";

const router = express.Router();

router.post("/add-lecture", addLecture); 
router.get("/course/:courseId", getLecturesByCourse); 
router.put("/update-lecture/:lectureId", updateLecture); 
router.delete("/delete-lecture/:lectureId", deleteLecture); 

export default router;
