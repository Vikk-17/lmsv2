import Course from "../models/course.model.js";
import Assignment from "../models/assignment.model.js";

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
    const { assignmentId, questionIndex, selectedAnswer } = req.body;

    if (!assignmentId || questionIndex === undefined || !selectedAnswer) {
      return res.status(400).json({
        message:
          "assignmentId, questionIndex, and selectedAnswer are required.",
      });
    }

    const assignment = await Assignment.findById(assignmentId);

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found." });
    }

    const question = assignment.questions[questionIndex];

    if (!question) {
      return res
        .status(404)
        .json({ message: "Question not found at given index." });
    }

    const isCorrect = question.correctAnswer === selectedAnswer;

    res.json({
      question: question.questionText,
      options: question.options,
      selectedAnswer,
      correctAnswer: question.correctAnswer,
      result: isCorrect ? "Correct" : "Wrong",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error while checking quiz answer",
      error: err.message,
    });
  }
};
