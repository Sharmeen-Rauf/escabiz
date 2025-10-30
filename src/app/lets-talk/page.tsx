'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function LetsTalk() {
  return (
    <>
      <Navbar />
      <main className="relative pt-[60px]">
        {/* Header Banner - left content, background image-style like homepage */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
          {/* Background with subtle blue tint */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/colleagues-working-project-discussing-details.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c75c0]/20 via-[#1c75c0]/15 to-[#1c75c0]/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/15 to-black/5" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl animate-fade-in-up">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                We’re the full package.
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-xl">
                We’ll help you win more deals, close faster, and grow smarter starting today. Don’t wait. Your next paying client could be one form away.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 hover:bg-[#1c75c0] transition-all duration-300 shadow-lg"
              >
                Talk To Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Explore How We Help - analytics-styled background */}
        <section className="relative w-full bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1c75c0" />
                  <stop offset="100%" stopColor="#6f7074" />
                </linearGradient>
              </defs>
              <g stroke="url(#g1)">
                <path d="M0 500 C 200 450, 300 520, 500 470 C 700 420, 900 520, 1200 470" strokeWidth="2" />
                <path d="M0 400 C 200 350, 300 420, 500 370 C 700 320, 900 420, 1200 370" strokeWidth="1.5" strokeDasharray="6 6" />
                <circle cx="180" cy="380" r="4" fill="#1c75c0" />
                <circle cx="520" cy="360" r="4" fill="#1c75c0" />
                <circle cx="920" cy="390" r="4" fill="#1c75c0" />
              </g>
            </svg>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Let’s explore how we can help you
              </h3>
              <p className="text-base md:text-lg text-[#6f7074] leading-relaxed">
                We help businesses build the structure, systems, and strategy to turn leads into long-term revenue. Get support in closing deals without the full-time commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form - same as home page style */}
        <section id="contact" className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row-reverse">
                {/* Right Section - Form */}
                <div className="w-full lg:w-[62%] p-6 sm:p-8 lg:p-12">
                  <span className="inline-block bg-[#1c75c0] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                    Contact
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Tell us about your project
                  </h3>
                  {/* Simple form similar to home page */}
                  <form className="space-y-5">
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
                <div className="w-full lg:w-[38%] bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why talk to us?</h3>
                    <ul className="space-y-4 text-[#6f7074]">
                      <li className="flex items-start">
                        <span className="w-5 h-5 mr-3 text-[#1c75c0]">✓</span> No-obligation consultation with a growth strategist
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 mr-3 text-[#1c75c0]">✓</span> Industry-specific playbooks and quick wins
                      </li>
                      <li className="flex items-start">
                        <span className="w-5 h-5 mr-3 text-[#1c75c0]">✓</span> Clear roadmap for leads, outreach, and closing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Our Global Presence</h3>
              <p className="text-base md:text-lg text-[#6f7074]">Find us in key locations across the globe, ready to serve your business needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* UK */}
              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative h-56">
                  <Image src="/images (1).png" alt="United Kingdom flag" fill className="object-cover bg-gray-900/5" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">United Kingdom</h4>
                  <p className="text-[#6f7074] mb-2">Unit A98 4-6, Greatorex Street, London, United Kingdom, E15NF</p>
                  <p className="text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
              {/* Pakistan */}
              <div className="rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <div className="relative h-56">
                  <Image src="/images.png" alt="Pakistan flag" fill className="object-cover bg-gray-900/5" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Karachi Office, Pakistan</h4>
                  <p className="text-[#6f7074] mb-2">F-36 PECHS BLOCK 6, Karachi, Pakistan</p>
                  <p className="text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us */}
        <section className="relative w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">Connect With Us</h3>
            <p className="text-white/90 max-w-3xl mx-auto mb-10">Follow EscaBiz on social media for the latest updates and insights.</p>
            <div className="flex justify-center gap-4">
              <a className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition" href="#">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.2l-.35 3h-1.85v7A10 10 0 0022 12"/></svg>
              </a>
              <a className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition" href="#">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zm5.8-2.8a1 1 0 11-2 0 1 1 0 012 0z"/></svg>
              </a>
              <a className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition" href="#">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6a2 2 0 11-4 0 2 2 0 014 0zM2 8h4v12H2zm7 0h4v1.7c.6-1 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V20h-4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H9z"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* You are in great company - logos slider (simple auto-scroll) */}
        <section className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">You are in great company</h3>
            <div className="relative">
              <div className="flex items-center gap-10 animate-[scroll_25s_linear_infinite]">
                {["logo-12.jpg","logo-13.jpg","logo-15.jpg","logo-16.jpg","logo-12.jpg","logo-13.jpg","logo-15.jpg","logo-16.jpg"].map((src, i) => (
                  <div key={i} className="flex-shrink-0 w-40 h-20 grayscale hover:grayscale-0 transition">
                    <Image src={`/${src}`} alt={`logo-${i}`} width={160} height={80} className="object-contain w-full h-full" />
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

      {/* Footer - reuse home footer pattern */}
      <footer className="w-full bg-black text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Link href="/">
                  <Image src="/navbar logo.png" alt="EscaBiz Logo" width={130} height={58} className="h-auto max-h-12 w-auto object-contain" />
                </Link>
              </div>
              <div className="mt-4 space-y-2">
                <Link href="/" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">Home</Link>
                <Link href="/about" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">About Us</Link>
                <Link href="/lets-talk" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">Let's Talk</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-white/20">
                  <svg viewBox="0 0 3 2" className="w-full h-full" preserveAspectRatio="none">
                    <rect width="0.75" height="2" fill="#01411C"/>
                    <rect x="0.75" width="2.25" height="2" fill="#FFFFFF"/>
                    <path d="M0.45 0.7 A0.2 0.2 0 0 1 0.45 1.3 A0.3 0.3 0 0 0 0.45 0.7 Z" fill="#FFFFFF"/>
                    <path d="M0.35 1 L0.37 0.9 L0.32 0.85 L0.42 0.85 L0.47 0.9 L0.45 1 L0.5 1.1 L0.4 1.05 L0.35 1.1 Z" fill="#FFFFFF"/>
                  </svg>
                </div>
                <h4 className="text-base font-semibold text-white">Pakistan Office</h4>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">F-36 PECHS BLOCK 6,<br/>Karachi, Pakistan</p>
            </div>
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
                <h4 className="text-base font-semibold text-white">UK Office</h4>
              </div>
              <p className="text-sm text:white/80 leading-relaxed">Unit A98 4-6 Greatorex Street,<br/>London, United Kingdom, E15NF</p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-base font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex items-center space-x-3 mb-6">
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/></svg>
                </a>
              </div>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-300">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-white text-center">Email: <a href="mailto:info@escabiz.com" className="text-[#1c75c0] hover:text-blue-400">info@escabiz.com</a></p>
          </div>
        </div>
        <div className="border-t border-gray-700">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-white/80 text-center">© 2025 EscaBiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}


