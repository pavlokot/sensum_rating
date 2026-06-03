# Sensum Foundation Design System

> Brand and design system for **БО «БФ "Сенсум"»** — the Sensum Charitable Foundation, a charitable arm of [Sensum Law Firm](https://sensum-law.com/) and partner professionals.

## About the foundation

Sensum is a Ukrainian charitable foundation operating as an extension of Sensum Law Firm (Kyiv). Its work centers on supporting the Ukrainian Armed Forces and people affected by the war — combatants (UBD — учасники бойових дій), wounded service members, and the broader civilian effort. Reports and donor communications are central to its public presence: each campaign is documented and signed off by the foundation's co‑founders.

> «Допомагати збройним силам — наша невід'ємна потреба та спільна мета.»  
> — Віталій Жадобін, Співзасновник БО «БФ "Сенсум"»

## Sources we worked from

The user provided these files. Only the JPG made it through the upload; the PSD/AI files did not. We reconstructed brand foundations from the quote card image plus context about the parent law firm. **Re‑upload the missing files and we'll iterate.**

| File | Status | Notes |
|---|---|---|
| `uploads/4_Cytata copy.jpg` | ✅ uploaded | Quote card template — primary visual reference |
| `uploads/9_Logo_photo copy.psd` | ❌ failed upload | Logo/photo composite — please re‑upload |
| `uploads/5_Zvit copy.psd` | ❌ failed upload | "Zvit" = report template — please re‑upload |
| `uploads/rreb.psd` | ❌ failed upload | Unknown — please re‑upload |
| `uploads/ubd.psd` | ❌ failed upload | UBD (war veterans / combatants) template — please re‑upload |
| `uploads/sensum_logo.ai` | ❌ failed upload | Master logo — please re‑upload |

Reference (no direct access in this environment):
- Parent law firm site: https://sensum-law.com/
- Facebook: https://www.facebook.com/LawFirmSensum/
- Instagram: https://www.instagram.com/lawfirmsensum/

## Substitutions (please confirm or replace)

Because the source files didn't upload, the following are **best‑guess substitutes** based on the visible quote card. Treat them as placeholders:

- **Display typeface** — the speaker‑name face on the quote card looks like a decorative tuscan/western serif with bifurcated terminals. Substituted with **IM Fell English SC** from Google Fonts. **Likely needs to change.**
- **Body / UI sans** — the all‑caps quote face is a tall, geometric grotesque. Substituted with **Oswald** from Google Fonts.
- **Logo mark** — drawn as a vector approximation of the double‑chevron device on the quote card. Replace with the real `.ai` logo when re‑uploaded.

---

## Index of this design system

| Path | What it is |
|---|---|
| `README.md` | This file — context, content fundamentals, visual foundations |
| `SKILL.md` | Skill manifest (also usable as a Claude Code Agent Skill) |
| `colors_and_type.css` | All design tokens — colors, type scale, spacing, radii, shadows |
| `assets/` | Logos, the source quote card, brand patterns, photography |
| `fonts/` | Webfont references (loaded from Google Fonts) |
| `preview/` | Small HTML cards used to populate the Design System tab |
| `slides/` | Sample 1920×1080 slide layouts in the foundation's style |
| `ui_kits/website/` | Marketing‑site UI kit (homepage, report page, donate flow) |

---

## Content fundamentals

**Languages.** Primary copy is **Ukrainian**. English is used selectively for international donor materials (subtitles or short labels), never as the primary surface. Russian is **not** used in current materials.

**Voice.** Serious, journalistic, restrained. Sensum borrows the gravity of its parent law firm — copy is precise, never sentimental, never jokey. Quotes from co‑founders and partners do most of the emotional work; surrounding copy stays neutral and factual.

**Person / address.** The foundation speaks as **«ми» (we)** — first person plural. Donors and partners are addressed as **«ви»** (formal you) when directly addressed, but most public copy is third‑person reportage ("the foundation delivered…", "the team handed over…"). Avoid "ти" entirely.

**Casing.**
- **Display headlines and pull‑quotes are set in ALL CAPS** with French‑style guillemets «…» around quoted text. This is the brand's most recognisable typographic move.
- **Speaker attributions use a stylised display serif in title case** (e.g. *Віталій Жадобін*).
- **Running body copy uses sentence case.**
- Roles and organisation names follow normal Ukrainian conventions: `Співзасновник БО «БФ "Сенсум"»`.

**Punctuation.**
- Use proper Ukrainian guillemets «…» for quotes; never straight quotes in display copy.
- Use the en‑dash «–» (not hyphen) in dashes and date ranges.
- Use the apostrophe «'» (U+2019) — written е.g. as «невід'ємна», «об'єкт».

**Numbers and reports.** Foundation reports («Звіт») are dense with concrete figures: amounts in ₴ (UAH), unit counts (drones, vehicles, kits), and dates. Always pair a figure with what it bought and for whom — "X грн → Y одиниць → Z бригада". No vanity numbers.

**Emoji & icons in copy.** Emoji are **not used** in formal donor‑facing materials. They appear only in casual social posts (and even there, sparingly — usually just 📅 or ‼️ for a calendar callout). Treat emoji as out of system for the foundation's primary brand surface.

**Examples (to imitate).**

> Public quote (display): «ДОПОМАГАТИ ЗБРОЙНИМ СИЛАМ – НАША НЕВІД'ЄМНА ПОТРЕБА ТА СПІЛЬНА МЕТА.»  
> Attribution: *Віталій Жадобін*, Співзасновник БО «БФ "Сенсум"»

> Report line: «За червень 2024 року фонд передав до 93 ОМБр: 4 квадрокоптери Mavic 3T, 2 пікапи, 120 тактичних аптечок.»

> Call to action: «Підтримати фонд» / «Зробити внесок» — never «Donate now!» energy.

---

## Visual foundations

**Colors.** A tight three‑colour palette built around a single dominant **Sensum Yellow** (#E1CC01 — saturated, slightly mustard, almost gold). Supporting tones are a **soft cream‑yellow** (#F8F1BB) and a **muted olive/khaki** (#999361). Photography is **black & white**, which lets the yellow do all the chromatic work. Backgrounds are usually pure white. Pure black (#000000) is reserved for type and the b/w photo treatment.

**Typography.** Two voices, hard contrast.
- A **stylised display serif** for names, attributions and signature lines (decorative, slightly Western/Tuscan, bifurcated terminals — substituted with IM Fell English SC).
- A **tall geometric sans** for ALL‑CAPS pull quotes, headlines, and UI (substituted with Oswald). Sentence‑case body copy uses the same sans at a regular weight.
- Mono is not part of the brand voice; if needed for technical contexts, use the system mono fallback.

**Logo / signature mark.** Two overlapping right‑pointing chevrons (»») evoking the "S" of *Sensum*. The forward chevron is **Sensum Yellow**; the back chevron is the **olive/khaki** with light transparency, suggesting depth and movement. Used as a layout anchor in the top‑right of slides and social cards.

**Backgrounds.** Predominantly **white**. The chevron mark is the visual centrepiece — placed as a large background graphic, not a logo. Full‑bleed yellow is used for hero panels and accent blocks behind b/w portraits. **No gradients. No textures. No noise. No patterns.** Negative space is the brand.

**Photography.** **Black & white only**, contrasty, journalistic / documentary in feel. Portraits are mid‑range (waist‑up), eyes to camera, candid environment behind. Photos are placed inside the yellow background — they sit *on* the brand, never floating in white.

**Layout rules.**
- 16:9 and 1:1 are the canonical formats (slides + social cards).
- Photo + chevron + quote = the canonical composition. The chevron tucks behind the photo on the right, the quote sits below.
- Generous outer margins (~6% of canvas).
- Long‑form layouts (reports) use a strict grid: ~80px outer padding, two‑column body, single‑column hero.

**Animation.** Animation is minimal. Where used: simple **fade in (300–400ms)** and **slide‑up (8px)** with `cubic-bezier(0.22, 1, 0.36, 1)` — restrained ease‑out. No bounces, no spring physics, no stagger choreography. If you have to ask whether to animate something, don't.

**Hover states.**
- Buttons darken by ~8% (yellow → mustard) on hover.
- Links underline on hover; colour stays.
- Photos lift very subtly (1px translate, no shadow change).

**Press / active states.**
- Buttons drop opacity to ~85% and shrink by 1% (transform: scale(0.99)).
- No long‑press or ripple effects.

**Borders.** Most surfaces are **borderless** — separation comes from background colour blocks. Where a border is needed (forms, dividers), use a 1px solid `#1A1A1A` at 12% opacity — never a coloured border.

**Shadows.** **No drop shadows** on cards or buttons in the brand surface. Elevation is communicated by colour blocks (yellow under white) and by stacking the chevron behind the photo. Reserve a single soft shadow `0 2px 8px rgba(0,0,0,0.06)` only for floating UI like menus or modals in product surfaces.

**Corner radii.** **Sharp corners** are on‑brand — 0px on hero blocks, photo frames, the chevron mark, and quote panels. UI controls (buttons, inputs) use a **small 4px radius** to feel functional without softening the brand. Avoid pill shapes and large rounded cards.

**Cards.** When a card is genuinely needed: white background, no shadow, 1px subtle border at 12% black, sharp corners on hero‑adjacent surfaces or 4px on form‑adjacent surfaces. Padding ~24–32px.

**Transparency & blur.** The olive chevron uses ~75% opacity over yellow to suggest layering. Otherwise transparency is rare and `backdrop-filter: blur` is **not used** — it would feel out of system against the flat brand.

**Imagery vibe.** Cool / neutral b&w with strong mid‑contrast — never sepia, never warm‑toned. Faces are the subject; environment is context.

---

## Iconography

Sensum's primary materials are **photo‑led, not icon‑led**. The foundation does not have a proprietary icon set in the materials we have access to.

**Approach we'll use as a system:**
- For UI surfaces and slide accents, use **[Lucide](https://lucide.dev)** via CDN (`https://unpkg.com/lucide@latest`) at **stroke‑width 1.75**, mono‑colour `currentColor`. Lucide's clean geometric‑grotesque feel pairs naturally with Oswald.
- Icons are **never coloured** — they take the surrounding text colour (black on white, or yellow on dark).
- **Emoji are out of system** and should not appear in formal donor materials. They are tolerated only in casual social posts.
- The **double‑chevron mark** is the foundation's only true brand glyph. It is used as a graphic device, not as a UI icon — never inline with text, never at <80px display size.

If a domain‑specific icon is needed (military‑aid context: drone, vehicle, medkit, body armour, etc.) and Lucide doesn't have it, **flag the substitution** in the surrounding code rather than improvising a hand‑drawn SVG.

---
