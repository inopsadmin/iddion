import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta, breadcrumbSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = pageMeta({
  title: 'What the New Labour Codes Change for Contract Workers | IDDION',
  description: 'India\'s four new labour codes consolidate 29 central laws. Here is what changes for contract workers, principal employers and contractors under the Code on Wages, OSH, IRESA and SSCA.',
  path: '/resources/labour-codes',
  keywords: ['new labour codes India', 'Code on Wages', 'OSH code', 'contract labour new rules', 'labour code contract workers'],
});

export default function LabourCodesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Resources', path: '/#resources' },
        { name: 'New Labour Codes', path: '/resources/labour-codes' },
      ])]} />

      {/* HERO */}
      <section style={{ padding: '56px 0 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: '14px', color: '#4B5368', marginBottom: '20px' }}>
            <Link href="/" style={{ color: '#4B5368', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/#resources" style={{ color: '#4B5368', textDecoration: 'none' }}>Resources</Link>
            {' / '}
            <span style={{ color: '#141A3A', fontWeight: '600' }}>New Labour Codes</span>
          </div>
          <span style={{ display: 'inline-block', background: '#EEF0F6', color: '#141A3A', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Policy</span>
          <h1 style={{ fontWeight: '500', fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1', letterSpacing: '-0.025em', margin: '0 0 20px' }}>
            What the new <span style={{ fontFamily: 'var(--font-script)', fontWeight: '400', letterSpacing: '0.01em', fontSize: '1.08em' }}>labour codes</span> change for contract workers
          </h1>
          <p style={{ fontSize: '18px', color: '#4B5368', margin: '0 0 36px', lineHeight: '1.6' }}>
            India is consolidating 29 central labour laws into four codes. When notified by state governments, these codes will reshape how you hire, pay and manage contract workers on the shop floor.
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section style={{ padding: '0 0 56px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px' }}>
            <img src="/images/article-labour-codes.jpg" alt="Indian factory workers reviewing labour compliance information" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 96px', fontSize: '17px', lineHeight: '1.75', color: '#2A2F45' }}>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>The four codes at a glance</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', margin: '0 0 40px' }}>
          {[
            { code: 'Code on Wages, 2019', replaces: 'Minimum Wages Act, Payment of Wages Act, Equal Remuneration Act, Payment of Bonus Act', key: 'Universal minimum wage; uniform pay-day rules.' },
            { code: 'OSH, Working Conditions & Service Rules Code, 2020', replaces: 'Factories Act, Contract Labour Act, ISMW Act (+ 10 more)', key: 'Single licence for contractors; welfare thresholds apply to 20+ workers.' },
            { code: 'Industrial Relations Code, 2020', replaces: 'Trade Unions Act, Industrial Disputes Act, Industrial Employment (SO) Act', key: 'Fixed-term employment has same benefits as permanent workers.' },
            { code: 'Social Security Code, 2020', replaces: 'EPF Act, ESI Act, Gratuity Act, Maternity Benefit Act (+ 5 more)', key: 'Gig and platform workers brought under social security.' },
          ].map((c) => (
            <div key={c.code} style={{ background: '#F5F6FA', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontWeight: '700', margin: '0 0 8px', fontSize: '15px', color: '#141A3A' }}>{c.code}</p>
              <p style={{ fontSize: '13px', color: '#6B7286', margin: '0 0 10px' }}>Replaces: {c.replaces}</p>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: '0', color: '#2A2F45' }}>{c.key}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>Key changes for contract workers</h2>

        <h3 style={{ fontWeight: '600', fontSize: '19px', margin: '0 0 10px' }}>Universal minimum wage floor</h3>
        <p style={{ margin: '0 0 24px' }}>
          The Code on Wages introduces a <strong>national floor wage</strong>. No state minimum wage can be set below it. Contract workers — including piece-rate and daily-wage workers — must be paid at or above this floor regardless of which contractor employs them.
        </p>

        <h3 style={{ fontWeight: '600', fontSize: '19px', margin: '0 0 10px' }}>Single contractor licence</h3>
        <p style={{ margin: '0 0 24px' }}>
          Under the OSH Code, a contractor will be able to obtain a <strong>single national licence</strong> (rather than state-by-state licences). The threshold for licence requirement drops to <strong>50 workers</strong> in some sectors. Principal employers must verify this new combined licence.
        </p>

        <h3 style={{ fontWeight: '600', fontSize: '19px', margin: '0 0 10px' }}>Fixed-term employment parity</h3>
        <p style={{ margin: '0 0 24px' }}>
          Fixed-term workers — a category widely used in manufacturing — must receive the <strong>same wages, working hours, allowances and social security benefits</strong> as permanent workers in the same role. Gratuity becomes payable even for contracts shorter than five years, on a pro-rata basis.
        </p>

        <h3 style={{ fontWeight: '600', fontSize: '19px', margin: '0 0 10px' }}>Inter-state migrant worker protections</h3>
        <p style={{ margin: '0 0 24px' }}>
          The OSH Code extends protections to inter-state migrant workers even when they are self-employed or arrive through a contractor. Employers must register such workers on a portal and provide journey allowance and displacement allowance.
        </p>

        <h3 style={{ fontWeight: '600', fontSize: '19px', margin: '0 0 10px' }}>PF and ESI threshold changes</h3>
        <p style={{ margin: '0 0 32px' }}>
          The Social Security Code gives the central government power to <strong>extend EPF and ESI to contract workers in new sectors and lower establishment-size thresholds</strong>. Monitor notifications — your current exemptions may no longer apply once your state notifies the code.
        </p>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>What you should do now</h2>
        <ul style={{ paddingLeft: '20px', margin: '0 0 40px' }}>
          <li>Map every contract currently running against the new fixed-term rules to assess gratuity exposure.</li>
          <li>Audit contractor licences — check whether the new combined licence has been issued in your state.</li>
          <li>Update payroll to apply the national floor wage as soon as your state notifies the Code on Wages.</li>
          <li>Register inter-state migrant workers on the national portal if not already done.</li>
          <li>Review ESIC sub-codes with your contractors for any sector expansions.</li>
        </ul>

        <div style={{ background: '#F0F2FA', borderRadius: '14px', padding: '28px 32px', margin: '40px 0' }}>
          <p style={{ fontWeight: '600', fontSize: '18px', margin: '0 0 12px', color: '#141A3A' }}>Stay ahead of every notification</p>
          <p style={{ margin: '0 0 20px', color: '#4B5368' }}>IDDION tracks labour code notifications state by state and flags the changes that affect your contractor roster before they become compliance gaps.</p>
          <a href="/#demo" style={{ background: '#141A3A', color: '#FFFFFF', textDecoration: 'none', padding: '12px 24px', borderRadius: '999px', fontWeight: '500', display: 'inline-block' }}>Book a demo</a>
        </div>

        <div style={{ borderTop: '1px solid #E5E7EF', paddingTop: '32px', marginTop: '48px' }}>
          <Link href="/#resources" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>← Back to resources</Link>
        </div>
      </article>
    </>
  );
}
