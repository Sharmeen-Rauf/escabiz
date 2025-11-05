"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";

export default function MarketingVSAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const dots = useMemo(() => Array.from({ length: 36 }, (_, i) => i), []);

  return (
    <>
      <Navbar />
      <main className="w-full overflow-hidden">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700">
          {/* Background Image Layer - Lowest z-index */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/marketing%20banner%20%281%29.jpg)',
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
              <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                EscaBiz – Transforming Marketing Into AI-Powered Lead Generation
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                Tired of marketing that burns money but brings no clients? At EscaBiz, we merge AI technology, data-driven marketing, and expert virtual teams to deliver what truly matters.
              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center">
                <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Speak to Marketing VSA
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

        {/* Clean split - text left, image right */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Our Marketing VSA goes beyond traditional marketing.
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-4">
                We give you an AI-driven virtual marketing department that plans, executes, and optimizes campaigns designed to generate and convert leads faster — without the cost or hassle of hiring in-house teams.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-6 border-l-4 border-[#1c75c0] pl-4">
                We don&apos;t just run campaigns. We build predictable growth systems.
              </p>
              <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg w-fit">
                <span className="relative z-10 flex items-center">
                  Start Building Your Predictable Growth
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[360px]">
              <Image src="/marketing%20image-1.jpg" alt="AI-Driven Marketing" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Problem / Solution split */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <div className="text-center mb-6">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                Are you losing visibility and clients because of weak marketing?
              </h5>
            </div>

            {/* Paragraph */}
            <div className="text-center mb-6">
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal max-w-3xl mx-auto">
                Marketing today isn&apos;t just about posting content—it&apos;s about building brand trust, engagement, and conversions. But for most businesses, it&apos;s easier said than done.
              </p>
            </div>

            {/* Pain Points Navigation Buttons */}
            <div className="overflow-hidden mb-10">
              {/* First Row - Slides Left */}
              <div className="group flex gap-2 sm:gap-3 mb-3 animate-slide-left">
                {[
                  "No time to manage consistent content and campaigns",
                  "Expensive in-house marketing teams draining your budget",
                  "Lack of creativity or technical expertise",
                ].map((t, i) => (
                  <button
                    key={i}
                    className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-normal transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {t}
                  </button>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "No time to manage consistent content and campaigns",
                  "Expensive in-house marketing teams draining your budget",
                  "Lack of creativity or technical expertise",
                ].map((t, i) => (
                  <button
                    key={`dup-${i}`}
                    className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-normal transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Second Row - Slides Right */}
              <div className="group flex gap-2 sm:gap-3 animate-slide-right">
                {[
                  "Poor SEO and limited lead flow",
                  "Struggling to rank on Google or attract leads",
                  "No system connecting marketing to actual client growth",
                ].map((t, i) => (
                  <button
                    key={i}
                    className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-normal transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {t}
                  </button>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  "Poor SEO and limited lead flow",
                  "Struggling to rank on Google or attract leads",
                  "No system connecting marketing to actual client growth",
                ].map((t, i) => (
                  <button
                    key={`dup-${i}`}
                    className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-normal transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Image Overlay Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[200px] md:h-[220px] lg:h-[240px] w-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/11%20%281%29.jpg" 
                  alt="Marketing VSA" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              
              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col justify-center h-full p-6 md:p-8 lg:p-10 max-w-2xl">
                <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight mb-3">
                  Marketing VSA: Your full-scale virtual marketing department
                </h6>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  We provide Marketing Virtual Staff Augmentation (VSA) — helping you plan, execute, and scale your marketing campaigns without hiring an expensive in-house team.
                </p>
                <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 relative overflow-hidden shadow-lg w-fit">
                  <span className="relative z-10 flex items-center">
                    Book your free strategy session
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

        {/* Minimalist challenges + portal */}
        <section className="relative bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Introductory Header */}
            <div className="max-w-4xl mx-auto mb-10">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
                Do you face these marketing challenges?
              </h5>
          </div>

            {/* Services Grid - 3x3 Layout (3 columns, 2 rows) */}
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Struggling to create consistent, high‑quality content?",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Spending money on ads that don't convert?",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Losing leads due to poor follow‑up or online visibility?",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ),
                  },
                  {
                    title: "No team to manage your social media or SEO effectively?",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Lacking time to focus on both business growth and marketing?",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Poor SEO and limited lead flow?",
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="group bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-[0_0_30px_rgba(28,117,192,0.4)] hover:-translate-y-1 transition-all duration-300 relative z-0 hover:z-10">
                    {/* Icon - no background, only blue */}
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <div className="text-[#1c75c0]">
                        {item.icon}
                      </div>
                    </div>
                    {/* Title */}
                    <h6 className="text-sm sm:text-base font-semibold text-[#6f7074] leading-tight mb-3">
                      {item.title}
                    </h6>
                    {/* Learn More Link - appears on hover */}
                    <Link href="/lets-talk" className="inline-block text-xs sm:text-sm font-normal text-[#1c75c0] hover:text-[#1565a0] transition-all duration-300 opacity-0 group-hover:opacity-100">
                      Learn More
                    </Link>
                </div>
              ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-3xl mx-auto text-center">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Your guiding path to growth
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-6">
                EscaBiz fixes this by giving you a complete virtual marketing team — fully trained, data‑driven, and dedicated to your brand&apos;s success.
              </p>
              <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
                <span className="relative z-10 flex items-center">
                  Find the exit strategy
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Banners showcase */}
        <section className="w-full bg-white py-12">
          <div className="w-full max-w-6xl mx-auto px-4 grid grid-cols-1 gap-8">
            {[
              "/Banner-3.jpg",
              "/Banner-2.jpg",
              "/Banner-4.jpg",
            ].map((src, i) => (
              <div key={i} className="relative w-full h-[360px] md:h-[460px] rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`banner-${i}`} className="absolute inset-0 w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </section>

        {/* AI Consulting */}
        <section className="bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="flex flex-col">
                {/* Subtitle */}
                <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2">
                  AI Consulting
                </p>
                
                {/* Main Heading */}
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                  AI consulting – smarter marketing, predictable growth
                </h5>
                
                {/* Introductory Paragraph */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal mb-6">
                  Navigating today&apos;s AI-powered marketing landscape requires more than software — it requires strategy.
                </p>
                
                {/* List Section */}
                <div className="mb-6">
                  <h6 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-4">
                    At EscaBiz, our AI consultants help you:
                  </h6>
                <ul className="space-y-3">
                  {[
                    "Identify and prioritize high‑ROI marketing use cases",
                    "Integrate AI tools for lead scoring, targeting, and automation",
                    "Improve data quality for precise audience segmentation",
                    "Predict campaign success with advanced analytics",
                    "Maintain ethical and compliant AI usage",
                  ].map((t, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal">{t}</span>
                    </li>
                  ))}
                </ul>
                </div>
                
                {/* Concluding Paragraph */}
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal">
                  Our goal? To help you leverage AI not just for automation — but for acceleration. We guide you through every step to ensure your business achieves maximum ROI with minimum risk using AI-powered lead generation and digital marketing.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-full min-h-[400px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://media.istockphoto.com/id/1933417108/photo/ai-chatbot-artificial-intelligence-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=faD707ehv7Nc1HBXtMZYbNNHZTYhHEnULlbrgkRNGNE=" alt="AI Consulting" className="w-full h-full object-cover opacity-75" />
              </div>
            </div>
          </div>
        </section>

        {/* Services grid (glass) */}
        <section className="bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3 text-center">
              How EscaBiz helps you grow?
            </h5>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal text-center max-w-2xl mx-auto mb-10">
              Smart, scalable, AI-driven marketing teams built for business growth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  ),
                  t: "Virtual Content Writer", 
                  d: "Create compelling, SEO-optimized content that attracts your ideal audience and converts visitors into real leads." 
                },
                { 
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  ),
                  t: "Social Media Management", 
                  d: "Turn social media into a lead magnet with daily management and smart automation." 
                },
                { 
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  t: "Email Marketing", 
                  d: "Automated drip campaigns that nurture leads and close deals while you grow." 
                },
                { 
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  t: "SEO Specialist", 
                  d: "Improve rankings using keyword intelligence and technical SEO to capture organic demand." 
                },
                { 
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  ),
                  t: "Graphic & Multimedia", 
                  d: "Bring your brand to life with visuals, video and motion design that boost engagement." 
                },
                { 
                  icon: (
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  t: "AI & Automation", 
                  d: "Leverage cutting‑edge AI and automation to streamline efforts and maximize ROI." 
                },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(28,117,192,0.4)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative z-0 hover:z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 text-[#1c75c0] flex justify-center">
                      {c.icon}
                    </div>
                    <h6 className="text-base sm:text-lg font-semibold text-[#6f7074] mb-2 leading-tight">
                      {c.t}
                    </h6>
                    <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                      {c.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies - hover cards */}
        <section className="bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3 text-center">
              Real results: marketing case studies
            </h5>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal text-center max-w-3xl mx-auto mb-10">
              Here&apos;s how we&apos;ve helped businesses scale smarter with AI‑driven marketing and VSA solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tag: "U.S. Cleaning Company", title: "300% Lead Growth for Cleaning Company", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" , details: "AI-based lead scoring, social automation, and email nurture tripled inbound leads and cut CPA by 42%."},
                { tag: "Restoration Firm", title: "AI‑Optimized Campaign Wins", img: "https://media.istockphoto.com/id/2195607659/photo/ai-artificial-intelligence-technology-for-data-analysis-research-planning-and-work-generate.webp?a=1&b=1&s=612x612&w=0&k=20&c=nqgzw4nlXTa--oa_J0s0_z--mSMRVu7Dhmhg1SWKwEQ=", details: "First‑page rankings for 6 services and 150+ high‑intent leads in 90 days."},
                { tag: "B2B HR Agency", title: "VSA Drives B2B Conversions", img: "https://media.istockphoto.com/id/2191084357/photo/japanese-woman-interacts-with-futuristic-transparent-screen-displaying-digital-graphs-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=u7kSdaY8wfQ5KxBDFgm7EsNWxhYhwDr2Sv4egaFK1n8=", details: "Full Marketing VSA lifted conversions by 240% and reduced costs by 80%."},
              ].map((c, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/15 shadow-xl hover:shadow-[0_0_35px_rgba(77,208,225,0.35)] transition">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-[360px]">
                    <span className="inline-block bg-[#1c75c0] text-white text-xs px-3 py-1 rounded-full mb-3 w-max">{c.tag}</span>
                    <h4 className="text-xl font-bold text-white mb-2">{c.title}</h4>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{c.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-10 md:py-14 lg:py-16" id="faq">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - FAQ Content */}
              <div className="flex flex-col">
                {/* Header with accent line */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-12 h-0.5 bg-[#1c75c0]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#1c75c0]"></div>
            </div>
                  <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2">
                    FAQs
                  </p>
                  <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                    General Questions<br />Frequently Asked Questions?
                  </h5>
                </div>
                
                {/* FAQ Items */}
                <div className="space-y-3">
                {[
                  { q: "What makes EscaBiz different from hiring freelancers or agencies?", a: "We give you a dedicated virtual marketing team that works exclusively for your brand, aligned to your goals and KPIs." },
                  { q: "Can I choose which marketing roles I need?", a: "Yes. Pick a single specialist or a custom team (Marketing VSA) based on goals and budget." },
                  { q: "How soon can my marketing team start?", a: "Most teams launch within 5–7 business days after strategy alignment." },
                  { q: "How do I measure campaign success?", a: "Transparent reports showing traffic, qualified conversions, engagement, and ROI." },
                ].map((item, i) => (
                    <div key={i} className="bg-gray-100 rounded-lg overflow-hidden">
                    <button
                        className={`w-full text-left px-5 py-4 font-semibold flex items-center justify-between transition-all ${openFaq === i ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-200"}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                        <span className="text-sm sm:text-base text-[#6f7074]">{item.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${openFaq === i ? "bg-[#1c75c0] text-white" : "bg-[#6f7074] text-white"}`}>
                          <span className="text-xl font-bold">{openFaq === i ? "−" : "+"}</span>
                        </div>
                    </button>
                    <div className="px-5 overflow-hidden transition-all" style={{ maxHeight: openFaq === i ? "500px" : 0 }}>
                        <p className="py-4 text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal">{item.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Column - Image with Counter */}
              <div className="relative">
                {/* Main Image with Counter Overlay */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
                  {/* Accent bar on left - extending slightly above and below */}
                  <div className="absolute left-0 -top-2 -bottom-2 w-2 bg-[#1c75c0] z-10 rounded-full"></div>
                  
                  {/* Main Image */}
                  <div className="relative w-full h-[450px] md:h-[500px]">
                    <Image
                      src="/Transparency%20%26%20Insights-Card.jpg"
                      alt="Marketing VSA"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Counter Overlay - Top Right, Overlapping */}
                  <div className="absolute top-4 right-4 bg-[#1c75c0] rounded-lg p-3 md:p-4 shadow-2xl transform rotate-[-2deg] z-20 border-2 border-white/20">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      50K+
                    </div>
                    <div className="text-xs font-semibold text-white">
                      Prospects Identified
                    </div>
                  </div>
                </div>
                
                {/* Front Image Block - Below, Overlapping Upward */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-800 h-[200px] md:h-[220px] -mt-12 md:-mt-16 z-10">
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-center">
                    {/* Large centered text */}
                    <div className="text-center mb-4 z-10">
                      <h6 className="text-4xl md:text-5xl font-bold text-[#1c75c0] mb-2">
                        MARKETING
                      </h6>
                      <h6 className="text-4xl md:text-5xl font-bold text-[#1c75c0]">
                        VSA
                      </h6>
                    </div>
                    {/* Small scattered words - word cloud effect */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="grid grid-cols-3 gap-2 md:gap-4 opacity-40">
                        {["LEADS", "GROWTH", "ROI", "AUTOMATION", "STRATEGY", "DATA"].map((word, i) => (
                          <span 
                            key={i} 
                            className="text-xs md:text-sm text-[#6f7074] font-semibold transform"
                            style={{ 
                              transform: `rotate(${i % 2 === 0 ? '-5deg' : '5deg'})`,
                              position: 'absolute',
                              top: `${20 + (i * 15)}%`,
                              left: `${10 + (i % 3) * 30}%`
                            }}
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ending CTA */}
        <section className="relative bg-white py-10 md:py-14 lg:py-16 overflow-hidden">
          <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
              So what&apos;s next?
            </h5>
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
              Ready to build an AI‑driven marketing engine that generates real leads?
            </h5>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal max-w-3xl mx-auto mb-8">
              Stop guessing. Start growing. Let EscaBiz&apos;s Marketing VSA help you attract more clients, generate quality leads, and scale faster — powered by AI and human expertise.
            </p>
            <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
              <span className="relative z-10 flex items-center">
                Request your free AI marketing strategy session
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </div>
        </section>

        <style jsx global>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        `}</style>
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


