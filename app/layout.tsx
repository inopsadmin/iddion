import type { Metadata } from 'next';
import { Figtree, Caveat_Brush } from 'next/font/google';
import { SITE_THEME } from '@/lib/content';
import './globals.css';

const sans = Figtree({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-sans', display: 'swap' });
const script = Caveat_Brush({ subsets: ['latin'], weight: '400', variable: '--font-script', display: 'swap' });

export const metadata: Metadata = {
  title: 'IDDION | Contract workforce management for Indian manufacturing',
  description:
    'IDDION connects gate attendance, contract labour compliance, payroll and earned wage access in one platform for Indian plants.',
  openGraph: {
    title: 'IDDION | Contract workforce management',
    description: 'Every contract worker, from the gate to the payslip, in one platform.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme={SITE_THEME} className={`${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
