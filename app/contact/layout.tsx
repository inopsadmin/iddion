import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Contact Us | IDDION',
  description: 'Get in touch with the IDDION team. We help Indian plants manage contract labour, HRIS and earned wage access. Office in Bengaluru — respond within 1 business day.',
  path: '/contact',
  keywords: ['contact IDDION', 'workforce management software India', 'contract labour software enquiry'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
