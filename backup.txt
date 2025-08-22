import React from "react";
import { Menu } from "lucide-react";

function Dashnav({ setSidebarOpen }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-12">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-800" />
          </button>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center space-x-2 border border-[var(--clr-accent-400)] text-gray-400 text-sm rounded-full px-3 py-2 w-64">
            <i className="ri-search-line text-lg font-bold"></i>
            <input
              type="text"
              className="text-md bg-transparent outline-none flex-1"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative p-1 text-white bg-[var(--clr-accent-900)] hover:bg-[var(--clr-primary-900)] rounded-full transition-colors duration-300 ease-in-out"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-notification-3-line"></i>
            </div>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <button
            type="button"
            className="relative p-1 text-white bg-[var(--clr-accent-900)] hover:bg-[var(--clr-primary-900)] rounded-full transition-colors duration-300 ease-in-out"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-mail-line"></i>
            </div>
          </button>

          <div className="border-1 border-gray-300 h-8 rounded-full"></div>

          <button type="button" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="./images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-md font-bold text-[var(--clr-primary-900)]">
              David
            </span>
            <i className="ri-arrow-down-s-line text-[var(--clr-primary-900)]"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Dashnav;
