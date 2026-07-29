import fs from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const root = process.cwd();
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");
const template = await fs.readFile(templatePath, "utf8");
const vite = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(html, selector, value) {
  const escaped = escapeAttribute(value);
  const pattern = selector.type === "name"
    ? new RegExp(`<meta\\s+name=["']${selector.value}["'][\\s\\S]*?\\/?>`, "i")
    : new RegExp(`<meta\\s+property=["']${selector.value}["'][\\s\\S]*?\\/?>`, "i");
  const attribute = selector.type === "name" ? "name" : "property";
  return html.replace(pattern, `<meta ${attribute}="${selector.value}" content="${escaped}" />`);
}

function renderDocument(appHtml, seo) {
  let html = template
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${seo.language}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(seo.title)}</title>`)
    .replace(
      /<link\s+rel=["']canonical["'][\s\S]*?\/?>/i,
      `<link rel="canonical" href="${escapeAttribute(seo.canonical)}" />`,
    )
    .replace(/<link\s+rel=["']alternate["'][\s\S]*?\/?>\s*/gi, "")
    .replace(
      /(<link\s+rel=["']canonical["'][\s\S]*?\/?>)/i,
      `$1
    <link rel="alternate" hreflang="${seo.language}" href="${escapeAttribute(seo.canonical)}" />
    <link rel="alternate" hreflang="${seo.language === "es" ? "en" : "es"}" href="${escapeAttribute(seo.alternate)}" />
    <link rel="alternate" hreflang="x-default" href="https://www.imrtech.xyz/es/" />`,
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  html = replaceMeta(html, { type: "name", value: "description" }, seo.description);
  html = replaceMeta(html, { type: "property", value: "og:title" }, seo.title);
  html = replaceMeta(html, { type: "property", value: "og:description" }, seo.description);
  html = replaceMeta(html, { type: "property", value: "og:url" }, seo.canonical);
  html = replaceMeta(html, { type: "name", value: "twitter:title" }, seo.title);
  html = replaceMeta(html, { type: "name", value: "twitter:description" }, seo.description);
  return html;
}

try {
  const [{ App }, site] = await Promise.all([
    vite.ssrLoadModule("/src/main.jsx"),
    vite.ssrLoadModule("/src/site-pages.js"),
  ]);

  for (const route of site.staticRoutes) {
    const seo = site.getRouteSeo(route);
    const appHtml = renderToString(
      React.createElement(App, {
        initialPath: route,
        initialLanguage: seo.language,
      }),
    );
    const html = renderDocument(appHtml, seo);
    const outputDir = path.join(distDir, route.replace(/^\/|\/$/g, ""));
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(path.join(outputDir, "index.html"), html, "utf8");
  }

  const today = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${site.staticRoutes
  .map((route) => {
    const seo = site.getRouteSeo(route);
    return `  <url>
    <loc>${seo.canonical}</loc>
    <xhtml:link rel="alternate" hreflang="${seo.language}" href="${seo.canonical}" />
    <xhtml:link rel="alternate" hreflang="${seo.language === "es" ? "en" : "es"}" href="${seo.alternate}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.imrtech.xyz/es/" />
    <lastmod>${today}</lastmod>
  </url>`;
  })
  .join("\n")}
</urlset>
`;
  await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
} finally {
  await vite.close();
}
