import { useState } from 'react';
import { siteConfig } from './config/siteConfig';
import { FloatingUI } from './components/shared/FloatingUI';
import { ScrollingMarquee } from './components/shared/ScrollReveal';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SmileTransformationsSection } from './components/sections/SmileTransformationsSection';
import { TreatmentProcessSection } from './components/sections/TreatmentProcessSection';
import { MeetTheTeamSection } from './components/sections/MeetTheTeamSection';
import { ReviewsAndTrustSection } from './components/sections/ReviewsAndTrustSection';
import { CarePackagesSection } from './components/sections/CarePackagesSection';
import { BookingSection } from './components/sections/BookingSection';
import { FaqSection } from './components/sections/FaqSection';
import { FindUsSection } from './components/sections/FindUsSection';
import { FooterSection } from './components/sections/FooterSection';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>(
    siteConfig.booking.treatments[0]
  );

  const handleSelectTreatment = (treatment: string) => {
    const matched =
      siteConfig.booking.treatments.find(
        (t) => t.toLowerCase() === treatment.toLowerCase() || t.includes(treatment)
      ) || treatment;
    setSelectedTreatment(matched);
  };

  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] relative overflow-x-hidden">
      {/* Sticky Navbar (>80px scroll), Authentic Floating WhatsApp Button, Mobile Sticky Bar */}
      <FloatingUI />

      <main className="w-full">
        {/* 1. Navbar + Hero (Full-Bleed Connected Section with Real Smiling Man & 3D Dental Renders) */}
        <HeroSection onSelectTreatment={handleSelectTreatment} />

        {/* Dynamic Scrolling Text Marquee Ticker linking Hero to About */}
        <ScrollingMarquee variant="blue" />

        {/* 2. About + Stats */}
        <AboutSection />

        {/* 3. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 4. Services */}
        <ServicesSection onSelectTreatment={handleSelectTreatment} />

        {/* 5. Smile Transformations (Carousel + Before/After Promo Banner) */}
        <SmileTransformationsSection onSelectTreatment={handleSelectTreatment} />

        {/* 6. Treatment Process (Desktop Panels + Mobile Circular Dial) */}
        <TreatmentProcessSection />

        {/* 7. Meet the Team */}
        <MeetTheTeamSection />

        {/* Subtle Light Scrolling Text Marquee linking Team to Reviews */}
        <ScrollingMarquee
          variant="light"
          items={[
            '4.9 ★ GOOGLE RATING',
            '5,000+ HAPPY PATIENTS IN KARACHI',
            'DR. FAHAD ASLAM (BDS, RDS)',
            'STERILISED INSTRUMENTS & DIGITAL X-RAYS',
            'WALK-INS WELCOME 24/7 MON–SAT',
          ]}
        />

        {/* 8. Reviews + Trust Strip ('Care You Can Trust') */}
        <ReviewsAndTrustSection />

        {/* 9. Care Packages */}
        <CarePackagesSection onSelectPlan={handleSelectTreatment} />

        {/* 10. Booking - Select a Slot */}
        <BookingSection
          selectedTreatment={selectedTreatment}
          onSelectTreatment={setSelectedTreatment}
        />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. Find Us / Contact */}
        <FindUsSection />
      </main>

      {/* 13. Footer */}
      <FooterSection />
    </div>
  );
}
