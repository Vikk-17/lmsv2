import React from 'react';
import Dashnav from '../components/UI/components/Dashnav';
import DailyStreak from '../components/UI/cards/DailyStreak';
import WatchTime from '../components/UI/cards/WatchTime';
import WatchingCourse from '../components/UI/cards/WatchingCourse';
import Recommended from '../components/UI/components/Recommended';
import GreetingCard from '../components/UI/cards/GreetingCard';
function StudentDash() {
  return (
    <div className='flex mx-4 my-6 gap-x-4'>
        <div className='w-full sm:flex-2/3'>
          <GreetingCard/>
          <section className='space-y-4 mt-8'>
            <h5>Continue Learning</h5>
            <div className='grid grid-cols-2 gap-x-4 '>
              <WatchingCourse/>
              <WatchingCourse/>
            </div>
          </section>
          <section className='space-y-4 mt-8'>
            <h5>Recommended Courses For You</h5>
            <div className='grid grid-cols-3 gap-x-3'>
              <Recommended/>
              <Recommended/>
              <Recommended/>
            </div>
          </section>
        </div>
        <div className='w-full sm:flex-1/3'>
          <div className='p-2 sticky top-20 bg-white rounded-2xl '>
              <DailyStreak/>
              <WatchTime/>
          </div>
        </div>
    </div>
  )
}

export default StudentDash;