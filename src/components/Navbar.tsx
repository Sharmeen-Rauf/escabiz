'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {

  useEffect(() => {
    // DESKTOP: hover open
    function enableHoverDropdowns() {
      document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
        dropdown.onmouseenter = null;
        dropdown.onmouseleave = null;

        dropdown.addEventListener('mouseenter', function () {
          if (window.innerWidth > 992) {
            const menu = this.querySelector('.dropdown-menu') as HTMLElement;
            this.classList.add('show');
            if (menu) menu.classList.add('show');
            const toggle = this.querySelector('.dropdown-toggle') as HTMLElement;
            if (toggle) toggle.setAttribute('aria-expanded', 'true');
          }
        });
        
        dropdown.addEventListener('mouseleave', function () {
          if (window.innerWidth > 992) {
            const menu = this.querySelector('.dropdown-menu') as HTMLElement;
            this.classList.remove('show');
            if (menu) menu.classList.remove('show');
            const toggle = this.querySelector('.dropdown-toggle') as HTMLElement;
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }

    // MOBILE: click/tap toggles submenu (accordion style)
    function enableMobileDropdownToggles() {
      document.querySelectorAll('.navbar .nav-item.dropdown > .nav-link.dropdown-toggle').forEach(function (toggle) {
        toggle.onclick = null;

        toggle.addEventListener('click', function (e) {
          if (window.innerWidth <= 992) {
            e.preventDefault();
            const parent = this.parentElement as HTMLElement;
            const menu = parent.querySelector('.dropdown-menu') as HTMLElement;

            // Close other open dropdowns in mobile menu
            document.querySelectorAll('.navbar .nav-item.dropdown').forEach(function (other) {
              if (other !== parent) {
                other.classList.remove('show');
                const otherMenu = other.querySelector('.dropdown-menu') as HTMLElement;
                if (otherMenu) otherMenu.classList.remove('show');
                const otherToggle = other.querySelector('.dropdown-toggle') as HTMLElement;
                if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
              }
            });

            // Toggle current
            const isOpen = parent.classList.toggle('show');
            if (menu) menu.classList.toggle('show', isOpen);
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
          }
        });
      });
    }

    // Initialize behaviors
    function initMenus() {
      document.querySelectorAll('.navbar .dropdown-menu').forEach((m) => m.classList.remove('show'));
      document.querySelectorAll('.navbar .dropdown').forEach((d) => d.classList.remove('show'));
      enableHoverDropdowns();
      enableMobileDropdownToggles();
    }

    initMenus();

    // Re-init on resize
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        document.querySelectorAll('.navbar .dropdown-menu').forEach((m) => m.classList.remove('show'));
        document.querySelectorAll('.navbar .dropdown').forEach((d) => d.classList.remove('show'));
        initMenus();
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <>
      <header className="custom-header-wrapper">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            height: '60px',
            zIndex: 9999,
          }}
        >
          <div className="container-fluid px-4">
            {/* Logo */}
            <Link className="navbar-brand d-flex align-items-center" href="/">
              <div style={{ maxHeight: '40px', width: 'auto' }}>
                {/* Replace with actual logo image */}
                <span style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>
                  EscaBiz
                </span>
              </div>
            </Link>

            {/* Toggler Button */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu"
              aria-controls="navbarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars text-white fs-3"></i>
            </button>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
              <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    HOME
                  </Link>
                </li>

                {/* Lead Development Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="leadDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LEAD DEVELOPMENT SYSTEM
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="leadDropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/b2b-lead-appointment-setup"
                      >
                        B2B Lead Appointment Setup
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/b2b-market-research-agency-escabiz"
                      >
                        B2B Industry Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/prospect-research-list-management-services-escabiz"
                      >
                        Prospect Research & List Mgmt
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/linkedin-automation-services-escabiz"
                      >
                        LinkedIn Outreach Automation
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/b2b-targeted-marketing-services-escabiz"
                      >
                        B2B Targeted Email Marketing
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Virtual Staff Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="vsaDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    VIRTUAL STAFF AUGMENTATION
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="vsaDropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/marketing-vsa"
                      >
                        Marketing VSA
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/sales-vsa-escabiz"
                      >
                        Sales VSA
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/recruiting-vsa-escabiz"
                      >
                        Recruiting VSA
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/finance-vsa-escabiz"
                      >
                        Finance VSA
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Industries Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="industriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    INDUSTRIES
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="industriesDropdown">
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/hr-and-recruiting-service"
                      >
                        HR and Recruiting
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.escabiz.com/commercial-cleaning"
                      >
                        Commercial Maintenance
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="http://www.escabiz.com/about-us">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://www.escabiz.com/lets-talk-1">
                    LET&apos;S TALK
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <style jsx>{`
        /* ========== Styling ========== */
        .navbar {
          transition: background-color 0.3s ease;
          height: 60px !important;
        }

        /* Logo smaller */
        .navbar-brand img {
          max-height: 40px !important;
          width: auto !important;
        }

        /* Nav links */
        .navbar-nav .nav-link {
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 600;
          padding: 6px 10px !important;
          text-transform: uppercase;
          position: relative;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        /* Hover underline */
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1c75c0;
          transition: width 0.3s ease;
        }
        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.active::after {
          width: 100%;
        }

        /* Dropdown styling */
        .dropdown-menu {
          border-radius: 8px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          padding: 8px 0;
          border: none;
          opacity: 0;
          transform-origin: top center;
          transform: translateY(-6px);
          transition: opacity 0.18s ease, transform 0.18s ease;
        }

        /* visible state */
        .dropdown-menu.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* items */
        .dropdown-item {
          font-size: 15px;
          color: #6f7074;
          transition: 0.3s;
          padding: 8px 16px;
          text-decoration: none;
          display: block;
        }
        .dropdown-item:hover {
          color: #1c75c0;
          background-color: #f4f9ff;
        }

        /* Mobile adjustments */
        @media (max-width: 992px) {
          .navbar {
            background: #000 !important;
            height: auto !important;
          }
          .navbar-collapse {
            background-color: #000 !important;
            padding: 10px 0;
          }
          .navbar-nav .nav-link {
            font-size: 15px;
            padding: 10px 18px !important;
          }

          /* mobile dropdowns become block within the collapse */
          .dropdown-menu {
            position: static !important;
            background: none !important;
            box-shadow: none;
            transform: none;
            opacity: 1;
            display: none; /* hide until toggled by JS */
          }
          .dropdown.show > .dropdown-menu,
          .dropdown-menu.show {
            display: block !important;
          }

          .dropdown-item {
            color: #fff !important;
            padding-left: 30px;
          }
          .dropdown-item:hover {
            background-color: rgba(28, 117, 192, 0.3);
          }
          .navbar-toggler {
            padding: 4px 8px;
          }
        }
      `}</style>
    </>
  );
}

