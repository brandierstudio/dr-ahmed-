import React, { useState } from 'react';
import { Plus, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { SectionTag } from '../shared/SectionTag';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';

export const FaqSection: React.FC = () => {
  const { faq } = siteConfig;
  const defaultItem = faq.items.find((item) => item.defaultOpen) || faq.items[1];
  const [openId, setOpenId] = useState<string | null>(defaultItem.id);

  const toggleRow = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-gradient-to-b from-[#F7F9FC] via-[#F1F5F9] to-[#E8EEF5] border-y border-[#DCE5EE] py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div>
          {/* Tiny pill '11 - FAQS' with a dot + Centred heading 'Common Questions' (~56px Outfit Light) */}
          <div className="text-center">
            <RevealOnScroll>
              <SectionTag label={faq.pill} withDot className="bg-white" />
            </RevealOnScroll>
            <h2
              id="faq-heading"
              className="mt-4 font-outfit font-light text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#0B0B0C]"
            >
              <AnimatedText text={faq.heading} />
            </h2>
          </div>

          {/* ACCORDION (MAX-WIDTH 760PX, 5 ROWS) */}
          <div className="mt-8 sm:mt-10 max-w-[760px] mx-auto space-y-3">
            {faq.items.map((item, idx) => {
              const isOpen = item.id === openId;

              if (isOpen) {
                return (
                  <RevealOnScroll key={item.id} delay={idx * 0.05}>
                    <div className="rounded-[24px] p-[1.5px] bg-gradient-to-r from-[#1E9BF0] via-[#C4B5FD] to-[#FBCFE8] shadow-[0_14px_34px_rgba(15,30,50,0.06)] transition-all duration-250">
                      <div className="rounded-[23px] bg-white px-4 sm:px-6 py-4 sm:py-5">
                        <button
                          type="button"
                          onClick={() => toggleRow(item.id)}
                          aria-expanded={true}
                          className="w-full flex items-center justify-between gap-3 text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-[6px] bg-[#E0F2FE] text-[#1E9BF0] text-[11px] font-bold flex items-center justify-center shrink-0">
                              {item.number}
                            </span>
                            <span className="text-[14.5px] font-medium text-[#0B0B0C]">
                              {item.question}
                            </span>
                          </div>
                          <span className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] text-[#0B0B0C] flex items-center justify-center shrink-0 shadow-2xs">
                            <X className="w-4 h-4" />
                          </span>
                        </button>

                        <div className="mt-3.5 pl-9 pr-4 space-y-2.5">
                          {item.answerParagraphs.map((para, pIdx) => (
                            <p
                              key={pIdx}
                              className="text-[12.5px] leading-[1.65] text-[#4B5563]"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              }

              return (
                <RevealOnScroll key={item.id} delay={idx * 0.05}>
                  <div className="rounded-[24px] bg-white/85 hover:bg-white border border-white transition-colors duration-200">
                    <button
                      type="button"
                      onClick={() => toggleRow(item.id)}
                      aria-expanded={false}
                      className="w-full min-h-[58px] px-4 sm:px-6 py-3 flex items-center justify-between gap-3 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-[6px] bg-[#F1F5F9] text-[#6B7280] text-[11px] font-semibold flex items-center justify-center shrink-0">
                          {item.number}
                        </span>
                        <span className="text-[14.5px] font-medium text-[#0B0B0C]">
                          {item.question}
                        </span>
                      </div>
                      <span className="w-8 h-8 rounded-full bg-[#0B0B0C] text-white flex items-center justify-center shrink-0">
                        <Plus className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>

          {/* Under the list: 'Have any other questions?' and an underlined 'Contact Us' link */}
          <div className="mt-8 text-center">
            <p className="text-[12px] text-[#6B7280]">Have any other questions?</p>
            <a
              href="#contact"
              className="mt-1 inline-flex items-center gap-1 text-[13px] font-semibold text-[#0B0B0C] underline underline-offset-4 hover:text-[#1E9BF0] transition-colors"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
