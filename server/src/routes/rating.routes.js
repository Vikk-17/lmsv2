import express from "express";
import { rateCourse } from "../controllers/rating.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Protected route to rate a course
router.post("/rate/:courseId", authenticate, rateCourse);

export default router;
