import express from "express";

import {
  createAssignment,
  getAssignmentsByCourse,
  attendQuiz,
  getAssignmentById,
  updateAssignmentByCourse,
  deleteAssignmentByCourse,
} from "../controllers/assignment.controller.js";
const router = express.Router();

router.get(" /:courseId", getAssignmentsByCourse);
router.get("/:assignmentId", getAssignmentById);
router.put("/:courseId/:assignmentId", updateAssignmentByCourse);

router.delete("/:courseId/:assignmentId", deleteAssignmentByCourse);
router.post("/create-assignment", createAssignment);
router.post("/attend-quiz", attendQuiz);

export default router;
