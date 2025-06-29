import express from "express";
import { login, register } from "../controllers/auth.controller";
import { validateUser } from "../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../validators/auth.validator";
import { sendEmailController } from "../controllers/auth.controller";

import { signupOtpValidate } from "../controllers/auth.controller";

const router = express.Router();

router.post("/register", validateUser(registerSchema), register);
router.post("/login", validateUser(loginSchema), login);
router.post("/send-otp-student-mail", sendEmailController);
router.post("/validate-otp-signup-student", signupOtpValidate);

export default router;
