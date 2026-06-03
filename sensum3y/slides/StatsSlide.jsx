/* global React, SlideFrame, SlideFooter */
window.StatsSlide = function StatsSlide() {
  const Stat = ({ num, label, accent }) => (
    <div style={{
      background: accent ? "#E1CC01" : "#fff",
      border: accent ? 0 : "1px solid rgba(26,26,26,0.12)",
      padding: 48, height: 320, display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{ fontSize: 120, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.01em" }}>
        {num}
      </div>
      <div style={{
        fontSize: 18, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: accent ? "#0A0A0A" : "#4A4A4A",
      }}>
        {label}
      </div>
    </div>
  );

  return (
    <SlideFrame label="03 Stats" bg="#fff">
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 16, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4A4A4A" }}>
          Червень 2024 · підсумки
        </div>
        <h2 style={{
          margin: "16px 0 0", fontSize: 92, fontWeight: 700, lineHeight: 0.95,
          textTransform: "uppercase", letterSpacing: "0.01em",
        }}>
          Що ми зробили<br/>цього місяця
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        <Stat num="2,48 М ₴" label="Зібрано донатів"/>
        <Stat num="14" label="Бригад · доставлено"/>
        <Stat num="86" label="Одиниць техніки" accent/>
        <Stat num="312" label="Ветеранів УБД"/>
      </div>

      <SlideFooter page="03 / 12"/>
    </SlideFrame>
  );
};
