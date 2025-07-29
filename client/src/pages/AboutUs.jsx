import React from 'react'
import UnderDev from '../components/UI/components/UnderDev'


function AboutUs() {
  return (
    <>
      {/* Heading Section */}
      <section
        className="bg-gradient-to-br from-primary to-blue-600 text-white py-20"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20cybersecurity%20professionals%20working%20with%20advanced%20technology%20systems%20in%20a%20sleek%20office%20environment%2C%20digital%20security%20shields%20and%20network%20connections%20in%20the%20background%2C%20professional%20lighting%20with%20blue%20and%20purple%20tones%2C%20clean%20minimalist%20design&width=1200&height=600&seq=hero-about&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl text-white font-bold mb-6">About Us</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Empowering institutions and organizations with essential cybersecurity knowledge and skills.
              </p>
            </div>
            <div className="hidden lg:block flex-1 max-w-md">
              <img
                src="https://readdy.ai/api/search-image?query=cybersecurity%20professionals%20analyzing%20data%20on%20multiple%20screens%20with%20network%20security%20visualization%2C%20modern%20office%20setting%20with%20blue%20lighting%2C%20professional%20team%20collaboration&width=400&height=300&seq=hero-illustration&orientation=landscape"
                alt="Cybersecurity Team"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4">
          <span className="text-sm text-gray-500">About Our Agency &rarr;</span>
        </div>

        {/* Introduction Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              GIR Technologies — Teaching Cyber Skills, Building Safer Worlds
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At GIR Technologies, we specialize in delivering cutting-edge cybersecurity solutions and personalized education for IT companies, universities, and organizations. Our mission is to empower the next generation of cybersecurity experts and enhance the skills of current professionals. From real-time threat monitoring to expert-led training programs, we offer practical, hands-on services tailored to your needs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're securing critical systems or seeking to advance your cybersecurity knowledge, let your trusted partner in navigating today's complex cyber landscape.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20cybersecurity%20shield%20icon%20with%20layered%20protection%20design%2C%20blue%20and%20white%20colors%2C%20geometric%20patterns%20representing%20digital%20security%2C%20clean%20minimalist%20style&width=400&height=400&seq=security-shield&orientation=squarish"
              alt="Security Shield"
              className="w-80 h-80 object-cover object-top"
            />
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=cybersecurity%20analyst%20working%20on%20laptop%20with%20code%20and%20security%20monitoring%20dashboards%2C%20professional%20office%20environment%20with%20multiple%20screens%2C%20focused%20concentration%2C%20blue%20ambient%20lighting&width=500&height=300&seq=cyber-work-1&orientation=landscape"
              alt="Cybersecurity Professional at Work"
              className="w-full h-64 object-cover object-top"
            />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=cybersecurity%20team%20analyzing%20global%20threat%20map%20on%20large%20display%20screen%2C%20modern%20security%20operations%20center%2C%20blue%20digital%20interface%20with%20world%20map%20visualization&width=500&height=300&seq=cyber-work-2&orientation=landscape"
              alt="Threat Analysis Center"
              className="w-full h-64 object-cover object-top"
            />
          </div>
        </section>

        {/* Fun Fact Section */}
        <section className="bg-slate-800 text-white rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white text-3xl font-bold mb-6">Our Fun Fact</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Each milestone shows our commitment to cybersecurity, social, and learning, and resource development across the globe.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50</div>
                <div className="text-gray-300">Secured Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000</div>
                <div className="text-gray-300">Trained Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20</div>
                <div className="text-gray-300">Partnered Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100</div>
                <div className="text-gray-300">Real Threat Incidents</div>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="bg-slate-800 text-white rounded-2xl p-12">
          <div className="mb-4">
            <span className="text-sm text-gray-400">Chief Executive Officer &rarr;</span>
          </div>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <img
                src="/images/chief_officer.jpg"
                alt="CEO Portrait"
                className="w-full max-w-sm rounded-lg object-cover object-top"
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-white text-3xl font-bold mb-6">GIR Technologies — About Srujan Atluri</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As the Chief Executive Officer of GIR Technologies, I bring over a decade of experience in the field of cybersecurity. My journey spans roles as a cybersecurity analyst, corporate trainer, and educator. I'm a Certified Ethical Hacker Jr. and NSLC certified trainer, passionate about empowering organizations and individuals with practical, real-world cybersecurity knowledge.
                </p>
                <p>
                  To date, I've conducted training sessions, one-on-one talks, and workshops across over 200+ institutes, impacting more than 62,500 students and professionals globally. My key focus lies in delivering hands-on, up-to-date cybersecurity education while helping organizations build resilient, future-ready security infrastructures.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                <h4 className="text-xl font-semibold">My Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-mail-line"></i>
                    </div>
                    <span>srujan.atluri@girtechnologies.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-phone-line"></i>
                    </div>
                    <span>+91 123 4567 123</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm text-gray-400">SRUJAN ATLURI</div>
                  <div className="text-sm text-gray-400">CEO of GIR Technology</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default AboutUs;