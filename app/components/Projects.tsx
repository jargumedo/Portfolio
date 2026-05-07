"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { CopyData } from "../copy";

const PROJECT_IMAGES: Record<string, string> = {
  "Fydels": "/fydels-screenshot.png",
  "Salva Mi Huella": "/Salva Mi Huella.png",
  "Estoy Acá": "/Estoy Aca.png",
};

export default function Projects({ t }: { t: CopyData }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="label">{t.workLabel}</span>
          <h2>
            <span>Things I&apos;ve shipped — </span>
            <em>each with real users in mind.</em>
          </h2>
        </Reveal>

        <div className="projects-list">
          {t.projects.map((p, i) => (
            <Reveal as="article" className="project" key={p.name}>
              <div className="project-num">
                {String(i + 1).padStart(2, "0")} / {String(t.projects.length).padStart(2, "0")}
              </div>
              <div className="project-info">
                <h3>
                  {p.name} <span className="arrow">↗</span>
                </h3>
                <p>{p.blurb}</p>
                <div className="project-tags">
                  {p.tags.map((tg) => (
                    <span className="project-tag" key={tg}>
                      {tg}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.live ? (
                    <a className="project-link" href={p.live} target="_blank" rel="noreferrer">
                      {t.visit} <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-link disabled">{t.soon}</span>
                  )}
                  {p.repo && (
                    <a className="project-link" href={p.repo} target="_blank" rel="noreferrer">
                      {t.code} <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-thumb">
                <span className={`badge ${p.status}`}>
                  {p.status === "live" ? "Live" : p.status === "private" ? "Private" : t.soon}
                </span>
                {PROJECT_IMAGES[p.name] ? (
                  <Image
                    src={PROJECT_IMAGES[p.name]}
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <div className="placeholder">{p.name} · screenshot</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
