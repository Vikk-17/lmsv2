import React from 'react'

function CourseCard() {
  return (
    <div className="flex flex-col">
        <div className='relative '>
            <div className='overflow-hidden rounded-t-2xl'>
            <img className='w-full h-full object-contain' src="/images/img2.jpg" alt="" />
            </div>
            <div className='absolute bg-[var(--clr-accent-900)] rounded-2xl flex items-center gap-x-2 px-4 py-1 -bottom-4 right-4'>
            <img className='h-6 w-6' src="/icons/star.svg" alt="" />
            <span>4.9</span>
            </div>
        </div>
        <div className='px-4 pt-4'>
            <div>
            <div className='flex items-center gap-x-2'>
                <div className='h-10 w-10 overflow-hidden rounded-full '>
                <img className=' h-full w-full object-cover ' src="/images/prof1.jpg" alt="" />
                </div>
                <p className='text-[var(--clr-primary-400)]'>sumitDevs</p>
            </div>
            <h5>Cybersecurity Fundamentals Defend and Detect</h5>
            <div className='flex justify-between gap-y-2'>
                <span className='flex items-center gap-x-2'>
                <svg class="icon w-6 h-6">
                    <use href="/icons/videoicons.svg#iconvid1"></use>
                </svg>
                <p className='text-[var(--clr-primary-200)]'>4 weeks</p>
                </span>
                <span className='flex items-center gap-x-2'>
                <svg class="icon w-6 h-6">
                    <use href="/icons/videoicons.svg#iconvid2"></use>
                </svg>
                <p className='text-[var(--clr-primary-200)]'>20 video</p>
                </span>
                <span className='flex items-center gap-x-2'>
                <svg class="icon w-5 h-5">
                    <use href="/icons/videoicons.svg#iconvid3"></use>
                </svg>
                <p className='text-[var(--clr-primary-200)]'>1900 student</p>
                </span>
            </div>
            </div>
            <div className='flex font-medium justify-between text-[1.18rem] mt-8'>
            <p className='text-[var(--clr-primary-100)]'> <span className='line-through'>₹3,000</span>&nbsp;<span className='text-green-500'>Free</span></p>
            <a href="#" className='text-[var(--clr-accent-900)]' >View More</a>
            </div>
        </div>
    </div>
  )
}

export default CourseCard