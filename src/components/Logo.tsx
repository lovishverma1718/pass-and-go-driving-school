import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'sm' }) => {
  const imgSizes = {
    sm: 'h-14 sm:h-16 md:h-[68px] w-auto',
    md: 'h-16 sm:h-[72px] md:h-20 w-auto',
    lg: 'h-20 sm:h-24 w-auto',
  };

  const containerPadding = {
    sm: 'px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl',
    md: 'px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl',
    lg: 'px-5 py-3 rounded-2xl',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600] rounded-xl transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="Pass ’N’ Go Driving School - Safe Driving. Confident Future."
    >
      <div
        className={`bg-white shadow-sm border border-white/20 group-hover:border-[#F7C600]/60 transition-all duration-200 flex items-center justify-center ${containerPadding[size]}`}
      >
        <picture>
          <source srcSet="/images/logo.webp" type="image/webp" />
          <img
            src="/images/logo.png"
            alt="Pass ’N’ Go Driving School Logo"
            className={`${imgSizes[size]} object-contain transition-opacity duration-200`}
            loading="eager"
          />
        </picture>
      </div>
    </Link>
  );
};
