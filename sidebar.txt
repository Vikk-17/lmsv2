import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, X } from "lucide-react";
import useAuthStore from "../../../store/authStore";
import { studentNav, instructorNav } from "../../../data/navData";

const SidebarNav = ({ isOpen, setIsOpen }) => {
  const { user } = useAuthStore();
  const location = useLocation();
  const [navList, setNavList] = useState({});

  // Load nav based on role
  useEffect(() => {
    switch (user?.role) {
      case "student":
        setNavList(studentNav);
        break;
      case "instructor":
        setNavList(instructorNav);
        break;
    }
  }, [user]);

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`group fixed top-0 left-0 bottom-0 z-50 flex flex-col justify-between
          transition-all duration-300 ease-in-out bg-gray-800 p-4 pt-0 border-r border-gray-700
          w-64 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:w-20 sm:hover:w-64
        `}
      >
        <div>
          {/* Logo */}
          <div className="h-16 flex items-center justify-between sm:justify-start mb-6 border-b border-white">
            <Link to="/dashboard">
              <img src="./images/logoo.png" alt="Logo" className="h-9 pl-2" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-white/10 transition sm:hidden"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-1">
            {navList?.main?.map((nav, idx) => (
              <Link
                key={idx}
                to={`/${nav?.slug}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-lg p-3 text-gray-300 hover:bg-gray-700 transition-colors duration-200 space-x-3 ${
                  location.pathname === `/${nav?.slug}` ? "bg-gray-700" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <i className={nav?.icon}></i>
                </div>
                <span className="text-sm font-medium whitespace-nowrap transition-opacity duration-300 ease-in-out sm:opacity-0 sm:group-hover:opacity-100">
                  {nav?.name}
                </span>
              </Link>
            ))}

            {/* Settings Navigation */}
            {navList?.setting?.map((nav, idx) => (
              <Link
                key={idx}
                to={`/${nav?.slug}`}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-lg p-3 text-gray-300 hover:bg-gray-700 transition-colors duration-200 space-x-3 ${
                  location.pathname === `/${nav?.slug}` ? "bg-gray-700" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <i className={nav?.icon}></i>
                </div>
                <span className="text-sm font-medium whitespace-nowrap transition-opacity duration-300 ease-in-out sm:opacity-0 sm:group-hover:opacity-100">
                  {nav?.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="mb-4">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex items-center rounded-lg p-3 text-red-400 hover:bg-gray-700 transition-colors duration-200 space-x-3"
          >
            <div className="flex-shrink-0">
              <LogOut className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium whitespace-nowrap transition-opacity duration-300 ease-in-out sm:opacity-0 sm:group-hover:opacity-100">
              Logout
            </span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default SidebarNav;
