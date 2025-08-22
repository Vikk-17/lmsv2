import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from "../components/UI/components/Sidebar";
import Dashnav from "../components/UI/components/Dashnav";

function DashboardLayout() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex relative add-new--lesson">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 transition-all duration-300 overflow-hidden sm:ml-20">
        <Dashnav setSidebarOpen={setSidebarOpen}  />
        <main className="py-10 overflow-y-auto sec-wrap bg-[#f8f8ff]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
