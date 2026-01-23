'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HrRecruiting() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700 pt-[70px]">
          {/* Background Image Layer - Lowest z-index */}
          <div 
            className="absolute inset-0 top-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/HR%20banner.jpg)",
            }}
          ></div>
          
          {/* Color Overlay */}
          <div 
            className="absolute inset-0 top-0 z-[1]"
            style={{
              backgroundColor: '#1b76bf',
              opacity: 0.4,
            }}
          ></div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* Heading */}
              <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }} data-aos="fade-up">
                Smart HR & Staffing Solutions for Every Business
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-tight font-normal mb-8 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }} data-aos="fade-up" data-aos-delay="100">
              We deliver HR, recruitment, and staff augmentation services that help your business grow without the stress of hiring.              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-[0_8px_24px_rgba(28,117,192,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-[0_2px_8px_rgba(28,117,192,0.2)]">
                <span className="relative z-10 flex items-center">
                  Get Started
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


        {/* Our Approach - content left, image right */}
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              <div className="flex flex-col justify-center lg:pl-4">
                <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5" data-aos="fade-right">Our Approach</p>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3" data-aos="fade-right" data-aos-delay="100">Smarter Staffing, Simplified</h3>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-3" data-aos="fade-right" data-aos-delay="200">
                  We go beyond recruitment by managing every aspect of your workforce  from hiring and payroll to supervision and scaling so you can focus on business growth without the burden of HR complexities.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-6" data-aos="fade-right" data-aos-delay="300">
                  Hiring, training, payroll, and managing staff can drain your time and money. We remove that burden by acting as your complete HR department recruiting, managing, and supervising your team while you focus on scaling your business.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-6" data-aos="fade-right" data-aos-delay="300">
                We provide end to end workforce management so you don’t have to worry about hiring, training, payroll, or team supervision. With our data-driven approach and hands-on management, we ensure your staff performs at their best while you focus on what truly matters scaling your business.
                </p>
                <Link href="/lets-talk" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#1c75c0] rounded-lg hover:bg-[#1565a0] transition-all duration-300 shadow-[0_2px_8px_rgba(28,117,192,0.2)] hover:shadow-[0_4px_12px_rgba(28,117,192,0.3)] w-fit" data-aos="fade-right" data-aos-delay="400">
                  Learn How We Deliver
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="relative flex items-center justify-center" data-aos="fade-left">
            <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: '400px' }}>
              <Image src="/Smarter%20stafing.jpg" alt="Our Approach" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 6 cards */}
        <section className="relative w-full bg-white py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5" data-aos="fade-up">How It Works</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight" data-aos="fade-up" data-aos-delay="100">Our Managed Staffing Process</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {[
                {title:'1. Requirement Analysis',desc:'Understand your goals & needs.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/246186658492?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759570051433&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'2. Recruitment & Selection',desc:'Find and onboard the right talent.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672951512?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759401834437&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'3. Workspace & Onboarding',desc:'Provide setup and training.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672951520?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759401857899&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'4. Team Management',desc:'Oversee payroll, performance & compliance.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672955631?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759402696414&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'5. Project Delivery',desc:'Supervised teams deliver results on time.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245644233442?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759404104670&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'},
                {title:'6. Scaling & Support',desc:'Expand or reduce staff as needed.',img:'https://app-na2.hubspot.com/api/filemanager/api/v3/files/thumbnail-redirect/245672956651?size=preview&portalId=243846779&errorOnPlaceholder=true&t=1759402915932&hs_static_app=file-picker-ui&hs_static_app_version=static-1.20378'}
              ].map((card, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(77,208,225,0.18)] hover:shadow-[0_15px_35px_rgba(77,208,225,0.38)] transition-all duration-300 cursor-pointer"
                  data-aos="zoom-in"
                  data-aos-delay={`${(i + 1) * 100}`}
                >
                  <div className="relative h-64">
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-[#1c75c0]/25 mix-blend-screen transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-[#0c1b2a]/50 transition-colors duration-300" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <h4 className="text-white text-lg font-semibold mb-1">{card.title}</h4>
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
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5" data-aos="fade-up">Tailored Staffing Across Multiple</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight" data-aos="fade-up" data-aos-delay="100">Industries We Support</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {[
                {icon:'IT',title:'IT & Software Development',desc:'Experts in full‑stack, cloud, cybersecurity, and data science to power your digital transformation.'},
                {icon:'Finance',title:'Finance & Accounting',desc:'CPAs, Analysts, Bookkeepers, and Auditors for fiscal integrity and growth.'},
                {icon:'Healthcare',title:'Healthcare & Support',desc:'Registered Nurses, Allied Health, Medical Coders, and admin support.'},
                {icon:'ECommerce',title:'E‑Commerce & Retail',desc:'Digital merchandising, supply chain, operations, and store leadership.'},
                {icon:'Marketing',title:'Marketing & Creative',desc:'Content, design, SEO/SEM, and brand management talent.'},
                {icon:'Industrial',title:'Industrial & Operations',desc:'Manufacturing, logistics, warehouse, QC, and production roles.'}
              ].map((item,i)=> (
                <div key={i} className="group bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_8px_rgba(28,117,192,0.08)] hover:shadow-[0_0_30px_rgba(28,117,192,0.15)] transition-all duration-300 hover:-translate-y-1 text-center" data-aos="zoom-in" data-aos-delay={`${(i + 1) * 100 + 200}`}>
                  <div className="w-12 h-12 bg-[#1c75c0]/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    {item.icon === 'IT' && (
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {item.icon === 'Finance' && (
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {item.icon === 'Healthcare' && (
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {item.icon === 'ECommerce' && (
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    )}
                    {item.icon === 'Marketing' && (
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    )}
                    {item.icon === 'Industrial' && (
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 leading-tight">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-[#a9a9a9] leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Image (Cube graphic) */}
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
            <div className="relative w-full h-[320px] md:h-[420px] lg:h-[520px] bg-white">
              <Image src="/My Work-01 (1).jpg" alt="Showcase" fill className="object-contain" />
            </div>
          </div>
        </section>

        {/* Why Choose Us - placed after cube image and before ending CTA */}
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Centered Heading and Paragraph */}
            <div className="text-center mb-8">
              <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-1.5" data-aos="fade-up">Why Choose Us</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3" data-aos="fade-up" data-aos-delay="100">
                The Smarter Way to Build & Manage Teams
              </h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] mb-4 leading-tight max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                We empower your growth by handling the complexities of team building, so you can focus on your core business.
              </p>
            </div>

            {/* Cards in a Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[{title:'Save Time & Costs',desc:'Skip long hiring cycles & reduce overhead expenses associated with permanent staff.'},{title:'Stress Free Operations',desc:'We handle HR, payroll, benefits, and compliance, freeing your internal resources.'},{title:'On Time Delivery',desc:'Supervised teams ensure projects are delivered as promised, minimizing delays and risks.'},{title:'Scalable & Flexible',desc:'Easily adjust team size and skills on demand as your needs evolve.'}].map((c,i)=> (
                <div key={i} className="group relative rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(28,117,192,0.08)] hover:shadow-[0_0_30px_rgba(28,117,192,0.15)] transition-all duration-300 bg-white border border-gray-100 hover:bg-[#1c75c0]" data-aos="zoom-in" data-aos-delay={`${(i + 1) * 100 + 300}`}>
                  <div className="relative z-10 p-4 h-full flex flex-col">
                    <div className="w-10 h-10 bg-[#1c75c0]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300">
                      {i === 0 && (
                        <svg className="w-5 h-5 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg className="w-5 h-5 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg className="w-5 h-5 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {i === 3 && (
                        <svg className="w-5 h-5 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-[#6f7074] group-hover:text-white mb-2 leading-tight transition-colors duration-300">{c.title}</h4>
                    <p className="text-xs text-[#a9a9a9] group-hover:text-white leading-tight flex-1 transition-colors duration-300">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Centered Button */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="700">
              <Link href="/lets-talk" className="inline-flex items-center px-6 py-3 rounded-md bg-[#1c75c0] text-white font-semibold shadow-[0_2px_8px_rgba(28,117,192,0.2)] hover:bg-[#1565a0] hover:shadow-[0_4px_12px_rgba(28,117,192,0.3)] transition">
                Learn How We Deliver
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(28,117,192,0.1)] p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                {/* Left Side: Content */}
                <div className="flex-1 text-left">
                  {/* <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2">
                    SO WHAT'S NEXT?
                  </p> */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6f7074] leading-tight mb-4" data-aos="fade-up">
                    Ready to Build Your Team?
                  </h3>
                  <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed max-w-2xl" data-aos="fade-up" data-aos-delay="100">
                    Focus on Growth We'll Handle the People.
                  </p>
                </div>

                {/* Right Side: Buttons */}
                <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
                  <Link href="/lets-talk" className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-[0_8px_24px_rgba(28,117,192,0.3)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-[0_2px_8px_rgba(28,117,192,0.2)]">
                    <span className="relative z-10">
                      Get More Info
                    </span>
                    <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                  {/* <Link href="/about" className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-[#6f7074] border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg">
                    Discover More
                  </Link> */}
                </div>
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
                Escabiz helps businesses grow smarter through data-driven B2B lead generation, targeted marketing, and automation solutions.
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

              {/* US Address */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image
                    src="/usa flag.png"
                    alt="US Flag"
                    width={24}
                    height={16}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  3577 N Belt Line RD APT 169<br />Irving, TX 75062
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
                <a href="https://www.facebook.com/profile.php?id=61581532281727" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/escabiz/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/escabizz/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:info@escabiz.com" 
                  onClick={(e) => {
                    if (window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      e.preventDefault();
                      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@escabiz.com', '_blank');
                    }
                  }}
                  className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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


