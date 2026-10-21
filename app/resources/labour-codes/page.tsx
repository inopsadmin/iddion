import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/sections';

export const metadata: Metadata = {
  title: 'What the New Labour Codes Change for Contract Workers | IDDION',
  description:
    'India's four new labour codes consolidate 29 legacy Acts. Here is what they mean for contract workers, principal employers, and the contractors who supply them.',
};

export default function LabourCodesPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <article className="article">
          <div className="article__hero">
            <div className="wrap">
              <div className="article__meta">
                <span className="pill pill--muted">Labour Law</span>
                <span className="article__date">October 2026 · 10 min read</span>
              </div>
              <h1 className="article__title">
                What the new labour codes change<br />
                <span className="script">for contract workers</span>
              </h1>
              <p className="article__lead">
                India's four new labour codes replace 29 central Acts. For manufacturers relying on contract labour, the changes touch wages, social security, working conditions, and industrial relations — all at once. Here is what you need to know.
              </p>
            </div>
          </div>

          <div className="wrap article__body-wrap">
            <div className="article__cover">
              <Image
                src="/images/article-labour-codes.jpg"
                alt="HR, plant and finance team reviewing labour code changes"
                width={1260}
                height={630}
                className="article__cover-img"
                priority
              />
            </div>

            <div className="article__content">

              <h2>The four codes at a glance</h2>
              <p>
                The Parliament has passed four codes that will, once notified by the states, replace the patchwork of central labour laws currently in force:
              </p>
              <ul className="article__list">
                <li><strong>Code on Wages, 2019</strong> — Consolidates the Minimum Wages Act, Payment of Wages Act, Equal Remuneration Act, and Payment of Bonus Act.</li>
                <li><strong>Code on Social Security, 2020</strong> — Merges eight Acts including the EPF Act, ESI Act, Maternity Benefit Act, and the Building and Other Construction Workers Act.</li>
                <li><strong>Occupational Safety, Health and Working Conditions Code, 2020 (OSH Code)</strong> — Replaces 13 Acts including the Factories Act, Contract Labour (Regulation &amp; Abolition) Act, and the Inter-State Migrant Workmen Act.</li>
                <li><strong>Industrial Relations Code, 2020</strong> — Consolidates the Industrial Disputes Act, Trade Unions Act, and Industrial Employment (Standing Orders) Act.</li>
              </ul>

              <h2>What changes for contract workers specifically</h2>

              <h3>Definition of 'worker' broadens</h3>
              <p>
                The OSH Code expands the definition of 'worker' to include fixed-term employees and extends protections to workers hired through contractors. Fixed-term contract workers will be entitled to the same benefits — including gratuity pro-rated for the contract period — as permanent employees. This directly affects manufacturers who use short-term contract labour for seasonal peaks.
              </p>

              <h3>Floor wage becomes universal</h3>
              <p>
                The Code on Wages introduces a statutory floor wage below which no state can set its minimum wage. This eliminates the practice of engaging contractors from low-wage states to undercut local minimum wage obligations. Every contract worker, regardless of which state the contractor is registered in, must be paid at least the central floor wage.
              </p>

              <h3>Social security extended to gig and platform workers</h3>
              <p>
                The Social Security Code for the first time brings gig and platform workers into a social security framework. For manufacturers, the more immediate impact is the extension of gratuity eligibility to fixed-term workers and the simplification of PF and ESI contribution structures. The Code also enables portability of social security benefits, reducing the friction for migrant contract workers.
              </p>

              <h3>Contractor licence thresholds shift</h3>
              <p>
                Under the existing CLRA Act, the licence threshold is 20 workers. The OSH Code proposes raising this to 50 workers for most industries, though states retain the power to set lower thresholds. Until states notify their rules, plants should continue to comply with the existing 20-worker threshold.
              </p>

              <h3>Unified compliance returns</h3>
              <p>
                One of the most significant operational changes for HR and compliance teams is the move toward a single annual return instead of multiple periodic returns under different Acts. The intent is to reduce paperwork — but until the rules are finalised, both old and new obligations may apply simultaneously.
              </p>

              <h2>What has not changed yet</h2>
              <p>
                As of mid-2026, the majority of states have not yet notified the rules needed to bring the codes into force. The existing Acts — CLRA, Factories Act, EPF Act, ESI Act — remain operative. Plants must continue to comply fully with legacy law while preparing their systems for the eventual transition.
              </p>

              <h2>How to prepare now</h2>
              <ul className="article__checklist">
                <li>Audit your contractor agreements to identify fixed-term workers who will be entitled to gratuity under the new Code.</li>
                <li>Review wage structures against the central floor wage and state minimum wages to identify gaps.</li>
                <li>Map which workers are covered under EPF and ESI and verify that contractors are enrolling all eligible workers.</li>
                <li>Build a centralised record of all contractor workers — name, Aadhaar, UAN, ESI — so you can produce data for a unified return when states notify the rules.</li>
                <li>Talk to your HR software vendor about code-readiness. Systems that only support legacy form numbers will need updates.</li>
              </ul>

              <div className="article__cta-box">
                <h3>IDDION tracks both legacy and new-code obligations</h3>
                <p>One platform for CLRA, EPF, ESI, and new labour code readiness — with automated alerts when contractor compliance slips.</p>
                <Link href="/#demo" className="btn btn--dark">Book a demo</Link>
              </div>

            </div>
          </div>

          <div className="article__more">
            <div className="wrap">
              <h2 className="h2">More from IDDION</h2>
              <div className="resources__grid">
                <Link href="/resources/clra-checklist" className="resource">
                  <div className="resource__img-wrap">
                    <Image src="/images/article-clra-checklist.jpg" alt="HR manager at desk" width={600} height={400} className="resource__img" />
                  </div>
                  <span className="resource__title">A CLRA compliance checklist for principal employers</span>
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
