import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/UI/components/Sidebar';
import DailyStreak from '../components/UI/cards/DailyStreak';
import WatchTime from '../components/UI/cards/WatchTime';
import Dashnav from '../components/UI/components/Dashnav';
 
function DashboardLayout() {
  return (
    <div className="flex relative add-new--lesson">
        <Sidebar/>
        <div className=' flex-1 text-[var(--clr-primary-900)] ml-64'>
          <Dashnav/>
          <main className=''>
            <Outlet/>
          </main>
        </div>
    </div>
  )
}

export default DashboardLayout;