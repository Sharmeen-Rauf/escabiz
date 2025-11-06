"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CommercialCleaningPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
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
              We deliver guaranteed clients, not just leads. We help restoration, cleaning, and maintenance providers secure more clients with AI-powered targeting, guaranteed sales, and fully managed outsourced sales teams.
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
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-6">
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
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[680px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/WhatsApp Image 2025-10-07 at 12.43.24 AM.jpeg" alt="showcase-1" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
            <div className="relative w-full h-[380px] md:h-[480px] lg:h-[620px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Banner.jpg" alt="showcase-2" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - cards grid */}
      <section className="relative w-full bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1c75c0" />
                <stop offset="100%" stopColor="#6f7074" />
              </linearGradient>
            </defs>
            <circle cx="150" cy="120" r="90" fill="url(#g)" opacity="0.15" />
            <circle cx="1050" cy="420" r="120" fill="url(#g)" opacity="0.15" />
          </svg>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#1c75c0] uppercase tracking-wide">Tailored Solutions</p>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Industries We Serve</h3>
            <p className="mt-2 text-[#6f7074]">Across Service Sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: "💧", title: "Water Damage & Flood Restoration", desc: "Rapid extraction, structural drying, and assessment to return properties to pre-damage condition." },
              { icon: "🧪", title: "Mold Remediation & Prevention", desc: "Identification, containment, removal, and preventive measures with air quality testing." },
              { icon: "🧼", title: "Commercial Cleaning & Janitorial", desc: "Reliable, consistent cleaning for offices, retail, and commercial facilities." },
              { icon: "🚽", title: "Sewage & Contaminated Cleanup", desc: "Safe cleanup for Category 3 hazards with complete decontamination and sanitization." },
              { icon: "🌀", title: "Structural Drying & Dehumidification", desc: "Advanced moisture detection and high-capacity equipment for rapid drying." },
              { icon: "🏢", title: "Residential & Commercial Maintenance", desc: "Ongoing maintenance, routine repairs, and preventive checks for long-term value." },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#1c75c0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-[#6f7074]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium split section */}
      <section className="relative bg-[#0f172a] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1200px] h-[1200px] opacity-20 blur-3xl" style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(28,117,192,0.3), transparent 60%)",
          }} />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">Are You Losing Clients to Faster Competitors?</h3>
              <p className="text-[#8b9dc3] text-base md:text-lg mb-6">
                Winning clients in industries like water damage restoration and commercial cleaning is competitive and time-sensitive. Businesses need new contracts quickly, but service providers often struggle with:
              </p>
              <ul className="space-y-3">
                {[
                  "Finding qualified leads",
                  "Reaching prospects before competitors",
                  "Building and managing a reliable sales team",
                  "Converting inquiries into paying clients",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-md px-4 py-3">
                    <span className="text-rose-400 mt-0.5">✖</span>
                    <span className="text-[#8b9dc3]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
                <h4 className="text-2xl font-bold text-[#1c75c0] border-b border-[#1c75c0] pb-3 mb-4">That’s where EscaBiz steps in.</h4>
                <p className="text-white text-lg font-semibold">We are not just another lead generation company — we are your Growth Partner.</p>
                <div className="mt-5 border border-[#6f7074] rounded-lg p-4">
                  <p className="uppercase text-sm text-[#6f7074] font-semibold mb-2">With:</p>
                  <ul className="space-y-2">
                    {["AI-powered targeting", "Dedicated outsourced sales teams", "Guaranteed sales opportunities"].map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-white">
                        <span className="text-sky-300 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-[#1c75c0] text-xl font-bold text-center mt-6">We ensure you never miss out on clients ready to buy.</p>
                <Link href="/lets-talk" className="block w-full mt-4 text-center rounded-full bg-[#1c75c0] hover:bg-[#165b93] text-white font-bold py-3 shadow-lg transition">Start Winning More Clients</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flip cards */}
      <section className="bg-[#121212] text-white py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c75c0] mb-3">Do You Face These Problems?</h3>
            <p className="text-[#6f7074]">EscaBiz eliminates these challenges by becoming your virtual sales engine.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💲", front: "Wasting hours chasing unqualified leads?", back: "We deliver qualified leads directly to you, saving time and boosting conversions.", cta: "Learn How" },
              { icon: "⏱️", front: "Competitors signing clients before you?", back: "AI-powered targeting and rapid outreach ensure you reach prospects first.", cta: "Get Ahead" },
              { icon: "📈", front: "No consistent flow of contracts each month?", back: "We provide guaranteed opportunities for a steady stream of new clients.", cta: "Ensure Flow" },
              { icon: "👥", front: "High cost of building a sales team?", back: "Use our dedicated outsourced teams without overhead costs.", cta: "Reduce Costs" },
            ].map((card, i) => (
              <div key={i} className={`relative h-80 [perspective:1000px] cursor-pointer`} onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}>
                <div className={`absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] ${flippedIndex === i ? "[transform:rotateY(180deg)]" : ""}`}>
                  <div className="absolute inset-0 bg-[#222] border border-[#6f7074] rounded-xl flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
                    <div className="text-5xl mb-4">{card.icon}</div>
                    <h4 className="text-lg text-[#6f7074] font-semibold text-center">{card.front}</h4>
                  </div>
                  <div className="absolute inset-0 bg-[#1c75c0] rounded-xl flex flex-col items-center justify-center p-6 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h4 className="text-xl font-bold mb-2">EscaBiz Solution:</h4>
                    <p className="text-center mb-4">{card.back}</p>
                    <Link href="/lets-talk" className="inline-block bg-white text-[#1c75c0] px-4 py-2 rounded-full font-semibold">{card.cta}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12 text-center bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[#8b9dc3] text-lg mb-4">EscaBiz solves this by becoming your virtual sales engine—delivering qualified leads, managing outreach, and closing deals on your behalf.</p>
            <Link href="/lets-talk" className="inline-block bg-[#1c75c0] hover:bg-[#165b93] text-white px-6 py-3 rounded-full font-bold transition">Transform Your Sales Today!</Link>
          </div>
        </div>
      </section>

      {/* Simple process grid */}
      <section className="bg-white py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c75c0] mb-3">How Does EscaBiz Deliver Guaranteed Clients?</h3>
            <p className="text-[#6f7074]">Our streamlined process ensures a consistent flow of qualified clients, month after month.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Consultation & Strategy", d: "We study your goals & market to create a tailored strategy for client acquisition." },
              { n: "02", t: "Targeted Lead Research", d: "AI finds clients actively needing your services, ensuring high-value prospects." },
              { n: "03", t: "Sales Outreach & Pitching", d: "Our experts pitch under your brand, professionally engaging potential clients." },
              { n: "04", t: "Lead Qualification", d: "No time-wasters—only genuine, ready-to-convert prospects move forward." },
              { n: "05", t: "Contract Delivery", d: "Turning opportunities into real, signed contracts and immediate revenue for you." },
              { n: "06", t: "Ongoing Growth Support", d: "We continuously scale your client pipeline for month-after-month growth." },
            ].map((c, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-0.5">
                <div className="text-4xl font-black text-[#1c75c0] border-b border-[#6f7074] w-16 leading-none pb-2 mb-3">{c.n}</div>
                <h4 className="text-xl font-bold text-[#1c75c0] mb-1">{c.t}</h4>
                <p className="text-[#6f7074]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24" id="faq">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h3>
            <p className="text-[#6f7074] max-w-3xl mx-auto">Your growth journey, simplified. Find answers to common queries about our process, services, and commitment to your results.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-sm sticky top-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1c75c0] flex items-center justify-center text-white mb-4">
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm1 17h-2v-2h2v2Zm2.07-7.75-.9.92c-.72.72-1.17 1.41-1.17 2.33V15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 10-4 0H8a4 4 0 118 0c0 .88-.35 1.7-.93 2.35Z"/></svg>
              </div>
              <h4 className="text-[#1c75c0] text-xl font-bold mb-2">Curiosity? We've Got Answers!</h4>
              <p className="text-[#6f7074] mb-4">At EscaBiz, transparency is key. We're dedicated to clarifying every step of our partnership. If your question isn't here, our friendly team is just a chat away!</p>
              <Link href="/lets-talk" className="inline-block bg-[#155a90] hover:bg-[#1c75c0] text-white font-bold px-4 py-2 rounded-md">Speak to an EscaBiz Expert</Link>
            </div>
            <div className="lg:col-span-2 space-y-3">
              {[
                { q: "What makes EscaBiz’s lead generation different from others?", a: "Unlike traditional lead sellers, we don’t just hand you a list of names. We find, qualify, pitch, and close clients on your behalf. That means you get guaranteed paying contracts, not just cold leads." },
                { q: "Can your services be customized for my business?", a: "Absolutely. We tailor strategy for your services, market, and growth goals—whether small crew or nationwide brand." },
                { q: "What kind of support do I get after leads are delivered?", a: "We handle follow‑ups, nurturing, and deal closing to build long‑term client relationships." },
                { q: "How long does it take to see results?", a: "Most clients see qualified appointments within 2–4 weeks, with conversions ramping within 90 days." },
                { q: "How do I track performance and ROI?", a: "Transparent reports show leads, appointments, conversions, and contracts delivered." },
                { q: "How much do EscaBiz’s services cost?", a: "Flexible pricing based on scope and goals, focused on ROI and guaranteed results." },
                { q: "Can I see proof that this works?", a: "Yes—case studies and success stories across cleaning, restoration, and maintenance." },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className={`w-full text-left px-5 py-4 font-semibold flex items-center justify-between ${openFaq === i ? "bg-[#1c75c0] text-white" : "bg-white text-gray-900 hover:bg-gray-50"}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className={`text-2xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className="px-5 overflow-hidden transition-all" style={{ maxHeight: openFaq === i ? "500px" : 0 }}>
                    <p className="py-4 text-[#6f7074]">{item.a}</p>
                  </div>
                </div>
              ))}
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


