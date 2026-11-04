import React, { useState } from 'react';
import { Mail, Send, Phone } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const FooterSection: React.FC = () => {
  const { footer, contact, logo, clinicName, description } = siteConfig;
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setSubscribeStatus('Please enter a valid email address.');
      return;
    }
    setSubscribeStatus('Thank you for subscribing to Aslam Dental Care updates!');
    setEmail('');
  };

  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-[#16171A] text-white pt-14 sm:pt-18 pb-24 md:pb-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-white/10"
    >
      {/* Faint large diagonal shapes in the bottom-right corner */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 w-[380px] h-[380px] rotate-35 bg-white/[0.025] rounded-[40px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-10 right-24 w-[260px] h-[260px] rotate-35 bg-white/[0.02] rounded-[32px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto">
        {/* SUBSCRIBE BAR: Darker rounded bar (radius 20px, #101113) */}
        <div className="rounded-[20px] bg-[#101113] px-6 sm:px-10 py-7 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-white/10">
          {/* Left: Outlined envelope icon in accent blue + two-line white 18px title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1E9BF0]/10 border border-[#1E9BF0]/25 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-[#1E9BF0]" strokeWidth={1.6} />
            </div>
            <div className="font-outfit font-semibold text-[18px] leading-[1.3] text-white">
              <div>{footer.subscribeTitleLine1}</div>
              <div>{footer.subscribeTitleLine2}</div>
            </div>
          </div>

          {/* Right: Email input with only a bottom line + white paper-plane icon at its end */}
          <form onSubmit={handleSubscribe} className="w-full md:w-[380px]" noValidate>
            <div className="relative flex items-center border-b border-white/25 focus-within:border-[#1E9BF0] transition-colors pb-2">
              <label htmlFor="footer-subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-subscribe-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribeStatus) setSubscribeStatus(null);
                }}
                placeholder="Email address"
                className="w-full bg-transparent text-[13px] text-white placeholder:text-[#9CA3AF] focus:outline-none pr-8"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-white hover:text-[#1E9BF0] transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {subscribeStatus && (
              <p role="status" className="mt-2 text-[11px] text-[#6CC4FF]">
                {subscribeStatus}
              </p>
            )}
          </form>
        </div>

        {/* FOUR COLUMNS */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Column 1 (4 cols): Larger Transparent White Logo + wordmark, 3-line grey description, 4 round dark social buttons */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-3.5 group">
              <img
                src={logo.whiteSrc}
                alt={clinicName}
                className="h-14 sm:h-16 w-14 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="leading-none">
                <div className="font-outfit font-bold text-[22px] sm:text-[24px] text-white tracking-[-0.02em]">
                  {logo.wordmarkTop}
                </div>
                <div className="text-[9.5px] tracking-[0.22em] text-[#9CA3AF] font-semibold mt-1">
                  {logo.wordmarkBottom}
                </div>
              </div>
            </a>

            <p className="mt-4 text-[13px] leading-[1.65] text-[#9CA3AF] max-w-[320px]">
              {description}
            </p>

            {/* Four round dark social buttons (Facebook, Instagram, WhatsApp, YouTube) */}
            <div className="mt-6 flex items-center gap-2.5">
              {[
                {
                  name: 'Facebook',
                  href: contact.socials.facebook,
                  svg: (
                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                  ),
                },
                {
                  name: 'Instagram',
                  href: contact.socials.instagram,
                  svg: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                  ),
                },
                {
                  name: 'WhatsApp',
                  href: contact.socials.whatsapp,
                  svg: (
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771z" />
                  ),
                },
                {
                  name: 'YouTube',
                  href: contact.socials.youtube,
                  svg: (
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  ),
                },
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  aria-label={soc.name}
                  className="w-9 h-9 rounded-full bg-[#101113] border border-white/10 text-white hover:bg-[#1E9BF0] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {soc.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 (2 cols): 'Explore' */}
          <div className="lg:col-span-2">
            <h3 className="font-outfit font-semibold text-[18px] text-white mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {footer.exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#9CA3AF] hover:text-[#1E9BF0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 (3 cols): 'Gallery': 3x2 grid of small rounded (8px) real clinic and smile photos */}
          <div className="lg:col-span-3">
            <h3 className="font-outfit font-semibold text-[18px] text-white mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2.5 max-w-[240px]">
              {footer.galleryImages.map((img, idx) => (
                <div
                  key={`${img.src}-${idx}`}
                  className="aspect-square rounded-[10px] overflow-hidden bg-[#101113] border border-white/10"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 (3 cols): 'Contact' */}
          <div className="lg:col-span-3">
            <h3 className="font-outfit font-semibold text-[18px] text-white mb-4">Contact</h3>
            <p className="text-[13px] leading-[1.6] text-[#9CA3AF]">
              {contact.shortAddress}
            </p>

            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-[13px] text-white hover:text-[#1E9BF0] transition-colors"
              >
                <span className="w-5 h-5 rounded-[4px] bg-[#1E9BF0] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-3 h-3" />
                </span>
                <span className="truncate">{contact.email}</span>
              </a>

              <a
                href={contact.phoneTel}
                className="flex items-center gap-2.5 text-[13px] font-semibold text-white hover:text-[#1E9BF0] transition-colors"
              >
                <span className="w-5 h-5 rounded-[4px] bg-[#1E9BF0] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-3 h-3" />
                </span>
                <span>{contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM: Thin divider and centred copyright */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-[12px] text-[#9CA3AF]">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
