#!/bin/bash
set -e
cd "$(dirname "$0")"
echo "Capturing actual homepage screenshots for your portfolio..."
echo "This may take a few minutes."
if ! command -v npx >/dev/null 2>&1; then
  echo "Node.js/npm is required. Install Node.js first."; read -r -p "Press Return to exit"; exit 1
fi
# Browser download only if not already available.
npx --yes playwright install chromium || { echo "Chromium setup failed"; read -r -p "Press Return to exit"; exit 1; }
while IFS='|' read -r slug url; do
  echo "Capturing $slug ..."
  if npx --yes playwright screenshot --browser chromium --viewport-size "1440,900" --wait-for-timeout 4500 --timeout 45000 "$url" "assets/$slug.png"; then
    echo "Saved assets/$slug.png"
  else
    echo "Could not capture $slug. You can save a screenshot manually as assets/$slug.png"
  fi
done <<'SITES'
noisebox|https://noisebox-store.vercel.app
lc|https://lc-homepage-concept.vercel.app
wizardry|https://wizardry-tutoring-demo.vercel.app
foodtruck|https://food-truck-catering-demo.vercel.app
kane|https://kane-construction-demo-three.vercel.app
rental|https://rentalproperty-nine.vercel.app
halloween|https://halloween-client-demo.vercel.app
SITES
echo "Done. Open index.html to preview your portfolio."
read -r -p "Press Return to close"
