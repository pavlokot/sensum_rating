/* global React, SlideFrame, ChevronMark, SlideFooter */
window.TitleSlide = function TitleSlide() {
  return (
    <SlideFrame label="01 Title" bg="#fff">
      {/* Big yellow block, bottom-right */}
      <div style={{ position: "absolute", right: 0, bottom: 0, width: 1100, height: 720, background: "#E1CC01" }}/>
      {/* Chevron mark behind */}
      <div style={{ position: "absolute", right: -120, top: 120 }}>
        <ChevronMark size={900} front="#F8F1BB" back="#999361" backOpacity={0.55}/>
      </div>

      <div style={{ position: "relative", zIndex: 2, paddingTop: 80, maxWidth: 1100 }}>
        <div style={{
          fontSize: 18, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em",
          color: "#4A4A4A", marginBottom: 32,
        }}>
          Благодійний фонд · Київ · 2024
        </div>

        <h1 style={{
          margin: 0, fontSize: 180, fontWeight: 700, lineHeight: 0.95,
          textTransform: "uppercase", letterSpacing: "0.01em",
        }}>
          Звіт за<br/>червень
        </h1>

        <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 96, height: 2, background: "#0A0A0A" }}/>
          <div style={{ fontFamily: "'IM Fell English SC', serif", fontSize: 36 }}>
            Sensum Charitable Foundation
          </div>
        </div>
      </div>

      <SlideFooter page="01 / 12"/>
    </SlideFrame>
  );
};
