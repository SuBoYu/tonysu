import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  globalIgnores([".astro/", "dist/", "node_modules/"]),
);
