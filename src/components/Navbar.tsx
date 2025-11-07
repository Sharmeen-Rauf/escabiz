'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Initialize isScrolled based on pathname - home, lets-talk, about, hr-recruiting, marketing-vsa, b2b-appointment-setup, and lead gen pages start transparent
  const [isScrolled, setIsScrolled] = useState(pathname !== '/' && pathname !== '/lets-talk' && pathname !== '/about' && pathname !== '/industries/hr-recruiting' && pathname !== '/virtual-staff-augmentation/marketing-vsa' && pathname !== '/virtual-staff-augmentation/recruiting-vsa' && pathname !== '/b2b-appointment-setup' && pathname !== '/b2b-market-research-agency-escabiz' && pathname !== '/prospect-research-list-management-services-escabiz' && pathname !== '/linkedin-automation-services-escabiz' && pathname !== '/b2b-targeted-marketing-services-escabiz' && pathname !== '/industries/commercial-cleaning');

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 992;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Check if we're on pages with hero sections
      if (pathname === '/' || pathname === '/lets-talk' || pathname === '/about' || pathname === '/industries/hr-recruiting' || pathname === '/virtual-staff-augmentation/marketing-vsa' || pathname === '/virtual-staff-augmentation/recruiting-vsa' || pathname === '/b2b-appointment-setup' || pathname === '/b2b-market-research-agency-escabiz' || pathname === '/prospect-research-list-management-services-escabiz' || pathname === '/linkedin-automation-services-escabiz' || pathname === '/b2b-targeted-marketing-services-escabiz' || pathname === '/industries/commercial-cleaning') {
        // Pages with hero sections - check if scrolled past hero section
        const heroSection = document.querySelector('section[class*="min-h"]') as HTMLElement | null;
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          setIsScrolled(scrollY > heroHeight - 100);
        } else {
          setIsScrolled(scrollY > 50);
        }
      } else {
        // Other pages - show white navbar
        setIsScrolled(true);
      }
    };

    // Check initial scroll position and pathname
    handleScroll();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleDropdownToggle = (dropdownId: string, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    }
  };

  const handleDropdownHover = (dropdownId: string, isEntering: boolean) => {
    if (!isMobile) {
      setOpenDropdown(isEntering ? dropdownId : null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      <nav
        className={`relative transition-all duration-300 h-[70px] lg:h-[70px] ${
          isScrolled 
            ? 'bg-white shadow-md' 
            : 'bg-transparent backdrop-blur-[5px]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center h-full lg:flex-[0_0_auto]"
            onClick={closeMobileMenu}
          >
            <div className="max-h-[65px] w-auto">
              <Image
                src={isScrolled ? "/Logo_Revised(Grey).png" : "/Logo_Revised.png"}
                alt="EscaBiz Logo"
                width={180}
                height={65}
                className="h-[65px] w-auto object-contain transition-opacity duration-300"
                priority
                unoptimized={false}
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden border-0 bg-transparent p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#6f7074]' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop & Mobile Menu */}
            <div
            className={`
              absolute top-full left-0 right-0 lg:static lg:flex lg:items-center lg:justify-center lg:flex-1
              bg-black/95 lg:bg-transparent
              ${mobileMenuOpen ? 'block' : 'hidden lg:flex'}
            `}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:mb-0 lg:mx-auto lg:gap-2">
              {/* HOME */}
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link active block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-sm lg:text-[14px] font-normal capitalize relative transition-colors duration-300 ${
                    isScrolled ? 'text-[#6f7074]' : 'text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>

              {/* Lead Development Dropdown */}
              <li
                className="nav-item dropdown relative group"
                onMouseEnter={() => handleDropdownHover('lead', true)}
                onMouseLeave={() => handleDropdownHover('lead', false)}
              >
                <a
                  href="#"
                  className={`nav-link dropdown-toggle block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-sm lg:text-[14px] font-normal capitalize relative transition-colors duration-300 lg:flex lg:items-center lg:gap-1 ${
                    isScrolled ? 'text-[#6f7074]' : 'text-white'
                  }`}
                  onClick={(e) => handleDropdownToggle('lead', e)}
                  aria-expanded={openDropdown === 'lead'}
                >
                  Lead Development System
                  <svg
                    className="w-4 h-4 inline-block ml-1 hidden lg:block"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul
                  className={`
                    dropdown-menu absolute left-0 lg:left-0 lg:min-w-[220px] mt-0 lg:mt-2
                    bg-white lg:bg-white rounded-lg shadow-lg py-2
                    lg:opacity-0 lg:translate-y-[-6px] lg:transition-all lg:duration-[180ms]
                    ${openDropdown === 'lead' ? 'block lg:opacity-100 lg:translate-y-0' : 'hidden'}
                  `}
                >
                  {/* <li>
                    <Link
                      href="/b2b-appointment-setup"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Lead Generation System
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="/b2b-appointment-setup"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      B2B Lead Appointment Setup
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/b2b-market-research-agency-escabiz"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      B2B Industry Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/prospect-research-list-management-services-escabiz"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Prospect Research & List Mgmt
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/linkedin-automation-services-escabiz"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      LinkedIn Outreach Automation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/b2b-targeted-marketing-services-escabiz"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      B2B Targeted Email Marketing
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Virtual Staff Dropdown */}
              <li
                className="nav-item dropdown relative group"
                onMouseEnter={() => handleDropdownHover('vsa', true)}
                onMouseLeave={() => handleDropdownHover('vsa', false)}
              >
                <a
                  href="#"
                  className={`nav-link dropdown-toggle block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-sm lg:text-[14px] font-normal capitalize relative transition-colors duration-300 lg:flex lg:items-center lg:gap-1 ${
                    isScrolled ? 'text-[#6f7074]' : 'text-white'
                  }`}
                  onClick={(e) => handleDropdownToggle('vsa', e)}
                  aria-expanded={openDropdown === 'vsa'}
                >
                  Virtual Staff Augmentation
                  <svg
                    className="w-4 h-4 inline-block ml-1 hidden lg:block"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul
                  className={`
                    dropdown-menu absolute left-0 lg:left-0 lg:min-w-[220px] mt-0 lg:mt-2
                    bg-white lg:bg-white rounded-lg shadow-lg py-2
                    lg:opacity-0 lg:translate-y-[-6px] lg:transition-all lg:duration-[180ms]
                    ${openDropdown === 'vsa' ? 'block lg:opacity-100 lg:translate-y-0' : 'hidden'}
                  `}
                >
                  <li>
                    <Link
                      href="/virtual-staff-augmentation/marketing-vsa"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Marketing VSA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/virtual-staff-augmentation/sales-vsa"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Sales VSA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/virtual-staff-augmentation/recruiting-vsa"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Recruiting VSA
                    </Link>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/finance-vsa-escabiz"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Finance VSA
                    </a>
                  </li>
                </ul>
              </li>

              {/* Industries Dropdown */}
              <li
                className="nav-item dropdown relative group"
                onMouseEnter={() => handleDropdownHover('industries', true)}
                onMouseLeave={() => handleDropdownHover('industries', false)}
              >
                <a
                  href="#"
                  className={`nav-link dropdown-toggle block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-sm lg:text-[14px] font-normal capitalize relative transition-colors duration-300 lg:flex lg:items-center lg:gap-1 ${
                    isScrolled ? 'text-[#6f7074]' : 'text-white'
                  }`}
                  onClick={(e) => handleDropdownToggle('industries', e)}
                  aria-expanded={openDropdown === 'industries'}
                >
                  Industries
                  <svg
                    className="w-4 h-4 inline-block ml-1 hidden lg:block"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <ul
                  className={`
                    dropdown-menu absolute left-0 lg:left-0 lg:min-w-[220px] mt-0 lg:mt-2
                    bg-white lg:bg-white rounded-lg shadow-lg py-2
                    lg:opacity-0 lg:translate-y-[-6px] lg:transition-all lg:duration-[180ms]
                    ${openDropdown === 'industries' ? 'block lg:opacity-100 lg:translate-y-0' : 'hidden'}
                  `}
                >
                  <li>
                    <Link
                      href="/industries/hr-recruiting"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      HR & Recruiting Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/commercial-cleaning"
                      className="dropdown-item block px-4 py-2 text-xs lg:text-xs text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Commercial Cleaning
                    </Link>
                  </li>
                </ul>
              </li>

              {/* ABOUT US */}
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-sm lg:text-[14px] font-normal capitalize relative transition-colors duration-300 ${
                    isScrolled ? 'text-[#6f7074]' : 'text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>

              {/* LET'S TALK */}
              <li className="nav-item lg:ml-6">
                <Link
                  href="/lets-talk"
                  className={`nav-link block px-4 py-2.5 lg:px-6 lg:py-2.5 text-sm lg:text-[14px] font-semibold capitalize relative transition-all duration-300 rounded-lg lg:flex lg:items-center ${
                    isScrolled 
                      ? 'bg-[#1c75c0] text-white hover:bg-[#1565a0] shadow-md' 
                      : 'bg-[#1c75c0] text-white hover:bg-[#1565a0] shadow-md'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Let&apos;s Talk
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Nav link hover underline effect */
        .nav-link {
          text-decoration: none;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1c75c0;
          transition: width 0.3s ease;
        }

        /* Adjust underline color for white navbar */
        .bg-white .nav-link::after {
          background: #1c75c0;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Remove underline effect for button-style links */
        .nav-link.bg-\[#1c75c0\]::after {
          display: none;
        }

        /* Mobile dropdown styling */
        @media (max-width: 992px) {
          .dropdown-menu {
            position: static !important;
            background: transparent !important;
            box-shadow: none !important;
            transform: none !important;
            opacity: 1 !important;
          }

          .dropdown-item {
            color: #fff !important;
            padding-left: 30px !important;
          }

          .dropdown-item:hover {
            background-color: rgba(28, 117, 192, 0.3) !important;
          }
        }
      `}</style>
    </header>
  );
}
