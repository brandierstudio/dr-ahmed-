import React from 'react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';

interface PrimaryButtonProps {
  label?: string;
  variant?: 'default' | 'hero';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label = 'Book Appointment',
  variant = 'default',
  href,
  onClick,
  className = '',
  type = 'button',
  ariaLabel,
}) => {
  if (variant === 'hero') {
    const heroContent = (
      <>
        <span className="pl-6 pr-3 text-[15px] font-medium text-[#0B0B0C] whitespace-nowrap">
          {label}
        </span>
        <span className="w-11 h-11 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#1E9BF0]">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </>
    );

    const baseHeroClasses = `group inline-flex items-center justify-between h-[56px] min-w-[250px] sm:min-w-[270px] px-1.5 rounded-full bg-white shadow-[0_16px_40px_rgba(15,30,50,0.10)] hover:shadow-[0_20px_50px_rgba(30,155,240,0.22)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E9BF0] ${className}`;

    if (href) {
      return (
        <a href={href} onClick={onClick} aria-label={ariaLabel || label} className={baseHeroClasses}>
          {heroContent}
        </a>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        aria-label={ariaLabel || label}
        className={baseHeroClasses}
      >
        {heroContent}
      </button>
    );
  }

  // Page 6 Global Component: Black pill button with inner Aslam blue gradient pill that expands on hover
  const defaultContent = (
    <>
      {/* Expanding inner blue gradient pill */}
      <span
        className="absolute left-1.5 top-1.5 bottom-1.5 w-[68px] group-hover:w-[calc(100%-12px)] rounded-full bg-gradient-to-r from-[#1E9BF0] to-[#6CC4FF] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(30,155,240,0.45)]"
        aria-hidden="true"
      >
        {/* Dotted / pixel arrow icon in default state */}
        <svg
          className="w-5 h-5 text-[#0B0B0C] transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="5" cy="12" r="1.4" />
          <circle cx="9" cy="12" r="1.4" />
          <circle cx="13" cy="12" r="1.4" />
          <circle cx="17" cy="12" r="1.4" />
          <circle cx="13" cy="8" r="1.4" />
          <circle cx="15.5" cy="10" r="1.4" />
          <circle cx="13" cy="16" r="1.4" />
          <circle cx="15.5" cy="14" r="1.4" />
        </svg>

        {/* Centered phone-ringing icon in hover state */}
        <PhoneCall className="w-5 h-5 text-[#0B0B0C] absolute opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
      </span>

      {/* Label on the right */}
      <span className="relative z-10 pl-[82px] pr-7 text-[16px] sm:text-[18px] font-medium text-white whitespace-nowrap transition-opacity duration-200 group-hover:opacity-0">
        {label}
      </span>
    </>
  );

  const baseDefaultClasses = `group relative inline-flex items-center h-[56px] rounded-full bg-[#0B0B0C] border border-white/15 shadow-[0_14px_34px_rgba(11,11,12,0.22)] hover:shadow-[0_18px_44px_rgba(30,155,240,0.32)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E9BF0] cursor-pointer ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel || label}
        className={baseDefaultClasses}
      >
        {defaultContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={baseDefaultClasses}
    >
      {defaultContent}
    </button>
  );
};
