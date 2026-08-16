/* codelif.in — two small things, both optional.
   1. the [--dark] flag in the nav
   2. the footer date, which is a man page's last-modified field, so it
      shows when this person last actually did something.
   Neither is load-bearing: with JS off the page is complete and the footer
   simply shows the build date. */

(function () {
  'use strict';

  var root = document.documentElement;

  /* ---- theme ---------------------------------------------------------- */

  var btn = document.getElementById('theme-toggle');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function effective() {
    var set = root.getAttribute('data-theme');
    if (set === 'dark' || set === 'light') return set;
    return media.matches ? 'dark' : 'light';
  }

  function label() {
    if (!btn) return;
    var next = effective() === 'dark' ? 'light' : 'dark';
    btn.textContent = '[--' + next + ']';
    btn.setAttribute('title', 'switch to ' + next + ' theme');
  }

  if (btn) {
    label();
    btn.addEventListener('click', function () {
      var next = effective() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
      label();
    });
  }

  /* Follow the system while no explicit choice has been stored. */
  var onSystemChange = function () {
    if (!root.getAttribute('data-theme')) label();
  };
  if (media.addEventListener) media.addEventListener('change', onSystemChange);
  else if (media.addListener) media.addListener(onSystemChange);

  /* ---- last activity --------------------------------------------------- */

  var el = document.getElementById('lastmod');
  if (!el) return;

  var KEY = 'lastmod:codelif';

  function paint(data) {
    if (!data || !data.date) return;
    el.textContent = data.date;
    el.setAttribute('datetime', data.date);
    if (data.what) el.setAttribute('title', data.what);
  }

  try {
    var hit = sessionStorage.getItem(KEY);
    if (hit) { paint(JSON.parse(hit)); return; }
  } catch (e) { /* keep going; the fetch below is the fallback */ }

  fetch('https://api.github.com/users/codelif/events/public?per_page=1', {
    headers: { Accept: 'application/vnd.github+json' }
  })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (events) {
      var e = events && events[0];
      if (!e || !e.created_at) return;
      var data = {
        date: e.created_at.slice(0, 10),
        what: 'last public activity: ' +
              String(e.type || 'event').replace(/Event$/, '') +
              ' on ' + (e.repo && e.repo.name ? e.repo.name : 'github')
      };
      paint(data);
      try { sessionStorage.setItem(KEY, JSON.stringify(data)); } catch (err) { /* ignore */ }
    })
    .catch(function () {
      /* Rate limited, offline, or GitHub is having a day. The build date
         that is already in the DOM stays, and nobody notices. */
    });
})();
