"use client";

import { Reveal } from "./Reveal";
import { CopyData } from "../copy";

export default function Metrics({ t }: { t: CopyData }) {
  return (
    <section className="metrics">
      <div className="wrap">
        <Reveal className="metrics-head">
          <span className="mono">— {t.metricsLabel}</span>
        </Reveal>
        <Reveal className="metrics-grid" stagger>
          {t.metrics.map((m, i) => (
            <div className="metric" key={i}>
              <div className="metric-v">{m.v}</div>
              <div className="metric-k">{m.k}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
