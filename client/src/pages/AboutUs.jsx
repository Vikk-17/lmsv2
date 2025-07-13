import React from 'react'
import UnderDev from '../components/UI/components/UnderDev'

function AboutUs() {
  return (
    <>
        <section id="breadcrumb" className='h-14 bg-[var(--clr-accent-100)]'>
          <nav aria-label='Breadcrumb' className='container flex items-center h-full text-[var(--clr-primary-900)]'>
              <ol className='flex gap-x-1 '>
              <li><a href="/">Home</a></li>
              <li aria-hidden="true">›</li>
              <li><a className='text-[var(--clr-accent-900)]' href="/about-us">About Us</a></li>
              </ol>
          </nav>
        </section>
        <UnderDev/>
    </>
  )
}

export default AboutUs