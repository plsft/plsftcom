globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, g as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_C5EkUZcc.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "George Rios \u2014 Edge Architect & Cloudflare Specialist",
    description = "25 years of enterprise architecture. I build software at the edge on Cloudflare Workers, D1, R2, and ship products fast. Book a call to work together."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="author" content="George Rios"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url" content="https://plsft.com"><meta property="og:image" content="/og-image.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@riosgeorge"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-[#0a0a0a]"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Work/plsft/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
