import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { BeforeAfterCard } from '../shared/BeforeAfterCard';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

interface SmileTransformationsSectionProps {
  onSelectTreatment: (treatment: string) => void;
}

export const SmileTransformationsSection: React.FC<SmileTransformationsSectionProps> = ({
  onSelectTreatment,
}) => {
  const { transformations } = siteConfig;
  const slides = transformations.slides;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;

  useEffect(() => {
    if (isPaused) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const handleBookCase = (title: string) => {
    onSelectTreatment(title);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSlide = slides[activeIndex];
  const prevSlide = slides[prevIndex];
  const nextSlide = slides[nextIndex];

  return (
    <section
      id="transformations"
      aria-labelledby="transformations-heading"
      className="w-full bg-[#F6F9FC] border-y border-[#E5ECF3] py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          {/* Top tiny pill '05 - SMILE TRANSFORMATIONS' with a dot + Heading centred 56px Outfit Light */}
          <div className="text-center">
            <RevealOnScroll>
              <SectionTag label={transformations.pill} withDot className="bg-white" />
            </RevealOnScroll>
            <h2
              id="transformations-heading"
              className="mt-4 font-outfit font-light text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.025em] text-[#0B0B0C]"
            >
              Smiles We&apos;ve{' '}
              <span className="font-editorial font-semibold text-[#1E9BF0] text-[40px] sm:text-[54px] lg:text-[64px]">
                Created
              </span>
            </h2>
          </div>

          {/* CAROUSEL */}
          <RevealOnScroll delay={0.12}>
            <div
              className="relative mt-8 sm:mt-10 flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Previous blurred edge slide (desktop) */}
              <div
                aria-hidden="true"
                onClick={() => setActiveIndex(prevIndex)}
                className="hidden xl:flex w-[240px] h-[230px] -mr-12 rounded-[32px] bg-[#F1F1F2] p-4 items-center gap-4 scale-90 opacity-45 blur-[1.5px] select-none cursor-pointer transition-all duration-400"
              >
                <img
                  src={prevSlide.afterImage}
                  alt=""
                  className="w-24 h-24 rounded-[18px] object-cover shrink-0"
                />
                <div className="truncate">
                  <div className="text-[14px] font-semibold text-[#0B0B0C] truncate">
                    {prevSlide.title}
                  </div>
                  <div className="text-[11px] text-[#6B7280] line-clamp-2 mt-1">
                    {prevSlide.description}
                  </div>
                </div>
              </div>

              {/* Active Slide Wrapper with overlapping Left/Right 36px black arrow buttons */}
              <div className="relative z-20 w-full max-w-[760px]">
                {/* Left 36px Black Arrow Button overlapping left edge */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(prevIndex)}
                  aria-label="Previous transformation case"
                  className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center shadow-lg hover:bg-[#1E9BF0] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Active Slide Card: wide, radius 36px, background #F3F5F8, ~268px tall */}
                <div className="rounded-[28px] sm:rounded-[36px] bg-[#F3F5F8] border border-[#E5ECF3] p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-7 min-h-[268px] transition-all duration-400">
                  {/* LEFT: Large rounded-square image (240x240, radius 32px) using BeforeAfterCard compact */}
                  <div className="w-full sm:w-[240px] sm:h-[240px] shrink-0">
                    <BeforeAfterCard
                      variant="compact"
                      beforeImage={activeSlide.beforeImage}
                      afterImage={activeSlide.afterImage}
                      title={activeSlide.title}
                    />
                  </div>

                  {/* RIGHT: Aslam logo + name, title 22px, 2-line 12px description, Read More link, 3 stats */}
                  <div className="flex-1 flex flex-col justify-between w-full py-1 pr-2">
                    <div>
                      {/* Small row with Aslam transparent logo + name */}
                      <div className="flex items-center gap-2">
                        <img
                          src={siteConfig.logo.darkSrc}
                          alt=""
                          className="w-6 h-6 object-contain"
                        />
                        <span className="text-[11.5px] font-bold tracking-wider text-[#0B0B0C] uppercase">
                          {siteConfig.clinicName}
                        </span>
                      </div>

                      <h3 className="mt-2 font-outfit font-medium text-[22px] text-[#0B0B0C] leading-snug">
                        {activeSlide.title}
                      </h3>

                      <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#6B7280] line-clamp-2 max-w-[390px]">
                        {activeSlide.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => handleBookCase(activeSlide.title)}
                        className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0B0B0C] hover:text-[#1E9BF0] transition-colors cursor-pointer"
                      >
                        <span>Read More</span>
                        <span className="w-4 h-4 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center">
                          <ArrowUpRight className="w-2.5 h-2.5" />
                        </span>
                      </button>
                    </div>

                    {/* Bottom row of three stats (value 22px, label 11px grey) */}
                    <div className="mt-5 pt-4 border-t border-black/8 grid grid-cols-3 gap-3">
                      {activeSlide.stats.map((st) => (
                        <div key={st.label}>
                          <div className="font-outfit font-medium text-[20px] sm:text-[22px] text-[#0B0B0C] leading-none tabular-nums">
                            {st.value}
                          </div>
                          <div className="mt-1 text-[11px] text-[#6B7280]">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 36px Black Arrow Button overlapping right edge */}
                <button
                  type="button"
                  onClick={() => setActiveIndex(nextIndex)}
                  aria-label="Next transformation case"
                  className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center shadow-lg hover:bg-[#1E9BF0] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Next blurred edge slide (desktop) */}
              <div
                aria-hidden="true"
                onClick={() => setActiveIndex(nextIndex)}
                className="hidden xl:flex w-[240px] h-[230px] -ml-12 rounded-[32px] bg-[#F1F1F2] p-4 items-center gap-4 scale-90 opacity-45 blur-[1.5px] select-none cursor-pointer transition-all duration-400"
              >
                <img
                  src={nextSlide.afterImage}
                  alt=""
                  className="w-24 h-24 rounded-[18px] object-cover shrink-0"
                />
                <div className="truncate">
                  <div className="text-[14px] font-semibold text-[#0B0B0C] truncate">
                    {nextSlide.title}
                  </div>
                  <div className="text-[11px] text-[#6B7280] line-clamp-2 mt-1">
                    {nextSlide.description}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Dot Pagination: active dot is a gradient pill (blue to lavender) */}
          <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Case study slides">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${slide.title}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-7 bg-gradient-to-r from-[#1E9BF0] to-[#A78BFA]'
                      : 'w-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                  }`}
                />
              );
            })}
          </div>

          {/* Bottom centre: black pill button 'Explore all Cases' with a thin glowing gradient border */}
          <div className="mt-6 flex justify-center">
            <a
              href="#booking"
              className="p-[1.5px] rounded-full bg-gradient-to-r from-[#1E9BF0] via-[#6CC4FF] to-[#A78BFA] shadow-[0_8px_28px_rgba(30,155,240,0.28)] hover:scale-103 transition-transform"
            >
              <span className="block px-6 py-2.5 rounded-full bg-[#0B0B0C] text-white text-[12px] font-medium">
                {transformations.ctaLabel}
              </span>
            </a>
          </div>

          {/* Section 5(B) Full-Width Promo Banner under the carousel */}
          <RevealOnScroll delay={0.2} className="mt-10">
            <BeforeAfterCard
              variant="full"
              beforeImage={activeSlide.beforeImage}
              afterImage={activeSlide.afterImage}
              title={activeSlide.title}
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
