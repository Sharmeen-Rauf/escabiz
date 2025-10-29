'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
        className="relative bg-black/85 backdrop-blur-[10px] transition-all duration-300 h-[60px] lg:h-[60px]"
      >
        <div className="w-full max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center h-full"
            onClick={closeMobileMenu}
          >
            <div className="max-h-[40px] w-auto">
              <Image
                src="/navbar logo.png"
                alt="EscaBiz Logo"
                width={120}
                height={40}
                className="h-[40px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden border-0 bg-transparent p-2 text-white"
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
              absolute top-full left-0 right-0 lg:static lg:flex lg:items-center lg:justify-end
              bg-black lg:bg-transparent
              ${mobileMenuOpen ? 'block' : 'hidden lg:flex'}
            `}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:mb-0">
              {/* HOME */}
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link active block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-white text-sm lg:text-[14px] font-semibold uppercase relative transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  HOME
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
                  className="nav-link dropdown-toggle block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-white text-sm lg:text-[14px] font-semibold uppercase relative transition-colors duration-300 lg:flex lg:items-center lg:gap-1"
                  onClick={(e) => handleDropdownToggle('lead', e)}
                  aria-expanded={openDropdown === 'lead'}
                >
                  LEAD DEVELOPMENT SYSTEM
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
                    dropdown-menu absolute left-0 lg:left-0 lg:min-w-[280px] mt-0 lg:mt-2
                    bg-white lg:bg-white rounded-lg shadow-lg py-2
                    lg:opacity-0 lg:translate-y-[-6px] lg:transition-all lg:duration-[180ms]
                    ${openDropdown === 'lead' ? 'block lg:opacity-100 lg:translate-y-0' : 'hidden'}
                  `}
                >
                  <li>
                    <a
                      href="http://www.escabiz.com/b2b-lead-appointment-setup"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      B2B Lead Appointment Setup
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/b2b-market-research-agency-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      B2B Industry Analysis
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/prospect-research-list-management-services-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Prospect Research & List Mgmt
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/linkedin-automation-services-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      LinkedIn Outreach Automation
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/b2b-targeted-marketing-services-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      B2B Targeted Email Marketing
                    </a>
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
                  className="nav-link dropdown-toggle block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-white text-sm lg:text-[14px] font-semibold uppercase relative transition-colors duration-300 lg:flex lg:items-center lg:gap-1"
                  onClick={(e) => handleDropdownToggle('vsa', e)}
                  aria-expanded={openDropdown === 'vsa'}
                >
                  VIRTUAL STAFF AUGMENTATION
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
                    dropdown-menu absolute left-0 lg:left-0 lg:min-w-[280px] mt-0 lg:mt-2
                    bg-white lg:bg-white rounded-lg shadow-lg py-2
                    lg:opacity-0 lg:translate-y-[-6px] lg:transition-all lg:duration-[180ms]
                    ${openDropdown === 'vsa' ? 'block lg:opacity-100 lg:translate-y-0' : 'hidden'}
                  `}
                >
                  <li>
                    <a
                      href="http://www.escabiz.com/marketing-vsa"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Marketing VSA
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/sales-vsa-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Sales VSA
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/recruiting-vsa-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Recruiting VSA
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/finance-vsa-escabiz"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
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
                  className="nav-link dropdown-toggle block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-white text-sm lg:text-[14px] font-semibold uppercase relative transition-colors duration-300 lg:flex lg:items-center lg:gap-1"
                  onClick={(e) => handleDropdownToggle('industries', e)}
                  aria-expanded={openDropdown === 'industries'}
                >
                  INDUSTRIES
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
                    dropdown-menu absolute left-0 lg:left-0 lg:min-w-[280px] mt-0 lg:mt-2
                    bg-white lg:bg-white rounded-lg shadow-lg py-2
                    lg:opacity-0 lg:translate-y-[-6px] lg:transition-all lg:duration-[180ms]
                    ${openDropdown === 'industries' ? 'block lg:opacity-100 lg:translate-y-0' : 'hidden'}
                  `}
                >
                  <li>
                    <a
                      href="http://www.escabiz.com/hr-and-recruiting-service"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      HR and Recruiting
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.escabiz.com/commercial-cleaning"
                      className="dropdown-item block px-4 py-2 text-[15px] text-[#6f7074] hover:text-[#1c75c0] hover:bg-[#f4f9ff] transition-colors duration-300"
                      onClick={closeMobileMenu}
                    >
                      Commercial Maintenance
                    </a>
                  </li>
                </ul>
              </li>

              {/* ABOUT US */}
              <li className="nav-item">
                <Link
                  href="/about"
                  className="nav-link block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-white text-sm lg:text-[14px] font-semibold uppercase relative transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  ABOUT US
                </Link>
              </li>

              {/* LET'S TALK */}
              <li className="nav-item">
                <a
                  href="http://www.escabiz.com/lets-talk-1"
                  className="nav-link block px-4 py-2.5 lg:px-2.5 lg:py-1.5 text-white text-sm lg:text-[14px] font-semibold uppercase relative transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  LET&apos;S TALK
                </a>
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

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
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
