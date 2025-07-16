import teacherApply from "../models/teacherApply.model.js";
import User from "../models/user.model.js";
import { insertUser, findUserByEmail } from "../services/db/user.service.js";

export const getInstructorDetails = async (req, res) => {
  const { instructorId } = req.params;
  try {
    if (!instructorId) {
      return res.status(404).json({ message: "No instructor id found" });
    }
    const userDetails = await User.findById(instructorId).select("-password");
    if (!userDetails) {
      return res
        .status(404)
        .json({ message: "No instructor found with this id" });
    }
    res.status(200).json(userDetails);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

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
    const { name, phoneNumber, email, address, bio } = req.body;

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
      bio,
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

export const updateDetails = async (req, res) => {
  try {
    const { instructorId, name, phoneNumber, email, address, bio } = req.body;

    if (!instructorId) {
      return res.status(400).json({ message: "Instructor ID not provided" });
    }

    // If no fields are provided
    if (!name && !phoneNumber && !email && !address && !bio) {
      return res
        .status(400)
        .json({ message: "Nothing to update. All fields are empty." });
    }

    // Find the instructor
    const instructorDetails = await User.findById(instructorId);

    if (!instructorDetails) {
      return res.status(404).json({ message: "Instructor not found" });
    }

    // Update only the provided fields
    if (name) instructorDetails.name = name;
    if (phoneNumber) instructorDetails.phoneNumber = phoneNumber;
    if (email) instructorDetails.email = email;
    if (address) instructorDetails.address = address;
    if (bio) instructorDetails.bio = bio;

    const updatedInstructor = await instructorDetails.save();

    res.status(200).json({
      message: "Instructor details updated successfully",
      instructor: {
        _id: updatedInstructor._id,
        name: updatedInstructor.name,
        email: updatedInstructor.email,
        phoneNumber: updatedInstructor.phoneNumber,
        address: updatedInstructor.address,
        bio: updatedInstructor.bio,
        role: updatedInstructor.role,
      },
    });
  } catch (error) {
    console.error("Error updating instructor details:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
