# Insights Page Design Spec
**Date:** 2026-03-18
**Project:** Third Peak Studio — `tps_website`
**Status:** Approved

---

## Overview

Add an Insights subpage to `tps_website` that consolidates content currently spread across `goodfutureai_website` — written articles, podcast appearances, and spotlights (TED Talk, Human Cloud book) — into a single filterable page. The `goodfutureai_website` is being abandoned; traffic will redirect to `thirdpeakstudio.com`.

---

## Goals

- Give Third Peak a thought-leadership home: articles, podcast appearances, and spotlights in one place
- Reuse GoodFutureAI layout patterns (card grid, filter bar, JS data rendering) rethemed to TPS branding
- Keep the URL scheme identical to GoodFutureAI so redirects are straightforward (`/insights/{slug}/`)
- Integrate podcast appearances into the insights grid (not a separate page) with type filtering

---

## File Structure

```
tps_website/
  insights/
    index.html                              ← listing page
    data.js                                 ← combined content data
    corporations-were-always-coordination-machines/
      index.html
    do-something-ai-isnt-strategy/
      index.html
    ai-no-code-promise/
      index.html
    personal-ai-revolution/
      index.html
    why-algorithms-develop-bias/
      index.html
  images/
    cover/                                  ← copied from goodfutureai_website
      corporations.jpg
      desert_mirage.png
      discrimination.jpg
      do_something.png
      homebrew.jpg
    ted_talk.jpg                            ← copied from goodfutureai_website
    human_cloud.png                         ← copied from goodfutureai_website
    human_cloud_amazon.png                  ← copied from goodfutureai_website
```

---

## Data Model — `insights/data.js`

Single JS file replacing both `data/insights.js` and `data/podcast.js` from GoodFutureAI.

### Entry shape

Each entry is a flat object. Fields used by multiple types are defined once; unused fields are `null`.

```js
{
  slug:        String | null,    // URL slug; null for podcast/spotlight (external link only)
  title:       String,
  date:        String,           // "YYYY-MM-DD" — used for sort order within type group
  tags:        String[],         // topic tags (see Tags section)
  type:        "article" | "podcast" | "spotlight",

  excerpt:     String,           // shown on card for all types

  // shared by article + spotlight
  coverImage:  String | null,    // path relative to insights/index.html, e.g. "../images/cover/foo.jpg"
  featured:    Boolean,          // true on exactly one entry (the TED Talk spotlight)

  // article-only
  body:        String | null,    // full HTML body string; null for non-articles
  readingTime: String | null,    // e.g. "4 min read"; null for non-articles

  // podcast-only
  show:        String | null,    // podcast show name; null for non-podcasts

  // podcast + spotlight: external destination URL
  url:         String | null,    // null for articles (which use slug-based internal links)

  // spotlight-only
  ctaLabel:    String | null,    // button label e.g. "Watch on YouTube", "Get the Book"
  meta:        String | null,    // small stat line e.g. "TED · 6K+ views"
}
```

### Sort order

The data array is pre-sorted (not runtime-sorted) in `data.js` in this order:
1. All `spotlight` entries first, newest-date first among themselves — with `featured: true` on the TED Talk entry (so it renders first and gets the 2-col card treatment)
2. All `article` and `podcast` entries interleaved, newest-date first

### `featured` flag

Exactly one entry has `featured: true`: the TED Talk spotlight. This entry must be the first item in the array. The renderer applies 2-col treatment to the first rendered item only when it has `featured: true`; no other entry should carry `featured: true`.

### Tags

Topic tags (same as GoodFutureAI, all types can carry them):
`"AI & Work"`, `"Education"`, `"Leadership"`, `"Skills"`, `"Strategy"`, `"Tools"`

Type is NOT a tag — it is filtered separately via type pills.

### Initial content

**Spotlights (2), appear first:**
1. TED Talk — "Watch the Talk That Started This Conversation" — `featured: true`, `url: "https://www.youtube.com/watch?v=Hzy_GhX8_Cc"`, `coverImage: "../images/ted_talk.jpg"`, `ctaLabel: "Watch on YouTube"`, `meta: "TED · 6K+ views"`, `date: "2023-01-01"` (approximate; used only for ordering among spotlights)
2. The Human Cloud book — `featured: false`, `url: "https://www.humancloudbook.com/"`, `coverImage: "../images/human_cloud.png"`, `ctaLabel: "Learn More"`, `meta: "Book · Available on Amazon"`, `date: "2020-01-01"`

**Articles (5) + Podcasts (7), interleaved by date:**
- Wired Garage — Chatbots Were the Trailer (podcast, Feb 2026)
- Corporations Were Always Coordination Machines (article, Mar 2026)
- Wired Garage — Unleashing Human Creativity (podcast, Dec 2025)
- "Do Something with AI!" Isn't a Strategy (article, Sep 2025)
- Is AI Finally Delivering on the No-Code Promise? (article, Sep 2025)
- The Personal AI Revolution (article, Aug 2025)
- Why Algorithms Develop Bias (article, Jul 2025)
- Product Mastery Now — Using AI in Risk-Averse Industries (podcast, Mar 2025)
- The Forward Slash Podcast — AI: The Jagged Frontier (podcast, Nov 2024)
- The Geek In Review — The Human Cloud (podcast, Nov 2021)
- Futurized — Orchestrating the Freelance Economy (podcast, May 2021)
- Product Mastery Now — The Coming Work Paradigm Shift (podcast, Apr 2021)

---

## `insights/index.html` — Listing Page

### Head
- Same `<head>` pattern as `ai-reality-check.html`: `../theme.css` + `../styles.css` (one level up), Source Serif 4 + Plus Jakarta Sans from Google Fonts
- `<script src="../script.js"></script>` at end of `<body>` for nav scroll + mobile menu + scroll reveal behaviour
- Inline `<script>` after `script.js` for filter logic and grid rendering

### Nav (within `insights/index.html`)
- Same THIRD PEAK wordmark nav structure as all other TPS pages
- Wordmark `href`: `../index.html`
- Nav links use root-relative hrefs from the insights subdirectory:
  - How We Help → `../index.html#how-we-help`
  - Our Work → `../index.html#portfolio`
  - **Insights** → `./` (self — add `aria-current="page"` or active styling)
  - About → `../index.html#about`
  - Start a Conversation → `../index.html#contact` (CTA button)
- Nav starts with `.scrolled` class (inner page — always opaque)

### Nav (within `insights/{slug}/index.html` — article pages)
- Wordmark `href`: `../../index.html`
- Nav links:
  - How We Help → `../../index.html#how-we-help`
  - Our Work → `../../index.html#portfolio`
  - Insights → `../../insights/` (back to listing)
  - About → `../../index.html#about`
  - Start a Conversation → `../../index.html#contact`
- `<link rel="stylesheet">` paths: `../../theme.css`, `../../styles.css`
- `<script src="../../script.js"></script>`

### Nav on all root-level TPS pages (updated)
- Wordmark `href`: `index.html` (unchanged)
- New Insights link inserted between Our Work and About:
  `<a href="insights/" class="nav-link" role="listitem">Insights</a>`
- All existing anchor links (`#how-we-help`, `#portfolio`, `#about`, `#contact`) remain unchanged

### Hero Band
- Background: `var(--jade-100)` with `border-bottom: 1px solid var(--jade-200)`
- Padding: `130px 0 80px` (matching `ai-reality-check.html`)
- Eyebrow: "Insights" class `eyebrow`, color `var(--jade-600)`
- H1: "Things worth thinking about" — Source Serif 4, `font-weight: 300`, `font-size: clamp(2.4rem, 5vw, 3.6rem)`
- Subtext: "Ideas, perspectives, and honest takes on the AI era. Written when there's something worth saying — not on a schedule."

### Filter Bar
- `position: sticky; top: 72px` — 72px matches the TPS nav height (styles.css uses `padding-top: 72px; /* nav height */` as its own documented constant for the nav clearance)
- Background: `var(--stone-100)`, `border-bottom: 1px solid var(--stone-300)`
- `padding: 16px 0`
- Two logical groups in one `.filters-inner` flex row:
  - **Left group — Type pills**: All · Articles · Podcasts · Spotlights
  - **Divider**: `1px solid var(--stone-300)`, `height: 20px`, `align-self: center`, `margin: 0 8px`
  - **Right group — Topic pills**: AI & Work · Education · Leadership · Skills · Strategy · Tools
- Active pill: `background: var(--jade-500); border-color: var(--jade-500); color: white`
- Inactive pill: `border: 1.5px solid var(--stone-300); color: var(--ink-700)`
- Hover: `border-color: var(--jade-500); color: var(--jade-500)`
- Pill size: `padding: 6px 14px; border-radius: var(--r-full); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em`

### Filter State

Two independent state variables:
- `activeType` — default `'all'`; set by type pill clicks
- `activeTopic` — default `'all'`; set by topic pill clicks

An entry is shown if:
```
(activeType  === 'all' || entry.type === activeType) &&
(activeTopic === 'all' || entry.tags.includes(activeTopic))
```

Clicking a type pill updates `activeType` only; clicking a topic pill updates `activeTopic` only. The "All" type pill resets BOTH `activeType` and `activeTopic` to `'all'`.

### Card Grid
- 3 columns → 2 at ≤1024px → 1 at ≤768px
- Gap: `24px`
- First rendered item with `featured: true`: `grid-column: span 2`
  - At ≤768px: `grid-column: span 1` (no 2-col on mobile)
- All other cards: standard single column

### Card Variants

**Article card:**
- `<a>` tag linking to `{slug}/` (relative from insights/index.html)
- Cover image (16:9 aspect ratio), `object-fit: cover`
- Tag pills, H3 title, excerpt `<p>`, meta line (`{Mon YYYY} · {readingTime}`), "Read →" jade link
- Hover: `translateY(-4px)`, `var(--shadow-md)`, jade border tint

**Podcast card:**
- `<a>` tag with `href="{url}" target="_blank" rel="noopener"`
- Image area: gradient placeholder `linear-gradient(135deg, var(--jade-800, #0f5f55), var(--jade-500))`
  - Note: use `var(--jade-700)` as dark stop since `--jade-800` is not in theme.css
- Microphone badge (bottom-right of image): same badge style as GoodFutureAI `has-video`; contains microphone SVG icon + show name truncated to ~20 chars
- Tag pills, H3 title, excerpt `<p>`, meta line (`{Mon YYYY} · {show name}`), "Listen →" jade link

**Spotlight card (featured, 2-col):**
- `<a>` tag with `href="{url}" target="_blank" rel="noopener"`
- Amber top-bar: `border-top: 3px solid var(--amber-500)`
- Cover image (21:9 aspect ratio when `grid-column: span 2`; 16:9 otherwise)
- "Spotlight" eyebrow label in `var(--amber-700)`
- H3 title, excerpt `<p>`
- Meta stat line (`entry.meta`) in muted text
- CTA button: `<span class="btn btn-primary">` styled as button (not a nested `<a>`)

**Spotlight card (standard, 1-col):**
- Same as featured but 16:9 image, no CTA button — just "View →" amber link

### Empty State
```html
<div class="no-results">
  <h3>Nothing here for "[filter]"</h3>
  <p>Try a different filter or <button onclick="resetFilters()">browse everything</button>.</p>
</div>
```
`resetFilters()` sets both `activeType` and `activeTopic` to `'all'` and re-renders.

### Footer
- Identical to existing TPS footer
- Footer Services column unchanged: Strategy · Education · Product
- Footer Company column: About · **Insights** (`href="insights/"`) · Contact · Privacy · Support

---

## Individual Article Pages — `insights/{slug}/index.html`

One page per article (5 total). Podcast and spotlight entries have **no** article pages — they link externally.

### Asset paths (from `insights/{slug}/index.html`)
- Stylesheets: `../../theme.css`, `../../styles.css`
- Script: `../../script.js`
- Cover image: `../../images/cover/{filename}` (NOT sourced from `data.js` — written directly into the HTML with the correct `../../`-relative path)
- "Back to Insights" link: `href="../"` (up one level to `insights/`)

### Structure
- `<head>`: `../../theme.css` + `../../styles.css`, same Google Fonts, title = `"{Article Title} — Third Peak"`
- Nav: see Nav section above for article pages
- **Hero**: `var(--jade-100)` background, eyebrow "Insights" in jade, H1 = article title, tag + readingTime badges, `← Back to Insights` link (`href="../"`)
- **Article body**: single-column container, `max-width: 70ch`, `margin: 0 auto`, `padding: 64px var(--sp-8)`; body HTML rendered inline (copied from `data.js` body field at build time)
- Footer: same as all other TPS pages, with Insights link using `href="../"` (up from `{slug}/` to `insights/`) — **not** `href="../../insights/"`
  - Exception: footer anchor links to root sections (`#contact`, etc.) must use `../../index.html#contact`

---

## Navigation Updates — All Existing Pages

Pages to update: `index.html`, `ai-reality-check.html`, `ai-design-sprint.html`, `privacy.html`, `support.html`, `delete-account.html`

**Nav change** — insert between "Our Work" and "About":
```html
<a href="insights/" class="nav-link" role="listitem">Insights</a>
```

**Footer change** — insert in Company column between About and Contact:
```html
<a href="insights/">Insights</a>
```

---

## Assets to Copy

From `goodfutureai_website/` → `tps_website/`:

| Source | Destination |
|--------|-------------|
| `images/cover/corporations.jpg` | `images/cover/corporations.jpg` |
| `images/cover/desert_mirage.png` | `images/cover/desert_mirage.png` |
| `images/cover/discrimination.jpg` | `images/cover/discrimination.jpg` |
| `images/cover/do_something.png` | `images/cover/do_something.png` |
| `images/cover/homebrew.jpg` | `images/cover/homebrew.jpg` |
| `images/ted_talk.jpg` | `images/ted_talk.jpg` |
| `images/human_cloud.png` | `images/human_cloud.png` |
| `images/human_cloud_amazon.png` | `images/human_cloud_amazon.png` |

---

## JS Behaviour (`insights/index.html` inline script)

### Script loading order
```html
<script src="../script.js"></script>      <!-- nav scroll + mobile menu + scroll reveal -->
<script src="data.js"></script>           <!-- INSIGHTS_DATA array -->
<script>
  /* inline filter + render logic */
</script>
```

### Filter state
```js
let activeType  = 'all';
let activeTopic = 'all';

function filterByType(type) {
  activeType = type;
  if (type === 'all') activeTopic = 'all'; // "All" type pill resets topic too
  syncPillState();
  renderGrid();
}

function filterByTopic(topic) {
  activeTopic = topic;
  syncPillState();
  renderGrid();
}

function resetFilters() {
  activeType = activeTopic = 'all';
  syncPillState();
  renderGrid();
}
```

### Render logic
```js
// Declared in the inline script — separate from script.js's const revealObserver
// (const in one <script> tag is not accessible from another)
const gridRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        gridRevealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
);

function renderGrid() {
  const filtered = INSIGHTS_DATA.filter(e =>
    (activeType  === 'all' || e.type === activeType) &&
    (activeTopic === 'all' || e.tags.includes(activeTopic))
  );

  if (!filtered.length) { /* render empty state */ return; }

  const grid = document.getElementById('insights-grid');
  grid.innerHTML = filtered.map((e, i) => {
    const isFeatured = (i === 0 && e.featured === true);
    return renderCard(e, isFeatured);
  }).join('');

  // re-observe newly rendered cards
  grid.querySelectorAll('.reveal').forEach(el => gridRevealObserver.observe(el));
}
```

Note: `script.js` declares its own `const revealObserver` for `.reveal` elements in the hero/static sections. The inline script uses a separately declared `gridRevealObserver` to avoid any name collision.

---

## Retheme Summary

| GoodFutureAI token | TPS replacement |
|---|---|
| `var(--deep-horizon)` hero bg | `var(--jade-100)` |
| `var(--warm-light)` body bg | `var(--color-bg)` (`var(--stone-50)`) |
| `var(--morning-teal)` accent | `var(--jade-500)` |
| `var(--living-coral)` accent | `var(--terra-500)` |
| `var(--sunrise-gold)` accent | `var(--amber-500)` |
| Fraunces display font | Source Serif 4 (`var(--font-display)`) |
| `var(--radius-lg): 20px` | `var(--r-lg): 12px` |
| `.fade-up` / `.delay-N` reveal | `.reveal` + `style="--delay: Xs"` |
| `var(--warm-mid)` filter bar bg | `var(--stone-100)` |
| `var(--warm-stone)` muted text | `var(--color-text-muted)` |
| `var(--radius-full): 999px` | `var(--r-full): 9999px` |
| `var(--shadow-md)` | `var(--shadow-md)` (same name, different value — use TPS token) |
