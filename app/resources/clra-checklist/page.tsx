import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta, breadcrumbSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = pageMeta({
  title: 'A CLRA Compliance Checklist for Principal Employers | IDDION',
  description: 'A practical CLRA compliance checklist for principal employers in India — contractor registration, Form V, Form XIII, PF/ESI deductions and penalty avoidance.',
  path: '/resources/clra-checklist',
  keywords: ['CLRA compliance checklist', 'principal employer obligations', 'contract labour regulation act', 'Form V CLRA', 'contractor compliance India'],
});

export default function ClraChecklistPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Resources', path: '/#resources' },
        { name: 'CLRA Compliance Checklist', path: '/resources/clra-checklist' },
      ])]} />

      {/* HERO */}
      <section style={{ padding: '56px 0 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: '14px', color: '#4B5368', marginBottom: '20px' }}>
            <Link href="/" style={{ color: '#4B5368', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/#resources" style={{ color: '#4B5368', textDecoration: 'none' }}>Resources</Link>
            {' / '}
            <span style={{ color: '#141A3A', fontWeight: '600' }}>CLRA Checklist</span>
          </div>
          <span style={{ display: 'inline-block', background: '#EEF0F6', color: '#141A3A', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Compliance</span>
          <h1 style={{ fontWeight: '500', fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1', letterSpacing: '-0.025em', margin: '0 0 20px' }}>
            A CLRA compliance checklist for <span style={{ fontFamily: 'var(--font-script)', fontWeight: '400', letterSpacing: '0.01em', fontSize: '1.08em' }}>principal</span> employers
          </h1>
          <p style={{ fontSize: '18px', color: '#4B5368', margin: '0 0 36px', lineHeight: '1.6' }}>
            The Contract Labour (Regulation &amp; Abolition) Act, 1970 places specific obligations on principal employers. Missing even one can mean penalties, show-cause notices or disruption to your gate. Here is a practical checklist to stay ahead.
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section style={{ padding: '0 0 56px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px' }}>
            <img src="/images/article-clra-checklist.jpg" alt="HR manager reviewing CLRA compliance documents at an Indian plant office" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 96px', fontSize: '17px', lineHeight: '1.75', color: '#2A2F45' }}>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>1. Registration as principal employer</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li>Obtain a <strong>Certificate of Registration</strong> under Section 7 of CLRA from the registering officer.</li>
          <li>Ensure the certificate covers every establishment where contract labour is engaged.</li>
          <li>Renew before expiry — lapsed registration is a cognisable offence.</li>
          <li>Display the certificate prominently at the establishment.</li>
        </ul>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>2. Contractor licence verification</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li>Verify every contractor holds a valid <strong>Form V licence</strong> (issued by the licensing officer).</li>
          <li>Confirm the licence specifies the correct establishment, trade and maximum number of workers.</li>
          <li>Re-verify at each renewal cycle — do not assume a contractor who was compliant last year still is.</li>
          <li>Maintain copies of all contractor licences on file.</li>
        </ul>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>3. Statutory registers and records</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li><strong>Form XIII</strong> — Register of contractors: name, nature of work, number of workers, period of contract.</li>
          <li><strong>Form XIV</strong> — Service certificate issued to each contract worker on termination.</li>
          <li>Ensure contractors maintain Form XVI (muster roll), Form XVII (wages register) and Form XVIII (wage slip).</li>
          <li>Inspect contractor registers at least once per quarter; note findings.</li>
        </ul>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>4. Welfare and amenity obligations</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li>If the contractor fails to provide canteen, restrooms, drinking water or first-aid, <strong>the principal employer is liable</strong> to provide them and recover the cost.</li>
          <li>Audit facilities quarterly against the headcount of contract workers at each site.</li>
          <li>Maintain inspection records and corrective action logs.</li>
        </ul>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>5. Wages and PF/ESI compliance</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li>Contract workers must receive at least the <strong>applicable minimum wage</strong> for their category and state.</li>
          <li>If the contractor defaults on wages, the principal employer must disburse wages and recover them from the contractor.</li>
          <li>Verify monthly PF (12% employee + 12% employer) and ESI (3.25% employer + 0.75% employee) remittance via ECR and challan copies.</li>
          <li>Check that the contractor's ESIC sub-code is linked to your establishment.</li>
        </ul>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>6. Annual returns and inspections</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li>File <strong>Form XXIV</strong> (annual return) with the registering authority by 15 February each year.</li>
          <li>Prepare a summary of contractors, worker counts and wage data before the labour inspector's visit.</li>
          <li>Ensure all gate access, biometric and wage records are print-ready at short notice.</li>
        </ul>

        <div style={{ background: '#F0F2FA', borderRadius: '14px', padding: '28px 32px', margin: '40px 0' }}>
          <p style={{ fontWeight: '600', fontSize: '18px', margin: '0 0 12px', color: '#141A3A' }}>Keep this checklist current automatically</p>
          <p style={{ margin: '0 0 20px', color: '#4B5368' }}>IDDION RegX tracks contractor licences, statutory due dates and register completeness in real time — so you always know what's compliant and what needs action before the inspector arrives.</p>
          <a href="/#demo" style={{ background: '#141A3A', color: '#FFFFFF', textDecoration: 'none', padding: '12px 24px', borderRadius: '999px', fontWeight: '500', display: 'inline-block' }}>Book a demo</a>
        </div>

        <div style={{ borderTop: '1px solid #E5E7EF', paddingTop: '32px', marginTop: '48px' }}>
          <Link href="/#resources" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>← Back to resources</Link>
        </div>
      </article>
    </>
  );
}
