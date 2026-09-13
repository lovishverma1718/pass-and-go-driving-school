import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600] rounded-xl transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Pass ’N’ Go Driving School - Safe Driving. Confident Future."
    >
      <div className="bg-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl shadow-sm border border-white/20 group-hover:border-[#F7C600]/60 transition-all duration-200 flex items-center justify-center">
        <picture>
          <source srcSet="/images/logo.webp" type="image/webp" />
          <img
            src="/images/logo.png"
            alt="Pass ’N’ Go Driving School Logo"
            className="w-[125px] sm:w-[145px] md:w-[165px] h-auto object-contain transition-opacity duration-200"
            width="165"
            height="106"
            loading="eager"
          />
        </picture>
      </div>
    </Link>
  );
};
