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
              backgroundImage: 'url(/marketing%20banner.jpg)',
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
                EscaBiz – Transforming Marketing Into AI-Powered Lead Generation
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                Tired of marketing that burns money but brings no clients? At EscaBiz, we merge AI technology, data-driven marketing, and expert virtual teams to deliver what truly matters — qualified leads, measurable ROI, and business growth.
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
        <section className="w-full bg-[#f8f9fa] py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-lg shadow-xl p-8 relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#e0f2ff]" />
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c75c0] mb-4">Our Marketing VSA goes beyond traditional marketing.</h3>
              <p className="text-[#6f7074] text-base md:text-lg mb-4">We give you an AI-driven virtual marketing department that plans, executes, and optimizes campaigns designed to generate and convert leads faster — without the cost or hassle of hiring in-house teams.</p>
              <p className="text-gray-900 font-semibold border-l-4 border-[#1c75c0] pl-4 mb-6">We don’t just run campaigns. We build predictable growth systems.</p>
              <Link href="/lets-talk" className="inline-flex items-center bg-[#1c75c0] hover:bg-[#165b93] text-white px-5 py-3 rounded-md font-semibold transition">Start Building Your Predictable Growth</Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl min-h-[360px]">
              <Image src="/4.jpg" alt="AI-Driven Marketing" fill className="object-cover" />
              <span className="absolute bottom-4 left-4 bg-[#1c75c0]/80 text-white px-3 py-1.5 rounded-md backdrop-blur">AI-Driven Marketing</span>
            </div>
          </div>
        </section>

        {/* Problem / Solution split */}
        <section className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-black/30 rounded-xl p-8 border border-white/10 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-[#1c75c0] mb-4">Are You Losing Visibility and Clients Because of Weak Marketing?</h3>
              <p className="text-[#8ba0bd] mb-6">Marketing today isn’t just about posting content—it’s about building brand trust, engagement, and conversions. But for most businesses, it’s easier said than done.</p>
              <h4 className="text-xl font-bold text-white mb-2">Common Pain Points:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "No time to manage consistent content and campaigns",
                  "Expensive in-house marketing teams draining your budget",
                  "Lack of creativity or technical expertise",
                  "Poor SEO and limited lead flow",
                  "Struggling to rank on Google or attract leads",
                  "No system connecting marketing to actual client growth",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-md px-4 py-2">
                    <span className="text-rose-400">✖</span>
                    <span className="text-[#c9d6e8]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              {/* Analytics background instead of static image */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="a" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#1c75c0" />
                      <stop offset="100%" stopColor="#6f7074" />
                    </linearGradient>
                  </defs>
                  <g opacity="0.8">
                    <path d="M0 450 C 180 430, 320 520, 520 470 C 720 420, 900 520, 1200 470" stroke="url(#a)" strokeWidth="3" fill="none">
                      <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0 450 C 180 430, 320 520, 520 470 C 720 420, 900 520, 1200 470; M0 440 C 180 480, 320 420, 520 460 C 720 500, 900 430, 1200 480; M0 450 C 180 430, 320 520, 520 470 C 720 420, 900 520, 1200 470"/>
                    </path>
                    <circle cx="150" cy="160" r="6" fill="#1c75c0">
                      <animate attributeName="cy" values="160;150;160" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="780" cy="360" r="6" fill="#1c75c0">
                      <animate attributeName="cy" values="360;340;360" dur="5s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </svg>
              </div>
              <div className="bg-white rounded-xl shadow-2xl p-8 relative z-10">
                <p className="text-[#6f7074] font-semibold mb-2">That’s where EscaBiz comes in.</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1c75c0] mb-3">Marketing VSA: Your Full-Scale Virtual Marketing Department</h3>
                <p className="text-gray-900 mb-5">We provide Marketing Virtual Staff Augmentation (VSA) — helping you plan, execute, and scale your marketing campaigns without hiring an expensive in-house team.</p>
                <Link href="/lets-talk" className="inline-flex items-center bg-[#1c75c0] hover:bg-[#165b93] text-white px-5 py-3 rounded-md font-semibold transition">Book Your Free Strategy Session</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Minimalist challenges + portal */}
        <section className="relative bg-[#121212] text-white py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1200px] h-[1200px] opacity-10 blur-3xl" style={{ background: "radial-gradient(circle at 50% 0%, rgba(77,208,225,0.4), transparent 60%)" }} />
          </div>
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">Do You Face These Marketing Challenges?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                "Struggling to create consistent, high‑quality content?",
                "Spending money on ads that don’t convert?",
                "Losing leads due to poor follow‑up or online visibility?",
                "No team to manage your social media or SEO effectively?",
                "Lacking time to focus on both business growth and marketing?",
                "Poor SEO and limited lead flow?",
              ].map((t, i) => (
                <div key={i} className="bg-[#1f1f1f] border border-[#444] rounded-lg p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition">
                  <p className="text-sm md:text-base text-white/90">{t}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#ffd70066] to-[#fff8dc33] border border-[#ffd70080] rounded-xl p-8 backdrop-blur">
              <h4 className="text-3xl font-extrabold text-[#FFD700] drop-shadow mb-3">YOUR
                <span className="block text-white">GUIDING PATH</span>
                <span className="block text-[#FFD700]">TO GROWTH</span>
              </h4>
              <p className="text-white mb-5">EscaBiz fixes this by giving you a complete virtual marketing team — fully trained, data‑driven, and dedicated to your brand’s success.</p>
              <Link href="/lets-talk" className="inline-block bg-white text-[#1c75c0] px-6 py-3 rounded-full font-bold border-2 border-[#1c75c0] hover:bg-[#FFD700] hover:text-white transition">Find the Exit Strategy</Link>
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
              <div key={i} className="relative w-full h-[360px] md:h-[460px] bg-white rounded-xl overflow-hidden shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`banner-${i}`} className="absolute inset-0 w-full h-full object-contain bg-white" />
              </div>
            ))}
          </div>
        </section>

        {/* AI Consulting */}
        <section className="bg-[#0c0c0c] text-white py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">AI Consulting – Smarter Marketing, Predictable Growth</h3>
            <p className="text-[#a0a0a0] text-center max-w-3xl mx-auto mb-12">Navigating today’s AI-powered marketing landscape requires more than software — it requires strategy.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden border border-[#1c75c0] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://media.istockphoto.com/id/1933417108/photo/ai-chatbot-artificial-intelligence-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=faD707ehv7Nc1HBXtMZYbNNHZTYhHEnULlbrgkRNGNE=" alt="AI Consulting" className="w-full h-full object-cover opacity-90" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#4dd0e1] mb-4">At EscaBiz, our AI consultants help you:</h4>
                <ul className="space-y-3">
                  {[
                    "Identify and prioritize high‑ROI marketing use cases",
                    "Integrate AI tools for lead scoring, targeting, and automation",
                    "Improve data quality for precise audience segmentation",
                    "Predict campaign success with advanced analytics",
                    "Maintain ethical and compliant AI usage",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#a0a0a0] mt-6 border-l-4 border-[#1c75c0] pl-4">Our goal? To help you leverage AI not just for automation — but for acceleration. We guide you through every step to ensure your business achieves maximum ROI with minimum risk using AI-powered lead generation and digital marketing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid (glass) */}
        <section className="bg-[#0c0c0c] text-white py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#4dd0e1] text-center mb-3">How EscaBiz Helps You Grow?</h3>
            <p className="text-[#a0a0a0] text-center max-w-2xl mx-auto mb-10">Smart, Scalable, AI-Driven Marketing Teams Built for Business Growth</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "✒️", t: "Virtual Content Writer", d: "Create compelling, SEO-optimized content that attracts your ideal audience and converts visitors into real leads." },
                { icon: "📣", t: "Social Media Management", d: "Turn social media into a lead magnet with daily management and smart automation." },
                { icon: "📧", t: "Email Marketing", d: "Automated drip campaigns that nurture leads and close deals while you grow." },
                { icon: "📈", t: "SEO Specialist", d: "Improve rankings using keyword intelligence and technical SEO to capture organic demand." },
                { icon: "🎥", t: "Graphic & Multimedia", d: "Bring your brand to life with visuals, video and motion design that boost engagement." },
                { icon: "🤖", t: "AI & Automation", d: "Leverage cutting‑edge AI and automation to streamline efforts and maximize ROI." },
              ].map((c, i) => (
                <div key={i} className="bg-[#1c75c0]/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:border-[#4dd0e1] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(77,208,225,0.6)] transition">
                  <div className="text-4xl mb-3 text-[#4dd0e1]">{c.icon}</div>
                  <h4 className="text-xl font-bold mb-1">{c.t}</h4>
                  <p className="text-[#a0a0a0] text-sm">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies - hover cards */}
        <section className="bg-[#0c0c0c] text-white py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">Real Results: Marketing Case Studies</h3>
            <p className="text-[#a0a0a0] text-center max-w-3xl mx-auto mb-12">Here’s how we’ve helped businesses scale smarter with AI‑driven marketing and VSA solutions.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { tag: "U.S. Cleaning Company", title: "300% Lead Growth for Cleaning Company", img: "https://images.unsplash.com/photo-1582234032483-c28ee3e4df11?q=80&w=1080&auto=format&fit=crop" , details: "AI-based lead scoring, social automation, and email nurture tripled inbound leads and cut CPA by 42%."},
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
                <p className="text-[#6f7074] mb-4">If your question isn't here, our friendly team is just a chat away.</p>
                <Link href="/lets-talk" className="inline-block bg-[#155a90] hover:bg-[#1c75c0] text-white font-bold px-4 py-2 rounded-md">Speak to an EscaBiz Expert</Link>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {[
                  { q: "What makes EscaBiz different from hiring freelancers or agencies?", a: "We give you a dedicated virtual marketing team that works exclusively for your brand, aligned to your goals and KPIs." },
                  { q: "Can I choose which marketing roles I need?", a: "Yes. Pick a single specialist or a custom team (Marketing VSA) based on goals and budget." },
                  { q: "How soon can my marketing team start?", a: "Most teams launch within 5–7 business days after strategy alignment." },
                  { q: "How do I measure campaign success?", a: "Transparent reports showing traffic, qualified conversions, engagement, and ROI." },
                  { q: "Is Marketing VSA cost‑effective?", a: "Highly. Pay only for the expertise you need — without in‑house overheads." },
                  { q: "Can you integrate with our existing tools?", a: "Yes. We integrate into your CRM, email, social, and PM systems smoothly." },
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

        {/* Ending CTA */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#0f172a] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute -left-1/4 top-1/4 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(28,117,192,0.4), transparent 60%)" }} />
            <div className="absolute -right-1/4 bottom-0 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(77,208,225,0.35), transparent 60%)" }} />
          </div>
          <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-3">So What’s Next?</h3>
            <h4 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Build an AI‑Driven Marketing Engine That Generates Real Leads?</h4>
            <p className="text-white/90 max-w-3xl mx-auto mb-8">Stop guessing. Start growing. Let EscaBiz’s Marketing VSA help you attract more clients, generate quality leads, and scale faster — powered by AI and human expertise.</p>
            <Link href="/lets-talk" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#1c75c0] hover:bg-[#165b93] text-white font-semibold shadow-lg transition">Request Your Free AI Marketing Strategy Session</Link>
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


