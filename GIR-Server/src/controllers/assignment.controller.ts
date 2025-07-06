import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create assignment
export const createAssignment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseId, title, description, questions, createdById } = req.body;

if (!courseId || !title || !createdById || !Array.isArray(questions)) {
  res.status(400).json({ message: "Missing required fields" });
  return;
}

const instructorExists = await prisma.instructor.findUnique({
  where: { id: createdById }
});

if (!instructorExists) {
  res.status(404).json({ message: "Instructor not found" });
  return;
}

    const assignment = await prisma.assignment.create({
      data: {
        title,
        description,
        course: { connect: { id: courseId } },
        instructor: { connect: { id: createdById } },
        questions: {
          create: questions.map((q: any) => ({
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          })),
        },
      },
      include: {
        questions: true,
      },
    });

    res.status(201).json({ message: "Assignment created", assignment });
  } catch (err: any) {
    res.status(500).json({ message: "Error creating assignment", error: err.message });
  }
};

// Get all assignments by course
export const getAssignmentsByCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courseId = Number(req.params.courseId);
    if (isNaN(courseId)) {
      res.status(400).json({ message: "Course ID is required in params" });
      return;
    }

    const assignments = await prisma.assignment.findMany({
      where: { courseId },
      include: { course: true, questions: true },
    });

    if (!assignments.length) {
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
    const assignmentId = req.params.assignmentId;

    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId },
      include: { questions: true },
    });

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

    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student) {
      res.status(404).json({ message: "Student not found." });
      return;
    }

    const assignment = await prisma.assignment.findUnique({
      where: { id: assignmentId },
      include: { questions: true },
    });

    if (!assignment) {
      res.status(404).json({ message: "Assignment not found." });
      return;
    }

    const alreadyAttempted = await prisma.quizAttempt.findFirst({
      where: {
        studentId,
        assignmentId,
      },
    });

    if (alreadyAttempted) {
      res.status(400).json({ message: "You already attended assignment" });
      return;
    }

    const question = assignment.questions.find(q => q.id === questionId);
    if (!question) {
      res.status(404).json({ message: "Question not found." });
      return;
    }

    const isCorrect = question.correctAnswer === selectedAnswer;

    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        student: { connect: { id: studentId } },
        assignment: { connect: { id: assignmentId } },
        answers: {
          create: {
            question: { connect: { id: questionId } },
            selectedAnswer,
            correctAnswer: question.correctAnswer,
            isCorrect,
          },
        },
      },
    });

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
