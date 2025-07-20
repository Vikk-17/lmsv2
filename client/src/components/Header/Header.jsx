import {useEffect,useState} from 'react';
import logo from '../../assets/gir-logo.svg'
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useCartStore from '../../store/cartStore';
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";


function Header () {
  const {user,isAuthenticated, cookieLogin} = useAuthStore();
  const {item} = useCartStore();
  const [menu,setMenu] = useState(null);
  const handleMenu = (currentMenu)=>{
    setMenu(currentMenu===menu?null:currentMenu);
  }
  useEffect(()=>{
    cookieLogin();
    console.log(user);
  },[]);

  return (
    <header className='bg-[var(--clr-primary-900)]' >
      <div className="container">
        <div className="nav-wrapper h-20 flex justify-between items-center">
          <Link className='text-heading-h5 font-bold w-1/4' to="/"><img src={logo} alt="" /></Link>
          <nav className='hidden md:flex justify-between w-3/4' role='navigation' aria-label='primary navigation'>
            <ul role='list' className='flex gap-x-12 font-medium items-center' >
              <li><Link  to="/">Home</Link></li>
              <li><Link  to="courses">Courses</Link></li>
              <li><Link  to="services">Services</Link></li>
              <li><Link  to="about-us">About Us</Link></li>
            </ul>
          {!isAuthenticated && !user
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
                <Link to="/cart" className='flex items-center gap-x-2 relative '>
                  <svg className="icon w-6 h-6">
                      <use href='/icons/cart.svg' ></use>
                  </svg>
                  <span className='absolute bg-[var(--clr-accent-1000)] h-5 w-5 rounded-full -top-2.5 left-2 flex items-center justify-center text-sm '>{item}</span>
                </Link>
               </li>
               <li className='relative'>
                <button onClick={()=>handleMenu('menu1')}  className='flex items-center gap-x-4 cursor-pointer '>
                  <div className="w-10 h-10 border-2 rounded-full overflow-hidden">
                      <img className='h-full w-full object-contain' src="/icons/user.svg" alt="" />
                  </div>
                  <div className='flex flex-col items-start'>
                    <span className='text-sm'>Hi,&nbsp;{user.name}</span>
                    <span className='text-xs text-[var(--clr-primary-200)]'>{user.role==='student'?`Learner at GIR Technologies`:`Instructor at GIR Technologies`}</span>
                  </div>
                  { menu === "menu1"
                  ? <svg className="icon w-6 h-6">
                      <use href='/icons/arrowup.svg' ></use>
                    </svg>
                  : <svg className="icon w-6 h-6">
                      <use href='/icons/arrowdown.svg' ></use>
                    </svg>
                  }
                </button>
                {menu==="menu1"&&(
                  <ul className='bg-white text-[var(--clr-primary-900)] w-47 px-4 py-2 space-y-1 rounded-sm absolute top-12 shadow'>
                    <li>
                      <Link to="/dashboard" className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'>
                        <svg className="h-4 w-4 fill-current ">
                          <use href="./icons/sidebar.svg#dashboard"></use>
                        </svg>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/my-courses" className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'>
                        <svg className="h-4 w-4 fill-current ">
                          <use href="./icons/sidebar.svg#cources"></use>
                        </svg>
                        My Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'>
                        <FaUser/>
                        profile
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className='inline-flex items-center gap-x-2 hover:text-[var(--clr-accent-900)]'>
                        <svg className="h-4 w-4  fill-current ">
                          <use href="./icons/sidebar.svg#logout"></use>
                        </svg>
                        logout
                      </Link>
                    </li>
                  </ul>
                )}
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