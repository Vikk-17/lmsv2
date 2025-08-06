import React from 'react'
import { MdDataExploration } from "react-icons/md";
import Line from '../shapes/Line';
function WhyChooseCard() {
  return (
    <div className="flex flex-col gap-y-6 bg-[var(--clr-accent-100)] p-8 rounded-sm ">
      <div className='w-8 h-10'>
        <img className='w-full h-full object-contain' src="/icons/icon-list.svg" alt="" />
      </div>
      <div className='flex flex-col gap-y-4'>
        <h5>Expert-Led Learning</h5>
        <p className='text-[var(--clr-primary-400)]'>At GIR Technologies, industry experts lead training, blending real-world cybersecurity and IT experience to ensure you gain practical, job-ready skills beyond theory.</p>
      </div>
    </div>
  )
}

export default WhyChooseCard