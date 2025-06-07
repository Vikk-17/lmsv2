import React from 'react'
import { IoSettings } from "react-icons/io5";

function UnderDev() {
  return (
    <section id='construction' className='h-screen'>
            <div className='flex items-center h-full gap-x-1 justify-center text-[var(--clr-primary-900)]'>
                <IoSettings/>
                <p>page under construction...</p>
            </div>
    </section>
  )
}

export default UnderDev