"use client";

import { Reveal } from "./Reveal";
import { CopyData } from "../copy";

export default function Experience({ t }: { t: CopyData }) {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">{t.experienceLabel}</span>
          <h2>
            {t.experienceTitle
              .split(" ")
              .map((w, i, arr) =>
                i >= arr.length - 1 ? (
                  <em key={i}>{w}</em>
                ) : (
                  <span key={i}>{w} </span>
                )
              )}
          </h2>
        </Reveal>

        <div className="exp-list">
          {t.experiences.map((e, i) => (
            <Reveal as="article" className="exp-item" key={i}>
              <div className="exp-meta">
                <span className="mono">
                  {String(i + 1).padStart(2, "0")} / {String(t.experiences.length).padStart(2, "0")}
                </span>
                <span className="mono">{e.period}</span>
                <span className="mono">{e.location}</span>
              </div>
              <div className="exp-body">
                <h3 className="exp-title">
                  <span className="exp-role">{e.role}</span>
                  <span className="exp-at">at</span>
                  <span className="exp-company">{e.company}</span>
                </h3>
                <ul className="exp-bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="edu-row">
          <span className="mono label-row">{t.educationLabel}</span>
          <span className="edu-school">{t.education.school}</span>
          <span className="edu-program">{t.education.program}</span>
          <span className="mono edu-loc">{t.education.location}</span>
        </Reveal>
      </div>
    </section>
  );
}
