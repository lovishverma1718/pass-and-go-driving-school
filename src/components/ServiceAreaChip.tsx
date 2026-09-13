import React from 'react';
import { MapPin } from 'lucide-react';

interface ServiceAreaChipProps {
  name: string;
  className?: string;
  isLight?: boolean;
}

export const ServiceAreaChip: React.FC<ServiceAreaChipProps> = ({
  name,
  className = '',
  isLight = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 shadow-sm border ${
        isLight
          ? 'bg-white/10 text-white border-white/15 hover:border-[#F7C600]/50'
          : 'bg-[#101C2C] text-white border-[#101C2C] hover:border-[#F7C600]'
      } ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#F7C600] animate-pulse-subtle flex-shrink-0" />
      <span>{name}</span>
      <MapPin className="w-3.5 h-3.5 text-white/40 ml-0.5" />
    </div>
  );
};
