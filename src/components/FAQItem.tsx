import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ } from '../types';

interface FAQItemProps {
  item: FAQ;
  defaultOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ item, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white transition-colors duration-200 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600]"
      >
        <span className="text-base sm:text-lg font-bold text-[#101C2C] tracking-tight">
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-[#101C2C] text-[#F7C600] rotate-45 border-[#101C2C]' : 'bg-slate-50 text-[#101C2C]'
          }`}
        >
          <Plus className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${item.id}`}
          className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#667085] leading-relaxed border-t border-slate-100 pt-4"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
};
