import {useEffect,useState} from 'react';
import CourseCard from '../components/UI/cards/CourseCard';
import { axiosClient } from '../api/axiosClient';
import { Toaster } from 'react-hot-toast';
function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    const fetchCourses = async () => {
      try{
        const {data} = await axiosClient.get('/courses');
        console.log(data);
      } catch(error){
        console.log(error);
      }
    }
    fetchCourses();
  },[])
  return (
    <>
      <section id="breadcrumb" className='h-14 bg-[var(--clr-accent-100)]'>
        <nav aria-label='Breadcrumb' className='container flex items-center h-full text-[var(--clr-primary-900)]'>
          <ol className='flex gap-x-1 '>
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">›</li>
            <li><a className='text-[var(--clr-accent-900)]' href="/courses">Courses</a></li>
          </ol>
        </nav>
      </section>
      <section id="search" className='mt-27'>
        <div className='container'>
          <div className='flex px-6 gap-x-4 h-16 w-1/2 mx-auto rounded-2xl border-2 border-[var(--clr-accent-900)]'>
            <img className='w-7 aspect-square' src="/icons/searchicon.svg" alt="" />
            <input className='outline-none text-[var(--clr-primary-900)] text-xl placeholder-gray-300' type="text" name="search" placeholder='Search for a course '  />
          </div>
          <nav>
            <ul className='flex gap-x-10 mt-12 justify-center text-[var(--clr-primary-200)]'>
              <li><a className='text-[var(--clr-accent-900)]' href="#">Cloud</a></li>
              <li><a href="#">Ui Design</a></li>
              <li><a href="#">Programming</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Soft Skill</a></li>
              <li><a href="#">Network</a></li>
              <li><a href="#">Data Analyst</a></li>
            </ul>
          </nav>
        </div>
      </section>
      <section id="courses" className='mt-24'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
          </div>
        </div>
      </section>
      <section id="pagination" className='mt-24 mb-40'>
        <nav aria-label='Pagination'>
          <ul className='flex text-2xl justify-center text-[var(--clr-accent-900)] items-center gap-x-10'>
            <li><a className='text-xl' aria-label='Previous page' href="#">Back</a></li>
            <li className='w-12 rounded-sm aspect-square text-white bg-[var(--clr-accent-900)]'><a className='flex items-center justify-center h-full' href="#">1</a></li>
            <li className='w-12 rounded-sm aspect-square bg-[var(--clr-accent-100)]'><a className='flex items-center justify-center h-full' href="#">2</a></li>
            <li className='w-12 rounded-sm aspect-square bg-[var(--clr-accent-100)]'><a className='flex items-center justify-center h-full' href="#">3</a></li>
            <li className='w-12 rounded-sm aspect-square bg-[var(--clr-accent-100)] flex items-center justify-center'>...</li>
            <li className='w-12 rounded-sm aspect-square bg-[var(--clr-accent-100)]'><a className='flex items-center justify-center h-full'  href="#">8</a></li>
            <li><a className='text-xl' href="#">Next</a></li>
          </ul>
        </nav>
      </section>
      <Toaster position='bottom-left' />
    </>
  )
}

export default Courses