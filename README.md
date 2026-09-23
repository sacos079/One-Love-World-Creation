# ONE LOVE WORLD CREATION

Official website foundation for **ONE LOVE WORLD CREATION** (customer-facing as **One Luv**), a family-owned custom apparel studio built around quote-first customization.

## What this project includes

- Next.js App Router starter application
- TypeScript + Tailwind CSS foundation
- Reusable design-token system
- Starter marketing and quote-first route architecture
- Documentation for future customization, commerce, and 3D roadmap work
- `CLAUDE.md` operating guide for Claude Code

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Run linting:
   ```bash
   npm run lint
   ```
5. Optional formatting checks:
   ```bash
   npm run format:check
   ```

## Environment variables

Copy `.env.example` to `.env.local` and replace placeholder values before launch.

Current variables:

- `NEXT_PUBLIC_SITE_URL`: canonical site URL used for metadata and sitemap generation
- `NEXT_PUBLIC_CONTACT_EMAIL`: placeholder public contact email for UI copy

## Project structure

```text
app/                  Next.js routes, metadata, sitemap, robots
components/
  commerce/           Quote-first commerce UI building blocks
  customizer/         Future customization system foundations
  forms/              Reusable contact and quote form shells
  layout/             Navigation, footer, page chrome
  sections/           Homepage and route section components
  ui/                 Low-level reusable UI primitives
data/                 Editable marketing copy, nav, FAQs, homepage content
docs/                 Architecture and roadmap documentation
lib/                  Shared utilities and metadata helpers
styles/               Central design tokens and theme CSS
types/                Implementation-neutral domain models
```

## Development workflow

- Keep content in `/data` when possible instead of hardcoding marketing copy inside complex components.
- Prefer extending reusable components over duplicating section markup.
- Document meaningful architectural changes in `/docs`.
- Do not commit secrets. Local secrets belong in `.env.local`.

## Claude Code instructions

Long-term repository instructions for Claude Code live in [`/CLAUDE.md`](./CLAUDE.md).
