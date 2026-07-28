# IMR Tech Website

Company website for IMR Tech, built with React and Vite for Vercel deployment.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Vercel Environment Variables

Set these in Vercel before enabling the lead form in production:

```text
GOOGLE_SHEET_ID
GOOGLE_SHEET_TAB
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
```

The Google Sheet must be shared with the service account email as Editor.

## Routes

- `/` main bilingual landing page
- `/privacy` privacy policy
- `/legal` terms and legal notice
