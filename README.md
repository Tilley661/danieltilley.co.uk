# Daniel Tilley — Personal Site

A modern, animated personal profile site. Static HTML/CSS/JS — no build step required.

## Features

- Dark/light theme with persisted preference
- Typed hero text, scroll-reveal animations, animated counters
- Cursor-following glow, drifting gradient background
- Fully responsive and accessible (respects `prefers-reduced-motion`)

## Local preview

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploying to GitHub Pages

1. Push this folder to a new GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch** and choose `main` / root.
4. Add your custom domain `danieltilley.co.uk` in **Settings → Pages → Custom domain**.
5. At your DNS provider, add a `CNAME` record for `www` → `<username>.github.io`, and
   an `ALIAS`/`ANAME` (or `A`) record for the apex `danieltilley.co.uk` (GitHub's current
   apex IPs are `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
6. Enable **Enforce HTTPS**.
