/* global React */
window.Hero = function Hero({ onDonate }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
      <div style={{ position: "absolute", right: 0, top: 0, width: "55%", height: "100%", background: "#E1CC01" }}/>
      <div style={{ position: "absolute", right: -80, top: 80, opacity: 0.55 }}>
        <svg width="640" height="640" viewBox="0 0 240 240">
          <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill="#999361"/>
          <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill="#F8F1BB"/>
        </svg>
      </div>

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "120px 32px 140px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: "#4A4A4A", marginBottom: 24 }}>
            Благодійний фонд · Київ
          </div>
          <h1 style={{ margin: 0, fontSize: 96, fontWeight: 700, lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "0.005em", color: "#0A0A0A" }}>
            Підтримати<br/>тих, хто<br/>захищає
          </h1>
          <div style={{ marginTop: 32, fontSize: 18, fontWeight: 300, lineHeight: 1.55, color: "#1A1A1A", maxWidth: 520 }}>
            БФ «Сенсум» — благодійний напрям юридичної компанії Sensum Law Firm. Ми збираємо кошти, передаємо техніку та надаємо юридичну допомогу військовим і ветеранам УБД.
          </div>
          <div style={{ marginTop: 40, display: "flex", gap: 14 }}>
            <button onClick={onDonate} style={{
              background: "#0A0A0A", color: "#fff", border: 0, padding: "16px 32px", borderRadius: 4,
              fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em",
              cursor: "pointer", fontFamily: "Oswald, sans-serif",
            }}>Зробити внесок</button>
            <button style={{
              background: "transparent", color: "#0A0A0A", border: "1px solid #0A0A0A", padding: "16px 32px", borderRadius: 4,
              fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em",
              cursor: "pointer", fontFamily: "Oswald, sans-serif",
            }}>Останній звіт</button>
          </div>
        </div>

        {/* Right: photo on yellow */}
        <div style={{ position: "relative", paddingLeft: 60 }}>
          <div style={{
            width: "100%", aspectRatio: "3/4",
            backgroundImage: "url('../../assets/quote-card-zhadobin.jpg')",
            backgroundSize: "270% 180%", backgroundPosition: "8% 22%",
            filter: "grayscale(1) contrast(1.05)",
          }}/>
          <div style={{
            marginTop: 18, fontSize: 13, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.12em", color: "#0A0A0A",
          }}>
            Віталій Жадобін · Співзасновник
          </div>
        </div>
      </div>
    </section>
  );
};

window.StatsBar = function StatsBar() {
  const items = [
    { n: "2,48 М ₴", l: "Зібрано в червні" },
    { n: "14", l: "Бригад · доставлено" },
    { n: "312", l: "Ветеранів УБД" },
    { n: "26", l: "Місяців роботи" },
  ];
  return (
    <section style={{ background: "#0A0A0A", color: "#fff", padding: "56px 32px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 48 }}>
        {items.map((it, i) => (
          <div key={i}>
            <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1, color: "#E1CC01" }}>{it.n}</div>
            <div style={{ marginTop: 12, fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5B5B5" }}>{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.ProgramsSection = function ProgramsSection() {
  const cards = [
    { title: "Збір на техніку", body: "Дрони, рації, тепловізори. Передаємо безпосередньо до бригад.", tag: "Активна" },
    { title: "Підтримка УБД", body: "Юридичний супровід ветеранів та родин від партнерів Sensum Law Firm.", tag: "Активна" },
    { title: "Реабілітація", body: "Партнерські програми психологічної та фізичної реабілітації поранених.", tag: "Активна" },
  ];
  return (
    <section style={{ padding: "120px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: "#4A4A4A" }}>Програми</div>
        <h2 style={{ margin: "16px 0 64px", fontSize: 64, fontWeight: 700, lineHeight: 1, textTransform: "uppercase", letterSpacing: "0.005em" }}>
          Куди йде ваш<br/>внесок
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, borderTop: "2px solid #0A0A0A" }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              padding: "40px 36px 48px", borderRight: i < 2 ? "1px solid rgba(26,26,26,0.12)" : "0",
              borderBottom: "1px solid rgba(26,26,26,0.12)", display: "flex", flexDirection: "column", gap: 16, minHeight: 320,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 6, height: 6, background: "#E1CC01" }}/>
                <span style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4A4A4A" }}>{c.tag}</span>
              </div>
              <h3 style={{ margin: 0, fontSize: 32, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.005em", lineHeight: 1.05 }}>{c.title}</h3>
              <div style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.55, color: "#1A1A1A" }}>{c.body}</div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Дізнатись більше →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.QuoteSection = function QuoteSection() {
  return (
    <section style={{ background: "#FAFAF7", padding: "120px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "320px 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: -16, background: "#E1CC01" }}/>
          <div style={{ position: "relative",
            width: "100%", aspectRatio: "3/4",
            backgroundImage: "url('../../assets/quote-card-zhadobin.jpg')",
            backgroundSize: "270% 180%", backgroundPosition: "8% 22%",
            filter: "grayscale(1) contrast(1.05)",
          }}/>
        </div>
        <div>
          <div style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.005em" }}>
            «Допомагати збройним силам — наша невід'ємна потреба та спільна мета.»
          </div>
          <div style={{ marginTop: 40, fontFamily: "'IM Fell English SC', serif", fontSize: 36 }}>Віталій Жадобін</div>
          <div style={{ marginTop: 6, fontSize: 12, fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4A4A4A" }}>
            Співзасновник БО «БФ Сенсум»
          </div>
        </div>
      </div>
    </section>
  );
};

window.ReportsSection = function ReportsSection() {
  const reports = [
    { date: "Червень 2024", sum: "2 480 000 ₴", brigades: 14 },
    { date: "Травень 2024", sum: "1 920 000 ₴", brigades: 11 },
    { date: "Квітень 2024", sum: "2 110 000 ₴", brigades: 13 },
    { date: "Березень 2024", sum: "1 740 000 ₴", brigades: 9 },
  ];
  return (
    <section style={{ padding: "120px 32px", background: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, gap: 40 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: "#4A4A4A" }}>Звітність</div>
            <h2 style={{ margin: "16px 0 0", fontSize: 64, fontWeight: 700, lineHeight: 1, textTransform: "uppercase", letterSpacing: "0.005em" }}>
              Місячні звіти
            </h2>
          </div>
          <a href="#" style={{ fontSize: 13, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#0A0A0A" }}>
            Архів звітів →
          </a>
        </div>
        <div style={{ borderTop: "2px solid #0A0A0A" }}>
          {reports.map((r, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 40,
              padding: "32px 0", borderBottom: "1px solid rgba(26,26,26,0.12)", alignItems: "center",
            }}>
              <div style={{ fontSize: 28, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.005em" }}>{r.date}</div>
              <div style={{ fontSize: 16, fontWeight: 300, color: "#4A4A4A" }}>Зібрано: <strong style={{ color: "#0A0A0A", fontWeight: 600 }}>{r.sum}</strong></div>
              <div style={{ fontSize: 16, fontWeight: 300, color: "#4A4A4A" }}>Бригад: <strong style={{ color: "#0A0A0A", fontWeight: 600 }}>{r.brigades}</strong></div>
              <button style={{
                background: "transparent", border: "1px solid #0A0A0A", color: "#0A0A0A", padding: "12px 22px", borderRadius: 4,
                fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer",
                fontFamily: "Oswald, sans-serif",
              }}>Завантажити PDF</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.DonateSection = function DonateSection({ onSubmit }) {
  const [amount, setAmount] = React.useState(500);
  const presets = [200, 500, 1000, 2500];
  return (
    <section style={{ background: "#0A0A0A", color: "#fff", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -200, bottom: -200, opacity: 0.9 }}>
        <svg width="700" height="700" viewBox="0 0 240 240">
          <path d="M125 40 L205 120 L125 200 L100 200 L180 120 L100 40 Z" fill="#999361"/>
          <path d="M65 40 L145 120 L65 200 L40 200 L120 120 L40 40 Z" fill="#E1CC01"/>
        </svg>
      </div>

      <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.18em", color: "#E1CC01" }}>Долучайтесь</div>
          <h2 style={{ margin: "16px 0 24px", fontSize: 80, fontWeight: 700, lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "0.005em" }}>
            Підтримати<br/>фонд
          </h2>
          <div style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.6, color: "#B5B5B5", maxWidth: 420 }}>
            Кожен внесок документується. У місячному звіті ви побачите, куди пішли саме ваші кошти.
          </div>
        </div>

        <div style={{ background: "#fff", color: "#0A0A0A", padding: 40, borderRadius: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4A4A4A", marginBottom: 8 }}>Сума, ₴</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {presets.map(p => (
              <button key={p} onClick={() => setAmount(p)} style={{
                flex: 1, padding: "14px 0", border: amount === p ? "2px solid #0A0A0A" : "1px solid rgba(26,26,26,0.24)",
                background: amount === p ? "#E1CC01" : "#fff", borderRadius: 4, cursor: "pointer",
                fontFamily: "Oswald, sans-serif", fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em",
              }}>{p.toLocaleString("uk")}</button>
            ))}
          </div>
          <input type="number" value={amount} onChange={e => setAmount(+e.target.value)} style={{
            width: "100%", boxSizing: "border-box", padding: "14px 16px", border: "1px solid rgba(26,26,26,0.24)",
            borderRadius: 4, fontSize: 16, fontFamily: "Oswald, sans-serif", marginBottom: 16,
          }}/>

          <div style={{ fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4A4A4A", marginBottom: 8 }}>Призначення</div>
          <select style={{
            width: "100%", boxSizing: "border-box", padding: "14px 16px", border: "1px solid rgba(26,26,26,0.24)",
            borderRadius: 4, fontSize: 14, fontFamily: "Oswald, sans-serif", marginBottom: 24, background: "#fff",
          }}>
            <option>Загальна підтримка</option>
            <option>Збір на техніку</option>
            <option>Підтримка УБД</option>
            <option>Реабілітація</option>
          </select>

          <button onClick={onSubmit} style={{
            width: "100%", background: "#0A0A0A", color: "#fff", border: 0, padding: "18px 0", borderRadius: 4,
            fontFamily: "Oswald, sans-serif", fontSize: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer",
          }}>
            Перейти до оплати · {amount.toLocaleString("uk")} ₴
          </button>
        </div>
      </div>
    </section>
  );
};
