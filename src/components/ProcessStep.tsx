import React from 'react';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  isLast = false,
}) => {
  return (
    <div className="relative flex flex-col flex-1 group">
      {/* Desktop connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-7 left-1/2 w-full h-[2px] bg-gradient-to-r from-[#F7C600]/80 via-slate-200 to-slate-200 -z-0" />
      )}

      <div className="relative z-10 flex flex-col items-start bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#F7C600]/40">
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#07111D] group-hover:text-[#F7C600] transition-colors">
            {step}
          </span>
          <span className="w-8 h-[2px] bg-[#F7C600] rounded-full" />
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-[#101C2C] mb-2 tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-[#667085] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
