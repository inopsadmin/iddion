'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { platform } from '@/lib/content';
import { AppWindow, Arrow } from './ui';

export default function PlatformTabs() {
  const [active, setActive] = useState(platform.tabs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = platform.tabs.find((t) => t.id === active) ?? platform.tabs[0];

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = (index + dir + platform.tabs.length) % platform.tabs.length;
    setActive(platform.tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <div role="tablist" aria-label="IDDION products" className="tabs">
        {platform.tabs.map((t, i) => {
          const on = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tab-${t.id}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`panel-${t.id}`}
              tabIndex={on ? 0 : -1}
              className={on ? 'tabs__tab tabs__tab--on' : 'tabs__tab'}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div id={`panel-${tab.id}`} role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="panel">
        <div className="panel__text">
          <span className="panel__tag">{tab.label}</span>
          <h3 className="panel__title">{tab.title}</h3>
          <p className="panel__body">{tab.body}</p>
          <Link href={tab.href} className="link-arrow">
            Learn more <Arrow />
          </Link>
        </div>
        <div className="panel__visual">
          <div className="block block--pink-top" aria-hidden="true" />
          <div className="block block--yellow-bottom" aria-hidden="true" />
          <AppWindow screen={tab.screen} />
        </div>
      </div>
    </>
  );
}
