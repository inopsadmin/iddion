'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/site';

const linkStyle = { color: '#141A3A', textDecoration: 'none' } as const;

export default function Nav() {
  const path = usePathname();
  const onProduct = PRODUCTS.some((p) => p.href === path);

  return (
    <header style={{ background: '#FFFFFF', position: 'relative', zIndex: 40 }}>
      <nav aria-label="Main" style={{ maxWidth: 1240, margin: '0 auto', padding: '18px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px 40px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/logo-iddion.jpg" alt="IDDION" width={160} height={56} style={{ objectFit: 'contain', objectPosition: 'left center' }} priority />
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, flex: '1 1 420px', fontSize: 17 }}>
          <div className="nav-dd">
            <Link
              href="/#platform"
              aria-haspopup="true"
              style={onProduct ? { color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 } : linkStyle}
            >
              Platform ▾
            </Link>
            <div className="nav-dd-menu">
              <div className="nav-dd-panel">
                {PRODUCTS.map((p) => (
                  <Link key={p.href} href={p.href} aria-current={path === p.href ? 'page' : undefined}>
                    <b style={{ fontWeight: 600 }}>{p.label}</b>
                    <small>{p.blurb}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#roles" style={linkStyle}>Solutions</Link>
          <Link href="/#customers" style={linkStyle}>Customers</Link>
          <Link href="/#resources" style={linkStyle}>Resources</Link>
          <Link href="/#trust" style={linkStyle}>Trust</Link>
        </div>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href="#login" style={{ background: '#FFFFFF', color: '#141A3A', border: '1px solid #141A3A', textDecoration: 'none', padding: '13px 26px', borderRadius: 999, fontWeight: 500, display: 'inline-flex', alignItems: 'center', minHeight: 48 }}>Login</a>
          <a href="/contact" style={{ background: '#141A3A', color: '#FFFFFF', textDecoration: 'none', padding: '14px 26px', borderRadius: 999, fontWeight: 500, display: 'inline-flex', alignItems: 'center', minHeight: 48 }}>Get in touch</a>
        </div>
      </nav>
    </header>
  );
}
