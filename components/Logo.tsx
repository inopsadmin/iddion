export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 34 34" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="4" style={{ fill: 'var(--primary)' }} />
      <rect x="19" y="1" width="14" height="14" rx="7" style={{ fill: 'var(--yellow)' }} />
      <rect x="1" y="19" width="14" height="14" rx="7" style={{ fill: 'var(--pink)' }} />
      <rect x="19" y="19" width="14" height="14" rx="4" style={{ fill: 'var(--violet)' }} />
    </svg>
  );
}
