import CourseProgress from "../models/progress.model.js";
import Course from "../models/course.model.js";

// GET: Get progress for a specific user and course
export const getCourseProgress = async (req, res) => {
  const { userId, courseId } = req.params;
  try {
    const progress = await CourseProgress.findOne({ userId, courseId });
    if (!progress) {
      return res.status(404).json({ message: "Progress not found." });
    }
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Post: Update progress for a specific lecture
export const updateLectureProgress = async (req, res) => {
  const { userId, courseId, lectureId } = req.body;

  try {
    let progress = await CourseProgress.findOne({ userId, courseId });

    if (!progress) {
      // If progress doesn't exist, create a new one
      progress = new CourseProgress({
        userId,
        courseId,
        completed: false,
        completionDate: new Date(), // Placeholder; will be updated when course is completed
        lectureProgress: [],
      });
    }

    const lectureIndex = progress.lectureProgress.findIndex(
      (lec) => lec.lectureId === lectureId
    );

    if (lectureIndex !== -1) {
      progress.lectureProgress[lectureIndex].viewed = true;
    } else {
      progress.lectureProgress.push({ lectureId, viewed: true });
    }

    await progress.save();
    res.json({ message: "Lecture progress updated.", progress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT: Mark entire course as completed
export const markCourseCompleted = async (req, res) => {
  const { userId, courseId } = req.params;
  try {
    let progress = await CourseProgress.findOne({ userId, courseId });

    if (!progress) {
      return res.status(404).json({ message: "Progress not found." });
    }

    progress.completed = true;
    progress.completionDate = new Date();

    await progress.save();
    res.json({ message: "Course marked as completed.", progress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
