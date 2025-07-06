import express from "express"
import {
  getCourseProgress,
  updateLectureProgress,
  markCourseCompleted,
} from "../controllers/progress.controller";
const router =express.Router()

// Route to get progress for a user and course
router.get("/:userId/:courseId", getCourseProgress);

// Route to update lecture progress (e.g., mark a lecture as viewed)
router.post("/updateprogress", updateLectureProgress);

// Route to mark entire course as completed
router.put("/:userId/:courseId/complete", markCourseCompleted);

export default router