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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [virtualStaffingActiveCard, setVirtualStaffingActiveCard] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Set mounted state on client side only
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 6 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Virtual Staffing Section - Auto-sliding vertical card slider
  useEffect(() => {
    const interval = setInterval(() => {
      setVirtualStaffingActiveCard((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Parallax scroll + smooth reveal with elegant animations inspired by Urban Jürgensen
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach(el => {
          const speed = Number(el.dataset.speed || 0.3);
          el.style.transform = `translateY(${y * speed}px)`;
        });
    };

    // Enhanced Intersection Observer with staggered animations and vertical scroll movement
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('reveal-show');
          
          // Add elegant fade-in with stagger for child elements
          const childElements = element.querySelectorAll('.animate-stagger');
          childElements.forEach((child, childIndex) => {
            setTimeout(() => {
              (child as HTMLElement).classList.add('animate-elegant-fade');
            }, childIndex * 100);
          });
          
          io.unobserve(element);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    // Scroll-based vertical movement for cards with data-scroll-offset
    const handleCardScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      document.querySelectorAll<HTMLElement>('[data-scroll-offset]').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const offset = Number(card.dataset.scrollOffset) || 0;
        const cardTop = rect.top + scrollY;
        const distanceFromTop = scrollY + rect.top - windowHeight;
        
        if (distanceFromTop > -windowHeight && distanceFromTop < windowHeight * 2) {
          // Calculate movement based on scroll position
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 1.5)));
          const translateY = (1 - progress) * offset;
          card.style.transform = `translateY(${translateY}px)`;
          card.style.transition = 'transform 0.1s ease-out';
        }
      });
    };
    
    window.addEventListener('scroll', handleCardScroll, { passive: true });

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    
    // Smooth scroll with parallax
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleCardScroll);
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
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* Heading */}
              <h5 className="text-1xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              More Clients. Less Stress. Real Results.

              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              We specialize in helping companies scale faster by providing qualified leads, guaranteed sales, and full sales team support.
              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg">
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
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1">
                Digital Future
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Scaling Businesses with Precision & Performance
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight max-w-3xl mx-auto font-normal">
                At EscaBiz, we don&apos;t just find prospects—we build predictable growth systems. Our expertise, technology, and strategic sales approach ensure your company gets the right clients at the right time.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-6">
              {/* Card 1: Data-Driven Targeting */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                  Data-Driven Targeting
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal flex-grow font-normal transition-colors duration-300">
                  Using advanced research and analytics, we identify decision-makers who need your services today—not just cold leads for tomorrow.
                </p>
              </div>

              {/* Card 2: Customized Outreach */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                  Customized Outreach
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal flex-grow font-normal transition-colors duration-300">
                  We create personalized campaigns and sales pitches that resonate with your ideal clients, increasing response and conversion rates.
                </p>
              </div>

              {/* Card 3: Relationship Building */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                  Relationship Building
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal flex-grow font-normal transition-colors duration-300">
                  Beyond the first sale, we help you build lasting relationships that turn one-time contracts into repeat business and loyal partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

       
        
        {/* Lead Generation Services Section - Redesigned */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16 relative overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
              {/* Subtitle */}
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1">
                 Lead Generation Services 
              </p>
              
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                Discover Guaranteed Sales Growth with Our Lead Generation Services
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight max-w-4xl mx-auto font-normal">
                We help businesses across multiple industries scale faster with high-quality, guaranteed sales. From Water Restoration, Commercial Maintenance, and HR & Recruiting Services to other specialized sectors, our expert sales teams pitch your services directly to potential clients. With proven strategies, targeted outreach, and a results-driven approach.
              </p>
            </div>

            {/* Image with Benefit Cards */}
            <div className="relative max-w-2xl mx-auto">
              {/* Central Image - Reduced size and opacity */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl opacity-75">
                <Image
                  src="/confident.jpg"
                  alt="Lead Generation Services"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Card 1 - Right Side Top (Zigzag Pattern) */}
              <Link href="/lets-talk">
                <div className="absolute top-6 -right-6 md:-right-10 lg:-right-14 z-20 bg-white rounded-2xl shadow-xl p-3 md:p-4 max-w-[280px] md:max-w-[320px] lg:max-w-[360px] border border-gray-200/30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="space-y-1">
                    <h5 className="text-xs md:text-sm font-semibold text-[#6f7074] capitalize leading-tight">
                      Schedule A Consultation
                    </h5>
                    <p className="text-xs text-[#a9a9a9] leading-tight font-normal">
                      Schedule a call with our Lead Generation Specialist to discuss how we can bring guaranteed clients to your business.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 2 - Left Side Middle (Zigzag Pattern) */}
              <Link href="/lets-talk">
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-10 lg:-left-14 z-20 bg-white rounded-2xl shadow-xl p-3 md:p-4 max-w-[280px] md:max-w-[320px] lg:max-w-[360px] border border-gray-200/30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="space-y-1">
                    <h5 className="text-xs md:text-sm font-semibold text-[#6f7074] capitalize leading-tight">
                      Connect With Us
                    </h5>
                    <p className="text-xs text-[#a9a9a9] leading-tight font-normal">
                      Need leads fast? Our team is ready to get you started today. Click here to connect with us immediately.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Card 3 - Right Side Bottom (Zigzag Pattern) */}
              <Link href="/lets-talk">
                <div className="absolute bottom-6 -right-6 md:-right-10 lg:-right-14 z-20 bg-white rounded-2xl shadow-xl p-3 md:p-4 max-w-[280px] md:max-w-[320px] lg:max-w-[360px] border border-gray-200/30 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="space-y-1">
                    <h5 className="text-xs md:text-sm font-semibold text-[#6f7074] capitalize leading-tight">
                      Get Your Free Guide
                    </h5>
                    <p className="text-xs text-[#a9a9a9] leading-tight font-normal">
                      Download our quick-start guide to learn how our proven lead generation system helps water restoration companies grow.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Get Qualified Lead Button - Left Side Bottom (Zigzag Pattern) */}
              <div className="absolute bottom-6 -left-6 md:-left-10 lg:-left-14 z-20">
                <Link href="/lets-talk">
                  <button className="bg-white hover:bg-gray-50 text-[#1c75c0] font-semibold px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-xs md:text-sm border border-gray-200/30">
                    Get Qualified Lead
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* B2B Lead Development Benefits Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16 reveal">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
              {/* Heading - Hero Section Style */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3 capitalize">
                B2B LEAD DEVELOPMENT BENEFITS
              </h5>
              
              {/* Paragraph */}
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight max-w-3xl mx-auto font-normal">
                EscaBiz helps you attract, nurture, and convert B2B leads that grow your business.
              </p>
            </div>

            {/* Benefits Grid - 3 columns, 2 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Target the Right Audience */}
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200/50 hover:border-[#1c75c0]/30">
                {/* Icon - No Background */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-10 h-10 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 text-center">
                  Target the Right Audience
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal flex-grow text-center">
                  Reach decision-makers who truly matter to your business with EscaBiz&apos;s smart targeting.
                </p>
              </div>

              {/* Card 2: Increased Sales */}
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200/50 hover:border-[#1c75c0]/30">
                {/* Icon - No Background */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-10 h-10 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 text-center">
                  Increased Sales
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal flex-grow text-center">
                  Turn consistent, high-quality leads into real deals that strengthen your revenue stream.
                </p>
              </div>

              {/* Card 3: Reduced Costs */}
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200/50 hover:border-[#1c75c0]/30">
                {/* Icon - No Background */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-10 h-10 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 text-center">
                  Reduced Costs
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal flex-grow text-center">
                  Save on in-house resources by outsourcing to our experienced lead generation team.
                </p>
              </div>

              {/* Card 4: Improved ROI */}
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200/50 hover:border-[#1c75c0]/30">
                {/* Icon - No Background */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-10 h-10 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 text-center">
                  Improved ROI
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal flex-grow text-center">
                  Get more conversions from every marketing dollar with data-driven B2B lead strategies.
                </p>
              </div>

              {/* Card 5: Enhanced Efficiency */}
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200/50 hover:border-[#1c75c0]/30">
                {/* Icon - No Background */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-10 h-10 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 text-center">
                  Enhanced Efficiency
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal flex-grow text-center">
                  Focus on closing deals while we handle your lead pipeline and follow-ups seamlessly.
                </p>
              </div>

              {/* Card 6: Scalable Growth */}
              <div className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 lg:p-8 flex flex-col items-center text-center border border-gray-200/50 hover:border-[#1c75c0]/30">
                {/* Icon - No Background */}
                <div className="mb-4 flex justify-center">
                  <svg className="w-10 h-10 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 text-center">
                  Scalable Growth
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal flex-grow text-center">
                  Expand your reach and grow sustainably with flexible B2B solutions from EscaBiz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Pages Slider - Elegant Glassmorphism Design */}
        <section className="w-full bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30 py-12 md:py-16 lg:py-20 reveal relative overflow-hidden">
          {/* Elegant Background Gradient Overlay - Blue Theme Only */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/5 via-transparent to-[#1c75c0]/3 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1c75c0]/10 to-transparent rounded-full blur-3xl -mr-[300px] -mt-[300px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#1c75c0]/8 to-transparent rounded-full blur-3xl -ml-[250px] -mb-[250px] pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize animate-fade-in-up">
                Explore Our Services
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight max-w-3xl mx-auto font-normal animate-fade-in-up-delay">
                Discover comprehensive solutions designed to transform your business
              </p>
            </div>

            {/* Elegant Slider Container */}
            <div className="relative mt-10 max-w-5xl mx-auto">
              {/* Decorative Vector Background Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <svg className="absolute top-10 right-10 w-32 h-32 opacity-[0.05] text-[#1c75c0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <svg className="absolute bottom-10 left-10 w-24 h-24 opacity-[0.05] text-[#1c75c0]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-[0.03] text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? 6 : prev - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200/50 group"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#6f7074] group-hover:text-[#1c75c0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 6 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200/50 group"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#6f7074] group-hover:text-[#1c75c0] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slider Content */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  ref={sliderRef}
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1: Lead Development System */}
                  <div className="min-w-full px-2">
                    <Link href="http://www.escabiz.com/b2b-lead-appointment-setup" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Decorative Image - Right Side */}
                        <div className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                          <Image
                            src="/Gemini_Generated_Image_c5pp2pc5pp2pc5pp.png"
                            alt="Lead Development"
                            width={200}
                            height={200}
                            className="w-32 h-32 lg:w-44 lg:h-44 object-contain"
                          />
                        </div>
                        
                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10 z-10">
                          <div className="max-w-md">
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Lead Development</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              B2B Lead Appointment Setup
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight">
                              Schedule qualified B2B appointments with decision-makers who are ready to buy your services.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Slide 2: Marketing VSA */}
                  <div className="min-w-full px-2">
                    <Link href="/virtual-staff-augmentation/marketing-vsa" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                          <div>
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Virtual Staff</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              Marketing VSA
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight max-w-md">
                              Get expert marketing professionals working for you without the overhead of full-time employees.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Slide 3: Sales VSA */}
                  <div className="min-w-full px-2">
                    <Link href="/virtual-staff-augmentation/sales-vsa" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                          <div>
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Virtual Staff</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              Sales VSA
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight max-w-md">
                              Scale your sales team with skilled virtual sales professionals who deliver results.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Slide 4: HR & Recruiting Services */}
                  <div className="min-w-full px-2">
                    <Link href="/industries/hr-recruiting" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                          <div>
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Industries</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              HR & Recruiting Services
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight max-w-md">
                              Specialized B2B lead generation services for HR staffing and recruiting firms.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Slide 5: Commercial Cleaning */}
                  <div className="min-w-full px-2">
                    <Link href="/industries/commercial-cleaning" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                          <div>
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Industries</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              Commercial Cleaning
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight max-w-md">
                              Targeted lead generation solutions for commercial cleaning companies looking to grow.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Slide 6: B2B LinkedIn Outreach Automation */}
                  <div className="min-w-full px-2">
                    <Link href="http://www.escabiz.com/linkedin-automation-services-escabiz" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                          <div>
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Lead Development</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              B2B LinkedIn Outreach Automation
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight max-w-md">
                              Automate your LinkedIn outreach campaigns to connect with decision-makers and generate qualified B2B leads.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Slide 7: B2B Business Analysis */}
                  <div className="min-w-full px-2">
                    <Link href="http://www.escabiz.com/b2b-market-research-agency-escabiz" className="block group">
                      <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1c75c0]/10 via-[#1c75c0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
                          <div>
                            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[#1c75c0]/10 backdrop-blur-sm border border-[#1c75c0]/20">
                              <span className="text-xs font-semibold text-[#1c75c0] uppercase tracking-wider">Lead Development</span>
                            </div>
                            <h5 className="text-2xl lg:text-3xl font-semibold text-[#6f7074] mb-3 capitalize leading-tight group-hover:text-[#1c75c0] transition-colors duration-300">
                              B2B Business Analysis
                            </h5>
                            <p className="text-sm md:text-base text-[#6f7074]/80 leading-tight max-w-md">
                              Comprehensive market research and business analysis to identify opportunities and drive strategic growth.
                            </p>
                          </div>
                          <div className="flex items-center text-[#1c75c0] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                            <span className="text-sm lg:text-base mr-2">Explore Service</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-8 bg-[#1c75c0]'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

       

        {/* Virtual Staffing Section - Single Card with Pagination */}
        <section className="relative w-full bg-gradient-to-b from-white via-[#1c75c0]/5 to-white py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Content */}
              <div className="space-y-4 lg:pr-8">
                <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide">
                  The Escabiz Difference: Your Trusted Virtual Staffing Agency Partner
                </p>
                <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#6f7074] leading-tight capitalize">
                  Seamless, Scalable, and Cost-Effective Virtual Staffing
                </h5>
                <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed font-normal">
                  Bringing Expert Virtual Talent to Your Team Has Never Been Easier. Finding the right talent shouldn&apos;t be a challenge. With EscaBiz&apos;s Remote Staffing Solutions, you get skilled professionals who seamlessly integrate into your team—without the hassle of traditional hiring.
                </p>
              </div>

              {/* Right Side - Single Card Display */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100 min-h-[350px] lg:min-h-[400px] flex flex-col">
                  {/* Step Indicator - Top Right */}
                  <div className="absolute top-6 right-6 text-sm font-semibold text-[#1c75c0] italic">
                    Step {String(virtualStaffingActiveCard + 1).padStart(2, '0')}
                  </div>

                  {/* Icon - Centered at Top */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/20 rounded-xl flex items-center justify-center border border-[#1c75c0]/20">
                      {virtualStaffingActiveCard === 0 && (
                        <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {virtualStaffingActiveCard === 1 && (
                        <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      )}
                      {virtualStaffingActiveCard === 2 && (
                        <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {virtualStaffingActiveCard === 3 && (
                        <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 flex flex-col">
                    <h5 className="text-xl md:text-2xl font-semibold text-[#6f7074] mb-4 leading-tight text-center">
                      {virtualStaffingActiveCard === 0 && "Dedicated Specialists for Your Industry"}
                      {virtualStaffingActiveCard === 1 && "Works Within Your Existing Systems"}
                      {virtualStaffingActiveCard === 2 && "Comprehensive End-to-End Management"}
                      {virtualStaffingActiveCard === 3 && "Flexible & Cost-Effective Pricing"}
                    </h5>
                    <p className="text-sm md:text-base text-[#6f7074]/80 leading-relaxed text-center">
                      {virtualStaffingActiveCard === 0 && "Gain access to highly skilled remote workforce tailored for your needs—whether it's sales, marketing, finance, or recruiting. Our experts deliver real results."}
                      {virtualStaffingActiveCard === 1 && "Our virtual remote team integrates smoothly into your workflows, using your preferred tools and processes for a hassle-free experience."}
                      {virtualStaffingActiveCard === 2 && "From onboarding and training to ongoing quality control, we handle everything. Your remote staff is set up for success from day one."}
                      {virtualStaffingActiveCard === 3 && "No unnecessary costs—pay only for the expertise and hours you need. Our scalable model allows you to adjust your team as your business evolves."}
                    </p>
                  </div>
                </div>

                {/* Pagination Dots - Bottom Center */}
                <div className="flex justify-center gap-2 mt-6">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => setVirtualStaffingActiveCard(index)}
                      className={`rounded-full transition-all duration-300 ${
                        virtualStaffingActiveCard === index
                          ? 'w-3 h-3 bg-[#1c75c0]'
                          : 'w-3 h-3 bg-[#1c75c0]/30 border border-[#1c75c0]/50'
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section with Counters */}
        <section className="relative w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-12 md:py-16 lg:py-20 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-10">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                What We Do
              </h5>
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                We Deliver Leads. You Close Sales.
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                We help businesses in Water Restoration, Commercial Maintenance, HR & Recruiting, and more by generating quality leads and providing dedicated sales teams. Our proven system ensures you get clients consistently, so you can focus on delivering your services while we grow your business.
              </p>
            </div>

            {/* Counters */}
            <div ref={countersRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#1c75c0] mb-3">
                  {clientsCount}+
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074]">Clients</h5>
              </div>
              <div className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#1c75c0] mb-3">
                  {successRate}%
                </div>
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074]">Success Rate</h5>
              </div>
            </div>
          </div>
        </section>

         {/* Services Overview Section - Elegant Expandable Cards with Background Images */}
         <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-14 lg:py-16 reveal relative overflow-hidden">
          {/* Subtle Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1c75c0]/2 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1c75c0]/2 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {/* Card 1: We Deliver Qualified Leads */}
              <div 
                className={`relative group rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeCard === 1 ? 'min-h-[500px] shadow-xl' : 'min-h-[350px] shadow-md hover:shadow-lg'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === 1 ? null : 1);
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/1.jpg"
                    alt="We Deliver Qualified Leads"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.4 }}
                  />
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 lg:p-7">
                  <div>
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                      We Deliver Qualified Leads
                    </h5>
                    <p className={`text-sm md:text-base text-white/90 leading-tight transition-all duration-500 ${
                      activeCard === 1 ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      Connect only with clients who truly need your services—saving time, money, and effort. Our targeted approach ensures every lead is pre-qualified and ready to engage.
                    </p>
                  </div>
                  
                  {/* Arrow Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(activeCard === 1 ? null : 1);
                    }}
                    className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-500 hover:bg-white/30 hover:scale-110 group self-start ${
                      activeCard === 1 ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card 2: We Act as Your Sales Team */}
              <div 
                className={`relative group rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeCard === 2 ? 'min-h-[500px] shadow-xl' : 'min-h-[350px] shadow-md hover:shadow-lg'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === 2 ? null : 2);
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/2.jpg"
                    alt="We Act as Your Sales Team"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.4 }}
                  />
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 lg:p-7">
                  <div>
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                      We Act as Your Sales Team
                    </h5>
                    <p className={`text-sm md:text-base text-white/90 leading-tight transition-all duration-500 ${
                      activeCard === 2 ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      From pitching to closing, our dedicated reps work as your in-house sales force. We handle every step of the sales process, ensuring consistent results and seamless integration.
                    </p>
                  </div>
                  
                  {/* Arrow Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(activeCard === 2 ? null : 2);
                    }}
                    className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-500 hover:bg-white/30 hover:scale-110 group self-start ${
                      activeCard === 2 ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card 3: Guaranteed Sales Growth Team */}
              <div 
                className={`relative group rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeCard === 3 ? 'min-h-[500px] shadow-xl' : 'min-h-[350px] shadow-md hover:shadow-lg'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === 3 ? null : 3);
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/3.jpg"
                    alt="Guaranteed Sales Growth Team"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.4 }}
                  />
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 lg:p-7">
                  <div>
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                      Guaranteed Sales Growth Team
                    </h5>
                    <p className={`text-sm md:text-base text-white/90 leading-tight transition-all duration-500 ${
                      activeCard === 3 ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      We don&apos;t just generate leads—we ensure real, measurable contracts and revenue. Our proven track record speaks for itself with consistent growth month over month.
                    </p>
                  </div>
                  
                  {/* Arrow Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(activeCard === 3 ? null : 3);
                    }}
                    className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-500 hover:bg-white/30 hover:scale-110 group self-start ${
                      activeCard === 3 ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Card 4: Full Transparency & Insights */}
              <div 
                className={`relative group rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  activeCard === 4 ? 'min-h-[500px] shadow-xl' : 'min-h-[350px] shadow-md hover:shadow-lg'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCard(activeCard === 4 ? null : 4);
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/4.jpg"
                    alt="Full Transparency & Insights"
                    fill
                    className="object-cover"
                    style={{ opacity: 0.4 }}
                  />
                  {/* Dark Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
                </div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 lg:p-7">
                  <div>
                    <h5 className="text-lg md:text-xl font-semibold text-white mb-3 leading-tight">
                      Full Transparency & Insights
                    </h5>
                    <p className={`text-sm md:text-base text-white/90 leading-tight transition-all duration-500 ${
                      activeCard === 4 ? 'opacity-100 max-h-[200px]' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      Get clear reports and real-time updates so you always know how your sales pipeline is performing. Complete visibility into every aspect of your lead generation and sales process.
                    </p>
                  </div>
                  
                  {/* Arrow Icon Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(activeCard === 4 ? null : 4);
                    }}
                    className={`w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-500 hover:bg-white/30 hover:scale-110 group self-start ${
                      activeCard === 4 ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Section with Background Image and Chat Cards */}
        <section className="w-full py-10 md:py-12 lg:py-16 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/colleagues-working-project-discussing-details.jpg"
              alt="Smart Lead Generation"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content Section */}
            <div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
              <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1">
                What We Do
              </p>
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2 capitalize">
                Smart Lead Generation. Sales Teams That Deliver.
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight mb-6 font-normal">
                We help businesses grow by connecting them with the right clients. From lead generation to full sales support, we ensure your pipeline stays full so you can focus on delivering services stress-free.
              </p>
            </div>

            {/* Central Image Container with Chat Cards */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/colleagues-working-project-discussing-details.jpg"
                  alt="Smart Lead Generation"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Chat Card - Top Left */}
              <div className="absolute top-4 -left-4 md:-left-8 lg:-left-12 z-20 bg-white rounded-lg shadow-xl p-4 max-w-[200px] md:max-w-[220px] border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1c75c0] to-[#1565a0] rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                  <span className="text-xs font-semibold text-[#6f7074]">ReviewPoint</span>
                </div>
                <p className="text-xs text-[#6f7074] leading-tight">Thank you for your feedback! I will forward you a copy.</p>
              </div>

              {/* Chat Card - Top Right */}
              <div className="absolute top-4 -right-4 md:-right-8 lg:-right-12 z-20 bg-white rounded-lg shadow-xl p-4 max-w-[220px] md:max-w-[240px] border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">AV</div>
                  <span className="text-xs font-semibold text-[#6f7074]">Alexander Vaughn</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <p className="text-xs text-[#6f7074] leading-tight">Amazing service and office staff, everything was completed promptly.</p>
              </div>

              {/* Chat Card - Bottom Left */}
              <div className="absolute bottom-4 -left-4 md:-left-8 lg:-left-12 z-20 bg-white rounded-lg shadow-xl p-4 max-w-[200px] md:max-w-[220px] border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white text-xs font-bold">RF</div>
                  <span className="text-xs font-semibold text-[#6f7074]">Ryan Fronz</span>
                </div>
                <p className="text-xs text-[#6f7074] leading-tight">I couldn't find my reservation confirmation. Otherwise the office staff was helpful.</p>
              </div>

              {/* Chat Card - Bottom Right */}
              <div className="absolute bottom-4 -right-4 md:-right-8 lg:-right-12 z-20 bg-[#1c75c0] rounded-lg shadow-xl p-4 max-w-[200px] md:max-w-[220px] border border-[#1565a0] hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1c75c0] text-xs font-bold">R</div>
                  <span className="text-xs font-semibold text-white">ReviewPoint</span>
                </div>
                <p className="text-xs text-white/90 leading-tight">Thank you for your feedback! I will forward you a copy to speed up your next booking.</p>
              </div>
            </div>

            {/* Accordion Content */}
            <div className="max-w-3xl mx-auto mt-10 md:mt-12">

                {/* Accordion Items */}
                <div className="space-y-3">
                  {/* Accordion 1 */}
                  <div className="border-t border-gray-200 pt-3">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-[#1c75c0] transition-colors duration-300 leading-tight">
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
                      <p className="mt-3 text-xs md:text-sm text-[#6f7074] leading-tight animate-fade-in-up">
                        We provide high-quality, targeted leads for industries like Water Restoration, Commercial Maintenance, and HR & Recruiting. Our proven methods ensure your business consistently connects with clients who are ready to buy.
                      </p>
                    )}
                  </div>

                  {/* Accordion 2 */}
                  <div className="border-t border-gray-200 pt-3">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-[#1c75c0] transition-colors duration-300 leading-tight">
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
                      <p className="mt-3 text-xs md:text-sm text-[#6f7074] leading-tight animate-fade-in-up">
                        Our expert sales professionals pitch your services, follow up with potential clients, and close deals on your behalf — saving you time while guaranteeing results.
                      </p>
                    )}
                  </div>

                  {/* Accordion 3 */}
                  <div className="border-t border-gray-200 pt-3">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === 3 ? null : 3)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-[#1c75c0] transition-colors duration-300 leading-tight">
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
                      <p className="mt-3 text-xs md:text-sm text-[#6f7074] leading-tight animate-fade-in-up">
                        Complete sales support from initial lead contact through final deal closure. We manage your entire sales pipeline so you can focus on what you do best.
                      </p>
                    )}
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

      {/* Footer Section */}
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
