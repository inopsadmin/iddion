import { ImageResponse } from 'next/og';

/** Shared 1200×630 social preview image (LinkedIn, WhatsApp, X, Slack). */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

export function ogImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FFFFFF', padding: '64px 72px', position: 'relative', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, width: 360, height: 300, background: '#F28CD0', display: 'flex' }} />
        <div style={{ position: 'absolute', right: 0, bottom: 0, width: 330, height: 200, background: '#FFC93C', display: 'flex' }} />
        <div style={{ position: 'absolute', right: 60, top: 150, width: 300, height: 330, background: '#3352F0', borderRadius: 28, display: 'flex' }} />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://inops.tech/logo-iddion.jpg" alt="IDDION" width={220} height={78} style={{ objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div style={{ fontSize: 26, color: '#3352F0', fontWeight: 700, marginBottom: 18 }}>{eyebrow}</div>
          <div style={{ fontSize: 64, lineHeight: 1.08, color: '#141A3A', fontWeight: 600 }}>{title}</div>
          <div style={{ fontSize: 28, color: '#4B5368', marginTop: 22, lineHeight: 1.35 }}>{subtitle}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
