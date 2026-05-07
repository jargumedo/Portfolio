"use client";

export default function MarqueeSection({ items }: { items: string[] }) {
  const row = (
    <span>
      {items.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
          {i % 2 === 0 ? <em>{it}</em> : <span>{it}</span>}
          <span className="dot" />
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  );
}
