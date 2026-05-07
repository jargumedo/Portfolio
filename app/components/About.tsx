"use client";

import { Reveal } from "./Reveal";
import { CopyData } from "../copy";

export default function About({ t }: { t: CopyData }) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">{t.aboutLabel}</span>
          <h2>
            {t.aboutTitle.split(" ").map((w, i, arr) =>
              i === arr.length - 2 || i === arr.length - 1 ? (
                <em key={i}>{w}{i < arr.length - 1 ? " " : ""}</em>
              ) : (
                <span key={i}>{w} </span>
              )
            )}
          </h2>
        </Reveal>

        <div className="about-grid">
          <div className="about-col">
            <h3>{t.stackLabel}</h3>
            <div className="stack-block">
              {Object.entries(t.cats).map(([cat, items]) => (
                <Reveal className="stack-cat" key={cat}>
                  <div className="name">
                    <b>{cat}</b>
                    <span>{String(items.length).padStart(2, "0")}</span>
                  </div>
                  <div className="stack-tags">
                    {items.map((s) => (
                      <span className="stack-tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about-col">
            <h3>Bio</h3>
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
          </div>

          <div className="about-col">
            <h3>Languages</h3>
            <div>
              {t.languages.map((l) => (
                <div className="lang-row" key={l.name}>
                  <span className="l">{l.name}</span>
                  <span className="r">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
