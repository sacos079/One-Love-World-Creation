# 3D customizer roadmap

A future 3D configurator may become part of the customization experience, but it is intentionally **not** installed in the initial repository.

## Potential integration path

- Three.js via React Three Fiber for rendering
- GLTF / GLB garment models for apparel bases
- Dynamic textures for prints and patches
- Decal placement mapped to front, back, chest, and sleeve regions
- Text rendering for names, crew IDs, and custom messaging

## Shared data model

The 3D experience should consume the same normalized customization data used by the 2D fallback:

- garment
- variant
- placements
- design assets
- text settings
- scale / rotation / positioning

## Camera and preview considerations

Suggested camera presets:

- Front
- Back
- Left chest detail
- Right chest detail
- Sleeve detail

## Performance notes

- Lazy-load any future 3D module
- Use optimized meshes and compressed textures
- Maintain a 2D fallback for lower-powered devices and quick editing
- Avoid blocking the default page experience with heavy client bundles

## Mobile fallback

The primary customization flow should always remain usable without 3D. 3D should enhance the experience, not become a dependency for requesting a quote.
