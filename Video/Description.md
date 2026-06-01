Short video description (copy-paste to YouTube)

In this video I refactor my React (Vite + TypeScript) personal portfolio to remove redundant social/profile data, update my LinkedIn link, centralize profile/social info, and add a GitHub Actions workflow to publish to GitHub Pages.

Commands used

```bash
cd /Users/aryansharma/Desktop/My_Personal_Website-main
npm ci
npm run dev          # development server (http://localhost:8080)
npm run build        # production build
npm run preview      # preview production build

# search for linkedin occurrences
rg linkedin

# git
git add .
git commit -m "Centralize socials/profile, update LinkedIn, add GH Pages workflow"
git push origin main
```

Chapters

0:00 Intro
0:50 Run project & reproduce issue
2:00 Find LinkedIn link
3:30 Create shared data files
4:30 Refactor components
6:40 Build & preview
7:20 Setup GitHub Actions deploy
8:20 Commit, push & watch Actions

Links
- Repo: (your repo URL here)
- Commands shown in video: copy the commands section above

Sponsors / Credits
- Built with Vite, React, TypeScript, Tailwind CSS, shadcn-ui
