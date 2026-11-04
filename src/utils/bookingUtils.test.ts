import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateUpcomingDates,
  getBookedForRecipients,
  isValidPakistanPhone,
  buildWhatsAppBookingUrl,
  computeDialStepGeometry,
} from './bookingUtils';

test('generateUpcomingDates returns 7 Mon-Sat clinic dates and skips Sunday', () => {
  // 2026-11-04 is a Wednesday
  const base = new Date('2026-11-04T10:00:00Z');
  const slots = generateUpcomingDates(base);
  assert.equal(slots.length, 7);
  for (const slot of slots) {
    assert.notEqual(slot.dayName, 'Sun');
  }
  assert.equal(slots[0].dayName, 'Wed');
  assert.equal(slots[0].dayNumber, '04');
});

test('getBookedForRecipients includes patient name and selected family toggles', () => {
  assert.deepEqual(getBookedForRecipients('Ali Khan', false, false), ['Ali Khan']);
  assert.deepEqual(getBookedForRecipients('Ali Khan', true, false), ['Ali Khan', 'Child']);
  assert.deepEqual(getBookedForRecipients('', true, true), ['Self', 'Child', 'Family member']);
});

test('isValidPakistanPhone validates 10-14 digit numbers', () => {
  assert.equal(isValidPakistanPhone('+92 310 4555546'), true);
  assert.equal(isValidPakistanPhone('03104555546'), true);
  assert.equal(isValidPakistanPhone('12345'), false);
});

test('buildWhatsAppBookingUrl encodes full booking details for wa.me/923104555546', () => {
  const slots = generateUpcomingDates(new Date('2026-11-04T10:00:00Z'));
  const result = buildWhatsAppBookingUrl('923104555546', {
    selectedDate: slots[0],
    selectedTime: '10-11 AM',
    treatment: 'Dental Implants',
    patientName: 'Sara Ahmed',
    mobileNumber: '+92 300 1234567',
    forChild: false,
    forFamilyMember: true,
  });

  assert.ok(result.url.startsWith('https://wa.me/923104555546?text='));
  assert.ok(result.message.includes('Dental Implants'));
  assert.ok(result.message.includes('10-11 AM'));
  assert.ok(result.message.includes('Sara Ahmed, Family member'));
});

test('computeDialStepGeometry places active step at angle 0 and rotates inactive steps along arc', () => {
  const active = computeDialStepGeometry(2, 2, 190, 28);
  assert.equal(active.isActive, true);
  assert.equal(active.angleDeg, 0);
  assert.equal(active.xOffsetPx, 190);
  assert.equal(active.yOffsetPx, 0);

  const prev = computeDialStepGeometry(1, 2, 190, 28);
  assert.equal(prev.isActive, false);
  assert.equal(prev.angleDeg, -28);
  assert.ok(prev.yOffsetPx < 0);
});
