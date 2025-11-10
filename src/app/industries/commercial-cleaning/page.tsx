"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CommercialCleaningPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Auto-slider for process cards - show 3 at a time
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

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
            backgroundImage: 'url(/towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg)',
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
          <div className="max-w-2xl mx-auto text-center">
            {/* Heading */}
            <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Struggling to Win More Clients for Your Restoration or Cleaning Business?
            </h5>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              We help restoration, cleaning, and maintenance providers secure more clients with AI-powered targeting, guaranteed sales, and fully managed outsourced sales teams.
            </p>

            {/* Button with enhanced animation */}
            <div className="flex justify-center">
              <Link href="/lets-talk" className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg">
                <span className="relative z-10 flex items-center">
                  Contact Us
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

      {/* Our Approach - content left, image right */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">Our Approach</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">Driving Real Growth for Service Providers</h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9]  font-normal mb-6">
                We don't just connect you with prospects—we help you secure paying clients. With AI-driven targeting, a dedicated sales team, and 24/7 outreach, we make sure you never miss an opportunity. We deliver targeted, high-intent leads—homeowners, businesses, and decision-makers actively seeking your services.
              </p>
              <Link href="/lets-talk" className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
                <span className="relative z-10 flex items-center">
                  Learn How We Deliver
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative">
                <Image src="/Gemini_Generated_Image_wr5fk7wr5fk7wr5f.png" alt="Approach" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase images */}
      <section className="w-full py-6 md:py-8 lg:py-10">
        <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[680px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/WhatsApp Image 2025-10-07 at 12.43.24 AM.jpeg" alt="showcase-1" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6 md:py-8 lg:py-10">
        <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[680px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Banner.jpg" alt="showcase-2" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - cards grid */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5">Tailored Solutions</p>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2">Industries We Serve</h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">Across Service Sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              { 
                icon: "water", 
                title: "Water Damage & Flood Restoration", 
                desc: "Rapid extraction, structural drying, and assessment to return properties to pre-damage condition." 
              },
              { 
                icon: "mold", 
                title: "Mold Remediation & Prevention", 
                desc: "Identification, containment, removal, and preventive measures with air quality testing." 
              },
              { 
                icon: "cleaning", 
                title: "Commercial Cleaning & Janitorial", 
                desc: "Reliable, consistent cleaning for offices, retail, and commercial facilities." 
              },
              { 
                icon: "sewage", 
                title: "Sewage & Contaminated Cleanup", 
                desc: "Safe cleanup for Category 3 hazards with complete decontamination and sanitization." 
              },
              { 
                icon: "drying", 
                title: "Structural Drying & Dehumidification", 
                desc: "Advanced moisture detection and high-capacity equipment for rapid drying." 
              },
              { 
                icon: "maintenance", 
                title: "Residential & Commercial Maintenance", 
                desc: "Ongoing maintenance, routine repairs, and preventive checks for long-term value." 
              },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    {item.icon === "water" && (
                      <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {item.icon === "mold" && (
                      <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {item.icon === "cleaning" && (
                      <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {item.icon === "sewage" && (
                      <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                    {item.icon === "drying" && (
                      <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    )}
                    {item.icon === "maintenance" && (
                      <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2">
                  {item.title}
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium split section */}
      <section className="relative bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">Are You Losing Clients to Faster Competitors?</h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-6">
                Winning clients in industries like water damage restoration and commercial cleaning is competitive and time-sensitive. Businesses need new contracts quickly, but service providers often struggle with:
              </p>
              <ul className="space-y-3">
                {[ 
                  'Finding qualified leads',
                  'Reaching prospects before competitors',
                  'Building and managing a reliable sales team',
                  'Converting inquiries into paying clients',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white border border-gray-200 rounded-md px-4 py-3">
                    <svg className="w-5 h-5 text-[#1c75c0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight border-b border-[#1c75c0] pb-3 mb-4">That's where EscaBiz steps in.</h4>
                <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal mb-4">We are not just another lead generation company — we are your Growth Partner.</p>
                <div className="mt-5 border border-gray-200 rounded-lg p-4">
                  <p className="uppercase text-xs md:text-sm text-[#1c75c0] font-semibold mb-2 tracking-wide">With:</p>
                  <ul className="space-y-2">
                    {['AI-powered targeting', 'Dedicated outsourced sales teams', 'Guaranteed sales opportunities'].map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#1c75c0] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-tight font-normal">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#1c75c0] leading-tight text-center mt-6">We ensure you never miss out on clients ready to buy.</p>
                <Link href="/lets-talk" className="block w-full mt-4 text-center rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] text-white font-semibold py-3 shadow-lg transition">Start Winning More Clients</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flip cards */}
      <section className="bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">Do You Face These Problems?</h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">EscaBiz eliminates these challenges by becoming your virtual sales engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {[
              { icon: "dollar", front: "Wasting hours chasing unqualified leads?" },
              { icon: "time", front: "Competitors signing clients before you?" },
              { icon: "chart", front: "No consistent flow of contracts each month?" },
              { icon: "team", front: "High cost of building a sales team?" },
            ].map((card, i) => (
              <div key={i} className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-200">
                {/* Icon above card */}
                <div className="mb-4 flex justify-center -mt-8">
                  <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-3 w-14 h-14 flex items-center justify-center border border-[#1c75c0]/20">
                    {card.icon === "dollar" && (
                      <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "time" && (
                      <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === "chart" && (
                      <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {card.icon === "team" && (
                      <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                {/* Text content */}
                <h4 className="text-base md:text-lg font-semibold text-[#6f7074] text-left mt-4">{card.front}</h4>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-8 text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-4">EscaBiz solves this by becoming your virtual sales engine—delivering qualified leads, managing outreach, and closing deals on your behalf.</p>
            <Link href="/lets-talk" className="inline-block bg-[#1c75c0] hover:bg-[#1565a0] text-white px-6 py-3 rounded-lg font-semibold text-sm transition">Transform Your Sales Today!</Link>
          </div>
        </div>
      </section>

      {/* Simple process grid - Linear Slider */}
      <section className="bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">How Does EscaBiz Deliver Guaranteed Clients?</h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">Our streamlined process ensures a consistent flow of qualified clients, month after month.</p>
          </div>
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {[
                { n: "01", t: "Consultation & Strategy", d: "We study your goals & market to create a tailored strategy for client acquisition." },
                { n: "02", t: "Targeted Lead Research", d: "AI finds clients actively needing your services, ensuring high-value prospects." },
                { n: "03", t: "Sales Outreach & Pitching", d: "Our experts pitch under your brand, professionally engaging potential clients." },
                { n: "04", t: "Lead Qualification", d: "No time-wasters—only genuine, ready-to-convert prospects move forward." },
                { n: "05", t: "Contract Delivery", d: "Turning opportunities into real, signed contracts and immediate revenue for you." },
                { n: "06", t: "Ongoing Growth Support", d: "We continuously scale your client pipeline for month-after-month growth." },
              ].map((c, i) => (
                <div 
                  key={i} 
                  className="w-1/3 flex-shrink-0 px-2"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className={`group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0] text-center`}>
                    <div className="text-2xl font-black text-[#1c75c0] group-hover:text-white border-b border-[#6f7074] group-hover:border-white w-12 leading-none pb-2 mb-3 mx-auto transition-colors duration-300">{c.n}</div>
                    <h4 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">{c.t}</h4>
                    <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal flex-grow font-normal transition-colors duration-300">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-10 md:py-14 lg:py-16" id="faq">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - FAQ Content */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                  General Questions<br />Frequently Asked Questions?
                </h5>
              </div>
              
              {/* FAQ Items */}
              <div className="space-y-3">
                {[
                  { q: "What makes EscaBiz's lead generation different from others?", a: "Unlike traditional lead sellers, we don't just hand you a list of names. We find, qualify, pitch, and close clients on your behalf. That means you get guaranteed paying contracts, not just cold leads." },
                  { q: "Can your services be customized for my business?", a: "Absolutely. We tailor strategy for your services, market, and growth goals—whether small crew or nationwide brand." },
                  { q: "How long does it take to see results?", a: "Most clients see qualified appointments within 2–4 weeks, with conversions ramping within 90 days." },
                  { q: "How do I track performance and ROI?", a: "Transparent reports show leads, appointments, conversions, and contracts delivered." },
                  { q: "How much do EscaBiz's services cost?", a: "Flexible pricing based on scope and goals, focused on ROI and guaranteed results." },
                ].map((item, i) => (
                  <div key={i} className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                    activeFaq === i ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                  }`}>
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                    >
                      <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                        {item.q}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                          activeFaq === i ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === i ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-400 ${
                        activeFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5">
                        <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Image */}
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
                <Link href="/industries/commercial-cleaning" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
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


