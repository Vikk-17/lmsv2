import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/gir-logo.svg';

function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-[var(--clr-primary-800)] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Section */}
            <section id="company" className="flex flex-col gap-4">
              <img src={logo} alt="GIR Technologies" className="w-28" />
              <p className="leading-relaxed text-[var(--clr-primary-100)]">
                GIR Technologies secures digital assets and empowers learners with expert-led cybersecurity training for students, professionals, and institutions.
              </p>
            </section>

            {/* Social Section */}
            <section id="social" className="flex flex-col gap-4">
              <h5 className="text-white">Social</h5>
              <ul className="flex flex-col gap-2 text-lg text-[var(--clr-primary-100)]">
                <li>
                  <Link to="/twitter" className="hover:underline flex items-center gap-2">
                    <FaTwitter /> Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/instagram" className="hover:underline flex items-center gap-2">
                    <FaInstagram /> Instagram
                  </Link>
                </li>
                <li>
                  <Link to="/linkedin" className="hover:underline flex items-center gap-2">
                    <FaLinkedin /> LinkedIn
                  </Link>
                </li>
              </ul>
            </section>

            {/* Program Section */}
            <section id="program" className="flex flex-col gap-4">
              <h5 className="text-white">Program</h5>
              <ul className="flex flex-col gap-2 text-lg text-[var(--clr-primary-100)]">
                <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                <li><Link to="/refund" className="hover:underline">Refund & Cancellation</Link></li>
              </ul>
            </section>

            {/* Contact Section */}
            <section id="contact" className="flex flex-col gap-4">
              <h5 className="text-white">Contact Us</h5>
              <address className="not-italic leading-relaxed space-y-1 text-[var(--clr-primary-100)]">
                <p>GIR Technologies</p>
                <p>ADITYA ENCLAVE</p>
                <p>Annapurna Block, 3rd Floor - 315</p>
                <p>Ameerpet, Hyderabad Telangana 500016</p>
                <p>
                  <a href="tel:+918143894179" className="hover:underline">+91 8143894179</a>
                </p>
                <p>
                  <a href="mailto:info@girtechnologies.com" className="hover:underline">info@girtechnologies.com</a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--clr-primary-900)] py-6 text-center text-lg text-[var(--clr-primary-200)] px-4">
        <p>&copy; {new Date().getFullYear()} GIR Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
