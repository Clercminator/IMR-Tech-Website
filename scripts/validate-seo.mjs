import fs from "node:fs/promises";
import path from "node:path";
import {
  ORGANIZATION_IDENTITY,
  staticRoutes,
  getRouteSeo,
  normalizePath,
} from "../src/site-pages.js";

const root = process.cwd();
const dist = path.join(root, "dist");
const routeSet = new Set(staticRoutes.map(normalizePath));
const aboutRoutes = new Set(["/es/sobre-nosotros/", "/en/about-us/"]);
const agentsRoutes = new Set([
  "/es/servicios/agentes-ia-empresas/",
  "/en/services/enterprise-ai-agents/",
]);
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
  if (!html.includes('rel="icon" type="image/png" sizes="512x512" href="/images/logo-icon.png"')) {
    errors.push(`${route}: missing square PNG favicon declaration`);
  }
  if (!html.includes('rel="apple-touch-icon" sizes="512x512" href="/images/logo-icon.png"')) {
    errors.push(`${route}: missing Apple touch icon declaration`);
  }

  const jsonMatch = html.match(/<script id="structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!jsonMatch) {
    errors.push(`${route}: structured-data block not found`);
  } else {
    try {
      const data = JSON.parse(jsonMatch[1]);
      if (!Array.isArray(data["@graph"]) || !data["@graph"].length) {
        errors.push(`${route}: JSON-LD graph is empty`);
      } else {
        const organization = data["@graph"].find((node) => node["@type"] === "Organization");
        if (!organization) {
          errors.push(`${route}: Organization node is missing`);
        } else {
          if (organization.name !== ORGANIZATION_IDENTITY.name) errors.push(`${route}: Organization name mismatch`);
          if (organization.legalName !== ORGANIZATION_IDENTITY.legalName) errors.push(`${route}: Organization legal name mismatch`);
          if (organization.description !== ORGANIZATION_IDENTITY.description) errors.push(`${route}: Organization description mismatch`);
          if (organization.foundingDate !== ORGANIZATION_IDENTITY.foundingDate) errors.push(`${route}: Organization founding date mismatch`);
          if (organization.logo?.contentUrl !== ORGANIZATION_IDENTITY.logoUrl) errors.push(`${route}: Organization logo mismatch`);
          if (organization.logo?.width !== 512 || organization.logo?.height !== 512) errors.push(`${route}: Organization logo dimensions mismatch`);
          if (!organization.sameAs?.includes(ORGANIZATION_IDENTITY.linkedinUrl)) errors.push(`${route}: official LinkedIn sameAs is missing`);
        }

        if (aboutRoutes.has(route)) {
          const aboutPage = data["@graph"].find((node) => node["@type"] === "AboutPage");
          if (!aboutPage) errors.push(`${route}: AboutPage node is missing`);
          if (data["@graph"].some((node) => node["@type"] === "Service")) {
            errors.push(`${route}: About page must not be typed as a Service`);
          }
        }

        if (agentsRoutes.has(route) && !data["@graph"].some((node) => node["@type"] === "Service")) {
          errors.push(`${route}: Service schema is missing`);
        }
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

const englishAbout = await fs.readFile(routeFile("/en/about-us/"), "utf8");
if (!englishAbout.includes("<h1>About us</h1>")) errors.push("/en/about-us/: exact About us H1 is missing");
if (!englishAbout.includes(ORGANIZATION_IDENTITY.description)) {
  errors.push("/en/about-us/: crawlable English organization description is missing");
}

const englishHome = await fs.readFile(routeFile("/en/"), "utf8");
if (!englishHome.includes('<a href="/en/about-us/">About us</a>')) {
  errors.push('/en/: crawlable link with the text "About us" is missing');
}

const spanishHome = await fs.readFile(routeFile("/es/"), "utf8");
if (!spanishHome.includes('<a href="/es/servicios/agentes-ia-empresas/">Agentes de IA para empresas en Chile</a>')) {
  errors.push("/es/: crawlable agents service link is missing");
}
if (spanishHome.includes("David%20Clerc%20Entrepreneur%20Traje%20Pro.png")) {
  errors.push("/es/: legacy 1.57 MB founder PNG is still referenced");
}
if (!spanishHome.includes('src="/images/David%20Entrepreneur%20Pro%20traje.webp"')) {
  errors.push("/es/: optimized founder WebP is missing");
}
const spanishHomeImagePreloads = (spanishHome.match(/<link rel="preload" as="image"/g) || []).length;
if (spanishHomeImagePreloads > 2) {
  errors.push(`/es/: expected at most 2 initial image preloads, found ${spanishHomeImagePreloads}`);
}

const spanishAgents = await fs.readFile(routeFile("/es/servicios/agentes-ia-empresas/"), "utf8");
if (!spanishAgents.includes("<h1>Agentes de IA para empresas en Chile</h1>")) {
  errors.push("/es/servicios/agentes-ia-empresas/: target H1 is missing");
}
for (const relatedCase of ["/es/casos/agente-retail-optico/", "/es/casos/agente-ticketing-ti/"]) {
  if (!spanishAgents.includes(`href="${relatedCase}"`)) {
    errors.push(`/es/servicios/agentes-ia-empresas/: missing evidence link ${relatedCase}`);
  }
}

const englishAgents = await fs.readFile(routeFile("/en/services/enterprise-ai-agents/"), "utf8");
if (!englishAgents.includes("<h1>Enterprise AI agents for companies</h1>")) {
  errors.push("/en/services/enterprise-ai-agents/: target H1 is missing");
}

const assetNames = await fs.readdir(path.join(dist, "assets"));
const cssAssets = assetNames.filter((name) => name.endsWith(".css"));
for (const cssAsset of cssAssets) {
  const css = await fs.readFile(path.join(dist, "assets", cssAsset), "utf8");
  if (css.includes("fonts.googleapis.com")) {
    errors.push(`assets/${cssAsset}: render-blocking Google Fonts import remains`);
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
