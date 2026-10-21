'use client';

import { useState } from 'react';
import { SlideGate, SlideVendors, SlideWorkers } from './slides';

const SLIDES = [SlideGate, SlideVendors, SlideWorkers];

const arrowBtn = { width: 48, height: 48, borderRadius: '50%', border: '1px solid #D5D9E4', background: '#FFFFFF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#141A3A' } as const;

export default function Carousel() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const Slide = SLIDES[i];

  return (
    <div aria-roledescription="carousel">
      <Slide />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {SLIDES.map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Show slide ${k + 1}`}
              aria-current={k === i ? 'true' : undefined}
              onClick={() => setI(k)}
              style={{ width: 28, height: 28, border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: k === i ? '#141A3A' : '#C9CEDA', display: 'block' }} />
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="button" aria-label="Previous slide" onClick={() => setI((i + n - 1) % n)} style={arrowBtn}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 9H3M8 4L3 9l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" aria-label="Next slide" onClick={() => setI((i + 1) % n)} style={arrowBtn}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
