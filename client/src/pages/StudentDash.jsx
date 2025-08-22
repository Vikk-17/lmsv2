import React, { useState } from "react";
import GreetingCard from "../components/UI/cards/GreetingCard";
import CoursesCarousel from "../components/UI/components/CourseCarousel";
import Recommended from "../components/UI/components/Recommended";
import SidebarStats from "../components/UI/components/SidebarStats";

function StudentDash() {
  

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

      {/* Sidebar Component */}
      <SidebarStats />
    </div>
  );
}

export default StudentDash;
