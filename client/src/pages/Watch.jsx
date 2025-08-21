import React from 'react'
import Dashnav from '../components/UI/components/Dashnav'

function Watch() {
  return (
    <>
        <Dashnav/>
        <div className='flex pl-4 mt-5'>
            <section id='video-player' className='flex-1/2'>
                <div className=' h-96 rounded-2xl bg-black overflow-hidden'>
                    <video className='w-full h-full object-contain' src=""></video>
                </div>
                <div className='p-10 bg-white mt-2'>
                  <div role='tablist' className='flex font-medium text-lg px-8 border-b-2 border-[var(--clr-primary-100)]'>
                    <button role='tab' aria-selected='false' aria-controls='panel-1' id='tab-1' className='flex gap-x-2 items-center border-b-2 border-transparent hover:border-b-2 hover:border-[var(--clr-accent-900)] px-4 py-3 hover:text-[var(--clr-accent-900)] hover:bg-[var(--clr-accent-200)] '>
                      <svg className="h-6 w-6">
                        <use href="/icons/watch.svg#wicon2"></use>
                      </svg>
                      Overview
                    </button>
                    <button role='tab' aria-selected='false' aria-controls='panel-2' id='tab-2' className='flex gap-x-2 items-center border-b-2 border-transparent hover:border-b-2 hover:border-[var(--clr-accent-900)] px-4 py-3 hover:text-[var(--clr-accent-900)] hover:bg-[var(--clr-accent-200)] '>
                      <svg className="h-6 w-6">
                        <use href="/icons/watch.svg#wicon3"></use>
                      </svg>
                      Q&A
                    </button>
                    <button role='tab' aria-selected='false' aria-controls='panel-3' id='tab-3' className='flex gap-x-2 items-center border-b-2 border-transparent hover:border-b-2 hover:border-[var(--clr-accent-900)] px-4 py-3 hover:text-[var(--clr-accent-900)] hover:bg-[var(--clr-accent-200)] '>
                      <svg className="h-6 w-6">
                        <use href="/icons/watch.svg#wicon9"></use>
                      </svg>
                      Notebook
                    </button>
                    <button role='tab' aria-selected='false' aria-controls='panel-4' id='tab-4' className='flex gap-x-2 items-center border-b-2 border-transparent hover:border-b-2 hover:border-[var(--clr-accent-900)] px-4 py-3 hover:text-[var(--clr-accent-900)] hover:bg-[var(--clr-accent-200)] '>
                      <svg className="h-6 w-6">
                        <use href="/icons/watch.svg#wicon3"></use>
                      </svg>
                      Transcript
                    </button>
                  </div>
                  <div className='mt-8 flex flex-col gap-y-8'  role='tabpanel' id='panel-1' aria-labelledby='tab-1'>
                      <div>
                        <h6>Instructor</h6>
                        <div className='flex gap-x-4 mt-4'>
                          <div className='w-20 h-20 rounded-full overflow-hidden '>
                            <img className='h-full w-full object-cover' src="/images/prof2.jpg" alt="" />
                          </div>
                          <div>
                            <p className='mb-0'>Laura hipster</p>
                            <p className='text-sm'>Tech Educator and Best-selling Author </p>
                            <a href="#" className='flex w-fit px-4 items-center text-[var(--clr-accent-900)] gap-x-2 border rounded-full py-1  mt-2'>
                              <svg className="h-4 w-4">
                                <use href="/icons/watch.svg#wicon6"></use>
                              </svg>
                              Follow on Linkedin
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        <h4>Course details</h4>
                        <div>
                          <p className='flex gap-x-4 text-[var(--clr-primary-400)]'><span>4h 36m</span> <span>Beginner</span> <span>Updated:5/24/2024</span></p>
                          <p className='flex gap-x-2'>
                            <span className='text-lg'>4.8</span>
                            <svg className="h-6 w-6">
                              <use href="./icons/detailsicon.svg#ic8"></use>
                            </svg>
                            <svg className="h-6 w-6">
                              <use href="./icons/detailsicon.svg#ic8"></use>
                            </svg>
                            <svg className="h-6 w-6">
                              <use href="./icons/detailsicon.svg#ic8"></use>
                            </svg>
                            <svg className="h-6 w-6">
                              <use href="./icons/detailsicon.svg#ic8"></use>
                            </svg>
                            <svg className="h-6 w-6">
                              <use href="./icons/detailsicon.svg#ic8"></use>
                            </svg>
                            <span>(5,213)</span>
                          </p>
                          <p>The ubiquity of big data means that now, more than ever, there is a burning need to warehouse, access, and understand the contents of massive databases quickly and efficiently. Attaining proficiency in SQL is essential to prepare for our data-driven present and future.</p>
                        </div>
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        <h4>Learning Objective</h4>
                        <ul className='list-disc list-inside '>
                          <li>Explain how to use inner, left, and right `JOIN` clauses.</li>
                          <li>Define and describe the function of relational databases, SQL, and DB Browser.</li>
                          <li>Explain how to run DB Browser and write rudimentary queries.</li>
                          <li>Demonstrate and explain the utility of views for data analysis.</li>
                        </ul>
                      </div>
                      <div className='flex flex-col gap-y-2'>
                        <h4>Skill Covered</h4>
                        <div className='flex gap-x-4'>
                          <span className='px-4 py-1 border-[var(--clr-accent-900)] border rounded-full'>SQL</span>
                          <span className='px-4 py-1 border-[var(--clr-accent-900)] border rounded-full'>ML</span>
                        </div>
                      </div>
                  </div>
                </div>
            </section>
            <section id='playlist' className='flex-1/2 mx-4'>
              <div className='bg-white p-6'>
                <div className='flex items-start justify-between'>
                  <div className='flex flex-col gap-y-2'>
                      <h5>Course content</h5>
                      <div className='flex gap-x-4 items-center text-sm'>
                        <div className='flex gap-x-1 items-center text-[var(--clr-primary-400)]'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon13"></use>
                          </svg>
                          <span>4 hours 25 min</span>
                        </div>
                        <div className='flex gap-x-1 items-center text-[var(--clr-primary-400)]'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon14"></use>
                          </svg>
                          <span>15 chapter</span>
                        </div>
                        <div className='flex gap-x-1 items-center text-[var(--clr-primary-400)]'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          <span>40 videos</span>
                        </div>
                      </div>
                  </div>
                  <div className='relative w-20 h-20'>
                    <svg className='w-full h-full'>
                      <circle cx="50%" cy="50%" r="28" fill='none' stroke='#455CE9' stroke-width='10' />
                      <circle cx="50%" cy="50%" r="28" fill='none' stroke='#B1C7FF' stroke-width='10' stroke-dasharray="176" stroke-dashoffset="60" />
                    </svg>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <span>30%</span>
                    </div>
                  </div>
                </div>
                <div className='mt-6'>
                  <ol className='list-decimal list-outside pl-6 font-medium text-xl'>
                    <li className='w-full py-6 border-b border-[var(--clr-primary-100)]'>
                      <span className=' flex items-center justify-between'>
                        <span className=''>Introduction</span>
                        <svg className="h-4 w-4">
                            <use href="./icons/detailsicon.svg#ic9"></use>
                        </svg>
                      </span>
                      <ul className='font-normal text-base list-inside hidden gap-y-4'>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Mastering Design System
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem, ipsum dolor.
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem ipsum dolor sit.
                        </li>
                      </ul>
                    </li>
                    <li className='w-full py-6 border-b border-[var(--clr-primary-100)]'>
                      <span className=' flex items-center justify-between'>
                        <span className=''>Introduction</span>
                        <svg className="h-4 w-4">
                            <use href="./icons/detailsicon.svg#ic9"></use>
                        </svg>
                      </span>
                      <ul className='font-normal text-base list-inside hidden gap-y-4'>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Mastering Design System
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem, ipsum dolor.
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem ipsum dolor sit.
                        </li>
                      </ul>
                    </li>
                     <li className='w-full py-6 border-b border-[var(--clr-primary-100)]'>
                      <span className=' flex items-center justify-between'>
                        <span className=''>Introduction</span>
                        <svg className="h-4 w-4">
                            <use href="./icons/detailsicon.svg#ic9"></use>
                        </svg>
                      </span>
                      <ul className='font-normal text-base list-inside hidden gap-y-4'>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Mastering Design System
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem, ipsum dolor.
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem ipsum dolor sit.
                        </li>
                      </ul>
                    </li>
                     <li className='w-full py-6 border-b border-[var(--clr-primary-100)]'>
                      <span className=' flex items-center justify-between'>
                        <span className=''>Introduction</span>
                        <svg className="h-4 w-4">
                            <use href="./icons/detailsicon.svg#ic9"></use>
                        </svg>
                      </span>
                      <ul className='font-normal text-base list-inside flex flex-col mt-6 mb-2 gap-y-6'>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Mastering Design System
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem, ipsum dolor.
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem ipsum dolor sit.
                        </li>
                      </ul>
                    </li>
                     <li className='w-full py-6 border-b border-[var(--clr-primary-100)]'>
                      <span className=' flex items-center justify-between'>
                        <span className=''>Introduction</span>
                        <svg className="h-4 w-4">
                            <use href="./icons/detailsicon.svg#ic9"></use>
                        </svg>
                      </span>
                      <ul className='font-normal text-base list-inside hidden gap-y-4'>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Mastering Design System
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem, ipsum dolor.
                        </li>
                        <li className='flex items-center gap-x-2'>
                          <svg className="h-5 w-5">
                            <use href="/icons/watch.svg#wicon11"></use>
                          </svg>
                          Lorem ipsum dolor sit.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </section>
        </div>
    </>
  )
}

export default Watch;