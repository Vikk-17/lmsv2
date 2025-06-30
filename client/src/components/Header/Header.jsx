<<<<<<< HEAD
import React from 'react';
=======
import {useEffect} from 'react';
>>>>>>> feature/backend-integration
import logo from '../../assets/gir-logo.svg'
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
function Header () {
  const {user,fetchUser,error,loading} = useUser();
  useEffect(()=>{
    fetchUser();
  },[]);

  return (
    <header className='bg-[var(--clr-primary-900)]' >
      <div className="container">
        <div className="nav-wrapper h-20 flex justify-between items-center">
<<<<<<< HEAD
          <a className='text-heading-h5 font-bold w-1/4' href="/"><img src={logo} alt="" /></a>
=======
          <Link className='text-heading-h5 font-bold w-1/4' to="/"><img src={logo} alt="" /></Link>
>>>>>>> feature/backend-integration
          <nav className='hidden md:flex justify-between w-3/4' role='navigation' aria-label='primary navigation'>
            <ul role='list' className='flex gap-x-12 font-medium items-center' >
              <li><Link  to="/">Home</Link></li>
              <li><Link  to="courses">Courses</Link></li>
              <li><Link  to="services">Services</Link></li>
              <li><Link  to="about-us">About Us</Link></li>
            </ul>
          {error!==null
            ? <ul role='list' className='flex gap-x-7 items-center'>
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
          : <ul className='flex items-center gap-x-7'>
               <li>
                <Link  className='flex items-center gap-x-2'>
                  <svg className="icon w-6 h-6">
                      <use href='/icons/cart.svg' ></use>
                  </svg>
                  <span>Cart</span>
                </Link>
               </li>
               <li>
                <button  className='flex items-center gap-x-4 cursor-pointer '>
                  <div className="w-10 h-10 border-2 rounded-full overflow-hidden">
                      <img className='h-full w-full object-contain' src="/icons/user.svg" alt="" />
                  </div>
                  <div className='flex flex-col items-start'>
                    <span className='text-sm'>Hi,&nbsp;SumitDevs</span>
                    <span className='text-xs text-[var(--clr-primary-200)]'>Learner at GIR Technologies</span>
                  </div>
                  <svg className="icon w-6 h-6">
                      <use href='/icons/arrowdown.svg' ></use>
                  </svg>
                </button>
               </li>
            </ul>
          }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;