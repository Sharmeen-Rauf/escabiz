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
            {/* Background Image - Replace with your actual image path */}
            <div className="absolute inset-0 bg-[url('/hero-banner.jpg')] bg-cover bg-center bg-no-repeat">
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                More Clients. Less Stress. Real Results.
              </h1>

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

        {/* Add more sections below as needed */}
      </main>
    </>
  );
}
