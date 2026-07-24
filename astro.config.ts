import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config";

export default defineConfig({
  output: "static",
  site: SITE.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
