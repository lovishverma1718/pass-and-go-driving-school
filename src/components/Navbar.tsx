import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';
import { INSTRUCTOR } from '../data/siteData';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Lessons', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 pt-3 md:pt-4 transition-all duration-300">
        <div className="max-w-[1380px] mx-auto">
          <nav
            aria-label="Main Navigation"
            className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-2.5 md:py-3 transition-all duration-300 ${
              isScrolled
                ? 'bg-[#081421]/95 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
                : 'bg-[#081421]/80 backdrop-blur-xl border border-white/10 shadow-lg'
            }`}
          >
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0">
              <Logo isLight={true} />
            </div>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-xs lg:text-[13px] font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-[#F7C600]'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F7C600]" />
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* Right: Quick Contact & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={INSTRUCTOR.phoneTel}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-[#F7C600] px-3 py-2 transition-colors duration-200"
                title={`Call Sukhdeep Dhillon at ${INSTRUCTOR.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#F7C600]" />
                <span className="hidden lg:inline">{INSTRUCTOR.phone}</span>
              </a>

              {onOpenQuote && (
                <button
                  onClick={onOpenQuote}
                  className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 px-3.5 py-2 rounded-full transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#F7C600]" />
                  <span>Get Quote</span>
                </button>
              )}

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-[#F7C600] hover:bg-[#FFD21A] text-[#101C2C] text-xs lg:text-[13px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(247,198,0,0.2)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book a Lesson</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={INSTRUCTOR.phoneTel}
                className="p-2 rounded-full bg-white/10 text-white hover:text-[#F7C600] transition-colors"
                aria-label="Call Pass ’N’ Go Driving School"
              >
                <Phone className="w-4 h-4 text-[#F7C600]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full text-white bg-white/10 hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F7C600]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 bg-[#07111D] flex flex-col justify-between px-6 pt-24 pb-8 md:hidden animate-fade-in"
        >
          {/* Subtle lane mark decorative background */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7C600]/20 to-transparent pointer-events-none" />

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mt-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F7C600]">
              Navigation
            </span>

            <div className="flex flex-col gap-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'Driving Lessons', path: '/services' },
                { name: 'About the Instructor', path: '/about' },
                { name: 'Contact / Book', path: '/contact' },
              ].map((link, idx) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${idx * 60}ms` }}
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#F7C600]' : 'text-white hover:text-[#F7C600]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#F7C600]" />}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Footer CTAs */}
          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#F7C600] text-[#101C2C] font-bold py-3.5 px-6 rounded-full text-center shadow-gold-glow"
            >
              <span>Book a Lesson</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={INSTRUCTOR.phoneTel}
              className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3.5 px-6 rounded-full text-center border border-white/15"
            >
              <Phone className="w-4 h-4 text-[#F7C600]" />
              <span>Call {INSTRUCTOR.phone}</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-xs text-white/50">{INSTRUCTOR.tagline}</p>
              <p className="text-[11px] text-[#F7C600] font-medium mt-0.5">
                Surrey • Newton • Delta • South Surrey • White Rock
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
