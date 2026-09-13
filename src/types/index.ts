export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  benefits: string[];
  image: string;
  alt: string;
  ctaText: string;
  href: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  lessonType: string;
  preferredArea: string;
  preferredDateTime: string;
  message: string;
}
