export interface DateSlot {
  isoDate: string;
  dayName: string;
  dayNumber: string;
  monthYear: string;
  fullDisplay: string;
}

export interface BookingFormState {
  selectedDate: DateSlot;
  selectedTime: string;
  treatment: string;
  patientName: string;
  mobileNumber: string;
  forChild: boolean;
  forFamilyMember: boolean;
}

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/**
 * Generates 7 upcoming Mon-Sat clinic dates starting from a base date.
 */
export function generateUpcomingDates(baseDate: Date = new Date()): DateSlot[] {
  const slots: DateSlot[] = [];
  const cursor = new Date(baseDate.getTime());

  while (slots.length < 7) {
    const dayOfWeek = cursor.getDay();
    // Clinic is open Monday - Saturday (skip Sunday = 0)
    if (dayOfWeek !== 0) {
      const dd = String(cursor.getDate()).padStart(2, '0');
      const dayName = DAY_NAMES[dayOfWeek];
      const monthName = MONTH_NAMES[cursor.getMonth()];
      const shortMonth = SHORT_MONTHS[cursor.getMonth()];
      const year = cursor.getFullYear();

      slots.push({
        isoDate: cursor.toISOString().split('T')[0],
        dayName,
        dayNumber: dd,
        monthYear: `${monthName} ${year}`,
        fullDisplay: `${dayName}, ${dd} ${shortMonth} ${year}`,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return slots;
}

/**
 * Returns the list of "Booked for" labels based on the toggles.
 */
export function getBookedForRecipients(
  patientName: string,
  forChild: boolean,
  forFamilyMember: boolean
): string[] {
  const cleanName = patientName.trim() || 'Self';
  const recipients: string[] = [cleanName];
  if (forChild) recipients.push('Child');
  if (forFamilyMember) recipients.push('Family member');
  return recipients;
}

/**
 * Validates that a phone number has at least 7 digits when entered.
 */
export function isValidPakistanPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 14;
}

/**
 * Builds the WhatsApp URL and formatted message for the booking summary.
 */
export function buildWhatsAppBookingUrl(
  whatsappNumber: string,
  state: BookingFormState
): { message: string; url: string } {
  const recipients = getBookedForRecipients(
    state.patientName,
    state.forChild,
    state.forFamilyMember
  ).join(', ');

  const lines = [
    'Hello Aslam Dental Care, I would like to book an appointment:',
    `• Treatment: ${state.treatment}`,
    `• Doctor: Dr. Fahad Aslam (BDS, RDS)`,
    `• Date: ${state.selectedDate.fullDisplay}`,
    `• Time Slot: ${state.selectedTime}`,
    `• Patient Name: ${state.patientName.trim() || 'Not provided'}`,
    `• Mobile: ${state.mobileNumber.trim() || 'Not provided'}`,
    `• Booked For: ${recipients}`,
    `• Clinic: Jheel Park Rd, Block 2, P.E.C.H.S., Karachi`,
  ];

  const message = lines.join('\n');
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return { message, url };
}

/**
 * Calculates the polar coordinates along the right-half arc for the Mobile Process Dial (Section 6B).
 * Active index sits at 0 degrees (rightmost centre point of the circle).
 * Inactive steps are spaced by stepAngleDeg along the arc.
 */
export function computeDialStepGeometry(
  stepIndex: number,
  activeIndex: number,
  radiusPx: number = 190,
  stepAngleDeg: number = 28
): {
  angleDeg: number;
  xOffsetPx: number;
  yOffsetPx: number;
  isActive: boolean;
  opacity: number;
} {
  const delta = stepIndex - activeIndex;
  const angleDeg = delta * stepAngleDeg;
  const angleRad = (angleDeg * Math.PI) / 180;

  const xOffsetPx = Math.round(radiusPx * Math.cos(angleRad) * 100) / 100;
  const yOffsetPx = Math.round(radiusPx * Math.sin(angleRad) * 100) / 100;
  const isActive = delta === 0;
  const distance = Math.abs(delta);
  const opacity = isActive ? 1 : Math.max(0.25, 1 - distance * 0.25);

  return {
    angleDeg,
    xOffsetPx,
    yOffsetPx,
    isActive,
    opacity,
  };
}
