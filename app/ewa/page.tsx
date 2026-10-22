import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqList from '@/components/FaqList';
import { ewaFaqs } from '@/lib/faqs';
import { pageMeta, softwareSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  "title": "Earned Wage Access (EWA) for Factory Workers | IDDION Salary++",
  "description": "Salary++ lets workers withdraw verified earned wages before payday. Not a loan, no interest, recovered in the next payroll cycle, disbursed via a regulated NBFC, with zero capital outlay for employers.",
  "path": "/ewa",
  "keywords": [
    "earned wage access India",
    "EWA for factory workers",
    "salary advance app",
    "on-demand pay",
    "financial wellness for workers"
  ]
});

export default function EwaPage() {
  return (
    <>
      <JsonLd data={[
        softwareSchema({"name":"IDDION Salary++ — Earned Wage Access","category":"FinanceApplication","features":["Attendance-linked earned wage calculation","One-tap withdrawal in the worker app","Instant transfer to verified bank accounts","Automatic payroll recovery","Employer-set withdrawal caps","NBFC-funded, zero employer capital","Works for contract and permanent workers"],"description":"Salary++ lets workers withdraw verified earned wages before payday. Not a loan, no interest, recovered in the next payroll cycle, disbursed via a regulated NBFC, with zero capital outlay for employers.","path":"/ewa"}),
        faqSchema(ewaFaqs),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: "Salary++ Earned Wage Access", path: '/ewa' }]),
      ]} />
      {/* HERO */}
      <section id="top" style={{ padding: "56px 0 96px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <div style={{ fontSize: "14px", color: "#4B5368", marginBottom: "20px" }}><Link href="/#platform" style={{ color: "#4B5368", textDecoration: "none" }}>Platform</Link> / <span style={{ color: "#141A3A", fontWeight: "600" }}>Salary++</span></div>
            <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", marginBottom: "24px" }}>Salary++ · Early wage access</span>
            <h1 style={{ fontWeight: "500", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: "1.08", letterSpacing: "-0.025em", margin: "0 0 28px" }}>Earned wage access for <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.08em" }}>factory</span> workers</h1>
            <p style={{ fontSize: "18px", margin: "0 0 36px", maxWidth: "520px" }}>Salary++ lets workers withdraw verified earned wages before payday. Not a loan, no interest, auto-settled in the next payroll cycle. Zero capital outlay for employers.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a href="/contact" style={{ background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Get in touch <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
              <a href="#how" style={{ background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>How it works</a>
            </div>
          </div>
          <div style={{ flex: "1 1 460px", minWidth: "0", position: "relative", padding: "32px 0 32px", display: "flex", justifyContent: "center" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "6%", top: "0", width: "60%", height: "70%", background: "var(--green)", borderRadius: "220px 220px 0 0" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", right: "4%", bottom: "0", width: "46%", height: "42%", background: "var(--yellow)", transform: "rotate(-4deg)" }}></div>
            <div style={{ background: "#FFFFFF", borderRadius: "28px", padding: "24px", width: "100%", maxWidth: "300px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.18)", display: "flex", flexDirection: "column", gap: "12px", position: "relative", boxSizing: "border-box" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", color: "#6B7286" }}>Hi Ramesh</span>
                <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Live</span>
              </div>
              <div style={{ fontSize: "13px", color: "#6B7286" }}>Wages unlocked this cycle</div>
              <div style={{ fontWeight: "800", fontSize: "30px" }}>₹ [amount]</div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Linked to attendance</span>
              </div>
              <span style={{ background: "var(--primary)", color: "#FFFFFF", textAlign: "center", padding: "13px", borderRadius: "12px", fontWeight: "600" }}>Withdraw</span>
              <div style={{ border: "1px solid #EEF0F5", borderRadius: "12px", padding: "10px 12px", fontSize: "13px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Earned-wage withdrawal</span>
                <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COST OF WAITING */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", background: "var(--tint)", clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 100%)", padding: "120px 48px 56px", boxSizing: "border-box" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", marginBottom: "56px" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", flex: "1 1 380px" }}>The financial gap in workforce operations</h2>
            <p style={{ flex: "1 1 420px", fontSize: "16px", lineHeight: "1.6", margin: "0" }}>Rigid monthly payroll cycles strain workers who need cash between paydays, and tie HR up with advances, exceptions and churn that could be prevented.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--primary-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>01 · LIQUIDITY</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>Wages locked</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Earnings sit behind fixed 30-day cycles while everyday essentials wait.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--coral-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>02 · SHOCK</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>Emergency pressure</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Medical bills and urgent repairs push people toward high-interest credit.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--violet-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>03 · INFORMAL DEBT</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>Informal borrowing</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Local lenders and ad-hoc debt erode focus and trust; performance and attendance suffer in silence.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--pink-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>04 · RETENTION</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>High attrition</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Financial stress drives turnover and endless salary-advance requests, a hidden tax on operations.</div>
            </div>
          </div>
        </div>
      </section>
      {/* PLATFORM */}
      <section id="platform" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px" }}>
            <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(34px, 4vw, 46px)", lineHeight: "1.1" }}>A smarter way</div>
            <div style={{ fontWeight: "500", fontSize: "clamp(30px, 3.4vw, 40px)", letterSpacing: "-0.02em", margin: "4px 0 20px" }}>to access earned wages.</div>
            <p style={{ fontSize: "16px", margin: "0" }}>A data-driven layer inside your workforce stack, with controls and reconciliation built for payroll, not patchwork spreadsheets.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--green-soft)", borderRadius: "18px", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--green-text)", marginBottom: "12px" }}>LIVE LEDGER</div>
              <div style={{ fontWeight: "600", fontSize: "22px", marginBottom: "10px" }}>Real-time wage visibility</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>After every shift, workers see earnings update in one clear view, so trust stays tied to work performed.</div>
            </div>
            <div style={{ background: "var(--yellow-soft)", borderRadius: "18px", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: "#7A5A00", marginBottom: "12px" }}>ALWAYS ON</div>
              <div style={{ fontWeight: "600", fontSize: "22px", marginBottom: "10px" }}>On-demand access</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Withdraw a governed share of already-earned pay anytime, through mobile flows as simple as checking a bank balance.</div>
            </div>
            <div style={{ background: "var(--violet-soft)", borderRadius: "18px", padding: "32px" }}>
              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", color: "var(--violet-text)", marginBottom: "12px" }}>PAYROLL-SAFE</div>
              <div style={{ fontWeight: "600", fontSize: "22px", marginBottom: "10px" }}>Payroll-integrated</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Withdrawals reconcile automatically against your payroll run, so exceptions shrink and month-end stays predictable.</div>
            </div>
          </div>
        </div>
      </section>
      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px", marginBottom: "48px" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0" }}>Five steps. <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>Zero</span> payroll friction.</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <span style={{ background: "#EEF2FB", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>Fully automated</span>
              <span style={{ background: "#EEF2FB", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>Secure</span>
              <span style={{ background: "#EEF2FB", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>Completed in minutes</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <div style={{ borderTop: "3px solid var(--primary)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--primary)", lineHeight: "1", marginBottom: "12px" }}>01</div>
              <div style={{ fontSize: "16px" }}>Biometric or app-based check-ins are recorded.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--primary)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--primary)", lineHeight: "1", marginBottom: "12px" }}>02</div>
              <div style={{ fontSize: "16px" }}>Earnings are computed in real time from shift data.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--primary)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--primary)", lineHeight: "1", marginBottom: "12px" }}>03</div>
              <div style={{ fontSize: "16px" }}>The worker makes a one-tap withdrawal in the mobile app.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--primary)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--primary)", lineHeight: "1", marginBottom: "12px" }}>04</div>
              <div style={{ fontSize: "16px" }}>Money transfers instantly to a verified bank account.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--primary)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--primary)", lineHeight: "1", marginBottom: "12px" }}>05</div>
              <div style={{ fontSize: "16px" }}>The amount is deducted automatically in the next payroll cycle.</div>
            </div>
          </div>
          <div style={{ marginTop: "56px", background: "var(--tint)", borderRadius: "22px", padding: "40px 44px", display: "flex", flexWrap: "wrap", gap: "24px 48px" }}>
            <div style={{ flex: "1 1 260px", fontWeight: "500", fontSize: "clamp(26px, 2.8vw, 34px)", lineHeight: "1.15" }}>Is earned wage access a <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", fontSize: "1.1em" }}>loan?</span></div>
            <p style={{ flex: "2 1 480px", margin: "0", color: "#2B3150" }}>No. EWA is an advance on wages already earned, not credit against future income. It does not trigger the Money Lenders Act or create a credit liability. Salary++ is disbursed through a regulated NBFC partner and recovered at source in the next payroll cycle, with no rollovers, no interest and no separate repayment schedule. For the employer, it is a payroll timing adjustment with zero additional liability.</p>
          </div>
        </div>
      </section>
      {/* INTEGRATION STACK */}
      <section style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ borderRadius: "22px", overflow: "hidden", display: "flex", flexWrap: "wrap", background: "var(--pink-soft)" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
              <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em" }}>INTEGRATION STACK</div>
              <h2 style={{ fontWeight: "500", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0" }}>Powered by a connected ecosystem</h2>
              <p style={{ fontSize: "16px", margin: "0", color: "#2B3150" }}>Salary++ connects your workforce, payroll and banking systems. It runs on the same attendance engine as IDDION RegX CLMS and HRIS, so every withdrawal is validated against the records that drive your payroll.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "4px" }}>
                <span style={{ background: "#FFFFFF", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>Workforce platform (CLMS)</span>
                <span style={{ background: "#FFFFFF", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>Worker mobile app</span>
                <span style={{ background: "#FFFFFF", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>NBFC / banking partner</span>
                <span style={{ background: "#FFFFFF", borderRadius: "999px", padding: "8px 16px", fontSize: "14px" }}>Payroll system</span>
              </div>
            </div>
            <div style={{ flex: "1 1 420px", minWidth: "0", background: "var(--pink)", padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", padding: "22px", width: "100%", maxWidth: "380px", fontSize: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <b style={{ fontSize: "16px" }}>Live data verification</b>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>System online</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "12px 14px" }}>
                    <span>Attendance sync</span>
                    <b>99.9%</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "12px 14px" }}>
                    <span>Identity check</span>
                    <b style={{ color: "#15803D" }}>Verified</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "12px 14px" }}>
                    <span>Disbursement speed</span>
                    <b>{"< 2 min"}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "32px 56px" }}>
            <div style={{ flex: "1 1 340px", minWidth: "0" }}>
              <h3 style={{ fontWeight: "500", fontSize: "clamp(26px, 2.6vw, 32px)", lineHeight: "1.2", letterSpacing: "-0.02em", margin: "0 0 12px" }}>Built on verified workforce data</h3>
              <p style={{ margin: "0", color: "#2B3150" }}>Decisions are never based on credit scores, only on the record of work performed.</p>
            </div>
            <div style={{ flex: "2 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px" }}>
                <div style={{ fontWeight: "600", marginBottom: "6px" }}>Attendance-based wage calculation</div>
                <div style={{ fontSize: "15px", color: "#4B5368" }}>Linked directly to biometric clock-ins.</div>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px" }}>
                <div style={{ fontWeight: "600", marginBottom: "6px" }}>Real-time income visibility</div>
                <div style={{ fontSize: "15px", color: "#4B5368" }}>A live ledger that updates as shifts are completed.</div>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px" }}>
                <div style={{ fontWeight: "600", marginBottom: "6px" }}>Identity-backed verification</div>
                <div style={{ fontSize: "15px", color: "#4B5368" }}>Secure KYC ensures funds reach the right person.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WORKERS / EMPLOYERS */}
      <section id="solutions" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--tint)", borderRadius: "22px", padding: "40px" }}>
              <div style={{ color: "var(--green-text)", fontWeight: "600", fontSize: "14px", letterSpacing: "0.08em", marginBottom: "8px" }}>FOR WORKERS</div>
              <div style={{ fontWeight: "500", fontSize: "28px", marginBottom: "22px" }}>Empowerment & wellness</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--green)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>Instant access to earned wages, 24/7</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--green)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>Zero dependence on high-interest credit</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--green)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>Significantly less financial stress</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--green)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>More dignity and financial control</div>
              </div>
            </div>
            <div style={{ background: "var(--yellow-soft)", borderRadius: "22px", padding: "40px" }}>
              <div style={{ color: "var(--primary-text)", fontWeight: "600", fontSize: "14px", letterSpacing: "0.08em", marginBottom: "8px" }}>FOR EMPLOYERS</div>
              <div style={{ fontWeight: "500", fontSize: "28px", marginBottom: "22px" }}>Retention & efficiency</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--primary)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>Sharp drop in salary advance requests</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--primary)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>Up to 40% better worker retention (InOps deployment data)</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--primary)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>No financial liability or capital expenditure</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--primary)", flex: "none", marginTop: "2px" }}>
                  <path d="M5 12l5 5 9-10"></path>
                </svg>Fully automated compliance and accounting</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* RESULTS */}
      <section id="customers" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 14px" }}>Impact across the <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>organisation</span></h2>
          <p style={{ margin: "0 0 48px", maxWidth: "640px" }}>The return on financial wellness is visible from the factory floor to the boardroom.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "32px 40px" }}>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", color: "#4B5368", marginBottom: "8px" }}>STABILITY</div>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>40%</div>
              <div style={{ fontSize: "15px" }}>Reduction in workforce churn (InOps deployment data).</div>
            </div>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", color: "#4B5368", marginBottom: "8px" }}>PRODUCTIVITY</div>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>15%</div>
              <div style={{ fontSize: "15px" }}>Increase in shift fulfilment (InOps deployment data).</div>
            </div>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", color: "#4B5368", marginBottom: "8px" }}>RISK</div>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>Zero</div>
              <div style={{ fontSize: "15px" }}>The platform handles all disbursement and collection risk.</div>
            </div>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", color: "#4B5368", marginBottom: "8px" }}>FINANCIAL INCLUSION</div>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>Scale</div>
              <div style={{ fontSize: "15px" }}>Enterprise-grade banking for your unbanked staff.</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 12px", textAlign: "center" }}>Frequently asked questions</h2>
          <p style={{ textAlign: "center", margin: "0 0 32px", color: "#4B5368" }}>Indian regulatory context, PF/ESI interaction, payroll reconciliation and contract-worker eligibility.</p>
          <FaqList items={ewaFaqs} />
        </div>
      </section>
      {/* CTA */}
      <section id="demo" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 auto 16px", textAlign: "center", maxWidth: "820px" }}>Enable financial <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>wellness</span> for your workforce</h2>
          <p style={{ textAlign: "center", margin: "0 auto 48px", maxWidth: "640px" }}>Transform how your workforce accesses its earnings. Start a pilot in less than 7 days.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--green-soft)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>See Salary++ in action</div>
              <div style={{ fontSize: "16px" }}>A walkthrough of the worker app, employer controls and payroll reconciliation.</div>
              <a href="#demo-form" style={{ marginTop: "12px", background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Request demo <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>Plan your pilot</div>
              <div style={{ fontSize: "16px" }}>Tell us your sites, headcount and payroll cycle, and we will scope a pilot.</div>
              <a href="#contact" style={{ marginTop: "12px", background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Talk to sales</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
