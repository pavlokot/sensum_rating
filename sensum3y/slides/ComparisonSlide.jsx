/* global React, SlideFrame, SlideFooter */
window.ComparisonSlide = function ComparisonSlide() {
  const items = [
    { date: "03 чер", title: "Передача 4 квадрокоптерів Mavic 3T", brigade: "93 ОМБр" },
    { date: "11 чер", title: "Закупівля медичних аптечок IFAK · 120 шт.", brigade: "Медичний підрозділ" },
    { date: "17 чер", title: "Передача 2 пікапів Toyota Hilux", brigade: "47 ОМБр" },
    { date: "24 чер", title: "Юридична допомога родинам УБД · 38 справ", brigade: "Sensum Law Firm" },
    { date: "29 чер", title: "Закупівля рацій Motorola DP4400e · 24 шт.", brigade: "12 БрСпП «Азов»" },
  ];

  return (
    <SlideFrame label="05 Timeline" bg="#fff">
      <div style={{ marginBottom: 64 }}>
        <div style={{ fontSize: 16, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4A4A4A" }}>
          Хронологія · червень 2024
        </div>
        <h2 style={{
          margin: "16px 0 0", fontSize: 80, fontWeight: 700, lineHeight: 1,
          textTransform: "uppercase", letterSpacing: "0.01em",
        }}>
          Що передано
        </h2>
      </div>

      <div>
        {items.map((it, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "180px 1fr 360px", gap: 40,
            padding: "32px 0", borderBottom: "1px solid rgba(26,26,26,0.12)",
            alignItems: "baseline",
          }}>
            <div style={{ fontSize: 24, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {it.date}
            </div>
            <div style={{ fontSize: 28, fontWeight: 400, lineHeight: 1.3, textTransform: "none", letterSpacing: 0 }}>
              {it.title}
            </div>
            <div style={{ fontSize: 18, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: "#4A4A4A", textAlign: "right" }}>
              {it.brigade}
            </div>
          </div>
        ))}
      </div>

      <SlideFooter page="05 / 12"/>
    </SlideFrame>
  );
};
