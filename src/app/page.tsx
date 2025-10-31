'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [clientsCount, setClientsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);

  // Set mounted state on client side only
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Parallax scroll + smooth reveal
  useEffect(() => {
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
    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, []);

  // 3D card tilt for elements with data-tilt
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
    const onMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -8;
      const ry = ((x / rect.width) - 0.5) * 8;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };
    const onLeave = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = '';
    };
    cards.forEach((el) => {
      el.addEventListener('mousemove', onMove as any);
      el.addEventListener('mouseleave', onLeave as any);
    });
    return () => cards.forEach((el) => {
      el.removeEventListener('mousemove', onMove as any);
      el.removeEventListener('mouseleave', onLeave as any);
    });
  }, []);

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
            <div className="max-w-2xl mx-auto text-center animate-fade-in-up reveal">
              {/* Heading */}
              <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 animate-slide-in-left drop-shadow-lg">
                More Clients. Less Stress.<br className="hidden md:block" /> Real Results.
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto animate-slide-in-left-delay drop-shadow-md">
                We specialize in helping companies scale faster by providing qualified leads, guaranteed sales, and full sales team support.
              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 animate-fade-in-delay relative overflow-hidden shadow-lg">
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

        {/* Digital Future Section - Redesigned */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-14 lg:py-16 reveal">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">
                Digital Future
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Scaling Businesses with Precision & Performance
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-3xl mx-auto font-normal">
                At EscaBiz, we don&apos;t just find prospects—we build predictable growth systems. Our expertise, technology, and strategic sales approach ensure your company gets the right clients at the right time.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-6">
              {/* Card 1: Data-Driven Targeting */}
              <div className="group relative bg-gradient-to-br from-white via-gray-50/20 to-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0]/30 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-[#1565a0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 group-hover:text-[#1c75c0] transition-colors duration-300">
                  Data-Driven Targeting
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#6f7074] leading-normal flex-grow font-normal">
                  Using advanced research and analytics, we identify decision-makers who need your services today—not just cold leads for tomorrow.
                </p>
              </div>

              {/* Card 2: Customized Outreach */}
              <div className="group relative bg-gradient-to-br from-white via-gray-50/20 to-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0]/30 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-[#1565a0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 group-hover:text-[#1c75c0] transition-colors duration-300">
                  Customized Outreach
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#6f7074] leading-normal flex-grow font-normal">
                  We create personalized campaigns and sales pitches that resonate with your ideal clients, increasing response and conversion rates.
                </p>
              </div>

              {/* Card 3: Relationship Building */}
              <div className="group relative bg-gradient-to-br from-white via-gray-50/20 to-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0]/30 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-[#1565a0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 group-hover:text-[#1c75c0] transition-colors duration-300">
                  Relationship Building
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#6f7074] leading-normal flex-grow font-normal">
                  Beyond the first sale, we help you build lasting relationships that turn one-time contracts into repeat business and loyal partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Generation Services Section - Redesigned */}
        <section className="w-full bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 py-12 md:py-16 lg:py-20 reveal relative overflow-hidden">
          {/* Elegant Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#1c75c0]/3 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/2 rounded-full blur-3xl animate-float-delay"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Elegant Number Indicator */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              {/* Number Indicator - VSA Studio Style */}
              <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
                <span className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wider">[ Lead Generation Services ]</span>
              </div>
              
              {/* Heading - Hero Section Style with Capitalize */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize animate-fade-in-up">
                Discover Guaranteed Sales Growth with Our Lead Generation Services
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-4xl mx-auto font-normal animate-fade-in-up-delay">
                We help businesses across multiple industries scale faster with high-quality, guaranteed sales. From Water Restoration, Commercial Maintenance, and HR & Recruiting Services to other specialized sectors, our expert sales teams pitch your services directly to potential clients. With proven strategies, targeted outreach, and a results-driven approach, we ensure your business consistently gets leads that convert into long-term clients.
              </p>
            </div>

            {/* CTA Cards with Staggered Animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-10">
              {/* Card 1: Schedule A Consultation */}
              <Link href="/lets-talk" className="bg-gradient-to-br from-[#1c75c0] to-[#1565a0] rounded-xl shadow-lg hover:shadow-2xl p-6 lg:p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden animate-card-1 cursor-pointer">
                {/* Elegant Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-xs font-bold text-white">01</span>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/3 rounded-full -ml-12 -mb-12 group-hover:scale-125 transition-transform duration-700" style={{ animationDelay: '0.1s' }}></div>
                
                <div className="relative z-10">
                  <h5 className="text-base md:text-lg font-semibold text-white mb-3 flex items-center capitalize">
                    Schedule A Consultation
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </h5>
                  <p className="text-xs md:text-sm text-white/90 leading-tight flex-grow font-normal">
                    Schedule a call with our Lead Generation Specialist to discuss how we can bring guaranteed clients to your business.
                  </p>
                </div>
              </Link>

              {/* Card 2: Connect With Us */}
              <Link href="/lets-talk" className="bg-gradient-to-br from-white via-gray-50/30 to-white rounded-xl shadow-lg hover:shadow-2xl p-6 lg:p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 group border border-gray-100 hover:border-[#1c75c0]/30 relative overflow-hidden animate-card-2 cursor-pointer">
                {/* Elegant Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm flex items-center justify-center border border-[#1c75c0]/20">
                  <span className="text-xs font-bold text-[#1c75c0]">02</span>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#1c75c0]/5 rounded-full -ml-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#1c75c0]/3 rounded-full -mr-14 -mb-14 group-hover:scale-125 transition-transform duration-700" style={{ animationDelay: '0.1s' }}></div>
                
                <div className="relative z-10">
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 flex items-center group-hover:text-[#1c75c0] transition-colors duration-300 capitalize">
                    Connect With Us
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </h5>
                  <p className="text-xs md:text-sm text-[#6f7074] leading-tight flex-grow font-normal">
                    Need leads fast? Our team is ready to get you started today. Click here to connect with us immediately.
                  </p>
                </div>
              </Link>

              {/* Card 3: Get Your Free Guide */}
              <Link href="/lets-talk" className="bg-gradient-to-br from-[#1c75c0] to-[#1565a0] rounded-xl shadow-lg hover:shadow-2xl p-6 lg:p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden animate-card-3 cursor-pointer">
                {/* Elegant Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-xs font-bold text-white">03</span>
                </div>
                
                {/* Animated Background Elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute top-0 left-0 w-24 h-24 bg-white/3 rounded-full -ml-12 -mt-12 group-hover:scale-125 transition-transform duration-700" style={{ animationDelay: '0.1s' }}></div>
                
                <div className="relative z-10">
                  <h5 className="text-base md:text-lg font-semibold text-white mb-3 flex items-center capitalize">
                    Get Your Free Guide
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </h5>
                  <p className="text-xs md:text-sm text-white/90 leading-tight flex-grow font-normal">
                    Download our quick-start guide to learn how our proven lead generation system helps water restoration companies grow.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* B2B LEAD DEVELOPMENT BENEFITS Section - Redesigned */}
        <section className="w-full bg-gradient-to-b from-gray-50/30 via-white to-gray-50/20 py-10 md:py-14 lg:py-16 reveal relative overflow-hidden">
          {/* Subtle Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1c75c0]/2 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/2 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize animate-fade-in-up">
                B2B Lead Development Benefits
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight max-w-4xl mx-auto font-normal animate-fade-in-up-delay">
                EscaBiz helps you attract, nurture, and convert B2B leads that grow your business.
              </p>
            </div>

            {/* Benefits Grid - Elegant Minimal Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-6">
              {/* Card 1: Target the Right Audience */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 lg:p-6 flex flex-col items-center text-center border border-gray-100 hover:border-[#1c75c0]/20 transition-all duration-300 hover:-translate-y-1 group animate-card-1">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 capitalize">
                  Target The Right Audience
                </h5>
                <p className="text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Reach decision-makers who truly matter to your business with EscaBiz&apos;s smart targeting.
                </p>
              </div>

              {/* Card 2: Increased Sales */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 lg:p-6 flex flex-col items-center text-center border border-gray-100 hover:border-[#1c75c0]/20 transition-all duration-300 hover:-translate-y-1 group animate-card-2">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 capitalize">
                  Increased Sales
                </h5>
                <p className="text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Turn consistent, high-quality leads into real deals that strengthen your revenue stream.
                </p>
              </div>

              {/* Card 3: Reduced Costs */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 lg:p-6 flex flex-col items-center text-center border border-gray-100 hover:border-[#1c75c0]/20 transition-all duration-300 hover:-translate-y-1 group animate-card-3">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 capitalize">
                  Reduced Costs
                </h5>
                <p className="text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Save on in-house resources by outsourcing to our experienced lead generation team.
                </p>
              </div>

              {/* Card 4: Improved ROI */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 lg:p-6 flex flex-col items-center text-center border border-gray-100 hover:border-[#1c75c0]/20 transition-all duration-300 hover:-translate-y-1 group animate-card-1">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 capitalize">
                  Improved ROI
                </h5>
                <p className="text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Get more conversions from every marketing dollar with data-driven B2B lead strategies.
                </p>
              </div>

              {/* Card 5: Enhanced Efficiency */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 lg:p-6 flex flex-col items-center text-center border border-gray-100 hover:border-[#1c75c0]/20 transition-all duration-300 hover:-translate-y-1 group animate-card-2">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 capitalize">
                  Enhanced Efficiency
                </h5>
                <p className="text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Focus on closing deals while we handle your lead pipeline and follow-ups seamlessly.
                </p>
              </div>

              {/* Card 6: Scalable Growth */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-5 lg:p-6 flex flex-col items-center text-center border border-gray-100 hover:border-[#1c75c0]/20 transition-all duration-300 hover:-translate-y-1 group animate-card-3">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 capitalize">
                  Scalable Growth
                </h5>
                <p className="text-xs md:text-sm text-[#6f7074] leading-tight font-normal">
                  Expand your reach and grow sustainably with flexible B2B solutions from EscaBiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Transform Section */}
        <section className="w-full bg-[#6f7074] py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to transform your Business?
            </h5>
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
                <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] mb-6 text-center">
                  Virtual Staff Augmentation
                </h5>
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
                <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] mb-6 text-center">
                  Industries
                </h5>
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
                <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] mb-6 text-center">
                  Lead Development System
                </h5>
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
                data-tilt
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4">
                    We Deliver Qualified Leads
                  </h5>
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
                data-tilt
                onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4">
                    We Act as Your Sales Team
                  </h5>
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
                data-tilt
                onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Guaranteed Sales Growth Team
                  </h5>
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
                data-tilt
                onClick={() => setActiveCard(activeCard === 4 ? null : 4)}
              >
                <div className="mb-6">
                  <div className="bg-white/20 rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Full Transparency & Insights
                  </h5>
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
              <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up-delay">
                Seamless, Scalable, and Cost-Effective Virtual Staffing
              </h5>
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
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Dedicated Specialists for Your Industry
                  </h5>
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
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Works Within Your Existing Systems
                  </h5>
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
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Comprehensive End-to-End Management
                  </h5>
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
                  <h5 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                    Flexible & Cost-Effective Pricing
                  </h5>
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

          {/* Animated dots - only render on client to avoid hydration mismatch */}
          {isMounted && (
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => {
                // Generate stable positions based on index for SSR compatibility
                const seed = i * 137.5; // Prime number for better distribution
                const left = ((seed % 1000) / 10) % 100;
                const top = (((seed * 1.618) % 1000) / 10) % 100;
                const delay = (seed % 200) / 100;
                const duration = 2 + ((seed % 200) / 100);
                
                return (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-[#1c75c0] rounded-full animate-pulse"
                    style={{
                      left: `${left}%`,
                      top: `${top}%`,
                      animationDelay: `${delay}s`,
                      animationDuration: `${duration}s`
                    }}
                  ></div>
                );
              })}
            </div>
          )}

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
                What We Do
              </h5>
              <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up-delay">
                We Deliver Leads. You Close Sales.
                      </h5>
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
                <h5 className="text-xl md:text-2xl font-bold text-white">Clients</h5>
              </div>
              <div className="text-center bg-gradient-to-br from-blue-900/80 to-blue-800/80 rounded-xl p-8 border border-[#1c75c0]/50 hover:border-[#1c75c0] transition-all duration-300 hover:shadow-2xl">
                <div className="text-5xl md:text-6xl font-bold text-[#1c75c0] mb-4">
                  {successRate}%
                </div>
                <h5 className="text-xl md:text-2xl font-bold text-white">Success Rate</h5>
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
                <h5 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6f7074] leading-tight mb-6">
                  Smart Lead Generation. Sales Teams That Deliver.
                </h5>
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
                      <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] group-hover:text-[#1c75c0] transition-colors duration-300">
                        Lead Generation Services
                      </h5>
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
                      <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] group-hover:text-[#1c75c0] transition-colors duration-300">
                        Dedicated Sales Teams
                      </h5>
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
                      <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] group-hover:text-[#1c75c0] transition-colors duration-300">
                        End-to-End Sales Management
                      </h5>
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
                  <h5 className="text-2xl md:text-3xl font-bold text-[#6f7074] mb-6">
                    GET YOUR ESTIMATE
                  </h5>
                  
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
                    <h5 className="text-xl md:text-2xl font-bold text-[#6f7074] mb-6">
                      GET A SOLUTION FOR B2B LEAD GENERATION
                    </h5>
                    
                    <div className="space-y-6 mb-8">
                      {/* Contact Item 1 */}
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c75c0] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <strong className="block text-[#6f7074] mb-1">Headquarter</strong>
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
                          <strong className="block text-[#6f7074] mb-1">Email Us</strong>
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

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes floatDelay {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(15px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(28, 117, 192, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(28, 117, 192, 0.8);
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

        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: floatDelay 8s ease-in-out infinite;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced button hover effect */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(28, 117, 192, 0.3);
        }

        /* Card hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        /* Shimmer effect for text */
        .text-shimmer {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #1c75c0 50%,
            #ffffff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* Smooth reveal utility */
        .reveal { opacity: 0; transform: translateY(22px); transition: opacity .6s ease, transform .6s ease; }
        .reveal-show { opacity: 1 !important; transform: translateY(0) !important; }
      `}</style>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white">
        {/* Top Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Column 1: Logo and Links */}
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
                <h5 className="text-base font-semibold text-white">Pakistan Office</h5>
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
                <h5 className="text-base font-semibold text-white">UK Office</h5>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Unit A98 4-6 Greatorex Street,<br />
                London, United Kingdom, E15NF
              </p>
            </div>

            {/* Column 4: Follow Us & Terms */}
            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-white mb-4">Follow Us</h5>
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
