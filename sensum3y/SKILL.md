---
name: sensum-design
description: Use this skill to generate well-branded interfaces and assets for БФ «Сенсум» (Sensum Charitable Foundation), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Voice:** Ukrainian first (formal «ви»). Serious, journalistic. No emoji in formal materials. Quotes use guillemets «…».
- **Palette:** Primary yellow `#E1CC01`, cream `#F8F1BB`, olive `#999361`, ink `#0A0A0A`, paper `#FFFFFF`.
- **Type:** `DIN Condensed Bold` ALL CAPS for display / quotes / headlines / UI labels; `Bravo Stencil` for attributions / signature lines. Both are self-hosted brand fonts (`fonts/DIN_Condensed_Bold.ttf`, `fonts/Bravo_Stencil.otf`) wired in `colors_and_type.css` — use the `--font-sans` / `--font-display` tokens. Sentence-case body copy uses the system-sans `--font-body` fallback until a brand body weight is supplied.
- **Mark:** Two overlapping right‑pointing chevrons. `assets/sensum-mark.svg` and `assets/sensum-wordmark.svg`.
- **Photography:** Black & white only, contrasty, mid‑range portraits. Place on yellow ground.
- **Layout:** Sharp corners (r-0). 4 px radius for UI controls. No drop shadows on brand surfaces. No gradients, no textures.
- **Iconography:** Lucide via CDN, stroke 1.75, currentColor. No emoji.

## Files in this skill

- `README.md` — full brand guidelines (content fundamentals + visual foundations)
- `colors_and_type.css` — design tokens + semantic primitives
- `assets/` — logo SVGs, source quote photo
- `preview/` — design system preview cards
- `slides/` — sample 1920×1080 slide layouts (Title, Quote, Stats, Section, Comparison, CTA)
- `ui_kits/website/` — homepage UI kit with Header, Hero, Stats, Programs, Quote, Reports, Donate, Footer

## When you're missing something

The original `.psd` and `.ai` source files were never uploaded; the system was built from a single quote card. If something looks off, ask the user to re‑upload the originals so substitutions can be replaced.
