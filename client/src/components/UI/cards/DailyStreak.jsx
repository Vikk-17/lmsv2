import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DailyStreak() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = ["S", "M", "T", "W", "T", "F", "S"];

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
    <div className="w-full text-[var(--clr-primary-900)] max-w-xs bg-white mb-7">
      <div className="flex justify-between pb-3 mb-5 border-b border-gray-200">
        <span className="text-md font-bold">Daily Streak</span>
        <span className="text-md font-bold">12:00 PM</span>
      </div>

      <div className="flex justify-between items-center mb-5">
        <button
          className="inline-flex w-8 h-8 rounded-full bg-[var(--clr-primary-900)] hover:bg-[var(--clr-accent-900)] items-center justify-center"
          onClick={nextMonth}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <span className="text-base font-bold text-gray-800">
          {currentDate.toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentDate.getFullYear()}
        </span>
        <button
          className="inline-flex w-8 h-8 rounded-full bg-[var(--clr-accent-900)] hover:bg-[var(--clr-primary-900)] items-center justify-center"
          onClick={prevMonth}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-[11px] text-center text-sm font-semibold text-gray-600 mb-2 ">
        {days.map((day) => (
          <div
            key={day}
            className="w-8 h-8 flex items-center justify-center rounded-full"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-x-[11px] gap-y-1 text-center">
        {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} className="w-8 h-8" />
        ))}
        {Array.from({ length: totalDays }).map((_, idx) => (
          <div
            key={idx}
            className="w-8 h-8 flex items-center justify-center text-sm rounded-full hover:bg-[var(--clr-accent-200)] cursor-pointer"
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
