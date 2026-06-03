/* global React */
const { useState, useEffect, useRef } = React;

// FadeIn — fade + 8px slide on scroll, the only animation we use
window.FadeIn = function FadeIn({ children, delay = 0, as: Tag = "div", style = {}, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(8px)",
      transition: `opacity 600ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 600ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    }} {...rest}>
      {children}
    </Tag>
  );
};

// Reusable mark
window.ReportChevron = function ReportChevron({ size = 240, front = "#E1CC01", back = "#999361", backOpacity = 0.95 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 240 240" fill="none" style={{ display: "block" }}>
      <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill={back} opacity={backOpacity}/>
      <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill={front}/>
    </svg>
  );
};

// Section eyebrow + heading combo
window.SectionTitle = function SectionTitle({ eyebrow, title, kicker, light = false }) {
  return (
    <div style={{ marginBottom: 64 }}>
      {eyebrow && (
        <div style={{
          fontFamily: "'DIN Condensed', sans-serif", fontSize: 14, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.18em",
          color: light ? "#E1CC01" : "#4A4A4A",
        }}>
          {eyebrow}
        </div>
      )}
      <h2 style={{
        margin: "16px 0 0",
        fontFamily: "'DIN Condensed', sans-serif", fontSize: 72, fontWeight: 700,
        lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "0.005em",
        color: light ? "#fff" : "#0A0A0A",
      }}>
        {title}
      </h2>
      {kicker && (
        <div style={{
          marginTop: 24, maxWidth: 720,
          fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 400, lineHeight: 1.55,
          color: light ? "#D5D5D5" : "#1A1A1A",
        }}>
          {kicker}
        </div>
      )}
    </div>
  );
};
