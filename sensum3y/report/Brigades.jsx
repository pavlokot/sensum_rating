/* global React, FadeIn, SectionTitle, ReportChevron */

window.Brigades = function Brigades() {
  // Placeholder list — user will provide real names later
  const list = [
    "00 ОМБр", "00 ОДШБр", "00 ОБр НГУ", "00 ОМБр",
    "00 БрСпП", "00 ОМБр", "00 ОШБр", "00 ОБр ТрО",
    "00 ОМБр", "00 ОБр ССО", "00 ОМБр", "00 ОМБр",
    "Госпіталь · 00", "Медичний підрозділ", "00 ОМБр", "00 ОМБр",
  ];

  return (
    <section id="brigades" style={{ background: "#FAFAF7", padding: "140px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle
            eyebrow="Кому ми допомагали"
            title={<>Бригади та<br/>підрозділи</>}
            kicker="Список — placeholder. Надішліть конкретні назви, і ми підставимо. Передачі підтверджені актами та фото-подяками."
          />
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "2px solid #0A0A0A", borderLeft: "1px solid rgba(26,26,26,0.12)" }}>
          {list.map((b, i) => (
            <FadeIn key={i} delay={(i % 4) * 50}>
              <div style={{
                padding: "32px 24px",
                borderRight: "1px solid rgba(26,26,26,0.12)",
                borderBottom: "1px solid rgba(26,26,26,0.12)",
                background: "#fff",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 130,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 6, height: 6, background: "#E1CC01" }}/>
                  <span style={{
                    fontFamily: "'DIN Condensed', sans-serif", fontSize: 12, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.14em", color: "#4A4A4A",
                  }}>
                    Підрозділ #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div style={{
                  fontFamily: "'DIN Condensed', sans-serif", fontSize: 24, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.01em", color: "#0A0A0A",
                }}>
                  {b}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <div style={{
            marginTop: 32, padding: "20px 24px", background: "#E1CC01",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <ReportChevron size={32} front="#0A0A0A" back="#999361" backOpacity={0.4}/>
            <div style={{
              fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.10em", color: "#0A0A0A",
            }}>
              + ще десятки підрозділів — повний список у щомісячних звітах
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

window.Gallery = function Gallery() {
  // Photo placeholders — user is uploading thank-you photos separately
  const slots = Array.from({ length: 9 });
  return (
    <section id="gallery" style={{ background: "#fff", padding: "140px 32px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <SectionTitle
            eyebrow="Голоси з фронту"
            title={<>Подяки від<br/>підрозділів</>}
            kicker="Тут будуть фото-подяки від бригад, кому ми передавали техніку та обладнання. Завантажте файли — ми підставимо у сітку нижче."
          />
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {slots.map((_, i) => (
            <FadeIn key={i} delay={(i % 3) * 60}>
              <div style={{ position: "relative", aspectRatio: "4/5", background: "#0A0A0A", overflow: "hidden" }}>
                {/* Placeholder pattern */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: i % 2 === 0
                    ? "repeating-linear-gradient(45deg, #1A1A1A 0 12px, #0A0A0A 12px 24px)"
                    : "repeating-linear-gradient(135deg, #1A1A1A 0 12px, #0A0A0A 12px 24px)",
                  opacity: 0.6,
                }}/>
                {/* Centered chevron */}
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.18 }}>
                  <ReportChevron size={120} front="#E1CC01" back="#999361" backOpacity={0.6}/>
                </div>
                {/* Caption */}
                <div style={{
                  position: "absolute", left: 16, right: 16, bottom: 16,
                  display: "flex", flexDirection: "column", gap: 4,
                }}>
                  <div style={{
                    fontFamily: "'DIN Condensed', sans-serif", fontSize: 11, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.16em", color: "#E1CC01",
                  }}>
                    Фото · {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{
                    fontFamily: "'DIN Condensed', sans-serif", fontSize: 18, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.01em", color: "#fff",
                  }}>
                    Підрозділ · 00 ОМБр
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 400, color: "#B5B5B5",
                  }}>
                    Передано: дрони · 4 одиниці · 2024
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div style={{
            marginTop: 24, padding: "20px 24px", border: "1px dashed rgba(26,26,26,0.3)",
            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 400, color: "#4A4A4A",
            textAlign: "center",
          }}>
            ↑ Завантажте фото-подяки і ми замінимо ці плейсхолдери на справжні знімки.
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
