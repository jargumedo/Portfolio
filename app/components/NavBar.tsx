"use client";

import { useEffect, useState } from "react";
import { CopyData } from "../copy";

interface NavBarProps {
  lang: string;
  setLang: (l: "en" | "es") => void;
  theme: string;
  setTheme: (t: string) => void;
  t: CopyData;
}

export default function NavBar({ lang, setLang, theme, setTheme, t }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-brand-mark">
            <span>J</span>
          </span>
          <span>Juliano Argumedo</span>
        </a>

        <div className="nav-links">
          <a href="#experience">{t.nav.experience}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>

        <div className="nav-utils">
          <div className="nav-pill lang-toggle" role="group" aria-label="Language">
            <button
              className={lang === "en" ? "on" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              className={lang === "es" ? "on" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <button
            className="nav-pill"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☼" : "☾"}
            <span style={{ marginLeft: 2 }}>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
