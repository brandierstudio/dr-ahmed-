import React from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { RevealOnScroll } from '../shared/ScrollReveal';
import { SectionTag } from '../shared/SectionTag';
import { DottedWorldMap } from '../shared/DottedWorldMap';

export const FindUsSection: React.FC = () => {
  const { findUs, contact, doctor } = siteConfig;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-white py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Heading and Sub-line */}
        <div className="text-center max-w-[580px] mx-auto">
          <RevealOnScroll>
            <SectionTag label="12 - VISIT US" withDot />
          </RevealOnScroll>
          <h2
            id="contact-heading"
            className="mt-3 font-outfit font-light text-[34px] sm:text-[48px] lg:text-[54px] leading-[1.08] tracking-[-0.025em] text-[#0B0B0C]"
          >
            Find Us in{' '}
            <span className="font-editorial font-semibold text-[#1E9BF0] text-[40px] sm:text-[54px] lg:text-[62px]">
              Karachi
            </span>
          </h2>
          <RevealOnScroll delay={0.12}>
            <p className="mt-2 text-[13.5px] font-medium text-[#6B7280]">{findUs.subtitle}</p>
          </RevealOnScroll>
        </div>

        {/* Centred Row of Three Thin Stats */}
        <RevealOnScroll delay={0.15}>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[820px] mx-auto text-center">
            {findUs.stats.map((st) => (
              <div key={st.label} className="flex flex-col items-center">
                <div className="font-outfit font-light text-[34px] sm:text-[42px] leading-none text-[#0B0B0C] tracking-tight">
                  {st.value}
                </div>
                <span
                  className="w-8 h-[2.5px] rounded-full bg-[#1E9BF0] my-2.5 block"
                  aria-hidden="true"
                />
                <div className="text-[12px] text-[#6B7280]">{st.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* MAP VISUAL: Authentic High-Density Dotted World/Pakistan Map on curved horizon + Realistic Karachi GPS Radar Indicator + Info Callout */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-10 relative rounded-[28px] bg-gradient-to-b from-[#FAFBFD] via-[#EEF5FC] to-[#DFECF9] border border-[#DCE7F3] p-6 sm:p-10 min-h-[400px] flex flex-col justify-between overflow-hidden shadow-[0_18px_48px_rgba(15,30,50,0.06)]">
            {/* Curved horizon arc */}
            <svg
              className="pointer-events-none absolute top-0 left-0 w-full h-24 text-white z-10"
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,0 L1200,0 L1200,30 Q600,100 0,30 Z" fill="currentColor" />
            </svg>

            {/* Authentic Dot-Matrix World & Regional Map */}
            <DottedWorldMap variant="horizon" />

            {/* Top-right GPS Telemetry Pill */}
            <div className="relative z-20 self-end hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#DCE6F2] shadow-xs text-[11px] font-semibold text-[#0B0B0C]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>LIVE CLINIC RADAR · 24.8719° N, 67.0589° E</span>
            </div>

            {/* Callout + Realistic Pin Indicator Assembly */}
            <div className="relative z-20 my-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12 pt-4">
              {/* Info Callout Card */}
              <div className="w-full max-w-[380px] rounded-[22px] bg-white/95 backdrop-blur-md p-5 sm:p-6 shadow-[0_22px_55px_rgba(15,30,50,0.12)] border border-white">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#E8EBEE]">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={siteConfig.logo.darkSrc}
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                    <h3 className="font-outfit font-bold text-[17px] text-[#0B0B0C]">
                      {siteConfig.clinicName}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#1E9BF0] text-[10px] font-bold">
                    OPEN 24/7
                  </span>
                </div>

                <dl className="mt-3.5 space-y-2.5 text-[12.5px]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6B7280] shrink-0">Address</dt>
                    <dd className="font-semibold text-[#0B0B0C] text-right">
                      {contact.shortAddress}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6B7280] shrink-0">Phone</dt>
                    <dd className="font-semibold text-[#1E9BF0] text-right">
                      <a href={contact.phoneTel} className="hover:underline">
                        {contact.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6B7280] shrink-0">Hours</dt>
                    <dd className="font-semibold text-[#0B0B0C] text-right">
                      {contact.shortHours}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#6B7280] shrink-0">Doctor</dt>
                    <dd className="font-semibold text-[#0B0B0C] text-right">
                      {doctor.fullNameWithCredentials}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Realistic Multi-Ring Radar GPS Pin on Karachi */}
              <div className="flex flex-col items-center">
                <div className="px-3.5 py-1.5 rounded-full bg-[#0B0B0C] text-white text-[11.5px] font-semibold shadow-[0_10px_24px_rgba(11,11,12,0.28)] mb-1 flex items-center gap-2 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#1E9BF0] animate-ping" />
                  <span>P.E.C.H.S., Karachi</span>
                </div>
                <div className="w-[2px] h-8 bg-gradient-to-b from-[#0B0B0C] to-[#1E9BF0]" aria-hidden="true" />
                <div className="relative flex flex-col items-center animate-pin-bounce">
                  <div className="w-12 h-12 rounded-full rounded-br-none rotate-45 bg-gradient-to-br from-[#6CC4FF] via-[#1E9BF0] to-[#0B3A9E] shadow-[0_12px_28px_rgba(30,155,240,0.50)] border-2 border-white flex items-center justify-center">
                    <span className="w-4 h-4 rounded-full bg-white -rotate-45 shadow-inner" />
                  </div>
                </div>
                {/* Ground radar target rings */}
                <div className="relative flex items-center justify-center mt-1" aria-hidden="true">
                  <span className="w-14 h-4 rounded-full border border-[#1E9BF0]/50 bg-[#1E9BF0]/15 animate-pulse" />
                  <span className="absolute w-7 h-2 rounded-full bg-[#0B3A9E]/40" />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* REAL EMBEDDED GOOGLE MAP IFRAME + TWO ACTION BUTTONS ('Get Directions' and 'Call Now') */}
        <RevealOnScroll delay={0.28}>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 rounded-[24px] overflow-hidden border border-[#E5ECF3] h-[310px] sm:h-[330px] bg-[#F1F2F4] relative shadow-sm">
              <iframe
                title="Aslam Dental Care Google Map Location in P.E.C.H.S., Karachi"
                src={contact.googleMapsEmbedUrl}
                className="w-full h-full border-0 contrast-105 opacity-95 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lg:col-span-4 rounded-[24px] bg-[#F8FAFC] p-6 sm:p-7 border border-[#E5ECF3] h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#1E9BF0]">
                  <MapPin className="w-4 h-4" />
                  <span>Visit Our Clinic</span>
                </div>
                <h3 className="mt-2 font-outfit font-semibold text-[22px] text-[#0B0B0C]">
                  {siteConfig.clinicName}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#6B7280]">
                  {contact.address}
                </p>
                <p className="mt-2 text-[12px] text-[#0B0B0C] font-medium">
                  Open: {contact.hours}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-[48px] rounded-full bg-[#1E9BF0] hover:bg-[#1583D2] text-white text-[14px] font-medium flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(30,155,240,0.28)] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={contact.phoneTel}
                  className="w-full h-[48px] rounded-full bg-[#0B0B0C] hover:bg-[#1E9BF0] text-white text-[14px] font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
