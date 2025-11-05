'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function LeadGenerationSystem() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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
              backgroundImage: 'url(/b2b%20appointment%20setup%20banner.jpg)',
            }}
          ></div>
          

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* Heading */}
              <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Find Out How EscaBiz’s Make Sales Connections Simple and Efficient
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Struggling to connect with decision-makers or get your sales team in front of qualified leads? EscaBiz’s B2B Lead Appointment Setup Services take the hassle out of cold outreach and meeting scheduling helping you build a strong, consistent sales pipeline filled with qualified opportunities.              </p>

              {/* Button with enhanced animation */}
              <div className="flex justify-center">
                <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg">
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

        {/* First Section - Content Left, Image Right */}
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                  Turning Prospects into Opportunities that Convert
                </h3>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-3">
                  B2B Lead Generation is the process of identifying and attracting potential business clients interested in your services.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed">
                  At EscaBiz, we don't just generate leads — we connect you with decision-makers who are ready to engage.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mt-3 mb-6">
                  Through targeted outreach, personalized communication, and smart data strategies, we ensure that every meeting you take has a higher chance of turning into a real business opportunity.
                </p>
                {/* CTA Button */}
                <div className="flex justify-start">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-white/50 relative overflow-hidden shadow-lg">
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
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative w-full">
                  <Image 
                    src="/marketing%20image-1.jpg" 
                    alt="B2B Lead Generation" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* We Focus On Section - 3 Cards */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white pt-0 pb-10 md:pb-14 lg:pb-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                We focus on:
              </h3>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {/* Card 1: High-Quality Leads */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Heading */}
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                    High-Quality Leads
                  </h5>
                  {/* Paragraph */}
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Leads that meticulously match your ideal client profile for higher conversion rates.
                  </p>
                </div>
              </div>

              {/* Card 2: Meaningful Connections */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Heading */}
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                    Meaningful Connections
                  </h5>
                  {/* Paragraph */}
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Engagements that are deep and relevant, directly influencing revenue growth.
                  </p>
                </div>
              </div>

              {/* Card 3: Consistent Pipeline Growth */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                {/* Icon Container */}
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  {/* Heading */}
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                    Consistent Pipeline Growth
                  </h5>
                  {/* Paragraph */}
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    A sustainable strategy built for predictable and long-term business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content Card Container */}
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Tab Navigation - Linear Slider on Card */}
              <div className="p-6 md:p-8 lg:p-10 pb-6 md:pb-8 border-b border-gray-200">
                <div 
                  className="flex overflow-x-auto justify-center -mx-4 px-4 md:mx-0 md:px-0 gap-2 md:gap-3"
                  style={{ 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  <style dangerouslySetInnerHTML={{ __html: `
                    .overflow-x-auto::-webkit-scrollbar {
                      display: none;
                    }
                  `}} />
                  {[
                    { id: 0, title: 'Recruitment & Staffing', titleParts: ['Recruitment', '& Staffing'], icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                    { id: 1, title: 'Cleaning & Maintenance', titleParts: ['Cleaning', '& Maintenance'], icon: 'M19 11H5m14 0l-2.001 2.001M5 11l2.001 2.001m-2.001-2.001V5m14 6v-6M5 5h14M12 18v3m0-3h3m-3 0h-3' },
                    { id: 2, title: 'B2B SaaS Platforms', titleParts: ['B2B SaaS', 'Platforms'], icon: 'M9 17v-4a2 2 0 012-2h2a2 2 0 012 2v4m1-12h-2m-2 0h-2M4 7h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2zM4 7v6a2 2 0 002 2h12a2 2 0 002-2V7' },
                    { id: 3, title: 'IT MSP', titleParts: ['IT MSP'], icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
                    { id: 4, title: 'Bookkeeping & Accounting', titleParts: ['Bookkeeping', '& Accounting'], icon: 'M9 7h6m0 10v-3m-6 3h6M17 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z' },
                    { id: 5, title: 'Cybersecurity', titleParts: ['Cybersecurity'], icon: 'M12 15v2m-6-6h12m-2-4v4m0 0v4m-8 0v-4m-2 4h12m0 0l-2.616-2.616A11.954 11.954 0 0012 3C8.4 3 5.14 4.19 2.616 6.384L0 9h24l-2.616-2.616A11.954 11.954 0 0012 3z' },
                    { id: 6, title: 'Design & Packaging', titleParts: ['Design', '& Packaging'], icon: 'M7 21a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2h-10zM12 7v10m-3-5h6' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`group flex-shrink-0 flex flex-col items-center justify-center text-center px-4 py-3 md:px-5 md:py-4 rounded-xl transition-all duration-300 min-w-[90px] md:min-w-[120px] border-2 ${
                        activeTab === tab.id
                          ? 'bg-[#1c75c0] text-white border-[#1c75c0] shadow-lg shadow-[#1c75c0]/30'
                          : 'bg-gray-100 text-[#6f7074] border-transparent hover:bg-[#1c75c0] hover:text-white hover:border-[#1c75c0] hover:shadow-lg hover:shadow-[#1c75c0]/30'
                      }`}
                    >
                      <div className="w-6 h-6 md:w-7 md:h-7 mb-2">
                        <svg
                          className={`w-full h-full transition-colors duration-300 ${
                            activeTab === tab.id
                              ? 'text-white'
                              : 'text-[#1c75c0] group-hover:text-white'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                        </svg>
                      </div>
                      <span className={`text-xs md:text-sm font-semibold leading-tight transition-colors duration-300 ${
                        activeTab === tab.id
                          ? 'text-white'
                          : 'text-[#6f7074] group-hover:text-white'
                      }`}>
                        {tab.titleParts.length > 1 ? (
                          <>
                            {tab.titleParts[0]}<br />{tab.titleParts[1]}
                          </>
                        ) : (
                          tab.title
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Slider - Content Left, Image Right */}
              {[
                {
                  heading: 'Recruitment & Staffing',
                  paragraphs: [
                    'EscaBiz empowers recruitment and staffing companies by generating consistent, high-quality B2B leads.',
                    'Whether you specialize in permanent placements or temporary staffing, our lead generation process connects you with decision-makers actively looking for top talent and reliable staffing partners.',
                    'Through our multi-channel approach—combining targeted email outreach, LinkedIn engagement, and personalized follow-ups—we ensure that only pre-qualified, sales-ready leads reach your team. This helps you focus on client relationships and placements, not prospecting.',
                  ],
                  link: 'http://www.escabiz.com/recruitment-staffing-success-story',
                  image: '/Recurting%20and%20staffing.jpg',
                },
                {
                  heading: 'Cleaning & Maintenance',
                  paragraphs: [
                    'EscaBiz helps cleaning and maintenance service providers secure more B2B contracts through targeted outreach.',
                    'We connect your business with property managers, facility directors, and corporate clients in need of reliable service partners.',
                    'Our strategies highlight your operational strengths, certifications, and service reliability to attract high-value clients consistently.',
                  ],
                  link: 'http://www.escabiz.com/cleaning-maintenance-success-story',
                  image: '/Cleaning%20(1).jpg',
                },
                {
                  heading: 'B2B SaaS Platforms',
                  paragraphs: [
                    'EscaBiz accelerates growth for SaaS companies by connecting them with high-value subscribers and enterprise decision-makers.',
                    'Our lead generation experts identify ideal prospects, demonstrate your platform\'s ROI, and convert interest into product demos and sales calls.',
                    'We handle everything from outreach to appointment setting, allowing your team to focus on onboarding and revenue growth.',
                  ],
                  link: 'http://www.escabiz.com/b2b-saas-platforms-success-story',
                  image: '/b2b%20sas.jpg',
                },
                {
                  heading: 'IT MSP (Managed Service Providers)',
                  paragraphs: [
                    'EscaBiz helps IT service providers and MSPs connect with decision-makers who need tech support, cybersecurity, or cloud solutions.',
                    'We position your business as a trusted partner for reliability and long-term value.',
                    'By understanding your technical offering, we craft personalized outreach that speaks the language of IT directors and procurement officers.',
                  ],
                  link: 'http://www.escabiz.com/it-msp-managed-service-providers-success-story',
                  image: '/IT%20MSP.jpg',
                },
                {
                  heading: 'Bookkeeping & Accounting',
                  paragraphs: [
                    'EscaBiz helps bookkeeping and accounting firms grow their client base by connecting them with SMBs in need of financial expertise.',
                    'We focus on lead quality—targeting decision-makers looking for trusted partners to handle their finances accurately and affordably.',
                    'Our campaigns ensure your services reach those who truly need them, improving close rates and long-term client retention.',
                  ],
                  link: 'http://www.escabiz.com/bookkeeping-accounting-success-story',
                  image: '/Accounting.jpg',
                },
                {
                  heading: 'Cybersecurity',
                  paragraphs: [
                    'EscaBiz supports cybersecurity firms by generating qualified B2B leads from businesses concerned about data safety and compliance.',
                    'We connect your team with executives seeking robust protection solutions, ensuring consistent deal flow and strong ROI.',
                    'Our targeted outreach focuses on industries with high compliance demands, like finance, healthcare, and SaaS.',
                  ],
                  link: 'http://www.escabiz.com/cybersecurity-success-story',
                  image: '/Cybersecurity.jpg',
                },
                {
                  heading: 'Design & Packaging',
                  paragraphs: [
                    'EscaBiz connects creative agencies and packaging design firms with brands seeking innovative, conversion-focused designs.',
                    'We help you attract eCommerce companies, manufacturers, and startups looking to enhance their brand identity and packaging experience.',
                    'Our approach ensures steady inquiries, helping your design team stay busy with profitable projects.',
                  ],
                  link: 'http://www.escabiz.com/design-packaging-success-story',
                  image: '/Packaging.jpg',
                },
              ].map((content, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    activeTab === index
                      ? 'opacity-100 block'
                      : 'opacity-0 hidden'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10 pt-0">
                    {/* Left Side - Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                        {content.heading}
                      </h3>
                      {content.paragraphs.map((para, pIndex) => (
                        <p
                          key={pIndex}
                          className={`text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-3 ${
                            pIndex === content.paragraphs.length - 1
                              ? 'border-l-4 border-[#1c75c0] pl-4 mt-4 text-[#6f7074]'
                              : ''
                          }`}
                        >
                          {para}
                        </p>
                      ))}
                      <a
                        href={content.link}
                        className="inline-block bg-[#1c75c0] text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg mt-6 hover:bg-[#1565a0] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-fit"
                      >
                        View Details for {content.heading}
                      </a>
                    </div>
                    {/* Right Side - Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <div className="aspect-[4/3] relative w-full">
                        <Image
                          src={content.image}
                          alt={content.heading}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Banner Image Section */}
        <section className="w-full">
          <div className="relative w-full">
            <Image
              src="/Banner-14%20(1).jpg"
              alt="B2B Lead Development Benefits"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* B2B Lead Development Benefits Section */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                FROM "HELLO" TO "DEAL" — CAPTURE CLIENTS WITH ECSABIZ'S PROACTIVE APPROACH
              </h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed max-w-3xl mx-auto font-normal mb-6">
                Build Meaningful B2B Relationships that Drive Growth
              </p>
            </div>

            {/* Cards Grid - 4 Cards in One Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-6">
              {/* Card 1: Identifying Qualified Leads */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-[0_0_30px_rgba(28,117,192,0.15)] transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300 text-center">
                  Identifying Qualified Leads
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300 text-center">
                  Stop wasting time on unqualified prospects. ECSABIZ identifies your most promising clients based on your target criteria.
                </p>
              </div>

              {/* Card 2: Time Constraints */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-[0_0_30px_rgba(28,117,192,0.15)] transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300 text-center">
                  Time Constraints
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300 text-center">
                  Building an in-house team takes months. ECSABIZ offers a ready-made, cost-effective solution with instant scalability.
                </p>
              </div>

              {/* Card 3: Inconsistent Lead Flow */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-[0_0_30px_rgba(28,117,192,0.15)] transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300 text-center">
                  Inconsistent Lead Flow
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300 text-center">
                  We establish a consistent, predictable pipeline of qualified leads. No more peaks and valleys – just steady growth.
                </p>
              </div>

              {/* Card 4: Low Conversion Rates */}
              <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-[0_0_30px_rgba(28,117,192,0.15)] transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:-translate-y-1">
                {/* Icon Container */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                
                {/* Heading */}
                <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-2 transition-colors duration-300 text-center">
                  Low Conversion Rates
                </h5>
                
                {/* Paragraph */}
                <p className="text-xs md:text-sm text-[#a9a9a9] leading-normal flex-grow font-normal transition-colors duration-300 text-center">
                  Not every lead converts — but with ECSABIZ, you get quality over quantity. Our team focuses on leads most likely to engage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Image Section 2 */}
        <section className="w-full">
          <div className="relative w-full">
            <Image
              src="/Banner-16%20(2).jpg"
              alt="B2B Lead Development"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* Banner Image Section 3 */}
        <section className="w-full">
          <div className="relative w-full">
            <Image
              src="/Banner-15%20(1).jpg"
              alt="B2B Lead Development"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </section>

        {/* Experienced Appointment Setters Section */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              {/* Left Column: Headings and Main Description */}
              <div className="flex flex-col">

              <h4 className="text-sm md:text-base font-medium text-[#1c75c0] mb-2">
                  Dedicated to Your Success
                </h4>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2">
                  Experienced Appointment Setters
                </h3>
                
                <p className="text-base md:text-lg font-semibold text-[#6f7074] mb-6">
                  Never Miss a Lead — Get Qualified Appointments on Your Calendar
                </p>
                
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-4">
                  At EscaBiz, our appointment setters are trained professionals who know how to engage potential clients, build interest, and convert conversations into scheduled meetings. We are your dedicated team, focused entirely on filling your calendar with high-value prospects.
                </p>
              </div>

              {/* Right Column: Accordion Panels */}
              <div className="flex flex-col">
                {/* Accordion Item 1: Lead Qualification */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 0 ? null : 0)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 0
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 0 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 0 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Detailed Lead Qualification Criteria
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 0 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        Only relevant and high-value prospects make it to your calendar.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2: Pre-Meeting Questions */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 1 ? null : 1)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 1
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 1 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 1 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Pre-Meeting Questions
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 1 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        We ensure each lead is ready for a productive conversation, reducing no-shows and wasted time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3: Consistent Follow-ups */}
                <div className="bg-white/80 rounded-xl border border-gray-200/50 mb-4 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 2 ? null : 2)}
                    className={`w-full flex items-center justify-between p-4 md:p-5 transition-all duration-300 ${
                      activeAccordion === 2
                        ? 'bg-gray-50 text-[#1c75c0] border-b border-gray-200'
                        : 'text-[#6f7074] hover:bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                        activeAccordion === 2 ? 'bg-[#1c75c0]/10' : 'bg-[#1c75c0]/5'
                      }`}>
                        <svg className={`w-5 h-5 ${activeAccordion === 2 ? 'text-[#1c75c0]' : 'text-[#1c75c0]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-semibold text-left">
                        Consistent Follow-ups
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#1c75c0] transition-transform duration-300 ${
                        activeAccordion === 2 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeAccordion === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-4 md:p-5 pt-0 bg-white">
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed m-0">
                        Our team ensures no lead slips through the cracks, maintaining continuous engagement until the prospect is ready.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Scalable Text */}
                <p className="text-xs md:text-sm text-[#a9a9a9] italic text-center mt-6 pt-6 border-t border-gray-200">
                  Scalable, efficient, and results-driven — our services grow as your business does.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Focus Section - Linear Slider */}
       
      </main>

      {/* FAQ Section */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column: FAQ Content */}
            <div className="flex flex-col">
              {/* Main Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                General Questions Frequently Asked Questions?
              </h3>

              {/* FAQ Accordion Items */}
              <div className="space-y-4">
                {/* FAQ Item 1 */}
                <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                  activeFaq === 0 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                }`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === 0 ? null : 0)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                  >
                    <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                      Q1: What is B2B lead appointment setup?
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === 0 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 0 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeFaq === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                        It's the process of identifying qualified leads and scheduling confirmed meetings between your sales team and potential clients.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                  activeFaq === 1 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                }`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                  >
                    <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                      Q2: Why should I outsource appointment setting to EscaBiz?
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === 1 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 1 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeFaq === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                        We specialize in B2B lead generation and appointment setup — ensuring your sales team focuses on closing, not chasing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                  activeFaq === 2 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                }`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                  >
                    <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                      Q3: Can EscaBiz work with our CRM tools?
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === 2 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 2 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeFaq === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                        Absolutely. We integrate seamlessly with your existing CRM and sales platforms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                  activeFaq === 3 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                }`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                  >
                    <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                      Q4: How do you ensure lead quality?
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === 3 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 3 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeFaq === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                        Every lead goes through a detailed qualification process based on your business criteria and goals.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                  activeFaq === 4 ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                }`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                  >
                    <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">
                      Q5: Is the service scalable?
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                        activeFaq === 4 ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === 4 ? "M20 12H4" : "M12 4v16m8-8H4"} />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      activeFaq === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">
                        Yes! You can easily scale your appointment setup support as your business and lead volume grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
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

      {/* CTA Section - Let's Build a Predictable Sales Pipeline */}
      <section className="w-full bg-white py-10 md:py-14 lg:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50/30 to-blue-50/10 rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Left Side: Content */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xs md:text-sm font-medium text-[#6f7074] uppercase tracking-wide mb-2">
                  FREE DIGITAL AUDIT
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6f7074] leading-tight mb-4">
                  Let's Build a{' '}
                  <span className="text-[#1c75c0]">Predictable Sales Pipeline</span>
                </h3>
                <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Let EscaBiz fill your sales calendar with qualified meetings and help you convert conversations into clients.
                </p>
              </div>

              {/* Right Side: Button */}
              <div className="flex-shrink-0">
                <button className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg">
                  <span className="relative z-10 flex items-center">
                    Book Your Free Consultation Today
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

