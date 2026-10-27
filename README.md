# PARIS Lab website

Website of the **PARIS Lab** (Physical AI, Robotics, and Intelligent Systems) at North Carolina State University, served by GitHub Pages at https://parislab.github.io.

It is a static site with no build step.

```
index.html              Home: hero, intro, featured work, latest news, join banner
research.html           Research directions + project videos (Mem4Act, TIC-VLA, AutoVLA, nuReasoning)
publications.html       Selected papers + other recent papers
people.html             Director + student cards (placeholders for now)
facilities.html         Lab equipment (i2RT ABC Box)
news.html               Full news list
join.html               Join us / prospective students
assets/js/layout.js     Shared header, footer, and logo, inserted on every page (edit the nav here)
assets/js/main.js       Theme toggle, mobile menu, autoplay-in-view videos, tabs, photo gallery
assets/css/style.css    Styles (light + dark theme tokens at the top)
assets/img/             Logo, posters, publication thumbnails, people and facility photos
assets/videos/          Compressed project clips (H.264, about 1–5 MB each)
```

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Common edits

- **News:** add an `<li>` at the top of the list in `news.html`. The home page shows the latest four, so update `index.html` too.
- **New student:** in `people.html`, replace a placeholder card with the template in the HTML comment above the cards, and put a square photo in `assets/img/people/`.
- **Publication:** in `publications.html`, copy an `<article class="card pub">` block (with a 16:10 thumbnail in `assets/img/pubs/`) or an `<li>` in the "Other recent papers" list.
- **New page or nav link:** create the page from an existing one (keep `<body data-page="...">` and the `layout.js` script tag), then add it to the `NAV` list in `assets/js/layout.js`.
- **Logo changes:** edit `assets/img/logo-mark.svg`. The header and footer copy lives in the `symbol` string in `assets/js/layout.js`, so update that too.
- **Videos:** compress before adding, for example:

  ```bash
  ffmpeg -i input.mp4 -t 20 -an -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart assets/videos/name.mp4
  ```

## Logo

- `assets/img/logo-mark.svg`: a Paris skyline made of robots (robot arm, humanoid, Eiffel Tower, robot dog, and autonomous car)
- `assets/img/logo-icon.svg`: compact icon (white Eiffel Tower with sensing arcs on red), used for the favicon
- `assets/img/logo-full.png`: skyline plus wordmark (1200×630, also the social preview image)
- `assets/img/logo-icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`: icon sizes

Facility product images are from [I2RT Robotics](https://i2rt.com/products/abc-box).
