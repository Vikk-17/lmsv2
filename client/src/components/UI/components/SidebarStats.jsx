import React, { useState } from "react";
import DailyStreak from "../cards/DailyStreak";
import WatchTime from "../cards/WatchTime";
import { X, BarChart3 } from "lucide-react";

function SidebarStats() {

    const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sidebar (Desktop) */}
      <div className="hidden lg:block h-fit px-7.5 py-6 sticky top-0 bg-white rounded-xl border-2 border-[var(--clr-accent-200)]/50">
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

          <div className="relative ml-auto w-full max-w-fit h-full bg-white shadow-xl animate-slide-in">
            {/* Slide-in Panel */}
            <div className="flex flex-col gap-6 h-screen overflow-y-auto mt-14 p-7 pt-3 border-t border-gray-200">
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
    </>
  );
}

export default SidebarStats;
