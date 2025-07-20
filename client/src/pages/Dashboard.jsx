import React from 'react';
import Dashnav from '../components/UI/components/Dashnav';
import DailyStreak from '../components/UI/cards/DailyStreak';
import WatchTime from '../components/UI/cards/WatchTime';
import WatchingCourse from '../components/UI/cards/WatchingCourse';
import Recommended from '../components/UI/components/Recommended';
import GreetingCard from '../components/UI/cards/GreetingCard';
function Dashboard() {
  return (
    <>
        <GreetingCard/>
        <section className='space-y-4 mt-8'>
          <h4>Continue Learning</h4>
          <div className='grid grid-cols-2 gap-x-4 '>
            <WatchingCourse/>
            <WatchingCourse/>
          </div>
        </section>
        <section className='space-y-4 mt-8'>
          <h4>Recommended Courses For You</h4>
          <div className='grid grid-cols-3 gap-x-3'>
            <Recommended/>
            <Recommended/>
            <Recommended/>
          </div>
        </section>
    </>
  )
}

export default Dashboard