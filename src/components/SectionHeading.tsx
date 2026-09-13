import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  italicAccent?: string;
  description?: string;
  align?: 'left' | 'center';
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  italicAccent,
  description,
  align = 'left',
  isDark = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col ${
        isCenter ? 'items-center text-center mx-auto max-w-3xl' : 'items-start text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[2px] bg-[#F7C600] rounded-full" />
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#F7C600]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-[#101C2C]'
        }`}
      >
        {title}{' '}
        {italicAccent && (
          <span className="font-display italic font-normal text-[#F7C600]">
            {italicAccent}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isDark ? 'text-white/70' : 'text-[#667085]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
