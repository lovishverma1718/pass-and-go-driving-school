import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLight = false }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600] rounded-lg transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Pass ’N’ Go Driving School - Safe Driving. Confident Future."
    >
      <picture>
        <source srcSet="/images/logo.webp" type="image/webp" />
        <img
          src="/images/logo.png"
          alt="Pass ’N’ Go Driving School Logo"
          className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-opacity duration-300"
          width="170"
          height="54"
          loading="eager"
        />
      </picture>
      <div className="hidden sm:flex flex-col text-left">
        <span
          className={`text-xs md:text-sm font-extrabold tracking-tight uppercase leading-tight ${
            isLight ? 'text-white' : 'text-[#101C2C]'
          }`}
        >
          Pass ’N’ Go
        </span>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.14em] font-semibold text-[#F7C600]">
          Driving School
        </span>
      </div>
    </Link>
  );
};
