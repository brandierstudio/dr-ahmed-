export interface ServiceItem {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  iconName: 'implant' | 'braces' | 'shield-tooth' | 'sparkles' | 'root-canal' | 'child-smile';
  isCore: boolean;
}

export interface TransformationSlide {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  stats: { value: string; label: string }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  shortDescription: string;
  iconName: 'chat' | 'target' | 'clipboard' | 'tool' | 'plane';
  bgHex: string;
  isDarkText: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  position: 'left' | 'center' | 'right';
}

export interface ReviewItem {
  id: string;
  name: string;
  timeAgo: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface TrustNote {
  number: string;
  title: string;
  description: string;
  tintHex: string;
  rotationDeg: number;
}

export interface CarePackage {
  id: string;
  name: string;
  subtitle: string;
  priceMain: string;
  priceDecimal?: string;
  priceUnit: string;
  pricePrefix?: string;
  features: string[];
  ctaLabel: string;
  isPopular: boolean;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answerParagraphs: string[];
  defaultOpen?: boolean;
}

export const siteConfig = {
  clinicName: 'Aslam Dental Care',
  tagline: 'Where Smile Meets Elegance',
  doctor: {
    name: 'Dr. Fahad Aslam',
    credentials: 'BDS, RDS',
    fullNameWithCredentials: 'Dr. Fahad Aslam (BDS, RDS)',
    role: 'Founder & Lead Dentist',
    photo: '/assets/aistudio/1793795383226_53f18edd.jpg',
    localPhotoCopy: '/images/dr-fahad-aslam.jpg',
  },
  logo: {
    src: '/images/logo-transparent-dark.png',
    darkSrc: '/images/logo-transparent-dark.png',
    whiteSrc: '/images/logo-transparent-white.png',
    localLogoCopy: '/images/logo-aslam.jpg',
    wordmarkTop: 'Aslam',
    wordmarkBottom: 'DENTAL CARE',
  },
  contact: {
    phoneDisplay: '+92 310 4555546',
    phoneTel: 'tel:+923104555546',
    whatsappNumber: '923104555546',
    whatsappUrl: 'https://wa.me/923104555546',
    address: 'Jheel Park Rd, Block 2, P.E.C.H.S., Karachi, Pakistan',
    shortAddress: 'Jheel Park Rd, Block 2, P.E.C.H.S., Karachi',
    hours: 'Monday to Saturday, open 24 hours',
    shortHours: 'Mon - Sat, open 24 hours',
    category: 'Dentist and Dental Office (medical and health)',
    email: 'info@aslamdentalcare.pk', // TODO(DEMO): Replace with official clinic email if updated
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Aslam+Dental+Care+Jheel+Park+Rd+Block+2+PECHS+Karachi',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=Jheel%20Park%20Rd,%20Block%202,%20P.E.C.H.S.,%20Karachi,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed',
    socials: {
      facebook: '#contact', // TODO(DEMO): Replace placeholder link with clinic Facebook page
      instagram: '#contact', // TODO(DEMO): Replace placeholder link with clinic Instagram profile
      whatsapp: 'https://wa.me/923104555546',
      youtube: '#contact', // TODO(DEMO): Replace placeholder link with clinic YouTube channel
    },
  },
  description:
    'Aslam Dental Care provides a wide range of dental treatment at affordable prices with up-to-date technology.',
  demoStats: {
    yearsExperience: 10, // TODO(DEMO): Sample years of experience stat
    happyPatients: 5000, // TODO(DEMO): Sample happy patients stat
    satisfactionPercent: 98, // TODO(DEMO): Sample patient satisfaction percentage
    averageRating: 4.9, // TODO(DEMO): Sample average rating
    reviewsCount: 320, // TODO(DEMO): Sample review count
    treatmentsCount: 30, // TODO(DEMO): Sample treatments offered count
  },
  navLinks: [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    headlineLine1: 'WHERE SMILE',
    headlineLine2: 'MEETS',
    headlineLine3: 'ELEGANCE',
    ctaLabel: 'Book Appointment',
    tags: ['Expert Care', 'Modern Dentistry'],
    rightParagraph:
      'Your smile deserves exceptional care. We combine advanced dental technology with a personal approach to make every visit comfortable, every treatment effective.',
    portraitImage: '/images/hero-man-cutout.png', // Borderless studio cutout of smiling man
    arches: [
      {
        id: 'arch-1',
        type: 'service' as const,
        title: 'Braces & Aligners',
        subtitle: 'Straighter, healthier smile',
        icon3d: '/images/icon-3d-braces.png',
        treatmentTarget: 'Orthodontics (Braces & Aligners)',
      },
      {
        id: 'arch-2',
        type: 'stat' as const,
        topTag: 'Trusted dental care',
        statValue: '10+', // TODO(DEMO)
        statLabel: 'Years of experience',
      },
      {
        id: 'arch-3',
        type: 'service' as const,
        title: 'Dental Implants',
        subtitle: 'Restore your smile',
        icon3d: '/images/icon-3d-implant.png',
        treatmentTarget: 'Dental Implants',
      },
      {
        id: 'arch-4',
        type: 'stat' as const,
        topTag: 'Smiles that Matter',
        statValue: '98%', // TODO(DEMO)
        statLabel: 'Patient Satisfaction',
      },
      {
        id: 'arch-5',
        type: 'service' as const,
        title: 'General Dentistry',
        subtitle: 'Care for the whole family',
        icon3d: '/images/icon-3d-tooth.png',
        treatmentTarget: 'General Dentistry',
      },
    ],
  },
  about: {
    pill: 'About Aslam Dental Care',
    statementBlack:
      'Since 2014, our team has cared for thousands of smiles across Karachi, ', // TODO(DEMO): Founding year sample
    statementGrey: 'from routine check-ups to complete smile makeovers.',
    card1Text:
      'Explore modern dentistry designed for every age. Every visit includes a full oral check, a clear explanation of your treatment, and gentle care from Dr. Fahad Aslam.',
    card1Chips: ['Same-day Appointments', 'Modern Equipment', 'Gentle Care'],
    card2Title: 'Meet Dr. Fahad',
    card3Caption: 'Stories and moments from patients who found their smile with us.',
    card3Photos: [
      { src: '/images/clinic-interior.jpg', alt: 'Aslam Dental Care clinic interior in Karachi' }, // TODO(DEMO)
      { src: '/images/smile-after-3.jpg', alt: 'Smiling patient at Aslam Dental Care' }, // TODO(DEMO)
      { src: '/images/dental-chair.jpg', alt: 'Modern dental chair and sterile equipment' }, // TODO(DEMO)
    ],
    stats: [
      { value: 10, suffix: '+', label: 'Years of experience', decimals: 0 }, // TODO(DEMO)
      { value: 5000, suffix: '+', label: 'Happy patients', decimals: 0 }, // TODO(DEMO)
      { value: 30, suffix: '+', label: 'Treatments offered', decimals: 0 }, // TODO(DEMO)
      { value: 4.9, suffix: '', label: 'Average rating', decimals: 1 }, // TODO(DEMO)
    ],
  },
  whyChooseUs: {
    pill: 'Why Choose Us',
    heading: 'Why patients choose Aslam Dental Care',
    rightParagraph: 'Every treatment we offer is built on trust, hygiene, and results you can see.',
    col1: {
      title: 'Local Expertise',
      text: 'Based in P.E.C.H.S., Karachi, we know our community and treat every patient like family.',
    },
    col2Top: {
      title: 'Qualified Doctor',
      text: 'Led by Dr. Fahad Aslam (BDS, RDS) with hands-on experience in implants and orthodontics.',
    },
    col2Bottom: {
      title: 'Modern Technology & Affordable Care',
      text: 'Digital X-rays, sterilised instruments, and fair prices with no hidden costs.',
      avatars: [
        '/images/avatar-1.jpg',
        '/images/avatar-2.jpg',
        '/images/avatar-3.jpg',
        '/images/avatar-4.jpg',
        '/images/avatar-5.jpg',
      ], // TODO(DEMO)
    },
    col3: {
      caption: 'See real smiles from our clinic.',
      image: '/images/smile-after-3.jpg', // TODO(DEMO)
    },
  },
  services: [
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent, natural-looking replacement for missing teeth.',
      iconName: 'implant',
      isCore: true,
    },
    {
      id: 'orthodontics',
      title: 'Orthodontics (Braces & Aligners)',
      description: 'Straighten teeth and correct your bite, for kids and adults.',
      iconName: 'braces',
      isCore: true,
    },
    {
      id: 'general-dentistry',
      title: 'General Dentistry',
      description: 'Check-ups, cleaning, fillings and preventive care.',
      iconName: 'shield-tooth',
      isCore: true,
    },
    {
      id: 'teeth-whitening',
      title: 'Teeth Whitening & Cosmetic', // TODO(DEMO): Extra demo service
      description: 'Brighter, balanced smiles with safe whitening and bonding.',
      iconName: 'sparkles',
      isCore: false,
    },
    {
      id: 'root-canal',
      title: 'Root Canal Treatment', // TODO(DEMO): Extra demo service
      description: 'Gentle treatment that saves your natural tooth.',
      iconName: 'root-canal',
      isCore: false,
    },
    {
      id: 'kids-dentistry',
      title: 'Kids Dentistry', // TODO(DEMO): Extra demo service
      description: 'Friendly, comfortable care for your little ones.',
      iconName: 'child-smile',
      isCore: false,
    },
  ] as ServiceItem[],
  transformations: {
    pill: '05 - SMILE TRANSFORMATIONS',
    heading: "Smiles We've Created",
    ctaLabel: 'Explore all Cases',
    promoBanner: {
      scriptTop: 'Get your',
      boldBottom: 'Smile Restored',
      postClinicName: 'Aslam Dental Care',
      postLocation: 'Karachi',
      likesText: '1,204 likes', // TODO(DEMO)
      hashtagText: '#smilemakeover', // TODO(DEMO)
    },
    slides: [
      {
        id: 'full-smile-makeover',
        title: 'Full Smile Makeover', // TODO(DEMO)
        description: 'Veneers and whitening for a confident, natural smile.',
        beforeImage: '/images/smile-before-4.jpg',
        afterImage: '/images/smile-after-3.jpg',
        stats: [
          { value: '2 weeks', label: 'Treatment time' }, // TODO(DEMO)
          { value: '100%', label: 'Natural look' }, // TODO(DEMO)
          { value: '5/5', label: 'Patient rating' }, // TODO(DEMO)
        ],
      },
      {
        id: 'dental-implant-restoration',
        title: 'Dental Implant Restoration', // TODO(DEMO)
        description: 'Single-tooth titanium implant with custom porcelain crown.',
        beforeImage: '/images/smile-before-2.jpg',
        afterImage: '/images/smile-after-1.jpg',
        stats: [
          { value: '3 months', label: 'Healing & fit' }, // TODO(DEMO)
          { value: '100%', label: 'Bite strength' }, // TODO(DEMO)
          { value: '5/5', label: 'Patient rating' }, // TODO(DEMO)
        ],
      },
      {
        id: 'braces-alignment',
        title: 'Braces & Alignment', // TODO(DEMO)
        description: 'Orthodontic alignment for crowded teeth and balanced bite.',
        beforeImage: '/images/smile-before-4.jpg',
        afterImage: '/images/hero-man-smile.jpg',
        stats: [
          { value: '12 mos', label: 'Treatment time' }, // TODO(DEMO)
          { value: '100%', label: 'Aligned arch' }, // TODO(DEMO)
          { value: '5/5', label: 'Patient rating' }, // TODO(DEMO)
        ],
      },
      {
        id: 'teeth-whitening-case',
        title: 'Teeth Whitening', // TODO(DEMO)
        description: 'In-clinic safe enamel brightening for a radiant, even shade.',
        beforeImage: '/images/smile-before-1.jpg',
        afterImage: '/images/smile-after-4.jpg',
        stats: [
          { value: '45 mins', label: 'Single session' }, // TODO(DEMO)
          { value: '6 shades', label: 'Brighter smile' }, // TODO(DEMO)
          { value: '5/5', label: 'Patient rating' }, // TODO(DEMO)
        ],
      },
    ] as TransformationSlide[],
  },
  process: {
    pill: 'Our Process',
    heading: 'Your Treatment Journey',
    steps: [
      {
        number: '01',
        title: 'Consultation',
        description:
          'Tell us your concerns. Dr. Fahad listens, examines, and explains your options clearly.',
        shortDescription: 'Dr. Fahad listens, examines, and explains your options clearly.',
        iconName: 'chat',
        bgHex: '#FFFFFF',
        isDarkText: true,
      },
      {
        number: '02',
        title: 'Diagnosis & X-ray',
        description: 'Digital X-rays and a full oral check to find the exact cause.',
        shortDescription: 'Digital X-rays and a full oral check to find the exact cause.',
        iconName: 'target',
        bgHex: '#E4EAFB',
        isDarkText: true,
      },
      {
        number: '03',
        title: 'Treatment Plan',
        description: 'A clear step-by-step plan with timeline and cost before we begin.',
        shortDescription: 'A clear step-by-step plan with timeline and cost before we begin.',
        iconName: 'clipboard',
        bgHex: '#1D6BF3',
        isDarkText: false,
      },
      {
        number: '04',
        title: 'Treatment',
        description: 'Gentle, precise care with modern equipment in a sterile setting.',
        shortDescription: 'Gentle, precise care with modern equipment in a sterile setting.',
        iconName: 'tool',
        bgHex: '#0B3A9E',
        isDarkText: false,
      },
      {
        number: '05',
        title: 'Follow-up Care',
        description: 'Check-ups and guidance to keep your results lasting.',
        shortDescription: 'Check-ups and guidance to keep your results lasting.',
        iconName: 'plane',
        bgHex: '#050B2A',
        isDarkText: false,
      },
    ] as ProcessStep[],
  },
  team: {
    heading: 'Meet the Team',
    subtitle: 'THE PEOPLE BEHIND YOUR SMILE',
    members: [
      {
        id: 'ayesha-khan',
        role: 'Dental Hygienist', // TODO(DEMO): Sample team member
        name: 'Ayesha Khan',
        image: '/images/team-ayesha.jpg',
        position: 'left',
      },
      {
        id: 'fahad-aslam',
        role: 'Founder & Lead Dentist',
        name: 'Dr. Fahad Aslam (BDS, RDS)',
        image: '/assets/aistudio/1793795383226_53f18edd.jpg',
        position: 'center',
      },
      {
        id: 'hamza-ali',
        role: 'Clinic Coordinator', // TODO(DEMO): Sample team member
        name: 'Hamza Ali',
        image: '/images/team-hamza.jpg',
        position: 'right',
      },
    ] as TeamMember[],
  },
  reviews: {
    headingLine1: 'Read reviews,',
    headingLine2: 'smile with confidence.',
    ratingSummary: '4.9/5', // TODO(DEMO)
    reviewsCountText: 'Based on 320 reviews', // TODO(DEMO)
    leftLabel: 'What our patients are saying',
    items: [
      {
        id: 'rev-1',
        name: 'Sara M.', // TODO(DEMO)
        timeAgo: '1 week ago',
        text: 'Very gentle and professional. Dr. Fahad explained everything and my implant feels completely natural.',
        rating: 5,
        avatar: '/images/avatar-1.jpg',
      },
      {
        id: 'rev-2',
        name: 'Bilal A.', // TODO(DEMO)
        timeAgo: '2 weeks ago',
        text: 'Clean clinic, modern equipment and very reasonable prices. Highly recommended.',
        rating: 5,
        avatar: '/images/avatar-2.jpg',
      },
      {
        id: 'rev-3',
        name: 'Hina R.', // TODO(DEMO)
        timeAgo: '3 weeks ago',
        text: 'My kids were nervous but the staff made them feel comfortable. Thank you!',
        rating: 5,
        avatar: '/images/avatar-3.jpg',
      },
      {
        id: 'rev-4',
        name: 'Usman K.', // TODO(DEMO)
        timeAgo: '1 month ago',
        text: 'Best braces treatment in P.E.C.H.S. Great results.',
        rating: 5,
        avatar: '/images/avatar-4.jpg',
      },
    ] as ReviewItem[],
  },
  trustStrip: {
    pill: 'Our Promise',
    heading: 'Care You Can Trust',
    notes: [
      {
        number: '01',
        title: 'Real Reviews',
        description: 'Verified feedback from patients in Karachi.',
        tintHex: '#EBF5FF',
        rotationDeg: -2.5,
      },
      {
        number: '02',
        title: 'Qualified Dentist',
        description: 'BDS, RDS qualified, with years of hands-on experience.',
        tintHex: '#F0F4FF',
        rotationDeg: 2.2,
      },
      {
        number: '03',
        title: 'Safe & Sterile',
        description: 'Sterilised instruments and strict hygiene for every patient.',
        tintHex: '#E6F4F9',
        rotationDeg: -2.0,
      },
      {
        number: '04',
        title: 'Always Reachable',
        description: 'Call, WhatsApp or visit us. We reply fast.',
        tintHex: '#EEF2FF',
        rotationDeg: 2.8,
      },
      {
        number: '05',
        title: 'Transparent Plans',
        description: 'Clear treatment plans and pricing before we start.',
        tintHex: '#E8F6FE',
        rotationDeg: -1.8,
      },
    ] as TrustNote[],
  },
  carePackages: {
    pill: '09 - CARE PACKAGES',
    heading: 'Care That Fits Every Smile',
    subtitle: "Whether it's a routine check-up or a full smile makeover, we have a plan that fits.",
    plans: [
      {
        id: 'essential-care',
        name: 'Essential Care',
        subtitle: 'For routine check-ups',
        priceMain: 'Rs 2,500', // TODO(DEMO): Demo price in PKR
        priceDecimal: '.00',
        priceUnit: '/visit',
        features: ['Full oral examination', 'Digital X-ray', 'Scaling & polishing'],
        ctaLabel: 'Choose Essential',
        isPopular: false,
      },
      {
        id: 'smile-makeover',
        name: 'Smile Makeover',
        subtitle: 'For a complete smile upgrade',
        pricePrefix: 'from ',
        priceMain: 'Rs 25,000', // TODO(DEMO): Demo price in PKR
        priceDecimal: '.00',
        priceUnit: '/plan',
        features: [
          'Everything in Essential, plus:',
          'Teeth whitening',
          'Cosmetic bonding',
          'Smile design consultation',
        ],
        ctaLabel: 'Choose Smile Makeover',
        isPopular: true,
      },
    ] as CarePackage[],
    consultationBanner: {
      title: 'Not sure which plan is right for you?',
      subtitle: 'Book a free 15-minute consultation with Dr. Fahad.', // TODO(DEMO)
      ctaLabel: 'Book a Consultation',
    },
  },
  booking: {
    title: 'Select a Slot',
    timeSlots: [
      '09-10 AM',
      '10-11 AM',
      '11-12 PM',
      '12-1 PM',
      '4-6 PM',
      '6-8 PM',
      '8-10 PM',
    ],
    treatments: [
      'Dental Implants',
      'Orthodontics (Braces & Aligners)',
      'General Dentistry',
      'Teeth Whitening & Cosmetic',
      'Root Canal Treatment',
      'Kids Dentistry',
      'Essential Care Package (Rs 2,500)',
      'Smile Makeover Package (from Rs 25,000)',
      'Free 15-Min Consultation',
    ],
    consultationFee: 'Rs 2,500', // TODO(DEMO): Demo consultation fee in PKR
  },
  faq: {
    pill: '11 - FAQS',
    heading: 'Common Questions',
    items: [
      {
        id: 'faq-1',
        number: '1',
        question: 'What treatments do you offer?',
        answerParagraphs: [
          'We offer Dental Implants, Orthodontics (braces and clear aligners), General Dentistry (check-ups, scaling, fillings), Teeth Whitening & Cosmetic Dentistry, Root Canal Treatment, and Kids Dentistry.',
          'Every treatment is tailored to your dental health goals using digital diagnostics and modern equipment.',
        ],
      },
      {
        id: 'faq-2',
        number: '2',
        question: 'How long does implant treatment take?',
        answerParagraphs: [
          'Most implants are completed in 3 to 6 months, including healing time. Dr. Fahad will give you an exact timeline after your examination.',
          'Simple cases using existing bone can be faster; we always explain every step before we start.',
        ],
        defaultOpen: true,
      },
      {
        id: 'faq-3',
        number: '3',
        question: 'Are your treatments painful?',
        answerParagraphs: [
          'We use modern anaesthesia and gentle techniques so you stay comfortable throughout.',
          'Dr. Fahad and our team take extra time with nervous patients and children to ensure a calm, pain-free experience.',
        ],
      },
      {
        id: 'faq-4',
        number: '4',
        question: 'Do you treat children?',
        answerParagraphs: [
          'Yes. We provide friendly, patient care for kids of all ages.',
          'From first dental check-ups and gentle cleanings to early orthodontic assessments, we make visits positive for young smiles.',
        ],
      },
      {
        id: 'faq-5',
        number: '5',
        question: 'How do I book an appointment?',
        answerParagraphs: [
          'Use the booking form, call +92 310 4555546, or message us on WhatsApp.',
          'We are open Monday to Saturday, 24 hours, at Jheel Park Rd, Block 2, P.E.C.H.S., Karachi, and walk-ins are welcome.',
        ],
      },
    ] as FaqItem[],
  },
  findUs: {
    heading: 'Find Us in Karachi',
    subtitle: 'Meeting our patients wherever they are',
    stats: [
      { value: 'Mon - Sat', label: 'Open days' },
      { value: '24 Hours', label: 'Open (as listed)' },
      { value: 'P.E.C.H.S.', label: 'Karachi' },
    ],
  },
  footer: {
    subscribeTitleLine1: 'Get dental care tips &',
    subscribeTitleLine2: 'clinic offers',
    exploreLinks: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Team', href: '#team' },
      { label: 'Reviews', href: '#reviews' },
      { label: 'Contact', href: '#contact' },
    ],
    galleryImages: [
      { src: '/images/gallery-1.jpg', alt: 'Dental care treatment room' },
      { src: '/images/gallery-2.jpg', alt: 'Modern dental equipment' },
      { src: '/images/gallery-3.jpg', alt: 'Patient smile makeover' },
      { src: '/images/gallery-4.jpg', alt: 'Clear aligners & orthodontics' },
      { src: '/images/clinic-interior.jpg', alt: 'Sterilised clinic room' },
      { src: '/images/dental-chair.jpg', alt: 'Dental implant precision care' },
    ],
    copyright: '(c) 2026 Aslam Dental Care. All rights reserved.',
  },
};
