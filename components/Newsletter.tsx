'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');
    setState('sending');
    try {
      // TODO: connect to your CRM / email tool, e.g. POST to /api/subscribe
      await new Promise((r) => setTimeout(r, 400));
      console.info('Newsletter signup:', email);
      setState('done');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') {
    return <p className="newsletter__done" role="status">Subscribed. The next brief will reach your inbox.</p>;
  }

  return (
    <form className="newsletter" onSubmit={onSubmit}>
      <label htmlFor="nl-email" className="sr-only">
        Work email
      </label>
      <input id="nl-email" name="email" type="email" required placeholder="Work email" autoComplete="email" className="newsletter__input" />
      <button type="submit" className="newsletter__btn" disabled={state === 'sending'}>
        {state === 'sending' ? 'Subscribing…' : 'Subscribe'}
      </button>
      {state === 'error' ? (
        <p className="newsletter__error" role="alert">
          Couldn’t subscribe. Check the email address and try again.
        </p>
      ) : null}
    </form>
  );
}
