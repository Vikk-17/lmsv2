import React from 'react'
import DailyStreak from '../components/UI/cards/DailyStreak';
import WatchTime from '../components/UI/cards/WatchTime';
import GreetingCard from '../components/UI/cards/GreetingCard';
function MyCourses() {
  return (
    <>
        <div className='w-full sm:flex-2/3'>
          <GreetingCard/>
          <section className='space-y-4 mt-8'>
            <div className='flex flex-col gap-y-8'>
              <h4>My Courses</h4>
              <div role='tablist' className='flex  bg-white text-xl rounded-xl'>
                <button role='tab' aria-selected='false' aria-controls='panel-1' id='tab-1' className='py-4 px-6 border-b-2 bg-[var(--clr-accent-200)] text-[var(--clr-accent-900)] rounded-tl-xl rounded-bl-xl'>All</button>
                <button role='tab' aria-selected='false' aria-controls='panel-2' id='tab-2' className='py-4 px-6 hover:bg-[var(--clr-accent-200)] '>Active</button>
                <button role='tab' aria-selected='false' aria-controls='panel-3' id='tab-3' className='py-4 px-6 hover:bg-[var(--clr-accent-200)]'>Upcoming</button>
                <button role='tab' aria-selected='false' aria-controls='panel-4' id='tab-4' className='py-4 px-6 hover:bg-[var(--clr-accent-200)]'>Saved</button>
                <button role='tab' aria-selected='false' aria-controls='panel-5' id='tab-5' className='py-4 px-6 hover:bg-[var(--clr-accent-200)]'>Completed</button>
              </div>
              <div className='' role='tabpanel' id='panel-1' aria-labelledby='tab-1' >
                <div className='flex bg-white p-4 gap-x-8'>
                  <div className='w-48 h-40 overflow-hidden rounded-sm'>
                    <img className='w-full h-full object-cover' src="./images/img2.jpg" alt="" />
                  </div>
                  <div className='flex-1 flex flex-col gap-y-8'>
                    <div className='flex justify-between'>
                      <div className='w-full max-w-xs'>
                        <h5>Cyber Security</h5>
                        <p>Learn to create stunning visuals and designs professionally.</p>
                      </div>
                      <div className='flex  h-fit gap-x-2 p-2 bg-[var(--clr-accent-100)]'>
                        <svg className=" w-6 h-6 ">
                          <use href="./icons/detailsicon.svg#ic8"></use>
                        </svg>
                        <p className='text-[var(--clr-accent-900)]'>5.0</p>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='w-2/3 flex flex-col gap-y-2'>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div className="bg-[var(--clr-accent-900)] h-full rounded-full transition-all" style={{ width: `60%` }}></div>
                        </div>
                        <div className='flex justify-between'>
                          <span className='inline-flex items-center gap-x-1'>
                            <svg className=" w-6 h-6 ">
                              <use href="./icons/mcource.svg#cr3"></use>
                            </svg>
                            18/40 Lessons
                          </span>
                          <span className='inline-flex items-center gap-x-1'>
                            <svg className=" w-6 h-6 ">
                              <use href="./icons/mcource.svg#cr4"></use>
                            </svg>
                            2 hours left
                          </span>
                        </div>
                      </div>
                      <div className=''>
                        <p className='text-sm'>Author</p>
                        <p className='text-lg '>Amardeep</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='' role='tabpanel' id='panel-2' aria-labelledby='tab-2' >
                <div className='flex bg-white p-4 gap-x-8'>
                  <div className='w-48 h-40 overflow-hidden rounded-sm'>
                    <img className='w-full h-full object-cover' src="./images/img2.jpg" alt="" />
                  </div>
                  <div className='flex-1 flex flex-col gap-y-8'>
                    <div className='flex justify-between'>
                      <div className='w-full max-w-xs'>
                        <h5>Cyber Security</h5>
                        <p>Learn to create stunning visuals and designs professionally.</p>
                      </div>
                      <div className='flex  h-fit gap-x-2 p-2 bg-[var(--clr-accent-100)]'>
                        <svg className=" w-6 h-6 ">
                          <use href="./icons/detailsicon.svg#ic8"></use>
                        </svg>
                        <p className='text-[var(--clr-accent-900)]'>5.0</p>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='w-2/3 flex flex-col justify-center '>
                        <div className='flex divide-x-3'>
                          <p className='inline-flex pr-2 items-center gap-x-1'>
                            Start: <strong className='text-[var(--clr-accent-900)]'>&nbsp;May 6</strong>
                          </p>
                          <span className='inline-flex pl-2 items-center gap-x-1'>
                            <svg className=" w-6 h-6 ">
                              <use href="./icons/mcource.svg#cr3"></use>
                            </svg>
                            40 Lessons
                          </span>
                        </div>
                      </div>
                      <div className=''>
                        <p className='text-sm'>Author</p>
                        <p className='text-lg text-[var(--clr-accent-900)]'>Amardeep</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role='tabpanel' id='panel-3' aria-labelledby='tab-3' >
                <div className='flex bg-white p-4 gap-x-8'>
                  <div className='w-48 h-40 overflow-hidden rounded-sm'>
                    <img className='w-full h-full object-cover' src="./images/img2.jpg" alt="" />
                  </div>
                  <div className='flex-1 flex flex-col gap-y-8'>
                    <div className='flex justify-between'>
                      <div className='w-full max-w-xs'>
                        <h5>Cyber Security</h5>
                        <p>Learn to create stunning visuals and designs professionally.</p>
                      </div>
                      <div className='flex  h-fit gap-x-2 p-2 bg-[var(--clr-accent-100)]'>
                        <svg className=" w-6 h-6 ">
                          <use href="./icons/detailsicon.svg#ic8"></use>
                        </svg>
                        <p className='text-[var(--clr-accent-900)]'>5.0</p>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='w-2/3 flex flex-col justify-center '>
                        <div className='flex divide-x-3'>
                          <span className='inline-flex pr-2 items-center gap-x-1'>
                            <svg className=" w-4 h-4 ">
                              <use href="./icons/mcource.svg#cr2"></use>
                            </svg>
                            Completed 06/25
                          </span>
                          <span className='inline-flex pl-2 items-center gap-x-1'>
                            <svg className=" w-6 h-6 ">
                              <use href="./icons/mcource.svg#cr1"></use>
                            </svg>
                            <a className='text-[var(--clr-accent-900)]' href="">Certificate</a>
                          </span>
                        </div>
                      </div>
                      <div className=''>
                        <p className='text-sm'>Author</p>
                        <p className='text-lg text-[var(--clr-accent-900)]'>Amardeep</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role='tabpanel' id='panel-4' aria-labelledby='tab-4' >
              </div>
              <div role='tabpanel' id='panel-5' aria-labelledby='tab-5' >
              </div>
            </div>
          </section>
        </div>
        <div className='w-full sm:flex-1/3'>
          <div className='p-2 sticky top-20 bg-white rounded-2xl '>
              <DailyStreak/>
              <WatchTime/>
          </div>
        </div>
    </>
  )
}

export default MyCourses