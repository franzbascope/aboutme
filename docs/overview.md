# Project Overview

## Purpose

This project is a **single-page personal portfolio website** for Franz. Its goal is to give visitors a quick, visual summary of who he is professionally and personally — the kind of page you'd link from a resume, email signature, or LinkedIn profile.

## Content sections

The single page should present the following sections, in roughly this order:

1. **Headshot / intro** — a photo of Franz alongside his name and a short tagline, expanded with the About summary below.
2. **Experience** — professional/work history.
3. **Projects** — notable projects, with descriptions and (where relevant) screenshots or images.
4. **Education** — schools, degrees, certifications.
5. **Languages spoken** — spoken/written languages and proficiency.
6. **Hobbies** — personal interests outside of work.

## Visual requirements

- This is a visual, image-driven page, not a text-only resume. It should include pictures throughout (e.g. project screenshots, hobby photos) to make it engaging rather than a wall of text.
- A **headshot photo** is required as part of the intro/hero section.
- Images should be optimized via `next/image` (per `docs/ui.md` and standard Next.js conventions) rather than raw `<img>` tags.
- Store image files in `public/images/` (e.g. `public/images/headshot.jpg`) and reference them by their root-relative path (e.g. `/images/headshot.jpg`) in `next/image`'s `src`.

## About summary (from LinkedIn)

Use this as the source text for the intro/about copy (adapt tone per the conversational, retro voice described below rather than pasting verbatim if it reads too corporate):

> I'm a full-stack developer specializing in Java/Spring backend development and React/Angular frontend applications. Recently, I've expanded my focus into Artificial Intelligence—particularly Natural Language Processing (NLP)—and I'm interested in applying these techniques to real-world products and intelligent systems.
>
> Completing my Master's degree while working full-time strengthened not only my technical expertise but also my resilience, time management, and ability to deliver under pressure.
>
> **What I bring:**
> - **Full-Stack Development**: End-to-end application development using Java/Spring, React, and Angular
> - **AI & NLP Knowledge**: Practical understanding of Natural Language Processing and its application in intelligent systems
> - **Enterprise Experience**: 6+ years delivering solutions in fintech and global finance environments
> - **Resilience & Discipline**: Proven ability to balance demanding professional work with advanced academic achievement

## Design inspiration

[Cassidy Williams' site](https://cassidoo.co) is a good reference for tone and structure: single page, minimalist and text-friendly but anchored by one personal photo, a short conversational bio ("I'm Cassidy, and I like to..."), and a clean nav linking out to social profiles (GitHub, LinkedIn, etc.). Aim for that same balance — professional credibility plus an approachable, personal voice — rather than a dense, corporate-resume feel.

**Visual style: retro.** The overall aesthetic should be retro/vintage rather than a modern, clean SaaS look — think old computer terminals, zines, or early personal homepages. Use a **typewriter font** (e.g. a monospace typeface like `Courier New`, `IBM Plex Mono`, or `Special Elite`) as the primary typeface across the site, not just for code snippets.

## Structure

- This is a **single page** — all sections live on one route (`app/page.tsx`), navigated via in-page scrolling/anchors rather than separate routes.
- Follow `docs/ui.md` for all UI implementation (shadcn/ui components, Tailwind v4 styling, no hand-rolled primitives).

## Content sources

Use these as the source of truth for content (experience, projects, education, etc.):

- **LinkedIn**: https://www.linkedin.com/in/franzbascope
- **GitHub**: https://github.com/franzbascope
- **YouTube channel**: https://www.youtube.com/@franzbasco
- **Resume**: `docs/resume.pdf`

## Sensitive information

Do not display personal contact details or other sensitive information pulled from the resume or elsewhere — this includes phone number, home address, and personal email address. Public profile links (LinkedIn, GitHub, YouTube) above are fine to show since they're meant to be public-facing. When in doubt about whether a piece of information is safe to publish, leave it out.
