# One Luv — One Love World Creation

Static website for One Luv, a family-owned custom apparel shop in Miami.
Plain HTML/CSS/JS, hosted on Cloudflare Pages. The order form saves to the Airtable **Orders** table through a Pages Function.

## Structure

```
index.html              Home
start-an-order/         Main order form
services/               The four service paths (Originals folded in here)
group-orders/           Crew orders + the same form, preset to group
about/                  Story, team, values, location
404.html                Not-found page (Cloudflare Pages serves it automatically)
css/tokens.css          Colors, type, spacing
css/base.css            Reset + typography
css/components.css      Nav, buttons, placeholders, ticker, steps, cards, forms, footer
js/main.js              Mobile menu, ticker loop
js/order-schema.js      Order form questions → Airtable fields
js/order-form.js        Order form UI
functions/api/order.js  Saves orders to Airtable
images/placeholders/    Placeholder assets until real photos exist
```

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Links use root paths (`/css/...`), so opening the file directly won't load styles. Use a local server.

## Deploy (Cloudflare Pages)

Connect this repo in Cloudflare Pages. Framework preset: **None**, build command: *(empty)*, output directory: `/`.

## The order form

`start-an-order/` and `group-orders/` share one 4-step form that saves straight to the Airtable **Orders** table
(the "One Love World Creation CRM" base). It asks the same questions as the existing Airtable form.

- `js/order-schema.js` holds every question, its choices and the Airtable field it fills. Change questions here.
  Select choices must match the Orders table's options exactly.
- `js/order-form.js` builds the form in the browser. `data-preset="group"` pre-selects Group / Bulk Order.
- `functions/api/order.js` is a Cloudflare Pages Function at `POST /api/order`. It re-checks every answer,
  creates the record (Status = Inquiry, Intake Source = Website, Order Date = today) and uploads artwork files.

To turn it on:

1. In Airtable, create a personal access token (airtable.com/create/tokens) with the scope
   `data.records:write`, limited to the One Love World Creation CRM base.
2. In Cloudflare Pages → the project → **Settings → Variables and Secrets**, add a secret named
   `AIRTABLE_TOKEN` with that token, then redeploy.

Until the token is set, submitting shows "The order form isn't connected yet." The form only works on the
deployed site (or `npx wrangler pages dev .`), not with `python3 -m http.server`.

## Before launch

- Swap every `.ph` placeholder block for real photos (hero, add-ons, crew, About/team). The About photos are outlined in amber and marked "Real photo required". Never use stock photos there.
- Set the real Instagram URL in each page footer.
