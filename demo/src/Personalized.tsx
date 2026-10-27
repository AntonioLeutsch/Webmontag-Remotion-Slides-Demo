import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";

export const personalizedSchema = z.object({
  name: z.string(),
  color: z.string(),
  tagline: z.string(),
});
export type PersonalizedProps = z.infer<typeof personalizedSchema>;

export const Personalized: React.FC<PersonalizedProps> = ({ name, color, tagline }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 12 } });
  const letters = name.split("");
  const sub = interpolate(frame, [30, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const out = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });
  const rot = interpolate(frame, [0, durationInFrames], [0, 90]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), linear-gradient(${135 + rot}deg, #08130f, ${color})`,
        fontFamily: "Inter, system-ui, sans-serif",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        opacity: out,
      }}
    >
      <div style={{ fontSize: 48, transform: `scale(${pop})` }}>Hallo</div>
      <div style={{ display: "flex", fontSize: 150, fontWeight: 900 }}>
        {letters.map((l, i) => {
          const s = spring({ frame: frame - 8 - i * 3, fps, config: { damping: 10, stiffness: 120 } });
          return (
            <span key={i} style={{ display: "inline-block", transform: `translateY(${(1 - s) * 120}px) rotate(${(1 - s) * 25}deg)`, opacity: s, whiteSpace: "pre" }}>
              {l}
            </span>
          );
        })}
      </div>
      <div style={{ fontSize: 44, marginTop: 20, opacity: sub, transform: `translateY(${(1 - sub) * 20}px)` }}>{tagline}</div>
    </AbsoluteFill>
  );
};
