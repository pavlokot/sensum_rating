/* global React */
const { useState } = React;

window.SiteHeader = function SiteHeader({ active = "home", onNav }) {
  const items = [
    { k: "home", label: "Головна" },
    { k: "programs", label: "Програми" },
    { k: "reports", label: "Звіти" },
    { k: "team", label: "Команда" },
    { k: "contact", label: "Контакти" },
  ];
  return (
    <header style={{
      borderBottom: "1px solid rgba(26,26,26,0.12)", background: "#fff", position: "sticky", top: 0, zIndex: 10,
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "20px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav?.("home"); }} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", color: "#0A0A0A" }}>
          <svg width="36" height="36" viewBox="0 0 240 240">
            <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill="#999361"/>
            <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill="#E1CC01"/>
          </svg>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Sensum</div>
            <div style={{ fontSize: 10, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.18em", color: "#4A4A4A", marginTop: 4 }}>Charitable Foundation</div>
          </div>
        </a>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {items.map(i => (
            <a key={i.k} href="#" onClick={(e) => { e.preventDefault(); onNav?.(i.k); }}
               style={{
                 fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em",
                 color: active === i.k ? "#0A0A0A" : "#4A4A4A", textDecoration: "none",
                 borderBottom: active === i.k ? "2px solid #0A0A0A" : "2px solid transparent",
                 paddingBottom: 4,
               }}>
              {i.label}
            </a>
          ))}
          <button onClick={() => onNav?.("donate")} style={{
            background: "#E1CC01", color: "#0A0A0A", border: 0, padding: "12px 22px", borderRadius: 4,
            fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer",
            fontFamily: "Oswald, sans-serif",
          }}>Підтримати</button>
        </nav>
      </div>
    </header>
  );
};

window.SiteFooter = function SiteFooter() {
  return (
    <footer style={{ background: "#0A0A0A", color: "#fff", padding: "64px 32px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <svg width="36" height="36" viewBox="0 0 240 240">
                <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill="#999361"/>
                <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill="#E1CC01"/>
              </svg>
              <div style={{ fontSize: 22, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em" }}>Sensum</div>
            </div>
            <div style={{ marginTop: 18, fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: "#B5B5B5", maxWidth: 360 }}>
              Благодійний фонд при юридичній компанії Sensum Law Firm. Підтримуємо ЗСУ та ветеранів УБД з 2022 року.
            </div>
          </div>
          {[
            { h: "Фонд", links: ["Про нас", "Команда", "Партнери"] },
            { h: "Звітність", links: ["Місячні звіти", "Фінанси", "Документи"] },
            { h: "Контакти", links: ["info@sensum-fund.org", "+38 044 000 0000", "Київ, Лесі Українки 7-А"] },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#E1CC01" }}>{c.h}</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                {c.links.map((l, j) => (
                  <a key={j} href="#" style={{ color: "#fff", fontSize: 14, fontWeight: 300, textDecoration: "none" }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, fontSize: 11, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.12em", color: "#8A8A8A" }}>
          © 2024 БО «БФ Сенсум» · ЄДРПОУ 00000000
        </div>
      </div>
    </footer>
  );
};
