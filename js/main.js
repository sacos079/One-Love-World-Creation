(function () {
  // Mobile nav: full-screen menu, closes on link tap or Escape
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  function setNav(open) {
    header.classList.toggle('nav-open', open);
    document.documentElement.classList.toggle('nav-lock', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      setNav(!header.classList.contains('nav-open'));
    });
    header.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { setNav(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) setNav(false);
    });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) {
      if (m.matches) setNav(false);
    });
  }

  // Ticker: duplicate content so the loop is seamless
  var track = document.querySelector('.ticker-track');
  if (track) track.innerHTML += track.innerHTML;

  // Tally embed: load iframes, or show a setup note until a real form ID is set
  var frames = document.querySelectorAll('iframe[data-tally-src]');
  var live = 0;
  frames.forEach(function (f) {
    var src = f.getAttribute('data-tally-src');
    if (src.indexOf('REPLACE_WITH_FORM_ID') !== -1) {
      f.hidden = true;
      var note = f.parentNode.querySelector('.form-setup-note');
      if (note) note.hidden = false;
    } else {
      f.src = src;
      live++;
    }
  });
  if (live && !document.getElementById('tally-js')) {
    var s = document.createElement('script');
    s.id = 'tally-js';
    s.src = 'https://tally.so/widgets/embed.js';
    document.body.appendChild(s);
  }
})();
