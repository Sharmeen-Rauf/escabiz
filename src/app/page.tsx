'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from 'react';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Gemini_Generated_Image_j3y59jj3y59jj3y5.png')] bg-cover bg-center bg-no-repeat">
              {/* Gradient Overlay - Dark on left, fading to original on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>
            {/* Fallback background color if image not loaded */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl animate-fade-in-up">
              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-in-left">
                More Clients. Less Stress. Real Results.
              </h3>

              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-8 max-w-xl animate-slide-in-left-delay">
                We specialize in helping companies scale faster by providing qualified leads, guaranteed sales, and full sales team support. Let us handle client acquisition.
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#1c75c0] border-2 border-[#1c75c0] rounded-lg bg-transparent hover:bg-[#1c75c0] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 animate-fade-in-delay">
                Get Qualified Leads
              </button>
            </div>
          </div>
        </section>

        {/* Digital Future Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Subtitle */}
              <p className="text-sm md:text-base font-semibold text-[#1c75c0] uppercase tracking-wide mb-4">
                Digital Future
              </p>
              
              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Scaling Businesses with Precision & Performance
              </h3>
              
              {/* Paragraph */}
              <p className="text-base md:text-lg lg:text-xl text-[#6f7074] leading-relaxed max-w-3xl mx-auto">
                At EscaBiz, we don&apos;t just find prospects—we build predictable growth systems. Our expertise, technology, and strategic sales approach ensure your company gets the right clients at the right time.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Data-Driven Targeting */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
                {/* Icon - Data Visualization Monitor */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Monitor Frame */}
                    <rect x="4" y="4" width="16" height="12" rx="1" strokeWidth="2" />
                    {/* Screen Content - Bar Chart */}
                    <rect x="7" y="10" width="2" height="4" fill="currentColor" />
                    <rect x="10" y="8" width="2" height="6" fill="currentColor" />
                    <rect x="13" y="9" width="2" height="5" fill="currentColor" />
                    {/* Pie Chart */}
                    <circle cx="17.5" cy="10.5" r="3" strokeWidth="1.5" />
                    <path d="M17.5 7.5 L17.5 10.5 L20.5 10.5" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Monitor Stand */}
                    <rect x="11" y="16" width="2" height="2" fill="currentColor" />
                    <rect x="9" y="18" width="6" height="1" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Data-Driven Targeting
                </h3>
                
                {/* Paragraph */}
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  Using advanced research and analytics, we identify decision-makers who need your services today—not just cold leads for tomorrow.
                </p>
              </div>

              {/* Card 2: Customized Outreach */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
                {/* Icon - People/Group */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Central larger person */}
                    <circle cx="12" cy="8" r="3" strokeWidth="2" />
                    <path d="M12 11v3" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 18v-4l3-1" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 18v-4l-3-1" strokeWidth="2" strokeLinecap="round" />
                    {/* Left person */}
                    <circle cx="6" cy="10" r="2" strokeWidth="1.5" />
                    <path d="M6 12v2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4 15l2-1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Right person */}
                    <circle cx="18" cy="10" r="2" strokeWidth="1.5" />
                    <path d="M18 12v2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 15l-2-1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Top person */}
                    <circle cx="12" cy="3" r="2" strokeWidth="1.5" />
                    <path d="M12 5v1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Bottom person */}
                    <circle cx="12" cy="18" r="2" strokeWidth="1.5" />
                    <path d="M12 20v1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Customized Outreach
                </h3>
                
                {/* Paragraph */}
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  We create personalized campaigns and sales pitches that resonate with your ideal clients, increasing response and conversion rates.
          </p>
        </div>

              {/* Card 3: Relationship Building */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
                {/* Icon - Handshake with Gear */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Gear above */}
                    <circle cx="12" cy="4" r="2.5" strokeWidth="1.5" />
                    <circle cx="12" cy="4" r="1.5" strokeWidth="1" />
                    <path d="M12 1.5v2.5M12 5.5v1M15 4h-2.5M9.5 4H7M13.5 6.5l1.7-1M9.8 2.2l1 1.7M10.5 6.5l-1.7-1M14.2 2.2l-1 1.7" strokeWidth="1" strokeLinecap="round" />
                    {/* Left hand */}
                    <path d="M5 12c0-1 1-2 2-2h2c1 0 2 1 2 2v2c0 1-1 2-2 2H7c-1 0-2-1-2-2v-2z" strokeWidth="2" />
                    <path d="M5 14l-1 2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 12l-1 1" strokeWidth="1" strokeLinecap="round" />
                    {/* Right hand */}
                    <path d="M19 12c0-1-1-2-2-2h-2c-1 0-2 1-2 2v2c0 1 1 2 2 2h2c1 0 2-1 2-2v-2z" strokeWidth="2" />
                    <path d="M19 14l1 2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 12l1 1" strokeWidth="1" strokeLinecap="round" />
                    {/* Handshake connection */}
                    <path d="M11 14h2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 14l1-1M13 14l1-1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Relationship Building
                </h3>
                
                {/* Paragraph */}
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  Beyond the first sale, we help you build lasting relationships that turn one-time contracts into repeat business and loyal partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Generation Services Section */}
        <section className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Chessboard Background Image */}
            <div className="absolute inset-0 bg-[url('/hassan-pasha-7SjEuEF06Zw-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
              {/* Dark Gradient Overlay - Darker on left, fading to right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {/* Text Content */}
            <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
              {/* Heading */}
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                Discover Guaranteed Sales Growth with Our Lead Generation Services
              </h4>

              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed animate-fade-in-up-delay">
                We help businesses across multiple industries scale faster with high-quality, guaranteed sales. From Water Restoration, Commercial Maintenance, and HR & Recruiting Services to other specialized sectors, our expert sales teams pitch your services directly to potential clients. With proven strategies, targeted outreach, and a results-driven approach, we ensure your business consistently gets leads that convert into long-term clients.
              </p>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {/* Card 1: BOOK A CALL */}
              <div className="bg-[#1c75c0] rounded-lg shadow-xl p-6 lg:p-8 flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-card-1">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 flex items-center">
                  BOOK A CALL
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
                <p className="text-base text-white leading-relaxed flex-grow">
                  Schedule a call with our Lead Generation Specialist to discuss how we can bring guaranteed clients to your business.
                </p>
              </div>

              {/* Card 2: CALL US NOW */}
              <div className="bg-white rounded-lg shadow-xl p-6 lg:p-8 flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-card-2">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  CALL US NOW
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  Need leads fast? Our team is ready to get you started today. Click here to connect with us immediately.
                </p>
              </div>

              {/* Card 3: GUIDE TO BOOSTING SALES */}
              <div className="bg-[#1c75c0] rounded-lg shadow-xl p-6 lg:p-8 flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-card-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 flex items-center">
                  GUIDE TO BOOSTING SALES
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </h3>
                <p className="text-base text-white leading-relaxed flex-grow">
                  Download our quick-start guide to learn how our proven lead generation system helps water restoration companies grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* B2B LEAD DEVELOPMENT BENEFITS Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in-up">
                B2B LEAD DEVELOPMENT BENEFITS
              </h3>
              <p className="text-base md:text-lg text-[#1c75c0] leading-relaxed animate-fade-in-up-delay">
                EscaBiz helps you attract, nurture, and convert B2B leads that grow your business.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Target the Right Audience */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-card-1">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <span className="text-4xl">🔍</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Target the Right Audience
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed text-center">
                  Reach decision-makers who truly matter to your business with EscaBiz&apos;s smart targeting.
                </p>
              </div>

              {/* Card 2: Increased Sales */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-card-2">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <span className="text-4xl">💼</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Increased Sales
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed text-center">
                  Turn consistent, high-quality leads into real deals that strengthen your revenue stream.
                </p>
              </div>

              {/* Card 3: Reduced Costs */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-card-3">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <span className="text-4xl">💰</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Reduced Costs
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed text-center">
                  Save on in-house resources by outsourcing to our experienced lead generation team.
                </p>
              </div>

              {/* Card 4: Improved ROI */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-card-1">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <span className="text-4xl">📈</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Improved ROI
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed text-center">
                  Get more conversions from every marketing dollar with data-driven B2B lead strategies.
                </p>
              </div>

              {/* Card 5: Enhanced Efficiency */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-card-2">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <span className="text-4xl">⚙️</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Enhanced Efficiency
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed text-center">
                  Focus on closing deals while we handle your lead pipeline and follow-ups seamlessly.
                </p>
              </div>

              {/* Card 6: Scalable Growth */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-card-3">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  Scalable Growth
                </h3>
                <p className="text-base text-[#6f7074] leading-relaxed text-center">
                  Expand your reach and grow sustainably with flexible B2B solutions from EscaBiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Transform Section */}
        <section className="w-full bg-[#6f7074] py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to transform your Business?
            </h3>
            <a href="#" className="text-xl text-[#1c75c0] font-semibold hover:text-blue-300 transition-colors duration-300">
              Need Business Consultation Today
          </a>
        </div>

          {/* Services Cards Grid */}
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Virtual Staff Augmentation */}
              <div className="bg-gray-100 rounded-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4">
                    <svg className="w-16 h-16 text-[#1c75c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Virtual Staff Augmentation
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Marketing VSA
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Finance VSA
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Recruiting VSA
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Sales VSA
                  </li>
                </ul>
                <button className="w-full bg-[#1c75c0] text-white font-semibold py-3 px-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#1565a0]">
                  Get Growth Consultant
                </button>
              </div>

              {/* Card 2: Industries */}
              <div className="bg-gray-100 rounded-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4">
                    <svg className="w-16 h-16 text-[#1c75c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Industries
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    HR Staffing & Recruiting
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Commercial Cleaning
                  </li>
                </ul>
              </div>

              {/* Card 3: Lead Development System */}
              <div className="bg-gray-100 rounded-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="bg-white rounded-lg p-4">
                    <svg className="w-16 h-16 text-[#1c75c0]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
                  Lead Development System
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    B2B Lead Appointment Setup
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    B2B Industry Analysis
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    LinkedIn Outreach Automation
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Prospect Research & List Mgmt
                  </li>
                  <li className="flex items-center text-[#6f7074]">
                    <svg className="w-5 h-5 mr-3 text-[#1c75c0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Targeted Email Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section - 4 Cards with Hover Effects */}
        <section className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Card 1: We Deliver Qualified Leads */}
              <div 
                className={`relative group bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 min-h-[400px] flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${activeCard === 1 ? 'shadow-2xl' : ''}`}
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    We Deliver Qualified Leads
                  </h3>
                </div>
                <p className={`text-base text-white/90 leading-relaxed transition-opacity duration-300 absolute bottom-8 left-8 right-8 ${activeCard === 1 ? 'opacity-100 md:opacity-100' : 'opacity-0 group-hover:opacity-100 md:opacity-0'}`}>
                  Connect only with clients who truly need your services—saving time, money, and effort
                </p>
                <div className={`mt-auto transition-opacity duration-300 ${activeCard === 1 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0 md:opacity-100'}`}>
                  <p className="text-base text-white/70">Tap/Hover to learn more</p>
                </div>
              </div>

              {/* Card 2: We Act as Your Sales Team */}
              <div 
                className={`relative group bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 min-h-[400px] flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${activeCard === 2 ? 'shadow-2xl' : ''}`}
                onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    We Act as Your Sales Team
                  </h3>
                </div>
                <p className={`text-base text-white/90 leading-relaxed transition-opacity duration-300 absolute bottom-8 left-8 right-8 ${activeCard === 2 ? 'opacity-100 md:opacity-100' : 'opacity-0 group-hover:opacity-100 md:opacity-0'}`}>
                  From pitching to closing, our dedicated reps work as your in-house sales force.
                </p>
                <div className={`mt-auto transition-opacity duration-300 ${activeCard === 2 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0 md:opacity-100'}`}>
                  <p className="text-base text-white/70">Tap/Hover to learn more</p>
                </div>
              </div>

              {/* Card 3: Guaranteed Sales Growth Team */}
              <div 
                className={`relative group bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 min-h-[400px] flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${activeCard === 3 ? 'shadow-2xl' : ''}`}
                onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Guaranteed Sales Growth Team
                  </h3>
                </div>
                <p className={`text-base text-white/90 leading-relaxed transition-opacity duration-300 absolute bottom-8 left-8 right-8 ${activeCard === 3 ? 'opacity-100 md:opacity-100' : 'opacity-0 group-hover:opacity-100 md:opacity-0'}`}>
                  We don&apos;t just generate leads—we ensure real, measurable contracts and revenue.
                </p>
                <div className={`mt-auto transition-opacity duration-300 ${activeCard === 3 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0 md:opacity-100'}`}>
                  <p className="text-base text-white/70">Tap/Hover to learn more</p>
                </div>
              </div>

              {/* Card 4: Full Transparency & Insights */}
              <div 
                className={`relative group bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 min-h-[400px] flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer ${activeCard === 4 ? 'shadow-2xl' : ''}`}
                onClick={() => setActiveCard(activeCard === 4 ? null : 4)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Full Transparency & Insights
                  </h3>
                </div>
                <p className={`text-base text-white/90 leading-relaxed transition-opacity duration-300 absolute bottom-8 left-8 right-8 ${activeCard === 4 ? 'opacity-100 md:opacity-100' : 'opacity-0 group-hover:opacity-100 md:opacity-0'}`}>
                  Get clear reports and real-time updates so you always know how your sales pipeline is performing.
                </p>
                <div className={`mt-auto transition-opacity duration-300 ${activeCard === 4 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0 md:opacity-100'}`}>
                  <p className="text-base text-white/70">Tap/Hover to learn more</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-left-delay {
          animation: slideInLeft 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-card-1 {
          animation: fadeInUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-card-2 {
          animation: fadeInUp 0.8s ease-out 0.8s forwards;
          opacity: 0;
        }

        .animate-card-3 {
          animation: fadeInUp 0.8s ease-out 1s forwards;
          opacity: 0;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
