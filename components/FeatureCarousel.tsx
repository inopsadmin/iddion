'use client';

import { useState } from 'react';
import { features } from '@/lib/content';
import { AppWindow, Arrow, WorkerCard } from './ui';

export default function FeatureCarousel() {
  const [index, setIndex] = useState(0);
  const n = features.slides.length;
  const slide = features.slides[index];

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label="IDDION features">
      <div
        key={index}
        className={`slide slide--${slide.color}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${n}: ${slide.title}`}
      >
        <div className="slide__text">
          <h3 className="slide__title">{slide.title}</h3>
          <p className="slide__body">{slide.body}</p>
        </div>
        <div className="slide__visual">{slide.screen ? <AppWindow screen={slide.screen} /> : <WorkerCard />}</div>
      </div>

      <div className="carousel__controls">
        <div className="carousel__dots">
          {features.slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              className="carousel__dot"
              aria-label={`Show slide ${i + 1}: ${s.title}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
            >
              <span className={i === index ? 'carousel__dot-mark carousel__dot-mark--on' : 'carousel__dot-mark'} />
            </button>
          ))}
        </div>
        <div className="carousel__arrows">
          <button type="button" className="round-btn" aria-label="Previous slide" onClick={() => setIndex((index + n - 1) % n)}>
            <Arrow left />
          </button>
          <button type="button" className="round-btn" aria-label="Next slide" onClick={() => setIndex((index + 1) % n)}>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}
