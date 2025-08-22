import React, { useState } from "react";
import MyCoursesCard, { courses } from "../cards/MyCoursesCard";

const StuMyCourseSec = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = courses.filter((course) => {
    if (activeTab === "all") return true;
    return (
      course.status === activeTab ||
      (activeTab === "upcoming" && course.status === "upcoming")
    );
  });

  const tabs = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "upcoming", label: "Upcoming" },
    { id: "saved", label: "Saved" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="custom-section bg-gray-100 min-h-screen px-4 py-6">
      <h1 className="text-h5 mb-6 pl-1 text-gray-800">My Courses</h1>

      {/* Tabs (visible on md and up) */}
      <div className="hidden sm:flex mb-6 bg-white rounded-xl p-1 shadow-sm overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-5.5 py-2 text-md font-medium rounded-lg transition-colors
              ${
                activeTab === tab.id
                  ? "bg-[var(--clr-accent-900)] text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dropdown (visible on small screens only) */}
      <div className="sm:hidden mb-6 relative">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="
      appearance-none w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm text-black
      focus:outline-none focus:ring-0 bg-white
    "
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>

        {/* Custom dropdown icon */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Course Cards */}
      <div className="space-y-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <MyCoursesCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No courses found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default StuMyCourseSec;
