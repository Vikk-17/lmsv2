import express from "express"
const router=express.Router()
import {
  createAssignment,
  getAssignmentsByCourse,
  attendQuiz,
  getAssignmentById,
} from "../controllers/assignment.controller"

router.get("/get-assignment/:courseId", getAssignmentsByCourse);
router.get("/:assignmentId", getAssignmentById);
router.post("/create-assignment", createAssignment);
router.post("/attend-quiz", attendQuiz);
export default router