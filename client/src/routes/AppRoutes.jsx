import { Routes, Route,Router } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Courses from '../pages/Courses';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import CourseDetails from '../pages/CourseDetails';
import MyCourses from '../pages/MyCourses';
import Watch from '../pages/Watch';
import InstructorDash from '../pages/InstructorDash';
import ShoppingCart from '../pages/ShoppingCart';
export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses/>} />
          <Route path="login"  element={<Login/>} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='cart' element={<ShoppingCart/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='courses/:courseID' element={<CourseDetails/>}/>
        </Route>
        <Route element={<DashboardLayout/>} >
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/my-courses' element={<MyCourses/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='/id' element={<InstructorDash/>}/>
        </Route>
      </Routes>
  );
}
