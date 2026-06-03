/* global React, SlideFrame, ChevronMark, SlideFooter */
window.CTASlide = function CTASlide() {
  return (
    <SlideFrame label="06 CTA" bg="#0A0A0A" padding={96}>
      <div style={{ position: "absolute", right: -200, bottom: -200 }}>
        <ChevronMark size={1100} front="#E1CC01" back="#999361" backOpacity={0.8}/>
      </div>

      <div style={{ position: "relative", zIndex: 2, paddingTop: 120, maxWidth: 1200 }}>
        <div style={{
          fontSize: 18, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: "#E1CC01",
          marginBottom: 32,
        }}>
          Долучайтесь
        </div>
        <h1 style={{
          margin: 0, fontSize: 160, fontWeight: 700, lineHeight: 0.95,
          textTransform: "uppercase", letterSpacing: "0.01em", color: "#fff",
        }}>
          Підтримати<br/>фонд
        </h1>

        <div style={{ marginTop: 56, fontSize: 24, fontWeight: 400, lineHeight: 1.4, color: "#E5E5E5", maxWidth: 900 }}>
          Кожен внесок документується у щомісячному звіті. Ви бачите, куди йдуть кошти — від донату до конкретної бригади.
        </div>

        <div style={{ marginTop: 64, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div style={{
            padding: "24px 48px", background: "#E1CC01", color: "#0A0A0A",
            fontSize: 20, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: 4,
          }}>
            sensum-fund.org
          </div>
          <div style={{
            padding: "24px 48px", border: "2px solid #fff", color: "#fff",
            fontSize: 20, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: 4,
          }}>
            IBAN UA00 0000 0000 0000 0000
          </div>
        </div>
      </div>

      <SlideFooter page="12 / 12"/>
    </SlideFrame>
  );
};
