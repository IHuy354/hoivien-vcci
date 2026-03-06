// Homepage section types for maintainability

export interface StatItem {
  value: string;
  label: string;
  icon?: string;
}

export interface FeatureCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ValueProposition {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface RegistrationBenefit {
  id: number;
  text: string;
  icon?: string;
}

export interface JourneyStep {
  id: number;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

export interface Speaker {
  id: number;
  name: string;
  position: string;
  avatar: string;
  company?: string;
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier?: 'platinum' | 'gold' | 'silver';
}

export interface CountdownConfig {
  eventDate: Date;
  title: string;
  subtitle?: string;
}
