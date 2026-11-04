import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreVertical } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface BeforeAfterCardProps {
  variant?: 'compact' | 'full';
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  onActionClick?: () => void;
}

export const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({
  variant = 'compact',
  beforeImage = '/images/smile-before-4.jpg',
  afterImage = '/images/smile-after-3.jpg',
  title = 'Smile Restoration',
}) => {
  const { promoBanner } = siteConfig.transformations;

  if (variant === 'compact') {
    return (
      <div
        className="relative w-full h-full min-h-[220px] sm:w-[240px] sm:h-[240px] rounded-[32px] bg-gradient-to-br from-[#1E9BF0] via-[#1583D2] to-[#0E64A8] p-3 flex items-center justify-center overflow-hidden select-none shadow-[0_12px_30px_rgba(30,155,240,0.28)]"
        aria-label={`${title} before and after comparison`}
      >
        {/* Floating 3D Teeth on edges */}
        <img
          src="/images/icon-3d-tooth.png"
          alt=""
          aria-hidden="true"
          className="w-11 h-11 absolute left-0.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-md"
        />
        <img
          src="/images/icon-3d-tooth.png"
          alt=""
          aria-hidden="true"
          className="w-12 h-12 absolute right-0.5 bottom-2 z-20 pointer-events-none drop-shadow-md"
        />

        {/* Overlapping Social Post Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* BEFORE Card (Left, rotated -4deg) */}
          <div className="w-[112px] bg-white rounded-[12px] p-1.5 shadow-lg -rotate-4 -mr-3 z-10 transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center justify-between mb-1 px-0.5">
              <div className="flex items-center gap-1 min-w-0">
                <span className="w-3.5 h-3.5 rounded-full bg-[#1E9BF0] shrink-0" />
                <div className="truncate">
                  <div className="text-[6.5px] font-semibold text-[#0B0B0C] leading-tight truncate">
                    {promoBanner.postClinicName}
                  </div>
                  <div className="text-[5.5px] text-[#6B7280] leading-tight">
                    {promoBanner.postLocation}
                  </div>
                </div>
              </div>
              <MoreVertical className="w-2.5 h-2.5 text-[#9CA3AF] shrink-0" />
            </div>
            <div className="relative rounded-[8px] overflow-hidden aspect-[5/4] bg-[#F2C8B0]">
              <img
                src={beforeImage}
                alt="Before dental treatment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-1 bottom-1 px-2 py-0.5 rounded-full bg-[#0B3A9E] text-white text-[7px] font-semibold shadow">
                Before
              </span>
            </div>
            <div className="mt-1 flex items-center gap-1 text-[#0B0B0C]">
              <Heart className="w-2.5 h-2.5 fill-[#1E9BF0] text-[#1E9BF0]" />
              <MessageCircle className="w-2.5 h-2.5 text-[#6B7280]" />
              <Send className="w-2.5 h-2.5 text-[#6B7280]" />
            </div>
            <div className="mt-0.5 text-[6px] text-[#6B7280] truncate">
              <span className="font-semibold text-[#0B0B0C]">{promoBanner.likesText}</span> ·{' '}
              {promoBanner.hashtagText}
            </div>
          </div>

          {/* AFTER Card (Right, rotated +4deg) */}
          <div className="w-[116px] bg-white rounded-[12px] p-1.5 shadow-xl rotate-4 -ml-2 z-15 transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center justify-between mb-1 px-0.5">
              <div className="flex items-center gap-1 min-w-0">
                <span className="w-3.5 h-3.5 rounded-full bg-[#1E9BF0] shrink-0" />
                <div className="truncate">
                  <div className="text-[6.5px] font-semibold text-[#0B0B0C] leading-tight truncate">
                    {promoBanner.postClinicName}
                  </div>
                  <div className="text-[5.5px] text-[#6B7280] leading-tight">
                    {promoBanner.postLocation}
                  </div>
                </div>
              </div>
              <MoreVertical className="w-2.5 h-2.5 text-[#9CA3AF] shrink-0" />
            </div>
            <div className="relative rounded-[8px] overflow-hidden aspect-[5/4] bg-[#F8D7C4]">
              <img
                src={afterImage}
                alt="After dental treatment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute right-1 top-1 px-2 py-0.5 rounded-full bg-[#0B3A9E] text-white text-[7px] font-semibold shadow">
                After
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[#0B0B0C]">
              <div className="flex items-center gap-1">
                <Heart className="w-2.5 h-2.5 fill-[#1E9BF0] text-[#1E9BF0]" />
                <MessageCircle className="w-2.5 h-2.5 text-[#6B7280]" />
                <Send className="w-2.5 h-2.5 text-[#6B7280]" />
              </div>
              <Bookmark className="w-2.5 h-2.5 text-[#6B7280]" />
            </div>
            <div className="mt-0.5 text-[6px] text-[#6B7280] truncate">
              <span className="font-semibold text-[#0B0B0C]">{promoBanner.likesText}</span> ·{' '}
              {promoBanner.hashtagText}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full promo version (Page 12)
  return (
    <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#1E9BF0] via-[#1686D6] to-[#0C63A8] px-4 sm:px-10 py-10 sm:py-12 overflow-hidden shadow-[0_20px_60px_rgba(30,155,240,0.28)]">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.22),transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Overlapping Social Post Cards */}
      <div className="relative max-w-[600px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 pt-2 pb-6">
        {/* Left floating 3D tooth */}
        <img
          src="/images/icon-3d-tooth.png"
          alt=""
          aria-hidden="true"
          className="w-16 h-16 sm:w-20 sm:h-20 absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-30 animate-float-gentle pointer-events-none"
        />

        {/* BEFORE social post card */}
        <div className="w-[230px] sm:w-[250px] bg-white rounded-[16px] p-3 shadow-[0_20px_50px_rgba(8,28,55,0.28)] sm:-mr-4 z-10 animate-float-card-left">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center p-0.5">
                <img
                  src={siteConfig.logo.darkSrc}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-[#0B0B0C] leading-tight">
                  {promoBanner.postClinicName}
                </div>
                <div className="text-[9px] text-[#6B7280] leading-tight">
                  {promoBanner.postLocation}
                </div>
              </div>
            </div>
            <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </div>

          <div className="relative rounded-[12px] overflow-hidden aspect-[5/4] bg-[#F2C8B0]">
            <img
              src={beforeImage}
              alt="Smile before restoration at Aslam Dental Care"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute -left-1 bottom-2 px-3.5 py-1 rounded-full bg-[#0B3A9E] text-white text-[11px] font-semibold shadow-md">
              Before
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#0B0B0C]">
              <Heart className="w-4 h-4 fill-[#1E9BF0] text-[#1E9BF0]" />
              <MessageCircle className="w-4 h-4 text-[#6B7280]" />
              <Send className="w-4 h-4 text-[#6B7280]" />
            </div>
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-[#1E9BF0]" />
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
            </div>
          </div>

          <div className="mt-1.5 text-[10px] text-[#0B0B0C] font-semibold">
            {promoBanner.likesText}
          </div>
          <div className="text-[9.5px] text-[#6B7280]">
            {promoBanner.postClinicName} <span className="text-[#1E9BF0]">{promoBanner.hashtagText}</span>
          </div>
        </div>

        {/* AFTER social post card */}
        <div className="w-[235px] sm:w-[255px] bg-white rounded-[16px] p-3 shadow-[0_24px_60px_rgba(8,28,55,0.34)] sm:-ml-4 z-20 animate-float-card-right">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center p-0.5">
                <img
                  src={siteConfig.logo.darkSrc}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-[#0B0B0C] leading-tight">
                  {promoBanner.postClinicName}
                </div>
                <div className="text-[9px] text-[#6B7280] leading-tight">
                  {promoBanner.postLocation}
                </div>
              </div>
            </div>
            <MoreVertical className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </div>

          <div className="relative rounded-[12px] overflow-hidden aspect-[5/4] bg-[#F8D7C4]">
            <img
              src={afterImage}
              alt="Smile after restoration at Aslam Dental Care"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <span className="absolute right-2 top-2 px-3.5 py-1 rounded-full bg-[#0B3A9E] text-white text-[11px] font-semibold shadow-md">
              After
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#0B0B0C]">
              <Heart className="w-4 h-4 fill-[#1E9BF0] text-[#1E9BF0]" />
              <MessageCircle className="w-4 h-4 text-[#6B7280]" />
              <Send className="w-4 h-4 text-[#6B7280]" />
            </div>
            <Bookmark className="w-4 h-4 text-[#6B7280]" />
          </div>

          <div className="mt-1.5 text-[10px] text-[#0B0B0C] font-semibold">
            {promoBanner.likesText}
          </div>
          <div className="text-[9.5px] text-[#6B7280]">
            {promoBanner.postClinicName} <span className="text-[#1E9BF0]">{promoBanner.hashtagText}</span>
          </div>
        </div>

        {/* Right floating 3D tooth */}
        <img
          src="/images/icon-3d-tooth.png"
          alt=""
          aria-hidden="true"
          className="w-18 h-18 sm:w-22 sm:h-22 absolute right-0 sm:right-4 bottom-2 z-30 animate-float-gentle pointer-events-none"
        />
      </div>

      {/* Bottom Headline: Editorial script 'Get your' above bold sans 'Smile Restored' */}
      <div className="relative z-20 text-center mt-2">
        <div className="font-editorial text-white/95 text-[32px] sm:text-[38px] font-medium leading-none mb-1">
          {promoBanner.scriptTop}
        </div>
        <h3 className="font-outfit font-bold text-white text-[32px] sm:text-[44px] leading-[1.05] tracking-[-0.02em]">
          {promoBanner.boldBottom}
        </h3>
      </div>
    </div>
  );
};
