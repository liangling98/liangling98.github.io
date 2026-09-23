# Ling Liang's academic homepage

A static, English-language academic website. GitHub Pages can serve these files directly; no framework or dependency installation is required.

## Pages

- `index.html`: biography, contact information, experience, and education.
- `research/index.html`: research expertise, interests, and the importance of each direction.
- `publication/index.html`: all preprints and published/accepted papers, with expandable research highlights.
- `teaching/index.html`: teaching history.
- `talks/index.html`: invited talks.
- `openings/index.html`: research opportunities and contact information.

Shared styles are in `assets/css/site.css`. Each page has a complete navigation bar and works without JavaScript. The small scripts in `assets/js/legacy-links.js` and `assets/js/research-links.js` forward old homepage sections and research-page paper bookmarks to their current pages.

Internal page links explicitly include `index.html`, so navigation also works when opening the files directly in a browser without a web server.

## Local preview

Open `index.html` directly in a browser, or run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory and open `http://127.0.0.1:8765/`.

## Private Sites preview

Run `python3 build.py` to copy the public site files into `dist/`. The Sites project configuration is in `.openai/hosting.json`. The GitHub Pages source remains in the root directory.

When updating the navigation or footer, apply the same change to all six HTML files. Keep publication links and section IDs intact so existing bookmarks continue to work.
