import express from "express";
import { registerInstructor } from "../controllers/instructor.controller";
import { validateUser } from "../middlewares/validate.middleware";
import { registerSchema } from "../validators/auth.validator";

import { instructorApply } from "../controllers/instructor.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello from instructor" });
});

// router.post('/register',validateUser(registerSchema),registerInstructor);

router.post("/instructor-apply", instructorApply);

export default router;
