import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function GreetingCard() {
  return (
    <section className="relative bg-[var(--clr-accent-900)] text-white px-5 rounded-xl flex justify-between overflow-hidden">
      {/* Gradient shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t max-[500px]:bg-gradient-to-r from-black/40 to-transparent rounded-xl pointer-events-none"></div>

      <div className="flex flex-col gap-y-8 py-7 relative z-10">
        <div className="space-y-0.5">
          <p>Welcome Back,</p>
          <h4 className="text-white">Sumit Devs</h4>
        </div>
        <span>
          Go back to the &nbsp;
          <a
            className="inline-flex gap-x-1 underline items-center"
            href="/"
          >
            Home
            <FaArrowUpRightFromSquare className="text-sm" />
          </a>
        </span>
      </div>

      <img
        src="./images/greeting.svg"
        alt=""
        className="max-[500px]:absolute max-[500px]:opacity-35 right-3 relative z-10 "
      />
    </section>
  );
}

export default GreetingCard;
