import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const STATS = [
  { value: 5_000_000, suffix: "+", label: "Installs pro Monat", fill: 0.95, color: "#0fbe7c" },
  { value: 67_000, suffix: "", label: "GitHub-Sterne", fill: 0.7, color: "#7cf0c0" },
  { value: 800, suffix: "+", label: "Kunden, u. a. SoundCloud, GitHub, Wistia", fill: 0.45, color: "#0fbe7c" },
];

export const Stats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ background: "#08130f", color: "white", fontFamily: "Inter, system-ui, sans-serif", justifyContent: "center", padding: "0 90px", gap: 46 }}>
      {STATS.map((s, i) => {
        const enter = spring({ frame: frame - i * 12, fps, config: { damping: 18 } });
        const p = spring({ frame: frame - 10 - i * 12, fps, config: { damping: 200 }, durationInFrames: 70 });
        const v = Math.round(interpolate(p, [0, 1], [0, s.value]));
        return (
          <div key={s.label} style={{ opacity: enter, transform: `translateX(${(1 - enter) * -120}px)` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
              <span style={{ fontSize: 88, fontWeight: 900, color: s.color, fontVariantNumeric: "tabular-nums", minWidth: 430, whiteSpace: "nowrap" }}>
                {v.toLocaleString("de-DE")}{s.suffix}
              </span>
              <span style={{ fontSize: 30, opacity: 0.85 }}>{s.label}</span>
            </div>
            <div style={{ height: 12, borderRadius: 6, background: "#1b1b3a", marginTop: 10, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${p * s.fill * 100}%`, background: s.color, borderRadius: 6 }} />
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
