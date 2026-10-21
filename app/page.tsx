import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import FaqList from '@/components/FaqList';
import { homeFaqs } from '@/lib/faqs';
import { pageMeta, websiteSchema, faqSchema } from '@/lib/seo';
import ProductTabs from '@/components/home/ProductTabs';
import Carousel from '@/components/home/Carousel';

export const metadata: Metadata = pageMeta({
  "title": "IDDION | Contract Labour, HRIS & Earned Wage Access Software for Indian Plants",
  "description": "IDDION brings gate attendance, contract labour management, payroll and earned wage access into one platform, purpose-built for Indian plants that run on contract labour.",
  "path": "/",
  "keywords": [
    "contract labour management software",
    "workforce management India",
    "CLMS",
    "HRIS",
    "earned wage access"
  ]
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[
        websiteSchema(),
        faqSchema(homeFaqs),
      ]} />
      {/* HERO */}
      <section id="top" style={{ padding: "72px 0 96px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <h1 style={{ fontWeight: "500", fontSize: "clamp(42px, 5.4vw, 64px)", lineHeight: "1.08", letterSpacing: "-0.025em", margin: "0 0 28px" }}>Manage your<br /><span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.08em" }}>contract</span><br />workforce from gate to payslip</h1>
            <p style={{ fontSize: "18px", margin: "0 0 36px", maxWidth: "500px" }}>From onboarding and gate access to attendance, wages and compliance, IDDION brings every worker and every vendor together.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <a href="#platform" style={{ background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Learn more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
              <a href="#demo" style={{ background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Book a demo</a>
            </div>
          </div>
          <div style={{ flex: "1 1 460px", minWidth: "0", position: "relative", padding: "24px 40px 40px 40px", boxSizing: "border-box" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "24px", top: "16px", width: "64px", height: "58%", background: "var(--primary)", transform: "rotate(4deg)" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", right: "12px", top: "18%", width: "64px", height: "56%", background: "var(--primary)", transform: "rotate(3deg)" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", left: "10px", bottom: "0", width: "46%", height: "30%", background: "var(--violet)", transform: "rotate(-8deg)" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", right: "22px", bottom: "26px", width: "60px", height: "34%", background: "var(--violet-soft)" }}></div>
            <div style={{ position: "relative", height: "400px", borderRadius: "24px", overflow: "hidden" }}>
              <img src="/images/hero-supervisor-tablet.png" alt="Indian factory supervisor with tablet on the shop floor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ position: "absolute", left: "0", bottom: "56px", width: "270px", background: "rgba(255, 255, 255, 0.94)", borderRadius: "12px", boxShadow: "0 12px 30px rgba(20, 26, 58, 0.18)", padding: "14px 16px", fontSize: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{ fontWeight: "700", fontSize: "13px" }}>Plant 2 · Today</span>
                <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Live</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
                <div style={{ background: "#F4F6FB", borderRadius: "8px", padding: "8px 10px" }}>
                  <div style={{ color: "#15803D", fontSize: "10px", fontWeight: "700" }}>ON SITE</div>
                  <div style={{ fontWeight: "700", fontSize: "18px" }}>1,284</div>
                  <div style={{ color: "#6B7286", fontSize: "10px" }}>of 1,320 rostered</div>
                </div>
                <div style={{ background: "#F4F6FB", borderRadius: "8px", padding: "8px 10px" }}>
                  <div style={{ color: "#3046B8", fontSize: "10px", fontWeight: "700" }}>CONTRACT</div>
                  <div style={{ fontWeight: "700", fontSize: "18px" }}>912</div>
                  <div style={{ color: "#6B7286", fontSize: "10px" }}>across 18 vendors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROBLEM */}
      <section style={{ padding: "0 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", background: "var(--tint)", clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0 100%)", padding: "120px 48px 48px", boxSizing: "border-box" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", marginBottom: "72px" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", flex: "1 1 380px" }}>You have systems for employees. Not your contract workforce.</h2>
            <div style={{ flex: "1 1 420px", fontSize: "16px", lineHeight: "1.6" }}>
              <p style={{ margin: "0 0 20px" }}>Your contract workforce should be as visible, controlled and compliant as your permanent one. On most plants it isn’t: it is spread across vendors, gate registers, wage sheets and spreadsheets with no single view.</p>
              <p style={{ margin: "0" }}>IDDION changes that, connecting every step from the gate to the payslip into one governed system.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px 22px", display: "flex", gap: "18px", alignItems: "flex-start" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                <circle cx="15" cy="14" r="2.5" style={{ stroke: "var(--pink)" }}></circle>
                <path d="M17 16l2 2" style={{ stroke: "var(--pink)" }}></path>
              </svg>
              <div style={{ fontSize: "16px", lineHeight: "1.5" }}><span style={{ color: "var(--pink-text)" }}>A single source of truth</span> for every worker on site, permanent or contract</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px 22px", display: "flex", gap: "18px", alignItems: "flex-start" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h9l4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
                <path d="M8 9h6M8 12h6M8 15h3"></path>
                <path d="M15 15.5l1.5 1.5 3-3" style={{ stroke: "var(--green)" }}></path>
              </svg>
              <div style={{ fontSize: "16px", lineHeight: "1.5" }}><span style={{ color: "var(--green-text)" }}>Built-in wage</span> and compliance controls, vendor by vendor</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px 22px", display: "flex", gap: "18px", alignItems: "flex-start" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="11" r="6.5"></circle>
                <path d="M9.5 11l2 2 3-3.5" style={{ stroke: "var(--violet)" }}></path>
                <path d="M8.5 16.5L7 21l5-2 5 2-1.5-4.5"></path>
              </svg>
              <div style={{ fontSize: "16px", lineHeight: "1.5" }}><span style={{ color: "var(--violet-text)" }}>Standard ways of working</span> across plants, vendors and shifts</div>
            </div>
          </div>
        </div>
      </section>
      {/* STATS */}
      <section style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 440px", minWidth: "0", position: "relative", padding: "0 30px 30px 0", boxSizing: "border-box" }}>
            <div aria-hidden="true" style={{ position: "absolute", right: "0", bottom: "0", width: "70%", height: "82%", background: "var(--yellow)", borderRadius: "0 0 220px 220px" }}></div>
            <div style={{ position: "relative", height: "440px", borderRadius: "0 0 220px 220px", overflow: "hidden" }}>
              <img src="/images/plant-team-dashboard-review.png" alt="Plant team reviewing the IDDION analytics dashboard on the shop floor" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div style={{ position: "absolute", left: "-8px", bottom: "70px", width: "220px", background: "#FFFFFF", border: "2px solid var(--violet-soft)", borderRadius: "10px", boxShadow: "0 10px 24px rgba(20, 26, 58, 0.14)", padding: "12px 14px", fontSize: "12px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "var(--violet)", display: "inline-block" }}></span>
                <span>
                  <span style={{ display: "block", fontWeight: "700" }}>Vendor B</span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>96% compliant</span>
                </span>
              </div>
              <div style={{ fontWeight: "600" }}>410 contract workers</div>
              <div style={{ color: "#6B7286" }}>Welding · Paint shop · Stores</div>
            </div>
          </div>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", marginBottom: "40px" }}>Contract labour is becoming your <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>core</span> workforce, not a stopgap.</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
              <div style={{ flex: "1 1 200px" }}>
                <div style={{ fontWeight: "400", fontSize: "56px", lineHeight: "1", letterSpacing: "-0.03em", color: "var(--primary)", marginBottom: "16px" }}>1,00,000+</div>
                <div style={{ fontSize: "16px" }}><b style={{ fontWeight: "600" }}>workers managed on IDDION.</b> Permanent and contract on one record.</div>
              </div>
              <div style={{ flex: "1 1 200px", borderLeft: "1px solid var(--primary)", paddingLeft: "24px", display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <div style={{ fontSize: "38px", lineHeight: "1", color: "var(--primary)", marginBottom: "8px" }}>70+</div>
                  <div style={{ fontSize: "15px" }}><b style={{ fontWeight: "600" }}>sites live</b> across plants, campuses and project sites.</div>
                </div>
                <div>
                  <div style={{ fontSize: "38px", lineHeight: "1", color: "var(--primary)", marginBottom: "8px" }}>3,000+</div>
                  <div style={{ fontSize: "15px" }}><b style={{ fontWeight: "600" }}>devices connected,</b> feeding live attendance from every gate.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PLATFORM */}
      <section id="platform" style={{ padding: "24px 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 32px" }}>
            <div style={{ fontFamily: "var(--font-script)", fontSize: "clamp(34px, 4vw, 46px)", lineHeight: "1.1" }}>One worker view.</div>
            <div style={{ fontWeight: "500", fontSize: "clamp(30px, 3.4vw, 40px)", letterSpacing: "-0.02em", margin: "4px 0 20px" }}>Fewer surprises.</div>
            <p style={{ fontSize: "16px", margin: "0" }}>IDDION brings gate attendance, contract labour, payroll and wage access into one operating model, <b style={{ fontWeight: "600" }}>purpose-built for plants that run on contract labour.</b> One place to onboard, manage and pay every worker, with real-time visibility into compliance and vendor performance.</p>
          </div>
          <ProductTabs />
        </div>
      </section>
      {/* CUSTOMERS */}
      <section id="customers" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", fontFamily: "var(--font-script)", fontSize: "clamp(24px, 2.6vw, 30px)", marginBottom: "40px" }}>Trusted by enterprises running large contract workforces</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px 32px", marginBottom: "64px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", fontSize: "15px" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 16l1.5-5h11L19 16"></path>
                <rect x="3" y="16" width="18" height="3" rx="1"></rect>
                <circle cx="7" cy="19.5" r="1.5"></circle>
                <circle cx="17" cy="19.5" r="1.5"></circle>
              </svg>
              <span>Automotive & Engineering</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", fontSize: "15px" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="7" width="10" height="10" rx="1.5"></rect>
                <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"></path>
              </svg>
              <span>Electronics Manufacturing</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", fontSize: "15px" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"></path>
              </svg>
              <span>Defence & PSU</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", fontSize: "15px" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 21V5h12M4 5l6-2M16 5v5M16 10l-2 3h4z"></path>
                <path d="M2 21h8"></path>
              </svg>
              <span>Infrastructure & Construction</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", fontSize: "15px" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z"></path>
                <path d="M9 11h6M12 8v6"></path>
              </svg>
              <span>Healthcare</span>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "10px", boxShadow: "0 3px 10px rgba(20, 26, 58, 0.08)", padding: "18px 20px", display: "flex", gap: "16px", alignItems: "center", fontSize: "15px" }}>
              <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#141A3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4A2 2 0 0019 18l-5-9V3"></path>
                <path d="M7.5 15h9"></path>
              </svg>
              <span>Pharma & Process</span>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "24px 48px", alignItems: "center" }}>
            <span style={{ fontWeight: "800", fontSize: "24px", color: "#8A90A2", whiteSpace: "nowrap" }}>Ashok Leyland</span>
            <span style={{ fontWeight: "800", fontSize: "24px", color: "#8A90A2", whiteSpace: "nowrap" }}>Foxconn</span>
            <span style={{ fontWeight: "800", fontSize: "24px", color: "#8A90A2", whiteSpace: "nowrap" }}>HAL</span>
            <span style={{ fontWeight: "800", fontSize: "24px", color: "#8A90A2", whiteSpace: "nowrap" }}>BHEL</span>
            <span style={{ fontWeight: "800", fontSize: "24px", color: "#8A90A2", whiteSpace: "nowrap" }}>Apollo</span>
            <span style={{ fontWeight: "800", fontSize: "24px", color: "#8A90A2", whiteSpace: "nowrap" }}>Ramky</span>
          </div>
        </div>
      </section>
      {/* ROLES */}
      <section id="roles" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center", marginBottom: "64px" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0" }}>
              <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", marginBottom: "14px" }}>Every team wins with <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>IDDION</span></h2>
              <p style={{ margin: "0", fontSize: "16px" }}>Align HR, plant, finance and compliance around one workforce operating model that keeps every plant visible and inspection-ready.</p>
            </div>
            <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", alignItems: "center", gap: "0", overflowX: "auto" }}>
              <div style={{ flex: "none", width: "150px", height: "150px", borderRadius: "50%", background: "var(--tint)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "104px", height: "104px", borderRadius: "50%", background: "#141A3A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg aria-hidden="true" width="46" height="46" viewBox="0 0 34 34" fill="none">
                    <rect x="1" y="1" width="14" height="14" rx="4" style={{ fill: "var(--primary)" }}></rect>
                    <rect x="19" y="1" width="14" height="14" rx="7" style={{ fill: "var(--yellow)" }}></rect>
                    <rect x="1" y="19" width="14" height="14" rx="7" style={{ fill: "var(--pink)" }}></rect>
                    <rect x="19" y="19" width="14" height="14" rx="4" style={{ fill: "var(--violet)" }}></rect>
                  </svg>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                  <div aria-hidden="true" style={{ width: "64px", height: "2px", background: "#DCE1EC" }}></div>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "3px solid var(--green)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "15px", color: "#141A3A", flex: "none", position: "relative", zIndex: "1" }}>HR</div>
                  <div style={{ marginLeft: "-8px", background: "var(--green-soft)", color: "#141A3A", padding: "10px 26px 10px 22px", borderRadius: "999px", fontSize: "18px", fontWeight: "500", whiteSpace: "nowrap" }}>HR / IR</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                  <div aria-hidden="true" style={{ width: "64px", height: "2px", background: "#DCE1EC" }}></div>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "3px solid var(--primary)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "15px", color: "#141A3A", flex: "none", position: "relative", zIndex: "1" }}>PL</div>
                  <div style={{ marginLeft: "-8px", background: "var(--primary-soft)", color: "#141A3A", padding: "10px 26px 10px 22px", borderRadius: "999px", fontSize: "18px", fontWeight: "500", whiteSpace: "nowrap" }}>Plant & Security</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                  <div aria-hidden="true" style={{ width: "64px", height: "2px", background: "#DCE1EC" }}></div>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "3px solid var(--violet)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "15px", color: "#141A3A", flex: "none", position: "relative", zIndex: "1" }}>FN</div>
                  <div style={{ marginLeft: "-8px", background: "var(--violet-soft)", color: "#141A3A", padding: "10px 26px 10px 22px", borderRadius: "999px", fontSize: "18px", fontWeight: "500", whiteSpace: "nowrap" }}>Finance</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                  <div aria-hidden="true" style={{ width: "64px", height: "2px", background: "#DCE1EC" }}></div>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "3px solid var(--coral)", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "15px", color: "#141A3A", flex: "none", position: "relative", zIndex: "1" }}>CO</div>
                  <div style={{ marginLeft: "-8px", background: "var(--coral-soft)", color: "#141A3A", padding: "10px 26px 10px 22px", borderRadius: "999px", fontSize: "18px", fontWeight: "500", whiteSpace: "nowrap" }}>Compliance</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--tint)", borderRadius: "12px", padding: "28px", minHeight: "180px" }}>
              <div style={{ color: "var(--green-text)", fontWeight: "500", fontSize: "17px", marginBottom: "6px" }}>HR & IR</div>
              <div style={{ fontWeight: "600", fontSize: "19px", lineHeight: "1.35", marginBottom: "12px" }}>Make your contract workforce visible and defensible.</div>
              <div style={{ fontSize: "14px", color: "#2B3150" }}>One record for onboarding, attendance and grievances, permanent and contract alike.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "12px", padding: "28px", minHeight: "180px" }}>
              <div style={{ color: "var(--primary-text)", fontWeight: "500", fontSize: "17px", marginBottom: "6px" }}>Plant & Security</div>
              <div style={{ fontWeight: "600", fontSize: "19px", lineHeight: "1.35", marginBottom: "12px" }}>Know who is inside, by zone, right now.</div>
              <div style={{ fontSize: "14px", color: "#2B3150" }}>Access rules enforced at the reader, not the register, across every gate.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "12px", padding: "28px", minHeight: "180px" }}>
              <div style={{ color: "var(--violet-text)", fontWeight: "500", fontSize: "17px", marginBottom: "6px" }}>Finance</div>
              <div style={{ fontWeight: "600", fontSize: "19px", lineHeight: "1.35", marginBottom: "12px" }}>Pay vendors only for days actually worked.</div>
              <div style={{ fontSize: "14px", color: "#2B3150" }}>Vendor bills reconciled against verified man-days before payment.</div>
            </div>
            <div style={{ background: "var(--tint)", borderRadius: "12px", padding: "28px", minHeight: "180px" }}>
              <div style={{ color: "var(--coral-text)", fontWeight: "500", fontSize: "17px", marginBottom: "6px" }}>Compliance & Legal</div>
              <div style={{ fontWeight: "600", fontSize: "19px", lineHeight: "1.35", marginBottom: "12px" }}>Be inspection-ready every month.</div>
              <div style={{ fontSize: "14px", color: "#2B3150" }}>CLRA registers, licences and PF/ESI challans checked vendor by vendor.</div>
            </div>
          </div>
        </div>
      </section>
      {/* CAROUSEL */}
      <section style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", marginBottom: "14px", maxWidth: "640px" }}>Control contract labour costs, elevate the worker experience</h2>
          <p style={{ margin: "0 0 56px", fontSize: "16px", maxWidth: "640px" }}>Clean data from the gate and repeatable workflows cut leakage and risk, while workers get paid accurately and on time.</p>
          <Carousel />
        </div>
      </section>
      {/* RESOURCES */}
      <section id="resources" style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", marginBottom: "48px" }}>Insights to help you run a <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>compliant</span> plant</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <a href="/resources/clra-checklist" style={{ textDecoration: "none", color: "#141A3A", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "220px", borderRadius: "14px", overflow: "hidden" }}>
                <img src="/images/article-clra-checklist.jpg" alt="HR manager at a plant office" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontWeight: "500", fontSize: "19px", lineHeight: "1.35" }}>A CLRA compliance checklist for principal employers</span>
              <span style={{ color: "var(--primary)", fontSize: "15px" }}>Read more ›</span>
            </a>
            <a href="/resources/labour-codes" style={{ textDecoration: "none", color: "#141A3A", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "220px", borderRadius: "14px", overflow: "hidden" }}>
                <img src="/images/article-labour-codes.jpg" alt="IDDION connecting HR, Plant and Finance teams" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontWeight: "500", fontSize: "19px", lineHeight: "1.35" }}>What the new labour codes change for contract workers</span>
              <span style={{ color: "var(--primary)", fontSize: "15px" }}>Read more ›</span>
            </a>
            <a href="/resources/ewa-attrition" style={{ textDecoration: "none", color: "#141A3A", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "220px", borderRadius: "14px", overflow: "hidden" }}>
                <img src="/images/article-ewa-attrition.jpg" alt="Worker checking payslip on phone" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontWeight: "500", fontSize: "19px", lineHeight: "1.35" }}>How earned wage access cuts attrition on the line</span>
              <span style={{ color: "var(--primary)", fontSize: "15px" }}>Read more ›</span>
            </a>
          </div>
        </div>
      </section>
      {/* CALCULATOR */}
      <section style={{ background: "#F5F4F1", padding: "64px 0" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "#262628", color: "#FFFFFF", borderRadius: "22px", padding: "48px 44px", display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center" }}>
            <div style={{ flex: "1 1 400px", minWidth: "0" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.14em", color: "var(--violet-soft)", marginBottom: "16px" }}>CONTRACT LABOUR RISK CHECK</div>
              <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.4vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em", margin: "0 0 20px" }}>See where your plant’s compliance gaps are hiding.</h2>
              <p style={{ color: "#C2C4CC", fontSize: "15px", margin: "0 0 28px" }}>Model exposure across wage compliance, vendor licences, statutory filings and billing leakage, then see what IDDION would catch.</p>
              <a href="#calculator" style={{ background: "var(--primary)", color: "#FFFFFF", textDecoration: "none", padding: "13px 22px", borderRadius: "8px", fontWeight: "600", display: "inline-block" }}>Check my exposure →</a>
            </div>
            <div style={{ flex: "1 1 320px", minWidth: "0", border: "1px solid #47474C", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontWeight: "600", marginBottom: "16px" }}>Build a first business case in 2 minutes</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
                <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>4</div>
                  <div style={{ color: "#B7B9C2", fontSize: "12px" }}>risk areas checked</div>
                </div>
                <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>₹ view</div>
                  <div style={{ color: "#B7B9C2", fontSize: "12px" }}>of billing leakage</div>
                </div>
                <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>1 view</div>
                  <div style={{ color: "#B7B9C2", fontSize: "12px" }}>of vendor compliance</div>
                </div>
                <div style={{ background: "#333336", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ fontWeight: "700", fontSize: "20px" }}>2 min</div>
                  <div style={{ color: "#B7B9C2", fontSize: "12px" }}>to model your plant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST */}
      <section id="trust" style={{ padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "center" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0" }}>
            <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", marginBottom: "18px" }}>Built to pass your <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>InfoSec</span> review</h2>
            <p style={{ fontSize: "16px", margin: "0 0 24px" }}>Worker identity, biometrics and wage data are sensitive. IDDION runs the way defence and PSU customers require.</p>
            <a href="#trust-center" style={{ color: "var(--primary)", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center" }}>Visit the Trust Center <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg></a>
          </div>
          <div style={{ flex: "1 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "20px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "6px" }}>ISO/IEC 27001</div>
              <div style={{ color: "#4B5368", fontSize: "15px" }}>Certified information security management.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "6px" }}>DPDP-ready</div>
              <div style={{ color: "#4B5368", fontSize: "15px" }}>Consent, retention and processor controls for worker data.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "6px" }}>Customer VAPT tested</div>
              <div style={{ color: "#4B5368", fontSize: "15px" }}>Assessed by enterprise InfoSec teams.</div>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 4px 14px rgba(20, 26, 58, 0.08)", padding: "24px" }}>
              <div style={{ fontWeight: "600", fontSize: "17px", marginBottom: "6px" }}>Cloud or on-premises</div>
              <div style={{ color: "#4B5368", fontSize: "15px" }}>Deploy in your own data centre if policy requires.</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="demo" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", textAlign: "center", marginBottom: "48px" }}>Ready to bring your contract workforce into <span style={{ fontFamily: "var(--font-script)", fontWeight: "400", letterSpacing: "0.01em", fontSize: "1.1em" }}>one</span> platform?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--tint)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>Tell us what you need</div>
              <div style={{ fontSize: "16px" }}>Share your plants, headcount and vendor setup, and the team will be in touch quickly.</div>
              <a href="#contact" style={{ marginTop: "12px", background: "#FFFFFF", color: "#141A3A", border: "1px solid #141A3A", textDecoration: "none", padding: "13px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", minHeight: "48px", boxSizing: "border-box" }}>Talk to an expert</a>
            </div>
            <div style={{ background: "var(--yellow-soft)", borderRadius: "22px", padding: "40px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div style={{ fontWeight: "500", fontSize: "26px" }}>See IDDION in action</div>
              <div style={{ fontSize: "16px" }}>A 30-minute walkthrough using your own shift pattern and vendor structure.</div>
              <a href="#demo-form" style={{ marginTop: "12px", background: "#141A3A", color: "#FFFFFF", textDecoration: "none", padding: "14px 26px", borderRadius: "999px", fontWeight: "500", display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", boxSizing: "border-box" }}>Request a demo <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg></a>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" style={{ padding: "0 0 120px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontWeight: "500", fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0", textAlign: "center", marginBottom: "32px" }}>FAQs</h2>
          <FaqList items={homeFaqs} />
        </div>
      </section>
    </>
  );
}
