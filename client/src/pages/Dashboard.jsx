import React from 'react';
import Dashnav from '../components/UI/components/Dashnav';
import { IoIosArrowRoundForward } from "react-icons/io";

function Dashboard() {
  return (
    <>
        <Dashnav/>
        <div className='flex'>
          <div className='w-full sm:w-2/3 '>
            <section className='bg-[var(--clr-accent-900)] ml-4 my-6 text-white px-10 rounded-xl flex justify-between'>
              <div className='flex flex-col gap-y-8 py-7'> 
                <div className='space-y-0.5'>
                  <p>Welcome Back,</p>
                  <h4 className='text-white'>Sumit Devs</h4>
                </div>
                <p>
                  Go back to the
                  <a className='inline-flex items-center' href="/">
                   &nbsp;home
                  <IoIosArrowRoundForward aria-hidden="true" focusable="false"/>
                  </a>
                </p>
              </div>
              <img className='object-cover ' src="./images/greetimg.svg" alt="" />
            </section>
          </div>
          <div className='w-full sm:w-1/3'>

          </div>
        </div>
    </>
  )
}

export default Dashboard