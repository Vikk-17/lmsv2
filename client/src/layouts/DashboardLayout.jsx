import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/UI/components/Sidebar';
import DailyStreak from '../components/UI/cards/DailyStreak';
import WatchTime from '../components/UI/cards/WatchTime';
import Dashnav from '../components/UI/components/Dashnav';
 
function DashboardLayout() {
  return (
    <div className="flex">
        <Sidebar/>
        <main className='bg-[var(--clr-accent-100)] flex-1 text-[var(--clr-primary-900)] ml-64'>
          <Dashnav/>
          <div className='flex gap-x-6 mx-4 my-6'>
            <Outlet/>
          </div>
        </main>
    </div>
  )
}

export default DashboardLayout;