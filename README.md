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
fonts/                  Self-hosted Archivo + DM Sans (SIL Open Font License)
images/favicon.svg      Favicon (stand-in patch mark until the real logo exists)
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
4. Copy the form ID from its share link (`tally.so/r/<ID>`) and replace `REPLACE_WITH_FORM_ID` in the `data-tally-src` attribute in `start-an-order/index.html`. The full field list and Airtable mapping is in an HTML comment on that page.

Do the same for the "Plan Your Crew Order" form in `group-orders/index.html`. Point it at the same Orders table and also map Group/Organization Name.

Until an ID is set, each page shows a "Form not connected yet" note instead of the form. The forms sit on a cream panel so Tally's default dark text stays readable. Keep Tally's theme light.

## Before launch

- Swap every `.ph` placeholder (the "Photo needed" frames) for real photos: put an `<img>` inside the `<figure class="ph">` and remove the tag and caption. Hero, add-ons, crew, and About/team all need them. Never use stock photos for Valerie or Sebastian.
- Replace the stand-in logo mark (the heart patch in the header, footer and `images/favicon.svg`) if you have a real logo.
- Set the real Instagram URL in each page footer.
