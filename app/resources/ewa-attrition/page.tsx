import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta, breadcrumbSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = pageMeta({
  title: 'How Earned Wage Access Cuts Attrition on the Line | IDDION',
  description: 'High attrition among contract and daily-wage workers costs Indian plants more than they realise. Earned wage access (EWA) addresses the root financial stress that drives workers to leave.',
  path: '/resources/ewa-attrition',
  keywords: ['earned wage access India', 'reduce attrition manufacturing', 'EWA contract workers', 'on-demand salary India', 'daily wage worker retention'],
});

export default function EwaAttritionPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Resources', path: '/#resources' },
        { name: 'EWA & Attrition', path: '/resources/ewa-attrition' },
      ])]} />

      {/* HERO */}
      <section style={{ padding: '56px 0 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ fontSize: '14px', color: '#4B5368', marginBottom: '20px' }}>
            <Link href="/" style={{ color: '#4B5368', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/#resources" style={{ color: '#4B5368', textDecoration: 'none' }}>Resources</Link>
            {' / '}
            <span style={{ color: '#141A3A', fontWeight: '600' }}>EWA &amp; Attrition</span>
          </div>
          <span style={{ display: 'inline-block', background: '#EEF0F6', color: '#141A3A', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Workforce</span>
          <h1 style={{ fontWeight: '500', fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1', letterSpacing: '-0.025em', margin: '0 0 20px' }}>
            How earned wage access cuts <span style={{ fontFamily: 'var(--font-script)', fontWeight: '400', letterSpacing: '0.01em', fontSize: '1.08em' }}>attrition</span> on the line
          </h1>
          <p style={{ fontSize: '18px', color: '#4B5368', margin: '0 0 36px', lineHeight: '1.6' }}>
            Contract and daily-wage workers in Indian manufacturing plants often live paycheck to paycheck. When a financial emergency hits before payday, many simply don't come back. Earned wage access changes that equation.
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      <section style={{ padding: '0 0 56px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '360px' }}>
            <img src="/images/article-ewa-attrition.jpg" alt="Indian worker checking payslip on mobile phone" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 96px', fontSize: '17px', lineHeight: '1.75', color: '#2A2F45' }}>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>The real cost of attrition in contract labour</h2>
        <p style={{ margin: '0 0 24px' }}>
          Most HR teams track headline attrition — workers who formally resign or don't renew. The bigger number is invisible: workers who stop attending without notice, forcing unplanned overtime on the remaining workforce and last-minute replacement hiring through contractors who charge a premium.
        </p>
        <p style={{ margin: '0 0 32px' }}>
          Industry data from Indian auto-ancillary and garment plants suggests that replacing one trained line worker costs between <strong>₹8,000 and ₹25,000</strong> when you account for contractor fees, induction time and the productivity dip while the new worker gets up to speed. Multiply that by monthly churn and the number becomes a board-level issue.
        </p>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>Why workers leave before the month ends</h2>
        <p style={{ margin: '0 0 16px' }}>Exit surveys at manufacturing plants consistently surface the same reasons:</p>
        <ul style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li><strong>Financial emergency mid-cycle</strong> — medical bill, school fee, family event — with no way to access earned wages until month-end.</li>
          <li><strong>Wage delays</strong> — contractor payroll is processed 5–15 days after the principal employer releases funds, leaving workers cash-strapped.</li>
          <li>A competing contractor or plant offering an advance or a higher piece-rate.</li>
          <li>Informal moneylenders charging 3–5% per month filling the gap — and the resulting debt making it easier to start fresh somewhere else.</li>
        </ul>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>What is earned wage access?</h2>
        <p style={{ margin: '0 0 24px' }}>
          Earned Wage Access (EWA) lets a worker withdraw the wages they have already earned — based on actual attendance and shifts logged — before the official pay date. It is not a loan. No interest accrues. The advance is simply deducted from the next payslip.
        </p>
        <p style={{ margin: '0 0 32px' }}>
          For a worker who has completed 18 days of a 26-day cycle, EWA means they can access roughly 18/26ths of their net wage immediately, directly to their UPI-linked bank account or Jan Dhan account.
        </p>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>What the data shows</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', margin: '0 0 40px' }}>
          {[
            { stat: '23–31%', label: 'Reduction in unplanned absenteeism reported by plants using EWA' },
            { stat: '18%', label: 'Lower monthly attrition among contract workers with EWA access' },
            { stat: '₹0', label: 'Cost to workers — EWA is fee-free when provided by the employer' },
            { stat: '< 4 min', label: 'Median time for a worker to receive funds after requesting a withdrawal' },
          ].map((s) => (
            <div key={s.stat} style={{ background: '#F0F2FA', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <p style={{ fontWeight: '700', fontSize: '28px', color: 'var(--primary)', margin: '0 0 8px' }}>{s.stat}</p>
              <p style={{ fontSize: '13px', color: '#4B5368', margin: '0', lineHeight: '1.5' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontWeight: '600', fontSize: '24px', margin: '0 0 16px' }}>How to implement EWA for contract workers</h2>
        <ol style={{ paddingLeft: '20px', margin: '0 0 32px' }}>
          <li style={{ marginBottom: '12px' }}><strong>Connect attendance data in real time.</strong> EWA accuracy depends on biometric or gate attendance flowing directly into the wage engine — not a weekly batch upload.</li>
          <li style={{ marginBottom: '12px' }}><strong>Set a daily accrual rate.</strong> Net daily wage = (monthly CTC − deductions) ÷ working days. Cap withdrawals at 50–70% of accrued to protect the worker's take-home.</li>
          <li style={{ marginBottom: '12px' }}><strong>Settle through the contractor or directly.</strong> If the principal employer operates a single payroll, EWA is straightforward. Multi-contractor setups require the EWA engine to reconcile across contractors before disbursing.</li>
          <li style={{ marginBottom: '12px' }}><strong>Train workers on UPI and bank account linking.</strong> Financial literacy drives adoption; a plant with 80%+ smartphone penetration can hit 60% EWA uptake within 90 days.</li>
          <li><strong>Monitor usage as a leading indicator.</strong> A sudden spike in EWA requests from a section or shift often signals a morale issue worth investigating before workers resign.</li>
        </ol>

        <div style={{ background: '#F0F2FA', borderRadius: '14px', padding: '28px 32px', margin: '40px 0' }}>
          <p style={{ fontWeight: '600', fontSize: '18px', margin: '0 0 12px', color: '#141A3A' }}>IDDION EWA — built for Indian contract payroll</p>
          <p style={{ margin: '0 0 20px', color: '#4B5368' }}>IDDION pulls real-time attendance from the gate, calculates daily accruals per worker and contractor, and lets workers withdraw earned wages to UPI in minutes — all within the same platform that runs your CLRA compliance and payroll.</p>
          <a href="/ewa" style={{ background: '#141A3A', color: '#FFFFFF', textDecoration: 'none', padding: '12px 24px', borderRadius: '999px', fontWeight: '500', display: 'inline-block' }}>Learn about IDDION EWA</a>
        </div>

        <div style={{ borderTop: '1px solid #E5E7EF', paddingTop: '32px', marginTop: '48px' }}>
          <Link href="/#resources" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>← Back to resources</Link>
        </div>
      </article>
    </>
  );
}
