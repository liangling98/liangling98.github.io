// Preserve bookmarks to papers and publication sections previously on Research.
function redirectResearchPaper() {
  const hash = window.location.hash;
  if (/^#(?:paper-\d{9}|preprints|publications)$/.test(hash)) {
    window.location.replace(new URL("../publication/index.html" + hash, document.baseURI));
  }
}

redirectResearchPaper();
window.addEventListener("hashchange", redirectResearchPaper);
