import express from "express";

import {
  createAssignment,
  getAssignmentsByCourse,
  attendQuiz,
  getAssignmentById,
} from "../controllers/assignment.controller.js";
const router = express.Router();

router.post("/create-assignment", createAssignment);
router.get("/get-assignment/:courseId", getAssignmentsByCourse);
router.post("/attend-quiz", attendQuiz);
router.get("/:assignmentId", getAssignmentById);

export default router;
