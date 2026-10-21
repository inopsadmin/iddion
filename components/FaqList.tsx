import type { Faq } from '@/lib/faqs';

/**
 * FAQ accordion. Answers stay in the HTML when collapsed, so search engines read them.
 * The same `items` feed the FAQPage JSON-LD on each page, so the two never drift apart.
 */
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <>
      {items.map((f, i) => (
        <details key={f.q} open={i === 0} style={{ borderBottom: '1px solid #E3E6EE', padding: '22px 0' }}>
          <summary style={{ fontWeight: 500, fontSize: 18, display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <h3 style={{ font: 'inherit', margin: 0 }}>{f.q}</h3>
            <span aria-hidden="true" style={{ color: 'var(--primary)', fontSize: 22, lineHeight: 1 }}>+</span>
          </summary>
          <p style={{ color: '#4B5368', margin: '12px 0 0' }}>{f.a}</p>
        </details>
      ))}
    </>
  );
}
