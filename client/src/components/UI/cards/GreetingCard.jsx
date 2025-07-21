import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function GreetingCard() {
  return (
    <section className='bg-[var(--clr-accent-900)]  text-white px-10 rounded-xl flex justify-between'>
        <div className='flex flex-col gap-y-8 py-7'> 
        <div className='space-y-0.5'>
            <p>Welcome Back,</p>
            <h4 className='text-white'>Sumit Devs</h4>
        </div>
        <span>
            Go back to the &nbsp;
            <a className='inline-flex  gap-x-1 underline  items-center' href="/">
            Home
            <FaArrowUpRightFromSquare className='text-sm' />
            </a>
        </span>
        </div>
        <img className='object-cover ' src="./images/greetimg.svg" alt="" />
    </section>
  )
}

export default GreetingCard