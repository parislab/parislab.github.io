// Shared site chrome: logo symbol, header and footer.
// Edit the navigation here once and it updates on every page.
// Each page sets <body data-page="..."> to highlight its nav link.
(function () {
  var NAV = [
    ['index.html', 'Home', 'home'],
    ['research.html', 'Research', 'research'],
    ['publications.html', 'Publications', 'publications'],
    ['people.html', 'People', 'people'],
    ['facilities.html', 'Facilities', 'facilities'],
    ['news.html', 'News', 'news']
  ];
  var page = document.body.getAttribute('data-page') || '';

  var symbol =
    '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
    '<symbol id="logo" viewBox="0 0 240 120">' +
    '<path d="M4 106 H236" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>' +
    '<g>' +
    '<rect x="9" y="98" width="30" height="8" rx="2" fill="currentColor"/>' +
    '<rect x="17" y="88" width="14" height="11" rx="2" fill="currentColor"/>' +
    '<path d="M24 88 L14 58 L42 40" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M42 40 L46 50" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>' +
    '<path d="M42.5 52 L40 60 M49.5 50 L51 58.5" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>' +
    '<path d="M40.5 52.5 L50.5 49" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/>' +
    '<g fill="#CC0000"><circle cx="24" cy="88" r="4.6"/><circle cx="14" cy="58" r="4.6"/><circle cx="42" cy="40" r="4"/></g>' +
    '</g>' +
    '<g fill="currentColor">' +
    '<rect x="64" y="40" width="15" height="14" rx="5"/>' +
    '<rect x="66.5" y="44.5" width="10" height="4" rx="2" fill="#CC0000"/>' +
    '<rect x="69.5" y="54" width="4" height="3"/>' +
    '<path d="M62 58 Q62 56.5 64 56.5 L79 56.5 Q81 56.5 81 58 L80 80 L63 80 Z"/>' +
    '<path d="M60 59 L55.5 79" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M83 59 L87.5 79" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M66.5 82 L65.5 104 M76.5 82 L77.5 104" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>' +
    '<rect x="62" y="102" width="8" height="4" rx="1.5"/><rect x="73" y="102" width="8" height="4" rx="1.5"/>' +
    '<circle cx="71.5" cy="68" r="3" fill="#CC0000"/>' +
    '</g>' +
    '<g fill="#CC0000">' +
    '<rect x="119" y="2" width="2" height="9" rx="1"/>' +
    '<path d="M117.2 26 L119 11 L121 11 L122.8 26 Z"/>' +
    '<rect x="115" y="25" width="10" height="3" rx="1"/>' +
    '<path fill-rule="evenodd" d="M113.2 56 L116.2 28 L123.8 28 L126.8 56 Z M118.4 52 L119.4 36 L120.6 36 L121.6 52 Z"/>' +
    '<rect x="109" y="55" width="22" height="4" rx="1.2"/>' +
    '<path d="M94 106 C102 98 108 82 110.5 59 L129.5 59 C132 82 138 98 146 106 L136.5 106 C133.5 95 127.5 89 120 89 C112.5 89 106.5 95 103.5 106 Z"/>' +
    '<rect x="104" y="72" width="32" height="3.6" rx="1.2"/>' +
    '</g>' +
    '<g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
    '<path d="M113 1.5 A9 9 0 0 0 113 12.5"/><path d="M127 1.5 A9 9 0 0 1 127 12.5"/>' +
    '</g>' +
    '<g fill="currentColor">' +
    '<rect x="152" y="74" width="34" height="12" rx="5"/>' +
    '<path d="M184 76 L188 66 Q189 64 191 64 L198 64 Q200 64 200 66 L200 71 Q200 73 198 73 L191 73 L188 80 Z"/>' +
    '<rect x="193" y="66.5" width="5" height="3" rx="1.5" fill="#CC0000"/>' +
    '<rect x="162" y="70.5" width="9" height="4" rx="1.5"/>' +
    '</g>' +
    '<g fill="none" stroke="currentColor" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M158 85 L152 95 L157 104"/>' +
    '<path d="M165 85 L160 95 L165 104"/>' +
    '<path d="M176 85 L170 95 L175 104"/>' +
    '<path d="M183 85 L177 95 L182 104"/>' +
    '</g>' +
    '<g fill="#CC0000"><circle cx="152" cy="95" r="2.4"/><circle cx="170" cy="95" r="2.4"/></g>' +
    '<g>' +
    '<path d="M200 103 L200 95 Q200 91 204 90.5 L210 89.6 L216.5 83 Q218 81.6 220.5 81.6 L228.5 81.6 Q231 81.6 232.4 83.6 L236.6 89.6 Q238.5 90.5 238.5 93 L238.5 103 Z" fill="currentColor"/>' +
    '<path d="M213 89.4 L218 84.6 Q218.8 84 220 84 L224 84 L224 89.4 Z M226.4 89.4 L226.4 84 L228.4 84 Q229.6 84 230.2 84.8 L233.4 89.4 Z" style="fill:var(--logo-bg,#fff)"/>' +
    '<rect x="221.5" y="77.6" width="6" height="4" rx="1.4" fill="#CC0000"/>' +
    '<path d="M216.5 75 A9 9 0 0 1 232.5 75" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>' +
    '<path d="M212.5 71.5 A14 14 0 0 1 236.5 71.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" opacity=".4"/>' +
    '<circle cx="209" cy="103" r="5.2" fill="currentColor"/><circle cx="231" cy="103" r="5.2" fill="currentColor"/>' +
    '<circle cx="209" cy="103" r="2" style="fill:var(--logo-bg,#fff)"/><circle cx="231" cy="103" r="2" style="fill:var(--logo-bg,#fff)"/>' +
    '<rect x="235.4" y="93" width="3.2" height="2.6" rx="1" fill="#FF5A5A"/>' +
    '</g>' +
    '</symbol></svg>';

  var links = NAV.map(function (n) {
    return '<a href="' + n[0] + '"' + (n[2] === page ? ' class="active" aria-current="page"' : '') + '>' + n[1] + '</a>';
  }).join('');

  var header =
    '<header class="site-header"><div class="wrap">' +
      '<a class="brand" href="index.html" aria-label="PARIS Lab home">' +
        '<svg class="brand-mark" aria-hidden="true"><use href="#logo"/></svg>' +
        '<span class="brand-text"><span class="brand-name">PARIS <span>Lab</span></span>' +
        '<span class="brand-sub">NC State University</span></span>' +
      '</a>' +
      '<nav class="nav" aria-label="Main">' + links +
        '<a href="join.html" class="nav-cta' + (page === 'join' ? ' active' : '') + '">Join Us</a>' +
      '</nav>' +
      '<button class="theme-toggle" type="button" aria-label="Toggle dark mode">' +
        '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
        '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v2.5M12 20v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M1.5 12H4M20 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>' +
      '</button>' +
      '<button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      '</button>' +
    '</div></header>';

  var footer =
    '<footer class="site-footer"><div class="wrap">' +
      '<div class="foot-grid">' +
        '<div>' +
          '<div class="foot-brand">' +
            '<div class="brand-mark-wrap"><svg style="width:100%;height:100%" aria-hidden="true"><use href="#logo"/></svg></div>' +
            '<div class="brand-text"><span class="brand-name">PARIS <span style="color:#ff5a5a">Lab</span></span>' +
            '<span class="brand-sub" style="color:rgba(255,255,255,.55)">Physical AI, Robotics, and Intelligent Systems</span></div>' +
          '</div>' +
          '<p>Building physical intelligent agents that perceive, reason, and act in the real world.</p>' +
        '</div>' +
        '<div><h4>Contact</h4><p>Prof. Zhiyu Huang<br>North Carolina State University<br>Raleigh, NC<br><a href="mailto:zhuang46@ncsu.edu">zhuang46@ncsu.edu</a></p></div>' +
        '<div><h4>Explore</h4><p><a href="research.html">Research</a><br><a href="publications.html">Publications</a><br><a href="people.html">People</a><br><a href="facilities.html">Facilities</a><br><a href="join.html">Join us</a></p></div>' +
      '</div>' +
      '<div class="foot-bottom">&copy; ' + new Date().getFullYear() + ' PARIS Lab, North Carolina State University.</div>' +
    '</div></footer>';

  var here = document.currentScript;
  here.insertAdjacentHTML('beforebegin', symbol + header);
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', footer);
  });
})();
