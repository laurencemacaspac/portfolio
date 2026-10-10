# Laurence Macaspac — Portfolio

## What changed
- Hero illustration replaced with a photographic laptop workspace image (loaded from Unsplash).
- Seven project cards now use local screenshot files in `assets/` rather than the unreliable screenshot service.
- Clickable previews open the corresponding Vercel sites.

## Capture actual screenshots on your Mac
1. Unzip this folder.
2. Double-click `capture-screenshots.command` (if macOS blocks it, right-click > Open).
3. The script uses Playwright via npx to capture the seven live websites at desktop size and save `assets/noisebox.png`, `assets/lc.png`, etc. It may download Chromium on first run.
4. Open `index.html` in Safari. Verify the cards show the actual screenshots.
5. Upload `index.html`, `styles.css`, `script.js`, and the entire `assets/` folder to your existing GitHub `portfolio` repository. You do not need to upload the capture script.
6. Vercel will redeploy when your connected repository changes.

If a capture fails, visit that website in Safari, take a screenshot, and save it with the matching filename (see script.js). Before screenshots are generated, labeled fallback previews appear; these are not actual screenshots.

The hero photo is an external Unsplash image. To make it fully self-contained, download a licensed photo and update its src in index.html.
