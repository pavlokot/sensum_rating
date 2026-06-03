/* global React, FadeIn, ReportChevron */

window.CTASection = function CTASection() {
  return (
    <section id="cta" style={{ background: "#0A0A0A", color: "#fff", padding: "140px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -240, bottom: -240 }}>
        <ReportChevron size={900} front="#E1CC01" back="#999361" backOpacity={0.85}/>
      </div>

      <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto" }}>
        <FadeIn>
          <div style={{
            fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.20em", color: "#E1CC01",
          }}>
            Долучайтесь
          </div>
          <h2 style={{
            margin: "20px 0 0",
            fontFamily: "'DIN Condensed', sans-serif", fontSize: 144, fontWeight: 700,
            lineHeight: 0.92, textTransform: "uppercase", letterSpacing: "0.005em",
          }}>
            Підтримати<br/>фонд
          </h2>
          <div style={{
            marginTop: 32, maxWidth: 720,
            fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 400, lineHeight: 1.55, color: "#D5D5D5",
          }}>
            Кожен внесок документується. Прозорість — наша головна цінність: у щомісячному звіті ви побачите, куди пішли ваші кошти.
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div style={{
            marginTop: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24,
          }}>
            <a href="https://www.facebook.com/sensumfoundation" target="_blank" rel="noreferrer"
               style={{
                 background: "#E1CC01", color: "#0A0A0A", padding: "32px 36px", borderRadius: 4,
                 textDecoration: "none", display: "flex", flexDirection: "column", gap: 8,
                 transition: "transform 200ms cubic-bezier(0.22,1,0.36,1)",
               }}
               onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
               onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 12, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.16em", color: "#4A4A4A",
              }}>
                Facebook
              </div>
              <div style={{
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 28, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.01em",
              }}>
                /sensumfoundation →
              </div>
            </a>
            <a href="https://www.instagram.com/sensumfoundation/" target="_blank" rel="noreferrer"
               style={{
                 background: "#fff", color: "#0A0A0A", padding: "32px 36px", borderRadius: 4,
                 textDecoration: "none", display: "flex", flexDirection: "column", gap: 8,
                 transition: "transform 200ms cubic-bezier(0.22,1,0.36,1)",
               }}
               onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
               onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              <div style={{
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 12, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.16em", color: "#4A4A4A",
              }}>
                Instagram
              </div>
              <div style={{
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 28, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.01em",
              }}>
                @sensumfoundation →
              </div>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div style={{
            marginTop: 80, padding: "32px 36px", border: "1px solid rgba(255,255,255,0.16)",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap",
          }}>
            <div>
              <div style={{
                fontFamily: "'DIN Condensed', sans-serif", fontSize: 12, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.16em", color: "#999361",
              }}>
                Реквізити
              </div>
              <div style={{
                marginTop: 8, fontFamily: "'DIN Condensed', sans-serif", fontSize: 24, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.01em",
              }}>
                IBAN · буде додано
              </div>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#B5B5B5", maxWidth: 380 }}>
              Надайте IBAN, monobank-банку, картку фонду — і ми підставимо у блок реквізитів.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

window.ReportFooter = function ReportFooter() {
  return (
    <footer style={{ background: "#0A0A0A", color: "#fff", padding: "48px 32px", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <ReportChevron size={32}/>
          <div style={{
            fontFamily: "'DIN Condensed', sans-serif", fontSize: 16, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.14em",
          }}>
            БО · БФ «Сенсум» · 2023 — 2026
          </div>
        </div>
        <div style={{
          fontFamily: "'DIN Condensed', sans-serif", fontSize: 12, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.14em", color: "#8A8A8A",
        }}>
          Окремий напрямок Sensum Law Firm
        </div>
      </div>
    </footer>
  );
};
