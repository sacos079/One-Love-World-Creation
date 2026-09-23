# CLAUDE.md

## Project overview

ONE LOVE WORLD CREATION (customer-facing: **One Luv**) is a family-owned custom apparel studio. The brand promise is **"Made to represent you."** The supporting voice is **"Your piece. Your way."**

This repository powers the public-facing website and should feel like a modern creative studio for custom apparel, not a generic print shop.

## Brand identity

- Tone: cool, direct, welcoming, creative, community-driven, modern, and down-to-earth.
- Visual direction: workwear × streetwear × Miami creative energy × customization.
- Avoid luxury-brand pretension, corporate jargon, template e-commerce aesthetics, cartoonish UI, and excessive animation.
- Do **not** introduce customer-facing "Create with AI" features.

## Technology stack

- Next.js App Router
- React + TypeScript with strict TypeScript settings
- Tailwind CSS
- ESLint + Prettier
- Semantic, accessible, mobile-first HTML

## Site architecture

Primary routes:

- `/` homepage
- `/customize`
- `/group-orders`
- `/originals`
- `/gallery`
- `/about`
- `/faq`
- `/contact`
- `/quote`

Editable content should live in `/data` whenever practical. Shared implementation-neutral domain models live in `/types`.

## Component organization

- `components/ui`: low-level reusable UI primitives
- `components/layout`: header, footer, page chrome
- `components/sections`: marketing and route section components
- `components/forms`: reusable form shells and field groups
- `components/commerce`: quote-first commerce building blocks
- `components/customizer`: future customization-system UI foundations

Before creating a new component, inspect the existing folders and reuse or extend an existing abstraction when possible.

## Coding standards

- Keep files focused and reasonably small.
- Prefer server components unless interactivity is required.
- Avoid copy/paste duplication; extract reusable patterns instead.
- Do not introduce unnecessary dependencies.
- Keep business logic, content, and presentation separated.
- Clearly label placeholder implementations so future contributors know what is unfinished.
- Do not casually break existing functionality while refactoring.

## Naming conventions

- Use descriptive PascalCase for React components.
- Use kebab-case for route segment directories.
- Use camelCase for variables and helper functions.
- Keep content/config exports readable and business-oriented.

## Design-token rules

- Brand colors, spacing, radii, shadows, containers, breakpoints, and motion durations belong in centralized tokens.
- Use the CSS variables and Tailwind theme tokens defined in `styles/theme.css` and `app/globals.css`.
- Do not scatter raw hex values across components unless adding a new reviewed token.

## Accessibility expectations

- Use semantic landmarks and heading hierarchy.
- Preserve keyboard navigation and visible focus states.
- Use proper labels for every form control.
- Prefer native HTML elements before adding ARIA.
- Support reduced motion.
- Maintain WCAG 2.2 AA-minded contrast and touch targets.

## Mobile-first and responsive behavior

- Build layouts mobile-first.
- Validate sections at small, medium, and large breakpoints.
- Prefer simple responsive patterns over complex JS-heavy UI.

## Performance expectations

- Minimize client-side JavaScript.
- Use Next.js metadata, routing, and image capabilities thoughtfully.
- Avoid heavy libraries until a real need exists.
- Keep placeholder experiences lightweight.

## Future feature guidance

- The customization engine, quote workflow, and 3D configurator are intentionally staged.
- Introduce future features in modular slices.
- Keep pricing logic separate from presentation.
- Document major architectural changes in `/docs` when they alter how the site is organized or extended.

## Security and environment

- Never commit secrets, tokens, API keys, passwords, or private customer data.
- Put local environment variables in `.env.local`.
- Keep `.env.example` limited to placeholder variable names and safe example values.
- Future customer-upload flows must use secure server-side validation and rights acknowledgment.

## Working style

- Inspect existing components before creating duplicates.
- Prefer evolving reusable abstractions over adding one-off code paths.
- Avoid giant files.
- Avoid unnecessary dependencies.
- Keep documentation aligned with the actual implementation.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
