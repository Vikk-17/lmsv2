import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <div className="bg-[var(--clr-primary-800)] py-20">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-27">
                    <section id='company' className="flex flex-col gap-y-2 sm:gap-y-4  ">
                        <h2 className=' text-neutral-100 text-heading-h5 font-bold ' href="/">LOGO</h2>
                        <p>GIR Technologies secures digital assets and empowers learners with expert-led cybersecurity training for students, professionals, and institutions.</p>
                    </section>
                    <section id='product' className="flex flex-col gap-y-2 sm:gap-y-4  ">
                        <h2 className=' text-neutral-100 text-heading-h5 font-bold' href="/">Social</h2>
                        <ul>
                            <li><Link to='twiter' >Twitter</Link></li>
                            <li><Link to='twiter' >Instagram</Link></li>
                            <li><Link to='twiter' >Linkdin</Link></li>
                        </ul>
                    </section>
                    <section id='program' className="flex flex-col gap-y-2 sm:gap-y-4 ">
                        <h2 className=' text-neutral-100 text-heading-h5 font-bold' href="/">Program</h2>
                        <ul>
                            <li><Link to='twiter' >Blog</Link></li>
                            <li><Link to='twiter' >About Us</Link></li>
                            <li><Link to='twiter' >Term & Condition</Link></li>
                            <li><Link to='twiter' >Refund & Cancellation</Link></li>
                        </ul>
                    </section>
                    <section id='Contact Us' className="flex flex-col gap-y-2 sm:gap-y-4 ">
                        <h2 className=' text-neutral-100 text-heading-h5 font-bold' href="/">Contact Us</h2>
                        <address className='not-italic' >

                        <p>GIR Technologies</p>
                        <p>ADITYA ENCLAVE</p> 
                        <p>Annapurna Block, 3rd Floor - 315</p>
                        <p>Ameerpet, Hyderabad</p>
                        <p>Telangana 500016</p>
                        <p>
                        <a href="tel:+918143894179">
                            +91 8143894179
                        </a>
                        </p>
                        <p>
                        <a href="mailto:info@girtechnologies.com">
                            info@girtechnologies.com
                        </a>
                        </p>
                        </address>
                    </section>
                </div>
            </div>
        </div>
        <div className='bg-[var(--clr-primary-900)] py-8 text-center text-[var(--clr-primary-200)] '>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer