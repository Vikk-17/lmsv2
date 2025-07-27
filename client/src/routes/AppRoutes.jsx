import { Routes, Route, Navigate} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Courses from '../pages/Courses';
import Services from '../pages/Services';
import AboutUs from '../pages/AboutUs';
import Signup from '../pages/Signup';
import CourseDetails from '../pages/CourseDetails';
import ShoppingCart from '../pages/ShoppingCart';
import Payment from '../pages/Payment';
import DashboardRoutes from './DashboardRoutes';

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses/>} />
          <Route path="login"  element={<Login/>} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='cart' element={<ShoppingCart/>}/>
          <Route path='about-us' element={<AboutUs/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='courses/:courseID' element={<CourseDetails/>}/>
        </Route>
        <Route path='/*' element={<DashboardRoutes/>}/>
      </Routes>
  );
}
