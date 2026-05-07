"use client";

import { useState, useEffect } from "react";
import COPY, { Lang } from "./copy";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import MarqueeSection from "./components/Marquee";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("ja_lang") as Lang) || "en";
    }
    return "en";
  });

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ja_theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    localStorage.setItem("ja_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("ja_theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const t = COPY[lang];

  return (
    <>
      <NavBar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      <Hero t={t} />
      <Metrics t={t} />
      <MarqueeSection items={t.marquee} />
      <Experience t={t} />
      <About t={t} />
      <Projects t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}
