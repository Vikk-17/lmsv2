const mongoose = require("mongoose");

const LectureProgressSchema = new mongoose.Schema({
    lectureId: {
        type: String,
        required: true,
    },
    viewed: Boolean,
});

const CourseProgressSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    courseId: {
        type: String,
        required: true,
    },
    completed: Boolean,
    completionDate: {
        type: Date,
        required: true,
    },
    lectureProgress: [LectureProgressSchema],
});

const CourseProgress = mongoose.model("CourseProgress", CourseProgressSchema);

module.exports = CourseProgress;
