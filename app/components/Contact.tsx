"use client";

import { Reveal } from "./Reveal";
import { CopyData } from "../copy";

export default function Contact({ t }: { t: CopyData }) {
  return (
    <section className="section" id="contact" style={{ borderBottom: "none" }}>
      <div className="wrap contact-wrap">
        <Reveal className="section-head" style={{ marginBottom: 24 }}>
          <span className="label">{t.contactLabel}</span>
          <span />
        </Reveal>
        <h2 className="contact-headline">
          {t.contactPre} <em>{t.contactEm}</em>
          <br />
          <a href="mailto:juliargumedoblanco@gmail.com">
            {t.contactPost} <span className="arr">↗</span>
          </a>
        </h2>

        <div className="contact-grid">
          {t.contactCards.map((c) => (
            <Reveal className="contact-card" key={c.h}>
              <h4>{c.h}</h4>
              <a href={c.href} target="_blank" rel="noreferrer">
                {c.v} <span>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
