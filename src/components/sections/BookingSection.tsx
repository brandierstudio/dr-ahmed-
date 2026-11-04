import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Phone,
  Stethoscope,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import {
  generateUpcomingDates,
  getBookedForRecipients,
  buildWhatsAppBookingUrl,
  isValidPakistanPhone,
} from '../../utils/bookingUtils';
import { RevealOnScroll, AnimatedText } from '../shared/ScrollReveal';
import { SectionTag } from '../shared/SectionTag';

interface BookingSectionProps {
  selectedTreatment: string;
  onSelectTreatment: (treatment: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedTreatment,
  onSelectTreatment,
}) => {
  const dateSlots = useMemo(() => generateUpcomingDates(), []);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState(siteConfig.booking.timeSlots[1]); // Default '10-11 AM'
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [forChild, setForChild] = useState(false);
  const [forFamilyMember, setForFamilyMember] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const [confirmationToast, setConfirmationToast] = useState<string | null>(null);

  const activeDate = dateSlots[selectedDateIndex] || dateSlots[0];

  const bookedForChips = useMemo(
    () => getBookedForRecipients(patientName, forChild, forFamilyMember),
    [patientName, forChild, forFamilyMember]
  );

  const { url: whatsappBookingUrl } = useMemo(
    () =>
      buildWhatsAppBookingUrl(siteConfig.contact.whatsappNumber, {
        selectedDate: activeDate,
        selectedTime,
        treatment: selectedTreatment,
        patientName,
        mobileNumber,
        forChild,
        forFamilyMember,
      }),
    [
      activeDate,
      selectedTime,
      selectedTreatment,
      patientName,
      mobileNumber,
      forChild,
      forFamilyMember,
    ]
  );

  const handleConfirmClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (mobileNumber.trim() && !isValidPakistanPhone(mobileNumber)) {
      e.preventDefault();
      setValidationMessage('Please enter a valid 10–14 digit mobile number (e.g. +92 310 4555546).');
      return;
    }
    setValidationMessage(null);
    setConfirmationToast(
      `Ready to send on WhatsApp for ${selectedTreatment} on ${activeDate.fullDisplay} (${selectedTime}).`
    );
  };

  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="relative w-full bg-gradient-to-b from-[#EDF4FA] via-[#E5F0F9] to-[#DCEAF6] py-16 sm:py-24 overflow-hidden"
    >
      {/* Soft decorative circles */}
      <div
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#1E9BF0]/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-[#6CC4FF]/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <RevealOnScroll>
            <SectionTag label="10 - ONLINE BOOKING" withDot className="bg-white" />
          </RevealOnScroll>
          <h2 className="mt-3 font-outfit font-light text-[32px] sm:text-[46px] leading-[1.1] tracking-[-0.02em] text-[#0B0B0C]">
            <AnimatedText text="Book Your Dental Visit" />
          </h2>
        </div>

        {/* Wide white card (radius 24px, soft shadow), two columns: LEFT 2/3, RIGHT 1/3 */}
        <RevealOnScroll delay={0.1}>
          <div className="rounded-[24px] bg-white shadow-[0_24px_65px_rgba(15,30,50,0.10)] border border-white grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            {/* LEFT COLUMN (ABOUT TWO-THIRDS: 8 COLS) */}
            <div className="lg:col-span-8 p-5 sm:p-8 lg:p-10 lg:border-r border-[#E8EBEE]">
              {/* Header row: back arrow + 'Select a Slot' (16px bold) */}
              <div className="flex items-center gap-3 pb-5 border-b border-[#E8EBEE]">
                <a
                  href="#services"
                  aria-label="Back to services"
                  className="w-8 h-8 rounded-full hover:bg-[#F1F2F4] flex items-center justify-center text-[#0B0B0C] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </a>
                <h3 id="booking-heading" className="text-[17px] font-bold text-[#0B0B0C]">
                  {siteConfig.booking.title}
                </h3>
              </div>

              {/* 'Select Date - [Month Year]': 7 date chips in a row */}
              <div className="mt-6">
                <div className="text-[12.5px] font-semibold text-[#0B0B0C]">
                  Select Date -{' '}
                  <span className="font-normal text-[#6B7280]">{activeDate.monthYear}</span>
                </div>

                <div
                  className="mt-3 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar"
                  role="radiogroup"
                  aria-label="Select appointment date"
                >
                  {dateSlots.map((slot, idx) => {
                    const isSelected = idx === selectedDateIndex;
                    return (
                      <button
                        key={slot.isoDate}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedDateIndex(idx)}
                        className={`shrink-0 w-[64px] h-[66px] rounded-[12px] border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1E9BF0] border-[#1E9BF0] text-white shadow-[0_8px_20px_rgba(30,155,240,0.30)]'
                            : 'bg-white border-[#E5E7EB] text-[#0B0B0C] hover:border-[#1E9BF0]'
                        }`}
                      >
                        <span
                          className={`text-[10px] ${
                            isSelected ? 'text-white/90' : 'text-[#6B7280]'
                          }`}
                        >
                          {slot.dayName}
                        </span>
                        <span className="text-[16px] font-bold mt-0.5 tabular-nums">
                          {slot.dayNumber}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <hr className="my-6 border-t border-[#E8EBEE]" />

              {/* 'Select Time': outlined chips (radius 8px, 12px text), selected one filled blue */}
              <div>
                <div className="text-[12.5px] font-semibold text-[#0B0B0C]">Select Time</div>
                <div
                  className="mt-3 flex flex-wrap gap-2.5"
                  role="radiogroup"
                  aria-label="Select appointment time"
                >
                  {siteConfig.booking.timeSlots.map((slot) => {
                    const isSelected = slot === selectedTime;
                    return (
                      <button
                        key={slot}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedTime(slot)}
                        className={`px-4 py-2 rounded-[8px] border text-[12px] font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#1E9BF0] border-[#1E9BF0] text-white shadow-[0_6px_16px_rgba(30,155,240,0.25)]'
                            : 'bg-white border-[#D1D5DB] text-[#0B0B0C] hover:border-[#1E9BF0]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              <hr className="my-6 border-t border-[#E8EBEE]" />

              {/* Row 'Treatment': a dropdown with the services list */}
              <div className="rounded-[14px] bg-[#F8FAFC] border border-[#E8EBEE] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#1E9BF0]/10 text-[#1E9BF0] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-4 h-4" />
                  </span>
                  <div>
                    <label
                      htmlFor="booking-treatment-select"
                      className="block text-[12.5px] font-semibold text-[#0B0B0C]"
                    >
                      Treatment
                    </label>
                    <span className="text-[11px] text-[#6B7280]">
                      Choose your dental service or care package
                    </span>
                  </div>
                </div>

                <select
                  id="booking-treatment-select"
                  value={selectedTreatment}
                  onChange={(e) => onSelectTreatment(e.target.value)}
                  className="h-10 px-3 rounded-[8px] bg-white border border-[#D1D5DB] text-[13px] font-medium text-[#0B0B0C] focus:outline-2 focus:outline-[#1E9BF0]"
                >
                  {siteConfig.booking.treatments.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 'Your name' + 'Mobile Number' */}
              <div className="mt-4 rounded-[14px] bg-[#F8FAFC] border border-[#E8EBEE] p-4">
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#1E9BF0]/10 text-[#1E9BF0] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[12.5px] font-semibold text-[#0B0B0C]">
                      Patient Details & Mobile Number
                    </div>
                    <p className="text-[11px] text-[#6B7280] mt-0.5">
                      Enter your name and mobile number to confirm your appointment slot via WhatsApp.
                    </p>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="booking-patient-name"
                          className="block text-[11px] font-medium text-[#4B5563] mb-1"
                        >
                          Your name
                        </label>
                        <input
                          id="booking-patient-name"
                          type="text"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Ahmed Khan"
                          className="w-full h-10 px-3 rounded-[8px] bg-white border border-[#D1D5DB] text-[13px] text-[#0B0B0C] focus:outline-2 focus:outline-[#1E9BF0]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="booking-mobile-number"
                          className="block text-[11px] font-medium text-[#4B5563] mb-1"
                        >
                          Mobile Number
                        </label>
                        <input
                          id="booking-mobile-number"
                          type="tel"
                          value={mobileNumber}
                          onChange={(e) => {
                            setMobileNumber(e.target.value);
                            if (validationMessage) setValidationMessage(null);
                          }}
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full h-10 px-3 rounded-[8px] bg-white border border-[#D1D5DB] text-[13px] text-[#0B0B0C] focus:outline-2 focus:outline-[#1E9BF0]"
                        />
                      </div>
                    </div>
                    {validationMessage && (
                      <p role="alert" className="mt-2 text-[11px] font-medium text-[#0B3A9E]">
                        {validationMessage}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Row 'Booking for someone else?' with two toggle switches */}
              <div className="mt-4 rounded-[14px] bg-[#F8FAFC] border border-[#E8EBEE] p-4">
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#1E9BF0]/10 text-[#1E9BF0] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </span>
                  <div className="flex-1">
                    <div className="text-[12.5px] font-semibold text-[#0B0B0C]">
                      Booking for someone else?
                    </div>
                    <p className="text-[11px] text-[#6B7280]">
                      Include a child or family member in this appointment request
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {/* Child Toggle */}
                      <div className="flex items-center justify-between py-1">
                        <span className="text-[12px] font-medium text-[#0B0B0C]">Child</span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={forChild}
                          aria-label="Book for Child"
                          onClick={() => setForChild((v) => !v)}
                          className={`w-10 h-5.5 rounded-full p-0.5 transition-colors cursor-pointer ${
                            forChild ? 'bg-[#1E9BF0]' : 'bg-[#CBD5E1]'
                          }`}
                        >
                          <span
                            className={`block w-4.5 h-4.5 rounded-full bg-white shadow-xs transition-transform ${
                              forChild ? 'translate-x-4.5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Family member Toggle */}
                      <div className="flex items-center justify-between py-1 border-t border-[#E8EBEE]">
                        <span className="text-[12px] font-medium text-[#0B0B0C]">
                          Family member
                        </span>
                        <button
                          type="button"
                          role="switch"
                          aria-checked={forFamilyMember}
                          aria-label="Book for Family member"
                          onClick={() => setForFamilyMember((v) => !v)}
                          className={`w-10 h-5.5 rounded-full p-0.5 transition-colors cursor-pointer ${
                            forFamilyMember ? 'bg-[#1E9BF0]' : 'bg-[#CBD5E1]'
                          }`}
                        >
                          <span
                            className={`block w-4.5 h-4.5 rounded-full bg-white shadow-xs transition-transform ${
                              forFamilyMember ? 'translate-x-4.5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (ONE-THIRD: 4 COLS) - Booking Details Summary + 'We can help you' card */}
            <div className="lg:col-span-4 p-5 sm:p-8 bg-[#FBFDFE] flex flex-col justify-between gap-5">
              <div className="rounded-[18px] bg-white border border-[#E8EBEE] p-5 shadow-2xs">
                <h3 className="text-[14px] font-bold text-[#0B0B0C] pb-3 border-b border-[#E8EBEE]">
                  Booking Details
                </h3>

                {/* Treatment Row */}
                <div className="py-3 border-b border-[#E8EBEE]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#6B7280]">Treatment Selected</span>
                    <a href="#services" className="text-[11px] font-medium text-[#1E9BF0]">
                      Edit
                    </a>
                  </div>
                  <div
                    data-testid="booking-summary-treatment"
                    className="mt-1 text-[13px] font-semibold text-[#0B0B0C]"
                  >
                    {selectedTreatment}
                  </div>
                </div>

                {/* Doctor Row (Dr. Fahad Aslam, small avatar) */}
                <div className="py-3 border-b border-[#E8EBEE] flex items-center gap-3">
                  <img
                    src={siteConfig.doctor.photo}
                    alt={siteConfig.doctor.name}
                    className="w-10 h-10 rounded-full object-cover object-top border border-[#E8EBEE] shadow-2xs shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-[11px] text-[#6B7280]">Doctor</div>
                    <div className="text-[12.5px] font-semibold text-[#0B0B0C]">
                      {siteConfig.doctor.fullNameWithCredentials}
                    </div>
                  </div>
                </div>

                {/* Clinic Row with 'Walk-ins welcome' badge */}
                <div className="py-3 border-b border-[#E8EBEE]">
                  <div className="text-[11px] text-[#6B7280]">Clinic</div>
                  <div className="mt-0.5 text-[12px] font-semibold text-[#0B0B0C]">
                    {siteConfig.clinicName}
                  </div>
                  <div className="text-[11px] text-[#6B7280] leading-snug">
                    {siteConfig.contact.shortAddress}
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0B3A9E] text-[10px] font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#1E9BF0]" />
                    <span>Walk-ins welcome</span>
                  </div>
                </div>

                {/* Date & Time with calendar icon (updates live) */}
                <div className="py-3 border-b border-[#E8EBEE]">
                  <div className="text-[11px] text-[#6B7280]">Date & Time</div>
                  <div
                    data-testid="booking-summary-datetime"
                    className="mt-1 flex items-center gap-2 text-[12px] font-semibold text-[#0B0B0C]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#1E9BF0] shrink-0" />
                    <span>
                      {selectedTime} · {activeDate.fullDisplay}
                    </span>
                  </div>
                </div>

                {/* 'Booked for' chips */}
                <div className="py-3 border-b border-[#E8EBEE]">
                  <div className="text-[11px] text-[#6B7280] mb-1.5">Booked for</div>
                  <div className="flex flex-wrap gap-1.5">
                    {bookedForChips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-0.5 rounded-full bg-[#F1F2F4] text-[#0B0B0C] text-[11px] font-medium"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Consultation fee row with bold amount */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-[#0B0B0C]">Consultation fee</span>
                  <span className="text-[16px] font-bold text-[#0B0B0C] tabular-nums">
                    {siteConfig.booking.consultationFee}
                  </span>
                </div>

                {/* Full-width button 'Confirm on WhatsApp' with real WhatsApp icon */}
                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConfirmClick}
                  className="mt-4 w-full h-[46px] rounded-[10px] bg-[#1E9BF0] hover:bg-[#1583D2] text-white text-[13px] font-semibold flex items-center justify-center gap-2 shadow-[0_10px_24px_rgba(30,155,240,0.30)] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 2c-5.516 0-9.999 4.486-10 10.004-.001 1.766.46 3.489 1.337 5.008L2 22l5.125-1.344c1.474.805 3.133 1.23 4.899 1.231h.004c5.515 0 9.998-4.486 9.999-10.004.001-2.673-1.039-5.186-2.927-7.076C17.212 3.042 14.702 2 12.031 2zm5.828 14.289c-.246.693-1.434 1.326-1.988 1.41-.508.076-1.151.108-1.858-.118-.429-.137-.979-.318-1.682-.622-2.96-1.278-4.892-4.26-5.04-4.456-.148-.197-1.205-1.601-1.205-3.053 0-1.452.762-2.167 1.033-2.462.271-.295.589-.369.786-.369.197 0 .394.002.566.01.181.009.424-.069.664.508.246.591.837 2.043.911 2.191.074.148.123.32.025.517-.099.197-.148.32-.295.492-.148.172-.311.385-.443.517-.148.147-.302.307-.13.603.172.295.765 1.262 1.642 2.044 1.127 1.006 2.078 1.318 2.373 1.465.295.148.468.123.64-.074.172-.197.738-.861.935-1.157.197-.295.394-.246.664-.148.271.099 1.723.812 2.018.96.295.148.492.221.566.344.074.124.074.714-.172 1.404z" />
                  </svg>
                  <span>Confirm on WhatsApp</span>
                </a>

                {confirmationToast && (
                  <p
                    role="status"
                    className="mt-2.5 text-[11px] text-[#0B3A9E] bg-[#E0F2FE] rounded-lg px-3 py-2"
                  >
                    {confirmationToast}
                  </p>
                )}
              </div>

              {/* Small card 'We can help you' below */}
              <div className="rounded-[18px] bg-white border border-[#E8EBEE] p-4 flex items-start gap-3 shadow-2xs">
                <span className="w-9 h-9 rounded-full bg-[#F1F2F4] text-[#1E9BF0] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-[#0B0B0C]">We can help you</div>
                  <p className="text-[11px] text-[#6B7280] mt-0.5 leading-snug">
                    Call us{' '}
                    <a
                      href={siteConfig.contact.phoneTel}
                      className="text-[#1E9BF0] font-medium hover:underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>{' '}
                    or chat with our team.
                  </p>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center px-3.5 py-1.5 rounded-[6px] border border-[#1E9BF0] text-[#1E9BF0] text-[11px] font-semibold hover:bg-[#1E9BF0] hover:text-white transition-colors"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
