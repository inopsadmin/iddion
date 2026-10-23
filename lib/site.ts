/** Site-wide settings. Edit these before going live. */

/** Colour theme: 'vivid' | 'purple-pop' | 'ocean' | 'sunrise' | 'forest' (see app/themes.css). */
export const THEME = 'vivid';

/** Production domain, no trailing slash. Used for canonical URLs, sitemap, Open Graph and schema. */
export const SITE_URL = 'https://iddion.com'; // TODO: confirm the production domain

export const SITE_NAME = 'IDDION';

export const ORG = {
  name: 'IDDION',
  legalName: 'Iddion Solutions Pvt. Ltd.',
  parentUrl: 'https://inops.tech',
  foundingDate: '2014',
  email: 'support@inops.tech',
  address: {
    streetAddress: '921, Laxmi Tower, 5th Main Rd, Sector 7, HSR Layout',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560102',
    addressCountry: 'IN',
  },
  /** Official profiles (LinkedIn, YouTube, etc.). Strongly helps search and AI engines identify the brand. */
  sameAs: [] as string[], // TODO: e.g. 'https://www.linkedin.com/company/<iddion-page>'
};

export const PRODUCTS = [
  { href: '/clms', label: 'Contract Labour (RegX)', blurb: 'Gate to payroll, CLRA compliance included' },
  { href: '/hris', label: 'HRIS & Payroll', blurb: 'Payroll fed by the same attendance' },
  { href: '/ewa', label: 'Salary++', blurb: 'Earned wage access for workers' },
];
