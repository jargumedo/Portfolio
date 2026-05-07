"use client";

import { CopyData } from "../copy";

export default function Footer({ t }: { t: CopyData }) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="mono">© {t.year} · {t.builtWith}</span>
        <div className="footer-socials">
          <a href="https://github.com/jargumedo" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/in/julianoargumedo" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://twitter.com/juliargumedo" target="_blank" rel="noreferrer">
            Twitter ↗
          </a>
        </div>
        <span className="mono">{t.based}</span>
      </div>
    </footer>
  );
}
