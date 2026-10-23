"use client";

import { useState, useRef, ChangeEvent } from "react";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

type Fields = { fullName: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
const INIT: Fields = { fullName: "", email: "", phone: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.fullName.trim()) e.fullName = "Required";
  if (!f.email.trim()) e.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Invalid email";
  if (!f.phone.trim()) e.phone = "Required";
  else if (!/^[+]?[\d\s\-().]{7,}$/.test(f.phone)) e.phone = "Invalid number";
  if (!f.message.trim()) e.message = "Required";
  else if (f.message.trim().length < 10) e.message = "Min 10 characters";
  return e;
}

export default function FloatingActions() {
  const [formOpen, setFormOpen] = useState(false);
  const [fields, setFields] = useState<Fields>(INIT);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [focused, setFocused] = useState<keyof Fields | null>(null);
  const scriptLoaded = useRef(false);

  function loadRecaptcha() {
    if (scriptLoaded.current || !RECAPTCHA_SITE_KEY) return;
    scriptLoaded.current = true;
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    document.head.appendChild(s);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const updated = { ...fields, [e.target.name]: e.target.value };
    setFields(updated);
    if (touched[e.target.name as keyof Fields]) setErrors(validate(updated));
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof Fields;
    setFocused(null);
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(fields));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ fullName: true, email: true, phone: true, message: true });
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setServerError("");

    let recaptchaToken = "";
    if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
      try {
        await new Promise<void>((res) => window.grecaptcha.ready(res));
        recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "floating_contact" });
      } catch { /* proceed without token */ }
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.fullName,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
          source: "floating-form",
          recaptchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");

      const text = [
        `👋 *New Enquiry from iddion.com*`,
        ``,
        `*Name:* ${fields.fullName}`,
        `*Email:* ${fields.email}`,
        `*Phone:* ${fields.phone}`,
        `*Message:* ${fields.message}`,
      ].join("\n");
      window.open(`https://wa.me/919986221151?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");

      setSubmitted(true);
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  function closeAndReset() {
    setFormOpen(false);
    setSubmitted(false);
    setFields(INIT);
    setErrors({});
    setTouched({});
    setServerError("");
    setFocused(null);
  }

  const fieldStyle = (name: keyof Fields): React.CSSProperties => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: `1.5px solid ${touched[name] && errors[name] ? "#E53E3E" : focused === name ? "var(--primary)" : "#E2E6F0"}`,
    fontSize: "14px",
    fontFamily: "var(--font-sans)",
    color: "#141A3A",
    background: focused === name ? "#FAFBFF" : "#F8F9FC",
    boxSizing: "border-box" as const,
    outline: "none",
    transition: "border-color 0.15s, background 0.15s",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    color: "#6B7286",
    marginBottom: "6px",
  };

  return (
    <>
      {/* Floating form popup */}
      <div style={{
        position: "fixed",
        bottom: "88px",
        right: "20px",
        zIndex: 60,
        width: "320px",
        background: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 20px 60px rgba(20,26,58,0.18), 0 4px 16px rgba(20,26,58,0.08)",
        border: "1px solid #E8ECF6",
        overflow: "hidden",
        transition: "opacity 0.25s ease, transform 0.25s ease",
        opacity: formOpen ? 1 : 0,
        transform: formOpen ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
        pointerEvents: formOpen ? "auto" : "none",
        transformOrigin: "bottom right",
      }}>

        {/* Header */}
        <div style={{
          padding: "18px 20px 16px",
          background: "#141A3A",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative accent blobs */}
          <div aria-hidden="true" style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", borderRadius: "50%", background: "var(--primary)", opacity: 0.25 }} />
          <div aria-hidden="true" style={{ position: "absolute", bottom: "-16px", left: "-16px", width: "60px", height: "60px", borderRadius: "50%", background: "var(--yellow)", opacity: 0.2 }} />

          <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>IDDION</div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.2 }}>How can we help?</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "3px" }}>We respond within one business day.</div>
            </div>
            <button onClick={closeAndReset} aria-label="Close form" style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, transition: "background 0.15s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "18px 20px 20px" }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px 0 12px" }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "50%",
                background: "var(--tint)", border: "2px solid var(--primary-soft)",
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#141A3A", marginBottom: "6px", letterSpacing: "-0.01em" }}>Message Sent!</div>
              <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#6B7286", margin: "0 0 16px" }}>
                We'll get back to you within one business day.
              </p>
              <button onClick={closeAndReset} style={{
                background: "var(--tint)", border: "1.5px solid var(--primary-soft)",
                color: "var(--primary)", borderRadius: "999px", padding: "8px 20px",
                fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-sans)",
              }}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

              <div>
                <label style={labelStyle}>Full Name <span style={{ color: "#E53E3E" }}>*</span></label>
                <input type="text" name="fullName" value={fields.fullName} placeholder="Ramesh Kumar"
                  style={fieldStyle("fullName")}
                  onFocus={() => { setFocused("fullName"); loadRecaptcha(); }}
                  onBlur={handleBlur} onChange={handleChange} />
                {touched.fullName && errors.fullName && (
                  <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#E53E3E" }}>{errors.fullName}</p>
                )}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={labelStyle}>Email <span style={{ color: "#E53E3E" }}>*</span></label>
                  <input type="email" name="email" value={fields.email} placeholder="you@company.com"
                    style={fieldStyle("email")}
                    onFocus={() => setFocused("email")} onBlur={handleBlur} onChange={handleChange} />
                  {touched.email && errors.email && (
                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#E53E3E" }}>{errors.email}</p>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>Phone <span style={{ color: "#E53E3E" }}>*</span></label>
                  <input type="tel" name="phone" value={fields.phone} placeholder="+91 98765"
                    style={fieldStyle("phone")}
                    onFocus={() => setFocused("phone")} onBlur={handleBlur} onChange={handleChange} />
                  {touched.phone && errors.phone && (
                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#E53E3E" }}>{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Message <span style={{ color: "#E53E3E" }}>*</span></label>
                <textarea name="message" value={fields.message}
                  placeholder="Tell us about your plant — workers, contract setup, key challenges…"
                  rows={3}
                  style={{ ...fieldStyle("message"), resize: "vertical" }}
                  onFocus={() => setFocused("message")} onBlur={handleBlur} onChange={handleChange} />
                {touched.message && errors.message && (
                  <p style={{ margin: "4px 0 0", fontSize: "11px", color: "#E53E3E" }}>{errors.message}</p>
                )}
              </div>

              {serverError && (
                <p style={{
                  fontSize: "12px", color: "#E53E3E",
                  background: "#FFF5F5", border: "1px solid #FED7D7",
                  borderRadius: "8px", padding: "8px 12px", margin: 0,
                }}>{serverError}</p>
              )}

              {/* Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "2px" }}>
                <button type="submit" disabled={submitting} style={{
                  flex: 1,
                  padding: "11px 16px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "#141A3A",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.65 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  transition: "background 0.15s",
                  fontFamily: "var(--font-sans)",
                  minHeight: "40px",
                  boxSizing: "border-box" as const,
                }}
                  onMouseEnter={(e) => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.background = "#2B3462"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#141A3A"; }}
                >
                  {submitting ? "Sending…" : (
                    <>
                      Send message
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <a href="https://wa.me/919986221151" target="_blank" rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  style={{
                    width: "40px", height: "40px", borderRadius: "999px",
                    background: "#25D366", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, transition: "background 0.15s",
                    boxShadow: "0 2px 8px rgba(37,211,102,0.35)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#20c05a")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
                >
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.15.57 4.168 1.563 5.916L4 29l8.29-1.543A11.955 11.955 0 0 0 16.003 28C22.63 28 28 22.627 28 16c0-6.628-5.37-13-11.997-13Z" fill="#fff" />
                    <path d="M16.003 5.4C10.696 5.4 6.4 9.696 6.4 15.003c0 1.975.58 3.816 1.58 5.36l.258.41-.984 3.587 3.69-.968.398.235a9.588 9.588 0 0 0 4.661 1.213C21.31 24.84 25.6 20.546 25.6 15.24c0-5.306-4.288-9.84-9.597-9.84Zm5.667 13.47c-.24.675-1.393 1.29-1.944 1.37-.497.073-1.126.103-1.818-.114-.418-.133-.954-.31-1.64-.607-2.887-1.247-4.773-4.166-4.917-4.358-.143-.19-1.165-1.55-1.165-2.957 0-1.408.738-2.1 1-2.376.262-.277.572-.346.763-.346.19 0 .382.002.549.01.176.008.412-.067.644.49.24.575.815 1.98.886 2.123.07.143.118.311.023.5-.09.188-.136.305-.27.47-.133.164-.28.367-.4.493-.134.14-.272.292-.117.573.155.28.688 1.135 1.477 1.839 1.015.904 1.871 1.185 2.152 1.319.28.133.443.111.607-.067.163-.177.7-.814.886-1.094.187-.28.374-.234.63-.14.258.093 1.637.772 1.918.913.28.14.466.21.535.326.07.115.07.668-.17 1.343Z" fill="#25D366" />
                  </svg>
                </a>
              </div>

              <p style={{ margin: 0, fontSize: "10.5px", color: "#9BA3B8", textAlign: "center" }}>
                Or email us at{" "}
                <a href="mailto:hello@iddion.com" style={{ color: "var(--primary)", textDecoration: "none" }}>hello@iddion.com</a>
              </p>
            </form>
          )}
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setFormOpen((v) => !v)}
        aria-label={formOpen ? "Close contact form" : "Open contact form"}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "20px",
          zIndex: 60,
          width: "52px",
          height: "52px",
          borderRadius: "999px",
          background: "#141A3A",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 18px rgba(20,26,58,0.35)",
          transition: "box-shadow 0.2s, transform 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(20,26,58,0.45)";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.background = "#2B3462";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 4px 18px rgba(20,26,58,0.35)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.background = "#141A3A";
        }}
      >
        {formOpen ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
