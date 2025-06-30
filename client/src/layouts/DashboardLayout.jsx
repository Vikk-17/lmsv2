import React from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import Sidebar from '../components/UI/components/SIdebar';
=======
import Sidebar from '../components/UI/components/Sidebar';
>>>>>>> feature/backend-integration

function DashboardLayout() {
  return (
    <div className="flex ">
        <Sidebar/>
        <main className='bg-[var(--clr-accent-100)] flex-1 text-[var(--clr-primary-900)]'>
            <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayout;