import type { Metadata } from 'next';
import { ORG, SITE_NAME, SITE_URL } from './site';
import type { Faq } from './faqs';

/* ---------------------------------------------------------------- metadata */

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. '/clms'. Used for the canonical URL. */
  path: string;
  keywords?: string[];
};

/** Builds per-page metadata: title, description, canonical, Open Graph and Twitter cards. */
export function pageMeta({ title, description, path, keywords }: PageMetaInput): Metadata {
  const url = path === '/' ? '/' : path;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_IN',
      url,
      title,
      description,
      // og:image comes from the opengraph-image.tsx file next to each page
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/* ------------------------------------------------------------- JSON-LD */

const abs = (p: string) => `${SITE_URL}${p === '/' ? '' : p}`;
const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: ORG.foundingDate,
    email: ORG.email,
    address: { '@type': 'PostalAddress', ...ORG.address },
    areaServed: 'IN',
    parentOrganization: { '@type': 'Organization', name: ORG.legalName, url: ORG.parentUrl },
    ...(ORG.sameAs.length ? { sameAs: ORG.sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: ORG.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

type SoftwareInput = {
  name: string;
  description: string;
  path: string;
  category?: string;
  features: string[];
};

/**
 * SoftwareApplication schema. Google only shows software rich results when `offers` (price)
 * or `aggregateRating` is present; add those here once you publish pricing or collect reviews.
 */
export function softwareSchema({ name, description, path, category = 'BusinessApplication', features }: SoftwareInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${abs(path)}#software`,
    name,
    description,
    url: abs(path),
    applicationCategory: category,
    operatingSystem: 'Web, Android, iOS',
    inLanguage: 'en-IN',
    featureList: features,
    publisher: { '@id': ORG_ID },
    provider: { '@id': ORG_ID },
    audience: { '@type': 'BusinessAudience', audienceType: 'Indian manufacturing, infrastructure and industrial enterprises' },
  };
}

/** FAQPage schema. Items whose answer still holds a [placeholder] are skipped. */
export function faqSchema(items: Faq[]) {
  const real = items.filter((f) => !/\[[^\]]+\]/.test(f.a));
  if (!real.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: real.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: abs(t.path) })),
  };
}
