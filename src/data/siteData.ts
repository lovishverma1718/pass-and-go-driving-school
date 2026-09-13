import { FAQ, ServiceItem } from '../types';

export const INSTRUCTOR = {
  name: 'Sukhdeep Dhillon',
  title: 'Certified Driving Instructor',
  phone: '778 512 1652',
  phoneRaw: '7785121652',
  phoneTel: 'tel:7785121652',
  email: 'Passngodrivingschool1@gmail.com',
  emailMailto: 'mailto:Passngodrivingschool1@gmail.com',
  locationDisplay: 'Surrey, British Columbia, Canada',
  tagline: 'Safe Driving. Confident Future.',
  subtagline: 'Quality Instruction. Better Drivers. Safer Roads.',
  corePillars: 'Patient. Professional. Dedicated.',
  mission: 'Your success is my goal.',
  motto: 'Learn Today. Drive Tomorrow.',
};

export const SERVICE_AREAS = [
  'Surrey',
  'Newton',
  'Delta',
  'South Surrey',
  'White Rock',
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'class-5',
    title: 'Class 5 Lessons',
    badge: 'Independent Driving',
    summary: 'Build stronger road skills, improve awareness, and develop the confidence needed for independent driving.',
    description: 'Develop the road skills, awareness, and confidence needed for independent driving. Lessons focus on practical situations, safe decision-making, and building stronger habits behind the wheel.',
    benefits: [
      'Stronger road awareness',
      'Better vehicle control',
      'Safer decision-making',
      'Increased confidence',
    ],
    image: '/images/hero-lesson.webp',
    alt: 'Driving lesson with instructor guiding a learner inside a vehicle',
    ctaText: 'Ask About Class 5',
    href: '/contact?lesson=class-5',
  },
  {
    id: 'class-7',
    title: 'Class 7 Lessons',
    badge: 'Foundational Skills',
    summary: 'Build a solid foundation with patient instruction focused on control, awareness, and safe road habits.',
    description: 'Build a strong foundation with patient instruction focused on core driving skills, observation, control, and responsible road habits.',
    benefits: [
      'Foundational driving skills',
      'Observation and awareness',
      'Lane and road positioning',
      'Confidence behind the wheel',
    ],
    image: '/images/instruction-guidance.webp',
    alt: 'Driving instructor explaining a lesson to a student beside a training vehicle',
    ctaText: 'Ask About Class 7',
    href: '/contact?lesson=class-7',
  },
  {
    id: 'road-test-prep',
    title: 'Road Test Preparation',
    badge: 'Focused Assessment',
    summary: 'Practice the skills and situations that matter before your road test with focused professional guidance.',
    description: 'Prepare with focused instruction designed around the practical skills and situations you want to feel more confident handling before your road test.',
    benefits: [
      'Practical preparation',
      'Focused assessment',
      'Identify areas for improvement',
      'Greater confidence before test day',
    ],
    image: '/images/road-test-assessment.webp',
    alt: 'Certified driving instructor conducting a driving assessment',
    ctaText: 'Prepare for Your Test',
    href: '/contact?lesson=road-test-prep',
  },
  {
    id: 'refresher',
    title: 'Refresher Lessons',
    badge: 'Skills & Confidence',
    summary: 'Refresh your skills, rebuild confidence, and become more comfortable behind the wheel again.',
    description: 'Returning to driving after time away? Refresh your skills, rebuild comfort, and regain confidence with focused practical instruction.',
    benefits: [
      'Refresh road awareness',
      'Rebuild confidence',
      'Practice specific skills',
      'Become more comfortable driving',
    ],
    image: '/images/steering-wheel.webp',
    alt: 'Driver holding the steering wheel during a driving lesson',
    ctaText: 'Book a Refresher',
    href: '/contact?lesson=refresher',
  },
];

export const WHY_US_PRINCIPLES = [
  {
    title: 'Patient Instruction',
    description: 'Clear explanations and a supportive learning environment.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Professional Guidance',
    description: 'Focused instruction built around practical driving situations.',
    icon: 'Compass',
  },
  {
    title: 'Safety First',
    description: 'Develop better awareness, decision-making, and responsible road habits.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Your Success Is the Goal',
    description: "Keep the learning experience centered on the driver's goals and progress.",
    icon: 'Target',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Get in touch',
    description: "Tell us what you are preparing for and which lesson you're interested in.",
  },
  {
    step: '02',
    title: 'Plan your lesson',
    description: 'Discuss the appropriate instruction based on your current skills and driving goal.',
  },
  {
    step: '03',
    title: 'Build confidence',
    description: 'Practice with focused guidance and continue developing safer driving habits.',
  },
];

export const FAQ_ITEMS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What lessons do you offer?',
    answer: 'Pass ’N’ Go offers Class 5 lessons, Class 7 lessons, road test preparation, and refresher lessons.',
  },
  {
    id: 'faq-2',
    question: 'Which areas do you serve?',
    answer: 'Lessons are available across Surrey, Newton, Delta, South Surrey, and White Rock.',
  },
  {
    id: 'faq-3',
    question: 'Do you offer road test preparation?',
    answer: 'Yes. Contact Pass ’N’ Go to discuss your road test preparation needs and the areas you would like to work on.',
  },
  {
    id: 'faq-4',
    question: 'Do you offer refresher lessons?',
    answer: 'Yes. Refresher lessons are available for drivers who want to rebuild comfort, confidence, and practical driving skills.',
  },
];

export const ABOUT_VALUES = [
  {
    keyword: 'PATIENT',
    description: 'Learning should feel supportive and focused.',
  },
  {
    keyword: 'PROFESSIONAL',
    description: 'Instruction should be clear, structured, and practical.',
  },
  {
    keyword: 'DEDICATED',
    description: 'Every lesson should stay focused on meaningful progress.',
  },
  {
    keyword: 'SAFETY FIRST',
    description: 'Better awareness and habits lead to better driving decisions.',
  },
];

// Helper to format WhatsApp message URL
export function createWhatsAppLink(details: {
  fullName?: string;
  phone?: string;
  lessonType?: string;
  preferredArea?: string;
  preferredDateTime?: string;
  message?: string;
}): string {
  const parts: string[] = [
    `Hello Sukhdeep, I would like to inquire about driving lessons with Pass ’N’ Go Driving School:`,
  ];
  if (details.fullName) parts.push(`• Name: ${details.fullName}`);
  if (details.phone) parts.push(`• Phone: ${details.phone}`);
  if (details.lessonType) parts.push(`• Lesson Type: ${details.lessonType}`);
  if (details.preferredArea) parts.push(`• Preferred Area: ${details.preferredArea}`);
  if (details.preferredDateTime) parts.push(`• Preferred Date/Time: ${details.preferredDateTime}`);
  if (details.message) parts.push(`• Notes: ${details.message}`);

  const text = encodeURIComponent(parts.join('\n'));
  return `https://wa.me/17785121652?text=${text}`;
}

// Helper to format SMS message URL
export function createSMSLink(details: {
  fullName?: string;
  phone?: string;
  lessonType?: string;
  preferredArea?: string;
  preferredDateTime?: string;
  message?: string;
}): string {
  const parts: string[] = [
    `Hi Sukhdeep, inquiring about Pass ’N’ Go Driving School:`,
  ];
  if (details.fullName) parts.push(`Name: ${details.fullName}`);
  if (details.lessonType) parts.push(`Lesson: ${details.lessonType}`);
  if (details.preferredArea) parts.push(`Area: ${details.preferredArea}`);
  if (details.preferredDateTime) parts.push(`Time: ${details.preferredDateTime}`);
  if (details.message) parts.push(`Note: ${details.message}`);

  const text = encodeURIComponent(parts.join('\n'));
  // &body= works across both iOS and Android browsers
  return `sms:+17785121652?&body=${text}`;
}
