# Ling Liang's academic homepage

A static, English-language academic website. GitHub Pages can serve these files directly; no framework or dependency installation is required.

## Pages

- `index.html`: biography, contact information, experience, and education.
- `research/index.html`: research interests, preprints, and publications.
- `teaching/index.html`: teaching history.
- `talks/index.html`: invited talks.
- `openings/index.html`: research opportunities and contact information.

Shared styles are in `assets/css/site.css`. Each page has a complete navigation bar and works without JavaScript. The small script in `assets/js/legacy-links.js` forwards links to the old homepage sections to their new pages.

## Local preview

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory and open `http://127.0.0.1:8765/`.

## Private Sites preview

Run `python3 build.py` to copy the public site files into `dist/`. The Sites project configuration is in `.openai/hosting.json`. The GitHub Pages source remains in the root directory.

When updating the navigation or footer, apply the same change to all five HTML files. Keep publication links and section IDs intact so existing bookmarks continue to work.
