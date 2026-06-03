/* global React, FadeIn, SectionTitle */

window.BigNumbers = function BigNumbers() {
  // Placeholders — replace with real numbers once provided
  const stats = [
    { num: "00,0 М", unit: "₴", label: "Зібрано донатів" },
    { num: "00",     unit: "+", label: "Бригад · підрозділів" },
    { num: "000",    unit: "+", label: "Одиниць техніки" },
    { num: "000",    unit: "+", label: "Ветеранів УБД" },
    { num: "00",     unit: "",  label: "Цивільних родин" },
    { num: "36",     unit: "",  label: "Місяців роботи" },
  ];

  return (
    <section id="numbers" style={{ background: "#0A0A0A", color: "#fff", padding: "140px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle
            eyebrow="Підсумки 2023 — 2026"
            title={<>Ключові<br/>цифри</>}
            kicker="Усі дані — це placeholder-и до того часу, поки ви не надасте справжні цифри. Заміна одна — і вони підтягнуться скрізь."
            light
          />
        </FadeIn>

        <div style={{
          marginTop: 24,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(255,255,255,0.16)",
        }}>
          {stats.map((s, i) => (
            <FadeIn key={i} delay={(i % 3) * 80}>
              <div style={{
                padding: "56px 40px",
                borderRight: (i % 3 !== 2) ? "1px solid rgba(255,255,255,0.16)" : "0",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.16)" : "0",
                minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "space-between",
                background: i === 2 ? "#E1CC01" : "transparent",
                color: i === 2 ? "#0A0A0A" : "#fff",
              }}>
                <div style={{
                  fontFamily: "'DIN Condensed', sans-serif", fontSize: 96, fontWeight: 700, lineHeight: 0.9,
                  letterSpacing: "-0.005em", display: "flex", alignItems: "baseline", gap: 8,
                }}>
                  <span>{s.num}</span>
                  {s.unit && <span style={{ fontSize: 56 }}>{s.unit}</span>}
                </div>
                <div style={{
                  marginTop: 24, fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  color: i === 2 ? "#0A0A0A" : "#B5B5B5",
                }}>
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Categories = function Categories() {
  const cats = [
    { tag: "01", title: "Дрони · FPV · Mavic",         body: "Розвідка, ударні модифікації, заміна втрат. Найбільша категорія за бюджетом і темпом запитів." },
    { tag: "02", title: "Транспорт",                    body: "Пікапи й позашляховики для евакуації та логістики на лінії зіткнення." },
    { tag: "03", title: "Зв'язок · рації",              body: "Шифровані тактичні радіостанції — ключ до координації підрозділів." },
    { tag: "04", title: "Тепловізори · приціли",        body: "Оптика для роботи вночі та в умовах поганої видимості." },
    { tag: "05", title: "Бронежилети · шоломи",         body: "Засоби індивідуального захисту, амуніція, тактичне спорядження." },
    { tag: "06", title: "РЕБ · антидрон",               body: "Системи радіоелектронної боротьби та засоби протидії ворожим дронам." },
    { tag: "07", title: "Юридична допомога УБД",        body: "Консультації, супровід справ, статус УБД — від партнерів Sensum Law Firm." },
    { tag: "08", title: "Реабілітація",                 body: "Партнерські програми психологічної та фізичної реабілітації поранених." },
    { tag: "09", title: "Гуманітарна допомога цивільним", body: "Підтримка родин, які постраждали внаслідок агресії." },
  ];

  return (
    <section id="categories" style={{ background: "#fff", padding: "140px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle
            eyebrow="Що ми передаємо"
            title={<>Категорії<br/>допомоги</>}
            kicker="Дев'ять напрямків — від тактичного спорядження до юридичного супроводу та реабілітації."
          />
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "2px solid #0A0A0A" }}>
          {cats.map((c, i) => (
            <FadeIn key={i} delay={(i % 3) * 60}>
              <div style={{
                padding: "36px 32px 44px", minHeight: 260,
                borderRight: (i % 3 !== 2) ? "1px solid rgba(26,26,26,0.12)" : "0",
                borderBottom: "1px solid rgba(26,26,26,0.12)",
                display: "flex", flexDirection: "column", gap: 14,
                background: "#fff",
              }}>
                <div style={{
                  fontFamily: "'DIN Condensed', sans-serif", fontSize: 13, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.18em", color: "#999361",
                }}>
                  {c.tag}
                </div>
                <h3 style={{
                  margin: 0, fontFamily: "'DIN Condensed', sans-serif", fontSize: 32, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.005em", lineHeight: 1.05,
                }}>
                  {c.title}
                </h3>
                <p style={{
                  margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400,
                  lineHeight: 1.55, color: "#1A1A1A",
                }}>
                  {c.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
