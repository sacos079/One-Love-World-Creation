# One Luv — One Love World Creation

Static website for One Luv, a family-owned custom apparel shop in Miami.
Plain HTML/CSS/JS, hosted on Cloudflare Pages. Order forms are Tally embeds that write to the Airtable **Orders** table.

## Structure

```
index.html              Home
start-an-order/         Main intake form (Tally embed)
services/               The four service paths (Originals folded in here)
group-orders/           Crew orders + crew form (Tally embed)
about/                  Story, team, values, location
404.html                Not-found page (Cloudflare Pages serves it automatically)
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

## Connecting the order forms (Tally → Airtable)

Full step-by-step guide: [`docs/tally-setup.md`](docs/tally-setup.md). It covers every question, the exact dropdown options, the Airtable column mapping, and the hidden fields.

Short version: build both forms in Tally, connect them to the **Orders** table, then paste each form ID into `data-tally-id=""` in `start-an-order/index.html` and `group-orders/index.html`. Until an ID is set, each page shows an outline of the questions instead of the form.

## Before launch

- Swap every `.ph` placeholder block for real photos (hero, add-ons, crew, About/team). The About photos are outlined in amber and marked "Real photo required". Never use stock photos there.
- Set the real Instagram URL in each page footer.
