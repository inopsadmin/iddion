import Image from 'next/image';
import type { AppScreen, Cell, Status } from '@/lib/content';

export function Script({ children }: { children: React.ReactNode }) {
  return <span className="script">{children}</span>;
}

/** Headline with one handwritten word, e.g. "Manage your *contract* workforce" */
export function MixedTitle({ before, script, after }: { before: string; script: string; after?: string }) {
  return (
    <>
      {before} <Script>{script}</Script>
      {after ? ` ${after}` : null}
    </>
  );
}

export function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d={left ? 'M15 9H3M8 4L3 9l5 5' : 'M3 9h12M10 4l5 5-5 5'}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 34 34" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="4" fill="var(--primary)" />
      <rect x="19" y="1" width="14" height="14" rx="7" fill="var(--yellow)" />
      <rect x="1" y="19" width="14" height="14" rx="7" fill="var(--pink)" />
      <rect x="19" y="19" width="14" height="14" rx="4" fill="var(--violet)" />
    </svg>
  );
}

/** Shows a real photo when src is set, otherwise a labelled placeholder slot. */
export function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  if (src) {
    return (
      <div className={`photo ${className}`}>
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
      </div>
    );
  }
  return (
    <div className={`photo photo--empty ${className}`} role="img" aria-label={alt}>
      <svg aria-hidden="true" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-8 8" />
      </svg>
      <span>[Photo: {alt}]</span>
    </div>
  );
}

export function Pill({ text, status }: { text: string; status: Status }) {
  return <span className={`pill pill--${status}`}>{text}</span>;
}

function renderCell(c: Cell) {
  return typeof c === 'string' ? c : <Pill text={c.text} status={c.status} />;
}

const SIDE_NAV = ['Home', 'Contractors', 'Vendors', 'Attendance', 'Payroll', 'Compliance', 'Salary++', 'Reports'];

/** Illustrative product screen. Replace with real screenshots when available. */
export function AppWindow({ screen }: { screen: AppScreen }) {
  const cols = `1.6fr ${Array(screen.columns.length - 1).fill('1fr').join(' ')}`;
  return (
    <div className="app" aria-hidden="true">
      <div className="app__side">
        <div className="app__brand">IDDION</div>
        {SIDE_NAV.map((n) => (
          <div key={n} className={n === screen.activeNav ? 'app__nav app__nav--on' : 'app__nav'}>
            {n}
          </div>
        ))}
      </div>
      <div className="app__main">
        <div className="app__head">
          <div className="app__title">{screen.title}</div>
          <span className="app__add">+ Add</span>
        </div>
        <div className="app__kpis">
          {screen.kpis.map((k) => (
            <div key={k.label} className="app__kpi">
              <div className="app__kpi-label">{k.label}</div>
              <div className={k.tone === 'bad' && !k.note ? 'app__kpi-value app__kpi-value--bad' : 'app__kpi-value'}>{k.value}</div>
              {k.note ? <div className={k.tone === 'bad' ? 'app__kpi-note app__kpi-note--bad' : 'app__kpi-note'}>{k.note}</div> : null}
            </div>
          ))}
        </div>
        <div className="app__table">
          <div className="app__row app__row--head" style={{ gridTemplateColumns: cols }}>
            {screen.columns.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          {screen.rows.map((r, i) => (
            <div key={i} className="app__row" style={{ gridTemplateColumns: cols }}>
              {r.map((c, j) => (
                <span key={j}>{renderCell(c)}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Worker-facing phone card for the Salary++ slide. */
export function WorkerCard() {
  return (
    <div className="worker-card" aria-hidden="true">
      <div className="worker-card__muted">Earned so far this month</div>
      <div className="worker-card__amount">₹ [amount]</div>
      <div className="worker-card__pills">
        <Pill text="22 days worked" status="ok" />
        <Pill text="OT 14 h" status="info" />
      </div>
      <div className="worker-card__muted">Available to withdraw: ₹ [amount]</div>
      <span className="worker-card__btn">Withdraw</span>
      <div className="worker-card__foot">Payslip · Attendance · Leave</div>
    </div>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  folder: (
    <>
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <circle cx="15" cy="14" r="2.5" stroke="var(--pink)" />
      <path d="M17 16l2 2" stroke="var(--pink)" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h9l4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
      <path d="M8 9h6M8 12h6M8 15h3" />
      <path d="M15 15.5l1.5 1.5 3-3" stroke="var(--green)" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="11" r="6.5" />
      <path d="M9.5 11l2 2 3-3.5" stroke="var(--violet)" />
      <path d="M8.5 16.5L7 21l5-2 5 2-1.5-4.5" />
    </>
  ),
  car: (
    <>
      <path d="M5 16l1.5-5h11L19 16" />
      <rect x="3" y="16" width="18" height="3" rx="1" />
      <circle cx="7" cy="19.5" r="1.5" />
      <circle cx="17" cy="19.5" r="1.5" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" />
    </>
  ),
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />,
  crane: (
    <>
      <path d="M4 21V5h12M4 5l6-2M16 5v5M16 10l-2 3h4z" />
      <path d="M2 21h8" />
    </>
  ),
  health: (
    <>
      <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" />
      <path d="M9 11h6M12 8v6" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4A2 2 0 0019 18l-5-9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
};

export function Icon({ name }: { name: string }) {
  return (
    <svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
      {ICONS[name]}
    </svg>
  );
}
