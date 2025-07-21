import React from 'react'

function Dashnav() {
  return (
        <div className='flex  z-20 justify-between items-center bg-white ml-4 py-4 mt-10 pl-6 pr-10 rounded-2xl'>
            <div>
                <h6>Dashboard</h6>
                <nav className='text-[var(--clr-primary-200)]'>
                    <ul>
                        <li>
                            <a href="/dashboard">Dashboard/</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex gap-x-4'>
                <div className="h-10 w-10 bg-[var(--clr-primary-100)] rounded-full flex justify-center items-center">
                    <svg className="h-6 w-6">
                    <use href="./icons/dash.svg#search"></use>
                    </svg>
                </div>
                <div className="h-10 w-10 bg-[var(--clr-primary-100)] rounded-full flex justify-center items-center">
                    <svg className="h-6 w-6">
                    <use href="./icons/dash.svg#bell"></use>
                    </svg>
                </div>
                <div className="h-10 w-10 bg-[var(--clr-primary-100)] overflow-hidden rounded-full flex justify-center items-center">
                    <img className='h-full w-full object-cover' src="./images/prof2.jpg" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Dashnav