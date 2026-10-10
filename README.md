# Laurence Macaspac — Minimal Portfolio

This is a complete responsive static website. No npm install or build command is needed.

## Preview
Open `index.html` in Safari, or run `python3 -m http.server 8000` inside this folder and visit http://localhost:8000.

## Homepage screenshots
Each project card is configured to request a **real screenshot of the public website** using WordPress mShots (`s.wordpress.com/mshots/v1`). The screenshot service is third-party and may load slowly or fail on some sites. If unavailable, the site displays a labeled fallback, **not a fake screenshot**. This environment couldn't independently verify the screenshots.

For the most reliable result, take your own screenshots of each live homepage, crop them to 1200 × 690 (or similar), save them as `assets/noisebox.jpg`, `assets/lc.jpg`, `assets/wizardry.jpg`, `assets/foodtruck.jpg`, `assets/kane.jpg`, `assets/rental.jpg`, `assets/halloween.jpg`, and change the `img.src` line in `script.js` to `img.src = 'assets/' + project.slug + '.jpg';`.

## Update content
- Edit the `projects` array in `script.js` to update the seven links and descriptions.
- Replace the placeholder Upwork contact link in `index.html` with your own profile or a `mailto:` link.
- Hero laptop-and-coffee illustration is `assets/desk-illustration.svg` and can be replaced with a photo if preferred.

## GitHub / Vercel
Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder to your existing `laurencemacaspac/portfolio` GitHub repository. In Vercel import the **existing repository** (don't create another repository with the same name). Framework preset: **Other**. Root: `./`. No build command. Do not overwrite any existing files before reviewing them.
