import React from 'react';
import { Check, Sparkles, Phone } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { PrimaryButton } from '../shared/PrimaryButton';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

interface CarePackagesSectionProps {
  onSelectPlan: (planTreatmentName: string) => void;
}

export const CarePackagesSection: React.FC<CarePackagesSectionProps> = ({ onSelectPlan }) => {
  const { carePackages } = siteConfig;

  const handleChoosePlan = (planName: string) => {
    const mapped =
      planName === 'Essential Care'
        ? 'Essential Care Package (Rs 2,500)'
        : planName === 'Smile Makeover'
        ? 'Smile Makeover Package (from Rs 25,000)'
        : 'Free 15-Min Consultation';
    onSelectPlan(mapped);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="w-full bg-[#F6F9FC] border-y border-[#E5ECF3] py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          {/* Heading (NO billing toggle as instructed) */}
          <div className="text-center max-w-[600px] mx-auto">
            <RevealOnScroll>
              <SectionTag label={carePackages.pill} withDot className="bg-white" />
            </RevealOnScroll>
            <h2
              id="packages-heading"
              className="mt-4 font-outfit font-light text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.025em] text-[#0B0B0C]"
            >
              Care That Fits{' '}
              <span className="font-editorial font-semibold text-[#1E9BF0] text-[40px] sm:text-[54px] lg:text-[64px]">
                Every Smile
              </span>
            </h2>
            <RevealOnScroll delay={0.15}>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-[#6B7280]">
                {carePackages.subtitle}
              </p>
            </RevealOnScroll>
          </div>

          {/* Two Plan Cards inside a light-grey (#F0F3F7) rounded panel (radius 32px) */}
          <RevealOnScroll delay={0.2}>
            <div className="mt-8 sm:mt-10 max-w-[840px] mx-auto rounded-[32px] bg-[#F0F3F7] p-3 sm:p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {carePackages.plans.map((plan) => {
                const isPopular = plan.isPopular;
                return (
                  <div
                    key={plan.id}
                    className={`rounded-[24px] p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                      isPopular
                        ? 'bg-white shadow-[0_16px_40px_rgba(30,155,240,0.12),inset_0_0_24px_rgba(108,196,255,0.12)] border border-[#1E9BF0]/20'
                        : 'bg-[#F8FAFC] border border-white'
                    }`}
                  >
                    <div>
                      {/* Top row: 40px rounded app-icon at top-left + 'Most Popular' pill at top-right */}
                      <div className="flex items-center justify-between gap-2">
                        {!isPopular ? (
                          <div
                            className="w-10 h-10 rounded-[12px] bg-[#1F2937] shadow-sm flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <span className="w-3 h-3 rounded-full bg-white" />
                          </div>
                        ) : (
                          <div
                            className="w-10 h-10 rounded-[12px] bg-white shadow-sm border border-[#E8EBEE] flex items-center justify-center"
                            aria-hidden="true"
                          >
                            <img
                              src="/images/icon-3d-tooth.png"
                              alt=""
                              className="w-7 h-7 object-contain"
                            />
                          </div>
                        )}

                        {isPopular && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-[#E8EBEE] text-[10px] font-semibold text-[#0B0B0C] shadow-2xs">
                            <Sparkles className="w-3 h-3 text-[#1E9BF0]" />
                            <span>Most Popular</span>
                          </span>
                        )}
                      </div>

                      {/* Plan name 16px & 12px grey subtitle */}
                      <h3 className="mt-5 font-outfit font-semibold text-[17px] text-[#0B0B0C]">
                        {plan.name}
                      </h3>
                      <p className="text-[12px] text-[#6B7280] mt-0.5">{plan.subtitle}</p>

                      {/* Price: 40px Outfit Light with light-grey decimal and small '/visit' */}
                      <div className="mt-4 flex items-baseline gap-1">
                        {plan.pricePrefix && (
                          <span className="text-[13px] text-[#6B7280] mr-1">
                            {plan.pricePrefix}
                          </span>
                        )}
                        <span className="font-outfit font-light text-[36px] sm:text-[40px] leading-none text-[#0B0B0C] tracking-tight tabular-nums">
                          {plan.priceMain}
                        </span>
                        {plan.priceDecimal && (
                          <span className="font-outfit font-light text-[26px] text-[#9CA3AF] leading-none">
                            {plan.priceDecimal}
                          </span>
                        )}
                        <span className="text-[12px] text-[#6B7280] ml-1">{plan.priceUnit}</span>
                      </div>

                      {/* Hairline divider */}
                      <hr className="my-5 border-t border-black/10" />

                      {/* 'What's included:' 11px bold + checklist rows */}
                      <div className="text-[11px] font-bold text-[#0B0B0C] mb-3">
                        What&apos;s included:
                      </div>
                      <ul className="space-y-2.5">
                        {plan.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-[12.5px] text-[#4B5563]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#1E9BF0] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Black pill button with a subtle blue glowing border at the bottom */}
                    <div className="mt-7">
                      <button
                        type="button"
                        onClick={() => handleChoosePlan(plan.name)}
                        className="w-full p-[1.5px] rounded-full bg-gradient-to-r from-[#1E9BF0] via-[#6CC4FF] to-[#1E9BF0] shadow-[0_8px_24px_rgba(30,155,240,0.22)] hover:shadow-[0_12px_30px_rgba(30,155,240,0.35)] transition-all cursor-pointer"
                      >
                        <span className="block w-full py-2.5 px-5 rounded-full bg-[#0B0B0C] text-white text-[12px] font-medium hover:bg-[#131415] transition-colors">
                          {plan.ctaLabel}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* CONSULTATION BANNER (BELOW THE PLANS): Wide card (radius 32px) with soft blurred pastel mesh gradient */}
          <RevealOnScroll delay={0.28}>
            <div className="mt-6 max-w-[840px] mx-auto rounded-[32px] bg-gradient-to-r from-[#E0F2FE] via-[#F0F9FF] to-[#E0E7FF] p-6 sm:p-8 text-center relative overflow-hidden shadow-[0_14px_35px_rgba(15,30,50,0.05)] border border-[#BAE6FD]/60">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(30,155,240,0.14),transparent_60%)]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Centre: Dr. Fahad's round avatar (48px) overlapped by a white circle with a phone icon */}
                <div className="flex items-center justify-center">
                  <img
                    src={siteConfig.doctor.photo}
                    alt={siteConfig.doctor.name}
                    className="w-12 h-12 rounded-full object-cover object-top border-2 border-white shadow-md"
                    loading="lazy"
                  />
                  <span className="w-10 h-10 -ml-3 rounded-full bg-white text-[#0B0B0C] border border-[#E8EBEE] shadow-md flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#1E9BF0]" />
                  </span>
                </div>

                <h3 className="mt-3.5 font-outfit font-medium text-[17px] sm:text-[19px] text-[#0B0B0C]">
                  {carePackages.consultationBanner.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-[#4B5563]">
                  {carePackages.consultationBanner.subtitle}
                </p>

                <div className="mt-5">
                  <PrimaryButton
                    label={carePackages.consultationBanner.ctaLabel}
                    onClick={() => handleChoosePlan('Consultation')}
                  />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
