
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DailyStreak() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const totalDays = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );

  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );

  return (
    <div className="w-full text-[var(--clr-primary-900)] max-w-md mx-auto p-4   bg-white">
      <div className="flex justify-between py-2 mb-6 border-b border-gray-200">
        <span>Daily Streak</span>
        <span>12:00 PM</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button className="inline-flex w-8 h-8 rounded-full bg-[var(--clr-primary-900)] hover:bg-[var(--clr-accent-900)] items-center justify-center" onClick={nextMonth}>
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <p className="text-base font-bold text-gray-800">
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentDate.getFullYear()}
        </p>
        <button className="inline-flex w-8 h-8 rounded-full bg-[var(--clr-accent-900)] items-center justify-center" onClick={prevMonth}>
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="grid  grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600 mb-2">
        {days.map((day) => (
          <div className="p-2 border border-gray-300 rounded-lg "  key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} />
        ))}
        {Array.from({ length: totalDays }).map((_, idx) => (
          <div
            key={idx}
            className="p-2 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer"
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
