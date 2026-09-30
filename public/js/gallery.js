// Gallery: filter the tiles by category.
(function () {
  var grid = document.getElementById("gallery");
  if (!grid) return;
  var buttons = document.querySelectorAll(".filter");
  var shots = grid.querySelectorAll(".shot");
  var count = document.getElementById("gallery-count");

  function apply(cat) {
    var shown = 0;
    shots.forEach(function (s) {
      var show = cat === "all" || s.getAttribute("data-cat") === cat;
      s.hidden = !show;
      if (show) shown++;
    });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === cat));
    });
    if (count) count.textContent = cat === "all" ? "" : "Showing " + shown + " of " + shots.length;
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-filter")); });
  });
  apply("all");
})();
