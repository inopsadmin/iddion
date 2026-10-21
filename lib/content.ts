// All homepage copy lives here so marketing can edit text without touching layout.
// Anything in [square brackets] is a placeholder to replace before launch.

export type Theme = 'vivid' | 'purple-pop' | 'ocean' | 'sunrise' | 'forest';

// Change this to switch the whole site's colour palette.
export const SITE_THEME: Theme = 'vivid';

export type Status = 'ok' | 'warn' | 'info' | 'muted';
export type Cell = string | { text: string; status: Status };
export type Accent = 'primary' | 'violet' | 'yellow' | 'pink' | 'green' | 'coral';

export interface AppScreen {
  title: string;
  activeNav: string;
  kpis: { label: string; value: string; note?: string; tone?: 'good' | 'bad' }[];
  columns: string[];
  rows: Cell[][];
}

export const nav = {
  links: [
    { label: 'Platform', href: '#platform' },
    { label: 'Solutions', href: '#roles' },
    { label: 'Customers', href: '#customers' },
    { label: 'Resources', href: '#resources' },
    { label: 'Trust', href: '#trust' },
  ],
  login: { label: 'Login', href: '/login' },
  cta: { label: 'Get in touch', href: '#demo' },
};

export const hero = {
  titleBefore: 'Manage your',
  titleScript: 'contract',
  titleAfter: 'workforce from gate to payslip',
  body: 'From onboarding and gate access to attendance, wages and compliance, IDDION brings every worker and every vendor together.',
  primary: { label: 'Learn more', href: '#platform' },
  secondary: { label: 'Book a demo', href: '#demo' },
  // Put the file in /public/images and set src to '/images/hero.jpg'
  photo: { src: '/images/hero-supervisor-tablet.jpg', alt: 'Plant supervisor using IDDION on a tablet on the shop floor' },
  liveCard: {
    title: 'Plant 2 · Today',
    tiles: [
      { label: 'On site', value: '1,284', note: 'of 1,320 rostered', tone: 'green' as const },
      { label: 'Contract', value: '912', note: 'across 18 vendors', tone: 'blue' as const },
    ],
  },
};

export const problem = {
  title: 'You have systems for employees. Not your contract workforce.',
  paragraphs: [
    'Your contract workforce should be as visible, controlled and compliant as your permanent one. On most plants it isn’t: it is spread across vendors, gate registers, wage sheets and spreadsheets with no single view.',
    'IDDION changes that, connecting every step from the gate to the payslip into one governed system.',
  ],
  cards: [
    { icon: 'folder', color: 'pink', highlight: 'A single source of truth', rest: 'for every worker on site, permanent or contract' },
    { icon: 'doc', color: 'green', highlight: 'Built-in wage', rest: 'and compliance controls, vendor by vendor' },
    { icon: 'badge', color: 'violet', highlight: 'Standard ways of working', rest: 'across plants, vendors and shifts' },
  ] as const,
};

export const stats = {
  titleBefore: 'Contract labour is becoming your',
  titleScript: 'core',
  titleAfter: 'workforce, not a stopgap.',
  photo: { src: '/images/stats-team-dashboard.jpg', alt: 'Plant team reviewing the IDDION dashboard' },
  vendorCard: { name: 'Vendor B', badge: '96% compliant', line1: '410 contract workers', line2: 'Welding, paint shop, stores' },
  lead: { value: '[N]+', strong: 'workers managed on IDDION.', rest: 'Permanent and contract on one record.' },
  side: [
    { value: '70+', strong: 'sites live', rest: 'across plants, campuses and project sites.' },
    { value: '3,000+', strong: 'devices connected,', rest: 'feeding live attendance from every gate.' },
  ],
};

export const platform = {
  scriptLine: 'One worker view.',
  title: 'Fewer surprises.',
  intro: 'IDDION brings gate attendance, contract labour, payroll and wage access into one operating model,',
  introStrong: 'purpose-built for plants that run on contract labour.',
  introAfter: 'One place to onboard, manage and pay every worker, with real-time visibility into compliance and vendor performance.',
  tabs: [
    {
      id: 'clms',
      label: 'Contract Labour',
      title: 'Every contractor, live from the gate',
      body: 'Onboard with ID and background checks, control gate access by vendor and licence validity, and keep CLRA registers and PF/ESI checks current every month.',
      href: '/platform/contract-labour',
      screen: {
        title: 'Contractors',
        activeNav: 'Contractors',
        kpis: [
          { label: 'On site now', value: '1,284', note: '▲ vs yesterday', tone: 'good' },
          { label: 'Contract workers', value: '912' },
          { label: 'Onboarding', value: '37' },
          { label: 'Alerts', value: '3', note: 'needs action', tone: 'bad' },
        ],
        columns: ['Worker', 'Vendor', 'Status', 'Licence'],
        rows: [
          ['Ramesh K', 'Vendor B', { text: 'Active', status: 'ok' }, { text: 'Valid', status: 'ok' }],
          ['Priya S', 'Vendor A', { text: 'Onboarding', status: 'info' }, { text: 'Valid', status: 'ok' }],
          ['Arun M', 'Vendor C', { text: 'Active', status: 'ok' }, { text: 'Expires 9d', status: 'warn' }],
          ['Lakshmi R', 'Vendor A', { text: 'UAN missing', status: 'warn' }, { text: 'Valid', status: 'ok' }],
        ],
      } as AppScreen,
    },
    {
      id: 'hris',
      label: 'HRIS & Payroll',
      title: 'Payroll fed by the same attendance',
      body: 'Shift rosters, leave, overtime and statutory payroll for your permanent workforce, driven by the biometric data that runs the gate.',
      href: '/platform/hris-payroll',
      screen: {
        title: 'Payroll · October',
        activeNav: 'Payroll',
        kpis: [
          { label: 'Employees', value: '372' },
          { label: 'OT hours', value: '1,940' },
          { label: 'Attendance', value: 'Locked' },
          { label: 'Challans', value: 'Ready' },
        ],
        columns: ['Step', 'Owner', 'Status'],
        rows: [
          ['Attendance lock', 'Plant HR', { text: 'Done', status: 'ok' }],
          ['OT approvals', 'Shift leads', { text: '6 pending', status: 'warn' }],
          ['PF / ESI / PT', 'Payroll', { text: 'Computed', status: 'info' }],
          ['Payslips', 'System', { text: 'Scheduled', status: 'muted' }],
        ],
      } as AppScreen,
    },
    {
      id: 'ewa',
      label: 'Salary++',
      title: 'Wages workers have already earned, when they need them',
      body: 'Earned wage access calculated from verified attendance, funded through regulated NBFC partners and recovered through payroll.',
      href: '/platform/salary-plus-plus',
      screen: {
        title: 'Salary++',
        activeNav: 'Salary++',
        kpis: [
          { label: 'Eligible workers', value: '1,050' },
          { label: 'Requests today', value: '[N]' },
          { label: 'Avg. amount', value: '₹ [amt]' },
          { label: 'Recovery', value: 'Via payroll' },
        ],
        columns: ['Worker', 'Earned', 'Requested', 'Status'],
        rows: [
          ['Ramesh K', '₹ [amt]', '₹ [amt]', { text: 'Paid', status: 'ok' }],
          ['Priya S', '₹ [amt]', '₹ [amt]', { text: 'Paid', status: 'ok' }],
          ['Arun M', '₹ [amt]', '₹ [amt]', { text: 'In review', status: 'info' }],
        ],
      } as AppScreen,
    },
  ],
};

export const customers = {
  title: 'Trusted by enterprises running large contract workforces',
  industries: [
    { icon: 'car', label: 'Automotive & Engineering' },
    { icon: 'chip', label: 'Electronics Manufacturing' },
    { icon: 'shield', label: 'Defence & PSU' },
    { icon: 'crane', label: 'Infrastructure & Construction' },
    { icon: 'health', label: 'Healthcare' },
    { icon: 'flask', label: 'Pharma & Process' },
  ] as const,
  // Swap names for approved logo files in /public/logos once each client signs off.
  clients: ['Ashok Leyland', 'Foxconn', 'HAL', 'BHEL', 'Apollo', 'Ramky'],
};

export const roles = {
  titleBefore: 'Every team wins with',
  titleScript: 'IDDION',
  body: 'Align HR, plant, finance and compliance around one workforce operating model that keeps every plant visible and inspection-ready.',
  hub: [
    { initials: 'HR', label: 'HR / IR', color: 'green' },
    { initials: 'PL', label: 'Plant & Security', color: 'primary' },
    { initials: 'FN', label: 'Finance', color: 'violet' },
    { initials: 'CO', label: 'Compliance', color: 'coral' },
  ] as const,
  cards: [
    { color: 'green', label: 'HR & IR', title: 'Make your contract workforce visible and defensible.', body: 'One record for onboarding, attendance and grievances, permanent and contract alike.' },
    { color: 'primary', label: 'Plant & Security', title: 'Know who is inside, by zone, right now.', body: 'Access rules enforced at the reader, not the register, across every gate.' },
    { color: 'violet', label: 'Finance', title: 'Pay vendors only for days actually worked.', body: 'Vendor bills reconciled against verified man-days before payment.' },
    { color: 'coral', label: 'Compliance & Legal', title: 'Be inspection-ready every month.', body: 'CLRA registers, licences and PF/ESI challans checked vendor by vendor.' },
  ] as const,
};

export interface Slide {
  color: Accent;
  title: string;
  body: string;
  screen: AppScreen | null; // null shows the worker phone card
}

export const features: { title: string; body: string; slides: Slide[] } = {
  title: 'Control contract labour costs, elevate the worker experience',
  body: 'Clean data from the gate and repeatable workflows cut leakage and risk, while workers get paid accurately and on time.',
  slides: [
    {
      color: 'yellow',
      title: 'Gate to payroll, without spreadsheets',
      body: 'Because InOps also installs and maintains the readers, data starts clean at the gate. Man-days are locked from every reader and vendor invoices are matched before they are paid.',
      screen: {
        title: 'Gate to payroll · Vendor B',
        activeNav: 'Attendance',
        kpis: [
          { label: 'Enrolled', value: '410' },
          { label: 'Gate valid', value: '408', note: '2 blocked', tone: 'bad' },
          { label: 'Man-days', value: '9,860', note: 'locked', tone: 'good' },
          { label: 'Invoice', value: 'On hold', note: '2 gaps', tone: 'bad' },
        ],
        columns: ['Check', 'Result'],
        rows: [
          ['Licence & validity', { text: '2 expired', status: 'warn' }],
          ['Man-days vs invoice', { text: 'Matched', status: 'ok' }],
          ['PF / ESI challan', { text: 'Filed', status: 'ok' }],
        ],
      },
    },
    {
      color: 'pink',
      title: 'Manage every vendor in one workspace',
      body: 'See every contractor and vendor in one place. Wage registers, licences and PF/ESI challans are checked monthly, so you are inspection-ready before the inspector arrives.',
      screen: {
        title: 'Vendor scorecard',
        activeNav: 'Vendors',
        kpis: [
          { label: 'Vendors', value: '18' },
          { label: 'Compliant', value: '15' },
          { label: 'Licences due', value: '2', tone: 'bad' },
          { label: 'Open gaps', value: '4', tone: 'bad' },
        ],
        columns: ['Vendor', 'Wage register', 'Licence'],
        rows: [
          ['Vendor A', { text: 'Complete', status: 'ok' }, { text: 'Valid', status: 'ok' }],
          ['Vendor B', { text: '2 gaps', status: 'warn' }, { text: 'Valid', status: 'ok' }],
          ['Vendor C', { text: 'Complete', status: 'ok' }, { text: 'Expires 9d', status: 'warn' }],
        ],
      },
    },
    {
      color: 'green',
      title: 'Give workers pay they can see',
      body: 'Payslips, attendance and earned wage access in one simple app, in the worker’s own language, so fewer disputes reach the HR desk.',
      screen: null,
    },
  ],
};

export const resources = {
  titleBefore: 'Insights to help you run a',
  titleScript: 'compliant',
  titleAfter: 'plant',
  items: [
    { image: '/images/article-clra-checklist.jpg', alt: 'HR manager at a plant office', title: 'A CLRA compliance checklist for principal employers', href: '/resources/clra-checklist' },
    { image: '/images/article-labour-codes.jpg', alt: 'IDDION connecting HR, plant and finance teams', title: 'What the new labour codes change for contract workers', href: '/resources/labour-codes' },
    { image: '/images/article-ewa-attrition.jpg', alt: 'Worker checking a payslip on a phone', title: 'How earned wage access cuts attrition on the line', href: '/resources/ewa-attrition' },
  ],
};

export const calculator = {
  kicker: 'Contract labour risk check',
  title: 'See where your plant’s compliance gaps are hiding.',
  body: 'Model exposure across wage compliance, vendor licences, statutory filings and billing leakage, then see what IDDION would catch.',
  cta: { label: 'Check my exposure', href: '/risk-check' },
  boxTitle: 'Build a first business case in 2 minutes',
  tiles: [
    { value: '4', label: 'risk areas checked' },
    { value: '₹ view', label: 'of billing leakage' },
    { value: '1 view', label: 'of vendor compliance' },
    { value: '2 min', label: 'to model your plant' },
  ],
};

export const trust = {
  titleBefore: 'Built to pass your',
  titleScript: 'InfoSec',
  titleAfter: 'review',
  body: 'Worker identity, biometrics and wage data are sensitive. IDDION runs the way defence and PSU customers require.',
  link: { label: 'Visit the Trust Center', href: '/trust' },
  items: [
    { title: 'ISO/IEC 27001', body: 'Certified information security management.' },
    { title: 'DPDP-ready', body: 'Consent, retention and processor controls for worker data.' },
    { title: 'Customer VAPT tested', body: 'Assessed by enterprise InfoSec teams.' },
    { title: 'Cloud or on-premises', body: 'Deploy in your own data centre if policy requires.' },
  ],
};

export const cta = {
  titleBefore: 'Ready to bring your contract workforce into',
  titleScript: 'one',
  titleAfter: 'platform?',
  cards: [
    { tone: 'tint', title: 'Tell us what you need', body: 'Share your plants, headcount and vendor setup, and the team will be in touch quickly.', button: { label: 'Talk to an expert', href: '/contact' }, dark: false },
    { tone: 'yellow', title: 'See IDDION in action', body: 'A 30-minute walkthrough using your own shift pattern and vendor structure.', button: { label: 'Request a demo', href: '/demo' }, dark: true },
  ] as const,
};

export const faqs = [
  { q: 'Does IDDION work with the biometric readers we already have?', a: '[Answer: supported reader brands and how existing devices are connected.]' },
  { q: 'Can it integrate with SAP or our existing payroll?', a: '[Answer: integration options and typical timelines.]' },
  { q: 'Which CLRA and state registers does it generate?', a: '[Answer: registers, returns and states covered.]' },
  { q: 'Can we deploy it on-premises?', a: '[Answer: on-premises and private-cloud options.]' },
  { q: 'How long does a rollout take for one plant?', a: '[Answer: typical phases and go-live time.]' },
];

export const footer = {
  newsletterTitle: 'Subscribe to The Shop Floor Brief',
  newsletterBody: 'Monthly insights on labour law, contract workforce trends and plant HR technology.',
  columns: [
    { title: 'Platform', links: [['Contract Labour', '/platform/contract-labour'], ['HRIS & Payroll', '/platform/hris-payroll'], ['Salary++', '/platform/salary-plus-plus'], ['Worker app', '/platform/worker-app']] },
    { title: 'Resources', links: [['Case studies', '/case-studies'], ['Compliance guides', '/resources'], ['Risk check', '/risk-check'], ['Trust Center', '/trust']] },
    { title: 'Company', links: [['About', '/about'], ['Partners', '/partners'], ['Careers', '/careers'], ['Contact', '/contact']] },
  ],
  legal: '© 2026 IDDION, a product of InOps IT Solutions Pvt. Ltd., Bengaluru.',
  bottomLinks: [['Privacy', '/privacy'], ['Terms', '/terms'], ['LinkedIn', 'https://www.linkedin.com/']],
};
