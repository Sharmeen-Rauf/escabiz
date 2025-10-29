'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative pt-[60px]">
        {/* Hero Section */}
        <section className="relative w-full min-h-[400px] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
          <div className="absolute inset-0 bg-[url('/colleagues-working-project-discussing-details.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                About EscaBiz
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed animate-fade-in-up-delay">
                Transforming Businesses Through Strategic Lead Development & Virtual Staff Solutions
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-base md:text-lg text-[#6f7074] leading-relaxed mb-6">
                  At EscaBiz, we don&apos;t just generate leads—we build predictable growth systems. Our mission is to help businesses scale faster by providing high-quality, targeted leads, guaranteed sales, and expert virtual staff augmentation solutions.
                </p>
                <p className="text-base md:text-lg text-[#6f7074] leading-relaxed">
                  We specialize in connecting companies with decision-makers who truly need their services, ensuring every lead has the potential to become a long-term client. With proven strategies and a results-driven approach, we transform client acquisition from a challenge into a competitive advantage.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1c75c0] to-blue-600 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Our Core Values
              </h2>
              <p className="text-base md:text-lg text-[#6f7074] max-w-3xl mx-auto">
                The principles that guide everything we do at EscaBiz
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Value 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-base text-[#6f7074] leading-relaxed">
                  We operate with transparency, honesty, and ethical practices in every interaction.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-base text-[#6f7074] leading-relaxed">
                  We strive for exceptional results and continuously improve our methods and strategies.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
                <p className="text-base text-[#6f7074] leading-relaxed">
                  We build lasting relationships with our clients, treating their success as our own.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-base text-[#6f7074] leading-relaxed">
                  We leverage cutting-edge technology and creative solutions to drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Why Choose EscaBiz?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1c75c0] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Guaranteed Results</h3>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    We don&apos;t just promise leads—we deliver measurable sales growth and real contracts that drive your business forward.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1c75c0] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    Specialized knowledge across Water Restoration, Commercial Maintenance, HR & Recruiting, and more.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1c75c0] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Teams</h3>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    Our expert sales professionals work as an extension of your team, handling everything from prospecting to closing.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1c75c0] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Full Transparency</h3>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    Real-time reporting and clear communication ensure you always know how your sales pipeline is performing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Our Offices
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                We serve clients globally with offices in the UK and Pakistan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* UK Office */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-8 flex-shrink-0">
                    <svg viewBox="0 0 900 600" className="w-full h-full">
                      <rect width="900" height="600" fill="#012169"/>
                      <path d="M0 0 L900 600 M900 0 L0 600" stroke="#FFFFFF" strokeWidth="120"/>
                      <path d="M0 0 L900 600 M900 0 L0 600" stroke="#C8102E" strokeWidth="80"/>
                      <path d="M0 300 L900 300 M450 0 L450 600" stroke="#FFFFFF" strokeWidth="180"/>
                      <path d="M0 300 L900 300 M450 0 L450 600" stroke="#C8102E" strokeWidth="120"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">UK Office</h3>
                </div>
                <p className="text-base text-white/90 leading-relaxed mb-4">
                  Unit A98 4-6 Greatorex Street
                </p>
                <p className="text-base text-white/90 leading-relaxed">
                  London, United Kingdom, E15NF
                </p>
              </div>

              {/* Pakistan Office */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-8 flex-shrink-0 rounded-sm overflow-hidden border border-white/20">
                    <svg viewBox="0 0 3 2" className="w-full h-full" preserveAspectRatio="none">
                      <rect width="0.75" height="2" fill="#01411C"/>
                      <rect x="0.75" width="2.25" height="2" fill="#FFFFFF"/>
                      <path d="M0.45 0.7 A0.2 0.2 0 0 1 0.45 1.3 A0.3 0.3 0 0 0 0.45 0.7 Z" fill="#FFFFFF"/>
                      <path d="M0.35 1 L0.37 0.9 L0.32 0.85 L0.42 0.85 L0.47 0.9 L0.45 1 L0.5 1.1 L0.4 1.05 L0.35 1.1 Z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Pakistan Office</h3>
                </div>
                <p className="text-base text-white/90 leading-relaxed mb-4">
                  F-36 PECHS BLOCK 6
                </p>
                <p className="text-base text-white/90 leading-relaxed">
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-[#1c75c0] py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let&apos;s discuss how EscaBiz can help you scale faster and achieve predictable growth.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#1c75c0] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* Footer - Reusing from home page */}
      <footer className="w-full bg-black text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Image
                  src="/navbar logo.png"
                  alt="EscaBiz Logo"
                  width={130}
                  height={58}
                  className="h-auto max-h-12 w-auto object-contain"
                  priority
                />
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
              <p className="text-sm text-white/80 leading-relaxed">
                F-36 PECHS BLOCK 6,<br />
                Karachi, Pakistan
              </p>
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
              <p className="text-sm text-white/80 leading-relaxed">
                Unit A98 4-6 Greatorex Street,<br />
                London, United Kingdom, E15NF
              </p>
            </div>

            <div className="flex flex-col">
              <h4 className="text-base font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex items-center space-x-3 mb-6">
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors duration-300">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-white text-center">
              Email: <a href="mailto:info@escabiz.com" className="text-[#1c75c0] hover:text-blue-400 transition-colors duration-300">info@escabiz.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-white/80 text-center">
              © 2025 EscaBiz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

