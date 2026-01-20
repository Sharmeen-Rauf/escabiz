'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Type declarations for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export default function LetsTalk() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* Heading */}
              <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                We're the full package.
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                We'll help you win more deals, close faster, and grow smarter starting today. Don't wait. Your next paying client could be one form away.
              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Get Qualified Leads
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Explore How We Help - Professional Clean Design */}
        <section className="relative w-full bg-white py-6 md:py-8 lg:py-10 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Subtle accent line */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#1c75c0] to-transparent mb-4 mx-auto"></div>
              
              <h5 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
                Let's explore how we can help you
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal max-w-2xl mx-auto">
                We help businesses build the structure, systems, and strategy to turn leads into long term revenue. Get support in closing deals without the full time commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form - Professional Conceptual Design */}
        <section id="contact" className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row-reverse">
                {/* Right Section - Form */}
                <div className="w-full lg:w-[62%] p-6 sm:p-8 lg:p-10">
                  <span className="inline-block bg-[#1c75c0] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3 tracking-wider uppercase">
                    Contact
                  </span>
                  <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#6f7074] leading-tight mb-4 capitalize">
                    Tell us about your project
                  </h5>
                  {/* Simple form similar to home page */}
                  <form
                    className="space-y-4 mt-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      setSubmitMessage(null);

                      const formData = new FormData(e.currentTarget);
                      const data = {
                        serviceRequest: formData.get('service-request') || 'Not specified',
                        prefix: formData.get('prefix'),
                        name: formData.get('name'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        company: formData.get('company'),
                        additionalNotes: formData.get('additional-notes'),
                        discovery: formData.get('discovery') || 'Lets Talk Page',
                        consent: formData.get('consent') === 'on',
                      };

                      try {
                        const response = await fetch('/api/submit-form', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(data),
                        });

                        const result = await response.json();

                        if (response.ok) {
                          setSubmitMessage({ type: 'success', text: 'Thank you! Your request has been submitted successfully.' });
                          (e.target as HTMLFormElement).reset();
                          
                          // Track conversion for Google Analytics and Google Ads
                          if (typeof window !== 'undefined' && window.gtag) {
                            window.gtag('event', 'conversion', {
                              send_to: process.env.NEXT_PUBLIC_GA_ID,
                              event_category: 'form_submission',
                              event_label: 'Lets Talk Page Contact Form',
                              value: 1,
                              currency: 'USD',
                            });
                            
                            // Also track as a standard GA event
                            window.gtag('event', 'form_submission', {
                              event_category: 'engagement',
                              event_label: 'Lets Talk Page Contact Form',
                              value: 1,
                            });
                          }
                        } else {
                          setSubmitMessage({ type: 'error', text: result.error || 'Failed to submit form. Please try again.' });
                        }
                      } catch (error) {
                        setSubmitMessage({ type: 'error', text: 'Network error. Please try again.' });
                      } finally {
                        setIsSubmitting(false);
                        setTimeout(() => setSubmitMessage(null), 5000);
                      }
                    }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="name" type="text" placeholder="Your full name" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                      <input name="email" type="email" placeholder="you@example.com" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input name="phone" type="tel" placeholder="Phone number" required className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                      <select name="service-request" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none bg-white" defaultValue="">
                        <option value="" disabled>
                          Service of interest
                        </option>
                        <option>B2B Appointment Setting</option>
                        <option>Virtual Staffing</option>
                        <option>Prospecting & Research</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <input name="company" type="text" placeholder="Company name (optional)" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none" />
                    <div>
                      <select name="discovery" className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none bg-white" defaultValue="">
                        <option value="" disabled>
                          How did you find us?
                        </option>
                        <option value="google">Search Engine</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="event">Event / Webinar</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <textarea name="additional-notes" placeholder="Tell us a bit about your goals" rows={4} className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none resize-vertical" />
                    <label className="flex items-start gap-3 text-xs text-[#6f7074] leading-tight">
                      <input type="checkbox" name="consent" className="mt-1 w-4 h-4 text-[#1c75c0] border-gray-300 rounded focus:ring-[#1c75c0]" />
                      <span>
                        I consent to receive marketing communications from EscaBiz, and understand I can opt out at any time.
                      </span>
                    </label>
                    {submitMessage && (
                      <div
                        className={`px-4 py-3 rounded-lg text-sm ${
                          submitMessage.type === 'success'
                            ? 'bg-green-50 border border-green-200 text-green-700'
                            : 'bg-red-50 border border-red-200 text-red-700'
                        }`}
                      >
                        {submitMessage.text}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#1c75c0] hover:bg-[#1565a0] disabled:bg-[#a9a9a9] disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg"
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Message'}
                    </button>
                  </form>
                </div>
                {/* Left - Info */}
                <div className="w-full lg:w-[38%] bg-gradient-to-br from-gray-50/50 to-gray-100/50 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#6f7074] leading-tight mb-4 capitalize">
                      Why talk to us?
                    </h5>
                    <ul className="space-y-3 text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight">
                      <li className="flex items-start">
                        <span className="w-2.5 h-2.5 mr-3 mt-2 rounded-full bg-[#1c75c0] flex-shrink-0"></span>
                        <span>No obligation consultation with a growth strategist</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2.5 h-2.5 mr-3 mt-2 rounded-full bg-[#1c75c0] flex-shrink-0"></span>
                        <span>Industry specific playbooks and quick wins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2.5 h-2.5 mr-3 mt-2 rounded-full bg-[#1c75c0] flex-shrink-0"></span>
                        <span>Clear roadmap for leads, outreach, and closing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence - Elegant Conceptual Design */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h5 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                Our Global Presence
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal max-w-2xl mx-auto">
                Find us in key locations across the globe, ready to serve your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* UK */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image 
                    src="/United-Kingdom.jpg" 
                    alt="United Kingdom" 
                    fill 
                    className="object-contain bg-gray-50"
                    style={{ opacity: 0.6 }}
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
                    United Kingdom
                  </h5>
                  <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight mb-2">Unit A98 4-6, Greatorex Street, London, United Kingdom, E15NF</p>
                  <p className="text-xs sm:text-xs md:text-sm text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
              {/* US */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image 
                    src="/3435-3455-N-Belt-Line-Rd-Irving-TX-Building-.jpg" 
                    alt="Irving, United States" 
                    fill 
                    className="object-contain bg-gray-50"
                    style={{ opacity: 0.6 }}
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
                    United States
                  </h5>
                  <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight mb-2">3577 N Belt Line RD APT 169, Irving, TX 75062</p>
                  <p className="text-xs sm:text-xs md:text-sm text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
              {/* Pakistan */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <Image 
                    src="/hd-mazarequaid-karachi.jpg" 
                    alt="Karachi, Pakistan" 
                    fill 
                    className="object-contain bg-gray-50"
                    style={{ opacity: 0.6 }}
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
                    Pakistan
                  </h5>
                  <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight mb-2">F-36 PECHS BLOCK 6, Karachi, Pakistan</p>
                  <p className="text-xs sm:text-xs md:text-sm text-[#1c75c0]">info@escabiz.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect With Us - Professional Conceptual Design */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h5 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
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
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a className="w-10 h-10 rounded-full bg-white border border-gray-300/50 flex items-center justify-center hover:bg-gray-50 hover:border-[#1c75c0]/30 transition-colors duration-300 shadow-sm" href="#">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6a2 2 0 11-4 0 2 2 0 014 0zM2 8h4v12H2zm7 0h4v1.7c.6-1 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V20h-4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H9z"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* You are in great company - Elegant Conceptual Design */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h5 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6f7074] leading-tight text-center mb-4 capitalize">
              You are in great company
            </h5>
            <div className="relative overflow-hidden">
              <div className="flex items-center gap-8 animate-scroll-slider">
                {[
                  "logo-1 (1).jpg", "logo-2.jpg", "logo-3.jpg", "logo-4 (1).jpg", 
                  "logo-5.jpg", "logo-6.jpg", "logo-7.jpg", "logo-8.jpg", 
                  "logo-9.jpg", "logo-10.jpg", "logo-11.jpg", "logo-12.jpg", 
                  "logo-13.jpg", "logo-14.jpg", "logo-15.jpg", "logo-16.jpg",
                  "logo-1 (1).jpg", "logo-2.jpg", "logo-3.jpg", "logo-4 (1).jpg", 
                  "logo-5.jpg", "logo-6.jpg", "logo-7.jpg", "logo-8.jpg", 
                  "logo-9.jpg", "logo-10.jpg", "logo-11.jpg", "logo-12.jpg", 
                  "logo-13.jpg", "logo-14.jpg", "logo-15.jpg", "logo-16.jpg"
                ].map((src, i) => (
                  <div key={i} className="flex-shrink-0 w-32 h-16 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image src={`/${src}`} alt={`logo-${i + 1}`} width={128} height={64} className="object-contain w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Column 1: Logo and Contact Info */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="mb-3 -mt-2">
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

              {/* Description */}
              <p className="text-sm text-[#6f7074] leading-relaxed mb-6">
                Escabiz helps businesses grow smarter through data driven B2B lead generation, targeted marketing, and automation solutions.
              </p>

              {/* UK Address */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image
                    src="/images (1).png"
                    alt="UK Flag"
                    width={24}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  A98 Greatorex Street, London,<br />United Kingdom, E15NF
                </p>
              </div>

              {/* US Address */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image
                    src="/usa flag.png"
                    alt="US Flag"
                    width={24}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  3577 N Belt Line RD APT 169<br />Irving, TX 75062
                </p>
              </div>

              {/* Pakistan Address */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image
                    src="/flag.png"
                    alt="Pakistan Flag"
                    width={24}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  F-36 PECHS BLOCK 6,<br />Karachi, Pakistan
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#6f7074] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  info@escabiz.com
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col pl-4 lg:pl-6">
              <h5 className="text-base font-semibold text-[#6f7074] mb-4">Quick Links</h5>
              <div className="space-y-0">
                <Link href="/" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Home
                </Link>
                <Link href="/about" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  About Us
                </Link>
                <Link href="/b2b-appointment-setup" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Lead Development System
                </Link>
                <Link href="/commercial-cleaning" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Industries
                </Link>
                <Link href="/lets-talk" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2">
                  Lets Talk
                </Link>
              </div>
            </div>

            {/* Column 3: What We Do */}
            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-[#6f7074] mb-4">What We Do</h5>
              <div className="space-y-0">
                <Link href="/b2b-lead-appointment-setup" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Appointment Setup
                </Link>
                <Link href="/linkedin-automation-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  LinkedIn Automation
                </Link>
                <Link href="/virtual-staff-augmentation" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Email Marketing
                </Link>
                <Link href="/b2b-market-research-agency-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Industries Analysis
                </Link>
                <Link href="/industries/hr-recruiting" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  HR & Recruiting Services
                </Link>
                <Link href="/industries/commercial-cleaning" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2">
                  Finance VSA
                </Link>
              </div>
            </div>

            {/* Column 4: Connect */}
            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-[#6f7074] mb-4">Connect</h5>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 mb-6">
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Subscription Text */}
              <p className="text-sm text-[#6f7074] leading-loose mb-4">
                Keep up to date with latest news and updates about EscaBiz, simply subscribe with your email address.
              </p>

              {/* Email Subscription Form */}
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2.5 text-sm text-[#6f7074] border border-[#6f7074]/30 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#1c75c0] text-white px-4 py-2.5 rounded-lg hover:bg-[#1565a0] transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 rotate-[75deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-[#6f7074]/20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-[#6f7074] text-center">
              © 2025 EscaBiz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


