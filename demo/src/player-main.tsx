import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@remotion/player";
import { Personalized } from "./Personalized";

const COLORS = ["#0fbe7c", "#e11d48", "#059669", "#d97706", "#0891b2"];

const App: React.FC = () => {
  const [name, setName] = useState("Webmontag");
  const [color, setColor] = useState(COLORS[0]);
  const [tagline, setTagline] = useState("Dieses Video ist Code.");
  const input: React.CSSProperties = { padding: "10px 14px", fontSize: 18, borderRadius: 8, border: "1px solid #12402f", background: "#0f1f19", color: "white" };
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "white", padding: 20, display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
        <input style={input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input style={{ ...input, width: 240 }} value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="Tagline" />
        {COLORS.map((c) => (
          <button key={c} onClick={() => setColor(c)} aria-label={c} style={{ width: 36, height: 36, borderRadius: "50%", background: c, border: c === color ? "3px solid white" : "3px solid transparent", cursor: "pointer" }} />
        ))}
      </div>
      <Player
        component={Personalized}
        inputProps={{ name, color, tagline }}
        durationInFrames={120}
        fps={30}
        compositionWidth={1280}
        compositionHeight={720}
        style={{ width: "100%", maxWidth: 900, borderRadius: 12, overflow: "hidden" }}
        controls
        loop
        autoPlay
      />
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
