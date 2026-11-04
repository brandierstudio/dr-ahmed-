import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { RevealOnScroll } from '../shared/ScrollReveal';

export const MeetTheTeamSection: React.FC = () => {
  const { team } = siteConfig;
  const leftMember = team.members.find((m) => m.position === 'left')!;
  const centerMember = team.members.find((m) => m.position === 'center')!;
  const rightMember = team.members.find((m) => m.position === 'right')!;

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative w-full bg-gradient-to-b from-[#F8FAFC] via-[#F2F6FA] to-[#EAEFF5] border-b border-[#DCE5EE] py-16 sm:py-24 overflow-hidden"
    >
      {/* Faint Background Grid of Large Rounded Squares (app-icon tiles texture) */}
      <div
        className="pointer-events-none absolute inset-0 max-w-[1360px] mx-auto grid grid-cols-3 sm:grid-cols-6 gap-5 p-8 opacity-65"
        aria-hidden="true"
      >
        {Array.from({ length: 18 }).map((_, idx) => (
          <div
            key={idx}
            className="aspect-square rounded-[28px] bg-white/75 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white/80"
          />
        ))}
      </div>

      <div className="relative z-20 max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* MOBILE HEADING */}
        <div className="md:hidden text-center mb-8">
          <h2 className="font-outfit font-normal text-[46px] leading-[1.0] tracking-[-0.03em] bg-gradient-to-b from-[#0B0B0C] to-[#6B7280] bg-clip-text text-transparent">
            {team.heading}
          </h2>
          <p className="mt-2 text-[10px] tracking-[0.26em] uppercase text-[#6B7280] font-medium">
            {team.subtitle}
          </p>
        </div>

        {/* DESKTOP FANNED PHOTO CLUSTER (md and up) */}
        <RevealOnScroll direction="scale">
          <div className="hidden md:flex relative items-end justify-center pt-10 pb-6 group">
            {/* Left Tile: lower and rotated about -4 degrees */}
            <div className="relative -mr-6 mb-2 -rotate-4 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-rotate-6 z-10">
              {/* Floating frosted-glass pill label straddling top-left edge */}
              <div className="absolute -top-6 -left-8 z-30 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(15,30,50,0.10)] text-center animate-float-gentle">
                <div className="text-[11px] text-[#6B7280] leading-tight">{leftMember.role}</div>
                <div className="text-[13px] font-semibold text-[#0B0B0C] leading-tight">
                  {leftMember.name}
                </div>
              </div>

              <div className="w-[190px] h-[205px] lg:w-[215px] lg:h-[235px] rounded-[28px] overflow-hidden border-[3px] border-white shadow-[0_18px_45px_rgba(15,30,50,0.14)] bg-[#E6EEF6]">
                <img
                  src={leftMember.image}
                  alt={`${leftMember.name} - ${leftMember.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Centre Tile: larger and in front (Dr. Fahad Aslam provided photo) */}
            <div className="relative z-20 transition-transform duration-500 group-hover:-translate-y-2.5">
              {/* Floating frosted-glass pill label straddling top edge */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30 px-5 py-2 rounded-full bg-white/92 backdrop-blur-md border border-white shadow-[0_10px_28px_rgba(15,30,50,0.12)] text-center whitespace-nowrap animate-float-gentle">
                <div className="text-[11px] text-[#1E9BF0] font-medium leading-tight">
                  {centerMember.role}
                </div>
                <div className="text-[13.5px] font-semibold text-[#0B0B0C] leading-tight">
                  {centerMember.name}
                </div>
              </div>

              <div className="w-[225px] h-[245px] lg:w-[255px] lg:h-[280px] rounded-[28px] overflow-hidden border-[3px] border-white shadow-[0_24px_60px_rgba(15,30,50,0.22)] bg-white">
                <img
                  src={centerMember.image}
                  alt={`${centerMember.name} - ${centerMember.role}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Tile: rotated about +4 degrees */}
            <div className="relative -ml-6 mb-1 rotate-4 transition-transform duration-500 group-hover:translate-x-4 group-hover:rotate-6 z-10">
              <div className="w-[190px] h-[205px] lg:w-[215px] lg:h-[235px] rounded-[28px] overflow-hidden border-[3px] border-white shadow-[0_18px_45px_rgba(15,30,50,0.14)] bg-[#E2E8F0]">
                <img
                  src={rightMember.image}
                  alt={`${rightMember.name} - ${rightMember.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating frosted-glass pill label straddling bottom-right edge */}
              <div className="absolute -bottom-5 -right-4 z-30 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(15,30,50,0.10)] text-center animate-float-gentle">
                <div className="text-[11px] text-[#6B7280] leading-tight">{rightMember.role}</div>
                <div className="text-[13px] font-semibold text-[#0B0B0C] leading-tight">
                  {rightMember.name}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* MOBILE HORIZONTAL SCROLL-SNAP ROW OF CARDS */}
        <div className="md:hidden relative flex items-center gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-2 no-scrollbar">
          {[centerMember, leftMember, rightMember].map((member) => (
            <div
              key={member.id}
              className="snap-center shrink-0 w-[235px] flex flex-col items-center"
            >
              <div className="w-[215px] h-[235px] rounded-[28px] overflow-hidden border-[3px] border-white shadow-lg bg-white">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="-mt-5 z-10 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-md text-center">
                <div className="text-[11px] text-[#6B7280] leading-tight">{member.role}</div>
                <div className="text-[13px] font-semibold text-[#0B0B0C] leading-tight">
                  {member.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP HUGE HEADING BELOW PHOTOS (~92px Outfit, vertical gradient from black to mid-grey) */}
        <RevealOnScroll delay={0.15} className="hidden md:block text-center mt-5">
          <h2
            id="team-heading"
            className="font-outfit font-normal text-[68px] lg:text-[92px] leading-[0.98] tracking-[-0.03em] bg-gradient-to-b from-[#0B0B0C] via-[#1F2937] to-[#6B7280] bg-clip-text text-transparent select-none"
          >
            {team.heading}
          </h2>
          <p className="mt-3 text-[11px] tracking-[0.28em] uppercase text-[#6B7280] font-medium">
            {team.subtitle}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};
