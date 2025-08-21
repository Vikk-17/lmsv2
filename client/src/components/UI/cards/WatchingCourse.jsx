import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const WatchingCourse = ({ course }) => {
  return (
    <div className="w-[350px] flex-shrink-0 bg-[var(--clr-accent-200)] rounded-xl p-5">
      {/* Image + Title */}
      <div className="flex gap-x-4">
        <div className="h-16 w-16 rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src="./images/img1.jpg"
            alt="course_img"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <h6>{course.title}</h6>
          <span className="text-md font-bold text-gray-500 uppercase">
            {course.category}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="flex flex-col gap-2.5 mt-5 mb-6">
        <div className="w-full h-4 bg-[var(--clr-accent-400)] rounded-xl">
          <div
            className="h-4 bg-gradient-to-r from-[#8D9BF2] to-[#455CE9] rounded-xl"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="inline-flex items-center gap-x-1">
            <svg className="w-5 h-5">
              <use href="./icons/mcource.svg#cr3"></use>
            </svg>
            {course.lessons}
          </span>
          <span className="inline-flex items-center gap-x-1">
            <svg className="w-5 h-5">
              <use href="./icons/mcource.svg#cr4"></use>
            </svg>
            {course.hoursLeft}
          </span>
        </div>
      </div>

      {/* Resume Button */}
      <Link
        to="#"
        className="inline-flex text-[var(--clr-accent-900)] font-bold items-center gap-x-2"
      >
        Resume Course
        <FaRegArrowAltCircleRight />
      </Link>
    </div>
  );
};

export default WatchingCourse;
