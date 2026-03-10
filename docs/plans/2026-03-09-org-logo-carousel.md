# Org Logo Carousel Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a subtle, infinite-scrolling CSS marquee of organization logos beneath the proof-grid cards in the #why section.

**Architecture:** Logos are saved as SVGs in `images/orgs/`. The carousel uses a pure CSS `@keyframes` marquee animation with two duplicate rows of logos (for seamless looping) and CSS `mask-image` gradient fade on left/right edges. Logos are rendered slate-tinted via CSS `filter` — no color, not overwhelming. No JS required.

**Tech Stack:** HTML, CSS (custom properties, keyframes, mask-image), SVG logos

---

### Task 1: Create images/orgs directory and fetch/create logos

**Files:**
- Create: `images/orgs/bounceback.svg`
- Create: `images/orgs/beginbright.svg`
- Create: `images/orgs/galecengage.svg`
- Create: `images/orgs/gatesfoundation.svg`
- Create: `images/orgs/paths-education.svg`
- Create: `images/orgs/activate-technologies.svg`
- Create: `images/orgs/subterra.svg`

**Step 1: Create images/orgs directory**
```bash
mkdir -p images/orgs
```

**Step 2: Attempt to fetch each logo from the organization's website**

Try fetching SVG logos from these sources:
- Bounceback: https://mybounceback.com — look for logo in HTML `<img>` tags or favicon
- Begin Bright: https://beginbright.app — look for logo SVG in page source
- Gale Cengage: https://www.gale.com — large publisher, logo likely findable
- Gates Foundation: https://www.gatesfoundation.org — look for logo assets
- PATHS Education: search for paths-education.org or similar
- Activate Technologies: search for activatetechnologies.com or similar
- Subterra: search for subterra.com or similar

**Step 3: For any logo not found, create a clean SVG wordmark**

Use this template (adjust text/width as needed):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" width="200" height="48">
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Georgia, serif"
    font-size="18"
    font-weight="400"
    letter-spacing="0.02em"
    fill="#2D4057"
  >Organization Name</text>
</svg>
```

For sans-serif style:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" width="200" height="48">
  <text
    x="50%"
    y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="16"
    font-weight="700"
    letter-spacing="0.08em"
    text-transform="uppercase"
    fill="#2D4057"
  >ORG NAME</text>
</svg>
```

**Step 4: Commit logos**
```bash
git add images/orgs/
git commit -m "feat: add org logos for why section carousel"
```

---

### Task 2: Add carousel HTML to #why section

**Files:**
- Modify: `index.html` — add after `.proof-grid` closing `</div>`, before `</div>` (container close) at line ~322

**Step 1: Identify exact insertion point**

In `index.html`, find the `section-why` section. The `.proof-grid` closes around line 321. Insert the carousel block after it, before the commented-out `founder-block` and before the container `</div>`.

**Step 2: Insert carousel HTML**

Add this block after the `</div>` that closes `.proof-grid`:

```html
        <!-- Logo Carousel -->
        <div class="org-carousel-wrap reveal" style="--delay: 0.5s" aria-label="Organizations worked with">
          <div class="org-carousel-label">Experience across organizations</div>
          <div class="org-carousel" aria-hidden="true">
            <div class="org-track">
              <div class="org-logo-item"><img src="images/orgs/bounceback.svg" alt="Bounceback" height="32"></div>
              <div class="org-logo-item"><img src="images/orgs/beginbright.svg" alt="Begin Bright" height="32"></div>
              <div class="org-logo-item"><img src="images/orgs/galecengage.svg" alt="Gale Cengage" height="32"></div>
              <div class="org-logo-item"><img src="images/orgs/gatesfoundation.svg" alt="Gates Foundation" height="32"></div>
              <div class="org-logo-item"><img src="images/orgs/paths-education.svg" alt="PATHS Education" height="32"></div>
              <div class="org-logo-item"><img src="images/orgs/activate-technologies.svg" alt="Activate Technologies" height="32"></div>
              <div class="org-logo-item"><img src="images/orgs/subterra.svg" alt="Subterra" height="32"></div>
              <!-- Duplicate set for seamless loop -->
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/bounceback.svg" alt="" height="32"></div>
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/beginbright.svg" alt="" height="32"></div>
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/galecengage.svg" alt="" height="32"></div>
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/gatesfoundation.svg" alt="" height="32"></div>
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/paths-education.svg" alt="" height="32"></div>
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/activate-technologies.svg" alt="" height="32"></div>
              <div class="org-logo-item" aria-hidden="true"><img src="images/orgs/subterra.svg" alt="" height="32"></div>
            </div>
          </div>
        </div>
```

**Step 3: Commit HTML**
```bash
git add index.html
git commit -m "feat: add org logo carousel HTML to why section"
```

---

### Task 3: Add carousel CSS to styles.css

**Files:**
- Modify: `styles.css` — add new section after the `.section-why` / `.proof-grid` styles

**Step 1: Find the right place in styles.css**

Search for `proof-grid` or `section-why` — add the new carousel styles in the same block/vicinity.

**Step 2: Add carousel CSS**

```css
/* ============================================================
   ORG LOGO CAROUSEL (Why Third Peak section)
   ============================================================ */

.org-carousel-wrap {
  margin-top: var(--sp-16);
  padding-top: var(--sp-10);
  border-top: 1px solid var(--color-border);
}

.org-carousel-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--sp-6);
  opacity: 0.6;
}

.org-carousel {
  overflow: hidden;
  /* Fade edges using mask */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 12%,
    black 88%,
    transparent 100%
  );
}

.org-track {
  display: flex;
  align-items: center;
  gap: var(--sp-12);
  width: max-content;
  animation: org-scroll 30s linear infinite;
}

.org-track:hover {
  animation-play-state: paused;
}

.org-logo-item {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.org-logo-item img {
  height: 32px;
  width: auto;
  max-width: 160px;
  /* Slate tint: desaturate + shift toward slate color */
  filter: grayscale(100%) brightness(0.4) sepia(1) hue-rotate(185deg) saturate(0.6) brightness(1.2);
  opacity: 0.55;
  transition: opacity 0.2s ease, filter 0.2s ease;
}

.org-logo-item img:hover {
  opacity: 0.85;
  filter: grayscale(100%) brightness(0.4) sepia(1) hue-rotate(185deg) saturate(0.6) brightness(1.4);
}

@keyframes org-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .org-track {
    animation: none;
  }
}
```

**CSS filter notes:** The chain `grayscale(100%) brightness(0.4) sepia(1) hue-rotate(185deg) saturate(0.6) brightness(1.2)` converts any logo to a muted slate-toned version matching `--color-slate` (#2D4057). If the tint feels too dark/blue after review, adjust `brightness` and `saturate` values.

**Step 3: Commit CSS**
```bash
git add styles.css
git commit -m "feat: add org logo carousel styles with slate tint and marquee animation"
```

---

### Task 4: Visual review and tuning

**Step 1: Open in browser and check**

- Logos should scroll continuously from right to left, looping seamlessly
- At 30s speed with 7 logos + gap, scrolling should feel ambient and slow
- Logos should appear as muted slate-toned shapes — recognizable but not dominant
- Edge fade should soften the carousel into the section
- Hovering the track should pause it

**Step 2: Tune if needed**

- Too fast/slow → adjust `animation-duration` on `.org-track` (try 25s–40s)
- Too dark → increase `brightness` in filter chain
- Too blue → reduce `hue-rotate` or `saturate`
- Too big → reduce `height` on `.org-logo-item img` (try 28px)
- Gap too wide/narrow → adjust `gap` on `.org-track`

**Step 3: Final commit if any tuning**
```bash
git add styles.css
git commit -m "chore: tune logo carousel opacity and speed"
```
