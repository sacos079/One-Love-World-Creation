# Customization engine roadmap

The initial repository does **not** implement a full configurator. It establishes the architecture for one.

## Current foundation

- `/customize` route for the primary customization entry point
- `components/customizer/` for future interactive UI modules
- `types/domain.ts` for implementation-neutral customization models

## Planned capabilities

- Garment selection
- Variant selection (size, color, source garment)
- Placement-specific design configuration
- Custom text, fonts, color, and sizing
- Graphic uploads and approval flow
- DTF, patch, and mixed-decoration support
- Quote-first review before payment

## Suggested architecture

- Presentation components remain separate from pricing logic
- Customization state should be isolated in dedicated modules, not scattered across pages
- Uploads should be validated server-side
- Placement and artwork metadata should be normalized so both 2D and future 3D previews can share the same model

## Important guardrails

- Do not assume fixed pricing formulas in the customer UI
- Keep customer rights acknowledgment in the upload/request flow
- Support both customer-supplied and One Luv-supplied garments
