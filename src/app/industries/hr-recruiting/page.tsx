'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function HrRecruiting() {
  return (
    <>
      <Navbar />
      <main className="relative pt-[60px]">
        {/* Header Banner */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
          {/* Background layers with explicit z-index to ensure visibility */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(/WhatsApp%20Image%202025-10-01%20at%208.43.28%20PM.jpeg)",
            }}
          />
          {/* Glowing light rays */}
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-40 blur-3xl animate-ray-spin" style={{background: "conic-gradient(from 90deg at 50% 50%, rgba(28,117,192,0) 0deg, rgba(28,117,192,0.55) 60deg, rgba(28,117,192,0) 120deg)"}} />
            <div className="absolute -bottom-1/2 right-1/3 w-[900px] h-[900px] opacity-30 blur-3xl animate-ray-spin-slow" style={{background: "conic-gradient(from 0deg at 50% 50%, rgba(20,200,255,0) 0deg, rgba(20,200,255,0.45) 50deg, rgba(20,200,255,0) 120deg)"}} />
            <div className="absolute top-1/2 -left-1/4 w-[1000px] h-[1000px] opacity-25 blur-[60px] animate-ray-spin-rev" style={{background: "conic-gradient(from 180deg at 50% 50%, rgba(0,168,255,0) 0deg, rgba(0,168,255,0.5) 70deg, rgba(0,168,255,0) 140deg)"}} />
          </div>
          {/* Soft color and dark overlays above rays for readability */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#1c75c0]/20 via-[#1c75c0]/15 to-[#1c75c0]/10" />
          <div className="absolute inset-0 z-[3] bg-gradient-to-r from-black/25 via-black/15 to-black/5" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl animate-fade-in-up">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Smart HR & Staffing Solutions for Every Business
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-xl">
                We provide complete HR, recruitment, and staff augmentation services designed to help you grow without the stress of hiring and managing employees.
              </p>
              <Link href="/lets-talk" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 hover:bg-[#1c75c0] transition-all duration-300 shadow-lg">
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us - left text, right grid */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold text-[#6f7074] mb-2">Why Choose Us</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#1c75c0] to-[#6f7074] bg-clip-text text-transparent mb-4">
                  The Smarter Way to Build & Manage Teams
                </h3>
                <p className="text-base md:text-lg text-[#6f7074] mb-6">
                  We empower your growth by handling the complexities of team building, so you can focus on your core business.
                </p>
                <Link href="/lets-talk" className="inline-flex items-center px-6 py-3 rounded-md bg-[#1c75c0] text-white font-semibold shadow-lg hover:bg-[#1565a0] transition">
                  Learn How We Deliver
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                </Link>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{title:'Save Time & Costs',desc:'Skip long hiring cycles & reduce overhead expenses associated with permanent staff.'},{title:'Stress‑Free Operations',desc:'We handle HR, payroll, benefits, and compliance, freeing your internal resources.'},{title:'On‑Time Delivery',desc:'Supervised teams ensure projects are delivered as promised, minimizing delays and risks.'},{title:'Scalable & Flexible',desc:'Easily adjust team size and skills on demand as your needs evolve.'}].map((c,i)=> (
                  <div key={i} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                    <div className="relative z-10 p-6 backdrop-blur-xl bg-white/50 border border-white/40 rounded-xl m-2 h-full flex flex-col">
                      <div className="text-3xl mb-3">{['⏱️','🧘','✅','📈'][i]}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h4>
                      <p className="text-[#6f7074] text-sm leading-relaxed flex-1">{c.desc}</p>
                      <span className="mt-4 inline-flex items-center text-[#1c75c0] font-semibold opacity-0 group-hover:opacity-100 transition">Get More Info<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach - content left, image right */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-3">Our Approach</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">Smarter Staffing, Simplified</h3>
                <p className="text-base md:text-lg text-[#6f7074] leading-relaxed mb-4">
                  We go beyond recruitment by managing every aspect of your workforce — from hiring and payroll to supervision and scaling — so you can focus on business growth without the burden of HR complexities.
                </p>
                <p className="text-base md:text-lg text-[#6f7074] leading-relaxed">
                  Hiring, training, payroll, and managing staff can drain your time and money. We remove that burden by acting as your complete HR department — recruiting, managing, and supervising your team while you focus on scaling your business.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image src="/Gemini_Generated_Image_awxyu7awxyu7awxy.png" alt="Our Approach" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 6 cards */}
        <section className="relative w-full bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 450 C 200 400, 400 500, 600 450 C 800 400, 1000 500, 1200 450" stroke="#1c75c0" strokeWidth="2" />
              <path d="M0 350 C 200 300, 400 400, 600 350 C 800 300, 1000 400, 1200 350" stroke="#6f7074" strokeWidth="1.5" strokeDasharray="6 6" />
            </svg>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm font-semibold text-[#1c75c0] uppercase tracking-wide">How It Works</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Our Managed Staffing Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {title:'1. Requirement Analysis',desc:'Understand your goals & needs.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/246186658492?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759570051433&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'2. Recruitment & Selection',desc:'Find and onboard the right talent.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672951512?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759401834437&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'3. Workspace & Onboarding',desc:'Provide setup and training.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672951520?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759401857899&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'4. Team Management',desc:'Oversee payroll, performance & compliance.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672955631?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759402696414&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'5. Project Delivery',desc:'Supervised teams deliver results on time.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245644233442?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759404104670&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'6. Scaling & Support',desc:'Expand or reduce staff as needed.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672956651?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759402915932&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'}
              ].map((card, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-64">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <h4 className="text-white text-lg font-bold mb-1">{card.title}</h4>
                      <p className="text-white/90 text-sm">{card.desc}</p>
                      <Link href="/lets-talk" className="mt-3 inline-flex items-center text-sm text-white/90 bg-[#1c75c0] px-3 py-1.5 rounded-md w-max opacity-0 group-hover:opacity-100 transition-opacity">Get In Touch</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Support */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1c75c0] uppercase tracking-wide">Tailored Staffing Across Multiple</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Industries We Support</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {icon:'💻',title:'IT & Software Development',desc:'Experts in full‑stack, cloud, cybersecurity, and data science to power your digital transformation.'},
                {icon:'📈',title:'Finance & Accounting',desc:'CPAs, Analysts, Bookkeepers, and Auditors for fiscal integrity and growth.'},
                {icon:'🏥',title:'Healthcare & Support',desc:'Registered Nurses, Allied Health, Medical Coders, and admin support.'},
                {icon:'🛒',title:'E‑Commerce & Retail',desc:'Digital merchandising, supply chain, operations, and store leadership.'},
                {icon:'🎨',title:'Marketing & Creative',desc:'Content, design, SEO/SEM, and brand management talent.'},
                {icon:'🛠️',title:'Industrial & Operations',desc:'Manufacturing, logistics, warehouse, QC, and production roles.'}
              ].map((item,i)=> (
                <div key={i} className="group bg-white rounded-xl border border-gray-100 p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-[#6f7074]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Image (Cube graphic) */}
        <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6">
            <div className="relative rounded-none lg:rounded-2xl overflow-hidden shadow-2xl">
              {/* Full-width and taller image, no cropping */}
              <div className="relative w-full h-[420px] md:h-[520px] lg:h-[680px] bg-white">
                <Image src="/My Work-01 (1).jpg" alt="Showcase" fill className="object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - placed after cube image and before ending CTA */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold text-[#6f7074] mb-2">Why Choose Us</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#1c75c0] to-[#6f7074] bg-clip-text text-transparent mb-4">
                  The Smarter Way to Build & Manage Teams
                </h3>
                <p className="text-base md:text-lg text-[#6f7074] mb-6">
                  We empower your growth by handling the complexities of team building, so you can focus on your core business.
                </p>
                <Link href="/lets-talk" className="inline-flex items-center px-6 py-3 rounded-md bg-[#1c75c0] text-white font-semibold shadow-lg hover:bg-[#1565a0] transition">
                  Learn How We Deliver
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                </Link>
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[{title:'Save Time & Costs',desc:'Skip long hiring cycles & reduce overhead expenses associated with permanent staff.'},{title:'Stress‑Free Operations',desc:'We handle HR, payroll, benefits, and compliance, freeing your internal resources.'},{title:'On‑Time Delivery',desc:'Supervised teams ensure projects are delivered as promised, minimizing delays and risks.'},{title:'Scalable & Flexible',desc:'Easily adjust team size and skills on demand as your needs evolve.'}].map((c,i)=> (
                  <div key={i} className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
                    <div className="relative z-10 p-6 backdrop-blur-xl bg-white/50 border border-white/40 rounded-xl m-2 h-full flex flex-col">
                      <div className="text-3xl mb-3">{['⏱️','🧘','✅','📈'][i]}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h4>
                      <p className="text-[#6f7074] text-sm leading-relaxed flex-1">{c.desc}</p>
                      <span className="mt-4 inline-flex items-center text-[#1c75c0] font-semibold opacity-0 group-hover:opacity-100 transition">Get More Info<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Glassmorphism */}
        <section className="relative w-full py-20 md:py-24 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#1c75c0]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 md:p-14 shadow-2xl text-center">
              <p className="text-sm font-semibold text-white/80 tracking-wider uppercase mb-2">So What’s Next?</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Ready to Build Your Team?</h3>
              <p className="text-white/85 max-w-3xl mx-auto mb-8">Focus on Growth—We’ll Handle the People.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lets-talk" className="px-8 py-3.5 rounded-lg bg-white text-[#1c75c0] font-semibold hover:bg-gray-100 transition-shadow shadow-lg">Get More Info</Link>
                <Link href="/about" className="px-8 py-3.5 rounded-lg border border-white/40 text-white hover:bg-white/10 transition">Discover More</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Local styles for premium light-ray animations */}
      <style jsx>{`
        @keyframes ray-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ray-spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-ray-spin { animation: ray-spin 60s linear infinite; }
        .animate-ray-spin-slow { animation: ray-spin 90s linear infinite; }
        .animate-ray-spin-rev { animation: ray-spin-rev 75s linear infinite; }
      `}</style>

      {/* Footer (reuse style from other pages) */}
      <footer className="w-full bg-black text-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-3">
                <Link href="/"><Image src="/navbar logo.png" alt="EscaBiz Logo" width={130} height={58} className="h-auto max-h-12 w-auto object-contain" /></Link>
              </div>
              <div className="mt-4 space-y-2">
                <Link href="/" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">Home</Link>
                <Link href="/about" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">About Us</Link>
                <Link href="/lets-talk" className="block text-sm text-white/80 hover:text-white transition-colors duration-300">Let's Talk</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-white/20">
                  {/* Pakistan Flag: white hoist stripe, green field, white crescent & star */}
                  <svg viewBox="0 0 60 40" className="w-full h-full">
                    {/* Green field */}
                    <rect x="12" y="0" width="48" height="40" fill="#01411C" />
                    {/* White hoist stripe */}
                    <rect x="0" y="0" width="12" height="40" fill="#FFFFFF" />
                    {/* Crescent */}
                    <circle cx="36" cy="20" r="10" fill="#FFFFFF" />
                    <circle cx="39" cy="20" r="10" fill="#01411C" />
                    {/* Star */}
                    <polygon points="44,13 45.9,18 51,18 46.8,21.2 48.5,26 44,23 39.5,26 41.2,21.2 37,18 42.1,18" fill="#FFFFFF" />
                  </svg>
                </div>
                <h4 className="text-base font-semibold text-white">Pakistan Office</h4>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">F-36 PECHS BLOCK 6,<br/>Karachi, Pakistan</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-4 flex-shrink-0">
                  <svg viewBox="0 0 900 600" className="w-full h-full"><rect width="900" height="600" fill="#012169"/><path d="M0 0 L900 600 M900 0 L0 600" stroke="#FFFFFF" strokeWidth="120"/><path d="M0 0 L900 600 M900 0 L0 600" stroke="#C8102E" strokeWidth="80"/><path d="M0 300 L900 300 M450 0 L450 600" stroke="#FFFFFF" strokeWidth="180"/><path d="M0 300 L900 300 M450 0 L450 600" stroke="#C8102E" strokeWidth="120"/></svg>
                </div>
                <h4 className="text-base font-semibold text-white">UK Office</h4>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">Unit A98 4-6 Greatorex Street,<br/>London, United Kingdom, E15NF</p>
            </div>
            <div className="flex flex-col">
              <h4 className="text-base font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex items-center space-x-3 mb-6">
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Facebook"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Instagram"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zm5.8-2.8a1 1 0 11-2 0 1 1 0 012 0z"/></svg></a>
                <a href="#" className="w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="LinkedIn"><svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6a2 2 0 11-4 0 2 2 0 014 0zM2 8h4v12H2zm7 0h4v1.7c.6-1 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V20h-4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V20H9z"/></svg></a>
              </div>
              <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700"><div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"><p className="text-sm text-white text-center">Email: <a href="mailto:info@escabiz.com" className="text-[#1c75c0] hover:text-blue-400">info@escabiz.com</a></p></div></div>
        <div className="border-t border-gray-700"><div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"><p className="text-sm text-white/80 text-center">© 2025 EscaBiz. All rights reserved.</p></div></div>
      </footer>
    </>
  );
}


