import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function WatchingCourse() {
  return (
    <div className='bg-[var(--clr-accent-200)] rounded-xl px-6 py-4 shadow '>
        <div className='flex gap-x-4'>
            <div className='h-16 w-16 rounded-xl overflow-hidden'>
                <img className='h-full w-full object-fit' src="./images/img1.jpg" alt="" />
            </div>
            <div className=''>
                <h6>Advance UI/UX Design</h6>
                <span className='text-gray-500'>Design</span>
            </div>
        </div>
        <div className='w-full h-4 bg-[var(--clr-accent-400)] rounded-xl mt-6 mb-2'>
            <div className='w-[60%] h-4 bg-blue-500 rounded-xl'></div>
        </div>
        <div className='flex justify-between '>
            <span className='inline-flex items-center gap-x-1 text-gray-500'>
                <svg className=" w-6 h-6 ">
                    <use href="./icons/mcource.svg#cr3"></use>
                </svg>
                18/40 Lessons
            </span>
            <span className='inline-flex items-center gap-x-1 text-gray-500'>
                <svg className=" w-6 h-6 ">
                    <use href="./icons/mcource.svg#cr4"></use>
                </svg>
                6 hours left
            </span>
        </div>
        <Link to='#' className='mt-4 inline-flex text-[var(--clr-accent-900)] font-medium items-center gap-x-2'>
        Resume Course
        <FaRegArrowAltCircleRight />
        </Link>
    </div>
  )
}

export default WatchingCourse