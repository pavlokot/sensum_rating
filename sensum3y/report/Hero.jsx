/* global React, ReportChevron, FadeIn */

window.ReportNav = function ReportNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = ["Про фонд", "Цифри", "Категорії", "Бригади", "Подяки", "Хронологія", "Долучитись"];
  const ids   = ["about", "numbers", "categories", "brigades", "gallery", "timeline", "cta"];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
      borderBottom: scrolled ? "1px solid rgba(26,26,26,0.08)" : "1px solid transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
      transition: "background 200ms ease, border-color 200ms ease",
    }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto", padding: "18px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#0A0A0A" }}>
          <ReportChevron size={28}/>
          <div style={{ fontFamily: "'DIN Condensed', sans-serif", fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em" }}>
            Sensum
          </div>
        </a>
        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {items.map((label, i) => (
            <a key={i} href={`#${ids[i]}`} style={{
              fontFamily: "'DIN Condensed', sans-serif", fontSize: 13, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.10em",
              color: "#1A1A1A", textDecoration: "none",
            }}>
              {label}
            </a>
          ))}
          <a href="#cta" style={{
            background: "#E1CC01", color: "#0A0A0A", padding: "10px 18px", borderRadius: 4,
            fontFamily: "'DIN Condensed', sans-serif", fontSize: 13, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.10em", textDecoration: "none",
          }}>
            Підтримати
          </a>
        </nav>
      </div>
    </header>
  );
};

window.Hero = function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", background: "#fff", paddingTop: 80 }}>
      {/* Yellow block */}
      <div style={{ position: "absolute", right: 0, top: 0, width: "52%", height: "100%", background: "#E1CC01" }}/>
      {/* Big chevron */}
      <div style={{ position: "absolute", right: -120, top: 60, opacity: 0.55 }}>
        <ReportChevron size={780} front="#F8F1BB" back="#999361" backOpacity={0.9}/>
      </div>

      <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "120px 32px 160px" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DIN Condensed', sans-serif", fontSize: 16, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.20em", color: "#0A0A0A", marginBottom: 36,
          }}>
            Звіт фонду · 28.04.2023 — 28.04.2026
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 style={{
            margin: 0, fontFamily: "'DIN Condensed', sans-serif",
            fontSize: 200, fontWeight: 700, lineHeight: 0.88,
            textTransform: "uppercase", letterSpacing: "0.005em", color: "#0A0A0A",
          }}>
            3 роки<br/>разом
          </h1>
        </FadeIn>

        <FadeIn delay={160}>
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "flex-end" }}>
            <div style={{
              fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 400, lineHeight: 1.5, color: "#1A1A1A",
              maxWidth: 580,
            }}>
              За три роки роботи БФ «Сенсум» допоміг десяткам бригад, сотням ветеранів та цивільних родин. Ця сторінка — підсумок того, що ми зробили разом із вами.
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <a href="#numbers" style={{
                background: "#0A0A0A", color: "#fff", padding: "16px 28px", borderRadius: 4,
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.10em", textDecoration: "none",
              }}>
                До цифр
              </a>
              <a href="#cta" style={{
                background: "transparent", color: "#0A0A0A", border: "1px solid #0A0A0A",
                padding: "16px 28px", borderRadius: 4,
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.10em", textDecoration: "none",
              }}>
                Підтримати
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

window.About = function About() {
  return (
    <section id="about" style={{ background: "#fff", padding: "140px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 96 }}>
        <FadeIn>
          <div>
            <div style={{
              fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.18em", color: "#4A4A4A",
            }}>
              Про фонд
            </div>
            <h2 style={{
              margin: "16px 0 0",
              fontFamily: "'DIN Condensed', sans-serif", fontSize: 72, fontWeight: 700,
              lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "0.005em",
            }}>
              Допомога,<br/>яка повертає<br/>до життя
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{
              margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 1.7, color: "#1A1A1A",
            }}>
              БФ «Сенсум» — окремий благодійний напрямок юридичної компанії <strong style={{ fontWeight: 600 }}>Sensum Law Firm</strong> та її друзів, професіоналів своєї справи в інших галузях. Ми зареєстровані 28 квітня 2023 року.
            </p>
            <p style={{
              margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 1.7, color: "#1A1A1A",
            }}>
              Наша місія — підтримка воїнів Збройних Сил України. Ми надаємо допомогу не лише на полі бою, але й створюємо умови для повернення військових до повноцінного життя через спортивні та соціальні проєкти за участі ветеранів.
            </p>
            <p style={{
              margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 1.7, color: "#1A1A1A",
            }}>
              Один із наших пріоритетів — забезпечення військових необхідним обладнанням, яке зберігає їхні життя та допомагає виконувати завдання задля якнайшвидшої перемоги. Ми також активно допомагаємо цивільним, які постраждали внаслідок агресії.
            </p>
            <p style={{
              margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 1.7, color: "#1A1A1A",
            }}>
              Ми пишаємось <strong style={{ fontWeight: 600 }}>прозорою фінансовою звітністю</strong> — ця сторінка тому підтвердження.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
