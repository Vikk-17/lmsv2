import express from "express";

import {
  createAssignment,
  getAssignmentsByCourse,
  attendQuiz,
  getAssignmentById,
} from "../controllers/assignment.controller.js";
const router = express.Router();

router.get("/get-assignment/:courseId", getAssignmentsByCourse);
router.get("/:assignmentId", getAssignmentById);
router.post("/create-assignment", createAssignment);
router.post("/attend-quiz", attendQuiz);

export default router;
