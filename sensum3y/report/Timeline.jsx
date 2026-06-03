/* global React, FadeIn, SectionTitle, ReportChevron */

window.Timeline = function Timeline() {
  const events = [
    { y: "2023", m: "Квітень",  title: "Реєстрація фонду",          body: "БФ «Сенсум» офіційно зареєстровано як благодійний напрямок Sensum Law Firm." },
    { y: "2023", m: "Літо",     title: "Перші збори на дрони",       body: "Запуск кампаній на FPV і Mavic для бригад, які підтримують партнери." },
    { y: "2023", m: "Осінь",    title: "Програма УБД",                body: "Відкриття юридичної допомоги ветеранам та родинам — pro bono." },
    { y: "2024", m: "Зима",     title: "Зимові кампанії",            body: "Тепловізори, теплий одяг, генератори. Фокус на евакуаційні підрозділи." },
    { y: "2024", m: "Весна",    title: "Транспорт для лінії",        body: "Перші пікапи й позашляховики передані на схід та південь." },
    { y: "2024", m: "Літо",     title: "РЕБ та антидрон",            body: "Запуск напрямку радіоелектронної боротьби та засобів протидії дронам." },
    { y: "2025", m: "Зима",     title: "Реабілітаційні партнерства", body: "Контракти з реабілітаційними центрами для поранених УБД." },
    { y: "2025", m: "Літо",     title: "Спортивні проєкти",          body: "Перші спортивні ініціативи за участі ветеранів — повернення до повноцінного життя." },
    { y: "2026", m: "Квітень",  title: "3 роки разом",                body: "Цей звіт — підсумок трьох років роботи." },
  ];

  return (
    <section id="timeline" style={{ background: "#fff", padding: "140px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle
            eyebrow="2023 — 2026"
            title={<>Хронологія</>}
            kicker="Ключові віхи трирічного шляху фонду."
          />
        </FadeIn>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 200, top: 8, bottom: 8, width: 2, background: "#0A0A0A" }}/>

          {events.map((e, i) => (
            <FadeIn key={i} delay={40}>
              <div style={{
                display: "grid", gridTemplateColumns: "180px 60px 1fr", gap: 0,
                padding: "28px 0", alignItems: "flex-start",
              }}>
                <div style={{
                  fontFamily: "'DIN Condensed', sans-serif", fontSize: 16, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.10em", color: "#4A4A4A",
                  paddingRight: 24, textAlign: "right", paddingTop: 6,
                }}>
                  {e.m} · {e.y}
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
                  <div style={{ width: 14, height: 14, background: "#E1CC01", border: "2px solid #0A0A0A", borderRadius: "50%" }}/>
                </div>
                <div style={{ paddingLeft: 24 }}>
                  <h3 style={{
                    margin: 0, fontFamily: "'DIN Condensed', sans-serif", fontSize: 32, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.005em", lineHeight: 1.1,
                  }}>
                    {e.title}
                  </h3>
                  <p style={{
                    margin: "10px 0 0", fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 400,
                    lineHeight: 1.55, color: "#1A1A1A", maxWidth: 720,
                  }}>
                    {e.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Quotes = function Quotes() {
  const quotes = [
    {
      photo: true,
      text: "«Допомагати збройним силам — наша невід'ємна потреба та спільна мета.»",
      name: "Віталій Жадобін",
      role: "Співзасновник БО «БФ Сенсум»",
    },
    {
      photo: false,
      text: "«Ми не лише надаємо допомогу на полі бою — ми створюємо умови для повернення воїнів до повноцінного життя.»",
      name: "Співзасновник",
      role: "БО «БФ Сенсум» · placeholder",
    },
    {
      photo: false,
      text: "«Прозора фінансова звітність — основа довіри. Кожна гривня має своє призначення і підтвердження.»",
      name: "Партнер",
      role: "Sensum Law Firm · placeholder",
    },
  ];

  return (
    <section style={{ background: "#FAFAF7", padding: "140px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle
            eyebrow="Голоси фонду"
            title={<>Цитати співзасновників<br/>і партнерів</>}
            kicker="Поки тут одна реальна цитата — від Віталія Жадобіна. Інші — placeholder-и, які заміняться вашими."
          />
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {quotes.map((q, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div style={{ background: "#fff", padding: 32, display: "flex", flexDirection: "column", gap: 24, minHeight: 480 }}>
                {/* photo block */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#E1CC01", overflow: "hidden" }}>
                  {q.photo ? (
                    <div style={{
                      position: "absolute", inset: 16,
                      backgroundImage: "url('../assets/quote-card-zhadobin.jpg')",
                      backgroundSize: "260% 170%", backgroundPosition: "8% 22%",
                      filter: "grayscale(1) contrast(1.05)",
                    }}/>
                  ) : (
                    <>
                      <div style={{ position: "absolute", inset: 16, background: "#1A1A1A",
                        backgroundImage: "repeating-linear-gradient(45deg, #2A2A2A 0 10px, #1A1A1A 10px 20px)" }}/>
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.4 }}>
                        <ReportChevron size={120} front="#E1CC01" back="#999361" backOpacity={0.7}/>
                      </div>
                    </>
                  )}
                  <div style={{ position: "absolute", right: -20, top: -20 }}>
                    <ReportChevron size={120} front="#F8F1BB" back="#999361" backOpacity={0.85}/>
                  </div>
                </div>

                <div style={{
                  fontFamily: "'DIN Condensed', sans-serif", fontSize: 22, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.005em", lineHeight: 1.2, color: "#0A0A0A",
                  flex: 1,
                }}>
                  {q.text}
                </div>

                <div>
                  <div style={{ fontFamily: "'Bravo Stencil', serif", fontSize: 28, lineHeight: 1, color: "#0A0A0A" }}>
                    {q.name}
                  </div>
                  <div style={{
                    marginTop: 6, fontFamily: "'DIN Condensed', sans-serif", fontSize: 12, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.14em", color: "#4A4A4A",
                  }}>
                    {q.role}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
