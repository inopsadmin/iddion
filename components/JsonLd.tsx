/** Renders one or more JSON-LD blocks. `null` entries are skipped. */
export default function JsonLd({ data }: { data: (object | null)[] }) {
  return (
    <>
      {data.filter(Boolean).map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify output is safe here; '<' is escaped to avoid closing the script tag early
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
