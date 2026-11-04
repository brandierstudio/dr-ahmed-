import React, { useState } from 'react';
import { Phone, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { siteConfig } from '../../config/siteConfig';
import { PrimaryButton } from '../shared/PrimaryButton';

interface HeroSectionProps {
  onSelectTreatment: (treatment: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTreatment }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleArchClick = (treatmentTarget?: string) => {
    if (treatmentTarget) {
      onSelectTreatment(treatmentTarget);
    }
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero banner"
      className="relative w-full bg-gradient-to-b from-[#F4F7FA] via-[#EDF2F7] to-[#E4ECF3] border-b border-[#DCE5EE] overflow-hidden"
    >
      {/* Subtle ambient studio lighting */}
      <div
        className="pointer-events-none absolute -top-28 right-1/4 w-[540px] h-[540px] rounded-full bg-white/80 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-24 w-[420px] h-[420px] rounded-full bg-[#1E9BF0]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Full-Width Content Container */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 pt-5 sm:pt-7 pb-10 sm:pb-14">
        {/* TOP NAVBAR */}
        <div className="relative z-30 flex items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-black/[0.06]">
          {/* Left: Larger Transparent Background-Removed Logo + Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#1E9BF0] rounded-lg group"
          >
            <img
              src={siteConfig.logo.darkSrc}
              alt={siteConfig.clinicName}
              className="h-12 sm:h-14 w-12 sm:w-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-none">
              <div className="font-outfit font-bold text-[21px] sm:text-[23px] text-[#0B0B0C] tracking-[-0.02em]">
                {siteConfig.logo.wordmarkTop}
              </div>
              <div className="text-[9.5px] tracking-[0.22em] text-[#475569] font-semibold mt-1">
                {siteConfig.logo.wordmarkBottom}
              </div>
            </div>
          </a>

          {/* Centre: Navigation Links */}
          <nav aria-label="Hero navigation" className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13.5px] font-medium text-[#0B0B0C]/80 hover:text-[#1E9BF0] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: 3 black circle social icons + Phone number in accent blue */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5">
              {/* Facebook */}
              <a
                href={siteConfig.contact.socials.facebook}
                aria-label="Facebook"
                className="w-7 h-7 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center hover:bg-[#1E9BF0] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href={siteConfig.contact.socials.instagram}
                aria-label="Instagram"
                className="w-7 h-7 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center hover:bg-[#1E9BF0] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={siteConfig.contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1EBE5D] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
                </svg>
              </a>
            </div>
            <a
              href={siteConfig.contact.phoneTel}
              className="text-[17px] lg:text-[18px] font-semibold text-[#1E9BF0] hover:text-[#0B3A9E] transition-colors whitespace-nowrap"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          {/* Mobile: round call button + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={siteConfig.contact.phoneTel}
              aria-label="Call clinic"
              className="w-10 h-10 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center shadow-sm"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileNavOpen}
              className="w-10 h-10 rounded-full bg-white text-[#0B0B0C] flex items-center justify-center shadow-sm"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer inside Hero */}
        {mobileNavOpen && (
          <div className="md:hidden mt-3 mb-4 rounded-[20px] bg-white p-4 shadow-lg flex flex-col gap-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="px-3 py-2 rounded-xl text-[14px] font-medium text-[#0B0B0C] hover:bg-[#F1F2F4]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.contact.phoneTel}
              className="px-3 py-2 text-[15px] font-semibold text-[#1E9BF0]"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        )}

        {/* HERO MAIN STAGE: Left Headline & CTA | Centre Large Borderless Smiling Man Cutout | Right Tags, Text & Rotating Badge */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center min-h-[470px] lg:min-h-[540px] pt-4 sm:pt-6 gap-6 lg:gap-2">
          {/* LEFT BLOCK: 3-line Uppercase Headline + White Pill CTA */}
          <div className="lg:col-span-5 relative z-20 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#DCE5EE] text-[11px] font-semibold text-[#1E9BF0] mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>P.E.C.H.S. Karachi · Open 24 Hours Mon–Sat</span>
            </div>

            <h1 className="font-outfit font-light uppercase text-[46px] sm:text-[66px] lg:text-[78px] xl:text-[88px] leading-[0.95] tracking-[-0.03em]">
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#1E9BF0] font-normal whitespace-nowrap"
              >
                {siteConfig.hero.headlineLine1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#0B0B0C]"
              >
                {siteConfig.hero.headlineLine2}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#0B0B0C] font-editorial normal-case font-semibold text-[54px] sm:text-[76px] lg:text-[90px] xl:text-[100px] tracking-[-0.02em] -mt-1"
              >
                Elegance.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-6 sm:mt-8 flex justify-center lg:justify-start"
            >
              <PrimaryButton
                variant="hero"
                label={siteConfig.hero.ctaLabel}
                href="#booking"
                className="w-full sm:w-auto justify-between"
              />
            </motion.div>
          </div>

          {/* CENTRE PORTRAIT: Large Borderless Smiling Man Studio Cutout (NO Square/Arch Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 relative z-10 flex justify-center items-end mt-2 lg:mt-0 -mb-10 sm:-mb-14 lg:-mb-16"
          >
            <div className="relative w-[340px] sm:w-[430px] lg:w-[490px] xl:w-[530px] flex justify-center items-end select-none">
              {/* Soft radial studio light halo behind cutout (no box) */}
              <div
                className="pointer-events-none absolute top-8 inset-x-6 h-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.45)_52%,transparent_75%)] blur-xl"
                aria-hidden="true"
              />

              {/* Borderless Transparent Cutout of Smiling Man */}
              <img
                src={siteConfig.hero.portraitImage}
                alt="Confident smiling man at Aslam Dental Care"
                className="relative z-10 w-full h-auto max-h-[470px] sm:max-h-[540px] lg:max-h-[580px] object-contain object-bottom drop-shadow-[0_22px_42px_rgba(15,30,50,0.13)] pointer-events-none"
              />

              {/* Floating Verified Clinic Chip on Left of Portrait */}
              <div className="absolute left-0 sm:-left-4 top-14 sm:top-20 z-30 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-[0_12px_30px_rgba(15,30,50,0.12)] flex items-center gap-2 animate-float-gentle">
                <span className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#1E9BF0] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-bold text-[#0B0B0C]">Dr. Fahad Aslam</div>
                  <div className="text-[9.5px] text-[#6B7280]">BDS, RDS Specialist</div>
                </div>
              </div>
            </div>

            {/* Rotating Accent-Blue Circular Text Badge (~110px desktop, 86px mobile) */}
            <div
              className="absolute right-2 sm:right-6 lg:-right-4 bottom-12 sm:bottom-16 z-30 w-[86px] h-[86px] sm:w-[110px] sm:h-[110px] rounded-full bg-[#1E9BF0] shadow-[0_14px_34px_rgba(30,155,240,0.40)] flex items-center justify-center"
              aria-hidden="true"
            >
              <svg className="w-full h-full animate-spin-slow p-1.5" viewBox="0 0 120 120">
                <defs>
                  <path
                    id="badgeCirclePath"
                    d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                  />
                </defs>
                <text fill="#FFFFFF" fontSize="8.3" fontWeight="600" letterSpacing="2.1">
                  <textPath href="#badgeCirclePath" startOffset="0%">
                    WHERE SMILE MEETS ELEGANCE •
                  </textPath>
                </text>
              </svg>
              <img
                src="/images/icon-3d-tooth.png"
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain absolute drop-shadow-sm"
              />
            </div>
          </motion.div>

          {/* RIGHT BLOCK: Two white pill tags + 3-line grey paragraph + quick doctor preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-3 relative z-20 flex flex-col items-center lg:items-start lg:pl-6 mt-2 lg:mt-0"
          >
            <div className="flex items-center gap-2">
              {siteConfig.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white/95 border border-[#DCE5EE] text-[11px] font-medium text-[#0B0B0C] whitespace-nowrap shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] leading-[1.65] text-[#4B5563] text-center lg:text-left max-w-[280px]">
              {siteConfig.hero.rightParagraph}
            </p>

            {/* Mini real clinic preview card */}
            <div className="mt-5 p-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-[0_10px_28px_rgba(15,30,50,0.06)] flex items-center gap-3 max-w-[270px]">
              <img
                src={siteConfig.doctor.photo}
                alt={siteConfig.doctor.name}
                className="w-11 h-11 rounded-xl object-cover object-top shrink-0 border border-[#E8EBEE]"
              />
              <div className="text-left">
                <div className="text-[11.5px] font-semibold text-[#0B0B0C]">
                  {siteConfig.doctor.fullNameWithCredentials}
                </div>
                <div className="text-[10px] text-[#1E9BF0] font-medium">
                  4.9 ★ Rating (320+ Reviews)
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ARCH ROW (5 CARDS): Fully rounded tops, ~150px tall, 10px gap */}
        <div className="relative z-30 -mt-3 sm:-mt-6 pt-6 grid grid-cols-2 lg:grid-cols-5 gap-3">
          {siteConfig.hero.arches.map((arch, idx) => {
            const isLastOddOnMobile = idx === 4 ? 'col-span-2 lg:col-span-1' : '';
            if (arch.type === 'service') {
              return (
                <motion.button
                  key={arch.id}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.25 + idx * 0.08 }}
                  onClick={() => handleArchClick(arch.treatmentTarget)}
                  className={`group relative mt-6 min-h-[154px] bg-white hover:bg-white rounded-t-[999px] rounded-b-[24px] pt-12 pb-4 px-4 flex flex-col items-center justify-end text-center shadow-[0_14px_35px_rgba(15,30,50,0.07)] hover:shadow-[0_20px_45px_rgba(30,155,240,0.18)] border border-white hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${isLastOddOnMobile}`}
                >
                  {/* Glossy 3D icon sitting half outside the arch top */}
                  <img
                    src={arch.icon3d}
                    alt={arch.title}
                    className="w-16 h-16 object-contain absolute -top-7 left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                  />
                  <div className="font-outfit font-semibold text-[15px] text-[#0B0B0C] leading-tight">
                    {arch.title}
                  </div>
                  <div className="mt-1 text-[11px] text-[#6B7280] leading-tight">
                    {arch.subtitle}
                  </div>
                </motion.button>
              );
            }

            return (
              <motion.div
                key={arch.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 + idx * 0.08 }}
                className={`group relative mt-6 min-h-[154px] bg-white rounded-t-[999px] rounded-b-[24px] pt-6 pb-4 px-4 flex flex-col items-center justify-between text-center shadow-[0_14px_35px_rgba(15,30,50,0.07)] border border-white hover:-translate-y-1.5 transition-all duration-300 ${isLastOddOnMobile}`}
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F1F5F9] text-[10px] font-medium text-[#475569]">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center text-[8px]">
                    ★
                  </span>
                  <span className="whitespace-nowrap">{arch.topTag}</span>
                </div>
                <div className="font-outfit font-light text-[40px] sm:text-[44px] leading-none text-[#0B0B0C] tracking-tight tabular-nums my-1">
                  {arch.statValue}
                </div>
                <div className="text-[11px] text-[#6B7280]">{arch.statLabel}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
