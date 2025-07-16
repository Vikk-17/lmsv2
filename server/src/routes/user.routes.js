import express from "express";
import {
  getUser,
  getOtp,
  signupOtpValidateUser,
  changePassword,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUser);
router.post("/get-otp-forgetpassword", getOtp);
router.post("/validate-otp-forgot-password", signupOtpValidateUser);
router.post("/change-password", changePassword);

export default router;
