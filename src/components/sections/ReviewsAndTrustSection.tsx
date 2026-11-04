import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

export const ReviewsAndTrustSection: React.FC = () => {
  const { reviews, trustStrip } = siteConfig;
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlide = (direction: 'prev' | 'next') => {
    const nextIdx =
      direction === 'next'
        ? Math.min(reviews.items.length - 1, activeIndex + 1)
        : Math.max(0, activeIndex - 1);
    setActiveIndex(nextIdx);

    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 316;
      container.scrollTo({
        left: nextIdx * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const idx = Math.round(container.scrollLeft / 300);
    if (idx !== activeIndex && idx >= 0 && idx < reviews.items.length) {
      setActiveIndex(idx);
    }
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="w-full bg-white py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* SECTION 8(A): REVIEWS SLIDER */}
        <div>
          {/* Centred two-line heading at ~42px + Google 'G' rating row */}
          <div className="text-center max-w-[580px] mx-auto">
            <h2
              id="reviews-heading"
              className="font-outfit text-[32px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#0B0B0C]"
            >
              <span className="font-light block">
                <AnimatedText text={reviews.headingLine1} />
              </span>
              <span className="font-semibold block">
                <AnimatedText text={reviews.headingLine2} delayOffset={0.18} />
              </span>
            </h2>

            {/* Centred row: '4.9/5', Google 'G' icon, and 'Based on 320 reviews' in 13px grey */}
            <RevealOnScroll delay={0.2}>
              <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2.5 text-[13px] px-4 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E8EEF4]">
                <span className="font-semibold text-[#0B0B0C]">{reviews.ratingSummary}</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#0B0B0C]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#1E9BF0"
                      d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 15.65 5 12c0-3.65 3.36-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81Z"
                    />
                  </svg>
                  <span>Google Reviews</span>
                </span>
                <span className="text-[#6B7280]">{reviews.reviewsCountText}</span>
              </div>
            </RevealOnScroll>
          </div>

          {/* Slider Layout: Left Control Column (~240px) + Right Horizontally Scrolling Speech-Bubble Cards */}
          <div className="mt-12 sm:mt-14 flex flex-col lg:flex-row items-start gap-8">
            {/* LEFT COLUMN */}
            <RevealOnScroll direction="left" className="w-full lg:w-[240px] shrink-0 flex flex-col justify-between">
              <div
                className="font-outfit font-bold text-[72px] leading-[0.8] text-[#CBD5E1] select-none"
                aria-hidden="true"
              >
                “
              </div>

              <div className="mt-2 text-[22px] font-outfit font-normal leading-[1.25] text-[#0B0B0C]">
                {reviews.leftLabel}
              </div>

              {/* Slider controls: left arrow, thin progress line with dark segment, right arrow */}
              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSlide('prev')}
                  aria-label="Previous review"
                  className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#0B0B0C] hover:bg-[#1E9BF0] hover:text-white hover:border-[#1E9BF0] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex-1 h-[2.5px] bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1E9BF0] transition-all duration-300"
                    style={{
                      width: `${((activeIndex + 1) / reviews.items.length) * 100}%`,
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => handleSlide('next')}
                  aria-label="Next review"
                  className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#0B0B0C] hover:bg-[#1E9BF0] hover:text-white hover:border-[#1E9BF0] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealOnScroll>

            {/* RIGHT COLUMN: Horizontally scrolling row of speech-bubble review cards */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="w-full flex-1 flex items-stretch gap-5 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-1 no-scrollbar"
            >
              {reviews.items.map((review, idx) => (
                <RevealOnScroll
                  key={review.id}
                  delay={idx * 0.08}
                  className="snap-start shrink-0 w-[82vw] sm:w-[305px] flex flex-col justify-between"
                >
                  {/* Speech-bubble card */}
                  <div className="relative bg-[#F8FAFC] border border-[#E5ECF3] rounded-[20px] p-6 shadow-[0_12px_32px_rgba(15,30,50,0.04)] flex-1 flex flex-col justify-between">
                    <p className="text-[13.5px] leading-[1.65] text-[#0B0B0C]/85">
                      “{review.text}”
                    </p>

                    {/* 5 stars */}
                    <div
                      className="mt-5 flex items-center gap-1"
                      aria-label={`${review.rating} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-[#1E9BF0] text-[#1E9BF0]"
                        />
                      ))}
                    </div>

                    {/* Speech-bubble tail at bottom-left */}
                    <div
                      className="w-4 h-4 bg-[#F8FAFC] border-b border-r border-[#E5ECF3] rotate-45 absolute -bottom-2 left-8"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Under the card next to the tail: 32px round real avatar, bold 13px name, 10px grey 'x weeks ago' */}
                  <div className="mt-4 pl-4 flex items-center gap-2.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#E8EBEE] shadow-2xs"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-[13px] font-bold text-[#0B0B0C] leading-tight">
                        {review.name}
                      </div>
                      <div className="text-[10.5px] text-[#6B7280] leading-tight">
                        {review.timeAgo}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 8(B): TRUST STRIP - 'CARE YOU CAN TRUST' */}
        <div className="mt-16 sm:mt-24 pt-14 sm:pt-16 border-t border-[#EDF1F5]">
          <div className="text-center mb-12">
            <RevealOnScroll>
              <SectionTag label={trustStrip.pill} withDot />
            </RevealOnScroll>
            <h3 className="mt-3 font-outfit font-light text-[32px] sm:text-[44px] leading-[1.1] tracking-[-0.02em] text-[#0B0B0C]">
              <AnimatedText text={trustStrip.heading} />
            </h3>
          </div>

          {/* 5 Tilted Sticky-Note Cards with Pins connected by a dashed line */}
          <div className="relative">
            {/* Desktop Dashed Curved Connecting Line */}
            <svg
              className="hidden lg:block pointer-events-none absolute top-1/2 left-10 right-10 w-[calc(100%-80px)] h-28 -translate-y-1/2 z-0"
              viewBox="0 0 1000 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M 40 60 Q 160 10, 280 70 T 520 50 T 760 75 T 960 45"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Mobile Vertical Dashed Line running down the left side */}
            <div
              className="lg:hidden absolute top-6 bottom-6 left-6 w-[2px] border-l-2 border-dashed border-[#CBD5E1] z-0"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pl-8 lg:pl-0">
              {trustStrip.notes.map((note, idx) => (
                <RevealOnScroll key={note.number} delay={idx * 0.08}>
                  <div
                    style={{
                      transform: `rotate(${note.rotationDeg}deg)`,
                    }}
                    className="group relative h-full bg-white rounded-[24px] p-3 shadow-[0_16px_40px_rgba(15,30,50,0.08)] border border-[#E8EBEE] transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(30,155,240,0.16)]"
                  >
                    {/* Glossy round 3D pin on top (blue/white) */}
                    <div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6CC4FF] via-[#1E9BF0] to-[#0B3A9E] shadow-[0_6px_12px_rgba(30,155,240,0.45)] border-2 border-white absolute -top-3 left-1/2 -translate-x-1/2 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/90 -mt-0.5 -ml-0.5" />
                    </div>

                    {/* Pale blue-tinted inner panel */}
                    <div
                      style={{ backgroundColor: note.tintHex }}
                      className="rounded-[18px] p-4 pt-5 h-full flex flex-col justify-between"
                    >
                      <div>
                        <span
                          className="text-[18px] italic font-semibold text-[#1E9BF0] block leading-none"
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {note.number}
                        </span>
                        <h4 className="mt-2 font-outfit font-bold text-[19px] text-[#0B0B0C] leading-snug">
                          {note.title}
                        </h4>
                      </div>
                      <p className="mt-2 text-[12px] leading-[1.55] text-[#6B7280]">
                        {note.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
