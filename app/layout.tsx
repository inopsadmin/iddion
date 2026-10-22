import type { Metadata, Viewport } from 'next';
import { Figtree, Caveat_Brush } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { organizationSchema } from '@/lib/seo';
import { SITE_NAME, SITE_URL, THEME } from '@/lib/site';
import './globals.css';

const sans = Figtree({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-sans', display: 'swap' });
const script = Caveat_Brush({ subsets: ['latin'], weight: '400', variable: '--font-script', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: '%s' },
  description: 'Workforce management software for Indian plants: contract labour, HRIS, payroll and earned wage access.',
  applicationName: SITE_NAME,
  publisher: 'Inddion IT Solutions Pvt. Ltd.',
  formatDetection: { telephone: false },
  openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_IN' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  // icons come from app/icon.svg and app/apple-icon.png (Next.js file conventions)
};

export const viewport: Viewport = {
  themeColor: '#141A3A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-theme={THEME} className={`${sans.variable} ${script.variable}`}>
      <body>
        <JsonLd data={[organizationSchema()]} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
