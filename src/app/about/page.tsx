'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function About() {
  useEffect(() => {
    // Parallax and reveal for About page
    const handleScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach(el => {
          const speed = Number(el.dataset.speed || 0.3);
          el.style.transform = `translateY(${y * speed}px)`;
        });
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('reveal-show');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => { window.removeEventListener('scroll', handleScroll); io.disconnect(); };
  }, []);

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
              backgroundImage: 'url(/About Us.jpg)',
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
                Who we are?
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto animate-elegant-fade drop-shadow-md" style={{ animationDelay: '0.4s' }}>
                We are more than a service provider — we are your growth partner. From generating leads to closing deals, we help businesses scale faster, smarter, and stronger.
              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center animate-fade-in-delay" style={{ animationDelay: '0.6s' }}>
                <Link
                  href="/lets-talk"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
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

        {/* Animated Cards Section - Professional Design */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Card 1: Our Clients */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.1s' }}>
                <div className="p-6 flex flex-col items-center text-center gap-3 flex-1">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight capitalize">
                    Our Clients
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-loose font-normal">
                    Trusted by companies across industries like Water Restoration, Commercial Maintenance, and HR & Recruiting to achieve consistent growth.
                  </p>
                </div>
              </div>

              {/* Card 2: Our Work */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.2s' }}>
                <div className="p-6 flex flex-col items-center text-center gap-3 flex-1">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight capitalize">
                    Our Work
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-loose font-normal">
                    We deliver qualified leads, build sales teams, and design strategies that help businesses scale with confidence.
                  </p>
                </div>
              </div>

              {/* Card 3: Our Team */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.3s' }}>
                <div className="p-6 flex flex-col items-center text-center gap-3 flex-1">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight capitalize">
                    Our Team
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-loose font-normal">
                    A dedicated group of growth specialists, marketers, and sales professionals focused on driving your success.
                  </p>
                </div>
              </div>

              {/* Card 4: Project Timeline */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.4s' }}>
                <div className="p-6 flex flex-col items-center text-center gap-3 flex-1">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight capitalize">
                    Project Timeline
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-loose font-normal">
                    From planning to execution, we ensure timely delivery and measurable results for every client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 lg:space-y-5">
                <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                  Our Story
                </p>
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                  Empowering Businesses to Grow with Confidence
                </h5>
                <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-loose font-normal">
                  We started with a simple vision — to help businesses grow without the constant struggle of finding new clients. Over the years, we&apos;ve built a system that combines targeted lead generation, dedicated sales teams, and client acquisition strategies to ensure consistent results. Today, we proudly partner with companies in industries like Water Restoration, Commercial Maintenance, HR & Recruiting, and more, empowering them to scale with confidence.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <video
                  className="w-full h-full aspect-video"
                  src="/forvideoofabout.mp4"
                  controls
                  playsInline
                  preload="auto"
                  poster="/About Us.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission and Vision Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
            {/* Our Mission */}
            <div className="max-w-5xl mx-auto">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 text-left">
                <span className="text-[#6f7074]">Our</span> <span className="text-[#1c75c0]">Mission</span>
              </h5>
              <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-8 lg:p-10 relative overflow-visible">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white text-4xl font-bold">&quot;</span>
                </div>
                <p className="text-sm sm:text-sm md:text-base text-[#a9a9a9] leading-loose font-normal text-center">
                  To empower businesses by delivering qualified leads, guaranteed sales support, and strategic growth solutions, so they can focus on what they do best serving their clients.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="max-w-5xl mx-auto">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 text-left">
                <span className="text-[#6f7074]">Our</span> <span className="text-[#1c75c0]">Vision</span>
              </h5>
              <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-8 lg:p-10 relative overflow-visible">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white text-4xl font-bold">&quot;</span>
                </div>
                <p className="text-sm sm:text-sm md:text-base text-[#a9a9a9] leading-loose font-normal text-center">
                  To become the most trusted growth partner for businesses worldwide, setting the standard for lead generation and sales management services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Performance Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Heading - Left Aligned */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-6 text-left">
                <span className="text-[#6f7074]">Our</span> <span className="text-[#1c75c0]">Performance</span>
              </h5>
              <div className="bg-white rounded-2xl shadow-md border border-gray-300 p-8 lg:p-10 relative overflow-visible">
                {/* Quote Icon - Top Right Overlapping */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#1c75c0] rounded-full flex items-center justify-center shadow-lg z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm sm:text-sm md:text-base text-[#a9a9a9] leading-loose font-normal text-center">
                  With years of experience and proven strategies, we help businesses grow smarter and faster. From lead generation to client acquisition, our team delivers measurable results that strengthen brands and drive long term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Leadership Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Leadership
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Leadership That Drives Real Growth
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-loose max-w-3xl mx-auto font-normal">
                Behind our success is a team of experienced leaders, marketing strategists, and sales professionals who bring years of expertise in driving business growth. With a deep understanding of industry-specific challenges, our leadership ensures that every client receives tailored solutions that deliver real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Leadership Card 1 */}
              <div className="group bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:bg-[#1c75c0]">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <svg className="w-8 h-8 text-[#1c75c0] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3 text-center transition-colors duration-300 group-hover:text-white">
                  Strategic Vision
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-loose font-normal text-center transition-colors duration-300 group-hover:text-white/90">
                  Experienced leaders who chart the course for sustainable growth.
                </p>
              </div>

              {/* Leadership Card 2 */}
              <div className="group bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:bg-[#1c75c0]">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <svg className="w-8 h-8 text-[#1c75c0] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3 text-center transition-colors duration-300 group-hover:text-white">
                  Marketing Excellence
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-loose font-normal text-center transition-colors duration-300 group-hover:text-white/90">
                  Marketing strategists who create campaigns that drive results.
                </p>
              </div>

              {/* Leadership Card 3 */}
              <div className="group bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:bg-[#1c75c0]">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <svg className="w-8 h-8 text-[#1c75c0] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3 text-center transition-colors duration-300 group-hover:text-white">
                  Sales Mastery
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-loose font-normal text-center transition-colors duration-300 group-hover:text-white/90">
                  Sales professionals who close deals and build lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Our Values
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Road Map of Our Core Principles
              </h5>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Value 1 */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#1c75c0] text-xl font-bold">1</span>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Ship & Iterate
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  We move swiftly, refining our approach with every step to maintain a leading edge.
                </p>
              </div>
 
              {/* Value 2 */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#1c75c0] text-xl font-bold">2</span>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Trusted Pair of Hands
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  Dependable and steadfast, we are always there when it matters most.
                </p>
              </div>
 
              {/* Value 3 */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#1c75c0] text-xl font-bold">3</span>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Overdeliver on the Promise
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  Exceeding expectations is our standard, going beyond what&apos;s assured.
                </p>
              </div>
 
              {/* Value 4 */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#1c75c0] text-xl font-bold">4</span>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Clear is Kind
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                  Transparent, honest communication keeps everyone on the same page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Great Result Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/11 (1).jpg" alt="Growth partnership" width={640} height={480} className="w-full h-full object-cover" />
              </div>

              <div className="text-center space-y-3 px-4">
                <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide">
                  Great Result
                </p>
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                  Sharing Our Expertise
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                  We specialize in virtual staff augmentation and lead generation, helping businesses scale faster with skilled teams and qualified leads. Our expertise ensures you secure the right people and the right opportunities to grow smarter and stronger.
                </p>
                <Link
                  href="/lets-talk"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#1c75c0] rounded-full hover:bg-[#1565a0] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Access Our Growth Playbook
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image src="/4.jpg" alt="Client success" width={640} height={480} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Ending Section */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Get Started
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Ready to Transform Your Business?
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-loose max-w-3xl mx-auto font-normal mb-6">
                Let&apos;s discuss how EscaBiz can help you scale faster and achieve predictable growth.
              </p>
              
              {/* Button */}
              <div className="flex justify-center">
                <Link
                  href="/lets-talk"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-[#1c75c0] rounded-lg hover:bg-[#1565a0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
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
