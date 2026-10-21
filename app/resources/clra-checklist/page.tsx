import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/sections';

export const metadata: Metadata = {
  title: 'CLRA Compliance Checklist for Principal Employers | IDDION',
  description:
    'A practical checklist covering every CLRA obligation principal employers must meet — from contractor registration and Form V to half-yearly returns and on-site welfare facilities.',
};

export default function ClraChecklistPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <article className="article">
          <div className="article__hero">
            <div className="wrap">
              <div className="article__meta">
                <span className="pill pill--info">Compliance</span>
                <span className="article__date">October 2026 · 8 min read</span>
              </div>
              <h1 className="article__title">
                A CLRA compliance checklist for<br />
                <span className="script">principal employers</span>
              </h1>
              <p className="article__lead">
                The Contract Labour (Regulation &amp; Abolition) Act places extensive obligations on principal employers — not just on contractors. Here is a structured checklist to keep your plant audit-ready at all times.
              </p>
            </div>
          </div>

          <div className="wrap article__body-wrap">
            <div className="article__cover">
              <Image
                src="/images/article-clra-checklist.jpg"
                alt="HR manager reviewing CLRA compliance documents at a plant office"
                width={1260}
                height={630}
                className="article__cover-img"
                priority
              />
            </div>

            <div className="article__content">

              <h2>Why principal employers carry the greater risk</h2>
              <p>
                Under the CLRA Act 1970, the principal employer is the entity that deploys contract labour — not the contractor who supplies them. When a contractor defaults on wages, PF, ESI, or welfare obligations, the Act makes the principal employer directly liable. Inspectors and labour courts hold the principal to account first. This makes systematic compliance tracking non-negotiable for any plant running contract labour.
              </p>

              <h2>Registration &amp; licensing</h2>
              <ul className="article__checklist">
                <li>Register as principal employer in Form I with the appropriate registering officer before deploying any contract labour.</li>
                <li>Obtain a registration certificate (Form II) and keep a certified copy at the site at all times.</li>
                <li>Verify that each contractor holds a valid licence under Form IV before work begins.</li>
                <li>Renew contractor licences before expiry — lapsed licences make the arrangement illegal and the principal employer liable.</li>
                <li>Issue Form V (certificate of principal employer) to every contractor before they apply for a licence.</li>
              </ul>

              <h2>Muster rolls &amp; attendance</h2>
              <ul className="article__checklist">
                <li>Maintain a muster roll in Form XVI for each contractor's workers, updated daily.</li>
                <li>Ensure the contractor maintains Form XVII (wage register) and makes it available for inspection on demand.</li>
                <li>Cross-check attendance records against your own gate-entry logs at least weekly.</li>
                <li>Retain muster rolls and wage registers for a minimum of three years.</li>
              </ul>

              <h2>Wage payment &amp; deductions</h2>
              <ul className="article__checklist">
                <li>Verify that wages are paid on or before the 7th of the following month (10th for establishments with 1,000+ workers).</li>
                <li>Ensure no unauthorised deductions appear in the wage register.</li>
                <li>Confirm workers are paid at least the applicable minimum wage for the relevant scheduled employment.</li>
                <li>If the contractor fails to pay wages, discharge the obligation directly and recover from the contractor — the Act requires this.</li>
              </ul>

              <h2>PF, ESI &amp; statutory deductions</h2>
              <ul className="article__checklist">
                <li>Collect proof of PF challan submission from each contractor every month.</li>
                <li>Cross-verify UAN-linked contributions through the EPFO employer portal.</li>
                <li>Collect ESI challan proof for contractors with covered workers.</li>
                <li>Retain copies of all challans for three years minimum.</li>
              </ul>

              <h2>Welfare facilities</h2>
              <ul className="article__checklist">
                <li>Where 100 or more contract workers are employed, provide a canteen on-site or ensure the contractor does.</li>
                <li>Provide restrooms, latrines, and urinals (separate for men and women) where 20 or more workers are employed.</li>
                <li>Maintain a first-aid box with prescribed contents for every 150 workers.</li>
                <li>Ensure drinking water is accessible within 6 metres of any latrine or urinal.</li>
                <li>Appoint a welfare officer if the headcount crosses thresholds set by the relevant state government.</li>
              </ul>

              <h2>Returns &amp; notices</h2>
              <ul className="article__checklist">
                <li>File a half-yearly return in Form XXIV by 15 February and 15 August each year.</li>
                <li>Display a notice showing wage rates, hours of work, wages period, and date of payment in a conspicuous place at the worksite.</li>
                <li>Display the abstract of the CLRA Act and rules at the principal employer's office.</li>
              </ul>

              <h2>Record-keeping in practice</h2>
              <p>
                Paper-based compliance is fragile. A single missing register or an unsigned muster roll can attract a fine and adverse findings in a labour audit. Platforms like IDDION capture attendance at the gate, sync contractor wage data, and auto-generate the reports needed for half-yearly returns — eliminating the last-minute scramble before an inspection.
              </p>

              <div className="article__cta-box">
                <h3>See IDDION's compliance module in action</h3>
                <p>Track CLRA obligations across all contractors and sites from one dashboard — with automatic alerts before deadlines and audit-ready exports.</p>
                <Link href="/#demo" className="btn btn--dark">Book a demo</Link>
              </div>

            </div>
          </div>

          <div className="article__more">
            <div className="wrap">
              <h2 className="h2">More from IDDION</h2>
              <div className="resources__grid">
                <Link href="/resources/labour-codes" className="resource">
                  <div className="resource__img-wrap">
                    <Image src="/images/article-labour-codes.jpg" alt="Team meeting" width={600} height={400} className="resource__img" />
                  </div>
                  <span className="resource__title">What the new labour codes change for contract workers</span>
                  <span className="resource__more">Read more ›</span>
                </Link>
                <Link href="/resources/ewa-attrition" className="resource">
                  <div className="resource__img-wrap">
                    <Image src="/images/article-ewa-attrition.jpg" alt="Worker with tablet" width={600} height={400} className="resource__img" />
                  </div>
                  <span className="resource__title">How earned wage access cuts attrition on the line</span>
                  <span className="resource__more">Read more ›</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
