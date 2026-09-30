// One Luv — nav toggle and the home page marquee. The order form lives in order-form.js.
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

  // Marquee: double each lane's list so the CSS loop is seamless, then start the motion.
  var marquee = document.querySelector(".marquee");
  if (marquee) {
    marquee.querySelectorAll(".track").forEach(function (track) {
      var list = track.querySelector("ul");
      if (!list) return;
      var copy = list.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      track.appendChild(copy);
    });
    marquee.classList.add("is-live");

    var pause = marquee.querySelector(".mq-toggle");
    if (pause) {
      pause.addEventListener("click", function () {
        var paused = marquee.classList.toggle("is-paused");
        pause.setAttribute("aria-pressed", String(paused));
        pause.textContent = paused ? "Play" : "Pause";
      });
    }
  }
})();
