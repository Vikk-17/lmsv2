import mongoose from "mongoose";
import Course from "../models/course.model.js";
import Assignment from "../models/assignment.model.js";
import Student from "../models/student.model.js";
import QuizAttempt from "../models/quizAttemt.model.js";

export const createAssignment = async (req, res) => {
  try {
    const { courseId, title, description, questions, createdBy } = req.body;

    const courseExists = await Course.findById(courseId);
    if (!courseExists) {
      return res.status(404).json({ message: "Course not found" });
    }
    const newAssignment = new Assignment({
      course: courseId,
      title,
      description,
      questions,
      createdBy,
    });

    await newAssignment.save();

    res
      .status(201)
      .json({ message: "Assignment created", assignment: newAssignment });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating assignment", error: err.message });
  }
};

export const updateAssignmentByCourse = async (req, res) => {
  try {
    const { courseId, assignmentId } = req.params;
    const { title, description } = req.body;

    if (!courseId || !assignmentId) {
      return res.status(400).json({ message: "Invalid Parameters" });
    }
    if (!title && !description) {
      return res.status(400).json({ message: "Enter required fields" });
    }
    const isCourseExist = await Course.findById(courseId);
    if (!isCourseExist) {
      return res.status(404).json({ message: "No course found with this id" });
    }
    const isAssignmentExist = await Assignment.findById(assignmentId);
    if (!isAssignmentExist) {
      return res
        .status(404)
        .json({ message: "No assignment found with this id" });
    }
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      {
        title,
        description,
      },
      { new: true }
    );
    if (!updatedAssignment) {
      return res
        .status(500)
        .json({ message: "An Error occured Failed to update Assignment" });
    }
    return res
      .status(200)
      .json({ message: "Successfully updated assignment", updatedAssignment });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error,Failed to update assignment" });
  }
};

export const getAssignmentsByCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    if (!courseId) {
      return res
        .status(400)
        .json({ message: "Course ID is required in params" });
    }

    const assignments = await Assignment.find({ course: courseId }).populate(
      "course"
    );

    if (!assignments || assignments.length === 0) {
      return res
        .status(404)
        .json({ message: "No assignments found for this course" });
    }

    res.status(200).json(assignments);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching assignments",
      error: err.message,
    });
  }
};

export const getAssignmentById = async (req, res) => {
  try {
    const { assignmentId } = req.params;

    if (!assignmentId) {
      return res.status(400).json({ message: "assignmentId is required." });
    }

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found." });
    }

    res.status(200).json({
      message: "Assignment fetched successfully.",
      assignment,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error fetching assignment.",
      error: err.message,
    });
  }
};

export const attendQuiz = async (req, res) => {
  try {
    const { studentId, assignmentId, questionId, selectedAnswer } = req.body;

    if (!studentId || !assignmentId || !questionId || !selectedAnswer) {
      return res.status(400).json({
        message:
          "studentId, assignmentId, questionId, and selectedAnswer are required.",
      });
    }

    // Validate student
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Validate assignment
    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found." });
    }

    // Check if student already attended
    const alreadyAttempted = await QuizAttempt.findOne({
      student: studentId,
      assignment: assignmentId,
    });

    if (alreadyAttempted) {
      return res
        .status(400)
        .json({ message: "You already attended assignment" });
    }

    // Get the question
    const question = assignment.questions.id(questionId);
    if (!question) {
      return res.status(404).json({ message: "Question not found." });
    }

    const isCorrect = question.correctAnswer === selectedAnswer;

    // Save the attempt
    const attempt = new QuizAttempt({
      assignment: assignmentId,
      student: studentId,
      answers: [
        {
          questionId,
          selectedAnswer,
          correctAnswer: question.correctAnswer,
          isCorrect,
        },
      ],
    });

    await attempt.save();

    res.status(200).json({
      message: "Answer submitted",
      question: question.questionText,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      result: isCorrect ? "Correct" : "Wrong",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error while processing quiz attempt",
      error: err.message,
    });
  }
};

export const deleteAssignmentByCourse = async (req, res) => {
  try {
    const { courseId, assignmentId } = req.params;

    if (!courseId || !assignmentId) {
      return res
        .status(400)
        .json({ message: "Missing courseId or assignmentId" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "No course found with this id" });
    }

    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      return res
        .status(404)
        .json({ message: "No assignment found with this id" });
    }

    await Assignment.findByIdAndDelete(assignmentId);

    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error, failed to delete assignment" });
  }
};
