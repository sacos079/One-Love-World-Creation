// One Luv — nav toggle, ticker loop, Tally embeds.
(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.hidden = open;
    });
  }

  // Ticker: duplicate the list once so the CSS loop is seamless.
  document.querySelectorAll(".ticker-track").forEach(function (track) {
    var list = track.querySelector("ul");
    if (!list) return;
    var copy = list.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
  });

  // Tally embeds. Set data-tally-id on a .form-embed to go live;
  // until then the field outline inside .form-pending stays visible.
  var embeds = document.querySelectorAll(".form-embed[data-tally-id]");
  var live = [];
  embeds.forEach(function (el) {
    var id = (el.getAttribute("data-tally-id") || "").trim();
    if (!id) return;
    // Hidden-field values Tally passes to Airtable (Status, Intake Source, Request Type).
    var hidden = (el.getAttribute("data-tally-hidden") || "").trim();
    var iframe = document.createElement("iframe");
    iframe.className = "tally-frame";
    iframe.title = el.getAttribute("data-title") || "Order form";
    iframe.loading = "lazy";
    iframe.setAttribute("data-tally-src",
      "https://tally.so/embed/" + encodeURIComponent(id) +
      "?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" +
      (hidden ? "&" + hidden : ""));
    el.innerHTML = "";
    el.appendChild(iframe);
    live.push(iframe);
  });

  if (live.length) {
    var s = document.createElement("script");
    s.src = "https://tally.so/widgets/embed.js";
    s.onload = function () { if (window.Tally) window.Tally.loadEmbeds(); };
    s.onerror = function () {
      live.forEach(function (f) { f.src = f.getAttribute("data-tally-src"); });
    };
    document.body.appendChild(s);
  }
})();
