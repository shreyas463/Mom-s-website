/**
 * SINGLE SOURCE OF TRUTH for all site content.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  ⚠️  ACTION REQUIRED — fill in the CONTACT block below before going live.
 *      The phone / WhatsApp / email values are PLACEHOLDERS. Replace them
 *      with Dr. Rashmi Chaudhary's real, consented contact details so the
 *      booking form actually reaches her.
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  Everything else in this file was compiled from her public professional
 *  profiles (Cloudnine, Practo, etc.). Verify it stays accurate over time.
 */

export const contact = {
  // ── FILL THESE IN ────────────────────────────────────────────────────
  // WhatsApp number in FULL international format, digits only, no "+".
  // Example for an Indian mobile: '919812345678'
  whatsappNumber: '910000000000', // TODO: replace with real WhatsApp number
  // Email that should receive booking requests.
  email: 'appointments@example.com', // TODO: replace with real email
  // Phone number shown as a "tap to call" link (international format ok).
  phoneDisplay: '+91 00000 00000', // TODO: replace with real phone
  phoneDial: '+910000000000', // TODO: replace, digits + leading country code

  // Formspree endpoint — the "real inbox" backend. Create a free form at
  // https://formspree.io, then paste its endpoint here, e.g.
  //   'https://formspree.io/f/abcdwxyz'
  // When set, the booking form submits directly to your inbox (no page leaves
  // the site) and WhatsApp/email become optional shortcuts. Leave '' to fall
  // back to the WhatsApp / email flow.
  formspreeEndpoint: '', // TODO (optional): paste Formspree endpoint
  // ──────────────────────────────────────────────────────────────────────
}

/**
 * True once the real contact details above have been filled in. While this is
 * false, the site hides every WhatsApp / call button so a patient can never
 * send a booking message to the placeholder number by mistake.
 */
export const contactReady = !contact.whatsappNumber.startsWith('91000')

export const doctor = {
  name: 'Dr. Rashmi Chaudhary',
  title: 'Head of Department (HOD) — Obstetrics & Gynaecology',
  // Short accolade shown prominently in the hero. Reflects her public ranking
  // as a top-rated OB-GYN on Sarjapur Road, Bangalore.
  accolade: 'Rated Best OB-GYN in Sarjapur Road, Bangalore',
  tagline:
    'Compassionate, evidence-based care for every stage of a woman’s life — from fertility and pregnancy to complex gynaecological surgery.',
  yearsExperience: 26,
  hospital: 'Cloudnine Hospitals, Bangalore',
  cloudnineYears: 6,
  kmcRegistration: '82428', // Karnataka Medical Council registration
  consultationFeeINR: 850,
  languages: ['English', 'Hindi', 'Bengali', 'Marathi', 'Kannada'],

  // Verified official profile
  cloudnineProfile: 'https://www.cloudninecare.com/doctors/dr-rashmi-chaudhary',
}

export const qualifications = [
  {
    degree: 'M.B.B.S',
    institution: 'Rajendra Institute of Medical Sciences (RIMS), Ranchi',
  },
  {
    degree: 'DNB (Obstetrics & Gynaecology)',
    institution: 'Tata Main Hospital (TMH), Jamshedpur',
  },
  {
    degree: 'MNAMS',
    institution: 'Member, National Academy of Medical Sciences',
  },
  {
    degree: 'FICMCH',
    institution:
      'Fellow, Indian College of Maternal & Child Health',
  },
]

export const experience = [
  {
    role: 'Head of Department (HOD) — Obstetrics & Gynaecology',
    place: 'Cloudnine Hospitals, Bangalore',
    detail:
      'Heads the Obstetrics & Gynaecology department at Cloudnine, caring for expectant mothers and gynaecology patients across the Bellandur and Sarjapur Road units.',
  },
  {
    role: 'Senior Consultant',
    place: 'Apollo Cradle, Bangalore',
    detail:
      'Served for several years as a senior consultant in obstetrics and gynaecology prior to joining Cloudnine.',
  },
  {
    role: 'Training & early career',
    place: 'Tata Main Hospital (TMH), a tertiary referral centre',
    detail:
      'Underwent extensive training in high-risk pregnancy management, fetal medicine and complex gynaecological surgery at one of the region’s leading referral hospitals.',
  },
]

export const expertise = [
  {
    icon: 'pregnancy',
    title: 'High-Risk Pregnancy Care',
    description:
      'Specialised management of complicated and high-risk pregnancies, keeping mother and baby safe through careful monitoring and planning.',
  },
  {
    icon: 'fetal',
    title: 'Fetal Medicine',
    description:
      'Assessment of fetal wellbeing and growth, including obstetric ultrasound and guidance on fetal movement monitoring.',
  },
  {
    icon: 'surgery',
    title: 'Minimally Invasive Surgery',
    description:
      'Laparoscopy and hysteroscopy for gynaecological conditions — smaller incisions, less pain and faster recovery.',
  },
  {
    icon: 'gynae',
    title: 'Complex Gynaecological Surgery',
    description:
      'Experienced surgical care for fibroids, ovarian and other gynaecological conditions requiring an expert hand.',
  },
  {
    icon: 'fertility',
    title: 'Fertility & Preconception',
    description:
      'Preconception counselling and fertility guidance, including care for PCOD and its impact on conception.',
  },
  {
    icon: 'maternity',
    title: 'Maternity & Antenatal Care',
    description:
      'Complete pregnancy care from the first visit through delivery, with regular maternal check-ups and support.',
  },
]

export const locations = [
  {
    name: 'Cloudnine Hospital — Bellandur',
    area: 'Bellandur, Bengaluru, Karnataka 560103',
    mapsQuery: 'Cloudnine Hospital Bellandur Bangalore',
  },
  {
    name: 'Cloudnine Hospital — Sarjapur Road',
    area: 'Sarjapur Road / Haralur, Bengaluru, Karnataka',
    mapsQuery: 'Cloudnine Hospital Sarjapur Road Bangalore',
  },
]

/**
 * Reviews: we show the REAL aggregate rating and link out to the platforms
 * where genuine, verified patient reviews live. We intentionally do NOT invent
 * individual patient quotes. The two short excerpts below are paraphrased
 * summaries of recurring themes in public reviews — replace them any time with
 * real, consented testimonials Dr. Chaudhary wishes to feature.
 */
export const reviews = {
  aggregateRating: 4.6,
  ratingCount: 527,
  platforms: [
    {
      name: 'Practo',
      url: 'https://www.practo.com/bangalore/doctor/dr-rashmi-choudhary-gynecologist-obstetrician',
    },
    {
      name: 'Cloudnine',
      url: 'https://www.cloudninecare.com/doctors/dr-rashmi-chaudhary',
    },
    {
      name: 'Justdial',
      url: 'https://www.justdial.com/Bangalore/Dr-Rashmi-Choudhary-Cloudnine-Hospital-Bellandur/080PXX80-XX80-180502133403-M3Z4_BZDET',
    },
  ],
  themes: [
    {
      quote:
        'Explains every medical detail clearly and patiently, so you always understand what is happening and why.',
      attribution: 'Recurring theme in public patient reviews',
    },
    {
      quote:
        'Attentive and reassuring throughout pregnancy — patients describe feeling genuinely safe and well cared for.',
      attribution: 'Recurring theme in public patient reviews',
    },
  ],
}

export const videos = [
  {
    id: 't_aJNfTzGPU',
    title: 'How Does PCOD Affect Fertility?',
    topic: 'PCOD & Fertility',
  },
  {
    id: 'vaxVjHHHDa4',
    title: 'Treatment Options for PCOD',
    topic: 'PCOD',
  },
  {
    id: '9-nwE_6kjgE',
    title: 'Age-wise Presentation of PCOD',
    topic: 'PCOD',
  },
  {
    id: 'lvqwQdBQuNU',
    title: 'Putting on Weight with PCOD',
    topic: 'PCOD',
  },
  {
    id: 'DXfdxWcqyI8',
    title: 'Fibroids in Pregnancy',
    topic: 'Pregnancy',
  },
  {
    id: 'uJxAeU9zmJ8',
    title: 'Daily Fetal Movement Count',
    topic: 'Pregnancy',
  },
  {
    id: 'YC82pIbUHkU',
    title: 'Intrahepatic Cholestasis of Pregnancy',
    topic: 'Pregnancy',
  },
  {
    id: 'Pyg6-yBSe5s',
    title: 'Preconception Counselling',
    topic: 'Planning a Pregnancy',
  },
]

export const consultationTypes = ['Virtual (online video)', 'In-person at Cloudnine']

export const concernOptions = [
  'Pregnancy / Antenatal care',
  'High-risk pregnancy',
  'Fertility / Preconception',
  'PCOD / PCOS',
  'Fibroids',
  'Menstrual / Gynaecology concern',
  'Post-natal care',
  'General consultation',
  'Other',
]
