import React, { useEffect, useState } from 'react';
import { Phone, Calendar, MessageCircle, Menu, X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FloatingUI: React.FC = () => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar after 80px scroll - Full-width edge-to-edge */}
      <header
        aria-label="Sticky navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/92 backdrop-blur-md border-b border-[#E8EBEE] shadow-[0_8px_30px_rgba(15,30,50,0.06)] ${
          isStickyVisible
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Logo + Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-[#1E9BF0] rounded-lg"
            >
              <img
                src={siteConfig.logo.darkSrc}
                alt={siteConfig.clinicName}
                className="h-11 sm:h-12 w-11 sm:w-12 object-contain"
              />
              <div className="leading-none">
                <div className="font-outfit font-bold text-[19px] sm:text-[20px] text-[#0B0B0C] tracking-[-0.02em]">
                  {siteConfig.logo.wordmarkTop}
                </div>
                <div className="text-[9px] tracking-[0.2em] text-[#475569] font-semibold mt-0.5">
                  {siteConfig.logo.wordmarkBottom}
                </div>
              </div>
            </a>

            {/* Zone 2: Nav Links */}
            <nav aria-label="Primary sticky navigation" className="hidden md:flex items-center gap-7">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12.5px] font-medium text-[#0B0B0C]/80 hover:text-[#1E9BF0] transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#process"
                className="text-[12.5px] font-medium text-[#0B0B0C]/80 hover:text-[#1E9BF0] transition-colors whitespace-nowrap shrink-0"
              >
                Process
              </a>
              <a
                href="#reviews"
                className="text-[12.5px] font-medium text-[#0B0B0C]/80 hover:text-[#1E9BF0] transition-colors whitespace-nowrap shrink-0"
              >
                Reviews
              </a>
              <a
                href="#packages"
                className="text-[12.5px] font-medium text-[#0B0B0C]/80 hover:text-[#1E9BF0] transition-colors whitespace-nowrap shrink-0"
              >
                Packages
              </a>
              <a
                href="#faq"
                className="text-[12.5px] font-medium text-[#0B0B0C]/80 hover:text-[#1E9BF0] transition-colors whitespace-nowrap shrink-0"
              >
                FAQ
              </a>
            </nav>

            {/* Zone 3: Phone CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={siteConfig.contact.phoneTel}
                className="hidden sm:inline-flex items-center gap-2 text-[15px] font-semibold text-[#1E9BF0] hover:text-[#0B3A9E] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href="#booking"
                className="hidden lg:inline-flex items-center justify-center h-9 px-4 rounded-full bg-[#0B0B0C] hover:bg-[#1E9BF0] text-white text-[12px] font-medium transition-colors"
              >
                Book Now
              </a>
              <a
                href={siteConfig.contact.phoneTel}
                aria-label="Call Aslam Dental Care"
                className="sm:hidden w-10 h-10 rounded-full bg-[#1E9BF0] text-white flex items-center justify-center"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                className="md:hidden w-10 h-10 rounded-full bg-[#F1F2F4] text-[#0B0B0C] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 rounded-[20px] bg-white p-3 shadow-xl border border-[#E8EBEE] flex flex-col gap-1.5">
              {[
                { label: 'About us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'Our team', href: '#team' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Packages', href: '#packages' },
                { label: 'Book Appointment', href: '#booking' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-[14px] font-medium text-[#0B0B0C] hover:bg-[#F1F2F4]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Authentic Floating WhatsApp Button (bottom-right) on every screen */}
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Aslam Dental Care"
        className="group fixed right-4 sm:right-6 bottom-20 md:bottom-6 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 sm:px-4 sm:py-3.5 shadow-[0_14px_34px_rgba(37,211,102,0.45)] animate-whatsapp-pulse hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.516 0-9.999 4.486-10 10.004-.001 1.766.46 3.489 1.337 5.008L2 22l5.125-1.344c1.474.805 3.133 1.23 4.899 1.231h.004c5.515 0 9.998-4.486 9.999-10.004.001-2.673-1.039-5.186-2.927-7.076C17.212 3.042 14.702 2 12.031 2zm5.828 14.289c-.246.693-1.434 1.326-1.988 1.41-.508.076-1.151.108-1.858-.118-.429-.137-.979-.318-1.682-.622-2.96-1.278-4.892-4.26-5.04-4.456-.148-.197-1.205-1.601-1.205-3.053 0-1.452.762-2.167 1.033-2.462.271-.295.589-.369.786-.369.197 0 .394.002.566.01.181.009.424-.069.664.508.246.591.837 2.043.911 2.191.074.148.123.32.025.517-.099.197-.148.32-.295.492-.148.172-.311.385-.443.517-.148.147-.302.307-.13.603.172.295.765 1.262 1.642 2.044 1.127 1.006 2.078 1.318 2.373 1.465.295.148.468.123.64-.074.172-.197.738-.861.935-1.157.197-.295.394-.246.664-.148.271.099 1.723.812 2.018.96.295.148.492.221.566.344.074.124.074.714-.172 1.404z" />
        </svg>
        <span className="hidden sm:inline-block text-[13px] font-semibold tracking-tight pr-1 whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Mobile-only Sticky Bottom Bar ('Call' and 'Book Now') */}
      <div
        role="region"
        aria-label="Quick mobile actions"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8EBEE] px-3 py-2 flex items-center gap-2.5 shadow-[0_-8px_24px_rgba(15,30,50,0.08)]"
      >
        <a
          href={siteConfig.contact.phoneTel}
          className="flex-1 h-[44px] rounded-full bg-[#F1F2F4] text-[#0B0B0C] font-medium text-[14px] flex items-center justify-center gap-2 active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#1E9BF0]" />
          <span>Call</span>
        </a>
        <a
          href="#booking"
          className="flex-1 h-[44px] rounded-full bg-[#1E9BF0] text-white font-medium text-[14px] flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(30,155,240,0.3)] active:scale-98 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </a>
      </div>
    </>
  );
};
