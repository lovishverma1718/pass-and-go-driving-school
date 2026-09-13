import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  showImage?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  showImage = false,
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-[24px] border border-slate-200 bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(7,17,29,0.12)] hover:border-[#F7C600]/40 overflow-hidden">
      {/* Top yellow accent indicator bar */}
      <div className="absolute top-0 left-8 right-8 h-[3px] bg-slate-100 group-hover:bg-[#F7C600] transition-colors duration-300 rounded-b" />

      <div>
        {/* Optional Image */}
        {showImage && service.image && (
          <div className="mb-6 h-48 w-full overflow-hidden rounded-xl bg-slate-100 relative">
            <picture>
              <source srcSet={service.image} type="image/webp" />
              <img
                src={service.image.replace('.webp', '.jpg')}
                alt={service.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </picture>
            <div className="absolute top-3 left-3 bg-[#07111D]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
              {service.badge}
            </div>
          </div>
        )}

        {/* Badge if no image */}
        {!showImage && (
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F7C600]/10 text-[#07111D] border border-[#F7C600]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F7C600]" />
              {service.badge}
            </span>
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-[#101C2C] tracking-tight group-hover:text-[#07111D] transition-colors">
          {service.title}
        </h3>

        <p className="mt-3 text-sm md:text-base text-[#667085] leading-relaxed">
          {service.summary}
        </p>

        {/* Benefits list */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-[#101C2C]/90">
              <CheckCircle2 className="w-4 h-4 text-[#F7C600] flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4">
        <Link
          to={service.href}
          className="inline-flex items-center justify-between w-full font-bold text-xs md:text-sm text-[#101C2C] group-hover:text-[#07111D] py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-[#F7C600]/15 transition-all duration-200"
        >
          <span>{service.ctaText}</span>
          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-[#101C2C] group-hover:bg-[#F7C600] group-hover:translate-x-1 transition-all">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </div>
  );
};
