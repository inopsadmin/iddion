'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  const scriptLoaded = useRef(false);

  function loadRecaptcha() {
    if (scriptLoaded.current || !RECAPTCHA_SITE_KEY) return;
    scriptLoaded.current = true;
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    document.head.appendChild(s);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    let recaptchaToken = '';
    if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
      try {
        await new Promise<void>((res) => window.grecaptcha.ready(res));
        recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
      } catch { /* proceed without token */ }
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      setForm({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const field = (id: string): React.CSSProperties => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: '10px',
    border: `1.5px solid ${focused === id ? '#3352F0' : '#E2E6F0'}`,
    fontSize: '15px',
    fontFamily: 'var(--font-sans)',
    color: '#141A3A',
    background: focused === id ? '#FAFBFF' : '#F8F9FC',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.15s, background 0.15s',
  });

  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#6B7286',
    marginBottom: '7px',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* BREADCRUMB */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 32px 0', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', color: '#9BA3B8' }}>
          <Link href="/" style={{ color: '#9BA3B8', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span style={{ color: '#141A3A', fontWeight: '600' }}>Contact</span>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', maxWidth: '1280px', margin: '32px auto 80px', width: '100%', padding: '0 32px', gap: '32px', boxSizing: 'border-box', alignItems: 'stretch' }}>

        {/* LEFT — DARK PANEL */}
        <div style={{ flex: '0 0 380px', minWidth: '280px', background: '#141A3A', borderRadius: '24px', padding: '52px 44px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '0' }}>

          {/* Decorative blobs */}
          <div aria-hidden="true" style={{ position: 'absolute', top: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'var(--primary, #3352F0)', opacity: 0.25 }} />
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '60px', left: '-50px', width: '220px', height: '220px', borderRadius: '50%', background: '#F28CD0', opacity: 0.15 }} />
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-30px', right: '30px', width: '120px', height: '120px', borderRadius: '50%', background: '#FFC93C', opacity: 0.2 }} />

          <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#A8B3D0', borderRadius: '999px', padding: '5px 14px', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '28px' }}>Talk to us</span>

            <h1 style={{ fontWeight: '500', fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: '1.12', letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 16px' }}>
              Let&rsquo;s talk about your{' '}
              <span style={{ fontFamily: 'var(--font-script)', fontWeight: '400', letterSpacing: '0.01em', fontSize: '1.1em', color: '#FFC93C' }}>workforce</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#A8B3D0', margin: '0 0 52px', lineHeight: '1.65' }}>
              Whether you&rsquo;re evaluating IDDION for your plant or have a compliance question, we respond within one business day.
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  title: 'Office',
                  content: '921, Laxmi Tower, 5th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka 560102',
                  href: undefined,
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  title: 'Email',
                  content: 'hello@iddion.com',
                  href: 'mailto:hello@iddion.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                    </svg>
                  ),
                  title: 'Call',
                  content: '+91 80 2774 5220',
                  href: 'tel:+918027745220',
                },
              ].map(({ icon, title, content, href }) => (
                <div key={title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8B3D0', flexShrink: 0 }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: '700', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7A99', margin: '0 0 4px' }}>{title}</p>
                    {href ? (
                      <a href={href} style={{ fontSize: '14px', color: '#FFFFFF', textDecoration: 'none', lineHeight: '1.5' }}>{content}</a>
                    ) : (
                      <p style={{ fontSize: '14px', color: '#CBD3E8', margin: '0', lineHeight: '1.6' }}>{content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div style={{ flex: '1 1 400px', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '64px 32px' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#E6F6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#15803D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 style={{ fontWeight: '600', fontSize: '26px', margin: '0 0 12px', color: '#141A3A' }}>Message received!</h2>
              <p style={{ color: '#4B5368', margin: '0 0 32px', fontSize: '16px', lineHeight: '1.6' }}>
                We&rsquo;ll get back to you at <strong>{form.email || 'your email'}</strong> within one business day.
              </p>
              <button
                onClick={() => setStatus('idle')}
                style={{ background: '#141A3A', color: '#FFFFFF', border: 'none', padding: '13px 28px', borderRadius: '999px', fontWeight: '500', fontSize: '15px', cursor: 'pointer' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onFocus={loadRecaptcha} style={{ display: 'flex', flexDirection: 'column', gap: '22px', padding: '8px 0' }}>
              <div>
                <h2 style={{ fontWeight: '500', fontSize: 'clamp(22px, 2.5vw, 30px)', letterSpacing: '-0.02em', margin: '0 0 6px', color: '#141A3A' }}>Send us a message</h2>
                <p style={{ fontSize: '14px', color: '#9BA3B8', margin: '0' }}>Fields marked <span style={{ color: '#E53E3E' }}>*</span> are required.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={label}>Full name <span style={{ color: '#E53E3E' }}>*</span></label>
                  <input style={field('name')} type="text" required placeholder="Ramesh Kumar"
                    value={form.name}
                    onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <label style={label}>Work email <span style={{ color: '#E53E3E' }}>*</span></label>
                  <input style={field('email')} type="email" required placeholder="ramesh@company.com"
                    value={form.email}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={label}>Company / Plant</label>
                  <input style={field('company')} type="text" placeholder="Acme Mfg. Pvt. Ltd."
                    value={form.company}
                    onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} />
                </div>
                <div>
                  <label style={label}>Phone</label>
                  <input style={field('phone')} type="tel" placeholder="+91 98765 43210"
                    value={form.phone}
                    onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
                </div>
              </div>

              <div>
                <label style={label}>Message <span style={{ color: '#E53E3E' }}>*</span></label>
                <textarea
                  style={{ ...field('message'), minHeight: '130px', resize: 'vertical' }}
                  required
                  placeholder="Tell us about your plant — number of workers, contract labour setup, key challenges…"
                  value={form.message}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>

              {status === 'error' && (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', padding: '12px 16px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '1px' }}>
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p style={{ color: '#DC2626', fontSize: '14px', margin: '0' }}>{errorMsg}</p>
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '4px' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{ background: '#141A3A', color: '#FFFFFF', border: 'none', padding: '14px 32px', borderRadius: '999px', fontWeight: '600', fontSize: '15px', cursor: status === 'sending' ? 'not-allowed' : 'pointer', opacity: status === 'sending' ? 0.65 : 1, display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'opacity 0.15s' }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" /><path d="M12 2a10 10 0 0110 10" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
                {RECAPTCHA_SITE_KEY && (
                  <p style={{ fontSize: '11px', color: '#C0C6D4', margin: '0' }}>
                    Protected by reCAPTCHA ·{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#C0C6D4' }}>Privacy</a>
                    {' · '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#C0C6D4' }}>Terms</a>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
