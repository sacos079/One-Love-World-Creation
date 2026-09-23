# Commerce roadmap

This project starts with a **quote-first** commerce model instead of fixed-price checkout.

## Current customer journey

1. Customize or describe the requested piece
2. Request a quote
3. Review with One Luv
4. Approve the design direction
5. Receive payment instructions
6. Move into production

## Why quote-first

Pricing depends on variables such as:

- customer-supplied vs One Luv-supplied garments
- garment cost
- DTF sizing
- patch quantity
- placement count
- artwork complexity
- order quantity
- group-order scale

## Implementation notes

- Pricing logic should live separately from presentation components
- Starter forms should gather structured details without implying instant checkout
- Payment and production systems can be added later without rebuilding the front-end information architecture
