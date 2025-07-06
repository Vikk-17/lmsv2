import express from "express";
import {  registerUser,loginUser } from "../controllers/auth.controller";

import { sendEmailController } from "../controllers/auth.controller";

import { signupOtpValidate } from "../controllers/auth.controller";

import {registerSchema,loginSchema} from "../validator/auth.validator"
import { validateUser } from "../middleware/validate.middleware";

const router = express.Router();

router.post("/register", validateUser(registerSchema),registerUser );
router.post("/login", validateUser(loginSchema), loginUser);
router.post("/send-otp-student-mail", sendEmailController);
router.post("/validate-otp-signup-student", signupOtpValidate);

export default router;
