import fs from "node:fs/promises";
import path from "node:path";
import { staticRoutes, getRouteSeo, normalizePath } from "../src/site-pages.js";

const root = process.cwd();
const dist = path.join(root, "dist");
const routeSet = new Set(staticRoutes.map(normalizePath));
const errors = [];

function routeFile(route) {
  return path.join(dist, route.replace(/^\/|\/$/g, ""), "index.html");
}

for (const route of staticRoutes) {
  const seo = getRouteSeo(route);
  let html;
  try {
    html = await fs.readFile(routeFile(route), "utf8");
  } catch {
    errors.push(`${route}: missing prerendered HTML`);
    continue;
  }

  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (html.includes('<div id="root"></div>')) errors.push(`${route}: empty root shell`);
  if (!html.includes(`lang="${seo.language}"`)) errors.push(`${route}: wrong document language`);
  if (!html.includes(`rel="canonical" href="${seo.canonical}"`)) errors.push(`${route}: canonical mismatch`);
  if (!html.includes(`hreflang="${seo.language === "es" ? "en" : "es"}" href="${seo.alternate}"`)) {
    errors.push(`${route}: alternate-language link mismatch`);
  }
  if (!html.includes('type="application/ld+json"')) errors.push(`${route}: missing JSON-LD`);
  if (!html.includes(seo.title)) errors.push(`${route}: missing route title`);
  if (!html.includes(seo.description)) errors.push(`${route}: missing route description`);
  if (html.includes("https://imrtech.xyz")) errors.push(`${route}: non-www absolute URL found`);

  const jsonMatch = html.match(/<script id="structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!jsonMatch) {
    errors.push(`${route}: structured-data block not found`);
  } else {
    try {
      const data = JSON.parse(jsonMatch[1]);
      if (!Array.isArray(data["@graph"]) || !data["@graph"].length) {
        errors.push(`${route}: JSON-LD graph is empty`);
      }
    } catch {
      errors.push(`${route}: JSON-LD is invalid JSON`);
    }
  }

  const hrefs = [...html.matchAll(/<a[^>]+href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith("/")) continue;
    const internalPath = normalizePath(href);
    if (!routeSet.has(internalPath)) errors.push(`${route}: unresolved internal link ${href}`);
  }
}

const sitemap = await fs.readFile(path.join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = (sitemap.match(/<url>/g) || []).length;
if (sitemapUrls !== staticRoutes.length) {
  errors.push(`sitemap: expected ${staticRoutes.length} URLs, found ${sitemapUrls}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`SEO validation passed for ${staticRoutes.length} prerendered routes.`);
}
