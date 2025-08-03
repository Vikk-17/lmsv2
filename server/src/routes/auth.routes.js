import express from "express";
import passport from "passport";
import "../config/passport.config.js";
import { login, register } from "../controllers/auth.controller.js";
import { validateUser } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../validators/auth.validator.js";
import { sendEmailController } from "../controllers/auth.controller.js";

import { signupOtpValidate } from "../controllers/auth.controller.js";
import {
  logout,
  googleLoginController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", validateUser(registerSchema), register);
router.post("/login", validateUser(loginSchema), login);
router.post("/send-otp-student-mail", sendEmailController);
router.post("/validate-otp-signup-student", signupOtpValidate);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// Callback route

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  googleLoginController
);

router.get("/logout", logout);
export default router;
