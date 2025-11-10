'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Users,
  Briefcase,
  Sparkles,
  BarChart3,
  Eye,
  Layers,
  Droplet,
  Building2,
  MonitorCheck,
  Factory,
} from 'lucide-react';

const introCards = [
  {
    title: 'Handling Outreach & Follow-Ups',
    description: 'We manage the entire communication cycle, ensuring diligent contact with every prospect.',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Deal Management & Revenue',
    description: 'Ensuring every qualified lead turns into real revenue while you focus on running your business.',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Your In-House Closers',
    description: 'Our expert virtual sales teams act as your in-house closers.',
    iconPath: 'M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 13c2.21 0 4-1.79 4-4S10.21 5 8 5 4 6.79 4 9s1.79 4 4 4zm8 2a5 5 0 015 5v1H11v-1a5 5 0 015-5zm-8 0a5 5 0 015 5v1H3v-1a5 5 0 015-5z',
  },
];

const aiCards = [
  {
    title: 'Identify the right leads',
    description: 'Identify and prioritize the right leads using data intelligence.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Automate outreach',
    description: 'Automate repetitive outreach and follow-ups.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Improve conversations',
    description: 'Analyze conversation patterns for better sales performance.',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1z',
  },
  {
    title: 'Predict success',
    description: 'Predict conversion probability and deal success.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
];

const caseStudies = [
  {
    tag: 'SaaS Company',
    title: '250% Increase in Booked Meetings',
    subtitle: 'Challenge: Inconsistent outreach',
    highlight: 'Solution & Result',
    solution:
      'Solution: EscaBiz deployed an SDR team supported by AI-driven lead scoring and automated LinkedIn outreach.',
    result:
      'Result: 250% increase in meetings booked and 40% faster sales cycle in just 45 days.',
    image: 'https://images.unsplash.com/photo-1630673489068-d329fa4e2767?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2FhUyUyMENvbXBhbnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    tag: 'B2B Logistics Firm',
    title: 'AI-Powered Lead Generation',
    subtitle: 'Challenge: Poor-quality inbound leads',
    highlight: 'Solution & Result',
    solution:
      'Solution: EscaBiz implemented AI-based prospect filtering and a dedicated Lead Generation Specialist team.',
    result: 'Result: 3X more qualified B2B leads and a 70% improvement in lead-to-opportunity ratio.',
    image: 'https://images.unsplash.com/photo-1761311985262-d0a342290b56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFJLVBvd2VyZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
  {
    tag: 'Financial Consulting Agency',
    title: 'Virtual Sales Team Success',
    subtitle: 'Challenge: Limited call capacity',
    highlight: 'Solution & Result',
    solution:
      'Solution: Our Virtual Cold Calling Assistants and SDRs handled outreach, nurturing, and appointment scheduling.',
    result: 'Result: Reduced response time by 60% and increased closed deals by 35% within 3 months.',
    image: 'https://images.unsplash.com/photo-1637504005598-a2c6da7f0e92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUktVmlydHVhbCUyMFNhbGVzJTIwVGVhbSUyMFN1Y2Nlc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  },
];

const trustCards = [
  {
    title: 'Precision Targeting',
    description: 'Identify and engage your ideal customers with AI-driven accuracy.',
    iconPath: 'M3 9a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7a4 4 0 01-4-4V9z',
  },
  {
    title: 'Scalable Revenue',
    description: 'Build a consistent and expandable sales pipeline for steady growth.',
    iconPath: 'M9 17v-2H5v2a2 2 0 002 2h2a2 2 0 002-2zM9 9v2H5V9a2 2 0 012-2h2a2 2 0 012 2zM15 11h4v2h-4zm0 6h4v2h-4zm0-12h4v2h-4z',
  },
  {
    title: 'Effortless Integration',
    description: 'Seamlessly integrate our expert SDRs into your existing workflow.',
    iconPath: 'M9 12l2 2 4-4M7 12V5a2 2 0 012-2h6a2 2 0 012 2v7',
  },
  {
    title: 'Optimized Investment',
    description: 'Maximize ROI with a cost-effective, performance-based approach.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 12a4 4 0 002.599-1',
  },
  {
    title: 'Unrivalled Transparency',
    description: 'Gain full visibility into every stage of your sales process.',
    iconPath: 'M4 4v16h16V4H4zm4 4h8v8H8V8z',
  },
  {
    title: 'Intelligent Automation',
    description: 'Leverage cutting-edge AI for smarter outreach and lead nurturing.',
    iconPath: 'M12 2a10 10 0 110 20 10 10 0 010-20zm0 6a2 2 0 00-2 2v4l2 2 2-2v-4a2 2 0 00-2-2z',
  },
];

const chooseUsPoints = [
  {
    title: 'From Lead to Client',
    description: 'We don’t stop at leads; we deliver conversions.',
    icon: Sparkles,
  },
  {
    title: 'No Sales Team Needed',
    description: 'We act as your complete virtual sales department.',
    icon: Users,
  },
  {
    title: 'Work Under Your Brand',
    description: 'Every outreach feels personal and authentic.',
    icon: Briefcase,
  },
  {
    title: 'AI-Powered Prospecting',
    description: 'We identify and engage high-intent leads.',
    icon: Target,
  },
  {
    title: 'Performance Tracking',
    description: 'Transparent dashboards showing leads, calls, and conversions.',
    icon: BarChart3,
  },
  {
    title: 'Full Transparency',
    description: 'Real-time reports on outreach and conversions.',
    icon: Eye,
  },
  {
    title: 'Scalable & Flexible',
    description: 'Need 2 reps or 20? We scale with your growth.',
    icon: Layers,
  },
];

const linearSliderItems = [
  { title: 'Water & Flood Restoration', icon: Droplet },
  { title: 'Cleaning & Janitorial Services', icon: Sparkles },
  { title: 'Property Maintenance', icon: Building2 },
  { title: 'HR & Recruiting Firms', icon: Users },
  { title: 'IT & Software Services', icon: MonitorCheck },
  { title: 'Industrial & Facility Management', icon: Factory },
];

const processSteps = [
  {
    title: 'Consultation & Strategy',
    description: 'Understand your market, goals, and pain points.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 12a4 4 0 002.599-1',
  },
  {
    title: 'Lead Flow Integration',
    description: 'Connect your CRM or campaigns to our system.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Sales Outreach & Follow-Up',
    description: 'Engage, nurture, and qualify prospects.',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Closing & Reporting',
    description: 'Turn leads into paying clients with full visibility.',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Continuous Optimization',
    description: 'Improve scripts, timing, and conversion rates.',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
];

const faqItems = [
  {
    question: 'Q1: What’s the difference between Lead Generation and Sales VSA?',
    answer:
      'Lead Generation finds prospects — Sales VSA converts them into paying clients. Together, they create a full growth cycle.',
  },
  {
    question: 'Q2: Can I use my own lead list?',
    answer: 'Absolutely. Our team can work with your leads or generate new ones for you.',
  },
  {
    question: 'Q3: Will your team represent my company professionally?',
    answer: 'Yes. Every call, email, and LinkedIn message is sent under your brand name.',
  },
  {
    question: 'Q4: How soon can I see results?',
    answer: 'You’ll typically start seeing conversions and appointments within 30–45 days.',
  },
  {
    question: 'Q5: Do I need to manage your team?',
    answer: 'Not at all. We handle supervision, training, and reporting — you just track results.',
  },
  {
    question: 'Q6: What kind of reports will I get?',
    answer:
      'You’ll receive weekly and monthly performance reports with metrics like calls made, responses, appointments booked, and conversions closed.',
  },
];

export default function SalesVSAPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/Banner-17 (1).jpg)' }}
          ></div>
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: '#1b76bf', opacity: 0.45 }}></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              <h1
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
              >
                EscaBiz Generating Leads Is Easy. Closing Them Is Where We Win.
              </h1>
              <p
                className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
              >
                We don’t just deliver leads. We help you convert them into paying clients through our Sales VSA.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/lets-talk"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg"
                >
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

        {/* Intro Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                We Don’t Just Find Leads. We Build Predictable Revenue Systems.
              </h2>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3">
                At EscaBiz, we revolutionize the way businesses sell. By combining AI-driven prospecting, smart automation, and expert virtual sales teams, we help you generate qualified leads, nurture prospects, and close more deals — faster than ever before.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                Our Sales VSA gives you a complete virtual sales department — trained, data-backed, and focused on one goal: turning prospects into paying clients.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] relative w-full">
                <Image src="/marketing%20image-1.jpg" alt="Virtual sales collaboration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-white via-gray-50/30 to-white pt-0 pb-10 md:pb-14 lg:pb-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                We handle the complete sales journey:
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {introCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex flex-col border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300 text-center">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300 text-center">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Images */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image src="/Banner-Sales-3 (1).jpg" alt="Sales success" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image src="/Banner-Sales-2 (5).jpg" alt="Sales engagement" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image src="/Banner-Sales-1 (1).jpg" alt="Sales collaboration" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        {/* AI Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="flex flex-col">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Using AI to Find and Close High-Intent Leads
              </h2>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3">
                Modern sales requires more than effort — it requires intelligence. Our AI consultants guide you through the process of integrating smart automation and predictive analytics into your sales systems.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3">
                Reduce manual errors and response time by over 60%. We ensure your business isn’t just working harder — it’s selling smarter.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-2">
                60%+ reduction in manual errors ensures your team focuses on conversations that matter.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-2">
                2x faster lead qualification keeps your pipeline full of high-intent prospects.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-2">
                Higher close rates through real-time decision support empower every virtual sales specialist.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">
                Personalized sales strategies powered by predictive analytics deliver meaningful, repeatable wins.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {aiCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`rounded-2xl px-6 sm:px-7 py-6 sm:py-7 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1 text-white ${
                    index % 2 === 0 ? 'bg-[#1c75c0]' : 'bg-[#1565a0]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                    </svg>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold leading-tight mb-2">{card.title}</h3>
                  <p className="text-xs md:text-sm text-white/85 leading-relaxed font-normal">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
              Real Results: EscaBiz Sales Case Studies
            </h2>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal text-center max-w-3xl mx-auto mb-10">
              Here’s how our Sales VSA has transformed businesses into revenue-generating machines:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.title}
                  className="group relative rounded-2xl overflow-hidden border border-white/15 shadow-xl hover:shadow-[0_0_35px_rgba(28,117,192,0.35)] transition-all duration-300"
                >
                  <Image src={study.image} alt={study.title} fill className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-[360px]">
                    <span className="inline-block bg-[#1c75c0] text-white text-xs px-3 py-1 rounded-full mb-3 w-max">
                      {study.tag}
                    </span>
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <h3 className="text-lg font-semibold text-white mb-1">{study.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{study.subtitle}</p>
                    </div>
                    <div className="text-white/80 text-sm opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <h4 className="text-sm font-semibold text-white mb-2">{study.highlight}</h4>
                      <p className="mb-2">{study.solution}</p>
                      <p>{study.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
              Why Businesses Trust EscaBiz for AI-Powered Sales Growth
            </h2>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-8 text-center max-w-4xl mx-auto">
              Experience innovation that drives real results for your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {trustCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">{card.title}</h3>
                  <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose EscaBiz Sales VSA */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-10 text-center">
              Why Businesses Choose EscaBiz Sales VSA
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1762723813131-5b3c7c5f45f7?auto=format&fit=crop&q=60&w=900"
                  alt="Sales collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-5 lg:pr-4">
                {chooseUsPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className={`flex items-start gap-4 pb-5 ${index !== chooseUsPoints.length - 1 ? 'border-b border-[#1c75c0]/15' : ''}`}>
                      <div className="w-10 h-10 rounded-xl bg-[#1c75c0]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1c75c0]" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-sm md:text-base font-semibold text-[#6f7074]">{point.title}</h3>
                        <div className="h-[2px] w-10 bg-[#1c75c0]/30" />
                        <p className="text-xs sm:text-sm text-[#a9a9a9] leading-relaxed font-normal">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Linear Slider */}
        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center">
              Perfect for Businesses That Want Predictable Sales Growth
            </h2>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal text-center max-w-3xl mx-auto mb-8">
              We specialize in industries where quick response and trust drive success:
            </p>
            <div className="rounded-2xl p-4 sm:p-5 lg:p-6 overflow-hidden">
              <div className="flex gap-3 sm:gap-4 animate-slide-left" style={{ animationDuration: '18s' }}>
                {linearSliderItems.concat(linearSliderItems).map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex-shrink-0 min-w-[180px] sm:min-w-[200px] bg-[#1c75c0] text-white rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <div className="aspect-[4/3] relative w-full">
                <Image src="https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=900&q=80" alt="Sales process" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                Our Proven 5-Step Process
              </h2>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.title} className="bg-white rounded-xl border border-[#1c75c0]/15 p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1c75c0]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-semibold text-[#6f7074] mb-1">{step.title}</h3>
                      <p className="text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                  FAQs — We’re Here to Answer All Your Questions
                </h3>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={faq.question} className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'}`}>
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                      >
                        <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">{faq.question}</span>
                        <svg className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === index ? 'M20 12H4' : 'M12 4v16m8-8H4'} />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-400 ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 md:px-5 pb-4 md:pb-5">
                          <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md mr-4 lg:mr-6">
                  <Image src="/Group%201244832130.png" alt="FAQ visual" width={450} height={450} className="w-full h-auto object-contain" priority />
                  <div className="absolute top-4 right-4 bg-[#1c75c0] rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-white text-2xl md:text-3xl font-bold leading-tight">24/7</p>
                    <p className="text-white text-sm md:text-base font-medium leading-tight">Sales Coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50/30 to-blue-50/10 rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6f7074] leading-tight mb-4">
                    Need B2B Targeted Marketing Consultation Today?
                  </h3>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Elevate your outreach with hyper-targeted B2B marketing strategies. Schedule your free consultation and start turning precision into profit.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full max-w-md">
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="flex-1 px-4 py-3 text-sm text-[#6f7074] border border-[#6f7074]/30 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                    />
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg"
                    >
                      <span className="relative z-10 flex items-center">
                        Submit
                        <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div className="flex flex-col">
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
              <p className="text-sm text-[#6f7074] leading-relaxed mb-6">
                ECSABIZ helps businesses grow smarter through data-driven B2B lead generation, targeted marketing, and automation solutions.
              </p>
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image src="/images (1).png" alt="UK Flag" width={24} height={16} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  A98 Greatorex Street, London,<br />United Kingdom, E15NF
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image src="/flag.png" alt="Pakistan Flag" width={24} height={16} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  F-36 PECHS BLOCK 6,<br />Karachi, Pakistan
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#6f7074] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-[#6f7074] leading-relaxed">info@escabiz.com</p>
              </div>
            </div>

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

            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-[#6f7074] mb-4">What We Do</h5>
              <div className="space-y-0">
                <Link href="/b2b-lead-appointment-setup" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Appointment Setup
                </Link>
                <Link href="/linkedin-automation-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  LinkedIn Automation
                </Link>
                <Link href="/virtual-staff-augmentation/marketing-vsa" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Marketing VSA
                </Link>
                <Link href="/virtual-staff-augmentation/sales-vsa" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Sales VSA
                </Link>
                <Link href="/virtual-staff-augmentation/recruiting-vsa" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Recruiting VSA
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-[#6f7074] mb-4">Connect</h5>
              <div className="flex items-center space-x-3 mb-6">
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.325 12 18.325s6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-[#6f7074] leading-loose mb-4">
                Keep up to date with latest news and updates about EscaBiz, simply subscribe with your email address.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2.5 text-sm text-[#6f7074] border border-[#6f7074]/30 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duração-300 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#1c75c0] text-white px-4 py-2.5 rounded-lg hover:bg-[#1565a0] transition-colors duração-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 rotate-[75deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-[#6f7074]/20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-[#6f7074] text-center">© 2025 EscaBiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

