'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RecruitingVSAPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  const featureCards = [
    {
      title: 'Speed & Precision',
      description: 'Fill roles faster with AI driven sourcing backed by recruiters who understand your hiring profile.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a6 6 0 0011.31 2H15a3 3 0 003-3v-2h-3.69A6 6 0 003 9v6z" />
      ),
    },
    {
      title: 'Cost Effective Hiring',
      description: 'Cut recruitment costs by up to 60% with remote recruiters working on demand for your team.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      title: 'Scalable Teams',
      description: 'Expand your recruiting capacity instantly with specialists who plug into your hiring workflow.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11a4 4 0 10-8 0 4 4 0 008 0zm6 8v-1a5 5 0 00-5-5H7a5 5 0 00-5 5v1" />
      ),
    },
    {
      title: 'Data-Driven Insights',
      description: 'Get transparent reports on talent pipelines, candidate quality, and time to hire so you always know what’s working.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 7v10m6-6v6m-9 0h12" />
      ),
    },
    {
      title: 'Global Talent Access',
      description: 'Tap into vetted talent pools across the globe for remote, hybrid, or on site roles.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.761 0 5 4.477 5 10s-2.239 10-5 10-5-4.477-5-10 2.239-10 5-10zm-8 10h16" />
      ),
    },
    {
      title: 'End-to-End Management',
      description: 'From sourcing and scheduling to offer coordination and onboarding, we manage every recruiting step for you.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7m-7 11V7" />
      ),
    },
  ];

  const successStories = [
    {
      tag: 'SaaS Startup',
      title: 'EscaBiz Reduces Hiring Time by 60%',
      subtitle: 'for a SaaS startup',
      result: 'The Result: 60% Faster Hiring',
      details:
        'By integrating AI driven sourcing and automated screening, EscaBiz helped a SaaS client fill tech roles in just two weeks, achieving a 98% candidate satisfaction rate.',
      image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=900&q=80',
    },
    {
      tag: 'Digital Agency',
      title: 'EscaBiz Enables Global Talent Acquisition',
      subtitle: 'for a digital agency',
      result: 'The Result: Global Reach',
      details:
        'We deployed multi channel outreach campaigns and AI filtering, allowing the client to hire remote talent across three continents within 30 days.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    },
    {
      tag: 'Finance Firm',
      title: 'EscaBiz Improves Candidate Quality by 85%',
      subtitle: 'for a finance firm',
      result: 'The Result: Quality Boost by 85%',
      details:
        'Through predictive analytics and behavioral AI matching, EscaBiz delivered top candidates who stayed beyond 12 months, reducing turnover by 40%.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const faqs = [
    {
      question: 'Q1: What makes EscaBiz different from a traditional recruitment agency?',
      answer:
        'We combine lead generation precision with recruiting expertise, offering AI driven sourcing, automation, and fully managed virtual recruiters.',
    },
    {
      question: 'Q2: Can I hire recruiters for short-term projects?',
      answer:
        'Absolutely. You can scale up or down anytime with flexible monthly engagement options tailored to your hiring demand.',
    },
    {
      question: 'Q3: Do you only provide sourcing, or full-cycle recruitment?',
      answer:
        'Both. Our Recruiting VSA handles everything from sourcing and screening to offer coordination and onboarding support.',
    },
    {
      question: 'Q4: Will the recruiters work under my company’s brand?',
      answer:
        'Yes. Every outreach, email, and interview coordination happens under your brand’s identity and tone of voice.',
    },
    {
      question: 'Q5: How do you ensure candidate quality?',
      answer:
        'We use multi level screening, behavioral assessments, and performance data to ensure only the most suitable candidates move forward.',
    },
  ];
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[600px] flex items-center overflow-hidden bg-slate-700">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/Recruiting%20Vsa%20banner.jpg)' }}
          ></div>

          <div
            className="absolute inset-0 z-[1]"
            style={{ backgroundColor: '#1b76bf', opacity: 0.4 }}
          ></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl mx-auto text-center reveal-show" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {/* <span className="text-xs sm:text-sm font-semibold tracking-[0.4em] text-white uppercase block mb-4">
                Recruiting VSA
              </span> */}
              <h1 data-aos="fade-up" className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 drop-shadow-2xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                Struggling to Find and Hire the Right Talent Fast?
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="text-xs sm:text-sm md:text-base text-white leading-relaxed font-normal mb-10 max-w-xl mx-auto drop-shadow-lg" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                At EscaBiz, we don't just generate leads, we help you build the teams that turn those leads into long term success.
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

        {/* With Recruiting VSA Overlay Section */}
        

        {/* Lead Generation Approach */}
        <section className="w-full bg-gradient-to-b from-blue-50/30 via-blue-50/20 to-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col" data-aos="fade-right">
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3">
                Your Lead Generation Partner Now Powering Talent Acquisition
              </h5>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-3">
                As a lead generation company, we know one thing better than anyone: finding the right people, whether clients or employees, takes precision, timing, and strategy.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-3">
                That’s exactly how we approach recruiting.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-3">
                Our Recruiting VSA team doesn't just find candidates, we target, nurture, and convert them into your next star employees.
              </p>
              <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal border-l-4 border-[#1c75c0] pl-4 mb-6">
                We act as your virtual recruiting department, delivering qualified talent pipelines, managing the interview process, and supporting you until each role is filled successfully.
              </p>
              <Link
                href="/lets-talk"
                className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0]/90 backdrop-blur-sm hover:bg-[#1c75c0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg w-fit"
              >
                <span className="relative z-10 flex items-center">
                  Talk With Recruiting Experts
                  <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-[#1565a0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden min-h-[360px]" data-aos="fade-left">
              <Image src="/marketing%20image-1.jpg" alt="Recruiting collaboration" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-8 md:py-10 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden h-[200px] md:h-[220px] lg:h-[240px] w-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/11%20%281%29.jpg"
                  alt="Recruiting VSA overlay"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-20 flex flex-col justify-center h-full p-6 md:p-8 lg:p-10 max-w-2xl" data-aos="fade-up">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight mb-3">
                  With Recruiting VSA
                </h2>
                <p className="text-xs sm:text-xs md:text-sm text-white/90 leading-tight font-normal mb-6">
                  EscaBiz becomes your remote recruitment engine, helping you attract, screen, and hire exceptional talent without the overhead, stress, or inefficiency of traditional hiring.
                </p>
                <Link
                  href="/lets-talk"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg bg-white/20 hover:bg-white/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 relative overflow-hidden w-fit"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <span className="relative z-10 flex items-center">
                    Talk with recruiting experts
                    <svg
                      className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>
            </div>
          </div>
        </section>

        {/* Banner Images */}
        <section className="w-full bg-white py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up">
            <Image
              src="/recruitingvsa1.jpg"
              alt="Recruiting automation banner"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/recruitngvsa2.jpg"
              alt="Recruiting success banner"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* Why Businesses Trust */}
        <section className="w-full bg-gradient-to-b from-blue-50/30 via-blue-50/20 to-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4 text-center" data-aos="fade-up">
              Why Businesses Trust EscaBiz Recruiting VSA
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal mb-8 text-center max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              We blend proven lead generation frameworks with modern recruiting expertise to deliver predictable hiring outcomes for every role on your list.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featureCards.map(({ title, description, icon }, index) => (
                <div
                  key={title}
                  className="group relative bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-[#1c75c0] hover:-translate-y-2 hover:scale-105 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={`${(index + 1) * 80}`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-br from-[#1c75c0]/10 to-[#1c75c0]/5 rounded-lg p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-[#1c75c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {icon}
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-[#6f7074] mb-3">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-8 lg:py-10">
          <div className="relative w-full" data-aos="fade-up" data-aos-delay="150">
            <Image
              src="/recruitngvsa3.jpg"
              alt="Recruiting VSA banner"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* AI Consulting Section */}
        <section className="bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col" data-aos="fade-right">
                <p className="text-xs sm:text-xs md:text-sm font-semibold text-[#1c75c0] uppercase tracking-wide mb-2">
                  AI Consulting
                </p>
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-4">
                  AI Consulting for Smarter Hiring Decisions
                </h5>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal mb-6">
                  Navigating today’s recruitment landscape requires more than effort it requires intelligence. Our AI consulting services help you understand the data you already have, uncover the data you need, and deploy automation responsibly.
                </p>
                <div className="mb-6">
                  <h6 className="text-sm sm:text-base md:text-lg font-semibold text-[#6f7074] leading-tight mb-4">
                    We help you:
                  </h6>
                  <ul className="space-y-3">
                    {[
                      'Identify and prioritize recruiting use cases that deliver measurable ROI',
                      'Improve data quality so sourcing, matching, and screening stay accurate',
                      'Forecast hiring success with analytics that keep every stakeholder aligned',
                      'Ensure ethical, compliant use of AI across every hiring touchpoint',
                      'Integrate automation seamlessly into your current recruitment workflow',
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-normal font-normal">
                  We help you integrate AI into your recruitment process turning insights into action and candidates into long term employees.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-full min-h-[400px]" data-aos="fade-left">
                <Image
                  src="/ai.jpg"
                  alt="AI consulting for recruiting"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6f7074] leading-tight mb-3 text-center" data-aos="fade-up">
              Recruiting AI Success Stories
            </h5>
            <p className="text-xs sm:text-xs md:text-sm text-[#a9a9a9] leading-tight font-normal text-center max-w-3xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
              Three ways EscaBiz combines virtual recruiting assistants with AI powered workflows to deliver consistent hiring outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div
                  key={story.title}
                  className="group relative rounded-2xl overflow-hidden border border-white/15 shadow-xl hover:shadow-[0_0_35px_rgba(28,117,192,0.35)] transition"
                  data-aos="zoom-in"
                  data-aos-delay={`${(index + 1) * 100}`}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-[#1c75c0]/25 mix-blend-screen" />
                  <div className="relative z-10 p-6 flex flex-col justify-end h-[360px]">
                    <span className="inline-block bg-[#1c75c0] text-white text-xs px-3 py-1 rounded-full mb-3 w-max">
                      {story.tag}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-1">{story.title}</h4>
                    <p className="text-white/80 text-sm mb-3">{story.subtitle}</p>
                    <h5 className="text-sm font-semibold text-white mb-2">{story.result}</h5>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{story.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-gradient-to-b from-blue-50/30 via-blue-50/20 to-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#6f7074] leading-tight mb-8" data-aos="fade-up">
                  General Questions Frequently Asked Questions?
                </h3>
                <div className="space-y-4">
                  {faqs.map(({ question, answer }, idx) => (
                    <div
                      key={question}
                      className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${
                        activeFaq === idx ? 'border-2 border-[#1c75c0]' : 'border border-gray-200'
                      }`}
                      data-aos="fade-right"
                      data-aos-delay={`${idx * 80}`}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                      >
                        <span className="text-[15px] font-normal text-[#6f7074] pr-4">{question}</span>
                        <svg
                          className={`w-4 h-4 text-[#1c75c0] flex-shrink-0 transition-transform duration-300 ${
                            activeFaq === idx ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeFaq === idx ? 'M20 12H4' : 'M12 4v16m8-8H4'} />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-400 ${
                          activeFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5">
                          <p className="text-sm md:text-base text-[#a9a9a9] leading-relaxed">{answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center lg:justify-end" data-aos="fade-left">
                <div className="relative w-full max-w-sm lg:max-w-md mr-4 lg:mr-6">
                  <Image
                    src="/Group%201244832130.png"
                    alt="Recruiting FAQ visual"
                    width={450}
                    height={450}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  <div className="absolute top-4 right-0.5 sm:top-1 sm:right-4 bg-[#1c75c0] rounded-lg px-0.5 py-4 flex flex-col items-center text-white space-y-1">
                    <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">25K</p>
                    <p className="text-xs md:text-sm font-medium leading-tight whitespace-nowrap">Hires Supported</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white py-10 md:py-14 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50/30 to-blue-50/10 rounded-2xl shadow-lg shadow-blue-100/50 p-6 md:p-8 lg:p-10" data-aos="fade-up">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                  <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#6f7074] leading-tight mb-4">
                    Ready to Build Your Dream Team Without the Hiring Hassle?
                  </h3>
                  <p className="text-sm md:text-base text-[#6f7074] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Stop losing time on endless resumes and no shows. Let EscaBiz recruit, manage, and deliver your next high-performing team virtually.
                  </p>
                </div>

                <div className="flex-shrink-0" data-aos="zoom-in" data-aos-delay="150">
                  <Link
                    href="/lets-talk"
                    className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white border-2 border-[#1c75c0] rounded-lg bg-[#1c75c0] hover:bg-[#1565a0] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 relative overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Free Recruitment Consultation Today
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
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#6f7074] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-[#6f7074] leading-relaxed">info@escabiz.com</p>
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
                <Link href="/industries/commercial-cleaning" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2 border-b border-[#6f7074]/20">
                  Industries
                </Link>
                <Link href="/lets-talk" className="block text-sm text-[#6f7074] hover:text-[#1c75c0] transition-colors duration-300 leading-loose py-2">
                  Let&apos;s Talk
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
              <div className="flex items-center space-x-3 mb-6">
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="group w-10 h-10 border border-[#6f7074]/30 rounded-full flex items-center justify-center hover:bg-[#1c75c0] hover:border-[#1c75c0] transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#6f7074] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

