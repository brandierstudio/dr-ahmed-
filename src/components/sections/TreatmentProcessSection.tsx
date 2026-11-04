import React, { useState } from 'react';
import {
  MessageSquare,
  Target,
  ClipboardList,
  Sparkles,
  Send,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { siteConfig, ProcessStep } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { computeDialStepGeometry } from '../../utils/bookingUtils';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

const StepOutlineIcon: React.FC<{
  iconName: ProcessStep['iconName'];
  isDarkText: boolean;
}> = ({ iconName, isDarkText }) => {
  const colorClass = isDarkText ? 'text-[#0B0B0C]' : 'text-white';
  switch (iconName) {
    case 'chat':
      return <MessageSquare className={`w-7 h-7 ${colorClass}`} strokeWidth={1.6} />;
    case 'target':
      return <Target className={`w-7 h-7 ${colorClass}`} strokeWidth={1.6} />;
    case 'clipboard':
      return <ClipboardList className={`w-7 h-7 ${colorClass}`} strokeWidth={1.6} />;
    case 'tool':
      return <Sparkles className={`w-7 h-7 ${colorClass}`} strokeWidth={1.6} />;
    case 'plane':
      return <Send className={`w-7 h-7 ${colorClass}`} strokeWidth={1.6} />;
  }
};

export const TreatmentProcessSection: React.FC = () => {
  const { process } = siteConfig;
  const steps = process.steps;
  const [activeDialIndex, setActiveDialIndex] = useState(2); // Default '03' centred

  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    if (deltaY < -25 && activeDialIndex < steps.length - 1) {
      setActiveDialIndex((i) => i + 1);
    } else if (deltaY > 25 && activeDialIndex > 0) {
      setActiveDialIndex((i) => i - 1);
    }
    setTouchStartY(null);
  };

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="w-full bg-white border-b border-[#EDF1F5] py-16 sm:py-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Standard Heading Pattern */}
        <div className="mb-10 sm:mb-12 text-center sm:text-left">
          <RevealOnScroll direction="left">
            <SectionTag label={process.pill} withDot />
          </RevealOnScroll>
          <h2
            id="process-heading"
            className="mt-4 font-outfit font-light text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#0B0B0C]"
          >
            <AnimatedText text={process.heading} />
          </h2>
        </div>

        {/* DESKTOP & TABLET VERSION (md and up): 5 Stepped Vertical Panels */}
        <RevealOnScroll delay={0.1}>
          <div className="hidden md:flex flex-wrap lg:flex-nowrap rounded-[28px] overflow-hidden border border-[#E5ECF3] shadow-[0_20px_55px_rgba(15,30,50,0.08)] min-h-[420px]">
            {steps.map((step, index) => {
              const textPrimary = step.isDarkText ? 'text-[#0B0B0C]' : 'text-white';
              const textSecondary = step.isDarkText ? 'text-[#4B5563]' : 'text-white/80';
              const dividerColor = step.isDarkText ? 'border-[#CBD5E1]' : 'border-white/25';

              return (
                <div
                  key={step.number}
                  style={{ backgroundColor: step.bgHex }}
                  className="group relative flex-1 min-w-[30%] lg:min-w-0 hover:flex-[1.24] transition-all duration-300 p-6 lg:p-8 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top-left diagonal cut (~20px stepped look on panels 2 to 5) */}
                  {index > 0 && (
                    <div
                      className="hidden lg:block absolute top-0 left-0 w-6 h-6 -translate-x-3 -translate-y-3 rotate-45 bg-white/15 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}

                  <div>
                    {/* Huge number 01-05 (~96px) CLIPPED so its lower half is hidden behind the title block */}
                    <div className="h-[62px] overflow-hidden select-none">
                      <span
                        className={`font-outfit font-bold text-[86px] lg:text-[94px] leading-[0.82] tracking-tighter block ${textPrimary}`}
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Step title 15px bold, two lines */}
                    <div className="mt-3 min-h-[40px] flex items-end">
                      <h3 className={`text-[15.5px] font-bold leading-[1.25] ${textPrimary}`}>
                        {step.title}
                      </h3>
                    </div>

                    {/* Thin divider line */}
                    <hr className={`my-4 border-t ${dividerColor}`} />

                    {/* 11.5px body paragraph */}
                    <p className={`text-[12px] leading-[1.65] ${textSecondary}`}>
                      {step.description}
                    </p>
                  </div>

                  {/* 28px outline icon at the bottom-left */}
                  <div className="mt-8 pt-2">
                    <StepOutlineIcon iconName={step.iconName} isDarkText={step.isDarkText} />
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* MOBILE VERSION (<768px): Circular Number Dial */}
        <div
          className="md:hidden relative rounded-[24px] bg-[#F1F5F9] border border-[#E2E8F0] h-[470px] overflow-hidden select-none flex items-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label="Interactive treatment process dial"
        >
          {/* Up / Down quick step controls for accessibility */}
          <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveDialIndex((i) => Math.max(0, i - 1))}
              disabled={activeDialIndex === 0}
              aria-label="Previous process step"
              className="w-9 h-9 rounded-full bg-white text-[#0B0B0C] disabled:opacity-40 flex items-center justify-center shadow-xs"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveDialIndex((i) => Math.min(steps.length - 1, i + 1))}
              disabled={activeDialIndex === steps.length - 1}
              aria-label="Next process step"
              className="w-9 h-9 rounded-full bg-white text-[#0B0B0C] disabled:opacity-40 flex items-center justify-center shadow-xs"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Big thin circle outline (radius 190px) positioned so only its right half is visible from the left edge */}
          <div
            className="relative w-full h-full flex items-center"
            style={{ minHeight: '470px' }}
          >
            <div
              className="absolute top-1/2 -left-[290px] w-[380px] h-[380px] -translate-y-1/2 rounded-full border border-[#CBD5E1] pointer-events-none"
              aria-hidden="true"
            />

            {/* Step numbers 01-05 along the arc */}
            {steps.map((step, idx) => {
              const geom = computeDialStepGeometry(idx, activeDialIndex, 190, 28);
              const centerLeftPx = -100 + geom.xOffsetPx;
              const centerTopOffsetPx = geom.yOffsetPx;

              return (
                <React.Fragment key={step.number}>
                  <div
                    style={{
                      left: `${centerLeftPx}px`,
                      top: `calc(50% + ${centerTopOffsetPx}px)`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                      geom.isActive
                        ? 'w-2.5 h-2.5 bg-[#1E9BF0]'
                        : 'w-1.5 h-1.5 bg-[#94A3B8]'
                    }`}
                    aria-hidden="true"
                  />

                  <button
                    type="button"
                    onClick={() => setActiveDialIndex(idx)}
                    aria-label={`Step ${step.number}: ${step.title}`}
                    aria-current={geom.isActive ? 'step' : undefined}
                    style={{
                      left: `${centerLeftPx + (geom.isActive ? 16 : 12)}px`,
                      top: `calc(50% + ${centerTopOffsetPx}px)`,
                      transform: `translateY(-50%) rotate(${geom.isActive ? 0 : geom.angleDeg}deg)`,
                      opacity: geom.opacity,
                    }}
                    className={`absolute transition-all duration-300 font-mono-dial font-bold leading-none text-left ${
                      geom.isActive
                        ? 'text-[54px] text-[#0B0B0C] z-20'
                        : 'text-[26px] text-[#94A3B8] z-10'
                    }`}
                  >
                    {step.number}
                  </button>
                </React.Fragment>
              );
            })}

            {/* Active Step Title and description to the right of the active number */}
            <div className="pl-[192px] pr-4 z-20 transition-opacity duration-250">
              <h3 className="text-[15px] font-bold text-[#0B0B0C] leading-snug">
                {steps[activeDialIndex].title}
              </h3>
              <p className="mt-1 text-[14px] leading-[1.45] text-[#6B7280]">
                {steps[activeDialIndex].shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
