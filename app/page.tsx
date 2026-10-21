import {
  SiteHeader,
  Hero,
  Problem,
  Stats,
  Platform,
  Customers,
  Roles,
  Features,
  Resources,
  Calculator,
  Trust,
  Cta,
  Faq,
  SiteFooter,
} from '@/components/sections';
import { faqs } from '@/lib/content';

export default function HomePage() {
  // FAQ structured data helps search and AI answer engines pick up the answers.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Problem />
        <Stats />
        <Platform />
        <Customers />
        <Roles />
        <Features />
        <Resources />
        <Calculator />
        <Trust />
        <Cta />
        <Faq />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
