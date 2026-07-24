import type { APIRoute } from "astro";
import { SITE } from "../config";

export const GET: APIRoute = () => {
  const sitemapUrl = new URL("/sitemap-index.xml", SITE.url);
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl.href}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
