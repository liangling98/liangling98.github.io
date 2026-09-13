// Keep links to sections of the previous single-page homepage working.
const legacySections = {
  "#research": "research/index.html#research",
  "#preprints": "research/index.html#preprints",
  "#publications": "research/index.html#publications",
  "#teaching": "teaching/index.html#teaching",
  "#invited-talks": "talks/index.html#invited-talks",
  "#openings": "openings/index.html#openings",
};

function redirectLegacySection() {
  const destination = legacySections[window.location.hash];
  if (destination) window.location.replace(new URL(destination, document.baseURI));
}

redirectLegacySection();
window.addEventListener("hashchange", redirectLegacySection);
