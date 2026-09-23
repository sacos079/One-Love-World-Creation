# Design system

The visual system aims to feel like a clean, modern creative studio.

## Brand tokens

Defined centrally in `styles/theme.css` and exposed through Tailwind theme variables.

### Core palette

- Light blue: fresh primary accent
- Light green: optimistic secondary accent
- Light orange: high-energy CTA accent
- Lavender: soft background field
- White: clean surfaces
- Midnight purple: contrast, borders, typography accents, dark sections

## Typography

- Sans body font for clarity and readability
- Display font for headers and strong editorial moments
- Strong hierarchy using compact headings and readable body copy

## Layout rules

- Generous whitespace
- Rounded but structured cards
- Clear visual hierarchy
- Mobile-first sections with constrained content widths

## Motion

- Keep motion subtle and optional
- Respect reduced-motion preferences
- Avoid decorative animation that slows the site

## Component approach

Base primitives live in `components/ui` and should be preferred before adding one-off styles.

## Placeholder media

Use tasteful graphic placeholders and layout blocks until real photography or approved artwork is available. Do not add random low-quality stock images.
