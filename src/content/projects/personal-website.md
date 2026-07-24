---
title: Personal Website
description: A fast, content-first home for projects, technical writing, and personal notes.
publishedAt: 2026-07-23
featured: true
status: active
technologies:
  - Astro
  - TypeScript
  - Tailwind CSS
  - Cloudflare Pages
---

## Overview

A minimal personal website designed to remain useful and maintainable for
years. It brings projects, writing, a resume, and current interests into one
quiet, text-first experience.

## Problem

Work and ideas were spread across services that were useful for sharing but
poor as a durable personal archive. The site needed to be easy to publish,
quick to load, and independent of a hosted content management system.

## Approach

The project is built in small milestones. Static pages established the visual
foundation first, followed by Markdown content collections for repeatable
publishing.

## Architecture

Astro renders the site to static HTML. Shared layouts and components handle the
site shell, while typed content collections validate writing and project
metadata during the build.

## Implementation

The interface uses semantic HTML, CSS variables, and a small set of reusable
styles. TypeScript runs in strict mode, and formatting, linting, diagnostics,
and production builds are part of the normal workflow.

## Impact

The result is a focused home for long-form work with very little client-side
JavaScript and a straightforward path to Cloudflare Pages.

## Lessons Learned

Strong constraints reduce both design noise and maintenance cost. Building the
content model only after the core layout also made the required abstractions
much clearer.
