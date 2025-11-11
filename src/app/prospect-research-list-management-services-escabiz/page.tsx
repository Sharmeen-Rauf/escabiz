'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function ProspectResearchListManagement() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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
              backgroundImage: 'url(/prospect%20research%20banner.jpg)',
            }}
          ></div>
          
          {/* Color Overlay */}
          <div 
            className="absolute inset-0 top-0 z-[1]"
            style={{
              backgroundColor: '#1b76bf',
              opacity: 0.4,
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* Heading */}
              <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Fuel Your Sales with Precision Data
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              B2B Prospect Research & List Management ServicesFrom Raw Data to Revenue Opportunities

</p>

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

        {/* Finding Verified Leads Section */}
    
        {/* ECSABIZ Turns Information into Actionable Intelligence Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                  ECSABIZ Turns Information into Actionable Intelligence
                </h3>
                
                {/* Complete Paragraph */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-6">
                  Prospect Research and List Management are the backbone of any successful lead generation strategy. We provide the foundation for targeted, high-return B2B engagement. Prospect Research is the process of identifying, analyzing, and qualifying potential customers who fit your ideal buyer persona. It involves studying company size, industry, buying behavior, and decision-making roles to pinpoint exactly who's worth your time. List Management, on the other hand, ensures that your contact database remains accurate, organized, and enriched ready for personalized outreach campaigns. It includes data cleaning, segmentation, verification, and enrichment to maintain the integrity and quality of your pipeline.
                </p>
                
                {/* Button */}
                <Link href="/lets-talk" className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Get Started with Verified Data
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Right Side - Image */}
              <div className="order-1 lg:order-2">
                <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/colleagues-working-project-discussing-details.jpg"
                    alt="Prospect Research"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Prospect Research & List Management Services Include Section */}
       

        {/* Together, these services fuel your sales engine Section */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white pt-0 pb-10 md:pb-14 lg:pb-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-semibold text-[#6f7074] leading-tight">
                Together, these services fuel your sales engine:
              </h3>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {/* Card 1: Fuel your sales engine */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Paragraph */}
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Fuel your sales engine with clean, targeted B2B data.
                  </p>
                </div>
              </div>

              {/* Card 2: Help you reach decision-makers */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Paragraph */}
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Help you reach decision-makers faster and close deals smarter.
                  </p>
                </div>
              </div>

              {/* Card 3: Maximize personalization */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Paragraph */}
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Maximize personalization for higher engagement and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
              Our Prospect Research & List Management Services Include
            </h3>
            
            {/* Paragraph */}
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-8 text-center max-w-4xl mx-auto">
              ECSABIZ provides a full-spectrum solution to build, maintain, and refine your B2B data ecosystem. We transform raw information into actionable intelligence, ensuring your sales pipeline is always focused and high-quality.
            </p>

            {/* Cards Grid - 2 rows x 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: In-Depth Prospect Research */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                  In-Depth Prospect Research
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  We identify high-value prospects that perfectly match your Ideal Customer Profile (ICP) through manual research and verified databases.
                </p>
              </div>

              {/* Card 2: ICP Development & Targeting */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                  ICP Development & Targeting
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  We help you define the perfect buyer persona by analyzing your current clients, market patterns, and industry trends to ensure precision targeting.
                </p>
              </div>

              {/* Card 3: Data Verification & Validation */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                  Data Verification & Validation
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  Our team cross-checks every record using multiple data sources ensuring <strong className="font-semibold">95% accuracy or higher</strong> in your critical outreach lists.
                </p>
              </div>

              {/* Card 4: List Cleaning & Deduplication */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                  List Cleaning & Deduplication
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  Remove outdated, duplicate, or irrelevant contacts. Keep your CRM lean, optimized, and ready for high-efficiency conversion.
                </p>
              </div>

              {/* Card 5: Segmentation & Personalization */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                  Segmentation & Personalization
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  We categorize your lists based on industry, size, intent, or engagement level for tailored campaigns that deliver exceptional results.
                </p>
              </div>

              {/* Card 6: Continuous List Management */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                  Continuous List Management
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  Your list is never static ECSABIZ continuously updates and enriches your data to keep it relevant, fresh, and effective long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Power Your Outreach with Smart Prospect Research Section - Flip Cards */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Subtitle */}
            <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2 text-center">
              Power Your Outreach with Smart Prospect Research
            </p>
            
            {/* Heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-12 text-center">
              Find. Verify. Connect. – ECSABIZ Turns Data into Deals
            </h3>

            {/* Flip Cards Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Card 1: IDENTIFY */}
              <div className="group h-[280px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-sm border border-[#1c75c0] p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-white/20 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    {/* Title */}
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3">
                      Identify
                    </h5>
                    <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal">
                      Know exactly who your best prospects are before you reach out.
                    </p>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-lg bg-[#6f7074]/10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#6f7074]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6f7074] leading-relaxed font-normal">
                      ECSABIZ digs deep into industry data, company hierarchies, and decision-maker profiles to identify the most relevant contacts for your business. We don't just scrape data — we build meaningful, targeted prospect lists designed to match your <strong className="font-semibold text-white">Ideal Customer Profile (ICP)</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: RESEARCH */}
              <div className="group h-[280px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-sm border border-[#1c75c0] p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-white/20 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    {/* Title */}
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3">
                      Research
                    </h5>
                    <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal">
                      We go beyond names and emails.
                    </p>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-lg bg-[#6f7074]/10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#6f7074]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6f7074] leading-relaxed font-normal">
                      Our research specialists gather verified, up-to-date contact information, including job titles, company size, revenue, and buying intent. We ensure every lead in your database is <strong className="font-semibold text-white">accurate, compliant, and ready for outreach</strong>, saving your team from wasting hours on bad data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: SEGMENT */}
              <div className="group h-[280px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-sm border border-[#1c75c0] p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-white/20 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                    </div>
                    {/* Title */}
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3">
                      Segment
                    </h5>
                    <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal">
                      Turn raw data into actionable intelligence.
                    </p>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-lg bg-[#6f7074]/10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#6f7074]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6f7074] leading-relaxed font-normal">
                      ECSABIZ helps you organize and categorize prospects by industry, region, buying stage, or engagement level — allowing for <strong className="font-semibold text-white">laser-focused campaigns that convert</strong>. Better segmentation means better personalization, and better personalization means higher conversions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: MANAGE */}
              <div className="group h-[280px] [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-sm border border-[#1c75c0] p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-white/20 rounded-lg p-3 w-16 h-16 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    {/* Title */}
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3">
                      Manage
                    </h5>
                    <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal">
                      Keep your pipeline clean and conversion-ready.
                    </p>
                  </div>
                  
                  {/* Back of Card */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)]">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div className="w-14 h-14 rounded-lg bg-[#6f7074]/10 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#6f7074]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6f7074] leading-relaxed font-normal">
                      Our List Management Services ensure your contact data stays <strong className="font-semibold text-white">fresh, accurate, and deduplicated</strong>. We continuously update, verify, and enrich your lists with the latest market insights — so your sales team always works with the most current and qualified data.
                    </p>
                  </div>
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
                  src="/Banner-27 (2).jpg"
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

        {/* From "Cold Data" to "Warm Leads" Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
              From "Cold Data" to "Warm Leads" ECSABIZ Powers Your Pipeline with Accuracy and Strategy
            </h3>
            
            {/* Paragraph */}
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-12 text-center max-w-4xl mx-auto">
              Why Businesses Choose ECSABIZ for Prospect Research & List Management
            </p>

            {/* Vertical Cards Grid - 4 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Card 1: Data That Drives Results */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center min-h-[380px] flex flex-col justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-4">
                  Data That Drives Results
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                  We don't believe in quantity we believe in quality data that leads to real conversations and conversions.
                </p>
              </div>

              {/* Card 2: Save Time and Resources */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center min-h-[380px] flex flex-col justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-4">
                  Save Time and Resources
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                  Eliminate manual research and maintenance. ECSABIZ handles the heavy lifting so your sales team can focus on engaging and closing.
                </p>
              </div>

              {/* Card 3: Compliance You Can Trust */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center min-h-[380px] flex flex-col justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-4">
                  Compliance You Can Trust
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                  All data is collected ethically and in full GDPR, CAN-SPAM, and CCPA compliance, ensuring your outreach remains professional and safe.
                </p>
              </div>

              {/* Card 4: Smarter Targeting */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center min-h-[380px] flex flex-col justify-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                {/* Title */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-4">
                  Smarter Targeting
                </h5>
                {/* Description */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                  With better segmentation and enriched profiles, your outreach becomes precise, personal, and powerful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Image Section */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image
              src="/Banner-26 (2).jpg"
              alt="Banner"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content Card Container */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Tab Navigation - Linear Slider on Card */}
              <div className="p-6 md:p-8 lg:p-10 pb-6 md:pb-8 border-b border-gray-200">
                <div 
                  className="flex overflow-x-auto justify-center -mx-4 px-4 md:mx-0 md:px-0 gap-2 md:gap-3"
                  style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <style dangerouslySetInnerHTML={{ __html: `
                    .overflow-x-auto::-webkit-scrollbar {
                      display: none;
                    }
                  `}} />
                  {[
                    { id: 0, title: 'InsightMatrix Technologies', titleParts: ['InsightMatrix', 'Technologies'], icon: 'M9 17v-4a2 2 0 012-2h2a2 2 0 012 2v4m1-12h-2m-2 0h-2M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM4 7v6a2 2 0 002 2h12a2 2 0 002-2V7' },
                    { id: 1, title: 'BrightWave Logistics', titleParts: ['BrightWave', 'Logistics'], icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
                    { id: 2, title: 'Nexon Creative Studio', titleParts: ['Nexon Creative', 'Studio'], icon: 'M7 21a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2h-10zM12 7v10m-3-5h6' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`group flex-shrink-0 flex flex-col items-center justify-center text-center px-4 py-3 md:px-5 md:py-4 rounded-xl transition-all duration-300 min-w-[90px] md:min-w-[120px] border-2 ${
                        activeTab === tab.id
                          ? 'bg-[#1c75c0] text-white border-[#1c75c0] shadow-lg shadow-[#1c75c0]/30'
                          : 'bg-gray-100 text-[#6f7074] border-transparent hover:bg-[#1c75c0] hover:text-white hover:border-[#1c75c0] hover:shadow-lg hover:shadow-[#1c75c0]/30'
                      }`}
                    >
                      <div className="w-6 h-6 md:w-7 md:h-7 mb-2">
                        <svg
                          className={`w-full h-full transition-colors duration-300 ${
                            activeTab === tab.id
                              ? 'text-white'
                              : 'text-[#1c75c0] group-hover:text-white'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                        </svg>
                      </div>
                      <span className={`text-xs md:text-sm font-semibold leading-tight transition-colors duration-300 ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'text-[#6f7074] group-hover:text-white'
                      }`}>
                        {tab.titleParts.length > 1 ? (
                          <>
                            {tab.titleParts[0]}<br />{tab.titleParts[1]}
                          </>
                        ) : (
                          tab.title
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Slider - Content Left, Image Right */}
              {[
                {
                  heading: 'Driving Workflow Efficiency',
                  paragraphs: [
                    'About: InsightMatrix Technologies provides workflow automation solutions for SMBs across the U.S.',
                    'Challenge: They needed accurate data to target operations and IT managers.',
                    '4-Month Stats:',
                    '• Calls Made: 12,645',
                    '• Decision Makers Identified: 882',
                    '• Follow-Ups: 190',
                    '• Meetings Booked: 74',
                    'Result: CRM enrichment dropped bounce rates by 37% and boosted meeting conversions by 52%.',
                  ],
                  image: '/colleagues-working-project-discussing-details.jpg',
                },
                {
                  heading: 'Expanding Partner Networks',
                  paragraphs: [
                    'About: BrightWave wanted to grow its network of manufacturing partners and vendors.',
                    'Challenge: No reliable database to reach procurement executives.',
                    '4-Month Stats:',
                    '• Calls Made: 9,983',
                    '• Decision Makers Connected: 564',
                    '• Follow-Ups: 142',
                    '• Meetings Booked: 58',
                    'Result: Achieved 91% verified contact accuracy and tripled qualified opportunities in one quarter.',
                  ],
                  image: '/colleagues-working-project-discussing-details.jpg',
                },
                {
                  heading: 'Data-Driven Creative Outreach',
                  paragraphs: [
                    'About: Nexon Creative struggled to connect with marketing directors in U.S. enterprises.',
                    'Challenge: Outdated and unreliable in-house data.',
                    '4-Month Stats:',
                    '• Calls Made: 8,412',
                    '• Decision Makers Reached: 731',
                    '• Follow-Ups: 120',
                    '• Meetings Booked: 46',
                    'Result: Boosted reply rate by 40% and increased revenue by 27% through qualified B2B outreach.',
                  ],
                  image: '/colleagues-working-project-discussing-details.jpg',
                },
              ].map((content, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeTab === index
                      ? 'opacity-100 block'
                      : 'opacity-0 hidden'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10 pt-0">
                    {/* Left Side - Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                        {content.heading}
                      </h3>
                      {content.paragraphs.map((para, pIndex) => (
                        <p
                          key={pIndex}
                          className={`text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-3 ${
                            pIndex === content.paragraphs.length - 1
                              ? 'border-l-4 border-[#1c75c0] pl-4 mt-4 text-[#6f7074]'
                              : ''
                          }`}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                    {/* Right Side - Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <div className="aspect-[4/3] relative w-full">
                        <Image
                          src={content.image}
                          alt={content.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Overlay Section */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] w-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/11%20%281%29.jpg" 
                  alt="Prospect Research" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col justify-center h-full p-6 md:p-8 lg:p-10 max-w-2xl">
                <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight mb-3">
                  Cleaner data. Smarter outreach. Faster results.
                </h6>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  ECSABIZ helps businesses transform unorganized data into targeted, revenue-driving insights.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  Let's build your next high-performance lead list together.
                </p>
                <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg bg-white/20 hover:bg-white/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 relative overflow-hidden w-fit">
                  <span className="relative z-10 flex items-center">
                    Contact ECSABIZ
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The ECSABIZ Advantage Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                The ECSABIZ Advantage
              </h2>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                Smart Data for Smarter Decisions
              </p>
            </div>

            {/* Main Content Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Central Circle */}
              <div className="flex justify-center mb-12 md:mb-16">
                <div className="relative bg-[#1c75c0] rounded-full w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">4</div>
                    <div className="text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">
                      Advantages of
                    </div>
                    <div className="text-sm md:text-base lg:text-lg font-semibold text-white leading-tight">
                      ECSABIZ
                    </div>
                  </div>
                </div>
              </div>

              {/* Advantages Grid */}
              <div className="relative bg-white rounded-3xl shadow-xl px-6 sm:px-8 lg:px-12 py-12 lg:py-16 border border-gray-100">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
                  {/* Center Circle */}
                  <div className="relative">
                    <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#1c75c0] to-[#0d4f87] flex flex-col items-center justify-center text-white shadow-2xl shadow-[#1c75c0]/40">
                      <span className="text-3xl font-bold">4</span>
                      <span className="text-sm font-semibold text-white/90">Advantages of</span>
                      <span className="text-sm font-semibold text-white/90">ECSABIZ</span>
                    </div>
                  </div>

                  {/* Cards Container */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {[
                      {
                        number: '01',
                        title: 'Industry-Specific Expertise',
                        description: 'Whether it's SaaS, Healthcare, E-commerce, or Finance — ECSABIZ identifies and delivers prospects that matter.',
                      },
                      {
                        number: '02',
                        title: 'Decision-Maker Targeting',
                        description: 'Connect directly with CEOs, Directors, and Managers — the real decision makers.',
                      },
                      {
                        number: '03',
                        title: 'Geo-Targeted Precision',
                        description: 'Focus on any region or market segment across the USA or globally.',
                      },
                      {
                        number: '04',
                        title: 'Custom Solutions',
                        description: 'Tailored to your campaign goals, target audience, and budget — not a one size fits all approach.',
                      },
                    ].map((card, index) => (
                      <div
                        key={card.number}
                        className={`relative bg-white border border-[#1c75c0]/10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 lg:p-6 flex items-start gap-4
                          ${index % 2 === 0 ? 'md:pl-12 lg:pl-16' : 'md:pr-12 lg:pr-16'}
                        `}
                      >
                        {/* Decorative Ring */}
                        <span
                          className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#1c75c0]/20 transition-transform duration-300
                            ${index % 2 === 0 ? '-left-6 md:-left-8 lg:-left-10' : '-right-6 md:-right-8 lg:-right-10'}
                          `}
                        ></span>

                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-10 h-10 rounded-full bg-[#1c75c0] text-white flex items-center justify-center font-semibold">
                            {card.number}
                          </div>
                        </div>
                        <div className="relative z-10">
                          <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-1.5">
                            {card.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-[#a9a9a9] leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column: FAQ Content */}
              <div className="flex flex-col">
                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                  FAQs — We're Here to Answer All Your Questions
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
                        Q1: What makes ECSABIZ Prospect Research different from typical data vendors?
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
                        <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">
                          We don't sell data — we build it for you. ECSABIZ focuses on custom research and verified insights, ensuring accuracy and relevance for your specific business goals.
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
                        Q2: How accurate is the data you deliver?
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
                        <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">
                          Our multi-step verification process maintains 95–98% accuracy, validated across trusted databases and manual checks.
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
                        Q3: Can you integrate your lists into our CRM or marketing tools?
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
                        <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">
                          Yes! We seamlessly integrate with HubSpot, Salesforce, Zoho, and other CRMs, ensuring a smooth handoff for your sales team.
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
                        Q4: How often is the data updated?
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
                        <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">
                          We recommend quarterly updates. ECSABIZ also offers continuous data refresh plans to ensure your lists remain active and current.
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
                        Q5: Is your service compliant with global data privacy regulations?
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
                        <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">
                          Absolutely. ECSABIZ strictly adheres to GDPR, CAN-SPAM, and CCPA, protecting your data and your brand reputation.
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
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50/30 to-blue-50/10 rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                {/* Left Side: Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6f7074] leading-tight mb-4">
                    Ready to Transform Your Data into Revenue?
                  </h3>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Leave your email below to start a project with ECSABIZ. Let's turn your data into your most powerful growth asset.
                  </p>
                </div>

                {/* Right Side: Button */}
                <div className="flex-shrink-0">
                  <Link href="/lets-talk" className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
                    <span className="relative z-10 flex items-center">
                      Make an appointment
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
                  B2B Lead Appointment Setup
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
                <Link href="/b2b-appointment-setup" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Lead Appointment Setup
                </Link>
                <Link href="/b2b-market-research-agency-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Industry Analysis
                </Link>
                <Link href="/prospect-research-list-management-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Prospect Research &amp; List Mgmt
                </Link>
                <Link href="/linkedin-automation-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  LinkedIn Outreach Automation
                </Link>
                <Link href="/b2b-targeted-marketing-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2">
                  B2B Targeted Email Marketing
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

