import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const writing = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/writing",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    status: z.enum(["active", "completed", "archived"]).optional(),
    technologies: z.array(z.string()).default([]),
    externalUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
  }),
});

export const collections = { writing, projects };
