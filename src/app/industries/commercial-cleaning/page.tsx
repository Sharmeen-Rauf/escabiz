"use client";

import Image from "next/image";
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
    <main className="w-full overflow-hidden">
      {/* Hero */}
      <section className="relative w-full">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url(/towfiqu-barbhuiya--9gPKrsbGmc-unsplash.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* light blue overlay */}
        <div className="absolute inset-0 bg-[#1c75c0]/20 -z-10" />
        {/* dark gradient bottom for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 -z-10" />
        {/* glowing rays */}
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute -left-1/3 top-1/4 w-[800px] h-[800px] rounded-full blur-3xl" style={{
            background:
              "conic-gradient(from 0deg, rgba(28,117,192,0.35), rgba(111,112,116,0.15), transparent 40%)",
            animation: "spin 18s linear infinite",
          }} />
          <div className="absolute -right-1/3 bottom-0 w-[700px] h-[700px] rounded-full blur-3xl" style={{
            background:
              "conic-gradient(from 90deg, rgba(28,117,192,0.25), rgba(111,112,116,0.1), transparent 40%)",
            animation: "spin 24s linear infinite reverse",
          }} />
        </div>
        {/* floating dots - client only to avoid SSR mismatch */}
        {isMounted.current && (
          <div className="pointer-events-none absolute inset-0 -z-10">
            {dots.map((i) => (
              <span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"
                style={{
                  left: `${(i * 97) % 100}%`,
                  top: `${(i * 53) % 100}%`,
                  animationDelay: `${(i % 10) * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl text-white">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4">
              EscaBiz Struggling to Win More Clients for Your Restoration or Cleaning Business?
            </h4>
            <p className="text-base md:text-lg text-white/95 mb-8">
              We deliver guaranteed clients, not just leads. We help restoration, cleaning, and maintenance providers secure more clients with AI-powered targeting, guaranteed sales, and fully managed outsourced sales teams.
            </p>
            <Link
              href="/lets-talk"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border-2 border-white/70 text-white font-semibold hover:bg-white/10 transition"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach - content left, image right */}
      <section className="w-full bg-white py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2">Our Approach</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Driving Real Growth for Service Providers</h3>
              <p className="text-[#6f7074] text-base md:text-lg leading-relaxed">
                We don’t just connect you with prospects—we help you secure paying clients. With AI-driven targeting, a dedicated sales team, and 24/7 outreach, we make sure you never miss an opportunity. We deliver targeted, high-intent leads—homeowners, businesses, and decision-makers actively seeking your services.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image src="/Gemini_Generated_Image_wr5fk7wr5fk7wr5f.png" alt="Approach" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase images */}
      <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden shadow-2xl rounded-none lg:rounded-2xl">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[680px] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/WhatsApp Image 2025-10-07 at 12.43.24 AM.jpeg" alt="showcase-1" className="absolute inset-0 w-full h-full object-contain bg-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
          <div className="relative overflow-hidden shadow-xl rounded-none lg:rounded-2xl">
            <div className="relative w-full h-[380px] md:h-[480px] lg:h-[620px] bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/WhatsApp Image 2025-10-07 at 12.43.25 AM (1).jpeg" alt="showcase-2" className="absolute inset-0 w-full h-full object-contain bg-white" />
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
  );
}


