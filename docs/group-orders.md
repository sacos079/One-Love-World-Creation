# Group orders roadmap

Group orders are a first-class business case for One Luv.

## Supported scenarios

- Employee crews
- Airport and ramp teams
- Event staffing
- Clubs and dance communities
- Friend groups
- Small businesses
- Family events
- Bulk custom runs

## Future capability targets

- Shared artwork across multiple garments
- Multiple sizes per request
- Name roster support
- Variable text per garment
- Quantity-sensitive pricing review
- CSV roster upload
- Approval tracking
- Group-order status updates

## Architecture direction

- Keep roster data separate from garment style data
- Model shared artwork once and reference it across order items
- Keep quote and production review steps explicit
- Add upload and roster validation server-side when the workflow becomes live
