import React from 'react'
import { Link } from 'react-router-dom';
import WhyChooseCard from '../components/UI/cards/WhyChooseCard';
import CourseCard from '../components/UI/cards/CourseCard';
import AnalyticsCard from '../components/UI/cards/AnalyticsCard';

function Home() {
  return (
  <>
    <section id="hero-section" className='bg-[var(--clr-primary-800)] pt-20 pb-32'>
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div id="hero-content" className='flex flex-col gap-y-6 self-center'>
            <h1 className='text-[var(--clr-accent-100)] max-w-xl leading-tight'>Empower Your Learning with Gir Technologies</h1>
            <p className='max-w-[27rem]'>Join us in shaping a brighter future by nurturing potential, empowering minds, and fostering growth through education and collaboration.</p>
            <div className='flex gap-x-4'>
              <Link to='cources' className='w-42 h-10 rounded-lg bg-[var(--clr-accent-900)] justify-center flex items-center' >Explore Courses</Link>
              <Link to='cources' className='w-42 h-10 rounded-lg border justify-center flex items-center' >Enquiry Now</Link>
            </div>
          </div>
          <div id="hero-img" className='place-self-end'>
            <div className='w-xl h-92'>
              <img className='w-full h-fit object-contain' src="/images/hero-img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="brand">
      <div className='text-[var(--clr-primary-900)] flex flex-col gap-y-4 justify-center items-center h-50 bg-[var(--clr-accent-100)]'>
        <p>Trusted by leading organizations worldwide</p>
        <div className='flex w-1/2 gap-x-8'>
          <svg class="h-8 ">
          <use href="/icons/brands.svg#Group2549"></use>
          </svg>
          <svg className="h-8 ">
            <use href="/icons/brands.svg#Group2553"></use>
          </svg>
          <svg className="h-8 ">
            <use href="/icons/brands.svg#Group2552"></use>
          </svg>
          <svg className="h-8 ">
            <use href="/icons/brands.svg#Group2551"></use>
          </svg>
          <svg className="h-8 ">
            <use href="/icons/brands.svg#Group2550"></use>
          </svg>
        </div>
      </div>
    </section>
    <section id="why-choose" className='mt-27'>
      <div className='container flex flex-col gap-y-18'>
        <h2 className='text-center'>Why Choose Gir Technologies?</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          <WhyChooseCard/>
          <WhyChooseCard/>
          <WhyChooseCard/>
          <WhyChooseCard/>
          <WhyChooseCard/>
          <WhyChooseCard/>
        </div>
      </div>
    </section>
    <section id="featured-cource" className='mt-16'>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex flex-col text-[var(--clr-primary-900)]">
            <h2>Featured Courses</h2>
            <p>Explore Our Popular Cources</p>
          </div>
          <div>
            <button className='bg-[var(--clr-accent-900)] py-3 px-12 rounded-lg '>All Courses</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-x-8">
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </div>
    </section>
    <section id="analytics" className='mt-16'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
          <AnalyticsCard/>
          <AnalyticsCard/>
          <AnalyticsCard/>
          <AnalyticsCard/>
        </div>
      </div>
    </section>
    <section id="testimonial" className='mt-27 mb-40'>
      <div id="wrapper" className='bg-[var(--clr-accent-100)] py-16 '>
        <div className='container'>
          <div className="lg:flex  text-[var(--clr-primary-900)]">
            <div className='flex flex-1 flex-col'>
              <h2>What Our Learners Say</h2>
              <p className='lg:max-w-1/2'>Honest feedback, real success stories, and trusted learning experiences.</p>
            </div>
            <div className='flex flex-1 flex-col'>
              <p className='text-xl'><q>GIR Technologies made cybersecurity so easy to understand! The courses are hands-on, up-to-date, and the instructors are incredibly supportive. I landed my first internship thanks to this platform.</q></p>
              <div className='flex justify-between px-4 mt-6'>
                <div className='flex items-center gap-x-2'>
                  <div className='h-12 w-12 overflow-hidden rounded-full '>
                    <img className=' h-full w-full object-cover ' src="/images/prof2.jpg" alt="" />
                  </div>
                  <div>
                    <p>Jenny Wilson</p> 
                    <p className='text-[var(--clr-primary-400)] text-xs'>student</p>
                  </div>
                </div>
                <ul className='flex justify-center items-center gap-x-2'>
                  <li>
                    <button className='h-4 w-4 bg-[var(--clr-accent-400)] rounded-full'></button>
                  </li>
                  <li>
                    <button className='h-4.5 w-4.5 bg-[var(--clr-accent-900)] rounded-full'></button>
                  </li>
                  <li>
                    <button className='h-4 w-4 bg-[var(--clr-accent-400)] rounded-full'></button>
                  </li>
                  <li>
                    <button className='h-4 w-4 bg-[var(--clr-accent-400)] rounded-full'></button>
                  </li>
                  <li>
                    <button className='h-4 w-4 bg-[var(--clr-accent-400)] rounded-full'></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home