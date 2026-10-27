# Remotion Speedtalk

Material für einen Speedtalk über [Remotion](https://www.remotion.dev): Videos per Code (React) erstellen statt in einem Schnittprogramm.

Das Repo enthält zwei unabhängige Projekte:

| Ordner | Inhalt | Stack |
| --- | --- | --- |
| [`demo/`](demo) | Remotion-Beispielvideos (personalisiertes Video, Statistik-Video) | Remotion 4, React 19, Vite |
| [`slides/`](slides) | Die Präsentation selbst | reveal.js, Vite |

Jedes Projekt hat eine eigene `package.json`, also in beiden Ordnern separat `npm install` ausführen.

## Demo

```bash
cd demo
npm install
```

| Befehl | Zweck |
| --- | --- |
| `npm run studio` | Remotion Studio: Timeline, Props live anpassen |
| `npm run player` | Vite-Dev-Server (Port 5174) mit dem `@remotion/player` im Browser |
| `npm run render` | Rendert `Personalized` nach `out/personalized.mp4` |
| `npm run render:stats` | Rendert `Stats` nach `out/stats.mp4` |
| `npm run render:batch` | Rendert pro Person ein eigenes Video (`out/Anna.mp4`, `out/Ben.mp4`, `out/Clara.mp4`) |

Die Compositions liegen in `demo/src/` (`Personalized.tsx`, `Stats.tsx`, registriert in `Root.tsx`). Die Personen für den Batch-Render stehen oben in `demo/batch.mjs`.

Gerenderte Videos landen in `demo/out/` und sind per `.gitignore` ausgeschlossen.

## Slides

```bash
cd slides
npm install
npm run dev     # Dev-Server auf Port 5180, öffnet den Browser
npm run build   # Produktions-Build nach dist/
```

Die Folien stehen in `slides/index.html`, Skript und Styles in `main.js` und `style.css`. Die eingebetteten Videos liegen in `slides/media/`. Sie sind Kopien der Demo-Renderings. Nach Änderungen an der Demo müssen sie neu dorthin kopiert werden.

## Lizenz

[MIT](LICENSE). Gilt für den Code in diesem Repo. Remotion selbst steht unter einer eigenen Lizenz, für Unternehmen kann eine kostenpflichtige Lizenz nötig sein, siehe [remotion.dev/license](https://www.remotion.dev/license).
