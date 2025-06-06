import express from "express";
import {
  registerAdmin,
  getInstructorApplication,
  instructorReject,
  createTeacher,
} from "../controllers/admin.controller.js";
import { validateUser } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validators/auth.validator.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello from admin" });
});

router.post("/register", validateUser(registerSchema), registerAdmin);

router.get("/get-teacher-apply", getInstructorApplication);
router.post("/teacher-reject", instructorReject);
router.post("/create-teacher", createTeacher);

export default router;
