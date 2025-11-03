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
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Top Right */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-bl-full"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Card 1: Our Clients */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.1s' }}>
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight mb-3 text-center capitalize">
                    Our Clients
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#6f7074] leading-relaxed font-normal text-center">
                    Trusted by companies across industries like Water Restoration, Commercial Maintenance, and HR & Recruiting to achieve consistent growth.
                  </p>
                </div>
                <div className="w-full h-40 relative overflow-hidden mt-auto">
                  <Image src="/1.jpg" alt="Our Clients" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>

              {/* Card 2: Our Work */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.2s' }}>
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight mb-3 text-center capitalize">
                    Our Work
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#6f7074] leading-relaxed font-normal text-center">
                    We deliver qualified leads, build sales teams, and design strategies that help businesses scale with confidence.
                  </p>
                </div>
                <div className="w-full h-40 relative overflow-hidden mt-auto">
                  <Image src="/2.jpg" alt="Our Work" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>

              {/* Card 3: Our Team */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.3s' }}>
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight mb-3 text-center capitalize">
                    Our Team
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#6f7074] leading-relaxed font-normal text-center">
                    A dedicated group of growth specialists, marketers, and sales professionals focused on driving your success.
                  </p>
                </div>
                <div className="w-full h-40 relative overflow-hidden mt-auto">
                  <Image src="/hassan-pasha-7SjEuEF06Zw-unsplash.jpg" alt="Our Team" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>

              {/* Card 4: Project Timeline */}
              <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal flex flex-col" style={{ animationDelay: '0.4s' }}>
                <div className="p-6">
                  <div className="w-14 h-14 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-[#1c75c0]/20 transition-all duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6f7074] leading-tight mb-3 text-center capitalize">
                    Project Timeline
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm text-[#6f7074] leading-relaxed font-normal text-center">
                    From planning to execution, we ensure timely delivery and measurable results for every client.
                  </p>
                </div>
                <div className="w-full h-40 relative overflow-hidden mt-auto">
                  <Image src="/4.jpg" alt="Project Timeline" fill className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Bottom Left */}
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-tr-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Our Story
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Empowering Businesses to Grow with Confidence
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-3xl mx-auto font-normal">
                We started with a simple vision — to help businesses grow without the constant struggle of finding new clients. Over the years, we&apos;ve built a system that combines targeted lead generation, dedicated sales teams, and client acquisition strategies to ensure consistent results. Today, we proudly partner with companies in industries like Water Restoration, Commercial Maintenance, HR & Recruiting, and more, empowering them to scale with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* About Video Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Top Right */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-bl-full"></div>
          
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full"
                  src="/forvideoofabout.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission and Vision Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-tl-full"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Our Mission */}
              <div className="flex flex-col">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 bg-gradient-to-r from-[#1c75c0] via-[#1c75c0] to-[#6f7074] bg-clip-text text-transparent">
                  Our Mission
                </h5>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-7 lg:p-8 relative overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1 flex flex-col min-h-[280px]">
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1c75c0]/15 to-[#1c75c0]/8 rounded-full flex items-center justify-center mb-5">
                      <span className="text-[#1c75c0] text-3xl font-bold">&quot;</span>
                    </div>
                    <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-relaxed font-normal flex-1">
                      To empower businesses by delivering qualified leads, guaranteed sales support, and strategic growth solutions, so they can focus on what they do best serving their clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Vision */}
              <div className="flex flex-col">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-4 bg-gradient-to-r from-[#1c75c0] via-[#1c75c0] to-[#6f7074] bg-clip-text text-transparent">
                  Our Vision
                </h5>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-7 lg:p-8 relative overflow-hidden hover:shadow-xl transition-shadow duration-300 flex-1 flex flex-col min-h-[280px]">
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1c75c0]/15 to-[#1c75c0]/8 rounded-full flex items-center justify-center mb-5">
                      <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-relaxed font-normal flex-1">
                      To become the most trusted growth partner for businesses worldwide, setting the standard for lead generation and sales management services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Leadership Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Top Left */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-br-full"></div>
          <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
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
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-3xl mx-auto font-normal">
                Behind our success is a team of experienced leaders, marketing strategists, and sales professionals who bring years of expertise in driving business growth. With a deep understanding of industry-specific challenges, our leadership ensures that every client receives tailored solutions that deliver real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Leadership Card 1 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3 text-center">
                  Strategic Vision
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal text-center">
                  Experienced leaders who chart the course for sustainable growth.
                </p>
              </div>

              {/* Leadership Card 2 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3 text-center">
                  Marketing Excellence
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal text-center">
                  Marketing strategists who create campaigns that drive results.
                </p>
              </div>

              {/* Leadership Card 3 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3 text-center">
                  Sales Mastery
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal text-center">
                  Sales professionals who close deals and build lasting relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-tl-full"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
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
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1c75c0] text-xl font-bold">1</span>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Ship & Iterate
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  We move swiftly, refining our approach with every step to maintain a leading edge.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1c75c0] text-xl font-bold">2</span>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Trusted Pair of Hands
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Dependable and steadfast, we are always there when it matters most.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1c75c0] text-xl font-bold">3</span>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Overdeliver on the Promise
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Exceeding expectations is our standard, going beyond what&apos;s assured.
                </p>
              </div>

              {/* Value 4 */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-[#1c75c0]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-[#1c75c0] text-xl font-bold">4</span>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-3">
                  Clear is Kind
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Transparent, honest communication keeps everyone on the same page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Performance Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Top Left */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-br-full"></div>
          <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-6">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Performance
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                Our Performance
              </h5>
            </div>
            
            {/* Stylish Content Section */}
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8 md:p-10 lg:p-12">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#1c75c0]/10 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#1c75c0]/10 to-transparent rounded-tl-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-1 h-16 bg-gradient-to-b from-[#1c75c0] to-[#1c75c0]/40 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-relaxed font-normal">
                        With years of experience and proven strategies, we help businesses grow smarter and faster. From lead generation to client acquisition, our team delivers measurable results that strengthen brands and drive long term success.
                      </p>
                    </div>
                  </div>
                  
                  {/* Stylish Divider */}
                  <div className="flex items-center gap-4 mt-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1c75c0]/30 to-transparent"></div>
                    <div className="w-2 h-2 bg-[#1c75c0]/40 rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1c75c0]/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Great Result Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Bottom Right */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-tl-full"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Great Result
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Sharing Our Expertise
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-3xl mx-auto font-normal">
                We specialize in virtual staff augmentation and lead generation, helping businesses scale faster with skilled teams and qualified leads. Our expertise ensures you get the right people and the right opportunities to grow smarter and stronger.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Ending Section */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-8 md:py-10 lg:py-12 overflow-hidden reveal">
          {/* Subtle Blue Gradient - Top Right */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent pointer-events-none rounded-bl-full"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-[#1c75c0]/15 via-[#1c75c0]/8 to-transparent pointer-events-none blur-xl"></div>
          
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
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-3xl mx-auto font-normal mb-6">
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
