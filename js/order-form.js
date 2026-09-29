// One Luv order form: builds the 4-step form into every .order-form on the page
// and sends it to /api/order (functions/api/order.js), which saves it to Airtable.
import { STEPS, FIELDS, MAX_FILES, MAX_FILE_BYTES, checkField, isShown } from "./order-schema.js";

const PRESETS = {
  group: { requestType: "Group / Bulk Order" },
};

let uid = 0;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function fmtSize(b) {
  return b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`;
}

function today() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function fieldHTML(f, id) {
  const hint = f.hint ? `<span class="of-hint" id="${id}-hint">${esc(f.hint)}</span>` : "";
  const req = f.required ? ` <span class="of-req" aria-hidden="true">*</span>` : "";
  const described = `aria-describedby="${f.hint ? id + "-hint " : ""}${id}-err"`;
  const err = `<p class="of-err" id="${id}-err"></p>`;

  if (f.type === "radio" || f.type === "checkbox") {
    const chips = f.choices.map((c, i) => `
      <label class="chip"><input type="${f.type}" name="${f.name}" value="${esc(c)}" id="${id}-${i}"><span>${esc(c)}</span></label>`).join("");
    return `<fieldset class="of-field of-choices" data-name="${f.name}" ${described}>
      <legend class="of-label">${esc(f.label)}${req}</legend>${hint}
      <div class="chips">${chips}</div>${err}</fieldset>`;
  }
  if (f.type === "agree") {
    return `<div class="of-field" data-name="${f.name}">
      <label class="of-agree"><input type="checkbox" name="${f.name}" id="${id}" ${described}><span>${esc(f.label)}</span></label>${err}</div>`;
  }
  if (f.type === "file") {
    return `<div class="of-field" data-name="${f.name}">
      <span class="of-label" id="${id}-label">${esc(f.label)}</span>${hint}
      <label class="of-drop" for="${id}">
        <input type="file" id="${id}" multiple accept="image/*,.pdf,.ai,.eps,.svg,.psd" ${described}>
        <strong>Choose files</strong> <span>or drop them here</span>
      </label>
      <ul class="of-files"></ul>${err}</div>`;
  }
  const attrs = [
    `id="${id}"`, `name="${f.name}"`, described,
    f.required ? "required" : "",
    f.max && f.type !== "number" ? `maxlength="${f.max}"` : "",
    f.type === "number" ? `min="${f.min ?? 0}" max="${f.max}" inputmode="numeric"` : "",
    f.type === "date" ? `min="${today()}"` : "",
    f.autocomplete ? `autocomplete="${f.autocomplete}"` : "",
  ].join(" ");
  const control = f.type === "textarea"
    ? `<textarea ${attrs} rows="${f.name === "brief" ? 5 : 3}"></textarea>`
    : `<input type="${f.type}" ${attrs}>`;
  return `<div class="of-field" data-name="${f.name}">
    <label class="of-label" for="${id}">${esc(f.label)}${req}</label>${hint}${control}${err}</div>`;
}

function build(root) {
  const id = `of${++uid}`;
  const preset = PRESETS[root.dataset.preset] || {};
  root.innerHTML = `
    <form class="of" novalidate>
      <ol class="of-progress">${STEPS.map((s, i) => `<li data-step="${i}"><span class="of-dot">${i + 1}</span><span class="of-step-name">${esc(s.title)}</span></li>`).join("")}</ol>
      ${STEPS.map((s, i) => `
        <fieldset class="of-step" data-step="${i}" ${i ? "hidden" : ""}>
          <legend class="of-step-title"><span class="of-count">Step ${i + 1} of ${STEPS.length}</span>${esc(s.title)}</legend>
          ${s.fields.map((f) => fieldHTML(f, `${id}-${f.name}`)).join("")}
        </fieldset>`).join("")}
      <div class="of-hp" aria-hidden="true"><label>Website <input name="website" tabindex="-1" autocomplete="off"></label></div>
      <p class="of-status" role="status" aria-live="polite"></p>
      <div class="of-nav">
        <button type="button" class="btn btn-ghost" data-back hidden>Back</button>
        <button type="button" class="btn btn-primary" data-next>Next</button>
        <button type="submit" class="btn btn-primary" data-submit hidden>Send my request</button>
      </div>
    </form>
    <div class="of-done" hidden tabindex="-1"></div>`;

  const form = root.querySelector("form");
  const steps = [...form.querySelectorAll(".of-step")];
  const dots = [...form.querySelectorAll(".of-progress li")];
  const status = form.querySelector(".of-status");
  const btnBack = form.querySelector("[data-back]");
  const btnNext = form.querySelector("[data-next]");
  const btnSubmit = form.querySelector("[data-submit]");
  const fileInput = form.querySelector('input[type="file"]');
  const fileList = form.querySelector(".of-files");
  let files = [];
  let step = 0;

  for (const [name, value] of Object.entries(preset)) {
    const el = form.querySelector(`[name="${name}"][value="${CSS.escape(value)}"]`);
    if (el) el.checked = true;
  }

  const values = () => {
    const v = {};
    for (const f of FIELDS) {
      if (f.type === "file") continue;
      if (f.type === "checkbox") v[f.name] = [...form.querySelectorAll(`[name="${f.name}"]:checked`)].map((e) => e.value);
      else if (f.type === "radio") v[f.name] = form.querySelector(`[name="${f.name}"]:checked`)?.value || "";
      else if (f.type === "agree") v[f.name] = form.querySelector(`[name="${f.name}"]`).checked;
      else v[f.name] = form.querySelector(`[name="${f.name}"]`).value.trim();
    }
    return v;
  };

  const wrap = (name) => form.querySelector(`.of-field[data-name="${name}"]`);

  function applyVisibility() {
    const v = values();
    for (const f of FIELDS) wrap(f.name).hidden = !isShown(f, v);
  }

  function setError(name, msg) {
    const w = wrap(name);
    w.classList.toggle("has-error", !!msg);
    w.querySelector(".of-err").textContent = msg || "";
  }

  function validateStep(i) {
    const v = values();
    let first = null;
    for (const f of STEPS[i].fields) {
      const msg = checkField(f, v);
      setError(f.name, msg);
      if (msg && !first) first = f.name;
    }
    if (i === STEPS.findIndex((s) => s.fields.some((f) => f.type === "file"))) {
      const msg = fileError();
      setError("files", msg);
      if (msg && !first) first = "files";
    }
    return first;
  }

  function fileError() {
    if (files.length > MAX_FILES) return `Up to ${MAX_FILES} files. Remove a few.`;
    if (files.some((f) => f.size > MAX_FILE_BYTES)) return "Each file has to be under 5 MB.";
    return "";
  }

  function focusField(name) {
    const w = wrap(name);
    (w.querySelector("input, textarea") || w).focus({ preventScroll: true });
    w.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function go(i) {
    step = i;
    steps.forEach((s, n) => (s.hidden = n !== i));
    dots.forEach((d, n) => {
      d.classList.toggle("is-current", n === i);
      d.classList.toggle("is-done", n < i);
      if (n === i) d.setAttribute("aria-current", "step"); else d.removeAttribute("aria-current");
    });
    btnBack.hidden = i === 0;
    btnNext.hidden = i === STEPS.length - 1;
    btnSubmit.hidden = i !== STEPS.length - 1;
    status.textContent = "";
    applyVisibility();
  }

  function scrollToForm() {
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderFiles() {
    fileList.innerHTML = files.map((f, i) => `
      <li><span class="of-file-name">${esc(f.name)}</span>
      <span class="of-file-size">${fmtSize(f.size)}</span>
      <button type="button" class="of-file-x" data-i="${i}" aria-label="Remove ${esc(f.name)}">Remove</button></li>`).join("");
    setError("files", fileError());
  }

  function addFiles(list) {
    files = files.concat([...list]);
    renderFiles();
  }

  fileInput.addEventListener("change", () => { addFiles(fileInput.files); fileInput.value = ""; });
  fileList.addEventListener("click", (e) => {
    const b = e.target.closest(".of-file-x");
    if (!b) return;
    files.splice(Number(b.dataset.i), 1);
    renderFiles();
  });
  const drop = form.querySelector(".of-drop");
  ["dragenter", "dragover"].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add("is-over"); }));
  ["dragleave", "drop"].forEach((t) => drop.addEventListener(t, () => drop.classList.remove("is-over")));
  drop.addEventListener("drop", (e) => { e.preventDefault(); if (e.dataTransfer?.files) addFiles(e.dataTransfer.files); });

  form.addEventListener("input", (e) => {
    applyVisibility();
    const w = e.target.closest(".of-field");
    if (w && w.classList.contains("has-error")) setError(w.dataset.name, checkField(FIELDS.find((f) => f.name === w.dataset.name), values()));
  });

  btnNext.addEventListener("click", () => {
    const bad = validateStep(step);
    if (bad) return focusField(bad);
    go(step + 1);
    scrollToForm();
  });
  btnBack.addEventListener("click", () => { go(step - 1); scrollToForm(); });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    for (let i = 0; i < STEPS.length; i++) {
      const bad = validateStep(i);
      if (bad) { go(i); return focusField(bad); }
    }
    const fd = new FormData(form);
    fd.delete("files");
    files.forEach((f) => fd.append("files", f, f.name));

    btnSubmit.disabled = true;
    btnSubmit.textContent = files.length ? "Sending your files…" : "Sending…";
    status.textContent = "";
    try {
      const res = await fetch("/api/order", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) return done(values().name, data);
      if (data.errors) {
        Object.entries(data.errors).forEach(([k, m]) => setError(k, m));
        const i = STEPS.findIndex((s) => s.fields.some((f) => data.errors[f.name]));
        if (i >= 0) { go(i); focusField(Object.keys(data.errors).find((k) => STEPS[i].fields.some((f) => f.name === k))); }
      }
      status.textContent = data.message || "We couldn't send your request. Please try again.";
    } catch {
      status.textContent = "We couldn't reach the shop. Check your connection and try again.";
    } finally {
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Send my request";
    }
  });

  function done(name, data) {
    const first = esc((name || "").split(/\s+/)[0]);
    const missed = data.filesSent && data.filesSaved < data.filesSent
      ? `<p class="of-note">Some of your files didn't come through. Text or DM them to us and mention your name.</p>` : "";
    const panel = root.querySelector(".of-done");
    panel.innerHTML = `
      <span class="eyebrow">Request received</span>
      <h3>Got it${first ? `, ${first}` : ""}!</h3>
      <p>We'll review your idea and send you a design preview and quote. Nothing is final until you approve it.</p>
      ${missed}
      <a class="btn btn-ghost" href="/">Back to home</a>`;
    form.hidden = true;
    panel.hidden = false;
    panel.focus();
    scrollToForm();
  }

  go(0);
}

document.querySelectorAll(".order-form").forEach(build);
