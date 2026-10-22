import Link from 'next/link';
import Image from 'next/image';
import Newsletter from './Newsletter';

const col = { flex: '1 1 140px', display: 'flex', flexDirection: 'column', gap: 10 } as const;
const head = { color: '#FFFFFF', fontWeight: 600 } as const;
const link = { color: '#C7CBDA', textDecoration: 'none' } as const;

export default function Footer() {
  return (
    <footer style={{ background: '#141A3A', color: '#C7CBDA', padding: '72px 0 40px', fontSize: 15 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, paddingBottom: 48 }}>
          <div style={{ flex: '2 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'inline-flex', background: '#FFFFFF', borderRadius: '12px', padding: '6px 14px' }}>
              <Image src="/logo-iddion.jpg" alt="IDDION" width={140} height={48} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
            </div>
            <div style={{ fontWeight: 600, color: '#FFFFFF', marginTop: 10 }}>Subscribe to The Shop Floor Brief</div>
            <div>Monthly insights on labour law, contract workforce trends and plant HR technology.</div>
            <Newsletter />
          </div>
          <div style={col}>
            <div style={head}>Platform</div>
            <Link href="/clms" style={link}>Contract Labour</Link>
            <Link href="/hris" style={link}>HRIS &amp; Payroll</Link>
            <Link href="/ewa" style={link}>Salary++</Link>
            <a href="#ess" style={link}>Worker app</a>
          </div>
          <div style={col}>
            <div style={head}>Resources</div>
            <a href="#case-studies" style={link}>Case studies</a>
            <a href="#blog" style={link}>Compliance guides</a>
            <Link href="/clms#roi" style={link}>Risk check</Link>
            <Link href="/#trust" style={link}>Trust Center</Link>
          </div>
          <div style={col}>
            <div style={head}>Company</div>
            <a href="#about" style={link}>About</a>
            <a href="#partners" style={link}>Partners</a>
            <a href="#careers" style={link}>Careers</a>
            <a href="/contact" style={link}>Contact</a>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, paddingTop: 28, borderTop: '1px solid #2C3460', fontSize: 14 }}>
          <div>© {new Date().getFullYear()} IDDION, a product of Inddion IT Solutions Pvt. Ltd., Bengaluru.</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#privacy" style={{ color: '#C7CBDA' }}>Privacy</a>
            <a href="#terms" style={{ color: '#C7CBDA' }}>Terms</a>
            <a href="#linkedin" style={{ color: '#C7CBDA' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
