import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/sections';

export const metadata: Metadata = {
  title: 'How Earned Wage Access Cuts Attrition on the Line | IDDION',
  description:
    'High attrition among contract workers costs Indian manufacturers far more than a salary raise. Earned wage access removes the financial stress that drives workers to leave — here is the evidence.',
};

export default function EwaAttritionPage() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <article className="article">
          <div className="article__hero">
            <div className="wrap">
              <div className="article__meta">
                <span className="pill pill--ok">Retention</span>
                <span className="article__date">October 2026 · 7 min read</span>
              </div>
              <h1 className="article__title">
                How earned wage access cuts<br />
                <span className="script">attrition on the line</span>
              </h1>
              <p className="article__lead">
                Monthly pay cycles were designed for salaried office workers. For a contract worker living week to week, waiting 30 days for wages creates financial pressure that ends in absenteeism and walkouts. Earned wage access (EWA) changes the equation — without touching your payroll cycle.
              </p>
            </div>
          </div>

          <div className="wrap article__body-wrap">
            <div className="article__cover">
              <Image
                src="/images/article-ewa-attrition.jpg"
                alt="Worker in safety gear checking earned wage access on a tablet"
                width={1260}
                height={630}
                className="article__cover-img"
                priority
              />
            </div>

            <div className="article__content">

              <h2>The attrition cost nobody calculates correctly</h2>
              <p>
                When a contract worker leaves mid-tenure, the visible cost is a replacement fee paid to the contractor. The invisible costs are larger: lost output during the gap, quality risk from an undertrained replacement, overtime paid to others to cover the shortfall, and the administrative burden of re-onboarding. Studies across Indian manufacturing plants consistently put the all-in cost of replacing a contract worker at 1.5 to 3 times their monthly wage.
              </p>
              <p>
                Attrition among contract workers in Indian manufacturing typically runs between 25% and 45% annually. At a plant with 500 contract workers, that is 125 to 225 replacements per year. The maths on retention investment becomes compelling quickly.
              </p>

              <h2>Why workers leave — the financial stress driver</h2>
              <p>
                Exit surveys at manufacturing plants consistently rank financial stress as a top-three reason for contract workers leaving. This is distinct from wage dissatisfaction. Many workers are not unhappy with their wage rate — they are unable to manage their cash flow within a monthly pay cycle. A medical emergency, a school fee, or a remittance to a family in another state arrives before the pay date. With no access to formal credit, workers turn to informal moneylenders at rates of 2–5% per month, take advances from labour contractors, or simply leave for a site that will pay them a cash advance.
              </p>

              <h2>What earned wage access does</h2>
              <p>
                Earned wage access lets a worker draw a portion of the wages they have already earned — before the pay date. It is not a loan. No interest accrues. The amount drawn is simply deducted from the next payroll. From the employer's perspective, the net wages disbursed at month-end are lower by exactly the EWA amount — the total wage cost is unchanged.
              </p>
              <p>
                The mechanism requires two inputs that most manufacturers already capture: daily attendance and the applicable wage rate. IDDION calculates earned wages daily from gate-entry data and makes an EWA balance available to each worker on a mobile app. Workers can request a withdrawal of up to 50% of their earned balance at any time. The request is approved automatically, the money reaches their bank account or UPI wallet within minutes, and the payroll system records the advance.
              </p>

              <h2>The evidence on retention</h2>
              <p>
                Across sites where EWA has been deployed in Indian manufacturing contexts, the outcomes are consistent:
              </p>
              <ul className="article__list">
                <li><strong>Attrition reduction of 18–30%</strong> in the 12 months following EWA rollout, holding other variables constant.</li>
                <li><strong>Absenteeism falls</strong> — workers who previously took unplanned leave to deal with financial emergencies resolve those emergencies via an EWA withdrawal instead.</li>
                <li><strong>Contractor-advance dependency drops</strong> — workers no longer need to approach contractors for cash advances, reducing the contractor's informal leverage over the workforce.</li>
                <li><strong>Worker satisfaction scores improve</strong> — access to earned wages is ranked by workers as a more valued benefit than most non-wage benefits.</li>
              </ul>

              <h2>Common objections answered</h2>

              <h3>"It will create cash flow risk for us."</h3>
              <p>
                EWA providers either fund advances from their own capital and reconcile at payroll, or the employer pre-funds a float. Either way, the employer's total wage liability for the period is unchanged. The only cash flow effect is that the final payroll disbursement is smaller by the EWA amounts already paid.
              </p>

              <h3>"Workers will draw their full wage early and then leave."</h3>
              <p>
                Properly designed EWA limits withdrawals to 50% of earned wages and requires a minimum tenure before the feature activates. Attrition data shows the opposite of the feared outcome: workers with EWA access are significantly less likely to leave mid-tenure, because their financial safety net is no longer tied to finding a new employer.
              </p>

              <h3>"The contractor is responsible for wages, not us."</h3>
              <p>
                The CLRA Act makes the principal employer liable when contractors default. More practically, a contractor workforce with high attrition is a problem the plant manager feels every day on the shop floor, regardless of who signs the salary transfer. EWA is an operational retention tool, not a liability question.
              </p>

              <h2>How to get started</h2>
              <p>
                EWA requires daily attendance data and wage rates mapped to each worker. If your plant already runs digital gate attendance — even basic biometric attendance — you have the inputs. IDDION connects gate data, contractor wage registers, and the EWA disbursement layer into a single flow, so workers can see their balance and request a withdrawal from the same app they use to view their attendance record.
              </p>

              <div className="article__cta-box">
                <h3>Deploy EWA for your contract workforce</h3>
                <p>IDDION's earned wage access runs on top of your existing gate attendance — no new hardware, no changes to your payroll cycle.</p>
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
                <Link href="/resources/labour-codes" className="resource">
                  <div className="resource__img-wrap">
                    <Image src="/images/article-labour-codes.jpg" alt="Team meeting" width={600} height={400} className="resource__img" />
                  </div>
                  <span className="resource__title">What the new labour codes change for contract workers</span>
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
