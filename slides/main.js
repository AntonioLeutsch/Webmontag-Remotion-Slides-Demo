import Reveal from "reveal.js";
import Highlight from "reveal.js/plugin/highlight";
import Notes from "reveal.js/plugin/notes";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./style.css";

const deck = new Reveal({
  hash: true,
  transition: "slide",
  width: 1280,
  height: 720,
  plugins: [Highlight, Notes],
});
deck.initialize();

// Iframes erst laden, wenn die Folie sichtbar ist
deck.on("slidechanged", ({ currentSlide }) => {
  currentSlide.querySelectorAll("iframe[data-src]").forEach((f) => {
    if (!f.src) f.src = f.dataset.src;
  });
});
