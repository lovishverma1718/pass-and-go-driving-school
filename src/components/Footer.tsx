import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { INSTRUCTOR, SERVICE_AREAS } from '../data/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07111D] text-white pt-16 md:pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative road line accent */}
      <div className="absolute top-0 left-0 right-0 road-line" />

      <div className="max-w-[1380px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo isLight={true} className="mb-4" />
            <p className="text-white/80 font-semibold text-base mt-2">
              {INSTRUCTOR.tagline}
            </p>
            <p className="text-white/60 text-sm mt-1 max-w-sm leading-relaxed">
              {INSTRUCTOR.subtagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="lane-dash" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F7C600]">
                {INSTRUCTOR.corePillars}
              </span>
            </div>
            <p className="text-xs text-white/50 mt-4">
              Instructor: <span className="text-white font-medium">{INSTRUCTOR.name}</span>
              <span className="block text-[#F7C600]/80">{INSTRUCTOR.title}</span>
            </p>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F7C600] mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-white hover:text-[#F7C600] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:text-[#F7C600] transition-colors">
                  Driving Lessons
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:text-[#F7C600] transition-colors">
                  About the Instructor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:text-[#F7C600] transition-colors">
                  Contact / Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Driving Lessons (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F7C600] mb-4">
              Driving Lessons
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <Link to="/services#class-5" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Class 5 Lessons</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7C600]" />
                </Link>
              </li>
              <li>
                <Link to="/services#class-7" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Class 7 Lessons</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7C600]" />
                </Link>
              </li>
              <li>
                <Link to="/services#road-test-prep" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Road Test Preparation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7C600]" />
                </Link>
              </li>
              <li>
                <Link to="/services#refresher" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Refresher Lessons</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#F7C600]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#F7C600] mb-4">
              Service Areas & Contact
            </h3>
            
            <div className="flex items-start gap-2.5 text-xs text-white/75 mb-4">
              <MapPin className="w-4 h-4 text-[#F7C600] flex-shrink-0 mt-0.5" />
              <span>
                {SERVICE_AREAS.join(' • ')}
              </span>
            </div>

            <div className="flex flex-col gap-2.5 mt-2">
              <a
                href={INSTRUCTOR.phoneTel}
                className="inline-flex items-center gap-2.5 text-sm font-semibold text-white hover:text-[#F7C600] transition-colors p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#F7C600]/40"
              >
                <Phone className="w-4 h-4 text-[#F7C600]" />
                <span>{INSTRUCTOR.phone}</span>
              </a>

              <a
                href={INSTRUCTOR.emailMailto}
                className="inline-flex items-center gap-2.5 text-xs text-white/80 hover:text-white transition-colors p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 break-all"
              >
                <Mail className="w-4 h-4 text-[#F7C600] flex-shrink-0" />
                <span>{INSTRUCTOR.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Pass ’N’ Go Driving School. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F7C600]" />
            <span>British Columbia, Canada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
