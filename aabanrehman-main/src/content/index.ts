export type ProjectMedia =
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string; poster: string; caption: string; captions?: string };

export interface Project {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  role: string;
  technologies: string;
  challenge: string;
  approach: string;
  features?: string[];
  kind?: 'invoice' | 'quiz' | 'billing' | 'generic';
  featured?: boolean;
  showOnHome?: boolean;
  image?: string;
  imageAlt?: string;
  media?: ProjectMedia[];
  demoUrl?: string;
  sourceUrl?: string;
  order: number;
  visible?: boolean;
}

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  url?: string;
  image?: string;
  order: number;
  visible?: boolean;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  text: string;
  order: number;
  visible?: boolean;
}

// Build-time JSON keeps the public site independent of CMS availability.
// Entries are validated by scripts/validate-content.mjs before every build.
function collection<T extends { order: number; visible?: boolean }>(files: Record<string, T>): (T & { id: string })[] {
  return Object.entries(files)
    .map(([path, entry]) => ({ ...entry, id: path }))
    .filter(entry => entry.visible === true)
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

export const projects = collection(import.meta.glob<Project>('./projects/*.json', { eager: true, import: 'default' }));
export const certificates = collection(import.meta.glob<Certificate>('./certificates/*.json', { eager: true, import: 'default' }));
export const experience = collection(import.meta.glob<Experience>('./experience/*.json', { eager: true, import: 'default' }));
import profileData from './profile.json';
import servicesData from './services.json';
import resumeData from './resume.json';
export const profile = profileData;
export const services = servicesData.items;
export const resume = resumeData;
import testimonialData from './testimonials.json';
export interface Testimonial {
  name: string;
  company?: string;
  project?: string;
  quote: string;
  approved: boolean;
  consentToPublish: boolean;
  consentToPublishEmail: boolean;
  publicEmail?: string;
}
export const testimonials = (testimonialData.items as Testimonial[]).filter(item => item.approved && item.consentToPublish);
