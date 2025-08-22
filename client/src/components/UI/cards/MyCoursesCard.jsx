import React from "react";
import {
  Star,
  CheckCircle,
  Clock,
  BookOpen,
  Calendar,
  Award,
} from "lucide-react";

// ---- Courses Data ----
export const courses = [
  {
    id: 1,
    name: "Graphic Design",
    status: "active",
    description: "Learn to create stunning visuals and designs professionally.",
    lessons: { completed: 18, total: 40 },
    timeLeft: "2 hours left",
    rating: 5.0,
    author: "Amar Kr",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1721225465446-02f5b991a37f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Cyber Security",
    status: "upcoming",
    description: "Learn to protect systems from cyber security threats.",
    startDate: "May 6",
    lessons: { completed: 0, total: 40 },
    rating: 5.0,
    author: "Amar Kr",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1700502264441-cf38978031fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Machine Learning",
    status: "completed",
    description: "Data learns from experience, improving decisions over time.",
    completionDate: "06/2025",
    rating: 5.0,
    author: "Amar Kr",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677094310918-cc302203b21c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Web Development",
    status: "active",
    description: "Master the skills to build modern websites and applications.",
    lessons: { completed: 10, total: 50 },
    timeLeft: "5 hours left",
    rating: 4.8,
    author: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Data Science",
    status: "saved",
    description: "Explore the world of data with hands-on projects.",
    startDate: "June 1",
    lessons: { completed: 0, total: 60 },
    rating: 4.9,
    author: "Jane Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ---- MyCoursesCard Component ----
const MyCoursesCard = ({ course }) => {
  const getStatusContent = () => {
    switch (course.status) {
      case "active":
        return (
          <>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <BookOpen size={16} />
              <span>
                {course.lessons.completed}/{course.lessons.total} Lessons
              </span>
              <Clock size={16} className="ml-2" />
              <span>{course.timeLeft}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div
                className="bg-[var(--clr-accent-900)] h-1.5 rounded-full"
                style={{
                  width: `${
                    (course.lessons.completed / course.lessons.total) * 100
                  }%`,
                }}
              ></div>
            </div>
          </>
        );
      case "upcoming":
      case "saved":
        return (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>
              Start:{" "}
              <strong className="text-gray-900">{course.startDate}</strong>
            </span>
            <BookOpen size={16} className="ml-2" />
            <span>{course.lessons.total} Lessons</span>
          </div>
        );
      case "completed":
        return (
          <div className="flex items-center space-x-4 text-sm text-green-600 font-medium">
            <div className="flex items-center space-x-1">
              <CheckCircle size={16} className="text-green-500" />
              <span>Completed {course.completionDate}</span>
            </div>
            <a
              href="#"
              className="flex items-center space-x-1 text-[var(--clr-accent-900)] hover:underline"
            >
              <Award size={16} />
              <span>Certificate</span>
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex max-[500px]:flex-col max-[500px]:gap-4 bg-white rounded-xl shadow-md p-4 space-x-4">
      <img
        src={course.imageUrl}
        alt={course.name}
        className="w-40 h-auto max-[500px]:w-full max-[500px]:h-40 object-cover rounded-lg"
      />
      <div className="flex-1 flex flex-col ">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex justify-between w-full">
            <h3 className="text-xl text-gray-900">{course.name}</h3>
            <div className="flex items-center space-x-1 ml-4 text-sm text-gray-800">
              <Star size={16} fill="currentColor" className="text-yellow-400" />
              <span className="font-semibold">{course.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-gray-600">{course.description}</p>
        </div>

        <div className="flex flex-col justify-between items-start ">
          <span className="text-sm font-medium text-gray-600 mb-4">
            By: {course.author}
          </span>
          {getStatusContent()}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
