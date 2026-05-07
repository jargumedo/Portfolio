"use client";

import Image from "next/image";
import { Reveal, useReveal } from "./Reveal";
import { CopyData } from "../copy";

export default function Hero({ t }: { t: CopyData }) {
  const titleRef = useReveal();

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <Reveal className="hero-meta">
          <span className="mono hero-status">{t.status}</span>
          <span className="mono">{t.role}</span>
        </Reveal>

        <div className="hero-grid">
          <h1 className="hero-title word-reveal" ref={titleRef as React.RefObject<HTMLHeadingElement>}>
            <span className="line">
              <span className="word">{t.heroLine1}</span>
            </span>
            <span className="line">
              <span className="word">
                <em>{t.heroLine2Em}</em>
              </span>{" "}
              <span className="word">{t.heroLine2}</span>{" "}
              <span className="word">
                {t.heroLine2b}
                <span className="accent-dot" />
              </span>
            </span>
          </h1>

          <Reveal className="hero-portrait" data-label="JA / 2026">
            <Image
              src="/hero-photo.png"
              alt="Juliano Argumedo"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </Reveal>
        </div>

        <Reveal className="hero-sub">
          <p className="hero-tagline">{t.tagline}</p>
          <div className="hero-ctas">
            <a className="hero-cta" href="#contact">
              {t.cta} <span className="arrow">→</span>
            </a>
            <a
              className="hero-cta secondary"
              href="/CV Juliano Argumedo EN.pdf"
              target="_blank"
              rel="noreferrer"
            >
              {t.secondaryCta} <span className="arrow">↓</span>
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
