'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [clientsCount, setClientsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const countersRef = useRef<HTMLDivElement>(null);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate clients counter to 14
            const animateCount = (target: number, setter: (val: number) => void, duration: number = 2000) => {
              let start = 0;
              const increment = target / (duration / 16);
              const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                  setter(target);
                  clearInterval(timer);
                } else {
                  setter(Math.floor(start));
                }
              }, 16);
            };
            
            animateCount(14, setClientsCount);
            animateCount(90, setSuccessRate);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/colleagues-working-project-discussing-details.jpg"
                alt="Background"
                fill
                className="object-cover"
                priority
                quality={90}
              />
              {/* Light Grayish Bluish Overlay - Professional and subtle */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/50 via-slate-500/40 to-gray-600/35"></div>
              {/* Additional subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/25"></div>
            </div>
            {/* Fallback background color if image not loaded */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500"></div>
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

        {/* Virtual Staffing Section - Enhanced */}
        <section className="w-full bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 py-16 md:py-20 lg:py-24 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm md:text-base font-semibold text-[#1c75c0] uppercase tracking-wide mb-4 animate-fade-in-up">
                THE ESCABIZ DIFFERENCE: YOUR TRUSTED VIRTUAL STAFFING AGENCY PARTNER
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up-delay">
                Seamless, Scalable, and Cost-Effective Virtual Staffing
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto animate-fade-in-up-delay">
                Bringing Expert Virtual Talent to Your Team Has Never Been Easier. Finding the right talent shouldn&apos;t be a challenge. With EscaBiz&apos;s Remote Staffing Solutions, you get skilled professionals who seamlessly integrate into your team—without the hassle of traditional hiring.
              </p>
            </div>

            {/* Feature Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Box 1: Dedicated Specialists */}
              <div className="relative bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c75c0]/30 animate-card-1 group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Dedicated Specialists for Your Industry
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed text-center">
                    Gain access to highly skilled remote workforce tailored for your needs—whether it&apos;s sales, marketing, finance, or recruiting. Our experts deliver real results.
                  </p>
                </div>
              </div>

              {/* Box 2: Works Within Your Systems */}
              <div className="relative bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c75c0]/30 animate-card-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1c75c0] to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-[#1c75c0]/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Works Within Your Existing Systems
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed text-center">
                    Our virtual remote team integrates smoothly into your workflows, using your preferred tools and processes for a hassle-free experience.
                  </p>
                </div>
              </div>

              {/* Box 3: Comprehensive Management */}
              <div className="relative bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c75c0]/30 animate-card-3 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Comprehensive End-to-End Management
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed text-center">
                    From onboarding and training to ongoing quality control, we handle everything. Your remote staff is set up for success from day one.
                  </p>
                </div>
              </div>

              {/* Box 4: Flexible Pricing */}
              <div className="relative bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c75c0]/30 animate-card-1 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Flexible & Cost-Effective Pricing
                  </h3>
                  <p className="text-base text-white/80 leading-relaxed text-center">
                    No unnecessary costs—pay only for the expertise and hours you need. Our scalable model allows you to adjust your team as your business evolves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section with Counters */}
        <section className="relative w-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 md:py-20 lg:py-24 overflow-hidden">
          {/* World Map Pattern Background */}
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
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#1c75c0] rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                What We Do
              </h3>
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up-delay">
                We Deliver Leads. You Close Sales.
              </h4>
              <p className="text-base md:text-lg text-white/90 leading-relaxed animate-fade-in-up-delay">
                We help businesses in Water Restoration, Commercial Maintenance, HR & Recruiting, and more by generating quality leads and providing dedicated sales teams. Our proven system ensures you get clients consistently, so you can focus on delivering your services while we grow your business.
              </p>
            </div>

            {/* Counters */}
            <div ref={countersRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl">
                <div className="text-5xl md:text-6xl font-bold text-[#1c75c0] mb-4">
                  {clientsCount}+
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Clients</h4>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl">
                <div className="text-5xl md:text-6xl font-bold text-[#1c75c0] mb-4">
                  {successRate}%
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Success Rate</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Section with Image */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="order-1 lg:order-1">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative">
                    {/* Placeholder for image - replace with actual image */}
                    <div className="absolute inset-0 bg-[url('/meeting-image.jpg')] bg-cover bg-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    {/* Fallback gradient if image not available */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"></div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-2 lg:order-2">
                <p className="text-sm md:text-base font-semibold text-[#1c75c0] uppercase tracking-wide mb-4">
                  WHAT WE DO
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Smart Lead Generation. Sales Teams That Deliver.
                </h3>
                <p className="text-base md:text-lg text-[#6f7074] leading-relaxed mb-8">
                  We help businesses grow by connecting them with the right clients. From lead generation to full sales support, we ensure your pipeline stays full so you can focus on delivering services stress-free.
                </p>

                {/* Accordion Items */}
                <div className="space-y-4">
                  {/* Accordion 1 */}
                  <div className="border-t border-gray-200 pt-4">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#1c75c0] transition-colors duration-300">
                        Lead Generation Services
                      </h4>
                      <svg
                        className={`w-6 h-6 text-[#1c75c0] transition-transform duration-300 ${activeAccordion === 1 ? 'rotate-45' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {activeAccordion === 1 && (
                      <p className="mt-4 text-base text-[#6f7074] leading-relaxed animate-fade-in-up">
                        We provide high-quality, targeted leads for industries like Water Restoration, Commercial Maintenance, and HR & Recruiting. Our proven methods ensure your business consistently connects with clients who are ready to buy.
                      </p>
                    )}
                  </div>

                  {/* Accordion 2 */}
                  <div className="border-t border-gray-200 pt-4">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#1c75c0] transition-colors duration-300">
                        Dedicated Sales Teams
                      </h4>
                      <svg
                        className={`w-6 h-6 text-[#1c75c0] transition-transform duration-300 ${activeAccordion === 2 ? 'rotate-45' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {activeAccordion === 2 && (
                      <p className="mt-4 text-base text-[#6f7074] leading-relaxed animate-fade-in-up">
                        Our expert sales professionals pitch your services, follow up with potential clients, and close deals on your behalf — saving you time while guaranteeing results.
                      </p>
                    )}
                  </div>

                  {/* Accordion 3 */}
                  <div className="border-t border-gray-200 pt-4">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#1c75c0] transition-colors duration-300">
                        End-to-End Sales Management
                      </h4>
                      <svg
                        className={`w-6 h-6 text-[#1c75c0] transition-transform duration-300 ${activeAccordion === 3 ? 'rotate-45' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                    {activeAccordion === 3 && (
                      <p className="mt-4 text-base text-[#6f7074] leading-relaxed animate-fade-in-up">
                        From prospecting to client acquisition, we handle the entire process. We don&apos;t just bring leads — we bring measurable sales growth tailored to your business goals.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Form Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="flex flex-col-reverse lg:flex-row-reverse">
                {/* Right Section - Form */}
                <div className="w-full lg:w-[62%] p-6 sm:p-8 lg:p-12">
                  <span className="inline-block bg-[#1c75c0] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
                    RECEIVE A QUOTE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    GET YOUR ESTIMATE
                  </h3>
                  
                  <form className="space-y-5">
                    {/* Service Request */}
                    <div>
                      <label htmlFor="service-request" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Request <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service-request"
                        name="service-request"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none bg-white"
                      >
                        <option value="" disabled>Which B2B service are you interested in?</option>
                        <option value="appointment-setting">B2B Appointment Setting</option>
                        <option value="market-research">B2B Market Research</option>
                        <option value="content-marketing">B2B Content Marketing</option>
                        <option value="linkedin-automation">LinkedIn Automation</option>
                        <option value="prospecting">Prospecting and List building</option>
                        <option value="bpo">Business Process Outsourcing</option>
                        <option value="virtual-staffing">Virtual Staffing</option>
                      </select>
                    </div>

                    {/* Prefix and Name Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prefix" className="block text-sm font-semibold text-gray-700 mb-2">
                          Prefix
                        </label>
                        <select
                          id="prefix"
                          name="prefix"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none bg-white"
                        >
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Ms.</option>
                          <option>Dr.</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                        />
                      </div>
                    </div>

                    {/* Email and Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+1 (234) 567-890"
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name or Business Type (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        maxLength={60}
                        placeholder="Company or business type"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label htmlFor="additional-notes" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional notes (Optional)
                      </label>
                      <textarea
                        id="additional-notes"
                        name="additional-notes"
                        maxLength={250}
                        placeholder="Additional notes"
                        rows={4}
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none resize-vertical"
                      ></textarea>
                    </div>

                    {/* How Did You Discover Us */}
                    <div>
                      <label htmlFor="discovery" className="block text-sm font-semibold text-gray-700 mb-2">
                        How Did You Discover Us? <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="discovery"
                        name="discovery"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none bg-white"
                      >
                        <option value="" disabled>E.g., Google Search, LinkedIn, Referral</option>
                        <option value="google">Search Engine Google, Bing, etc.</option>
                        <option value="social-media">Social Media e.g., LinkedIn, Facebook, Twitter</option>
                        <option value="referral">Referral from a friend, colleague, partner</option>
                        <option value="cold-call">Cold Call</option>
                        <option value="cold-email">Cold Email</option>
                      </select>
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start space-x-3 pt-2">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        className="mt-1 w-4 h-4 text-[#1c75c0] border-gray-300 rounded focus:ring-[#1c75c0]"
                      />
                      <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                        By checking this box, I consent to receive text messages related to marketing communications from EscaBiz.
                        <a href="#" className="text-[#1c75c0] hover:underline ml-1">Privacy Policy</a> and <a href="#" className="text-[#1c75c0] hover:underline">SMS Terms</a>.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#1c75c0] hover:bg-[#1565a0] text-white font-semibold px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      REQUEST QUOTE
                    </button>
                  </form>
                </div>

                {/* Left Section - Contact Info */}
                <div className="w-full lg:w-[38%] bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                      GET A SOLUTION FOR B2B LEAD GENERATION
                    </h3>
                    
                    <div className="space-y-6 mb-8">
                      {/* Contact Item 1 */}
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c75c0] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <strong className="block text-gray-900 mb-1">Headquarter</strong>
                          <p className="text-sm text-[#6f7074] leading-relaxed">
                            A98 Greatorex Street, London,<br />United Kingdom, E15NF
                          </p>
                        </div>
                      </div>

                      {/* Contact Item 2 */}
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c75c0] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <strong className="block text-gray-900 mb-1">Email Us</strong>
                          <p className="text-sm text-[#6f7074] leading-relaxed">
                            info@escabiz.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#6f7074] leading-relaxed mt-8">
                    At EscaBiz, we are dedicated to providing exceptional B2B lead generation services and expert consultation to help businesses thrive in today&apos;s competitive landscape.
                  </p>
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

      {/* Footer Section */}
      <footer className="w-full bg-black text-white">
        {/* Top Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Column 1: Logo and Tagline */}
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
              {/* <p className="text-sm text-white/80 mt-2">
                FROM OUTREACH TO OUTCOMES
              </p> */}
            </div>

            {/* Column 2: Pakistan Office */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-white/20">
                  <svg viewBox="0 0 3 2" className="w-full h-full" preserveAspectRatio="none">
                    {/* Green field (left 1/4) */}
                    <rect width="0.75" height="2" fill="#01411C"/>
                    {/* White field (right 3/4) */}
                    <rect x="0.75" width="2.25" height="2" fill="#FFFFFF"/>
                    {/* White crescent */}
                    <path d="M0.45 0.7 A0.2 0.2 0 0 1 0.45 1.3 A0.3 0.3 0 0 0 0.45 0.7 Z" fill="#FFFFFF"/>
                    {/* White 5-pointed star */}
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
                <h4 className="text-base font-semibold text-white">UK Office</h4>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Unit A98 4-6 Greatorex Street,<br />
                London, United Kingdom, E15NF
              </p>
            </div>

            {/* Column 4: Follow Us & Terms */}
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

        {/* Middle Section - Email */}
        <div className="border-t border-gray-700">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-white text-center">
              Email: <a href="mailto:info@escabiz.com" className="text-[#1c75c0] hover:text-blue-400 transition-colors duration-300">info@escabiz.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
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
