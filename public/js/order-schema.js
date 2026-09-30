// One Luv order form: the questions, their choices and the Airtable field each one fills.
// Shared by the browser form (js/order-form.js) and the server (functions/api/order.js),
// so the choices here must match the Orders table's select options exactly.

export const AIRTABLE = {
  baseId: "appp0T951005KTDvW",
  tableId: "tblaXNtsuA9hiO0td", // Orders
};

export const MAX_FILES = 5;
export const MAX_FILE_BYTES = 5 * 1024 * 1024; // Airtable's per-file upload limit

const GROUP_TYPES = ["Group / Bulk Order", "Workwear / Team Order"];
const RIGHTS_TYPES = ["DTF Graphic / Print", "Patch", "Logo"];

// `when(values)` decides whether a question is shown. Hidden questions are never required or sent.
export const STEPS = [
  {
    title: "Let's make something",
    fields: [
      { name: "name", label: "Your name", type: "text", required: true, max: 100,
        field: "fld3K0SNC5gbhD1ZL", autocomplete: "name" },
      { name: "phone", label: "Best phone number", type: "tel", required: true, max: 30,
        field: "fldYmtYFS2m3QBc9h", autocomplete: "tel" },
      { name: "email", label: "Email", hint: "Optional", type: "email", max: 200,
        field: "fld0WkLawxnYLOJG1", autocomplete: "email" },
      { name: "contact", label: "How should we reach you?", type: "radio",
        field: "fld26OaHZ8BSnwfIP", choices: ["Text", "Call", "Email", "Instagram DM"] },
      { name: "requestType", label: "What kind of request is this?", type: "radio", required: true,
        field: "fldsVllFXoOySCOhO",
        choices: ["Single Custom Piece", "Group / Bulk Order", "Workwear / Team Order", "Need Help Deciding"] },
      { name: "org", label: "Who is this for?", hint: "Crew, team, family, club or business name", type: "text", max: 150,
        field: "fldalb33HpOao1uce", when: (v) => GROUP_TYPES.includes(v.requestType) },
    ],
  },
  {
    title: "Make it yours",
    fields: [
      { name: "customization", label: "What do you want added?", type: "checkbox", required: true,
        field: "fldxaEerIRWo8wO6k",
        choices: ["DTF Graphic / Print", "Patch", "Name / Text", "Logo", "Multiple Elements", "Not Sure / Need Help"] },
      { name: "exactText", label: "Exact wording, names or numbers", hint: "Spelling and capitalization exactly as you want them", type: "textarea", max: 2000,
        field: "fldHjgXw7oQLr5BBn", when: (v) => (v.customization || []).includes("Name / Text") },
      { name: "placement", label: "Where should it go?", type: "checkbox", required: true,
        field: "fldq1T1aMFLVkpQLH",
        choices: ["Front Center", "Left Chest", "Right Chest", "Full Back", "Upper Back", "Left Sleeve", "Right Sleeve", "Other / Custom Placement"] },
      { name: "colors", label: "Colors to use or avoid", hint: "Optional", type: "text", max: 200,
        field: "fldVIhJYcaLrlMUY5" },
      { name: "brief", label: "Tell us what you're imagining", hint: "The idea, the vibe, what it means to you", type: "textarea", required: true, max: 5000,
        field: "fldFOD0G9HcvzL1Aq" },
      { name: "files", label: "Upload anything that helps us see it", hint: `Logos, sketches, screenshots. Up to ${MAX_FILES} files, 5 MB each`, type: "file",
        field: "fldHXA5GSRVWg34LB" },
      { name: "refLink", label: "Or paste a link", hint: "Optional. Instagram post, Pinterest, anything", type: "url", max: 500,
        field: "fldRi2EutGaAXLIR6" },
    ],
  },
  {
    title: "Your piece",
    fields: [
      { name: "source", label: "Who's providing the garment?", type: "radio", required: true,
        field: "fldoG8JOSbpmJ6YA4", choices: ["I’ll bring my own", "One Luv supplies it"] },
      { name: "garment", label: "What are we customizing?", type: "radio", required: true,
        field: "fldt6Qkq0FwkaKFs0",
        choices: ["T-Shirt", "Hoodie / Sweatshirt", "Sleeveless Hoodie", "Vest / Workwear", "Jacket", "Hat / Headwear", "Raingear", "Other Apparel", "Not Sure Yet"] },
      { name: "garmentLook", label: "What should the garment look like?", hint: "Color, style, fit. e.g. black zip hoodie, oversized cream tee", type: "text", required: true, max: 200,
        field: "fldvujKlTHTwO4dFv" },
      { name: "sizes", label: "What sizes do you need?", hint: "e.g. 2 S, 4 M, 3 L", type: "textarea", required: true, max: 2000,
        field: "fld8Zt5M31Mmm7bxG",
        when: (v) => v.source === "One Luv supplies it" || v.requestType === "Workwear / Team Order" },
      { name: "qty", label: "How many pieces?", type: "number", required: true, min: 1, max: 5000,
        field: "fldQy33Ms4wSyVwhC" },
    ],
  },
  {
    title: "Timing & final check",
    fields: [
      { name: "neededBy", label: "When do you need it?", type: "date", required: true,
        field: "fldMwsk2u6d4WcnF4" },
      { name: "delivery", label: "Pickup or delivery?", type: "radio",
        field: "fldAmuaS3Dyre4jDL", choices: ["Pickup in Miami", "Delivery", "Not sure yet"] },
      { name: "notes", label: "Anything else we should know?", hint: "Optional", type: "textarea", max: 3000,
        field: "fldNzdSzAK6LrYE0U" },
      { name: "ackQuote", label: "I understand this is a request, not a final order. One Luv will confirm price and timing first.", type: "agree", required: true,
        field: "fldvI9fNtCxnMcTMD" },
      { name: "ackRights", label: "I own or have permission to use any artwork or logos I upload.", type: "agree", required: true,
        field: "fldNAYT6gal0DY797",
        when: (v) => (v.customization || []).some((c) => RIGHTS_TYPES.includes(c)) },
    ],
  },
];

export const FIELDS = STEPS.flatMap((s) => s.fields);

// Fields the shop fills in, not the customer.
export const SYSTEM_FIELDS = {
  status: { field: "fldKaaFlS1LixgDek", value: "Inquiry" },
  intakeSource: { field: "fldwMtVnTaQfDJQIG", value: "Website / 3D Configurator" },
  orderDate: "fldioI9CJyhvIw7EA",
  summary: "fldREwL2VvspvhqQI",
};

export function isShown(f, values) {
  return !f.when || f.when(values);
}

// Checks one field against its rules. Returns an error message or "".
export function checkField(f, values) {
  if (!isShown(f, values) || f.type === "file") return "";
  const v = values[f.name];
  const empty = v == null || v === "" || v === false || (Array.isArray(v) && v.length === 0);
  if (empty) {
    if (!f.required) return "";
    if (f.type === "agree") return "Check this box to continue.";
    if (f.type === "radio") return "Pick one.";
    if (f.type === "checkbox") return "Pick at least one.";
    return "This one's required.";
  }
  if (f.choices) {
    const list = Array.isArray(v) ? v : [v];
    if (!list.every((c) => f.choices.includes(c))) return "Pick from the options shown.";
  }
  if (typeof v === "string" && f.max && v.length > f.max) return `Keep it under ${f.max} characters.`;
  if (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "That email doesn't look right.";
  if (f.type === "tel" && v.replace(/\D/g, "").length < 7) return "Add the full phone number.";
  if (f.type === "url" && !/^https?:\/\/\S+$/i.test(v)) return "Links start with http:// or https://";
  if (f.type === "number") {
    const n = Number(v);
    if (!Number.isInteger(n) || n < (f.min ?? 0) || n > (f.max ?? Infinity)) return `Enter a whole number from ${f.min ?? 0} to ${f.max}.`;
  }
  if (f.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(v)) return "Pick a date.";
  return "";
}

// Short label for the Orders list, e.g. "3× Hoodie / Sweatshirt: Patch + Name / Text".
export function summarize(values) {
  const qty = values.qty ? `${values.qty}× ` : "";
  const adds = (values.customization || []).join(" + ");
  return `${qty}${values.garment || "Garment"}${adds ? `: ${adds}` : ""}`.slice(0, 250);
}
