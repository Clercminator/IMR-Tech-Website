# IMR Tech Website

Company website for IMR Tech, built with React and Vite for Vercel deployment.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run verify
```

The Vercel deployment is pinned through `package.json` and `vercel.json` to
the Vite preset, Node.js 24, `npm run build`, and the generated `dist`
directory. The canonical host is `https://www.imrtech.xyz`; the apex domain
redirects to `www`.

## Vercel Environment Variables

Set these in Vercel before enabling the lead form in production:

```text
GOOGLE_SHEET_ID
GOOGLE_SHEET_TAB
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
```

The Google Sheet must be shared with the service account email as Editor.
Add the variables to Production, Preview, and Development if the lead form
should work in every Vercel environment.

## Routes

- `/` redirects to the Spanish site.
- `/es/` Spanish landing page.
- `/en/` English landing page.
- `/es/servicios/*` and `/en/services/*` service pages.
- `/es/industrias/*` and `/en/industries/*` industry pages.
- `/es/casos/*` and `/en/case-studies/*` case-study pages.
- `/es/implementacion-ia-chile/` and `/en/ai-implementation-chile/` location pages.
- Localized privacy and legal pages live under `/es/` and `/en/`.

The production build statically prerenders every public route and generates
`dist/sitemap.xml`. Route definitions and SEO copy are maintained in
`src/site-pages.js`.
