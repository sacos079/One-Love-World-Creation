# Tally form setup

Two Tally forms feed the **Orders** table in the Airtable base **One Love World Creation CRM**:

- **Start Your Order**: embedded on `/start-an-order/`
- **Plan Your Crew Order**: embedded on `/group-orders/`

The website passes a few values to Tally automatically (status, source, order type), so every submission lands in Airtable already tagged.

> **Dropdown options must match Airtable exactly.** Tally sends the option text as-is. If it doesn't match an Airtable choice character for character, that answer won't save. Copy the options below exactly as written, including slashes and capitals.

---

## Step 0 — Airtable prep (one time, about 2 minutes)

In the Orders table, add these choices to existing dropdown columns (click the column header → **Edit field** → **Add option**):

| Column | Add this choice |
|---|---|
| Garment Source | `Not sure yet` |
| Intake Source | `Website Form` |

The **Preferred Contact Method** and **Delivery Method** columns already exist.

---

## Step 1 — Build "Start Your Order" in Tally

Create a new blank form. Title it **Start Your Order**. Add the questions in this order.

### Hidden fields (add first)

Insert block → **Hidden fields**, and add these three names exactly:

`status`  `intake_source`  `request_type`

The website fills them in. You don't type any values.

### Your info

| # | Question (what the customer sees) | Tally block | Required | Options / placeholder |
|---|---|---|---|---|
| 1 | Name | Short answer | Yes | Your name |
| 2 | Phone | Phone number | No | (305) 000-0000 |
| 3 | Email | Email | Yes | you@email.com |
| 4 | How should we reach you? | Dropdown | No | `Text` · `Call` · `Email` · `Instagram DM` |

### The garment

| # | Question | Tally block | Required | Options / placeholder |
|---|---|---|---|---|
| 5 | In a few words, what are we making? | Short answer | Yes | e.g. Black vest with name + 2 patches |
| 6 | Are you bringing your own item, or do you want us to supply it? | Dropdown | Yes | `I’ll bring my own` · `One Luv supplies it` · `Not sure yet` |
| 7 | What are we customizing? | Dropdown | No | `T-Shirt` · `Hoodie / Sweatshirt` · `Sleeveless Hoodie` · `Vest / Workwear` · `Jacket` · `Hat / Headwear` · `Raingear` · `Other Apparel` · `Not Sure Yet` |
| 8 | Garment color & style | Short answer | No | e.g. Black, Navy, White |
| 9 | Size(s) | Checkboxes | No | `XS` · `S` · `M` · `L` · `XL` · `2XL` · `3XL` · `4XL` · `5XL` |
| 10 | Quantity | Number | No | How many pieces? |
| 11 | Mixed sizes? List how many of each | Long answer | No | e.g. 2 S, 4 M, 3 L |

**Heads-up on question 6:** Airtable's option uses a curly apostrophe (`I’ll`), not a straight one (`I'll`). Copy it from this page, or retype that Airtable choice with a straight apostrophe so both match.

### The design

| # | Question | Tally block | Required | Options / placeholder |
|---|---|---|---|---|
| 12 | What do you want added? | Checkboxes | No | `Name / Text` · `Patch` · `DTF Graphic / Print` · `Logo` · `Multiple Elements` · `Not Sure / Need Help` |
| 13 | Where do you want your design? | Checkboxes | No | `Front Center` · `Left Chest` · `Right Chest` · `Full Back` · `Upper Back` · `Left Sleeve` · `Right Sleeve` · `Other / Custom Placement` |
| 14 | Describe your idea | Long answer | Yes | The vibe, wording, meaning, colors — anything that helps |
| 15 | Exact names or text | Long answer | No | Type it exactly how it should appear, spelling and capitals included |
| 16 | Upload artwork or inspiration images | File upload | No | Allow multiple files |
| 17 | Got a link for inspiration? | Link | No | Instagram post, Pinterest, etc. |
| 18 | When do you need it by? | Date | No | |
| 19 | Pickup or delivery? | Dropdown | No | `Pickup in Miami` · `Delivery` · `Not sure yet` |
| 20 | Anything else we should know? | Long answer | No | |

### Before you send

| # | Question | Tally block | Required |
|---|---|---|---|
| 21 | I own this artwork or have permission to use it. | Checkbox | Yes |
| 22 | I understand this is a request for a quote, not a confirmed order. Nothing is made until I approve it. | Checkbox | Yes |

**Button text:** `Send My Idea`

**Thank-you page:** "Got it! We'll review your idea and send you a design preview and quote. Nothing is final until you approve it."

---

## Step 2 — Build "Plan Your Crew Order"

Duplicate the first form (⋯ → **Duplicate**), rename it **Plan Your Crew Order**, then trim it down to:

- Hidden fields: `status`  `intake_source`  `request_type` (keep all three)
- Your name *(Short answer, required, placeholder "Organizer name")*
- Phone
- Email *(required)*
- **Group or organization name** *(Short answer, placeholder "e.g. Metro Ground Crew, Ramirez Family Reunion")*
- In a few words, what are we making? *(required)*
- Estimated quantity *(Number, placeholder "How many people?")*
- Garment type *(same dropdown as question 7)*
- Design idea *(Long answer, required, placeholder "Tell us about your crew, what you want on the gear, any colors or logos to include.")*
- Upload artwork *(File upload)*: for company logos your team is approved to use
- Needed by *(Date)*
- The two confirmation checkboxes (21 and 22)

**Button text:** `Plan My Crew Order`

**Thank-you page:** "Got it! We'll put together a design preview and a quote for your crew. Nothing moves forward until you approve it."

---

## Step 3 — Connect each form to Airtable

In each form: **Integrations** → **Airtable** → **Connect**, then pick base **One Love World Creation CRM**, table **Orders**, and map:

| Tally question | Airtable column |
|---|---|
| Name / Your name | New Customers |
| Phone | Customer Phone |
| Email | Customer Email |
| How should we reach you? | Preferred Contact Method |
| In a few words, what are we making? | Quick Project Summary |
| Bringing your own or supply it? | Garment Source |
| What are we customizing? / Garment type | Garment Type |
| Garment color & style | Garment Color / Style |
| Size(s) | Size(s) |
| Quantity / Estimated quantity | Quantity Requested |
| Mixed sizes? | Size Quantity Breakdown / Notes |
| What do you want added? | Customization Types |
| Where do you want your design? | Print / Placement |
| Describe your idea / Design idea | Design Brief |
| Exact names or text | Exact Text / Names |
| Upload artwork | Artwork / Reference Files |
| Inspiration link | Reference / Inspiration Link |
| When do you need it by? / Needed by | Needed By |
| Pickup or delivery? | Delivery Method |
| Anything else? | Special Instructions |
| Group or organization name *(crew form)* | Organization / Team Name |
| Artwork permission checkbox | Artwork Rights Confirmation |
| Quote acknowledgment checkbox | Quote & Timeline Acknowledgment |
| `status` (hidden) | Status |
| `intake_source` (hidden) | Intake Source |
| `request_type` (hidden) | Request Type |

**Submitted At** fills in automatically in Airtable, so there's no need to map a date.

What the website sends in the hidden fields:

| Form | status | intake_source | request_type |
|---|---|---|---|
| Start Your Order | Inquiry | Website Form | Single Custom Piece |
| Plan Your Crew Order | Inquiry | Website Form | Group / Bulk Order |

---

## Step 4 — Put the forms on the site

1. In Tally, **Publish** each form, then copy its ID from the share link: `tally.so/r/`**`wAbC12`**.
2. Paste each ID into `data-tally-id=""`:
   - Start Your Order → `start-an-order/index.html`
   - Plan Your Crew Order → `group-orders/index.html`

   Or send both IDs to Claude and it'll do this step.
3. Once the change is merged to `main`, Cloudflare Pages redeploys and the real forms replace the question outlines.

## Step 5 — Test

Submit one test order through each form on the live site, then check the Orders table:

- Every answer landed in the right column
- Status = Inquiry, Intake Source = Website Form, Request Type is set
- The uploaded file shows up in Artwork / Reference Files

Delete the two test rows when you're done.
