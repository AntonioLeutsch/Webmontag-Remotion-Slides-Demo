import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "node:path";

const people = [
  { name: "Anna", color: "#0fbe7c" },
  { name: "Ben", color: "#e11d48" },
  { name: "Clara", color: "#059669" },
];

const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
for (const p of people) {
  const inputProps = { ...p, tagline: "Dieses Video ist Code." };
  const composition = await selectComposition({ serveUrl, id: "Personalized", inputProps });
  await renderMedia({ composition, serveUrl, codec: "h264", outputLocation: `out/${p.name}.mp4`, inputProps });
  console.log("fertig:", p.name);
}
