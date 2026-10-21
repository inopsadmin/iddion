import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqList from '@/components/FaqList';
import { clmsFaqs } from '@/lib/faqs';
import { pageMeta, softwareSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  "title": "Contract Labour Management System (CLMS) Software | IDDION RegX",
  "description": "IDDION RegX is a contract labour management system for Indian plants: contractor onboarding, gate compliance, biometric attendance, CLRA registers, PF/ESI and invoice reconciliation on one platform.",
  "path": "/clms",
  "keywords": [
    "contract labour management system",
    "CLMS software",
    "CLRA compliance software",
    "contractor payroll software",
    "contract labour attendance system"
  ]
});

export default function ClmsPage() {
  return (
    <>
      <JsonLd data={[
        softwareSchema({"name":"IDDION RegX — Contract Labour Management System","features":["Contractor onboarding and BGV","Gate compliance with 19 automated entry rules","Biometric and face attendance","CLRA Form V and Form XIII registers","PF, ESI and LWF deductions","Contractor payroll","Invoice and challan reconciliation","OT governance","Multi-site dashboards"],"description":"IDDION RegX is a contract labour management system for Indian plants: contractor onboarding, gate compliance, biometric attendance, CLRA registers, PF/ESI and invoice reconciliation on one platform.","path":"/clms"}),
        faqSchema(clmsFaqs),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: "Contract Labour Management", path: '/clms' }]),
      ]} />
      {/* HERO */}
      <section id="top" style={{ padding: "56px 0 96px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <div style={{ fontSize: "14px", color: "#4B5368", marginBottom: "20px" }}><Link href="/#platform" style={{ color: "#4B5368", textDecoration: "none" }}>Platform</Link> / <span style={{ color: "#141A3A", fontWeight: "600" }}>Contract Labour</span></div>
            <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", marginBottom: "24px" }}>IDDION RegX · Payroll · Compliance · Contractor ops</span>
            <h1 style={{ fontWeight: "500", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: "1.08", letterSpacing: "-0.025em", margin: "0 0 28px" }}>Labour management software for your <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.08em" }}>contract</span> workforce</h1>
            <p style={{ fontSize: "18px", margin: "0 0 36px", maxWidth: "520px" }}>IDDION RegX is a contract labour management system built for Indian plants. Gate to payroll, CLRA compliance included, on one platform.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a href="#demo" style={{ background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Get in touch <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
              <a href="#roi" style={{ background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Calculate ROI</a>
            </div>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0", position: "relative", padding: "36px 28px" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", width: "42%", height: "46%", background: "var(--pink)" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", bottom: "0", left: "0", width: "70%", height: "52%", background: "var(--yellow)", transform: "rotate(-1.5deg)" }}></div>
            <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", overflow: "hidden", fontSize: "12px", position: "relative", padding: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px" }}>Contractor ops · All sites</div>
                <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Live</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "8px", marginBottom: "14px" }}>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Sites synced</div>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>6 / 6</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Contractors cleared</div>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>24</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Gate rules</div>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>19</div>
                  <div style={{ fontSize: "11px", color: "#15803D" }}>enforced</div>
                </div>
              </div>
              <div style={{ border: "1px solid #EEF0F5", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "8px", padding: "8px 12px", fontSize: "11px", color: "#6B7286", background: "#F8F9FC" }}>
                  <span>Check</span>
                  <span>Scope</span>
                  <span>Status</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>Form V / XIII registers</span>
                  <span>All vendors</span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontWeight: "600" }}>Current</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>PF / ESI / LWF</span>
                  <span>This cycle</span>
                  <span>
                    <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "3px 10px", borderRadius: "999px", fontWeight: "600" }}>Reconciled</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>Invoice vs man-days</span>
                  <span>Vendor B</span>
                  <span>
                    <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontWeight: "600" }}>2 gaps</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>9-day continuous rule</span>
                  <span>Plant 2</span>
                  <span>
                    <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontWeight: "600" }}>3 alerts</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* GAPS */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", background: "var(--tint)", clipPath: "polygon(0 0, 100% 7%, 100% 100%, 0 100%)", padding: "112px 48px 56px", boxSizing: "border-box" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", marginBottom: "56px" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", flex: "1 1 380px" }}>Why contract labour management?</h2>
            <p style={{ flex: "1 1 420px", fontSize: "16px", lineHeight: "1.6", margin: "0" }}>Where contract payroll breaks today, and what teams fix first when they standardise on one platform. Gate data and payroll runs rarely match, until the systems align.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px 20px" }}>
              <div style={{ color: "var(--pink-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>01 · SPEND LEAK</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "6px" }}>Ghost workers & time theft</div>
              <div style={{ fontSize: "21px", lineHeight: "1.25", color: "var(--primary)", marginBottom: "10px" }}>~3–5% of spend</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Buddy punching and proxy clock-ins hide real headcount, so clean attendance data never reaches payroll.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px 20px" }}>
              <div style={{ color: "var(--coral-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>02 · AUDIT RISK</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "6px" }}>Compliance violations</div>
              <div style={{ fontSize: "21px", lineHeight: "1.25", color: "var(--primary)", marginBottom: "10px" }}>Penalties + audit exposure</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>OT, wage and incident gaps surface after the fact, and audits and disputes land on your desk.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px 20px" }}>
              <div style={{ color: "var(--violet-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>03 · MISMATCH</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "6px" }}>Invoice chaos</div>
              <div style={{ fontSize: "21px", lineHeight: "1.25", color: "var(--primary)", marginBottom: "10px" }}>25–30% discrepancy rate</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Finance burns 80–120 hours a month matching invoices to gates and shifts instead of closing books.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px 20px" }}>
              <div style={{ color: "var(--green-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>04 · SILOED</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "6px" }}>System fragmentation</div>
              <div style={{ fontSize: "21px", lineHeight: "1.25", color: "var(--primary)", marginBottom: "10px" }}>Data chaos</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Biometrics, spreadsheets and ERP live in silos. Nothing reconciles without manual stitching.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "22px 20px" }}>
              <div style={{ color: "var(--primary-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>05 · FILING GAP</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "6px" }}>ESI / PF reconciliation & true-up</div>
              <div style={{ fontSize: "21px", lineHeight: "1.25", color: "var(--primary)", marginBottom: "10px" }}>Manual checks</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Spreadsheet-driven statutory checks miss deltas until filings, and errors compound across branches.</div>
            </div>
          </div>
        </div>
      </section>
      {/* MODULES */}
      <section id="platform" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px" }}>
            <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(34px, 4vw, 46px)", lineHeight: "1.1" }}>Pick what you need.</div>
            <div style={{ fontWeight: "500", fontSize: "clamp(30px, 3.4vw, 40px)", letterSpacing: "-0.02em", margin: "4px 0 20px" }}>Everything stays connected.</div>
            <p style={{ fontSize: "16px", margin: "0" }}>Contract labour management modules covering the end-to-end payroll and workforce lifecycle.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Attendance Management</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Track attendance in real time, apply shift and leave policies automatically, and push verified hours directly to payroll.</div>
              <a href="#attendance" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Contractor Payroll</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Calculate wages, statutory deductions and overtime with audit trails that stay compliant across every pay cycle.</div>
              <a href="#payroll" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Vendor & Contractor Management</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Manage vendor profiles, manpower allocation, renewals and site-level accountability from one central view.</div>
              <a href="#vendors" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>HR Dashboard & Workforce Analytics</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Give leadership real-time visibility into headcount, productivity, compliance posture and cost leakages.</div>
              <a href="#analytics" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Worker Verification & BGV</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Verify contractor identity and documents before onboarding, with complete records ready for audits and renewals.</div>
              <a href="#bgv" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>AI Assistance</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Flag anomalies, predict risks and suggest next actions across attendance, compliance and billing workflows.</div>
              <a href="#ai" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Compliance Management & CLRA Registers</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Digital Form V / XIII registers, licence tracking and audit-ready returns.</div>
              <a href="#clra" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Challan Reconciliation</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Reconcile challans with attendance and wage data to catch mismatches early and prevent financial leakage.</div>
              <a href="#challan" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Gate Compliance & Auto-Blocking</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>19 automated entry rules: induction, medical, licence and BGV enforced at the gate before a worker enters.</div>
              <a href="#gate" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "26px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px" }}>Contractor Onboarding</div>
              <div style={{ fontSize: "15px", color: "#2B3150", flex: "1" }}>Digitise the full contractor lifecycle: collect documents, run BGV, issue gate passes on day one, and close exits cleanly with asset recovery and final settlement.</div>
              <a href="#onboarding" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "500" }}>Know more ›</a>
            </div>
          </div>
        </div>
      </section>
      {/* GATE GOVERNANCE */}
      <section style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ borderRadius: "22px", overflow: "hidden", display: "flex", flexWrap: "wrap", background: "var(--yellow-soft)" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
              <h2 style={{ fontWeight: "500", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0" }}>Real-time entry, exit & access governance</h2>
              <p style={{ fontSize: "16px", margin: "0", color: "#2B3150" }}>IDDION RegX works with face, card and fingerprint readers, and with turnstiles and flap barriers, so only authorised people enter your premises. Track attendance, manage shifts and pull contractor-wise reports from one platform.</p>
              <p style={{ fontSize: "16px", margin: "0", color: "#2B3150" }}>Automated alerts flag early exits, overstays and unauthorised access, for both security and compliance.</p>
              <a href="#contact" style={{ alignSelf: "flex-start", marginTop: "8px", background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Contact us</a>
            </div>
            <div style={{ flex: "1.3 1 480px", minWidth: "0", background: "var(--yellow)", padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", width: "100%" }}>
                <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", padding: "20px", fontSize: "13px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ fontWeight: "700", fontSize: "15px" }}>Gate 3 · Plant 2</span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Live</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Face match</span>
                      <b style={{ color: "#15803D" }}>Verified</b>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Induction</span>
                      <b style={{ color: "#15803D" }}>Done</b>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Medical</span>
                      <b style={{ color: "#15803D" }}>Valid</b>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>Contractor licence</span>
                      <b style={{ color: "#15803D" }}>Valid</b>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>BGV</span>
                      <b style={{ color: "#15803D" }}>Cleared</b>
                    </div>
                  </div>
                  <div style={{ marginTop: "14px", background: "var(--primary)", color: "#FFFFFF", textAlign: "center", padding: "10px", borderRadius: "10px", fontWeight: "600" }}>Entry approved · Turnstile cleared</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 10px 24px rgba(20, 26, 58, 0.14)", padding: "14px 16px", fontSize: "13px" }}>
                    <div style={{ fontWeight: "700", marginBottom: "4px" }}>Hardware supported</div>
                    <div style={{ color: "#4B5368" }}>Face · Fingerprint · Card · QR · AI CCTV</div>
                  </div>
                  <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 10px 24px rgba(20, 26, 58, 0.14)", padding: "14px 16px", fontSize: "13px" }}>
                    <div style={{ fontWeight: "700", marginBottom: "4px" }}>Access control</div>
                    <div style={{ color: "#4B5368" }}>Turnstiles · Flap barriers</div>
                  </div>
                  <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 10px 24px rgba(20, 26, 58, 0.14)", padding: "14px 16px", fontSize: "13px" }}>
                    <div style={{ fontWeight: "700", marginBottom: "4px" }}>Alerts</div>
                    <div style={{ color: "#4B5368" }}>Early exit · Overstay · Unauthorised access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LEAKAGE */}
      <section id="roi" style={{ background: "#F5F4F1", padding: "72px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "#262628", color: "#FFFFFF", borderRadius: "22px", padding: "52px 44px" }}>
            <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", color: "var(--violet-soft)", marginBottom: "16px" }}>COST LEAKAGE IS SILENT. SAVINGS DON’T HAVE TO BE.</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 56px", marginBottom: "40px" }}>
              <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.4vw, 42px)", lineHeight: "1.1", letterSpacing: "-0.02em", margin: "0", flex: "1 1 380px" }}>Stop losing crores in contractor leakage</h2>
              <p style={{ color: "#C2C4CC", fontSize: "16px", margin: "0", flex: "1 1 380px" }}>Hidden inefficiencies in contractor management can drain 8–12% of your annual spend without you knowing. Here is a typical enterprise scenario (illustrative model).</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
              <div style={{ border: "1px solid #47474C", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontWeight: "600", marginBottom: "16px" }}>Typical enterprise scenario</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
                  <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                    <div style={{ fontWeight: "700", fontSize: "20px" }}>1,000</div>
                    <div style={{ color: "#B7B9C2", fontSize: "12px" }}>contractors</div>
                  </div>
                  <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                    <div style={{ fontWeight: "700", fontSize: "20px" }}>₹15,000</div>
                    <div style={{ color: "#B7B9C2", fontSize: "12px" }}>avg monthly cost each</div>
                  </div>
                  <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                    <div style={{ fontWeight: "700", fontSize: "20px" }}>6</div>
                    <div style={{ color: "#B7B9C2", fontSize: "12px" }}>locations</div>
                  </div>
                  <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                    <div style={{ fontWeight: "700", fontSize: "20px" }}>24</div>
                    <div style={{ color: "#B7B9C2", fontSize: "12px" }}>active vendor partners</div>
                  </div>
                </div>
                <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #47474C", paddingTop: "14px" }}>
                  <span style={{ color: "#B7B9C2" }}>Annual spend</span>
                  <b>₹18 Cr</b>
                </div>
              </div>
              <div style={{ border: "1px solid #47474C", borderRadius: "16px", padding: "22px" }}>
                <div style={{ fontWeight: "600", marginBottom: "4px" }}>Where you lose money</div>
                <div style={{ color: "#B7B9C2", fontSize: "13px", marginBottom: "14px" }}>Ranked by typical exposure in multi-site contractor ops</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Ghost workers (3%)</span>
                    <b>₹54 L</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Compliance penalties</span>
                    <b>₹50 L</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Admin inefficiencies</span>
                    <b>₹40 L</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Billing errors (2%)</span>
                    <b>₹36 L</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>OT fraud (1%)</span>
                    <b>₹18 L</b>
                  </div>
                </div>
                <div style={{ marginTop: "14px", display: "flex", justifyContent: "space-between", borderTop: "1px solid #47474C", paddingTop: "14px" }}>
                  <span style={{ color: "#B7B9C2" }}>Total leakage</span>
                  <b style={{ color: "var(--yellow)" }}>₹1.98 Cr / year</b>
                </div>
              </div>
              <div style={{ border: "1px solid #47474C", borderRadius: "16px", padding: "22px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ fontWeight: "600" }}>The impact with IDDION RegX</div>
                <div>
                  <div style={{ fontSize: "34px", fontWeight: "600", color: "var(--yellow)", lineHeight: "1" }}>~3 months</div>
                  <div style={{ color: "#B7B9C2", fontSize: "13px" }}>payback period</div>
                </div>
                <div>
                  <div style={{ fontSize: "34px", fontWeight: "600", color: "var(--yellow)", lineHeight: "1" }}>₹1.49 Cr</div>
                  <div style={{ color: "#B7B9C2", fontSize: "13px" }}>net annual savings</div>
                </div>
                <div style={{ color: "#B7B9C2", fontSize: "13px" }}>Measured outcomes on comparable deployments.</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "auto" }}>
                  <a href="#calculator" style={{ background: "var(--primary)", color: "#FFFFFF", textDecoration: "none", padding: "12px 20px", borderRadius: "8px", fontWeight: "600" }}>Calculate your savings →</a>
                  <a href="#demo" style={{ color: "#FFFFFF", border: "1px solid #6A6A70", textDecoration: "none", padding: "11px 20px", borderRadius: "8px", fontWeight: "600" }}>Book a demo</a>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginTop: "20px" }}>
              <div style={{ background: "#333336", borderRadius: "12px", padding: "16px" }}>
                <div style={{ color: "var(--violet-soft)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em" }}>IDENTITY</div>
                <div style={{ fontWeight: "600", marginTop: "4px" }}>Eliminate ghost workers</div>
              </div>
              <div style={{ background: "#333336", borderRadius: "12px", padding: "16px" }}>
                <div style={{ color: "var(--violet-soft)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em" }}>FINANCE</div>
                <div style={{ fontWeight: "600", marginTop: "4px" }}>99%+ invoice accuracy</div>
              </div>
              <div style={{ background: "#333336", borderRadius: "12px", padding: "16px" }}>
                <div style={{ color: "var(--violet-soft)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em" }}>OPERATIONS</div>
                <div style={{ fontWeight: "600", marginTop: "4px" }}>Real-time workforce visibility</div>
              </div>
              <div style={{ background: "#333336", borderRadius: "12px", padding: "16px" }}>
                <div style={{ color: "var(--violet-soft)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em" }}>GOVERNANCE</div>
                <div style={{ fontWeight: "600", marginTop: "4px" }}>Compliance built in</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INDUSTRIES */}
      <section id="customers" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 12px", textAlign: "center" }}>CLMS by <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>industry</span></h2>
          <p style={{ textAlign: "center", margin: "0 0 40px" }}>Trusted across manufacturing, electronics, logistics, construction and more.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "16px", marginBottom: "64px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "center" }}>
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="7" width="10" height="10" rx="1.5"></rect>
                <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"></path>
              </svg>
              <span>Electronics Assembly</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "center" }}>
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7l9-4 9 4v10l-9 4-9-4z"></path>
                <path d="M3 7l9 4 9-4M12 11v10"></path>
              </svg>
              <span>Logistics & Warehousing</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "center" }}>
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4A2 2 0 0019 18l-5-9V3"></path>
                <path d="M7.5 15h9"></path>
              </svg>
              <span>Pharmaceuticals</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "center" }}>
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
              </svg>
              <span>Automotive & Defence</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "14px", alignItems: "center" }}>
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21V10l6-4v4l6-4v4l6-4v15z"></path>
                <path d="M7 17h2M12 17h2M17 17h1"></path>
              </svg>
              <span>Manufacturing</span>
            </div>
          </div>
          <div style={{ textAlign: "center", fontFamily: "var(--font-script)", fontSize: "26px", marginBottom: "28px" }}>Trusted by</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/ashok-leyland.png" alt="Ashok Leyland" width={464} height={156} loading="lazy" decoding="async" style={{ maxWidth: "100%", maxHeight: "34px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/foxconn.png" alt="Foxconn" width={448} height={64} loading="lazy" decoding="async" style={{ maxWidth: "75%", maxHeight: "22px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/hal.png" alt="Hindustan Aeronautics Limited (HAL)" width={535} height={219} loading="lazy" decoding="async" style={{ maxWidth: "100%", maxHeight: "34px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/bhel.png" alt="BHEL" width={292} height={276} loading="lazy" decoding="async" style={{ maxWidth: "100%", maxHeight: "40px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/skf.png" alt="SKF" width={324} height={88} loading="lazy" decoding="async" style={{ maxWidth: "60%", maxHeight: "24px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/wheels-india.png" alt="Wheels India Limited" width={556} height={210} loading="lazy" decoding="async" style={{ maxWidth: "100%", maxHeight: "34px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/bfw.png" alt="BFW (Bharat Fritz Werner)" width={216} height={87} loading="lazy" decoding="async" style={{ maxWidth: "70%", maxHeight: "28px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
            <div style={{ background: "#FFFFFF", border: "1px solid #E6E9F1", borderRadius: "14px", height: "72px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px 20px", boxSizing: "border-box" }}>
              <img src="/logos/midhani.png" alt="MIDHANI" width={446} height={276} loading="lazy" decoding="async" style={{ maxWidth: "100%", maxHeight: "40px", objectFit: "contain", width: "auto", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 12px", textAlign: "center" }}>Frequently asked questions</h2>
          <p style={{ textAlign: "center", margin: "0 0 32px", color: "#4B5368" }}>Contract labour management, compliance, integrations and multi-site workforce governance.</p>
          <FaqList items={clmsFaqs} />
        </div>
      </section>
      {/* CTA */}
      <section id="demo" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 auto 48px", textAlign: "center", maxWidth: "820px" }}>Take <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>full control</span> of your contract workforce</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--yellow-soft)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>Book a personalised walkthrough</div>
              <div style={{ fontSize: "16px" }}>Join leading enterprises that have digitised contract labour management with IDDION RegX.</div>
              <a href="#demo-form" style={{ marginTop: "12px", background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Request a demo <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>Get the RegX brochure</div>
              <div style={{ fontSize: "16px" }}>Modules, gate rules, compliance coverage and deployment options in one document.</div>
              <a href="#brochure" style={{ marginTop: "12px", background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Download brochure</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
