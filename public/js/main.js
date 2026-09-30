// One Luv — nav toggle and ticker loop. The order form lives in order-form.js.
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
})();
