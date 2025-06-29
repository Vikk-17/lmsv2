import { Schema, model, Document, Types } from "mongoose";

interface IAnswer {
  questionId: Types.ObjectId;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

export interface IQuizAttempt extends Document {
  assignment: Types.ObjectId;
  student: Types.ObjectId;
  answers: IAnswer[];
  createdAt?: Date;
  updatedAt?: Date;
}

const answerSchema = new Schema<IAnswer>({
  questionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  selectedAnswer: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
});

const quizAttemptSchema = new Schema<IQuizAttempt>(
  {
    assignment: {
      type: Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    answers: [answerSchema],
  },
  { timestamps: true }
);

const QuizAttempt = model<IQuizAttempt>("QuizAttempt", quizAttemptSchema);
export default QuizAttempt;
