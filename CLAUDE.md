# Portfolio project guidance

## Grounding and accuracy

- Inspect the relevant source and data before making claims or changing behavior. Do not invent personal details, employers, dates, achievements, project capabilities, APIs, or deployment facts.
- Personal and portfolio content is sourced from `app/data/`. Improve grammar and concision without changing the underlying claims. If a stronger claim or missing fact is needed, ask Sajjad instead of guessing.
- Project cards are populated from `app/data/projects.ts`. Project creation, updates, and deletion are not backed by a configured API; do not describe them as persisted or report success for those operations.
- Blog articles are fetched from the DEV API in the blog routes. Treat API responses and network availability as untrusted; keep loading, empty, and error states distinct.
- The README contains starter-template and Prisma instructions. Verify those claims against `package.json` and the implementation before relying on them.
- Distinguish verified behavior from assumptions. Never claim a build, test, API request, or visual check passed unless it was actually run.

## Application structure

- This is a Next.js App Router application. The root layout and shared shell are in `app/layout.tsx`; route pages are under `app/(routes)/`.
- Shared visual tokens and base component styles live in `app/globals.css`; structural shell styles live in `app/App.css`. Import global styles from the root layout, not individual pages.
- Shared components are under `app/components/`; static portfolio content is under `app/data/`; hooks, services, types, and utilities are under their corresponding `app/` directories.
- Keep server/client boundaries intact. Components using React state/effects, browser APIs, Redux, or Framer Motion must remain client components.
- Internal navigation should use `next/link`; external links opened in a new tab must include `rel="noopener noreferrer"`.
- Do not add a backend, database, or persistence claim unless one is implemented and configured in this repository.

## Visual and content standards

- The intended visual direction is professional and editorial, using the "Oxford Navy & Brass" palette: cool neutral surfaces, ink-navy text, an Oxford navy primary, and a brass accent reserved for small details (rules, step numbers), with a matching navy-black dark theme. Avoid warm cream backgrounds and teal/terracotta combinations. The tokens in `app/globals.css` are the source of truth; text on a `--primary` background must use `--on-primary`, never hard-coded white.
- The confirmed portfolio positioning is full-stack development (Python, Node.js, React, Next.js) for actuarial and financial software. Sajjad implements models and formulas supplied by actuaries; do not present him as an actuarial or modelling expert. Lead the tech stack with tools used professionally and present mobile/other tools only as secondary familiarity. Current public role facts are Senior Software Developer at Badri Solutions, Karachi, Pakistan; do not silently change these without Sajjad's confirmation.
- Keep personal interests secondary to professional evidence. Add resume claims, especially numerical outcomes or employer-specific project details, only when they are accurate and appropriate to publish.
- Resume files belong outside `public/` unless Sajjad explicitly selects a version for public download. The local `private-resumes/` directory is gitignored and must remain untracked.
- The client-side contact form uses Formspree only when `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is configured. This is a public form endpoint, not a secret. Do not report messages as sent if the endpoint is absent or the request fails.
- Avoid decorative purple/neon gradients, glassmorphism, oversized glow effects, excessive animation, and center-aligning long-form text. Prefer clear hierarchy, comfortable line lengths, concise copy, and consistent spacing.
- Use the theme variables (`--background`, `--surface`, `--foreground`, `--muted`, `--border`, and `--primary`) instead of hard-coded colors.
- Cards should prioritize readable titles and concise descriptions. Keep repeated cards landscape-oriented on wider screens and stack media/content naturally on small screens; avoid fixed-width layouts that cause horizontal scrolling.
- Keep headings descriptive and page-specific. Do not add filler copy or repeat the same introduction on every route.
- Use semantic elements and accessible labels/states for inputs, buttons, filters, navigation, and images. Respect reduced-motion preferences.
- Avoid broad global selectors that override Bootstrap primitives (for example `.container`, `.card`, all `div`, or all `span`). Scope styles to component classes or CSS modules.

## Data and UI behavior

- Derive combined search and filter results from the same source list so one control cannot silently erase another control's criteria.
- Clamp pagination when the result count or page size changes. Invalid pages must not display unrelated results.
- Cancel or ignore stale fetches when a component unmounts or its request key changes. Check HTTP status and show a useful error state instead of leaving a permanent loader.
- Use stable item keys and handle optional data explicitly; do not rely on non-null assertions for API or route data.

## Validation

- Run `npm run lint` for lint validation and `npm run build` for a production build when code changes warrant it.
- There is no test script in `package.json`; do not claim automated tests ran unless a test runner is added and executed.
- For visual or responsive changes, verify at a narrow mobile width and a desktop width when a browser is available. Report any validation that could not be completed.
