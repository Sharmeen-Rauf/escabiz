import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero Banner Section */}
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/Gemini_Generated_Image_j3y59jj3y59jj3y5.png')] bg-cover bg-center bg-no-repeat">
              {/* Gradient Overlay - Dark on left, fading to original on right */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>
            {/* Fallback background color if image not loaded */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-2xl">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                More Clients. Less Stress. Real Results.
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-8 max-w-xl">
                We specialize in helping companies scale faster by providing qualified leads, guaranteed sales, and full sales team support. Let us handle client acquisition.
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#1c75c0] border-2 border-[#1c75c0] rounded-lg bg-transparent hover:bg-[#1c75c0] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1c75c0] focus:ring-offset-2 focus:ring-offset-black/50">
                Get Qualified Leads
              </button>
            </div>
          </div>
        </section>

        {/* Digital Future Section */}
        <section className="w-full bg-white py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Subtitle */}
              <p className="text-sm md:text-base font-semibold text-[#1c75c0] uppercase tracking-wide mb-4">
                Digital Future
              </p>
              
              {/* Heading */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Scaling Businesses with Precision & Performance
              </h3>
              
              {/* Paragraph */}
              <p className="text-base md:text-lg lg:text-xl text-[#6f7074] leading-relaxed max-w-3xl mx-auto">
                At EscaBiz, we don&apos;t just find prospects—we build predictable growth systems. Our expertise, technology, and strategic sales approach ensure your company gets the right clients at the right time.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: Data-Driven Targeting */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
                {/* Icon - Data Visualization Monitor */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Monitor Frame */}
                    <rect x="4" y="4" width="16" height="12" rx="1" strokeWidth="2" />
                    {/* Screen Content - Bar Chart */}
                    <rect x="7" y="10" width="2" height="4" fill="currentColor" />
                    <rect x="10" y="8" width="2" height="6" fill="currentColor" />
                    <rect x="13" y="9" width="2" height="5" fill="currentColor" />
                    {/* Pie Chart */}
                    <circle cx="17.5" cy="10.5" r="3" strokeWidth="1.5" />
                    <path d="M17.5 7.5 L17.5 10.5 L20.5 10.5" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Monitor Stand */}
                    <rect x="11" y="16" width="2" height="2" fill="currentColor" />
                    <rect x="9" y="18" width="6" height="1" fill="currentColor" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Data-Driven Targeting
                </h4>
                
                {/* Paragraph */}
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  Using advanced research and analytics, we identify decision-makers who need your services today—not just cold leads for tomorrow.
                </p>
              </div>

              {/* Card 2: Customized Outreach */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
                {/* Icon - People/Group */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Central larger person */}
                    <circle cx="12" cy="8" r="3" strokeWidth="2" />
                    <path d="M12 11v3" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 18v-4l3-1" strokeWidth="2" strokeLinecap="round" />
                    <path d="M15 18v-4l-3-1" strokeWidth="2" strokeLinecap="round" />
                    {/* Left person */}
                    <circle cx="6" cy="10" r="2" strokeWidth="1.5" />
                    <path d="M6 12v2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4 15l2-1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Right person */}
                    <circle cx="18" cy="10" r="2" strokeWidth="1.5" />
                    <path d="M18 12v2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 15l-2-1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Top person */}
                    <circle cx="12" cy="3" r="2" strokeWidth="1.5" />
                    <path d="M12 5v1" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Bottom person */}
                    <circle cx="12" cy="18" r="2" strokeWidth="1.5" />
                    <path d="M12 20v1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Customized Outreach
                </h4>
                
                {/* Paragraph */}
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  We create personalized campaigns and sales pitches that resonate with your ideal clients, increasing response and conversion rates.
          </p>
        </div>

              {/* Card 3: Relationship Building */}
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col">
                {/* Icon - Handshake with Gear */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Gear above */}
                    <circle cx="12" cy="4" r="2.5" strokeWidth="1.5" />
                    <circle cx="12" cy="4" r="1.5" strokeWidth="1" />
                    <path d="M12 1.5v2.5M12 5.5v1M15 4h-2.5M9.5 4H7M13.5 6.5l1.7-1M9.8 2.2l1 1.7M10.5 6.5l-1.7-1M14.2 2.2l-1 1.7" strokeWidth="1" strokeLinecap="round" />
                    {/* Left hand */}
                    <path d="M5 12c0-1 1-2 2-2h2c1 0 2 1 2 2v2c0 1-1 2-2 2H7c-1 0-2-1-2-2v-2z" strokeWidth="2" />
                    <path d="M5 14l-1 2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 12l-1 1" strokeWidth="1" strokeLinecap="round" />
                    {/* Right hand */}
                    <path d="M19 12c0-1-1-2-2-2h-2c-1 0-2 1-2 2v2c0 1 1 2 2 2h2c1 0 2-1 2-2v-2z" strokeWidth="2" />
                    <path d="M19 14l1 2" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 12l1 1" strokeWidth="1" strokeLinecap="round" />
                    {/* Handshake connection */}
                    <path d="M11 14h2" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 14l1-1M13 14l1-1" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                
                {/* Heading */}
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Relationship Building
                </h4>
                
                {/* Paragraph */}
                <p className="text-base text-[#6f7074] leading-relaxed flex-grow">
                  Beyond the first sale, we help you build lasting relationships that turn one-time contracts into repeat business and loyal partnerships.
                </p>
              </div>
            </div>
        </div>
        </section>
      </main>
    </>
  );
}
