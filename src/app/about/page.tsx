'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative pt-[60px]">
        {/* Who We Are Header Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden bg-slate-700">
          {/* Background Image Layer - Lowest z-index just like home page */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/About Us.jpg)',
            }}
          ></div>
          
          {/* Overlay Layers - Light blue overlay like home page */}
          <div className="absolute inset-0 z-[1]">
            {/* Light Blue Overlay - Just like home page */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c75c0]/40 via-[#1c75c0]/35 to-[#1c75c0]/30"></div>
            {/* Subtle dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/15"></div>
            {/* Fallback background color if image not loaded */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/60 via-slate-600/50 to-slate-500/60"></div>
          </div>
          
          {/* Animated floating shapes - Very subtle */}
          <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#1c75c0]/5 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-float-delay"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-float-slow"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl animate-fade-in-up">
              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-left drop-shadow-lg">
                Who we are?
              </h3>

              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-10 max-w-xl animate-slide-in-left-delay drop-shadow-md">
                We are more than a service provider — we are your growth partner. From generating leads to closing deals, we help businesses scale faster, smarter, and stronger.
              </p>

              {/* Button with enhanced animation */}
              <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 animate-fade-in-delay relative overflow-hidden shadow-lg">
                <span className="relative z-10 flex items-center">
                  Get Started Today
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </button>
            </div>
          </div>
        </section>

        {/* Animated Cards Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* Animated Black Div Behind */}
          <div className="absolute inset-0 bg-black/5 transform scale-y-150 origin-center animate-pulse"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Card 1: Our Clients */}
              <div 
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-[#1c75c0] p-8 text-center transition-all duration-500 ${hoveredCard === 1 ? 'h-64' : 'h-56'}`}>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="absolute top-2 -right-2 flex">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Our Clients</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Trusted by companies across industries like Water Restoration, Commercial Maintenance, and HR & Recruiting to achieve consistent growth.
                  </p>
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/colleagues-working-project-discussing-details.jpg')] bg-cover bg-center opacity-60"></div>
                </div>
              </div>

              {/* Card 2: Our Work */}
              <div 
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-white p-8 text-center transition-all duration-500 ${hoveredCard === 2 ? 'h-64' : 'h-56'}`}>
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200">
                    <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Work</h3>
                  <p className="text-sm text-[#6f7074] leading-relaxed">
                    We deliver qualified leads, build sales teams, and design strategies that help businesses scale with confidence.
                  </p>
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/colleagues-working-project-discussing-details.jpg')] bg-cover bg-center opacity-60"></div>
                </div>
              </div>

              {/* Card 3: Our Team */}
              <div 
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-white p-8 text-center transition-all duration-500 ${hoveredCard === 3 ? 'h-64' : 'h-56'}`}>
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200">
                    <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team</h3>
                  <p className="text-sm text-[#6f7074] leading-relaxed">
                    A dedicated group of growth specialists, marketers, and sales professionals focused on driving your success.
                  </p>
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/colleagues-working-project-discussing-details.jpg')] bg-cover bg-center opacity-60"></div>
                </div>
              </div>

              {/* Card 4: Project Timeline */}
              <div 
                className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`bg-white p-8 text-center transition-all duration-500 ${hoveredCard === 4 ? 'h-64' : 'h-56'}`}>
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200">
                    <svg className="w-12 h-12 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Timeline</h3>
                  <p className="text-sm text-[#6f7074] leading-relaxed">
                    From planning to execution, we ensure timely delivery and measurable results for every client.
                  </p>
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/colleagues-working-project-discussing-details.jpg')] bg-cover bg-center opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 text-center">
                Our Story
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1c75c0] leading-tight mb-8 text-center">
                Empowering Businesses to Grow with Confidence
              </h4>
              <p className="text-base md:text-lg text-[#6f7074] leading-relaxed text-center">
                We started with a simple vision — to help businesses grow without the constant struggle of finding new clients. Over the years, we&apos;ve built a system that combines targeted lead generation, dedicated sales teams, and client acquisition strategies to ensure consistent results. Today, we proudly partner with companies in industries like Water Restoration, Commercial Maintenance, HR & Recruiting, and more, empowering them to scale with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission and Vision Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Our Mission */}
              <div>
                <div className="flex items-center mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold">
                    <span className="text-gray-900">Our</span>{' '}
                    <span className="text-[#1c75c0]">Mission</span>
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-24 h-24 bg-[#1c75c0] rounded-full flex items-center justify-center opacity-10 transform rotate-12"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1c75c0] to-blue-600 rounded-full flex items-center justify-center mb-6 ml-auto">
                      <span className="text-white text-4xl font-bold">&quot;</span>
                    </div>
                    <p className="text-base md:text-lg text-[#6f7074] leading-relaxed">
                      To empower businesses by delivering qualified leads, guaranteed sales support, and strategic growth solutions, so they can focus on what they do best serving their clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Vision */}
              <div>
                <div className="flex items-center mb-6">
                  <h3 className="text-4xl md:text-5xl font-bold">
                    <span className="text-gray-900">Our</span>{' '}
                    <span className="text-[#1c75c0]">Vision</span>
                  </h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-4 left-4 w-24 h-24 bg-[#1c75c0] rounded-full flex items-center justify-center opacity-10 transform -rotate-12"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1c75c0] to-blue-600 rounded-full flex items-center justify-center mb-6 ml-auto">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <p className="text-base md:text-lg text-[#6f7074] leading-relaxed">
                      To become the most trusted growth partner for businesses worldwide, setting the standard for lead generation and sales management services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Leadership Section */}
        <section className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1c75c0] rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Our Leadership
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-8">
                Leadership That Drives Real Growth
              </h4>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                Behind our success is a team of experienced leaders, marketing strategists, and sales professionals who bring years of expertise in driving business growth. With a deep understanding of industry-specific challenges, our leadership ensures that every client receives tailored solutions that deliver real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Leadership Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 bg-[#1c75c0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-3">Strategic Vision</h4>
                <p className="text-sm text-white/80 text-center">
                  Experienced leaders who chart the course for sustainable growth.
                </p>
              </div>

              {/* Leadership Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 bg-[#1c75c0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-3">Marketing Excellence</h4>
                <p className="text-sm text-white/80 text-center">
                  Marketing strategists who create campaigns that drive results.
                </p>
              </div>

              {/* Leadership Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 bg-[#1c75c0] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white text-center mb-3">Sales Mastery</h4>
                <p className="text-sm text-white/80 text-center">
                  Sales professionals who close deals and build lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                OUR VALUES
              </h3>
              <p className="text-lg md:text-xl text-[#1c75c0] font-semibold">
                Road Map of Our Core Principles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Value 1 */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-[#1c75c0] overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1c75c0]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ship & Iterate</h4>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    We move swiftly, refining our approach with every step to maintain a leading edge.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-[#1c75c0] overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#1c75c0]/5 rounded-full -ml-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Trusted Pair of Hands</h4>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    Dependable and steadfast, we are always there when it matters most.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-[#1c75c0] overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1c75c0]/5 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Overdeliver on the Promise</h4>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    Exceeding expectations is our standard, going beyond what&apos;s assured.
                  </p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-[#1c75c0] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1c75c0]/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Clear is Kind</h4>
                  <p className="text-base text-[#6f7074] leading-relaxed">
                    Transparent, honest communication keeps everyone on the same page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Performance Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Our Performance
                </h3>
                <p className="text-base md:text-lg text-[#6f7074] leading-relaxed">
                  With years of experience and proven strategies, we help businesses grow smarter and faster. From lead generation to client acquisition, our team delivers measurable results that strengthen brands and drive long term success.
                </p>
              </div>
              
              {/* Right Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/Gemini_Generated_Image_j3y59jj3y59jj3y5.png"
                    alt="Our Performance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Great Result Section with World Map */}
        <section className="relative w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* Animated World Map Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M200 100 C 250 50, 300 150, 400 100 C 500 50, 600 150, 700 100 C 800 50, 900 150, 1000 100" stroke="#1c75c0" strokeWidth="2" fill="none"/>
              <circle cx="300" cy="200" r="30" fill="#1c75c0" opacity="0.5"/>
              <circle cx="600" cy="150" r="30" fill="#1c75c0" opacity="0.5"/>
              <circle cx="900" cy="250" r="30" fill="#1c75c0" opacity="0.5"/>
              <path d="M150 300 L 1050 300" stroke="#1c75c0" strokeWidth="1" strokeDasharray="5,5"/>
              <path d="M150 400 L 1050 400" stroke="#1c75c0" strokeWidth="1" strokeDasharray="5,5"/>
              <path d="M150 500 L 1050 500" stroke="#1c75c0" strokeWidth="1" strokeDasharray="5,5"/>
            </svg>
          </div>
          
          {/* Animated dots */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => {
              const seed = i * 137.5;
              const left = ((seed % 1000) / 10) % 100;
              const top = (((seed * 1.618) % 1000) / 10) % 100;
              return (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#1c75c0] rounded-full animate-pulse"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${(seed % 200) / 100}s`,
                    animationDuration: `${2 + ((seed % 200) / 100)}s`
                  }}
                ></div>
              );
            })}
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Great Result
              </h3>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-8">
                Sharing Our Expertise
              </h4>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                We specialize in virtual staff augmentation and lead generation, helping businesses scale faster with skilled teams and qualified leads. Our expertise ensures you get the right people and the right opportunities to grow smarter and stronger.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Ending Section - Just like home page */}
        <section className="w-full bg-[#1c75c0] py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let&apos;s discuss how EscaBiz can help you scale faster and achieve predictable growth.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#1c75c0] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Link href="/">
                  <Image
                    src="/navbar logo.png"
                    alt="EscaBiz Logo"
                    width={130}
                    height={58}
                    className="h-auto max-h-12 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>
              <div className="mt-4 space-y-2">
                <Link href="/" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">
                  Home
                </Link>
                <Link href="/about" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
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
