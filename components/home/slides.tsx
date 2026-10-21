/* Slides for the home page carousel. */
export function SlideGate() {
  return (
    <div style={{ borderRadius: "22px", overflow: "hidden", display: "flex", flexWrap: "wrap", background: "var(--yellow-soft)" }}>
      <div style={{ flex: "1 1 360px", minWidth: "0", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 34px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Gate to payroll, without spreadsheets</h3>
        <p style={{ fontSize: "16px", margin: "0", color: "#2B3150" }}>Because InOps also installs and maintains the readers, data starts clean at the gate. Man-days are locked from every reader and vendor invoices are matched before they are paid.</p>
      </div>
      <div style={{ flex: "1.5 1 520px", minWidth: "0", background: "var(--yellow)", padding: "48px 40px", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%" }}>
          <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", overflow: "hidden", display: "flex", fontSize: "12px", position: "relative" }}>
            <div style={{ flex: "0 0 132px", borderRight: "1px solid #EEF0F5", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "0.04em", color: "#141A3A", padding: "0 10px 10px" }}>IDDION</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Home</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Contractors</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Vendors</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", background: "#EEF1F7", fontWeight: "600", color: "#141A3A" }}>Attendance</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Payroll</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Compliance</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Salary++</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Reports</div>
            </div>
            <div style={{ flex: "1 1 auto", minWidth: "0", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px", color: "#141A3A" }}>Gate to payroll · Vendor B</div>
                <span style={{ background: "var(--primary)", color: "#FFFFFF", padding: "5px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600" }}>+ Add</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px", marginBottom: "12px" }}>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Enrolled</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>410</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Gate valid</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>408</div>
                  <div style={{ fontSize: "11px", color: "#B45309" }}>2 blocked</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Man-days</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>9,860</div>
                  <div style={{ fontSize: "11px", color: "#15803D" }}>locked</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Invoice</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>On hold</div>
                  <div style={{ fontSize: "11px", color: "#B45309" }}>2 gaps</div>
                </div>
              </div>
              <div style={{ border: "1px solid #EEF0F5", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "8px", padding: "8px 12px", fontSize: "11px", color: "#6B7286", background: "#F8F9FC" }}>
                  <span>Check</span>
                  <span>Result</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                  <span>Licence & validity</span>
                  <span>
                    <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>2 expired</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                  <span>Man-days vs invoice</span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Matched</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                  <span>PF / ESI challan</span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Filed</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideVendors() {
  return (
    <div style={{ borderRadius: "22px", overflow: "hidden", display: "flex", flexWrap: "wrap", background: "var(--pink-soft)" }}>
      <div style={{ flex: "1 1 360px", minWidth: "0", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 34px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Manage every vendor in one workspace</h3>
        <p style={{ fontSize: "16px", margin: "0", color: "#2B3150" }}>See every contractor and vendor in one place. Wage registers, licences and PF/ESI challans are checked monthly, so you are inspection-ready before the inspector arrives.</p>
      </div>
      <div style={{ flex: "1.5 1 520px", minWidth: "0", background: "var(--pink)", padding: "48px 40px", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%" }}>
          <div style={{ background: "#FFFFFF", borderRadius: "14px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", overflow: "hidden", display: "flex", fontSize: "12px", position: "relative" }}>
            <div style={{ flex: "0 0 132px", borderRight: "1px solid #EEF0F5", padding: "14px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "0.04em", color: "#141A3A", padding: "0 10px 10px" }}>IDDION</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Home</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Contractors</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", background: "#EEF1F7", fontWeight: "600", color: "#141A3A" }}>Vendors</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Attendance</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Payroll</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Compliance</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Salary++</div>
              <div style={{ padding: "7px 10px", borderRadius: "6px", color: "#5A6178" }}>Reports</div>
            </div>
            <div style={{ flex: "1 1 auto", minWidth: "0", padding: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <div style={{ fontWeight: "700", fontSize: "16px", color: "#141A3A" }}>Vendor scorecard</div>
                <span style={{ background: "var(--primary)", color: "#FFFFFF", padding: "5px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "600" }}>+ Add</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px", marginBottom: "12px" }}>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Vendors</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>18</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Compliant</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>15</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Licences due</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>2</div>
                </div>
                <div style={{ border: "1px solid #EBEEF4", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "11px", color: "#6B7286" }}>Open gaps</div>
                  <div style={{ fontWeight: "700", fontSize: "20px", color: "#141A3A" }}>4</div>
                </div>
              </div>
              <div style={{ border: "1px solid #EEF0F5", borderRadius: "10px", overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "8px 12px", fontSize: "11px", color: "#6B7286", background: "#F8F9FC" }}>
                  <span>Vendor</span>
                  <span>Wage register</span>
                  <span>Licence</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                  <span>Vendor A</span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Complete</span>
                  </span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Valid</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                  <span>Vendor B</span>
                  <span>
                    <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>2 gaps</span>
                  </span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Valid</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: "8px", padding: "9px 12px", borderTop: "1px solid #EEF0F5", alignItems: "center", fontSize: "12px", color: "#141A3A" }}>
                  <span>Vendor C</span>
                  <span>
                    <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Complete</span>
                  </span>
                  <span>
                    <span style={{ background: "#FEF1E1", color: "#B45309", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>Expires 9d</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideWorkers() {
  return (
    <div style={{ borderRadius: "22px", overflow: "hidden", display: "flex", flexWrap: "wrap", background: "var(--green-soft)" }}>
      <div style={{ flex: "1 1 360px", minWidth: "0", padding: "56px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h3 style={{ fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 34px)", lineHeight: "1.15", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Give workers pay they can see</h3>
        <p style={{ fontSize: "16px", margin: "0", color: "#2B3150" }}>Payslips, attendance and earned wage access in one simple app, in the worker’s own language, so fewer disputes reach the HR desk.</p>
      </div>
      <div style={{ flex: "1.5 1 520px", minWidth: "0", background: "var(--green)", padding: "48px 40px", display: "flex", alignItems: "center" }}>
        <div style={{ width: "100%" }}>
          <div style={{ background: "#FFFFFF", borderRadius: "28px", padding: "24px", width: "100%", maxWidth: "280px", boxShadow: "0 18px 40px rgba(20, 26, 58, 0.16)", display: "flex", flexDirection: "column", gap: "12px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", color: "#6B7286" }}>Hi Ramesh</div>
            <div style={{ fontSize: "13px", color: "#6B7286" }}>Earned so far this month</div>
            <div style={{ fontWeight: "800", fontSize: "30px", color: "#141A3A" }}>₹ [amount]</div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ background: "#E6F6EE", color: "#15803D", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>22 days worked</span>
              <span style={{ background: "#EEF1FD", color: "#3046B8", padding: "3px 10px", borderRadius: "999px", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>OT 14 h</span>
            </div>
            <div style={{ fontSize: "13px", color: "#6B7286" }}>Available to withdraw: ₹ [amount]</div>
            <span style={{ background: "var(--primary)", color: "#FFFFFF", textAlign: "center", padding: "13px", borderRadius: "12px", fontWeight: "600" }}>Withdraw</span>
            <div style={{ borderTop: "1px solid #EEF0F5", paddingTop: "10px", fontSize: "12px", color: "#6B7286" }}>Payslip · Attendance · Leave</div>
          </div>
        </div>
      </div>
    </div>
  );
}
