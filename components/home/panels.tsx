/* Product panels shown in the Platform tabs on the home page. */
import Link from 'next/link';

export function ClmsPanel() {
  return (
    <div style={{ background: "var(--tint)", borderRadius: "28px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
      <div style={{ flex: "1 1 340px", minWidth: "0" }}>
        <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "10px 22px", fontSize: "16px", marginBottom: "24px" }}>Contract Labour</span>
        <h3 style={{ fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 36px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Every contractor, live from the gate</h3>
        <p style={{ fontSize: "17px", margin: "0 0 28px", color: "#2B3150" }}>Onboard with ID and background checks, control gate access by vendor and licence validity, and keep CLRA registers and PF/ESI checks current every month.</p>
        <Link href="/clms" style={{ color: "var(--primary)", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontWeight: "500" }}>Learn more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg></Link>
      </div>
      <div style={{ flex: "1.4 1 520px", minWidth: "0", position: "relative", padding: "36px 28px" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", width: "42%", height: "46%", background: "var(--pink)" }}></div>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "0", left: "0", width: "70%", height: "52%", background: "var(--yellow)", transform: "rotate(-1.5deg)" }}></div>
        <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", overflow: "hidden", display: "flex", fontSize: "12px", position: "relative" }}>
          <div style={{ flex: "0 0 132px", borderRight: "1px solid #EEF0F5", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "0.04em", color: "#141A3A", padding: "0 10px 10px" }}>IDDION</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Home</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", background: "#EEF1F7", fontWeight: "600", color: "#141A3A" }}>Contractors</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Vendors</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Attendance</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Payroll</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Compliance</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Salary++</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Reports</div>
          </div>
          <div style={{ flex: "1 1 auto", minWidth: "0", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#141A3A" }}>Contractors</div>
              <span style={{ background: "var(--primary)", color: "#FFFFFF", padding: "5px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600" }}>+ Add</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px", marginBottom: "12px" }}>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>On site now</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>1,284</div>
                <div style={{ fontSize: "11px", color: "#15803D" }}>▲ vs yesterday</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Contract workers</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>912</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Onboarding</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>37</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Alerts</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>3</div>
                <div style={{ fontSize: "11px", color: "#B45309" }}>needs action</div>
              </div>
            </div>
            <div style={{ border: "1px solid #EEF0F5", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "8px 12px", fontSize: "11px", color: "#6B7286", background: "#F8F9FC" }}>
                <span>Worker</span>
                <span>Vendor</span>
                <span>Status</span>
                <span>Licence</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Ramesh K</span>
                <span>Vendor B</span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Active</span>
                </span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Valid</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Priya S</span>
                <span>Vendor A</span>
                <span>
                  <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Onboarding</span>
                </span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Valid</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Arun M</span>
                <span>Vendor C</span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Active</span>
                </span>
                <span>
                  <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Expires 9d</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Lakshmi R</span>
                <span>Vendor A</span>
                <span>
                  <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>UAN missing</span>
                </span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Valid</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HrisPanel() {
  return (
    <div style={{ background: "var(--tint)", borderRadius: "28px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
      <div style={{ flex: "1 1 340px", minWidth: "0" }}>
        <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "10px 22px", fontSize: "16px", marginBottom: "24px" }}>HRIS & Payroll</span>
        <h3 style={{ fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 36px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Payroll fed by the same attendance</h3>
        <p style={{ fontSize: "17px", margin: "0 0 28px", color: "#2B3150" }}>Shift rosters, leave, overtime and statutory payroll for your permanent workforce, driven by the biometric data that runs the gate.</p>
        <Link href="/hris" style={{ color: "var(--primary)", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontWeight: "500" }}>Learn more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg></Link>
      </div>
      <div style={{ flex: "1.4 1 520px", minWidth: "0", position: "relative", padding: "36px 28px" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", width: "42%", height: "46%", background: "var(--pink)" }}></div>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "0", left: "0", width: "70%", height: "52%", background: "var(--yellow)", transform: "rotate(-1.5deg)" }}></div>
        <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", overflow: "hidden", display: "flex", fontSize: "12px", position: "relative" }}>
          <div style={{ flex: "0 0 132px", borderRight: "1px solid #EEF0F5", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "0.04em", color: "#141A3A", padding: "0 10px 10px" }}>IDDION</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Home</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Contractors</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Vendors</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Attendance</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", background: "#EEF1F7", fontWeight: "600", color: "#141A3A" }}>Payroll</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Compliance</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Salary++</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Reports</div>
          </div>
          <div style={{ flex: "1 1 auto", minWidth: "0", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#141A3A" }}>Payroll · October</div>
              <span style={{ background: "var(--primary)", color: "#FFFFFF", padding: "5px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600" }}>+ Add</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px", marginBottom: "12px" }}>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Employees</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>372</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>OT hours</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>1,940</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Attendance</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>Locked</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Challans</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>Ready</div>
              </div>
            </div>
            <div style={{ border: "1px solid #EEF0F5", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "8px 12px", fontSize: "11px", color: "#6B7286", background: "#F8F9FC" }}>
                <span>Step</span>
                <span>Owner</span>
                <span>Status</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Attendance lock</span>
                <span>Plant HR</span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Done</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>OT approvals</span>
                <span>Shift leads</span>
                <span>
                  <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>6 pending</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>PF / ESI / PT</span>
                <span>Payroll</span>
                <span>
                  <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Computed</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Payslips</span>
                <span>System</span>
                <span>
                  <span style={{ background: "#F1F2F6", color: "#4B5368", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Scheduled</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EwaPanel() {
  return (
    <div style={{ background: "var(--tint)", borderRadius: "28px", padding: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
      <div style={{ flex: "1 1 340px", minWidth: "0" }}>
        <span style={{ display: "inline-block", border: "1px solid #141A3A", borderRadius: "999px", padding: "10px 22px", fontSize: "16px", marginBottom: "24px" }}>Salary++</span>
        <h3 style={{ fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 36px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Wages workers have already earned, when they need them</h3>
        <p style={{ fontSize: "17px", margin: "0 0 28px", color: "#2B3150" }}>Earned wage access calculated from verified attendance, funded through regulated NBFC partners and recovered through payroll.</p>
        <Link href="/ewa" style={{ color: "var(--primary)", textDecoration: "none", display: "inline-flex", gap: "8px", alignItems: "center", fontWeight: "500" }}>Learn more <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg></Link>
      </div>
      <div style={{ flex: "1.4 1 520px", minWidth: "0", position: "relative", padding: "36px 28px" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", width: "42%", height: "46%", background: "var(--pink)" }}></div>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "0", left: "0", width: "70%", height: "52%", background: "var(--yellow)", transform: "rotate(-1.5deg)" }}></div>
        <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", overflow: "hidden", display: "flex", fontSize: "12px", position: "relative" }}>
          <div style={{ flex: "0 0 132px", borderRight: "1px solid #EEF0F5", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "0.04em", color: "#141A3A", padding: "0 10px 10px" }}>IDDION</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Home</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Contractors</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Vendors</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Attendance</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Payroll</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Compliance</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", background: "#EEF1F7", fontWeight: "600", color: "#141A3A" }}>Salary++</div>
            <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Reports</div>
          </div>
          <div style={{ flex: "1 1 auto", minWidth: "0", padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#141A3A" }}>Salary++</div>
              <span style={{ background: "var(--primary)", color: "#FFFFFF", padding: "5px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600" }}>+ Add</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px", marginBottom: "12px" }}>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Eligible workers</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>1,050</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Requests today</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>[N]</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Avg. amount</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>₹ [amt]</div>
              </div>
              <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ fontSize: "11px", color: "#6B7286" }}>Recovery</div>
                <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>Via payroll</div>
              </div>
            </div>
            <div style={{ border: "1px solid #EEF0F5", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "8px 12px", fontSize: "11px", color: "#6B7286", background: "#F8F9FC" }}>
                <span>Worker</span>
                <span>Earned</span>
                <span>Requested</span>
                <span>Status</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Ramesh K</span>
                <span>₹ [amt]</span>
                <span>₹ [amt]</span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Paid</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Priya S</span>
                <span>₹ [amt]</span>
                <span>₹ [amt]</span>
                <span>
                  <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Paid</span>
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                <span>Arun M</span>
                <span>₹ [amt]</span>
                <span>₹ [amt]</span>
                <span>
                  <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>In review</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
