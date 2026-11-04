import React from 'react';
import { ArrowUpRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { StatCounter } from '../shared/StatCounter';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

export const AboutSection: React.FC = () => {
  const { about } = siteConfig;

  const chipIcons = [
    <Clock key="clock" className="w-3.5 h-3.5 text-[#1E9BF0]" />,
    <Sparkles key="sparkles" className="w-3.5 h-3.5 text-[#1E9BF0]" />,
    <ShieldCheck key="shield" className="w-3.5 h-3.5 text-[#1E9BF0]" />,
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full bg-white border-b border-[#EDF1F5] py-16 sm:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Row: Left tiny pill label; Right (~64% width) large three-line statement */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-10 sm:pb-14">
          <RevealOnScroll direction="left" className="shrink-0">
            <SectionTag label={about.pill} withDot />
          </RevealOnScroll>

          <h2
            id="about-heading"
            className="lg:w-[66%] font-outfit font-light text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.16] tracking-[-0.02em] text-[#0B0B0C]"
          >
            <AnimatedText text={about.statementBlack} />
            <span className="text-[#7A7F85]">
              <AnimatedText text={about.statementGrey} delayOffset={0.35} />
            </span>
          </h2>
        </div>

        {/* Bento Row: 3 Cards, equal height ~300px, gap 20px, radius 24px, background #F8FAFC */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Card 1: Tooth icon, 3-line 13px text, 3 inline feature chips, bottom black pill 'Contact Us' + circle arrow */}
          <RevealOnScroll delay={0.05} className="h-full">
            <div className="h-full rounded-[24px] bg-[#F8FAFC] border border-[#EDF2F7] p-6 sm:p-7 flex flex-col justify-between min-h-[290px] hover:shadow-[0_18px_45px_rgba(15,30,50,0.06)] transition-shadow">
              <div>
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8EBEE] flex items-center justify-center mb-4 shadow-2xs">
                  <img
                    src="/images/icon-3d-tooth.png"
                    alt=""
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <p className="text-[13.5px] leading-[1.65] text-[#0B0B0C]/85">{about.card1Text}</p>

                {/* Three tiny inline feature chips with icons */}
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {about.card1Chips.map((chip, index) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8EBEE] text-[11px] font-medium text-[#0B0B0C] shadow-2xs"
                    >
                      {chipIcons[index]}
                      <span>{chip}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: Black pill button 'Contact Us' with a black circle arrow beside it */}
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#0B0B0C] text-white text-[12px] font-medium hover:bg-[#1E9BF0] transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#contact"
                  aria-label="Go to Contact section"
                  className="w-10 h-10 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center hover:bg-[#1E9BF0] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 2 (Centre, image card): Full-bleed rounded photo of Dr. Fahad Aslam, title in white at top-left 'Meet Dr. Fahad' */}
          <RevealOnScroll delay={0.15} className="h-full">
            <div className="group relative h-full rounded-[24px] overflow-hidden min-h-[310px] lg:min-h-[290px] bg-[#E6EBEE] border border-[#E8EBEE] shadow-[0_14px_35px_rgba(15,30,50,0.08)]">
              <img
                src={siteConfig.doctor.photo}
                alt={siteConfig.doctor.fullNameWithCredentials}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none"
                aria-hidden="true"
              />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <h3 className="font-outfit font-normal text-[22px] sm:text-[24px] text-white drop-shadow-xs">
                  {about.card2Title}
                </h3>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium">
                  {siteConfig.doctor.credentials}
                </span>
              </div>
              <div className="absolute bottom-4 left-5 right-5 text-white/95 text-[12px] font-medium">
                {siteConfig.doctor.fullNameWithCredentials} · {siteConfig.doctor.role}
              </div>
            </div>
          </RevealOnScroll>

          {/* Card 3: Three tilted, overlapping rounded-square real photos (-8, 0, +10 deg) + caption at bottom */}
          <RevealOnScroll delay={0.25} className="h-full">
            <div className="group h-full rounded-[24px] bg-[#F8FAFC] border border-[#EDF2F7] p-6 sm:p-7 flex flex-col justify-between min-h-[290px] hover:shadow-[0_18px_45px_rgba(15,30,50,0.06)] transition-shadow">
              <div className="relative h-[175px] flex items-center justify-center pt-2">
                {/* Photo 1 (-8 deg) */}
                <div className="w-[108px] h-[108px] sm:w-[116px] sm:h-[116px] rounded-[20px] overflow-hidden border-2 border-white shadow-md -rotate-8 -mr-5 z-10 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-rotate-12">
                  <img
                    src={about.card3Photos[0].src}
                    alt={about.card3Photos[0].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Photo 2 (0 deg) */}
                <div className="w-[114px] h-[114px] sm:w-[122px] sm:h-[122px] rounded-[20px] overflow-hidden border-2 border-white shadow-lg rotate-0 z-20 -mt-3 transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={about.card3Photos[1].src}
                    alt={about.card3Photos[1].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Photo 3 (+10 deg) */}
                <div className="w-[108px] h-[108px] sm:w-[116px] sm:h-[116px] rounded-[20px] overflow-hidden border-2 border-white shadow-md rotate-10 -ml-5 z-30 transition-transform duration-300 group-hover:translate-x-2 group-hover:rotate-14">
                  <img
                    src={about.card3Photos[2].src}
                    alt={about.card3Photos[2].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-[12.5px] leading-[1.6] text-[#6B7280] mt-4">
                {about.card3Caption}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats Row (Below Cards, Centred, 4 Columns on Desktop, 2x2 Grid on Mobile) */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-14 sm:mt-16 pt-8 border-t border-[#EDF1F5] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-[1000px] mx-auto">
            {about.stats.map((stat) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                label={stat.label}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
