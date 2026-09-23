# One Luv — One Love World Creation

Static website for One Luv, a family-owned custom apparel shop in Miami.
Plain HTML/CSS/JS, hosted on Cloudflare Pages. Order forms are Tally embeds that write to the Airtable **Orders** table.

## Structure

```
index.html              Home
start-an-order/         Main intake form (Tally embed)
services/               Round 2
group-orders/           Round 2 (crew form, Tally embed)
about/                  Round 3
css/tokens.css          Colors, type, spacing
css/base.css            Reset + typography
css/components.css      Nav, buttons, placeholders, ticker, steps, cards, forms, footer
js/main.js              Mobile menu, ticker loop, Tally embed loader
images/placeholders/    Placeholder assets until real photos exist
```

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Links use root paths (`/css/...`), so opening the file directly won't load styles. Use a local server.

## Deploy (Cloudflare Pages)

Connect this repo in Cloudflare Pages. Framework preset: **None**, build command: *(empty)*, output directory: `/`.

## Connecting the order form (Tally → Airtable)

1. Build the "Start Your Order" form in Tally using the fields in the spec (section 5).
2. In Tally: **Integrations → Airtable**, map each field to the Orders table columns (spec section 8).
   Add hidden fields for the system columns: `Order Status` = `Inquiry`. Order Date can map to Tally's submission time.
3. Set the confirmation message: "Got it! We'll review your idea and send you a design preview and quote. Nothing is final until you approve it."
4. Copy the form ID from its share link (`tally.so/r/<ID>`) and paste it into `data-tally-id=""` in `start-an-order/index.html`.

Until an ID is set, the page shows an outline of the questions instead of the form.

## Before launch

- Swap every `.ph` placeholder block for real photos (hero, add-ons, crew, About/team).
- Set the real Instagram URL in each page footer.
