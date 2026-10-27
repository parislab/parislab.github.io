(function () {
  var root = document.documentElement;

  // Theme toggle (remembers the visitor's choice)
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile menu
  var menuBtn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;

  // Fade sections in as they scroll into view
  var reveals = document.querySelectorAll('.reveal');
  if (hasIO && !reduceMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Autoplay muted clips only while visible (saves bandwidth and CPU)
  var clips = document.querySelectorAll('video[data-autoplay]');
  if (hasIO) {
    var vo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) {
          if (v.preload === 'none') v.preload = 'auto';
          if (!reduceMotion) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.25 });
    clips.forEach(function (v) { vo.observe(v); });
  }

  // Tabbed video panels (Mem4Act real-world tasks)
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    var video = group.querySelector('.tab-panel video');
    var instr = group.querySelector('.tab-panel .instr');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
        video.src = tab.dataset.src;
        video.poster = tab.dataset.poster || '';
        instr.innerHTML = '<b>Instruction:</b> ' + tab.dataset.instr;
        var p = video.play(); if (p && p.catch) p.catch(function () {});
      });
    });
  });

  // News: show more / less
  var newsBtn = document.querySelector('[data-news-toggle]');
  if (newsBtn) {
    newsBtn.addEventListener('click', function () {
      var list = document.querySelector('.news');
      var expanded = list.classList.toggle('expanded');
      newsBtn.textContent = expanded ? 'Show less' : 'Show all news';
    });
  }

  // Highlight the nav link for the section in view
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  if (hasIO && links.length) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.classList.remove('active'); });
          map[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) so.observe(s); });
  }

  // Facility photo gallery
  document.querySelectorAll('[data-gallery]').forEach(function (g) {
    var main = g.querySelector('.gallery-main img');
    var thumbs = g.querySelectorAll('.thumbs button');
    thumbs.forEach(function (b) {
      b.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.setAttribute('aria-pressed', t === b ? 'true' : 'false'); });
        main.src = b.dataset.full;
        main.alt = b.querySelector('img').alt;
      });
    });
  });
})();
