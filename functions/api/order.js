// POST /api/order — called from src/worker.js.
// Validates the order form and creates a record in the Airtable Orders table,
// then uploads any artwork files to that record.
//
// Needs one secret on the Worker (Settings → Variables and Secrets):
//   AIRTABLE_TOKEN  a personal access token with data.records:write on the CRM base.

import {
  AIRTABLE, FIELDS, SYSTEM_FIELDS, MAX_FILES, MAX_FILE_BYTES, checkField, isShown, summarize,
} from "../../public/js/order-schema.js";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

export async function onRequestPost({ request, env }) {
  if (!env.AIRTABLE_TOKEN) {
    return json({ ok: false, message: "The order form isn't connected yet." }, 503);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, message: "We couldn't read that submission." }, 400);
  }

  // Bots fill the hidden "website" field; people never see it.
  if (form.get("website")) return json({ ok: true });

  const values = {};
  for (const f of FIELDS) {
    if (f.type === "file") continue;
    if (f.type === "checkbox") values[f.name] = form.getAll(f.name).map(String);
    else if (f.type === "agree") values[f.name] = form.get(f.name) === "on";
    else values[f.name] = String(form.get(f.name) ?? "").trim();
  }

  const errors = {};
  for (const f of FIELDS) {
    const msg = checkField(f, values);
    if (msg) errors[f.name] = msg;
  }

  const files = form.getAll("files").filter((x) => typeof x === "object" && x.size > 0);
  if (files.length > MAX_FILES) errors.files = `Up to ${MAX_FILES} files.`;
  else if (files.some((x) => x.size > MAX_FILE_BYTES)) errors.files = "Each file has to be under 5 MB.";

  if (Object.keys(errors).length) {
    return json({ ok: false, message: "A few answers need a look.", errors }, 422);
  }

  const fields = {
    [SYSTEM_FIELDS.status.field]: SYSTEM_FIELDS.status.value,
    [SYSTEM_FIELDS.intakeSource.field]: SYSTEM_FIELDS.intakeSource.value,
    [SYSTEM_FIELDS.orderDate]: new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" }),
    [SYSTEM_FIELDS.summary]: summarize(values),
  };
  for (const f of FIELDS) {
    if (f.type === "file" || !isShown(f, values)) continue;
    const v = values[f.name];
    if (v === "" || (Array.isArray(v) && !v.length)) continue;
    fields[f.field] = f.type === "number" ? Number(v) : v;
  }

  const auth = { authorization: `Bearer ${env.AIRTABLE_TOKEN}` };
  const created = await fetch(`https://api.airtable.com/v0/${AIRTABLE.baseId}/${AIRTABLE.tableId}`, {
    method: "POST",
    headers: { ...auth, "content-type": "application/json" },
    body: JSON.stringify({ records: [{ fields }] }),
  });
  if (!created.ok) {
    console.log("Airtable create failed", created.status, await created.text());
    return json({ ok: false, message: "Something went wrong on our side. Please try again in a minute." }, 502);
  }
  const recordId = (await created.json()).records[0].id;

  // The order is saved at this point; a failed upload shouldn't lose it.
  const attachField = FIELDS.find((f) => f.type === "file").field;
  let filesSaved = 0;
  for (const file of files) {
    const res = await fetch(
      `https://content.airtable.com/v0/${AIRTABLE.baseId}/${recordId}/${attachField}/uploadAttachment`,
      {
        method: "POST",
        headers: { ...auth, "content-type": "application/json" },
        body: JSON.stringify({
          contentType: file.type || "application/octet-stream",
          filename: file.name || "upload",
          file: toBase64(await file.arrayBuffer()),
        }),
      },
    );
    if (res.ok) filesSaved++;
    else console.log("Airtable upload failed", res.status, await res.text());
  }

  return json({ ok: true, filesSaved, filesSent: files.length });
}

function toBase64(buf) {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}
