'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function LetsTalk() {
  return (
    <>
      <Navbar />
      <main className="relative font-sans">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700">
          {/* Background Image Layer - Lowest z-index */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/colleagues-working-project-discussing-details.jpg)',
            }}
          ></div>
          
          {/* Color Overlay */}
          <div 
            className="absolute inset-0 z-[1]"
            style={{
              backgroundColor: '#1b76bf',
              opacity: 0.4,
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center animate-smooth-reveal reveal">
              {/* Heading */}
              <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 animate-text-reveal drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                We're the full package.
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto animate-elegant-fade drop-shadow-md" style={{ animationDelay: '0.4s' }}>
                We'll help you win more deals, close faster, and grow smarter starting today. Don't wait. Your next paying client could be one form away.
              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center animate-fade-in-delay" style={{ animationDelay: '0.6s' }}>
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Talk To Us
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore How We Help - Professional Clean Design */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Subtle accent line */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#1c75c0] to-transparent mb-4"></div>
              
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
                Let's explore how we can help you
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal max-w-2xl">
                We help businesses build the structure, systems, and strategy to turn leads into long-term revenue. Get support in closing deals without the full-time commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form - Professional Conceptual Design */}
        <section id="contact" className="w-full bg-gradient-to-b from-gray-50/50 via-white to-white py-10 md:py-12 lg:py-16">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row-reverse">
                {/* Right Section - Form */}
                <div className="w-full lg:w-[62%] p-6 sm:p-8 lg:p-10">
                  <span className="inline-block bg-[#1c75c0] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wider uppercase">
                    Contact
                  </span>
                  <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 capitalize">
                    Tell us about your project
                  </h5>
                  {/* Simple form similar to home page */}
                  <form className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Your full name" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                      <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                      <select className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none bg-white">
                        <option>Service of interest</option>
                        <option>B2B Appointment Setting</option>
                        <option>Virtual Staffing</option>
                        <option>Prospecting & Research</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <textarea placeholder="Tell us a bit about your goals" rows={4} className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none resize-vertical" />
                    <button className="w-full sm:w-auto bg-[#1c75c0] hover:bg-[#1565a0] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg">
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Left - Info */}
                <div className="w-full lg:w-[38%] bg-gradient-to-br from-gray-50/50 to-gray-100/50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 capitalize">
                      Why talk to us?
                    </h5>
                    <ul className="space-y-3 text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight">
                      <li className="flex items-start">
                        <span className="w-5 h-5 mr-3 text-[#1c75c0] flex-shrink-0 mt-0.5">✓</span> <span>No-obligation consultation with a growth strategist</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 mr-3 text-[#1c75c0] flex-shrink-0 mt-0.5">✓</span> <span>Industry-specific playbooks and quick wins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 mr-3 text-[#1c75c0] flex-shrink-0 mt-0.5">✓</span> <span>Clear roadmap for leads, outreach, and closing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence - Elegant Conceptual Design */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-12 lg:py-16 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-10">
              <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                Our Global Presence
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal max-w-2xl mx-auto">
                Find us in key locations across the globe, ready to serve your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* UK */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src="/download (16).jpg" alt="United Kingdom" fill className="object-cover bg-gray-900/5" />
                </div>
                <div className="p-5">
                  <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                    United Kingdom
                  </h5>
                  <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight mb-2">Unit A98 4-6, Greatorex Street, London, United Kingdom, E15NF</p>
                  <p className="text-xs sm:text-xs md:text-sm text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
              {/* Pakistan */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image src="/hd-mazarequaid-karachi.jpg" alt="Karachi, Pakistan" fill className="object-cover bg-gray-900/5" />
                </div>
                <div className="p-5">
                  <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                    Karachi Office, Pakistan
                  </h5>
                  <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight mb-2">F-36 PECHS BLOCK 6, Karachi, Pakistan</p>
                  <p className="text-xs sm:text-xs md:text-sm text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us - Professional Conceptual Design */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-12 lg:py-16 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
              Connect With Us
            </h5>
            <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal max-w-3xl mx-auto mb-6">
              Follow EscaBiz on social media for the latest updates and insights.
            </p>
            <div className="flex justify-center gap-3">
              <a className="w-10 h-10 rounded-full bg-white border border-gray-300/50 flex items-center justify-center hover:bg-gray-50 hover:border-[#1c75c0]/30 transition-colors duration-300 shadow-sm" href="#">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.2l-.35 3h-1.85v7A10 10 0 0022 12"/></svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-white border border-gray-300/50 flex items-center justify-center hover:bg-gray-50 hover:border-[#1c75c0]/30 transition-colors duration-300 shadow-sm" href="#">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zm5.8-2.8a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-white border border-gray-300/50 flex items-center justify-center hover:bg-gray-50 hover:border-[#1c75c0]/30 transition-colors duration-300 shadow-sm" href="#">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6a2 2 0 11-4 0 2 2 0 014 0zM2 8h4v12H2zm7 0h4v1.7c.6-1 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V20h-4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H9z"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* You are in great company - Elegant Conceptual Design */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-12 lg:py-16 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#6f7074] leading-tight text-center mb-6 capitalize">
              You are in great company
            </h5>
            <div className="relative">
              <div className="flex items-center gap-8 animate-[scroll_25s_linear_infinite]">
                {["logo-12.jpg","logo-13.jpg","logo-15.jpg","logo-16.jpg","logo-12.jpg","logo-13.jpg","logo-15.jpg","logo-16.jpg"].map((src, i) => (
                  <div key={i} className="flex-shrink-0 w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image src={`/${src}`} alt={`logo-${i}`} width={128} height={64} className="object-contain w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>
      </main>

      {/* Footer Section - Same as Home Page */}
      <footer className="w-full relative overflow-hidden bg-white/95 backdrop-blur-sm">
        {/* Blue Gradient - Right Bottom Corner with Enhanced Shadow Effect */}
        <div className="absolute bottom-0 right-0 w-2/5 h-2/5 bg-gradient-to-tl from-[#1c75c0]/30 via-[#1c75c0]/20 to-transparent pointer-events-none rounded-tl-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#1c75c0]/35 via-[#1c75c0]/25 to-transparent pointer-events-none blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-[#1c75c0]/40 via-[#1c75c0]/30 to-transparent pointer-events-none blur-xl"></div>

        {/* Top Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Column 1: Logo */}
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Link href="/">
                  <Image
                    src="/Logo_Revised(Grey).png"
                    alt="EscaBiz Logo"
                    width={260}
                    height={95}
                    className="h-auto max-h-20 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Column 2: Pakistan Office */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30">
                  <Image
                    src="/flag.png"
                    alt="Pakistan Flag"
                    width={24}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-base font-semibold text-black">Pakistan Office</h5>
              </div>
              <p className="text-sm text-black/80 leading-relaxed">
                F-36 PECHS BLOCK 6,<br />
                Karachi, Pakistan
              </p>
            </div>

            {/* Column 3: UK Office */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-4 flex-shrink-0">
                  <svg viewBox="0 0 900 600" className="w-full h-full">
                    <rect width="900" height="600" fill="#012169"/>
                    <path d="M0 0 L900 600 M900 0 L0 600" stroke="#FFFFFF" strokeWidth="120"/>
                    <path d="M0 0 L900 600 M900 0 L0 600" stroke="#C8102E" strokeWidth="80"/>
                    <path d="M0 300 L900 300 M450 0 L450 600" stroke="#FFFFFF" strokeWidth="180"/>
                    <path d="M0 300 L900 300 M450 0 L450 600" stroke="#C8102E" strokeWidth="120"/>
                  </svg>
                </div>
                <h5 className="text-base font-semibold text-black">UK Office</h5>
              </div>
              <p className="text-sm text-black/80 leading-relaxed">
                Unit A98 4-6 Greatorex Street,<br />
                London, United Kingdom, E15NF
              </p>
            </div>

            {/* Column 4: Follow Us */}
            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-black mb-4">Follow Us</h5>
              <div className="flex items-center space-x-3">
                <a href="#" className="w-10 h-10 bg-white/50 border border-gray-400/50 rounded-full flex items-center justify-center hover:bg-white/70 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/50 border border-gray-400/50 rounded-full flex items-center justify-center hover:bg-white/70 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/50 border border-gray-400/50 rounded-full flex items-center justify-center hover:bg-white/70 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/50 border border-gray-400/50 rounded-full flex items-center justify-center hover:bg-white/70 transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Email */}
        <div className="border-t border-gray-300/50">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-black text-center font-semibold">
              Email: <a href="mailto:info@escabiz.com" className="text-black hover:text-[#1c75c0] transition-colors duration-300">info@escabiz.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-300/50">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-black/80 text-center">
              © 2025 EscaBiz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


