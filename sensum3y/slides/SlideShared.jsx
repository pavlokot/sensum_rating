/* global React */
const { useState } = React;

// Generic slide frame — 1920x1080 with brand padding
window.SlideFrame = function SlideFrame({ children, bg = "#fff", padding = 96, label }) {
  return (
    <section
      data-screen-label={label}
      style={{
        width: 1920, height: 1080, background: bg, padding,
        position: "relative", overflow: "hidden", boxSizing: "border-box",
        fontFamily: "Oswald, sans-serif", color: "#0A0A0A",
      }}>
      {children}
    </section>
  );
};

// The double-chevron mark, scalable
window.ChevronMark = function ChevronMark({ size = 600, front = "#E1CC01", back = "#999361", backOpacity = 0.95 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 240 240" fill="none">
      <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill={back} opacity={backOpacity}/>
      <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill={front}/>
    </svg>
  );
};

// Footer line common to every slide
window.SlideFooter = function SlideFooter({ page }) {
  return (
    <div style={{
      position: "absolute", left: 96, right: 96, bottom: 48,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      fontSize: 16, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em",
      color: "#4A4A4A",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 240 240" style={{ display: "block" }}>
          <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill="#999361"/>
          <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill="#E1CC01"/>
        </svg>
        <span>БО · БФ «Сенсум»</span>
      </div>
      <span>{page}</span>
    </div>
  );
};
