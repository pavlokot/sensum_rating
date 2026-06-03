/* global React, SlideFrame, ChevronMark, SlideFooter */
window.SectionSlide = function SectionSlide() {
  return (
    <SlideFrame label="04 Section" bg="#E1CC01" padding={0}>
      {/* Big chevron behind */}
      <div style={{ position: "absolute", right: -200, top: -100 }}>
        <ChevronMark size={1400} front="#F8F1BB" back="#999361" backOpacity={0.6}/>
      </div>

      <div style={{ position: "relative", zIndex: 2, height: "100%", padding: 96, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{
          fontSize: 22, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em",
          color: "#0A0A0A", marginBottom: 40,
        }}>
          Розділ 02
        </div>
        <h1 style={{
          margin: 0, fontSize: 240, fontWeight: 700, lineHeight: 0.9,
          textTransform: "uppercase", letterSpacing: "0.005em",
        }}>
          Підтримка<br/>УБД
        </h1>
        <div style={{ marginTop: 56, maxWidth: 900, fontSize: 24, fontWeight: 400, lineHeight: 1.45 }}>
          Програми реабілітації, юридичного супроводу та допомоги родинам ветеранів спільно з партнерами Sensum Law Firm.
        </div>
      </div>

      <SlideFooter page="04 / 12"/>
    </SlideFrame>
  );
};
