import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='bg-[var(--clr-primary-900)]' >
      <div className="container">
        <div className="nav-wrapper h-20 flex justify-between items-center">
          <a className='text-heading-h5 font-bold w-1/4' href="/">LOGO</a>
          <nav className='hidden md:flex justify-between w-3/4' role='navigation' aria-label='primary navigation'>
            <ul role='list' className='flex gap-x-12 font-medium items-center' >
              <li><Link  to="/">Home</Link></li>
              <li><Link  to="courses">Courses</Link></li>
              <li><Link  to="services">Services</Link></li>
              <li><Link  to="about-us">About Us</Link></li>
            </ul>
            <ul role='list' className='flex gap-x-7 items-center'>
              <li>
                <Link  to="login" className='flex items-center gap-x-2'>
                    <svg className="icon w-6 h-6">
                      <use href='/icons/navicons.svg#navicon1' ></use>
                    </svg>
                    <span>Login</span> 
                </Link>
              </li>
              <li>
                <Link  to="signup" className='flex items-center gap-x-2 bg-[var(--clr-accent-900)] w-38 h-10 justify-center rounded-lg '>
                    <span>Sign up</span> 
                    <svg className="icon w-4 h-4">
                      <use href='/icons/navicons.svg#navicon2' ></use>
                    </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;