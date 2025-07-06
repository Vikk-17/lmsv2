import express from "express";
import {getInstructorApplication,instructorReject,registerAdmin,createTeacher} from "../controllers/admin.controller"
import { validateUser } from "../middleware/validate.middleware";

import {registerSchema} from "../validator/auth.validator"
const router=express.Router()


router.post("/register-admin", validateUser(registerSchema), registerAdmin);
router.get("/get-instructor-apply", getInstructorApplication);
router.post("/instructor-reject", instructorReject);
router.post("/create-instructor", createTeacher);
export default router