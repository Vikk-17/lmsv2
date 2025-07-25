import Rating from "../models/rating.model.js";
import Course from "../models/course.model.js";

export const rateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { rating } = req.body;
    const userId = req.user._id;

    if (!rating || rating < 1 || rating > 5) {
      return res
        .status(400)
        .json({ message: "Rating must be between 1 and 5" });
    }

    const courseExists = await Course.findById(courseId);
    if (!courseExists) {
      return res.status(404).json({ message: "Course not found" });
    }

    const updatedRating = await Rating.findOneAndUpdate(
      { user: userId, course: courseId },
      { rating },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      message: "Rating submitted successfully",
      rating: updatedRating,
    });
  } catch (error) {
    console.error("Rating error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
