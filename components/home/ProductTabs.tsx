'use client';

import { useState } from 'react';
import { ClmsPanel, HrisPanel, EwaPanel } from './panels';

const TABS = [
  { id: 'clms', label: 'Contract Labour', Panel: ClmsPanel },
  { id: 'hris', label: 'HRIS & Payroll', Panel: HrisPanel },
  { id: 'ewa', label: 'Salary++', Panel: EwaPanel },
] as const;

export default function ProductTabs() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('clms');
  const Active = TABS.find((t) => t.id === tab)!.Panel;

  return (
    <>
      <div role="tablist" aria-label="IDDION products" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 56 }}>
        {TABS.map((t) => {
          const on = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={on}
              aria-controls="product-panel"
              onClick={() => setTab(t.id)}
              style={{ fontFamily: 'inherit', fontSize: 16, background: on ? '#141A3A' : '#EEF2FB', color: on ? '#FFFFFF' : '#141A3A', border: 'none', borderRadius: 999, cursor: 'pointer', padding: '12px 22px', minHeight: 48 }}
            >
              {t.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id="product-panel" aria-labelledby={`tab-${tab}`}>
        <Active />
      </div>
    </>
  );
}
