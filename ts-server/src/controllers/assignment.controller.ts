import { Request, Response } from "express";
import Course from "../models/course.model";
import Assignment from "../models/assignment.model";
import Student from "../models/student.model";
import QuizAttempt from "../models/quizAttemt.model";

// Create assignment
export const createAssignment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId, title, description, questions, createdBy } = req.body;

    const courseExists = await Course.findById(courseId);
    if (!courseExists) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    const newAssignment = new Assignment({
      course: courseId,
      title,
      description,
      questions,
      createdBy,
    });

    await newAssignment.save();

    res.status(201).json({ message: "Assignment created", assignment: newAssignment });
  } catch (err: any) {
    res.status(500).json({ message: "Error creating assignment", error: err.message });
  }
};

// Get all assignments by course
export const getAssignmentsByCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      res.status(400).json({ message: "Course ID is required in params" });
      return;
    }

    const assignments = await Assignment.find({ course: courseId }).populate("course");

    if (!assignments || assignments.length === 0) {
      res.status(404).json({ message: "No assignments found for this course" });
      return;
    }

    res.status(200).json(assignments);
  } catch (err: any) {
    res.status(500).json({ message: "Error fetching assignments", error: err.message });
  }
};

// Get assignment by ID
export const getAssignmentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { assignmentId } = req.params;

    if (!assignmentId) {
      res.status(400).json({ message: "assignmentId is required." });
      return;
    }

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      res.status(404).json({ message: "Assignment not found." });
      return;
    }

    res.status(200).json({ message: "Assignment fetched successfully.", assignment });
  } catch (err: any) {
    res.status(500).json({ message: "Error fetching assignment.", error: err.message });
  }
};

// Attend a quiz
export const attendQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentId, assignmentId, questionId, selectedAnswer } = req.body;

    if (!studentId || !assignmentId || !questionId || !selectedAnswer) {
      res.status(400).json({
        message: "studentId, assignmentId, questionId, and selectedAnswer are required.",
      });
      return;
    }

    const student = await Student.findById(studentId);
    if (!student) {
      res.status(404).json({ message: "Student not found." });
      return;
    }

    const assignment = await Assignment.findById(assignmentId);
    if (!assignment) {
      res.status(404).json({ message: "Assignment not found." });
      return;
    }

    const alreadyAttempted = await QuizAttempt.findOne({
      student: studentId,
      assignment: assignmentId,
    });

    if (alreadyAttempted) {
      res.status(400).json({ message: "You already attended assignment" });
      return;
    }

    const question = assignment.questions.id(questionId);
    if (!question) {
      res.status(404).json({ message: "Question not found." });
      return;
    }

    const isCorrect = question.correctAnswer === selectedAnswer;

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
  } catch (err: any) {
    res.status(500).json({ message: "Error while processing quiz attempt", error: err.message });
  }
};
