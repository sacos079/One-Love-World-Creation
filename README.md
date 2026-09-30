# One Luv — One Love World Creation

Static website for One Luv, a family-owned custom apparel shop in Miami.
Plain HTML/CSS/JS, hosted as a Cloudflare Worker with static assets. The order form saves to the Airtable **Orders** table through the Worker.

## Structure

```
public/                 Everything the site publishes
  index.html            Home
  start-an-order/       Main order form
  services/             The four service paths (Originals folded in here)
  group-orders/         Crew orders + the same form, preset to group
  about/                Story, team, values, location
  404.html              Not-found page
  css/tokens.css        Colors, type, spacing
  css/base.css          Reset, typography, cloud background
  css/components.css    Nav, buttons, cards, ticker, order form, footer
  js/main.js            Mobile menu, ticker loop
  js/order-schema.js    Order form questions -> Airtable fields
  js/order-form.js      Order form UI
  images/placeholders/  Placeholder assets until real photos exist
src/worker.js           Worker entry: serves the site, sends /api/order to the function
functions/api/order.js  Saves orders to Airtable
wrangler.jsonc          Cloudflare config (Worker name, assets folder)
```

## Run locally

Design and content changes:

```
cd public && python3 -m http.server 8000
```

Then open http://localhost:8000. Links use root paths (`/css/...`), so opening a file directly won't load styles.
The order form can't submit this way. To test the whole thing, run `npx wrangler dev` from the repo root.

## Deploy (Cloudflare Workers)

The site deploys as the Worker `one-love-world-creation` from this repo with `npx wrangler deploy`
(build command empty, deploy command `npx wrangler deploy`). Merging to `main` redeploys it.

## The order form

`start-an-order/` and `group-orders/` share one 4-step form that saves straight to the Airtable **Orders** table
(the "One Love World Creation CRM" base). It asks the same questions as the existing Airtable form.

- `public/js/order-schema.js` holds every question, its choices and the Airtable field it fills. Change questions here.
  Select choices must match the Orders table's options exactly.
- `public/js/order-form.js` builds the form in the browser. `data-preset="group"` pre-selects Group / Bulk Order.
- `functions/api/order.js` handles `POST /api/order` (called from `src/worker.js`). It re-checks every answer,
  creates the record (Status = Inquiry, Intake Source = Website, Order Date = today) and uploads artwork files.

To turn it on:

1. In Airtable, create a personal access token (airtable.com/create/tokens) with the scope
   `data.records:write`, limited to the One Love World Creation CRM base.
2. In Cloudflare → Workers & Pages → `one-love-world-creation` → **Settings → Variables and Secrets**,
   add a secret named `AIRTABLE_TOKEN` with that token, then deploy again.

Until the token is set, submitting shows "The order form isn't connected yet." The form only works on the
deployed site or under `npx wrangler dev`, not with `python3 -m http.server`.

## Before launch

- Swap every `.ph` placeholder block for real photos (hero, add-ons, crew, About/team). The About photos are outlined in amber and marked "Real photo required". Never use stock photos there.
- Set the real Instagram URL in each page footer.
