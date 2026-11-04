import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';
import { DottedWorldMap } from '../shared/DottedWorldMap';

export const WhyChooseUsSection: React.FC = () => {
  const { whyChooseUs } = siteConfig;

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
      className="w-full bg-[#F6F9FC] border-b border-[#E5ECF3] py-16 sm:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Heading Row */}
        <div className="mb-10 sm:mb-12">
          <RevealOnScroll direction="left">
            <SectionTag label={whyChooseUs.pill} withDot className="bg-white" />
          </RevealOnScroll>
          <div className="mt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <h2
              id="why-choose-heading"
              className="font-outfit font-light text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.025em] text-[#0B0B0C] max-w-[600px]"
            >
              Why patients choose{' '}
              <span className="font-editorial font-semibold text-[#1E9BF0] text-[40px] sm:text-[54px] lg:text-[64px]">
                Aslam Dental Care
              </span>
            </h2>
            <RevealOnScroll direction="right" delay={0.15}>
              <p className="text-[13.5px] leading-[1.65] text-[#6B7280] lg:text-right max-w-[340px]">
                {whyChooseUs.rightParagraph}
              </p>
            </RevealOnScroll>
          </div>
        </div>

        {/* Bento Grid: 3 Columns, gap 16px, cards #FFFFFF, radius 24px */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Column 1, tall card: Authentic Dotted Map UI + radar indicator on Karachi + title & text at bottom */}
          <RevealOnScroll delay={0.05} className="h-full">
            <div className="relative h-full rounded-[24px] bg-white border border-[#E8EEF4] p-6 sm:p-7 flex flex-col justify-between min-h-[340px] lg:min-h-[380px] overflow-hidden shadow-[0_12px_32px_rgba(15,30,50,0.04)]">
              <DottedWorldMap variant="card" />

              <div className="relative z-10 mt-5">
                <h3 className="font-outfit text-[17px] font-semibold text-[#0B0B0C]">
                  {whyChooseUs.col1.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#6B7280]">
                  {whyChooseUs.col1.text}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Column 2: Two stacked cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Top card: Qualified Doctor */}
            <RevealOnScroll delay={0.12} className="flex-1">
              <div className="h-full rounded-[24px] bg-white border border-[#E8EEF4] p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(15,30,50,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16px] font-semibold text-[#0B0B0C]">
                    {whyChooseUs.col2Top.title}
                  </h3>
                  <img
                    src="/images/icon-3d-implant.png"
                    alt=""
                    className="w-9 h-9 object-contain"
                  />
                </div>
                <p className="mt-4 text-[13px] leading-[1.6] text-[#6B7280]">
                  {whyChooseUs.col2Top.text}
                </p>
              </div>
            </RevealOnScroll>

            {/* Bottom card: Modern Technology & Affordable Care + 5 overlapping real patient avatars */}
            <RevealOnScroll delay={0.2} className="flex-1">
              <div className="h-full rounded-[24px] bg-white border border-[#E8EEF4] p-6 sm:p-7 flex flex-col justify-between shadow-[0_12px_32px_rgba(15,30,50,0.04)]">
                <h3 className="text-[16px] font-semibold text-[#0B0B0C]">
                  {whyChooseUs.col2Bottom.title}
                </h3>

                {/* Row of 5 overlapping circular patient avatars (32px, white border) */}
                <div className="my-3.5 flex items-center -space-x-2">
                  {whyChooseUs.col2Bottom.avatars.map((avatar, i) => (
                    <img
                      key={avatar}
                      src={avatar}
                      alt={`Happy patient ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover bg-[#E0F2FE] shadow-2xs"
                      loading="lazy"
                    />
                  ))}
                  <span className="pl-4 text-[11px] font-semibold text-[#1E9BF0]">
                    5,000+ Smiles
                  </span>
                </div>

                <p className="text-[13px] leading-[1.6] text-[#6B7280]">
                  {whyChooseUs.col2Bottom.text}
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Column 3: Tall image card (real smiling patient, bottom-left white text, bottom-right 44px round white arrow button) */}
          <RevealOnScroll delay={0.25} className="h-full">
            <a
              href="#transformations"
              className="group relative h-full rounded-[24px] overflow-hidden min-h-[340px] lg:min-h-[380px] aspect-[4/5] lg:aspect-auto block bg-[#E2E8F0] shadow-[0_14px_36px_rgba(15,30,50,0.08)]"
            >
              <img
                src={whyChooseUs.col3.image}
                alt="Smiling patient at Aslam Dental Care"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <span className="text-white text-[16px] font-medium leading-snug max-w-[180px]">
                  {whyChooseUs.col3.caption}
                </span>
                <span className="w-[44px] h-[44px] rounded-full bg-white text-[#0B0B0C] flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[#1E9BF0] group-hover:text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
            </a>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
