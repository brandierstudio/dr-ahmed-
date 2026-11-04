import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig, ServiceItem } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

interface ServicesSectionProps {
  onSelectTreatment: (treatmentTitle: string) => void;
}

const ServiceOutlineIcon: React.FC<{ iconName: ServiceItem['iconName'] }> = ({ iconName }) => {
  switch (iconName) {
    case 'implant':
      return (
        <svg className="w-12 h-12 text-[#1E9BF0]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 10c-4 0-6 3-6 7s2.5 7 6 8h16c3.5-1 6-4 6-8s-2-7-6-7c-3 0-5 2-8 2s-5-2-8-2z" />
          <path d="M18 25h12M19 30h10M20 35h8M22 40h4" />
        </svg>
      );
    case 'braces':
      return (
        <svg className="w-12 h-12 text-[#1E9BF0]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="14" width="32" height="20" rx="10" />
          <path d="M8 24h32" />
          <rect x="14" y="20" width="6" height="8" rx="1.5" />
          <rect x="28" y="20" width="6" height="8" rx="1.5" />
        </svg>
      );
    case 'shield-tooth':
      return (
        <svg className="w-12 h-12 text-[#1E9BF0]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8c-4.5 0-7 3.5-7 8.5 0 6 3 10.5 4.8 16 1 3.2 2.2 4.5 3.7 4.5s2.5-2.8 3.8-7c.9-3 2.1-4 3.7-4s2.8 1 3.7 4c1.3 4.2 2.3 7 3.8 7s2.7-1.3 3.7-4.5C38 27 41 22.5 41 16.5 41 11.5 38.5 8 34 8c-3.5 0-6 2.2-9 2.2S19.5 8 16 8z" />
          <path d="M20 20l3 3 6-6" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg className="w-12 h-12 text-[#1E9BF0]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 8l3.5 10.5L38 22l-10.5 3.5L24 36l-3.5-10.5L10 22l10.5-3.5L24 8z" />
          <path d="M36 8l1.5 4.5L42 14l-4.5 1.5L36 20l-1.5-4.5L30 14l4.5-1.5L36 8z" />
        </svg>
      );
    case 'root-canal':
      return (
        <svg className="w-12 h-12 text-[#1E9BF0]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8c-4.5 0-7 3.5-7 8.5 0 6 3 10.5 4.8 16 1 3.2 2.2 4.5 3.7 4.5s2.5-2.8 3.8-7c.9-3 2.1-4 3.7-4s2.8 1 3.7 4c1.3 4.2 2.3 7 3.8 7s2.7-1.3 3.7-4.5C38 27 41 22.5 41 16.5 41 11.5 38.5 8 34 8c-3.5 0-6 2.2-9 2.2S19.5 8 16 8z" />
          <path d="M18 18c0 5-1 10-1 14M30 18c0 5 1 10 1 14" strokeDasharray="2 2" />
        </svg>
      );
    case 'child-smile':
      return (
        <svg className="w-12 h-12 text-[#1E9BF0]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="15" />
          <path d="M18 21h.02M30 21h.02" strokeWidth="3" />
          <path d="M17 28c2 3.5 12 3.5 14 0" />
        </svg>
      );
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectTreatment }) => {
  const handleServiceClick = (title: string) => {
    onSelectTreatment(title);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full bg-white py-16 sm:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Standard Heading Pattern */}
        <div className="mb-10 sm:mb-12">
          <RevealOnScroll direction="left">
            <SectionTag label="Our Services" withDot />
          </RevealOnScroll>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              id="services-heading"
              className="font-outfit font-light text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.025em] text-[#0B0B0C]"
            >
              Treatments designed{' '}
              <span className="font-editorial font-semibold text-[#1E9BF0] text-[40px] sm:text-[54px] lg:text-[64px]">
                around you
              </span>
            </h2>
            <RevealOnScroll direction="right" delay={0.15}>
              <p className="text-[13.5px] leading-[1.65] text-[#6B7280] lg:text-right max-w-[320px]">
                From routine care to complete smile makeovers, all in one clinic.
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* 6 Cards, 3 Columns x 2 Rows, Gap 24px */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, idx) => (
            <RevealOnScroll key={service.id} delay={idx * 0.07}>
              <button
                type="button"
                onClick={() => handleServiceClick(service.title)}
                className="group relative w-full text-left bg-[#FBFDFE] hover:bg-white border border-[#E5ECF3] rounded-[20px] p-[28px] min-h-[196px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(30,155,240,0.12)] hover:border-[#1E9BF0]/30 focus-visible:outline-2 focus-visible:outline-[#1E9BF0] cursor-pointer"
              >
                <div className="relative z-10 pr-12">
                  <h3 className="font-outfit font-semibold text-[20px] text-[#0B0B0C] leading-snug group-hover:text-[#1E9BF0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.55] text-[#6B7280] line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Bottom-left: Round arrow button (44px) + 'Read more' */}
                <div className="relative z-10 mt-6 flex items-center gap-3">
                  <span className="w-[44px] h-[44px] rounded-full bg-white text-[#0B0B0C] shadow-[0_6px_20px_rgba(15,30,50,0.10)] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#1E9BF0] group-hover:text-white">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-[14px] font-medium text-[#6B7280] group-hover:text-[#0B0B0C] transition-colors">
                    Book treatment
                  </span>
                </div>

                {/* Bottom-right: Large light-grey (#F1F5F9) circle peeking from bottom-right corner with 48px outlined accent-blue icon */}
                <div
                  className="absolute -right-8 -bottom-8 w-[148px] h-[148px] rounded-full bg-[#F1F5F9] group-hover:bg-[#E0F2FE]/60 flex items-center justify-center pr-5 pb-5 transition-all duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <ServiceOutlineIcon iconName={service.iconName} />
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
