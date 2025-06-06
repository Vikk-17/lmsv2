import teacherApply from "../models/teacherApply.model.js";
import User from "../models/user.model.js";
import { insertUser, findUserByEmail } from "../services/db/user.service.js";

export const registerInstructor = async (req, res) => {
  try {
    const data = req.body;
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    const user = await insertUser({ ...data, role: "trainer" });
    res.status(201).json({
      message: "register successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({ message: "internal error", error: error });
  }
};

export const instructorApply = async (req, res) => {
  try {
    const { name, phoneNumber, email, address } = req.body;

    //Name Check
    if (!name || !phoneNumber || !email) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide all required fields: name, phoneNumber and email",
      });
    }
    const isEmailExist = await User.findOne({ email });
    if (isEmailExist) {
      return res.status(400).json({
        success: false,
        message: "This email already existsing",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const isAppliedTeacher = await teacherApply.findOne({
      email: normalizedEmail,
    });
    if (isAppliedTeacher) {
      return res.status(400).json({
        success: false,
        message: "This email already exists",
      });
    }
    const isPhoneExist = await teacherApply.findOne({ phoneNumber });
    if (isPhoneExist) {
      return res.status(400).json({
        success: false,
        message: "Phone Number exist",
      });
    }

    const instructorData = {
      name,
      phoneNumber,
      email,
      address,
      success: true,
      submit: true,
    };

    const newInstructorData = await teacherApply.create(instructorData);
    return res.status(201).json({
      success: true,
      message: "Instructor application submitted successfully",
      data: newInstructorData,
    });
  } catch (error) {
    console.error("Error making apply teach:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
