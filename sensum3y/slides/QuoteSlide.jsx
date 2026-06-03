/* global React, SlideFrame, ChevronMark, SlideFooter */
window.QuoteSlide = function QuoteSlide() {
  return (
    <SlideFrame label="02 Quote" bg="#fff">
      <div style={{ display: "grid", gridTemplateColumns: "880px 1fr", gap: 80, height: "100%", alignItems: "center" }}>
        {/* Left: yellow block + b/w portrait + chevrons */}
        <div style={{ position: "relative", height: 760 }}>
          <div style={{ position: "absolute", inset: 0, background: "#E1CC01" }}/>
          {/* Photo */}
          <div style={{
            position: "absolute", left: 60, top: 60, width: 380, height: 540,
            backgroundImage: "url('../assets/quote-card-zhadobin.jpg')",
            backgroundSize: "270% 175%", backgroundPosition: "8% 22%",
            filter: "grayscale(1) contrast(1.05)",
          }}/>
          {/* Chevrons behind photo, right side */}
          <div style={{ position: "absolute", right: -40, top: 100 }}>
            <ChevronMark size={520} front="#F8F1BB" back="#999361" backOpacity={0.85}/>
          </div>
        </div>

        {/* Right: quote */}
        <div style={{ paddingRight: 40 }}>
          <div style={{
            fontSize: 44, fontWeight: 500, lineHeight: 1.15,
            textTransform: "uppercase", letterSpacing: "0.01em",
          }}>
            «Допомагати збройним силам — наша невід'ємна потреба та спільна мета.»
          </div>

          <div style={{ marginTop: 80, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: "'IM Fell English SC', serif", fontSize: 56, lineHeight: 1 }}>
              Віталій Жадобін
            </div>
            <div style={{
              fontSize: 16, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.12em",
              color: "#4A4A4A",
            }}>
              Співзасновник БО «БФ Сенсум»
            </div>
          </div>
        </div>
      </div>

      <SlideFooter page="02 / 12"/>
    </SlideFrame>
  );
};
