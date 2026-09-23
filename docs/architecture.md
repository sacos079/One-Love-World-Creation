# Architecture

This repository starts as a quote-first marketing and lead-capture site for ONE LOVE WORLD CREATION.

## Principles

- Keep the foundation easy to extend with Claude Code.
- Use server-rendered pages by default.
- Separate content, UI primitives, route sections, and domain models.
- Avoid premature backend coupling.

## Current application layers

- `app/`: route definitions, metadata, and site-level concerns
- `components/ui`: reusable low-level building blocks
- `components/layout`: global navigation and footer
- `components/sections`: homepage and route-level composition pieces
- `components/forms`: structured starter forms for contact and quote capture
- `components/commerce`: quote-first workflow presentation components
- `components/customizer`: placeholders for the future customization experience
- `data/`: editable copy and content arrays
- `types/`: implementation-neutral commerce and customization types
- `lib/`: utilities and metadata helpers
- `styles/`: shared theme tokens

## Route strategy

Current routes are static and content-driven:

- `/`
- `/customize`
- `/originals`
- `/group-orders`
- `/gallery`
- `/about`
- `/faq`
- `/contact`
- `/quote`

Future secure form handling, uploads, or CRM integrations can be added with route handlers or server actions without restructuring the full site.

## Data strategy

Editable marketing content lives in `/data`. This keeps future CMS adoption straightforward because content is already separated from presentation.

## Future extension points

- CRM / inbox delivery for forms
- Customer-upload pipeline with server validation
- Quote dashboard and approval workflow
- 2D customization state management
- 3D configurator module
