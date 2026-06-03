# Sensum Foundation — Website UI Kit

A pixel‑level recreation of a marketing site for **БФ «Сенсум»** in the brand's visual language.

## Composition

`index.html` renders a single‑page click‑through prototype:

1. `SiteHeader` — sticky navigation with logo lockup + 5 nav items + yellow CTA
2. `Hero` — split white/yellow hero with chevron and b/w portrait
3. `StatsBar` — black bar with 4 KPIs
4. `ProgramsSection` — 3‑column grid of active programs
5. `QuoteSection` — canonical quote layout (photo on yellow + display‑serif attribution)
6. `ReportsSection` — table of monthly reports with PDF buttons
7. `DonateSection` — black panel with chevron + interactive donate form (preset amounts)
8. `SiteFooter` — black footer with three columns + brand line

## Files

- `index.html` — composition + interactive nav state
- `SiteChrome.jsx` — `SiteHeader` + `SiteFooter`
- `Sections.jsx` — `Hero` / `StatsBar` / `ProgramsSection` / `QuoteSection` / `ReportsSection` / `DonateSection`

## Caveats

- All copy is invented within voice — replace with real content.
- The portrait is a tight crop of the only photo we had access to (the quote card). Replace once you re‑upload the original photo PSDs.
- The logo lockup is a vector reconstruction of the chevron mark; awaiting the master `.ai` file.
