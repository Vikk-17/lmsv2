import React, { useState } from "react";
import DailyStreak from "../components/UI/cards/DailyStreak";
import WatchTime from "../components/UI/cards/WatchTime";
import GreetingCard from "../components/UI/cards/GreetingCard";
import CoursesCarousel from "../components/UI/components/CourseCarousel";
import Recommended from "../components/UI/components/Recommended";
import { X, BarChart3 } from "lucide-react";

function StudentDash() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-x-6">
      {/* Main Content */}
      <div className="w-full overflow-hidden">
        <GreetingCard />
        <CoursesCarousel />
        <section className="space-y-5">
          <h5 className="">Recommended Courses For You</h5>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <Recommended />
            <Recommended />
            <Recommended />
            <Recommended />
          </div>
        </section>
      </div>

      {/* Sidebar (Desktop) */}
      <div className="hidden lg:block h-fit px-7.5 py-6 sticky top-0 bg-white rounded-xl border-2 border-[var(--clr-accent-400)]/50">
        <DailyStreak />
        <WatchTime />
      </div>

      {/* Floating Button (Mobile only) */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 p-4 rounded-full bg-[var(--clr-accent-900)] text-white shadow-lg"
      >
        <BarChart3 className="w-6 h-6" />
      </button>

      {/* Sidebar Modal (Mobile) */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative ml-auto w-full max-w-fit h-full bg-white shadow-xl animate-slide-in  ">
            {/* Slide-in Panel */}
            <div className="flex flex-col gap-6 h-screen overflow-y-auto mt-14 p-7 pt-3 border-t border-gray-200 ">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              <DailyStreak />
              <WatchTime />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDash;
