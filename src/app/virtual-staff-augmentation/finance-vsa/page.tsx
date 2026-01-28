'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const serviceCards = [
  {
    title: 'Payroll Processing Assistant',
    description:
      'Ensure timely, accurate, and compliant payroll management every month. Our virtual payroll experts handle everything, including salary calculations, deductions, bonuses, and payslip generation, giving you total peace of mind.',
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
      'Our analysts translate raw numbers into story driven insights so leadership can prioritize the right campaigns and investments.',
    iconPath: 'M11 12h2m-1-9v18m-7-9h14',
  },
  {
    title: 'Revenue Focus',
    frontText: 'More time to focus on generating revenue, not reports.',
    backText:
      'We handle the spreadsheets, checklists, and close out cycles, giving your sales and marketing teams more hours to close deals.',
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
      'Absolutely. Our specialists manage jurisdiction specific tax, labor, and reporting requirements to keep every payroll run compliant.',
  },
  {
    question: 'Q4: How secure is our financial data?',
    answer:
      'Your information is protected with encryption, NDAs, role based access, and strict internal controls that keep every record secure.',
  },
  {
    question: 'Q5: Can we scale the number of Finance VSAs as our business grows?',
    answer:
      'Yes, add new finance specialists, analysts, or controllers as you expand without long term contracts or hiring delays.',
  },
];

export default function FinanceVSAPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/Finance%20Vsa%20banner.jpg)' }}
          ></div>

          <div className="absolute inset-0 z-[1]" style={{ backgroundColor: '#1b76bf', opacity: 0.45 }}></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              <h1
                data-aos="fade-up"
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl"
                style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
              >
                Powering Growth with Precision Finance Support
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg"
                style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
              >
                At EscaBiz, we don't just help you generate clients, we help you manage and grow the revenue they bring in.
              </p>
              <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="200">
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


        {/* Finance and Lead Generation Connection */}
        <section className="w-full bg-gradient-to-b from-blue-50/30 via-blue-50/20 to-white py-8 md:py-12 lg:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-5">
                How Finance VSA Connects With Our Lead Generation System
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-4">
                As a lead generation and business growth company, EscaBiz understands that revenue means nothing without control. We help you grow your client base and our Finance VSA ensures that every deal, invoice, and payment is accurately tracked and processed to fuel sustainable business expansion.
              </p>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal mb-6">
                Our virtual finance professionals work hand in hand with your operations and sales teams, keeping your financial engine running  while your lead pipeline fills up. So, while we help you earn more clients, our finance experts help you manage the money smarter.
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
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative w-full">
                  <Image src="/Finance VSA Section.jpg" alt="Finance collaboration" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Finance Promise Overlay Section */}
        <section className="w-full bg-white py-8 md:py-12 lg:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] w-full" data-aos="zoom-in">
              <div className="absolute inset-0 z-0">
                <Image src="/11%20%281%29.jpg" alt="Finance collaboration" fill className="object-cover" priority />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/45 via-black/30 to-black/20"></div>
              <div className="relative z-20 flex flex-col justify-center h-full p-6 md:p-8 lg:p-10 max-w-2xl" data-aos="fade-up">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight mb-3">
                  Finance VSA: Precision. Profitability. Peace Of Mind.
                </h2>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  Our Finance VSA gives your business access to professional financial experts who handle <strong className="font-semibold text-white">payroll, reconciliation, and financial data management</strong> so you can focus on scaling sales and closing more deals.
                </p>
                <Link
                  href="/lets-talk"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg bg-white/20 hover:bg-white/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 relative overflow-hidden w-fit"
                  data-aos="zoom-in"
                  data-aos-delay="100"
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
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up">
            <Image src="/financevsa1.jpg" alt="Finance VSA banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>



        {/* Core Services */}
        <section className="w-full bg-white py-8 md:py-12 lg:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                Our Core Finance VSA Services
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal max-w-3xl mx-auto">
                Specialist finance teams plug into your existing systems to keep payroll accurate, books reconciled, and financial snapshots always ready.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {serviceCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 flex gap-5 items-start hover:bg-[#1c75c0]"
                  data-aos="zoom-in"
                  data-aos-delay={`${(index + 1) * 120}`}
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
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up" data-aos-delay="100">
            <Image src="/financevsa2.jpg" alt="Finance analytics banner" width={1400} height={600} className="w-full h-auto object-contain" priority />
          </div>
        </section>

        {/* Advantage Slider Section */}
        <section className="w-full bg-gradient-to-b from-blue-50/30 via-blue-50/20 to-white pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-7" data-aos="fade-up">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                The EscaBiz Advantage: Finance Meets Growth
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-[#a9a9a9] leading-relaxed font-normal max-w-3xl mx-auto">
                We believe finance is more than balancing books it builds the foundation for predictable growth. Pair your lead generation engine with Finance VSA and unlock the visibility, automation, and focus your teams deserve.
              </p>
            </div>

            <div className="rounded-2xl px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6" data-aos="fade-up" data-aos-delay="150">
              <div className="group flex gap-2 sm:gap-3 animate-slide-left">
                {['Clear Visibility', 'Automated Efficiency', 'Smart Decisions', 'More Revenue Focus'].map((item, index) => (
                  <button
                    key={index}
                    className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {item}
                  </button>
                ))}
                {['Clear Visibility', 'Automated Efficiency', 'Smart Decisions', 'More Revenue Focus'].map((item, index) => (
                  <button
                    key={`dup-${index}`}
                    className="px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 bg-[#1c75c0] text-white hover:bg-[#1565a0] whitespace-nowrap flex-shrink-0"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Flip Card Highlights */}
        <section className="w-full bg-white pt-6 md:pt-8 lg:pt-10 pb-10 md:pb-12 lg:pb-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7 max-w-4xl mx-auto">
              {flipHighlights.map((item, index) => (
                <div key={item.title} className="group h-[280px] [perspective:1000px]" data-aos="zoom-in" data-aos-delay={`${(index + 1) * 120}`}>
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
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
        <section className="w-full bg-gradient-to-b from-blue-50/30 via-blue-50/20 to-white py-8 md:py-12 lg:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8">
                  We&apos;re Here to Answer All Your Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.question}
                      className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'}`}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                      >
                        <span className="text-[15px] font-normal text-[#6f7074] pr-4">{faq.question}</span>
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
                          <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md mr-4 lg:mr-6">
                  <Image src="/Group 1244832130.png" alt="Finance FAQ visual" width={450} height={450} className="w-full h-auto object-contain" priority />
                  <div className="absolute top-4 right-0.5 sm:top-1 sm:right-4 bg-[#1c75c0] rounded-lg px-0.5 py-4 flex flex-col items-center text-white space-y-1">
                    <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">30+</p>
                    <p className="text-xs md:text-sm font-medium leading-tight whitespace-nowrap">Finance Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-8 md:py-12 lg:py-14">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50/30 to-blue-50/10 rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 lg:p-10" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                  <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#6f7074] leading-tight mb-4">
                    Ready to Bring Financial Clarity to Your Growing Business?
                  </h2>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Stop letting financial management slow down your growth. Let EscaBiz handle the numbers while you focus on scaling your revenue.
                  </p>
                </div>
                <div className="flex-shrink-0" data-aos="zoom-in" data-aos-delay="150">
                  <Link
                    href="/lets-talk"
                    className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                     Book Free Consultation 
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
                Escabiz helps businesses grow smarter through data-driven B2B lead generation, targeted marketing, and automation solutions.
              </p>
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image src="/images (1).png" alt="UK Flag" width={24} height={16} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  A98 Greatorex Street, London,<br />United Kingdom, E15NF
                </p>
              </div>
              {/* US Address */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-4 flex-shrink-0 rounded-sm overflow-hidden border border-gray-300/30 mt-0.5">
                  <Image src="/usa flag.png" alt="US Flag" width={24} height={16} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-[#6f7074] leading-relaxed">
                  3577 N Belt Line RD APT 169<br />Irving, TX 75062
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
                <Link href="/industries/commercial-cleaning" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
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

            <div className="flex flex-col">
              <h5 className="text-base font-semibold text-[#6f7074] mb-4">Connect</h5>
              <div className="flex items-center space-x-3 mb-6">
                <a href="https://www.facebook.com/profile.php?id=61581532281727" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/escabiz/" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/escabizz/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
              <p className="text-sm text-[#6f7074] leading-loose mb-4">
                Keep up to date with latest news and updates about EscaBiz, simply subscribe with your email address.
              </p>
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

        <div className="border-t border-[#6f7074]/20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-[#6f7074] text-center">© 2025 EscaBiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

