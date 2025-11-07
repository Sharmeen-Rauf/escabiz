'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function LinkedInOutreachAutomation() {
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
              backgroundImage: 'url(/linkedin%20automation%20banner.jpg)',
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
              <h5 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Empower Your Business with Smart LinkedIn Lead Generation
              </h5>

              {/* Paragraph */}
              <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
              Transform your LinkedIn into a lead-generating machine! ECSABIZ’s LinkedIn Automation Services help your business connect with decision-makers, build meaningful relationships, and convert prospects into qualified leads all while saving you time and effort.              </p>

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

        {/* Strategy Overview Section */}
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                  Streamline Your LinkedIn Lead Generation, the Smart Way
                </h3>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-3">
                  LinkedIn automation is the process of using intelligent tools and strategies to simplify repetitive tasks like finding prospects, sending connection requests, and nurturing relationships — without losing the personal touch.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-3">
                  At ECSABIZ, we go beyond basic automation. We design a fully managed LinkedIn strategy focused on real human engagement, personalized outreach, and ROI-driven results.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-6">
                  Our system identifies, connects, and nurtures ideal clients on autopilot so you can focus on what you do best: closing deals.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="/lets-talk"
                    className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-white/50 relative overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative w-full">
                  <Image
                    src="/linkedin%20automation%20banner.jpg"
                    alt="LinkedIn Automation Workflow"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LinkedIn Automation Benefits */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white pt-0 pb-10 md:pb-14 lg:pb-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-semibold text-[#6f7074] leading-tight">
                With ECSABIZ LinkedIn Automation, you can:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-4 md:p-5 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/12 to-[#1c75c0]/6 rounded-lg p-3 w-11 h-11 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a6 6 0 0011.31 2H15a3 3 0 003-3v-2h-3.69A6 6 0 003 9v6z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-1.5 transition-colors duration-300">
                    Generate a steady flow of high-quality B2B leads
                  </h5>
                  <p className="text-xs sm:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Keep your pipeline full with prospects that match your buyer profile and show real intent.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-4 md:p-5 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/12 to-[#1c75c0]/6 rounded-lg p-3 w-11 h-11 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 110 8h-1l-2 3-2-3H9a4 4 0 110-8h7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-1.5 transition-colors duration-300">
                    Build genuine connections with decision-makers
                  </h5>
                  <p className="text-xs sm:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Start meaningful conversations that lead to stronger relationships and faster responses.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-4 md:p-5 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/12 to-[#1c75c0]/6 rounded-lg p-3 w-11 h-11 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2h1a2 2 0 012 2v3h-3l-2 3-2-3H5V9a2 2 0 012-2h1z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-1.5 transition-colors duration-300">
                    Save time with automated yet personalized outreach
                  </h5>
                  <p className="text-xs sm:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Automate repetitive workflows while keeping messaging relevant, timely, and human.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-4 md:p-5 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gradient-to-br from-[#1c75c0]/12 to-[#1c75c0]/6 rounded-lg p-3 w-11 h-11 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7m-7 11V7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-1.5 transition-colors duration-300">
                    Increase conversions with optimized profiles and messaging
                  </h5>
                  <p className="text-xs sm:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                    Enhance your LinkedIn presence with high-impact profiles, compelling copy, and data-backed cadences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Image Section */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image
              src="/Banner-18 (1).jpg"
              alt="LinkedIn Automation Banner"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </section>

        {/* Banner Image Section */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image
              src="/Banner-17 (1).jpg"
              alt="LinkedIn Outreach Strategy"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Banner Image Section */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image
              src="/Banner-18.jpg"
              alt="LinkedIn Automation Results"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* LinkedIn Automation Playbook - Flip Cards */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2 text-center">
              build your linkedin revenue engine
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-12 text-center">
              from first touch to signed deal — every step optimized
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'identify',
                  short: 'Define your target audience with precision.',
                  long: 'ECSABIZ helps you identify decision-makers, business owners, and professionals who perfectly match your ideal client profile on LinkedIn. We analyse industries, job titles, and company data so every outreach lands in the right inbox.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.2-5.2M10.5 7a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM18 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
                  ),
                  frontIcon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6a4 4 0 100 8 4 4 0 000-8zm8 0h2m-2 4h2m-2 4h2m-2 4h2M4 18h8M4 14h6M4 10h6" />
                  ),
                },
                {
                  title: 'connect',
                  short: 'Expand your network with purpose.',
                  long: 'We use smart LinkedIn automation to send personalised connection requests and introduction messages to verified prospects, building a warm audience that is ready to engage with your offer.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8a4 4 0 118 0 4 4 0 01-8 0zm9 8a4 4 0 00-8 0v1h8v-1zm3-9a3 3 0 110 6m0 0a3 3 0 00-2.995 2.824L16 16v1h6v-1a3 3 0 00-3-3z" />
                  ),
                  frontIcon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  ),
                },
                {
                  title: 'engage',
                  short: 'Start meaningful conversations, not cold pitches.',
                  long: 'Our outreach specialists craft custom LinkedIn message sequences that educate, add value, and nurture interest. We keep your tone authentic so every reply feels like a genuine business conversation.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 1.657-2.686 3-6 3s-6-1.343-6-3m12 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v7m18 0c0 1.657-2.686 3-6 3a10.94 10.94 0 01-4-.712M3 12c0 1.657 2.686 3 6 3 .7 0 1.372-.057 2-.165" />
                  ),
                  frontIcon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 1.657-2.686 3-6 3s-6-1.343-6-3V7a2 2 0 012-2h8a2 2 0 012 2v5zM5 12h.01M9 12h.01M13 12h.01M3 16h10M3 20h6" />
                  ),
                },
                {
                  title: 'convert',
                  short: 'Move from conversation to conversion effortlessly.',
                  long: 'ECSABIZ optimises your LinkedIn presence, message flow, and follow-ups so connections become qualified leads, booked meetings, and new clients. We handle the data, you focus on closing.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m0 0l3-3m-3 3l-3-3m-6 6h18M6 4h12" />
                  ),
                  frontIcon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-3.5 1.5L9 15l-3-2.5 3.5-.5L11 9l1.5 3 3.5.5L13 15l1.5 3.5L11 17zm5-5.5V5m0 0L16 7m0-2l-2 2" />
                  ),
                },
              ].map(({ title, short, long, icon, frontIcon }, idx) => (
                <div key={title} className="group h-[260px] [perspective:1000px]">
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-sm border border-[#1c75c0] p-5 lg:p-6 flex flex-col items-center justify-center text-center">
                      <div className="mb-4">
                        <div className="bg-white/20 rounded-lg p-3 w-14 h-14 flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {frontIcon}
                          </svg>
                        </div>
                      </div>
                      <h5 className="text-lg md:text-xl font-semibold text-white mb-2 capitalize">{title}</h5>
                      <p className="text-xs sm:text-xs md:text-sm text-white/85 leading-tight font-normal">{short}</p>
                    </div>
                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-5 lg:p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)]">
                      <div className="mb-4">
                        <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                          <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {icon}
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">{long}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Automation Impact - Vertical Cards */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
              from connection request to contract signed
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-12 text-center max-w-3xl mx-auto">
              grow your business with ecsabiz’s smart linkedin automation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                {
                  title: 'reaching the right prospects',
                  description:
                    'no more random outreach. we target verified b2b professionals who are genuinely interested in your products or services, so every message hits the mark.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 11l9-9 9 9M4 10v10a2 2 0 002 2h3m6 0h3a2 2 0 002-2V10" />
                  ),
                },
                {
                  title: 'saving valuable time',
                  description:
                    'forget manual prospecting. ecsabiz automates the repetitive parts of linkedin outreach so your team can focus on relationship building and high-value conversations.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ),
                },
                {
                  title: 'consistent lead flow',
                  description:
                    'say goodbye to unpredictable results. our system delivers a steady stream of high-quality leads every month for reliable, measurable growth.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17l4-4 4 4 8-8" />
                  ),
                },
                {
                  title: 'boosting conversions',
                  description:
                    'quality beats quantity. ecsabiz nurtures every lead with personalised engagement, optimised follow-up sequences, and insights that drive high roi.',
                  icon: (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7m-7 11V7" />
                  ),
                },
              ].map(({ title, description, icon }) => (
                <div
                  key={title}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-7 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center min-h-[320px] flex flex-col justify-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-[#1c75c0]/12 to-[#1c75c0]/6 rounded-xl p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icon}
                      </svg>
                    </div>
                  </div>
                  <h5 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                    {title}
                  </h5>
                  <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LinkedIn Funnel Section */}
        <section className="w-full bg-gradient-to-br from-white via-blue-50/20 to-white py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                  targeting · automation · scaling · lead generation funnel
                </h3>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed max-w-xl">
                  is linkedin automation right for your business? if you want to scale fast, absolutely. ask yourself these questions:
                </p>
                <div className="space-y-4">
                  {[ 'do you struggle to find enough qualified b2b leads?', 'is your sales team spending more time on outreach than closing deals?', 'do you want a predictable lead generation system that works daily?' ].map((question) => (
                    <div key={question} className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1c75c0]/10 text-[#1c75c0] font-semibold text-lg">?</div>
                      <p className="flex-1 text-xs sm:text-xs md:text-sm text-[#6f7074] leading-relaxed">
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed max-w-xl">
                  if you answered “yes,” linkedin automation is your solution — and ecsabiz is your partner in making it work.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#1c75c0]/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1565a0]/10 rounded-full blur-2xl animate-ping"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-blue-100 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1c75c0]/15 flex items-center justify-center text-[#1c75c0]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v5m0 0l3-3m-3 3L9 5M7 13h10m-6 4h2m-7 3h12a2 2 0 002-2V9a2 2 0 00-2-2H8l-4 4v9a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#6f7074]">linkedin funnel blueprint</p>
                      <p className="text-xs text-[#a9a9a9]">automated, human, measurable</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {[
                      { label: 'targeting', detail: 'laser-focused filters lock onto the right industries, roles, and company sizes.' },
                      { label: 'automation', detail: 'intelligent cadences handle invites, follow-ups, and reminders without missing a beat.' },
                      { label: 'scaling', detail: 'dashboards and analytics reveal what to replicate, what to pause, and where to invest more.' },
                      { label: 'lead generation funnel', detail: 'from profile view to booked meeting, every touchpoint is mapped to conversion.' },
                    ].map(({ label, detail }, index) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="mt-1 w-2 h-16 rounded-full bg-gradient-to-b from-[#1c75c0] to-[#1565a0] animate-[pulse_2s_ease-in-out_infinite]"></div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1c75c0] mb-1">
                            {index + 1}. {label}
                          </h4>
                          <p className="text-xs sm:text-xs md:text-sm text-[#6f7074] leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-[#1c75c0]/5 rounded-xl border border-[#1c75c0]/20 text-xs sm:text-sm text-[#6f7074] leading-relaxed">
                    our animated funnel keeps prospects moving smoothly through each stage while your team steps in exactly when human touch matters most.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

