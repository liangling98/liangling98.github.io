// Keep links to sections of the previous single-page homepage working.
const legacySections = {
  "#research": "research/#research",
  "#preprints": "research/#preprints",
  "#publications": "research/#publications",
  "#teaching": "teaching/#teaching",
  "#invited-talks": "talks/#invited-talks",
  "#openings": "openings/#openings",
};

function redirectLegacySection() {
  const destination = legacySections[window.location.hash];
  if (destination) window.location.replace(new URL(destination, document.baseURI));
}

redirectLegacySection();
window.addEventListener("hashchange", redirectLegacySection);
