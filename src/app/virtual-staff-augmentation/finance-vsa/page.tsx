'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const benefitTabs = [
  {
    id: 0,
    title: 'Clear Visibility',
    description: 'See real-time cash flow, receivables, and liabilities in one command center so your leadership team makes fast, confident moves.',
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h2a1 1 0 001-1m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v12',
  },
  {
    id: 1,
    title: 'Automated Efficiency',
    description: 'Automate payroll schedules, invoice reminders, and vendor reconciliations so every cycle runs on autopilot without missed deadlines.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 2,
    title: 'Smart Decisions',
    description: 'Turn financial reports into growth playbooks with analysts who translate trends into revenue-focused recommendations.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 3,
    title: 'More Revenue Focus',
    description: 'Free your founders and sales leaders from finance busywork so they can double down on pipeline, partnerships, and profit.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 8V7m0 12a4 4 0 002.599-1M12 8c1.11 0 2.08.402 2.599 1',
  },
];

const serviceCards = [
  {
    title: 'Payroll Processing Assistant',
    description:
      'Ensure timely, accurate, and compliant payroll management every month. Our virtual payroll experts handle everything — salary calculations, deductions, bonuses, and payslip generation — giving you total peace of mind.',
    iconPath: 'M17 9V7a5 5 0 00-10 0v2M5 12h14l-1.35 9.45A2 2 0 0115.667 23H8.333a2 2 0 01-1.983-1.55L5 12zm5 5h4',
  },
  {
    title: 'Financial Data Entry & Reconciliation',
    description:
      'Say goodbye to messy ledgers and inconsistent records. Our finance specialists maintain your books, match transactions, and reconcile accounts ensuring every dollar is tracked and reported accurately.',
    iconPath: 'M3 5h18M9 3v2m6-2v2M4 11h16M4 19h16M8 15h.01M12 15h.01M16 15h.01',
  },
];

const flipHighlights = [
  {
    title: 'Reliable Visibility',
    frontText: 'Reliable financial visibility across all departments.',
    backText:
      'Every department works from the same financial truth with dashboards that surface performance, spend, and profitability in real time.',
    iconPath: 'M3 4a1 1 0 011-1h4l2 2h8a1 1 0 011 1v2H3V4zm0 4h18v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 4h8',
  },
  {
    title: 'Automated Operations',
    frontText: 'Automated payroll & reconciliations for stress-free operations.',
    backText:
      'Recurring payroll, expense approvals, and reconciliation cycles run automatically with human oversight for compliance and accuracy.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Financial Clarity',
    frontText: 'Financial clarity that supports smart business decisions.',
    backText:
      'Our analysts translate raw numbers into story-driven insights so leadership can prioritize the right campaigns and investments.',
    iconPath: 'M11 12h2m-1-9v18m-7-9h14',
  },
  {
    title: 'Revenue Focus',
    frontText: 'More time to focus on generating revenue — not reports.',
    backText:
      'We handle the spreadsheets, checklists, and close-out cycles, giving your sales and marketing teams more hours to close deals.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
];

const faqs = [
  {
    question: 'Q1: What makes EscaBiz Finance VSA different from traditional outsourcing?',
    answer:
      'We are a growth partner first. Finance VSA is embedded into your lead generation and sales workflows to keep revenue and cash flow aligned in real time.',
  },
  {
    question: 'Q2: Can your team work with our existing accounting tools?',
    answer:
      'Yes. We plug into QuickBooks, Xero, Zoho Books, Sage, or any stack you already trust without disrupting your current setup.',
  },
  {
    question: 'Q3: Is the payroll service compliant with local regulations?',
    answer:
      'Absolutely. Our specialists manage jurisdiction-specific tax, labor, and reporting requirements to keep every payroll run compliant.',
  },
  {
    question: 'Q4: How secure is our financial data?',
    answer:
      'Your information is protected with encryption, NDAs, role-based access, and strict internal controls that keep every record secure.',
  },
  {
    question: 'Q5: Can we scale the number of Finance VSAs as our business grows?',
    answer:
      'Yes — add new finance specialists, analysts, or controllers as you expand without long-term contracts or hiring delays.',
  },
];

export default function FinanceVSAPage() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefitTabs.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

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
                EscaBiz Powering Growth with Precision Finance Support
              </h1>
              <p
                className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
              >
                At EscaBiz, we don’t just help you generate clients — we help you manage and grow the revenue they bring in.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/lets-talk"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50 relative overflow-hidden shadow-lg"
                >
                  <span className="relative z-10 flex items-center">
                    Let&apos;s Talk Us
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

        {/* Finance Promise Overlay Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] w-full">
              <div className="absolute inset-0 z-0">
                <Image src="/11%20%281%29.jpg" alt="Finance collaboration" fill className="object-cover" priority />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/45 via-black/30 to-black/20"></div>
              <div className="relative z-20 flex flex-col justify-center h-full p-6 md:p-8 lg:p-10 max-w-2xl">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight mb-3">
                  Finance VSA: Precision. Profitability. Peace Of Mind.
                </h2>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  Our Finance VSA gives your business access to professional financial experts who handle <strong className="font-semibold text-white">payroll, reconciliation, and financial data management</strong> so you can focus on scaling sales and closing more deals.
                </p>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  We bring the same data-driven precision that powers our lead generation systems into your financial operations — ensuring accuracy, transparency, and long-term financial stability.
                </p>
                <Link
                  href="/lets-talk"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg bg-white/20 hover:bg-white/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 relative overflow-hidden w-fit"
                >
                  <span className="relative z-10 flex items-center">
                    Optimize Your Finances
                    <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Finance Banner */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image src="/Banner-Finance-2 (1).jpg" alt="Finance VSA banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        {/* Finance and Lead Generation Connection */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-5">
                How Finance VSA Connects With Our Lead Generation System
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-4">
                As a lead generation and business growth company, EscaBiz understands that <strong className="font-semibold text-[#6f7074]">revenue means nothing without control</strong>. We help you grow your client base and our Finance VSA ensures that every deal, invoice, and payment is <strong className="font-semibold text-[#6f7074]">accurately tracked and processed</strong> to fuel sustainable business expansion.
              </p>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-6">
                Our virtual finance professionals work hand-in-hand with your operations and sales teams — keeping your <strong className="font-semibold text-[#6f7074]">financial engine running</strong> while your lead pipeline fills up. So, while we help you earn more clients, our finance experts help you <strong className="font-semibold text-[#6f7074]">manage the money smarter</strong>.
              </p>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden w-fit"
              >
                <span className="relative z-10 flex items-center">
                  Connect My Growth & Finances
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative w-full">
                  <Image src="/colleagues-working-project-discussing-details.jpg" alt="Finance collaboration" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="w-full bg-gradient-to-b from-white via-gray-50/40 to-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                Our Core Finance VSA Services
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal max-w-3xl mx-auto">
                Specialist finance teams plug into your existing systems to keep payroll accurate, books reconciled, and financial snapshots always ready.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {serviceCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 flex gap-5 items-start hover:bg-[#1c75c0]"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
                      <svg className="w-8 h-8 text-[#1c75c0] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3 group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal group-hover:text-white/90 transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Banner */}
        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full">
            <Image src="/Banner-Finance-1 (1).jpg" alt="Finance analytics banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        {/* Advantage Slider Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                The EscaBiz Advantage: Finance Meets Growth
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal max-w-3xl mx-auto">
                We believe finance is more than balancing books — it builds the foundation for <strong className="font-semibold text-[#6f7074]">predictable growth</strong>. Pair your lead generation engine with Finance VSA and unlock the visibility, automation, and focus your teams deserve.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8 lg:p-10 border-b border-gray-200">
                <div className="flex gap-2 md:gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  <style dangerouslySetInnerHTML={{ __html: `.overflow-x-auto::-webkit-scrollbar{display:none;}` }} />
                  {benefitTabs.concat(benefitTabs).map((tab, index) => (
                    <button
                      key={`${tab.id}-${index}`}
                      onMouseEnter={() => setActiveBenefit(tab.id)}
                      className={`flex-shrink-0 px-4 py-3 md:px-5 md:py-4 rounded-xl border-2 transition-all duration-300 min-w-[150px] md:min-w-[180px] flex flex-col items-center text-center ${
                        activeBenefit === tab.id ? 'bg-[#1c75c0] text-white border-[#1c75c0] shadow-lg shadow-[#1c75c0]/30' : 'bg-gray-100 text-[#6f7074] border-transparent hover:bg-[#1c75c0] hover:text-white'
                      }`}
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-2">
                        <svg
                          className={`w-full h-full ${activeBenefit === tab.id ? 'text-white' : 'text-[#1c75c0]'}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={tab.iconPath} />
                        </svg>
                      </div>
                      <span className={`text-xs md:text-sm font-semibold leading-tight ${activeBenefit === tab.id ? 'text-white' : 'text-inherit'}`}>{tab.title}</span>
                    </button>
                  ))}
                </div>
              </div>
              {benefitTabs.map((tab) => (
                <div key={tab.id} className={`transition-all duration-500 ${activeBenefit === tab.id ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                  <div className="px-6 md:px-8 lg:px-10 py-8 md:py-10">
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-[#1c75c0]/10 flex items-center justify-center">
                            <svg className="w-7 h-7 text-[#1c75c0]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d={tab.iconPath} />
                            </svg>
                          </div>
                          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#6f7074]">{tab.title}</h3>
                        </div>
                        <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal">{tab.description}</p>
                      </div>
                      <div className="flex-shrink-0 w-full lg:w-1/3">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg">
                          <div className="aspect-[4/3] relative w-full">
                            <Image src="/marketing%20image-1.jpg" alt={`${tab.title} illustration`} fill className="object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flip Card Highlights */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {flipHighlights.map((item) => (
                <div key={item.title} className="group h-[280px] [perspective:1000px]">
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1c75c0] rounded-lg shadow-md border border-[#1c75c0] p-6 flex flex-col justify-center text-center text-white">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm leading-snug font-semibold">{item.frontText}</p>
                    </div>
                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg border border-gray-100 p-6 flex flex-col justify-center text-center [transform:rotateY(180deg)]">
                      <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-lg bg-[#1c75c0]/10 flex items-center justify-center">
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

        {/* FAQ Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                  FAQs — We&apos;re Here to Answer All Your Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={faq.question} className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'}`}>
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                      >
                        <span className="text-base md:text-lg font-normal text-[#6f7074] pr-4">{faq.question}</span>
                        <svg
                          className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === index ? 'M20 12H4' : 'M12 4v16m8-8H4'} />
                        </svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-400 ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 md:px-5 pb-4 md:pb-5">
                          <p className="text-sm md:text-base text-[#6f7074] leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md mr-4 lg:mr-6">
                  <Image src="/Group%201244832130.png" alt="Finance FAQ visual" width={450} height={450} className="w-full h-auto object-contain" priority />
                  <div className="absolute top-4 right-4 bg-[#1c75c0] rounded-lg px-3 py-2 shadow-lg">
                    <p className="text-white text-2xl md:text-3xl font-bold leading-tight">30+</p>
                    <p className="text-white text-sm md:text-base font-medium leading-tight">Finance Specialists</p>
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
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6f7074] leading-tight mb-4">
                    Ready to Bring Financial Clarity to Your Growing Business?
                  </h2>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Stop letting financial management slow down your growth. Let EscaBiz handle the numbers — while you focus on scaling your revenue.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/lets-talk"
                    className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      Get a Free Finance Consultation Today
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
    </>
  );
}

