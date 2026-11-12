## Overview

The site you are reading. It presents my professional work, including confidential client projects, in a way that is useful to recruiters and clients, readable by search engines and AI assistants, and safe under my non-disclosure obligations.

## The problem

Most of my best work is confidential, so I can't show code, screenshots, or client names. The challenge was to describe that work in enough depth to be credible, without exposing anything an employer or client would consider sensitive, and to do it on a site that looks professional and is easy to maintain.

## My role

I designed and built the site on my own, starting in January 2025, and have since rebuilt most of it: the positioning and content, the design system, the project case studies, and the search setup. I use AI-assisted development tools as part of my workflow, as I do in my day-to-day work.

## How it works

1. **Content as data:** projects, experience, education, certifications, and recommendations live in typed data files, so updating the site rarely means touching a component.
2. **Case studies in Markdown:** each project page is a Markdown file with a fixed, confidentiality-safe structure: overview, problem, role, approach, engineering, and outcome.
3. **Server-rendered pages:** project, experience, and education pages are generated as static HTML at build time; blog articles are fetched from the DEV API on the server and refreshed daily.
4. **Discoverability:** every page has its own title, description, and canonical URL, plus a sitemap, a robots file, a generated social share image, structured data describing who I am, and an `llms.txt` summary for AI assistants.

## Engineering highlights

- **Design system:** colour, surface, and text tokens drive a matching light and dark theme, including an "on-primary" text colour so buttons stay readable in both.
- **NDA-safe writing process:** every client case study is checked against the source documents, and anything describing internal structure, security, client identity, or commercial figures is removed.
- **Honest UI states:** the contact form only reports success when the message really sends, project editing never pretends to save, and blog pages show distinct loading, empty, and error states.
- **Accessibility:** semantic headings and landmarks, labelled controls, visible focus, and respect for reduced-motion preferences.
- **Validation before every change:** lint and a full production build run after each update.

**Stack:** Next.js (App Router), React, TypeScript, React Bootstrap, Framer Motion, react-markdown, Formik, Yup, Formspree, Vercel.

## Outcome

A portfolio that can present confidential work in depth and is easy to keep up to date as new projects and credentials arrive.
