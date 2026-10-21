import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import FaqList from '@/components/FaqList';
import { hrisFaqs } from '@/lib/faqs';
import { pageMeta, softwareSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  "title": "HRIS & Payroll Software for Indian Manufacturing | IDDION",
  "description": "IDDION HRIS manages onboarding, attendance, leave, payroll, TDS and statutory compliance (PF, ESI, PT, LWF) for your permanent workforce, on one engine with IDDION RegX CLMS.",
  "path": "/hris",
  "keywords": [
    "HRIS software India",
    "payroll software for manufacturing",
    "HRMS for factories",
    "statutory payroll compliance",
    "employee self service kiosk"
  ]
});

export default function HrisPage() {
  return (
    <>
      <JsonLd data={[
        softwareSchema({"name":"IDDION HRIS","features":["Employee database","Time and attendance","Leave management","Payroll with PF, ESI, PT, LWF and TDS","Claims and reimbursement","Exit and full-and-final settlement","Employee self service (web, mobile, kiosk)","Training","Multi-site reporting"],"description":"IDDION HRIS manages onboarding, attendance, leave, payroll, TDS and statutory compliance (PF, ESI, PT, LWF) for your permanent workforce, on one engine with IDDION RegX CLMS.","path":"/hris"}),
        faqSchema(hrisFaqs),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: "HRIS & Payroll", path: '/hris' }]),
      ]} />
      {/* HERO */}
      <section id="top" style={{ padding: "56px 0 96px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <div style={{ fontSize: "14px", color: "#4B5368", marginBottom: "20px" }}><Link href="/#platform" style={{ color: "#4B5368", textDecoration: "none" }}>Platform</Link> / <span style={{ color: "#141A3A", fontWeight: "600" }}>HRIS & Payroll</span></div>
            <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "8px 18px", fontSize: "14px", marginBottom: "24px" }}>HR Information System (HRIS)</span>
            <h1 style={{ fontWeight: "500", fontSize: "clamp(40px, 5vw, 60px)", lineHeight: "1.08", letterSpacing: "-0.025em", margin: "0 0 28px" }}>HR software built for <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.08em" }}>Indian</span> manufacturing</h1>
            <p style={{ fontSize: "18px", margin: "0 0 36px", maxWidth: "520px" }}>IDDION HRIS manages onboarding, attendance, payroll and compliance for your permanent workforce. One engine with IDDION RegX CLMS, one dashboard.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a href="#demo" style={{ background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Get in touch <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
              <a href="#modules" style={{ background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>See modules</a>
            </div>
          </div>
          <div style={{ flex: "1 1 460px", minWidth: "0", position: "relative", padding: "24px 40px 40px 40px", boxSizing: "border-box" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "24px", top: "16px", width: "64px", height: "58%", background: "var(--primary)", transform: "rotate(4deg)" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", right: "12px", top: "18%", width: "64px", height: "56%", background: "var(--primary)", transform: "rotate(3deg)" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", left: "10px", bottom: "0", width: "46%", height: "30%", background: "var(--violet)", transform: "rotate(-8deg)" }}></div>
            <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", padding: "18px", fontSize: "13px", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <span style={{ fontWeight: "700", fontSize: "16px" }}>Employee directory</span>
                <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Live</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--primary-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px" }}>AK</span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block" }}>Arjun Kumar</b>
                    <span style={{ color: "#6B7286" }}>Senior Analyst</span>
                  </span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Active</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--pink-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px" }}>MR</span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block" }}>Meera Rao</b>
                    <span style={{ color: "#6B7286" }}>HR Specialist</span>
                  </span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Active</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--green-soft)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px" }}>LS</span>
                  <span style={{ flex: "1" }}>
                    <b style={{ display: "block" }}>Laksh Singh</b>
                    <span style={{ color: "#6B7286" }}>Payroll Ops</span>
                  </span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>Active</span>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", right: "0", bottom: "8px", width: "220px", background: "rgba(255, 255, 255, 0.96)", borderRadius: "12px", boxShadow: "0 12px 30px rgba(20, 26, 58, 0.18)", padding: "12px 14px", fontSize: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <b>Workforce sync</b>
                <span style={{ color: "#15803D", fontWeight: "600" }}>Today</span>
              </div>
              <div style={{ color: "#4B5368" }}>Roster updated across all plants</div>
            </div>
          </div>
        </div>
      </section>
      {/* HIDDEN COST */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", background: "var(--tint)", clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 100%)", padding: "120px 48px 56px", boxSizing: "border-box" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", marginBottom: "56px" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", flex: "1 1 380px" }}>Disconnected systems. Manual work. Costly errors.</h2>
            <p style={{ flex: "1 1 420px", fontSize: "16px", lineHeight: "1.6", margin: "0" }}>Stop losing hours to spreadsheets and fragmented HR tools. Unify data and decisions in one source of truth, before errors become audits.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--pink-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>01 · FRAGMENTATION</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>Data silos</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Employee records scattered across dozens of spreadsheets and old systems.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--coral-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>02 · SPEND RISK</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>Payroll leakage</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Manual attendance leads to overpayment and clerical errors.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--violet-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>03 · BLIND SPOTS</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>No visibility</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Without real-time reporting, strategic workforce decisions become guesswork.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "26px" }}>
              <div style={{ color: "var(--green-text)", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", marginBottom: "10px" }}>04 · REGULATORY</div>
              <div style={{ fontWeight: "600", fontSize: "20px", marginBottom: "8px" }}>Compliance risk</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Keeping up with changing labour laws and tax regulations is a constant burden.</div>
            </div>
          </div>
        </div>
      </section>
      {/* FLOW */}
      <section style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 56px" }}>
            <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(34px, 4vw, 46px)", lineHeight: "1.1" }}>Payroll, attendance & compliance.</div>
            <div style={{ fontWeight: "500", fontSize: "clamp(30px, 3.4vw, 40px)", letterSpacing: "-0.02em", margin: "4px 0 20px" }}>One automated flow.</div>
            <p style={{ fontSize: "16px", margin: "0" }}>A four-step pipeline from first record to payroll insight, designed to run without manual rework.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={{ borderTop: "3px solid var(--primary)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--primary)", lineHeight: "1", marginBottom: "12px" }}>01</div>
              <div style={{ fontWeight: "600", fontSize: "19px", marginBottom: "6px" }}>Capture data</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Onboard employees once into a centralised, secure database.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--violet)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--violet-text)", lineHeight: "1", marginBottom: "12px" }}>02</div>
              <div style={{ fontWeight: "600", fontSize: "19px", marginBottom: "6px" }}>Track time</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Automated logs capture every minute worked across all locations.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--green)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--green-text)", lineHeight: "1", marginBottom: "12px" }}>03</div>
              <div style={{ fontWeight: "600", fontSize: "19px", marginBottom: "6px" }}>Process pay</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>The payroll engine calculates gross-to-net instantly.</div>
            </div>
            <div style={{ borderTop: "3px solid var(--coral)", paddingTop: "20px" }}>
              <div style={{ fontSize: "44px", color: "var(--coral-text)", lineHeight: "1", marginBottom: "12px" }}>04</div>
              <div style={{ fontWeight: "600", fontSize: "19px", marginBottom: "6px" }}>Get insights</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Download compliance-ready reports and visual workforce insights.</div>
            </div>
          </div>
        </div>
      </section>
      {/* MODULES */}
      <section id="modules" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 14px" }}>Built for <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>efficiency</span> and control</h2>
          <p style={{ margin: "0 0 48px", maxWidth: "640px" }}>Twelve modules covering the full employee lifecycle, from first day to final settlement.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px" }}>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Mobile App</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Quick, easy access to HR services from any phone.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Employee Database</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Every employee’s complete information in one place.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Payroll</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Complete command over payroll, with PF, ESI, PT, LWF and TDS built in.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Time & Attendance</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Comprehensive time tracking fed by your biometric devices.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Leave Management</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>All leave policies, accruals and approvals under one umbrella.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Claims & Reimbursement</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Track claims and reimbursements without the hassle.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>TDS & Tax Planner</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Salary TDS calculations, simplified.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Exit Management</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Everything needed to manage employee exits effectively.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Travel Management</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Time-efficient handling of travel expenses.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Employee Self Service</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Web portal, mobile app and shop-floor kiosk.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Time Sheet</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Control labour costs and employee working hours.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "14px", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "18px", marginBottom: "6px" }}>Training</div>
              <div style={{ fontSize: "15px", color: "#2B3150" }}>Equip employees with skills that drive business results.</div>
            </div>
          </div>
        </div>
      </section>
      {/* IMPACT */}
      <section style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 18px" }}>See the <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>business</span> impact</h2>
            <p style={{ fontSize: "16px", margin: "0 0 28px" }}>Companies that switch report significant improvements across every core HR metric within the first quarter.</p>
            <a href="#impact-report" style={{ background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Download impact report</a>
          </div>
          <div style={{ flex: "1.3 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px 40px" }}>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>90%</div>
              <div>
                <b style={{ fontWeight: "600" }}>reduction in payroll errors</b>
              </div>
            </div>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>70%</div>
              <div><b style={{ fontWeight: "600" }}>admin time saved weekly,</b> around 40 hours</div>
            </div>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>15×</div>
              <div>
                <b style={{ fontWeight: "600" }}>faster payroll processing</b>
              </div>
            </div>
            <div style={{ borderLeft: "1px solid var(--primary)", paddingLeft: "24px" }}>
              <div style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "10px" }}>100%</div>
              <div><b style={{ fontWeight: "600" }}>compliance confidence,</b> audit-ready</div>
            </div>
          </div>
        </div>
      </section>
      {/* PRODUCT PREVIEW */}
      <section style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "var(--pink-soft)", borderRadius: "22px", padding: "56px 48px" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(28px, 3vw, 38px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 10px" }}>Designed for simplicity</h2>
            <p style={{ margin: "0 0 36px", color: "#2B3150", maxWidth: "620px" }}>Complex operations behind an interface anyone on your HR team can use.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", fontSize: "13px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.12)", padding: "18px" }}>
                <div style={{ color: "#6B7286", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em" }}>TIME</div>
                <div style={{ fontWeight: "700", fontSize: "16px", margin: "4px 0 12px" }}>Attendance logs</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", color: "#6B7286", fontSize: "11px", paddingBottom: "6px", borderBottom: "1px solid #EEF0F5" }}>
                  <span>Date</span>
                  <span>Clock in</span>
                  <span>Status</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", padding: "8px 0", borderBottom: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>Oct 24</span>
                  <span>09:00 AM</span>
                  <span style={{ color: "#15803D", fontWeight: "600" }}>On time</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", padding: "8px 0", borderBottom: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>Oct 23</span>
                  <span>09:15 AM</span>
                  <span style={{ color: "#B45309", fontWeight: "600" }}>Late</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", padding: "8px 0", borderBottom: "1px solid #EEF0F5", alignItems: "center" }}>
                  <span>Oct 22</span>
                  <span>08:55 AM</span>
                  <span style={{ color: "#15803D", fontWeight: "600" }}>On time</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", padding: "8px 0", alignItems: "center" }}>
                  <span>Oct 21</span>
                  <span>09:00 AM</span>
                  <span style={{ color: "#15803D", fontWeight: "600" }}>On time</span>
                </div>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.12)", padding: "18px" }}>
                <div style={{ color: "#6B7286", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em" }}>PAYROLL</div>
                <div style={{ fontWeight: "700", fontSize: "16px", margin: "4px 0 12px" }}>Payroll summary</div>
                <div style={{ fontSize: "30px", fontWeight: "800" }}>₹4,52,300</div>
                <div style={{ color: "#6B7286", marginBottom: "12px" }}>Total net pay disbursed</div>
                <div style={{ height: "10px", background: "#EEF0F5", borderRadius: "999px", overflow: "hidden", marginBottom: "6px" }}>
                  <div style={{ width: "75%", height: "100%", background: "var(--primary)" }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#6B7286", marginBottom: "14px" }}>
                  <span>Batch progress</span>
                  <b style={{ color: "#141A3A" }}>75%</b>
                </div>
                <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "6px 14px", fontWeight: "600" }}>View batch details</span>
              </div>
              <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.12)", padding: "18px" }}>
                <div style={{ color: "#6B7286", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em" }}>SELF SERVICE</div>
                <div style={{ fontWeight: "700", fontSize: "16px", margin: "4px 0 12px" }}>Employee app</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                    <span>Payslip · September</span>
                    <b style={{ color: "var(--primary)" }}>View</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                    <span>Leave balance</span>
                    <b>12 days</b>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                    <span>Travel claim</span>
                    <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "2px 10px", borderRadius: "999px", fontWeight: "600" }}>In review</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #EEF0F5", borderRadius: "10px", padding: "10px 12px" }}>
                    <span>Tax declaration</span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "2px 10px", borderRadius: "999px", fontWeight: "600" }}>Submitted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INTEGRATIONS */}
      <section id="customers" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px", alignItems: "center" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Works with your <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>stack</span></h2>
              <p style={{ margin: "0 0 24px" }}>Integrations cover common ERP and enterprise systems. And because HRIS and RegX CLMS share one attendance and identity engine, a single biometric estate serves both your permanent and contract workforce.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--green)", flex: "none" }}></span>One enrolment per person, two workforce systems</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--primary)", flex: "none" }}></span>Face, fingerprint and CCTV-based capture</div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--violet)", flex: "none" }}></span>No duplicate device fleets to buy or maintain</div>
              </div>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "14px" }}>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "26px 16px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#8A90A2" }}>SAP</div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "26px 16px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#8A90A2" }}>Snowflake</div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "26px 16px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#8A90A2" }}>Microsoft 365</div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "26px 16px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#8A90A2" }}>Workday</div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "26px 16px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#8A90A2" }}>Oracle NetSuite</div>
              <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "26px 16px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#8A90A2" }}>ServiceNow</div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 12px", textAlign: "center" }}>Frequently asked questions</h2>
          <p style={{ textAlign: "center", margin: "0 0 32px", color: "#4B5368" }}>Employee records, HR automation, payroll integrations and implementation.</p>
          <FaqList items={hrisFaqs} />
        </div>
      </section>
      {/* CTA */}
      <section id="demo" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 auto 16px", textAlign: "center", maxWidth: "820px" }}>Run your HR ops with <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>less</span> friction</h2>
          <p style={{ textAlign: "center", margin: "0 auto 48px", maxWidth: "640px" }}>Teams across Indian manufacturing plants use IDDION to tighten scheduling, stay compliant and pay people on time.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--yellow-soft)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>Book a tailored demo</div>
              <div style={{ fontSize: "16px" }}>A live walkthrough mapped to how your plant actually works.</div>
              <a href="#demo-form" style={{ marginTop: "12px", background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Book a demo <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>Get a free consultation</div>
              <div style={{ fontSize: "16px" }}>Talk to our team about your compliance and payroll needs.</div>
              <a href="#contact" style={{ marginTop: "12px", background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Talk to an expert</a>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "#4B5368", fontSize: "14px", margin: "24px 0 0" }}>No commitment · GDPR & DPDP-ready · Implementation support included</p>
        </div>
      </section>
    </>
  );
}
