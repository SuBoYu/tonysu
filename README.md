# Tony Su — Personal Website

A minimal, content-first personal website for Tony Su. It is built with Astro,
TypeScript, and Tailwind CSS, and is designed to deploy as a static site on
Cloudflare Pages.

## Tech stack

- [Astro](https://astro.build/)
- TypeScript with strict checking
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint and Prettier
- pnpm

The site uses native Astro components and static rendering. It does not include
React, a CMS, a database, analytics, or a contact-form backend.

## Getting started

### Prerequisites

- A recent Node.js version supported by Astro 7
- Corepack, which is included with most Node.js installations

### Install dependencies

```bash
corepack pnpm install
```

### Start the development server

```bash
corepack pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. Press
`Ctrl+C` to stop the server.

If pnpm is already installed globally, you can use `pnpm` instead of
`corepack pnpm`.

## Available commands

| Command                 | Description                            |
| ----------------------- | -------------------------------------- |
| `corepack pnpm dev`     | Start the local development server     |
| `corepack pnpm build`   | Create the production build in `dist/` |
| `corepack pnpm preview` | Preview the production build locally   |
| `corepack pnpm check`   | Run Astro and TypeScript diagnostics   |
| `corepack pnpm lint`    | Run ESLint                             |
| `corepack pnpm format`  | Format the project with Prettier       |

Before submitting changes, run:

```bash
corepack pnpm format
corepack pnpm check
corepack pnpm lint
corepack pnpm build
```

## Running and maintaining the website

### Run it locally

From the repository root:

```bash
corepack pnpm install
corepack pnpm dev
```

Visit [http://localhost:4321](http://localhost:4321). The development server
automatically refreshes the browser when source or content files change.

To test the production version locally:

```bash
corepack pnpm build
corepack pnpm preview
```

### Publish an update

Use this workflow whenever you change content or code:

```bash
git switch main
git pull
git switch -c feature/describe-your-change

# Edit and preview the website, then validate it:
corepack pnpm format
corepack pnpm check
corepack pnpm lint
corepack pnpm build

git add .
git commit -m "Describe the update"
git push -u origin feature/describe-your-change
```

Open a pull request on GitHub and merge it into `main`. Cloudflare Pages
automatically builds and deploys every merge to `main`; no manual upload is
needed. Check the deployment under **Cloudflare → Workers & Pages → tonysu →
Deployments**.

### Routine updates

- Add articles in `src/content/writing/`. Start with `draft: true`, preview the
  post locally, and change it to `draft: false` when it is ready to publish.
- Add or revise projects in `src/content/projects/`.
- Update `src/pages/now.astro` when current interests or activities change.
- Replace `public/resume.pdf` and update `src/pages/resume.astro` when the
  resume changes.
- Check Google Search Console occasionally for indexing or sitemap issues.
- Review Cloudflare after each merge to confirm that the production deployment
  succeeded.
- Update dependencies every few months and rerun the complete validation
  commands.

## Project structure

```text
public/                 Static assets
src/
├── components/         Shared UI, metadata, and theme controls
├── content/            Markdown writing and project entries
├── content.config.ts   Content collection schemas and loaders
├── layouts/            Reusable page layouts
├── pages/              Pages, feeds, and discovery endpoints
├── styles/             Global typography and theme styles
├── utils/              Content, date, and reading-time helpers
└── config.ts           Site metadata and contact links
```

The current routes are:

- `/`
- `/about`
- `/projects`
- `/writing`
- `/now`
- `/resume`
- `/contact`
- `/rss.xml`
- `/robots.txt`

Projects and writing are generated from typed Astro content collections.
Writing pages include reading times and newer/older article navigation.

## Managing content

Writing entries live in `src/content/writing/`. Each Markdown file uses:

```yaml
title: Post title
description: A short description
publishedAt: 2026-07-23
updatedAt: 2026-07-24 # optional
draft: false
tags:
  - Topic
```

Draft writing entries appear during local development and are excluded from
production indexes, feeds, and generated routes.

Project entries live in `src/content/projects/`. Their frontmatter supports a
status, technology list, featured flag, publication date, and optional external
or repository URLs.

## Customization

Update `src/config.ts` with:

- The production site URL
- Email address
- GitHub profile
- LinkedIn profile

The site URL is used for canonical links, structured metadata, RSS links,
`robots.txt`, and the sitemap.

Personal content can be edited in:

- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/resume.astro`
- `src/pages/contact.astro`

The downloadable resume is served from `public/resume.pdf`. Replace that file
with a newer version while keeping the same filename to update the download.

Global colors, typography, spacing, and responsive styles live in
`src/styles/global.css`. The theme control follows the system preference by
default and stores manual light or dark choices in local storage.

## Production build

Create and preview a production build:

```bash
corepack pnpm build
corepack pnpm preview
```

Astro generates a static site in `dist/`.

## Deploying to Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages and use:

| Setting          | Value        |
| ---------------- | ------------ |
| Build command    | `pnpm build` |
| Output directory | `dist`       |

Cloudflare Pages should detect pnpm from the `packageManager` field and
`pnpm-lock.yaml`. Configure the production domain after the initial Pages
deployment succeeds.

After deployment:

1. Update `SITE.url` in `src/config.ts` to the final Pages or custom-domain URL.
2. Confirm the production domain in Cloudflare Pages.
3. Enable automatic main-branch and pull-request preview deployments.
4. Verify `/sitemap-index.xml`, `/rss.xml`, and `/robots.txt` on the live site.

## Project status

Milestones 1–4 are implemented:

- Astro and Tailwind foundation
- Shared responsive layout
- Homepage
- About page
- HTML resume page
- Contact page
- Cloudflare-ready static build
- Writing and project content collections
- Writing and project index pages
- Markdown-powered detail pages
- Production draft filtering
- Initial sample content
- Canonical, Open Graph, Twitter, and structured metadata
- Sitemap, RSS, robots, favicon, and custom 404 page
- System-aware light and dark themes with a persisted manual preference
- Reading times and article navigation
- Completed Now page
- Responsive and accessibility polish

The production site is deployed at
[https://tonysu.pages.dev](https://tonysu.pages.dev).
