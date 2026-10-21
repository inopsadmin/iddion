/* FAQ content. Rendered by <FaqList /> and emitted as FAQPage JSON-LD from the same data.
   Answers containing [placeholders] are rendered but left out of the schema until filled in. */

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    "q": "Does IDDION work with the biometric readers we already have?",
    "a": "[Answer: supported reader brands and how existing devices are connected.]"
  },
  {
    "q": "Can it integrate with SAP or our existing payroll?",
    "a": "[Answer: integration options and typical timelines.]"
  },
  {
    "q": "Which CLRA and state registers does it generate?",
    "a": "[Answer: registers, returns and states covered.]"
  },
  {
    "q": "Can we deploy it on-premises?",
    "a": "[Answer: on-premises and private-cloud options.]"
  },
  {
    "q": "How long does a rollout take for one plant?",
    "a": "[Answer: typical phases and go-live time.]"
  }
];

export const clmsFaqs: Faq[] = [
  {
    "q": "What is IDDION RegX?",
    "a": "IDDION RegX is a Contract Labour Management System (CLMS) built for Indian manufacturing, infrastructure and industrial sites. It automates the full contractor lifecycle on one platform: digital onboarding, gate compliance (19 automated entry rules), biometric attendance, CLRA registers (Form V/XIII), PF/ESI/LWF deductions, contractor payroll, invoice reconciliation and OT governance."
  },
  {
    "q": "What is a Contract Labour Management System (CLMS)?",
    "a": "Software that automates the full lifecycle of contract labour: onboarding, gate compliance, biometric attendance, PF/ESI/LWF statutory deductions, payroll processing for manufacturing plants, and contractor governance."
  },
  {
    "q": "How does CLMS help with CLRA compliance?",
    "a": "RegX keeps digital Form V and Form XIII registers, tracks each contractor’s licence expiry and headcount limits per establishment, alerts on the 9-day continuous attendance threshold, and generates audit-ready statutory reports. Every gate event is a compliance record, not just an attendance log."
  },
  {
    "q": "Can it integrate with biometric attendance devices?",
    "a": "Yes. RegX integrates with ZKTeco face and fingerprint terminals, AI-based CCTV attendance, QR code readers and card swipe systems. All hardware feeds the same attendance engine, per worker, per contractor, per site. Mixed hardware across multiple plant gates is supported without extra configuration."
  },
  {
    "q": "What is the 9-day continuous attendance rule under CLRA?",
    "a": "Under the CLRA Act and state rules, a contract worker who works 9 or more consecutive days without a weekly off may be entitled to a compensatory rest day, and in some states may acquire employment rights that complicate the principal-employer relationship. RegX tracks continuous attendance per worker per site and alerts HR to schedule the off before the threshold is crossed."
  },
  {
    "q": "How does CLMS prevent OT cost leakage?",
    "a": "OT is calculated from biometric punch-out times against registered shift end times. OT above the configured threshold needs digital supervisor approval before it becomes payable, and contractor invoices are reconciled line by line against approved OT. This closes unauthorised OT, ghost OT and unclaimed legitimate OT."
  },
  {
    "q": "How are PF and ESI reconciled for contract labour?",
    "a": "RegX automates PF, ESI and LWF deductions per worker, generates challan-ready reports and flags reconciliation gaps in real time, so there is no end-of-month scramble before filing deadlines."
  },
  {
    "q": "Can it manage contractors across multiple factory sites?",
    "a": "Yes. Biometrics, contractor records and compliance data from each plant are unified in one dashboard, with site-level and aggregate visibility for HR heads and compliance teams."
  }
];

export const hrisFaqs: Faq[] = [
  {
    "q": "What is an HR Information System (HRIS)?",
    "a": "The system of record for your workforce: employee data, onboarding, attendance and leave, payroll, claims and compliance documents in one platform. IDDION HRIS is built for Indian industrial employers, with statutory-aware payroll, biometric attendance integration and audit-ready records out of the box."
  },
  {
    "q": "What is the difference between HRIS and CLMS?",
    "a": "An HRIS manages your own employees; a CLMS governs contract workers supplied by contractors: licences, gate compliance, CLRA registers and contractor invoice verification. Most large plants run both. On IDDION, HRIS and RegX CLMS share one attendance and identity engine, so permanent and contract workforces are visible together without duplicate hardware or data stitching."
  },
  {
    "q": "Does it handle Indian statutory compliance?",
    "a": "Yes. PF, ESI, PT, LWF and TDS computations are built into payroll, with challan-ready outputs and audit trails. Statutory logic is maintained for Indian central and state requirements rather than adapted from a global product."
  },
  {
    "q": "Does it manage exits and full-and-final settlement?",
    "a": "Yes. Exit workflows cover clearance across departments, notice-period and leave-encashment computation, final settlement and statutory documentation, with the audit trail retained after the employee leaves."
  },
  {
    "q": "Is it suitable for multi-site, shift-based operations?",
    "a": "Yes. Shift patterns, rosters, week-offs and site-specific policies are configured per location and applied automatically. Records, attendance, leave and payroll consolidate across plants and offices with site-level and aggregate reporting."
  },
  {
    "q": "Can employees use self-service without a laptop or smartphone?",
    "a": "Yes. Self-service is available through a web portal, the mobile app and a shop-floor kiosk. In manufacturing, where most workers have neither a company laptop nor email, payslips, leave balances and attendance history become self-serviceable instead of an HR queue."
  },
  {
    "q": "How long does implementation take?",
    "a": "Typically 4–8 weeks, depending on workforce size, data migration and payroll complexity, and faster alongside an existing attendance estate. Rollout covers data migration, a payroll parallel run, policy configuration and device integration."
  },
  {
    "q": "Is our employee data secure, and where is it hosted?",
    "a": "Access is role-based with audit logging on record changes, and data handling aligns with DPDP Act obligations. On-premises deployment is available where data-residency requirements demand it."
  }
];

export const ewaFaqs: Faq[] = [
  {
    "q": "What is Earned Wage Access (EWA)?",
    "a": "EWA lets employees withdraw part of their already-earned salary before payday without disrupting payroll. The amount is calculated from verified attendance and shift data, so workers only access money they have genuinely earned."
  },
  {
    "q": "Is EWA regulated in India?",
    "a": "RBI digital-lending guidelines apply to wage-advance products: disbursements must route through a regulated bank or NBFC, any fee must be disclosed upfront, and rollovers are not permitted. Salary++ disburses through a licensed NBFC partner and recovers at source from payroll, in line with current RBI norms and the evolving Code on Social Security framework."
  },
  {
    "q": "How does EWA interact with PF and ESI deductions?",
    "a": "PF and ESI are computed on the full statutory wage; the withdrawal does not reduce the contribution base. At recovery, net take-home is adjusted but PF, ESI, PT and TDS stay on the gross wage. Workers keep full social-security entitlements and employers see no change in filings or challans."
  },
  {
    "q": "How much can a worker withdraw before payday?",
    "a": "Employer policy sets the limit, typically 40–50% of verified earned wages for the current cycle. Salary++ calculates the eligible amount from biometric attendance and shift-wage data in real time. Caps can be set by site or worker category."
  },
  {
    "q": "Does EWA affect payroll?",
    "a": "No. Advances reconcile automatically in the regular payroll cycle. Gross wage, statutory deductions and the payroll register are unchanged; only the month-end net disbursement is reduced by the amount already withdrawn."
  },
  {
    "q": "Is EWA suitable for contract workers?",
    "a": "Yes. Eligibility is based on verified biometric attendance, not employment type, so contract workers managed in IDDION RegX on daily or weekly wages can use the same platform as permanent employees."
  },
  {
    "q": "Is there a cost to the employer?",
    "a": "No capital outlay. Salary++ is funded by an NBFC partner; the employer recovers the advance in the payroll it already runs. No float costs, no advance-funding account and no credit risk. The per-disbursement platform fee is typically absorbed as a retention benefit or passed through as a nominal convenience charge."
  },
  {
    "q": "Can it integrate with our HRMS and payroll?",
    "a": "Yes. Salary++ integrates with HRMS, attendance and payroll systems, and runs on the same attendance engine as IDDION RegX and HRIS, so every withdrawal is validated against the records that drive your payroll."
  }
];
