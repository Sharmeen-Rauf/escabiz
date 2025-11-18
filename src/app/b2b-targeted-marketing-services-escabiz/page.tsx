'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Clock, MessageSquare, TrendingUp, Cloud, Users, Leaf } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const flipHighlights = [
  {
    title: 'Behavioral Intelligence',
    frontText: 'We combine behavioral data, buying signals, and firmographics to deliver marketing precision.',
    backText:
      'Understand how prospects research, compare, and decide. We track content engagement, trigger points, and channel preferences to tailor every touchpoint.',
    iconPath: 'M3 4a1 1 0 011-1h4l2 2h8a1 1 0 011 1v2H3V4zm0 4h18v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 4h8',
  },
  {
    title: 'High-Intent Focus',
    frontText: 'Our strategy focuses on connecting with prospects ready to engage and convert.',
    backText:
      'We score leads using first party and third party intent signals so campaigns reach decision makers who are actively evaluating solutions like yours.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Firmographic Alignment',
    frontText: 'We leverage firmographics to ensure your outreach aligns with the right company profile.',
    backText:
      'Every list is enriched with company size, industry, revenue bands, and tech stack so your messaging resonates with the organizational reality of each target.',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1z',
  },
];

const marketingBenefits = [
  {
    title: 'Eliminate Wasted Spend',
    description: 'Stop paying for impressions that never convert. We direct every campaign toward the audiences most likely to buy.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Deep Personalization',
    description: 'Blend data, messaging, and timing so each interaction feels tailored, driving stronger engagement across channels.',
    iconPath: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1z',
  },
  {
    title: 'Faster Pipeline Velocity',
    description: 'Fill your funnel with ready to convert leads so sales focuses on closing deals instead of chasing cold prospects.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
];

const differentiatorCards = [
  {
    title: 'Data-Driven Strategy',
    description: 'Every decision is backed by real, verified data, not guesswork or assumptions.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Audience Intelligence',
    description: 'We build campaigns around verified buyer personas and decision maker insights.',
    iconPath: 'M16 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM8 13c2.21 0 4-1.79 4-4S10.21 5 8 5 4 6.79 4 9s1.79 4 4 4zm8 2a5 5 0 015 5v1H11v-1a5 5 0 015-5zm-8 0a5 5 0 015 5v1H3v-1a5 5 0 015-5z',
  },
  {
    title: 'End-to-End Optimization',
    description: 'From initial planning to post campaign analytics, we continuously optimize performance.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 12a4 4 0 002.599-1M12 8c1.11 0 2.08.402 2.599 1',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Fully compliant with GDPR, CAN-SPAM, and CCPA so campaigns stay trusted and secure.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

const successStories = [
  {
    title: 'CloudAxis Technologies',
    subtitle: 'Cloud based SaaS firm',
    summary: 'Results That Speak for Themselves',
    description:
      'EscaBiz automated LinkedIn prospecting for CTOs, CIOs, and decision makers across tech startups.',
    stats: [
      'Connection Requests Sent: 6,200',
      'Response Rate: 37%',
      'Sales Meetings Booked: 54',
      'New Contracts Signed: 11',
    ],
    image: '/b2b sas.jpg',
    icon: Cloud,
  },
  {
    title: 'Prime Staffing Solutions',
    subtitle: 'U.S. based recruitment company',
    summary: 'Boosting HR Partnerships',
    description:
      'EscaBiz built a LinkedIn campaign targeting HR managers and talent acquisition heads in mid sized firms.',
    stats: [
      'Prospects Contacted: 8,900',
      'Replies Received: 942',
      'Sales Meetings: 78',
      'Conversion Rate: 28%',
    ],
    image: '/Recurting and staffing.jpg',
    icon: Users,
  },
  {
    title: 'GreenSpark Energy',
    subtitle: 'Renewable energy firm',
    summary: 'Powering Sustainable Growth',
    description:
      'EscaBiz launched segmented LinkedIn campaigns targeting sustainable development leads in the U.S. and Canada.',
    stats: [
      'Prospects Reached: 10,280',
      'Qualified Leads: 563',
      'Decision Makers Connected: 241',
      'Sales Meetings Booked: 67',
    ],
    image: '/colleagues-working-project-discussing-details.jpg',
    icon: Leaf,
  },
];

const roadmapSteps = [
  {
    title: 'Identify',
    description:
      'Define your ideal audience and understand their intent. EscaBiz maps your market with firmographics, technographics, and buying signals so only high potential prospects enter your funnel.',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    title: 'Engage',
    description:
      'Deliver personalized content and multi-channel campaigns that resonate, building awareness and interest with every interaction.',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: 'Nurture',
    description:
      'Automation and segmentation deliver value driven interactions, increasing engagement and readiness to buy throughout the sales journey.',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    title: 'Convert',
    description:
      'Transition warm, qualified leads to sales seamlessly, shortening buying cycles and maximizing measurable growth.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
];

const faqItems = [
  {
    question: 'What is B2B targeted marketing?',
    answer:
      'B2B targeted marketing is a data-driven approach that focuses your campaigns on businesses and decision makers most likely to purchase your services, maximizing ROI and engagement.',
  },
  {
    question: 'How can EscaBiz improve my marketing performance?',
    answer:
      'We refine your ICP, segment your audience, and deliver personalized campaigns that boost engagement, trust, and conversion rates.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We support tech, finance, healthcare, manufacturing, logistics, SaaS, and other growth focused industries.',
  },
  {
    question: 'Is your data compliant and verified?',
    answer:
      'Yes every dataset goes through multi step validation and adheres to GDPR, CAN-SPAM, and CCPA guidelines.',
  },
  {
    question: 'Can EscaBiz integrate with my existing CRM?',
    answer:
      'Absolutely. We integrate seamlessly with Salesforce, HubSpot, Zoho, and other leading CRM platforms.',
  },
];

export default function B2BTargetedEmailMarketing() {
  const [activeStory, setActiveStory] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/b2b%20email%20marketing%20banner.jpg)' }}
          ></div>
          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: '#1b76bf', opacity: 0.45 }}></div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              <h1
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
                data-aos="fade-up"
              >
                Connect with the Right Decision Makers.
              </h1>
              <p
                className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                EscaBiz helps you connect with the right audience and turn data into growth.
              </p>
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
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

        {/* What is B2B Targeted Marketing */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3" data-aos="fade-right">
                What Is B2B Targeted Marketing?
              </h2>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3" data-aos="fade-right" data-aos-delay="100">
                Turning Data into Actionable Engagement.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3" data-aos="fade-right" data-aos-delay="200">
                B2B targeted marketing is the art and science of identifying, segmenting, and engaging businesses that are most likely to buy your products or services. It is not about reaching everyone it is about reaching the right ones.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3" data-aos="fade-right" data-aos-delay="300">
                Through data analytics, intent research, and audience profiling, EscaBiz helps you find and communicate with decision makers that match your ideal customer profile. Whether you're targeting CEOs in finance or marketing directors in tech, our strategies ensure your brand connects with prospects who truly matter.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-4" data-aos="fade-right" data-aos-delay="400">
                Our goal is to ensure every marketing dollar leads to a meaningful conversation and a high value opportunity, moving you from cold outreach to signed contract efficiently.
              </p>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg w-fit"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <span className="relative z-10 flex items-center">
                  Start Targeting Your Ideal Clients
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
              <div className="aspect-[4/3] relative w-full">
                <Image src="/marketing%20image-1.jpg" alt="B2B targeted marketing collaboration" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="w-full bg-white pt-0 pb-10 md:pb-14 lg:pb-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8" data-aos="fade-up">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight">
                With B2B targeted marketing, you:
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {marketingBenefits.map((benefit, idx) => (
                <div
                  key={benefit.title}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 p-5 lg:p-6 flex border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1 hover:bg-[#1c75c0]"
                  data-aos="zoom-in"
                  data-aos-delay={`${(idx + 1) * 100}`}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gradient-to-br from-[#1c75c0]/8 to-[#1c75c0]/3 rounded-lg p-3 w-12 h-12 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-105 transition-all duration-300">
                      <svg className="w-6 h-6 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-semibold text-[#6f7074] group-hover:text-white mb-2 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-xs md:text-sm text-[#a9a9a9] group-hover:text-white/90 leading-normal font-normal transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How EscaBiz Differentiates */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs sm:text-sm font-semibold text-[#1c75c0] tracking-wide mb-2" data-aos="fade-up">How EscaBiz Differentiates Itself from Others</p>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight" data-aos="fade-up" data-aos-delay="100">
                Targeted Marketing That Works Not Just Looks Good
              </h2>
            </div>
            <div className="rounded-2xl px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="group flex gap-2 sm:gap-3 animate-slide-left">
                {['Data Collection', 'Insight Generation', 'Actionable Strategy'].map((item, index) => (
                  <button
                    key={index}
                    className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {item}
                  </button>
                ))}
                {['Data Collection', 'Insight Generation', 'Actionable Strategy'].map((item, index) => (
                  <button
                    key={`dup-${index}`}
                    className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {flipHighlights.map((item, idx) => (
                <div key={item.title} className="group h-[280px] [perspective:1000px]" data-aos="zoom-in" data-aos-delay={`${(idx + 1) * 100 + 300}`}>
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-sm border border-[#1c75c0] p-6 flex flex-col items-center justify-center text-center text-white">
                      <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm leading-snug font-semibold">{item.frontText}</p>
                    </div>
                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)]">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#1c75c0]/10 flex items-center justify-center">
                          <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6f7074] leading-relaxed font-normal">{item.backText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator Cards */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4" data-aos="fade-up">
                Here's What Makes Us Different: Four Pillars Ensuring Your Marketing Success and Compliance.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {differentiatorCards.map((card, idx) => (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-7 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center min-h-[280px] flex flex-col justify-center"
                  data-aos="zoom-in"
                  data-aos-delay={`${(idx + 1) * 100}`}
                >
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-[#1c75c0]/12 to-[#1c75c0]/6 rounded-xl p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">{card.title}</h4>
                  <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Images */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up">
            <Image src="/target1.jpg" alt="Targeted marketing banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up">
            <Image src="/target2.jpg" alt="Marketing automation banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10 pb-6 md:pb-8 border-b border-gray-200">
                <div
                  className="flex overflow-x-auto justify-center -mx-4 px-4 md:mx-0 md:px-0 gap-2 md:gap-3"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  <style dangerouslySetInnerHTML={{ __html: `.overflow-x-auto::-webkit-scrollbar { display: none; }` }} />
                  {successStories.map((story, idx) => (
                    <button
                      key={story.title}
                      onClick={() => setActiveStory(idx)}
                      className={`group flex-shrink-0 flex flex-col items-center justify-center text-center px-4 py-3 md:px-5 md:py-4 rounded-xl transition-all duration-300 min-w-[120px] border-2 ${
                        activeStory === idx
                          ? 'bg-[#1c75c0] text-white border-[#1c75c0] shadow-lg shadow-[#1c75c0]/30'
                          : 'bg-gray-100 text-[#6f7074] border-transparent hover:bg-[#1c75c0] hover:text-white hover:border-[#1c75c0] hover:shadow-lg hover:shadow-[#1c75c0]/30'
                      }`}
                    >
                      <div className="w-6 h-6 md:w-7 md:h-7 mb-2 flex items-center justify-center">
                        {(() => {
                          const IconComponent = story.icon;
                          return (
                            <IconComponent
                              className={`w-full h-full transition-colors duration-300 ${activeStory === idx ? 'text-white' : 'text-[#1c75c0] group-hover:text-white'}`}
                            />
                          );
                        })()}
                      </div>
                      <span className={`text-xs md:text-sm font-semibold leading-tight transition-colors duration-300 ${activeStory === idx ? 'text-white' : 'text-[#6f7074] group-hover:text-white'}`}>
                        {story.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {successStories.map((story, idx) => (
                <div key={story.title} className={`transition-all duration-500 ${activeStory === idx ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10 pt-0">
                    <div className="flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-wide text-[#1c75c0] font-semibold mb-2" data-aos="fade-right">EscaBiz Success Stories</p>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-2" data-aos="fade-right" data-aos-delay="100">{story.title}</h3>
                      <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-4" data-aos="fade-right" data-aos-delay="200">{story.subtitle}</p>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] mb-3" data-aos="fade-right" data-aos-delay="300">{story.summary}</h4>
                      <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed mb-4" data-aos="fade-right" data-aos-delay="400">{story.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4" data-aos="fade-right" data-aos-delay="500">
                        {story.stats.map((stat) => (
                          <div key={stat} className="bg-[#1c75c0]/5 border border-[#1c75c0]/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#6f7074]">
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
                      <div className="aspect-[4/3] relative w-full">
                        <Image src={story.image} alt={story.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Put Marketing on Autopilot */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1" data-aos="fade-left">
              <div className="aspect-[4/3] relative w-full">
                <Image src="/marketing%20image-1.jpg" alt="Marketing automation collaboration" fill className="object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs sm:text-sm font-semibold text-[#1c75c0] tracking-wide mb-2" data-aos="fade-right">Put Marketing on Autopilot</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4" data-aos="fade-right" data-aos-delay="100">
                Pilot Your Growth & Automate Your Way to Qualified B2B Engagements 
              </h3>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3" data-aos="fade-right" data-aos-delay="200">
                Put your targeting on autopilot reach the right buyers every time.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-3" data-aos="fade-right" data-aos-delay="300">
                EscaBiz transforms your marketing from manual and uncertain to automated, data driven precision. Every campaign aligns with your Ideal Customer Profile, connecting your message directly with decision makers who need your solutions.
              </p>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg w-fit"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <span className="relative z-10 flex items-center">
                  Start Your New Growth
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs sm:text-sm font-semibold text-[#1c75c0] tracking-wide mb-2" data-aos="fade-up">From Awareness to Conversion We Guide Your Journey Step by Step</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight" data-aos="fade-up" data-aos-delay="100">
                Your Roadmap to Data-Driven Success
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {roadmapSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative bg-white rounded-xl shadow-md border border-[#1c75c0]/30 p-6 md:p-7 lg:p-8 hover:border-[#1c75c0] hover:-translate-y-2 hover:shadow-lg hover:shadow-[#1c75c0]/15 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={`${(index + 1) * 100 + 200}`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#1c75c0]/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">{step.title}</h4>
                      <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Image */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up">
            <Image src="/Banner-24 (4).jpg" alt="Targeted marketing results banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        {/* Challenges Grid */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-xs sm:text-sm font-semibold text-[#1c75c0] tracking-wide mb-2" data-aos="fade-up">Target. Engage. Convert. Overcome B2B Marketing Challenges</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight" data-aos="fade-up" data-aos-delay="100">
                From "First Click" to "Signed Contract" EscaBiz Powers Precision Driven Growth.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  number: '01',
                  title: 'Identifying the Right Audience',
                  description:
                    'Marketing to everyone means connecting with no one. EscaBiz pinpoints and prioritizes your highest value audiences through deep data analysis and Ideal Customer Profile refinement.',
                  icon: Target,
                },
                {
                  number: '02',
                  title: 'Time & Resource Constraints',
                  description:
                    'Building in house B2B marketing infrastructure can take months. EscaBiz delivers a ready to launch system with automation, tooling, and expertise saving time and investment.',
                  icon: Clock,
                },
                {
                  number: '03',
                  title: 'Low Engagement Rates',
                  description:
                    'Generic messaging falls flat. Our campaigns are tailored to your audience\'s specific pain points, ensuring every communication adds value and builds trust quickly.',
                  icon: MessageSquare,
                },
                {
                  number: '04',
                  title: 'Scale & High Lead Quality',
                  description:
                    'We emphasize data accuracy and intent signals for consistent lead quality, with flexible programs that scale as you enter new markets or expand operations.',
                  icon: TrendingUp,
                },
              ].map((challenge, idx) => {
                const IconComponent = challenge.icon;
                return (
                  <div
                    key={challenge.title}
                    className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 lg:p-7 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-1"
                    data-aos="zoom-in"
                    data-aos-delay={`${(idx + 1) * 100 + 200}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-[#1c75c0]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[#1c75c0] font-semibold text-lg">{challenge.number}</span>
                          <h4 className="text-base md:text-lg font-semibold text-[#6f7074]">{challenge.title}</h4>
                        </div>
                        <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-relaxed font-normal">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                  We're Here to Answer All Your Questions
                </h3>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={faq.question} className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'}`}>
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                      >
                        <span className="text-[15px] font-normal text-[#6f7074] pr-4">{faq.question}</span>
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
                  <div className="absolute top-4 right-0.5 sm:top-1 sm:right-4 bg-[#1c75c0] rounded-lg px-0.5 py-4 flex flex-col items-center text-white space-y-1">
                    <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">98%</p>
                    <p className="text-xs md:text-sm font-medium leading-tight whitespace-nowrap">Client Retention</p>
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
                  <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#6f7074] leading-tight mb-4" data-aos="fade-up">
                    Ready to Transform Your Marketing ROI?
                  </h3>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="100">
                    Leave your email below to start a new project with us. Let's craft targeted campaigns that generate measurable growth.
                  </p>
                </div>
                <div className="flex-shrink-0" data-aos="fade-up" data-aos-delay="200">
                  <Link
                    href="/lets-talk"
                    className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      Make an appointment
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </Link>
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
                EscaBiz helps businesses grow smarter through data-driven B2B lead generation, targeted marketing, and automation solutions.
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
                <Link href="/b2b-appointment-setup" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Lead Appointment Setup
                </Link>
                <Link href="/b2b-market-research-agency-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  B2B Industry Analysis
                </Link>
                <Link href="/prospect-research-list-management-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Prospect Research &amp; List Mgmt
                </Link>
                <Link href="/linkedin-automation-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  LinkedIn Outreach Automation
                </Link>
                <Link href="/b2b-targeted-marketing-services-escabiz" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2">
                  B2B Targeted Email Marketing
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

