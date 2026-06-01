Title: How I Refactored My React Portfolio + Deployed with GitHub Pages

Goal: Produce a 8-12 minute tutorial that shows how to find and update a LinkedIn link, remove redundancy by centralizing profile/social data, refactor components to use the shared data, and wire up GitHub Actions to deploy to GitHub Pages.

Opening (0:00 - 0:20)
- On-screen: channel logo + small animated intro.
- Narration: "Welcome back — today I'm going to refactor my React + Vite portfolio, centralize social/profile data, update my LinkedIn link, and set up automatic deploys to GitHub Pages. By the end you'll be able to run this locally and deploy with one push."
- On-screen text: "Refactor, Build, Deploy — 10 minutes"

Setup & Prereqs (0:20 - 0:50)
- On-screen: bullet list
  - Node.js (v18+ / v20 recommended)
  - GitHub repo
  - VS Code or editor
- Narration: Briefly mention where the repo is located (show Finder or terminal cd).

Step 1 — Run the project & reproduce the issue (0:50 - 2:00)
- On-screen: Terminal full-screen
- Command to show and run:
```
cd /Users/aryansharma/Desktop/My_Personal_Website-main
npm ci
npm run dev
```
- Narration: "Start the dev server, open http://localhost:8080, and verify the Hero and Contact sections. We'll find where LinkedIn link is defined."
- On-screen: show the live page, hover over LinkedIn card and click (show it opens the old URL briefly).

Step 2 — Find where the LinkedIn link is (2:00 - 3:00)
- On-screen: show VS Code explorer and also run a repo search:
```
grep -n "linkedin" -R src || rg linkedin
```
- Narration: "Search shows two places: Hero.tsx and Contact.tsx. We'll open both files."
- On-screen: open `src/components/Hero.tsx` and `src/components/Contact.tsx`, highlight href.

Step 3 — Decide the refactor plan (3:00 - 3:30)
- On-screen: typed checklist
  - Centralize socials into `src/data/socials.ts`
  - Add `src/data/profile.ts` for name/email/links
  - Update `Hero` and `Contact` to import and render data
  - Add GitHub Actions workflow to deploy to GitHub Pages
- Narration: ``"This makes future edits a single place change — no more duplicates."``

Step 4 — Create shared data files (3:30 - 4:30)
- On-screen: show code creation in `src/data/socials.ts` and `src/data/profile.ts`.
- Narration: Read short snippet explaining fields: label, href, icon, color, subtitle.
- On-screen code example (brief):
```ts
export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryan-sharma-6a7b85317/', ... }
];
```

Step 5 — Refactor `Hero.tsx` and `Contact.tsx` to use shared data (4:30 - 6:00)
- On-screen: split editor view showing before/after (or edits being made live).
- Narration: "Replace duplicated anchors with map(socials).slice(0,4) for Hero, and render full list in Contact."
- On-screen commands/edits shown, save files and show hot reload effect in the browser.

Step 6 — Centralize profile strings (6:00 - 6:40)
- On-screen: show `src/data/profile.ts` with name/email/phone/github/linkedin.
- Narration: "Now components import `profile.name` and `profile.email` to avoid hard-coded strings."
- Show the Hero name change reflected live.

Step 7 — Build and verify production output (6:40 - 7:20)
- On-screen: Terminal
```
npm run build
npm run preview
```
- Narration: "Vite produces a `dist` folder. Preview it to make sure the production output still contains the correct LinkedIn link."
- On-screen: grep the built files:
```
grep -R "linkedin" dist -n
```

Step 8 — Add GitHub Actions deploy (7:20 - 8:20)
- On-screen: open `.github/workflows/deploy.yml` (explain steps: build & gh-pages publish via peaceiris/ action).
- Narration: "This workflow builds `dist` and publishes it to GitHub Pages automatically on each push to `main`."
- On-screen: show `README` additions with quick deploy steps and tips.

Final: Commit, push and show GitHub Actions (8:20 - 9:00)
- On-screen: Terminal
```
git add .
git commit -m "Centralize socials/profile, update LinkedIn, add GH Pages workflow"
git push origin main
```
- Narration: "Push and watch GitHub Actions in the Actions tab. After the workflow runs, your site will be published to GitHub Pages."

Outro & CTA (9:00 - 9:30)
- On-screen: links to repo, commands, and timestamped chapters in the video description.
- Narration: "If you found this useful, like and subscribe. Tell me what deploy target you'd like next (Vercel/Netlify) and I'll make another video."

Notes for recording
- Keep terminal font large and readable (14-18pt). Use `zsh` and a clear prompt.
- Use VS Code with file icons and large editor text.
- For voice: use a single clear microphone and record in a quiet room. Keep pace steady.
- Consider adding small jump cuts to skip long waits (install/build) and show trimmed output.
