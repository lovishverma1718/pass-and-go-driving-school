import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'whatsapp' | 'sms';
  icon?: 'arrow-right' | 'arrow-up-right' | 'none';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon = 'arrow-up-right',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C600] focus-visible:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-[#F7C600] text-[#101C2C] px-6 py-3.5 hover:bg-[#FFD21A] hover:scale-[1.02] shadow-[0_8px_24px_rgba(247,198,0,0.22)] hover:shadow-[0_12px_28px_rgba(247,198,0,0.32)] border border-[#F7C600]/30',
    secondary:
      'bg-[#101C2C] text-white px-6 py-3.5 hover:bg-[#1A2E46] hover:scale-[1.02] shadow-sm border border-white/10',
    glass:
      'bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white px-6 py-3.5 hover:scale-[1.02] shadow-sm',
    outline:
      'border border-slate-300 text-[#101C2C] bg-white hover:border-[#F7C600] hover:bg-[#F7C600]/5 px-6 py-3.5 hover:scale-[1.02]',
    whatsapp:
      'bg-[#25D366] text-white px-6 py-3.5 hover:bg-[#20BA5A] hover:scale-[1.02] shadow-[0_8px_24px_rgba(37,211,102,0.25)] font-semibold',
    sms:
      'bg-[#007AFF] text-white px-6 py-3.5 hover:bg-[#0066D6] hover:scale-[1.02] shadow-[0_8px_24px_rgba(0,122,255,0.25)] font-semibold',
  };

  const content = (
    <>
      <span>{children}</span>
      {icon === 'arrow-up-right' && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
      {icon === 'arrow-right' && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClass = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('sms:');
    return (
      <a
        href={href}
        className={combinedClass}
        target={isExternal && href.startsWith('http') ? '_blank' : undefined}
        rel={isExternal && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClass} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
    >
      {content}
    </button>
  );
};
