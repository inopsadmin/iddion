'use client';

import { useState } from 'react';

/** Newsletter form. Wire `onSubmit` to your email tool (Zoho, Mailchimp, a /api route, etc.). */
export default function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) return <div style={{ color: '#FFFFFF' }}>Thanks, you are subscribed.</div>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send new FormData(e.currentTarget).get('email') to your newsletter provider
        setDone(true);
      }}
      style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}
    >
      <label htmlFor="nl-email" className="sr-only">Work email</label>
      <input
        id="nl-email"
        name="email"
        type="email"
        required
        placeholder="Work email"
        style={{ flex: '1 1 220px', fontFamily: 'inherit', fontSize: 15, padding: '13px 18px', border: '1px solid #3A4166', background: '#1C2349', color: '#FFFFFF', borderRadius: 999, minHeight: 48 }}
      />
      <button type="submit" style={{ fontFamily: 'inherit', fontSize: 15, fontWeight: 600, background: '#FFFFFF', color: '#141A3A', border: 'none', borderRadius: 999, padding: '13px 24px', minHeight: 48, cursor: 'pointer' }}>
        Subscribe
      </button>
    </form>
  );
}
