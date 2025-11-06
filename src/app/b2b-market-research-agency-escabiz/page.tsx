'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function B2BIndustryAnalysis() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700 pt-[70px]">
          {/* Background Image Layer - Lowest z-index */}
          <div 
            className="absolute inset-0 top-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/b2b%20Industry.jpg)',
            }}
          ></div>
          

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* Heading */}
              <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              
              Business Insights for Smarter Decisions
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              ECSABIZ empowers B2B companies across the World to understand their target markets, identify opportunities, and drive strategic growth. Our custom market research solutions deliver actionable insights on market trends, pricing strategies, competitor performance, and customer behavior.              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg">
                <span className="relative z-10 flex items-center">
                  Get Started
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

        {/* Craft a Winning B2B Strategy Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Craft a Winning B2B Strategy: Start with Market Research
              </h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal max-w-3xl mx-auto">
                In today's competitive market, data is your strategy and EscaBiz ensures you have the right data to win.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-8">
              {/* Card 1: What Is B2B Market Research? */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0] text-center">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                  What Is B2B Market Research?
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal flex-grow font-normal transition-colors duration-300">
                  B2B Market Research is the process of collecting and analyzing data about other businesses your potential customers to understand their needs, preferences, buying behaviors, and decision-making patterns.
                </p>
              </div>

              {/* Card 2: Uncovering the "Why" Behind Actions */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0] text-center">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                  Uncovering the "Why" Behind Actions
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal flex-grow font-normal transition-colors duration-300">
                  Unlike simple data gathering, EscaBiz research goes deeper uncovering the "why" behind your customer's actions. Our insights help you make smarter decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Insights Help You Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/colleagues-working-project-discussing-details.jpg"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-1 lg:order-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2">
                  Our Insights Help You:
                </h3>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-6">
                  Transform data into actionable strategies that drive growth.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Identify profitable market segments",
                    "Anticipate trends before competitors",
                    "Build customer-driven marketing and sales strategies",
                    "Reduce risk with data-backed decisions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full border-2 border-[#1c75c0] flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal flex-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The ECSABIZ Difference Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Light Grey Container */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10">
              {/* Header - Centered */}
              <div className="max-w-4xl mx-auto text-center mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                  The ECSABIZ Difference
                </h3>
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#6f7074] leading-tight mb-4">
                  What Makes Our Market Research Stand Out?
                </h4>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal max-w-3xl mx-auto">
                  While most market research companies deliver basic data reports.
                </p>
              </div>

              {/* Two Cards Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Card 1: MRaaS */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-8 lg:p-10 border border-gray-200 hover:border-[#1c75c0] text-center min-h-[320px] flex flex-col justify-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-4">
                    Market Research as a Service (MRaaS)
                  </h5>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                    ECSABIZ provides Market Research as a Service (MRaaS) focusing on actionable insights, not just raw data.
                  </p>
                </div>

                {/* Card 2: Strategic Guidance */}
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-8 lg:p-10 border border-gray-200 hover:border-[#1c75c0] text-center min-h-[320px] flex flex-col justify-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-4">
                    Strategic Guidance
                  </h5>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                    We transform complex information into strategic guidance that helps your business grow faster and smarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Image Section */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
              <div className="relative w-full">
                <Image
                  src="/Banner-20 (1).jpg"
                  alt="Banner"
                  width={1400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Cards Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {/* Card 1: IDENTIFY */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center" style={{ boxShadow: '0 0 0 0 rgba(28, 117, 192, 0)', transition: 'all 0.5s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(28, 117, 192, 0.15), 0 0 0 1px rgba(28, 117, 192, 0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(28, 117, 192, 0)';
              }}>
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300">
                  IDENTIFY
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300">
                  Define your ideal market and target audience. EscaBiz helps you pinpoint industries, company sizes, and decision-makers that align perfectly with your business goals, providing a clear starting point for all subsequent strategies.
                </p>
              </div>

              {/* Card 2: ANALYZE */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center" style={{ boxShadow: '0 0 0 0 rgba(28, 117, 192, 0)', transition: 'all 0.5s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(28, 117, 192, 0.15), 0 0 0 1px rgba(28, 117, 192, 0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(28, 117, 192, 0)';
              }}>
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300">
                  ANALYZE
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300">
                  We collect and evaluate real-time market data from customer feedback and buying patterns to competitor strategies ensuring your tactical and long-term decisions are based on the most reliable and current intelligence available.
                </p>
              </div>

              {/* Card 3: STRATEGIZE */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center" style={{ boxShadow: '0 0 0 0 rgba(28, 117, 192, 0)', transition: 'all 0.5s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(28, 117, 192, 0.15), 0 0 0 1px rgba(28, 117, 192, 0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(28, 117, 192, 0)';
              }}>
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300">
                  STRATEGIZE
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300">
                  Our research team transforms raw data insights into tailored, actionable strategies. We help you effectively position your products and services, identify market gaps, and discover untapped opportunities for innovation.
                </p>
              </div>

              {/* Card 4: GROW */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center" style={{ boxShadow: '0 0 0 0 rgba(28, 117, 192, 0)', transition: 'all 0.5s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(28, 117, 192, 0.15), 0 0 0 1px rgba(28, 117, 192, 0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 0 rgba(28, 117, 192, 0)';
              }}>
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300">
                  GROW
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300">
                  This final stage converts validated strategies into measurable results. Use our findings to make robust, data-backed decisions that consistently lead to market expansion, improved ROI, and sustained competitive leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Image Section 1 */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
              <div className="relative w-full">
                <Image
                  src="/Banner-21 (1).jpg"
                  alt="Banner"
                  width={1400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* FROM INSIGHT TO IMPACT Section */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              {/* Left Column: Headings and Main Description */}
              <div className="flex flex-col">
                <h4 className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2">
                  From Insight to Impact
                </h4>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2">
                  Fuel Your Business Growth with EscaBiz
                </h3>
                <p className="text-base md:text-lg font-semibold text-[#6f7074] mb-6">
                  Build Market Confidence That Drives Real Results
                </p>
              </div>

              {/* Right Column: Accordion Panels */}
              <div className="flex flex-col">
                {/* Accordion Item 1: Understanding Market Demand */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 0 ? null : 0)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 0
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 0 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 0 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Understanding Market Demand
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 0 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        Don't guess what your audience needs know it. ECSABIZ helps you uncover the real challenges, goals, and purchasing patterns of your B2B clients, ensuring your strategy is always grounded in reality.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2: Strategic Positioning */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 1
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 1 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 1 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Strategic Positioning
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 1 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        Our insights guide you in refining your brand message and value proposition. We ensure your products and marketing align perfectly with market expectations and competitive advantages, maximizing impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3: Faster Decision-Making */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 2
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 2 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 2 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Faster Decision-Making
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 2 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        Time is money. ECSABIZ simplifies complex data into clear, actionable insights so your team can cut through the noise and make smarter, more confident strategic decisions — faster than the competition.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 4: Reduce Business Risks */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 3
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 3 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 3 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Reduce Business Risks
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 3 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        We provide the intelligence needed to see around corners. We help you anticipate market changes, predict emerging trends, and avoid costly strategic mistakes giving your company a crucial competitive edge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Image Section 2 */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
              <div className="relative w-full">
                <Image
                  src="/Banner-22 (1).jpg"
                  alt="Banner"
                  width={1400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: FAQ Content */}
              <div className="flex flex-col">
                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                  General Questions Frequently Asked Questions?
                </h3>

                {/* FAQ Accordion Items */}
                <div className="space-y-4">
                  {/* FAQ Item 1 */}
                  <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === 0 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        Q1: What is B2B market research, and why is it important for my business?
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === 0 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 0 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          B2B market research helps you understand your target business audience, optimize marketing strategies, and make informed decisions that drive growth.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === 1 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        Q2: How long does a typical B2B market research project take?
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === 1 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 1 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          Depending on project complexity, timelines range from 2 to 8 weeks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === 2 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        Q3: What are the costs associated with B2B market research?
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === 2 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 2 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          Our pricing is customized based on research depth, data collection methods, and scope.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 4 */}
                  <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === 3 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        Q4: How does ECSABIZ ensure data accuracy?
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === 3 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 3 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          We combine verified primary research (surveys, interviews) with secondary data validation for reliable results.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 5 */}
                  <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === 4 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        Q5: Can ECSABIZ customize the research for my specific industry?
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === 4 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 4 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          Absolutely. Every ECSABIZ project is tailored to your goals, audience, and niche market.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 6 */}
                  <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === 5 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === 5 ? null : 5)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        Q6: How can B2B market research help my business?
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === 5 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 5 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          It minimizes risk, improves targeting, and uncovers opportunities for growth and innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md mr-4 lg:mr-6">
                  <Image
                    src="/Group%201244832130.png"
                    alt="FAQ Visual"
                    width={450}
                    height={450}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  {/* Counter Badge */}
                  <div className="absolute top-4 right-4 bg-[#1c75c0] rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-white text-2xl md:text-3xl font-bold leading-tight">50K</p>
                    <p className="text-white text-sm md:text-base font-medium leading-tight">Prospects Identified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50/30 to-blue-50/10 rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                {/* Left Side: Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6f7074] leading-tight mb-4">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-4">
                    Leave your email below to start a new project with us. Let's build a pipeline full of opportunities — together.
                  </p>
                </div>

                {/* Right Side: Button */}
                <div className="flex-shrink-0">
                  <Link href="/lets-talk" className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
                    <span className="relative z-10 flex items-center">
                      B2B Market Research Consultation Today
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>
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
                ECSABIZ helps businesses grow smarter through data-driven B2B lead generation, targeted marketing, and automation solutions.
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

