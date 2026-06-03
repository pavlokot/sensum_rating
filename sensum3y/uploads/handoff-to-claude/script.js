const events = [
  {
    year: 2023,
    date: "23 червня · 2023",
    title: "ВЧ А4124",
    what: "Автомобіль Ford Transit",
    image: "assets/photos/legacy-inline-08.jpg",
    tags: ["авто", "120 000 грн"],
  },
  {
    year: 2023,
    date: "11 липня · 2023",
    title: "93 ОМБр · сапери",
    what: "Прилади нічного бачення",
    image: "assets/photos/93-ombr-night-vision-2023-07-11.png",
    tags: ["оптика", "сапери"],
    orientation: "portrait",
  },
  {
    year: 2023,
    date: "19 липня · 2023",
    title: "227 ОАБ",
    what: "Партія автомобільних шин",
    image: "assets/photos/227-oab-tires-2023-07-19.png",
    tags: ["авто", "шини"],
    orientation: "wide-photo",
  },
  {
    year: 2023,
    date: "31 липня · 2023",
    title: "ССО",
    what: "Бійці ССО дякують фонду за допомогу",
    image: "assets/photos/sso-thanks-2023-07-31.png",
    tags: ["звіт", "подяка"],
    orientation: "wide-photo",
  },
  {
    year: 2023,
    date: "8 серпня · 2023",
    title: "93 ОМБр · сапери",
    what: "Міношукачі Equinox 900",
    image: "assets/photos/93-ombr-equinox-900.png",
    tags: ["розмінування", "спецтехніка"],
    orientation: "portrait",
  },
  {
    year: 2023,
    date: "31 серпня · 2023",
    title: "Молодіжні чоловічі команди волейболу України",
    what: "Разом із Київською дитячою волейбольною академією підтримали поїздку українських спортсменів на Beach Pro Tour Futures 2023 у Варшаві.",
    image: "assets/photos/volleyball-warsaw-team.jpg",
    tags: ["спорт", "соцпроєкт"],
    social: true,
  },
  {
    year: 2023,
    date: "25 вересня · 2023",
    title: "93 ОМБр «Холодний Яр»",
    what: "Транспортний засіб: квадроцикл",
    image: "assets/photos/93-ombr-quad-2023-09-25.png",
    tags: ["авто", "транспорт"],
    orientation: "portrait",
  },
  {
    year: 2023,
    date: "12 жовтня · 2023",
    title: "ССО",
    what: "Монокуляр нічного бачення",
    image: "assets/photos/legacy-inline-09.jpg",
    tags: ["оптика", "нічне бачення"],
    orientation: "wide-photo",
  },
  {
    year: 2023,
    date: "15 листопада · 2023",
    title: "3 ОБ УДА «Волинь»",
    what: "Одяг і базові потреби для бійців",
    image: "assets/photos/uda-volyn-clothing-2023-11-15.png",
    tags: ["екіпірування", "базові потреби"],
    orientation: "wide-photo",
  },
  {
    year: 2023,
    date: "29 листопада · 2023",
    title: "1 БрОП НГУ «Буревій»",
    what: "Відновлення автомобіля",
    image: "assets/photos/bureviy-thanks.jpg",
    tags: ["ремонт", "авто"],
    orientation: "portrait",
  },
  {
    year: 2023,
    date: "12 грудня · 2023",
    title: "Швидка на лінію",
    what: "Автомобіль швидкої допомоги з укомплектуванням",
    image: "assets/photos/ambulance-2023-12-12.png",
    tags: ["медицина", "евакуація"],
    spotlight: true,
    orientation: "wide-photo",
  },
  {
    year: 2024,
    date: "5 січня · 2024",
    title: "1 БрОП «Буревій»",
    what: "18 зарядних станцій EcoFlow і завершення відновлення авто",
    image: "assets/photos/bureviy-ecoflow-2024-01-05.png",
    tags: ["енергія", "авто"],
    spotlight: true,
    orientation: "wide-photo",
  },
  {
    year: 2024,
    date: "17 січня · 2024",
    title: "1 Президентська бр.",
    what: "Старт збору на РЕБ: 3 спектр-аналізатори «Цукорок» і 3 підсилювачі сигналу «Шатро» STR 50-IV.",
    image: "assets/photos/first-presidential-reb-fundraiser-2024-01-17.jpg",
    tags: ["РЕБ", "збір"],
    orientation: "portrait",
  },
  {
    year: 2024,
    date: "14 лютого · 2024",
    title: "ДФТГ «Лівий берег» · 112 ОБр ТрО",
    what: "Подяка-грамота директору Олексію Лазарєву",
    image: "assets/photos/left-bank-thanks.jpg",
    tags: ["подяка", "архів"],
    orientation: "portrait",
  },
  {
    year: 2024,
    date: "4-12 квітня · 2024",
    title: "54 бригада · БпЛА",
    what: "Засоби РЕБ, зв'язку та інше обладнання",
    image: "assets/photos/54-brigade-equipment-team-2024-04.jpg",
    tags: ["РЕБ", "зв'язок"],
    key: true,
  },
  {
    year: 2024,
    date: "8 травня · 2024",
    title: "БФ «Гуркіт» · футбол 5x5",
    what: "Благодійний турнір з міні-футболу: 12 команд і збір на 5 приладів нічного бачення.",
    image: "assets/photos/football-charity-cup-5x5.jpg",
    tags: ["спорт", "соцпроєкт", "750 000 грн"],
    social: true,
    spotlight: true,
  },
  {
    year: 2024,
    date: "6 серпня · 2024",
    title: "93 ОМБр «Холодний Яр»",
    what: "Автомобіль",
    image: "assets/photos/legacy-inline-10.jpg",
    tags: ["авто"],
    orientation: "wide-photo",
  },
  {
    year: 2024,
    date: "19 серпня · 2024",
    title: "Чемпіонат · пляжний футбол",
    what: "Команда БФ SENSUM посіла 1 місце у своїй лізі.",
    image: "assets/photos/beach-football-champions-2024.jpg",
    tags: ["спорт", "соцпроєкт"],
    social: true,
  },
  {
    year: 2024,
    date: "5 вересня · 2024",
    title: "1 танкова бригада",
    what: "Побутове устаткування для підрозділу",
    image: "assets/photos/first-tank-equipment-unloading-2024-09-05.jpg",
    tags: ["побут", "інфраструктура"],
  },
  {
    year: 2024,
    date: "17 вересня · 2024",
    title: "3 ОБ УДА «Волинь»",
    what: "Тепловізор",
    image: "assets/photos/uda-volyn-thermal-2024-09-17.png",
    tags: ["тепловізор", "оптика"],
    orientation: "portrait",
  },
  {
    year: 2024,
    date: "18 листопада · 2024",
    title: "Бат. «Сила Свободи»",
    what: "Наземний роботизований комплекс «Веприк» спільно з Благодійним фондом «Завжди Надія».",
    image: "assets/photos/vepryk-partner-group-2024-11-18.jpg",
    tags: ["роботизовані системи", "партнерство"],
    key: true,
    spotlight: true,
    orientation: "wide-photo",
  },
  {
    year: 2024,
    date: "21 листопада · 2024",
    title: "93 ОМБр",
    what: "Ремонт автомобіля",
    image: "assets/photos/legacy-inline-11.jpg",
    tags: ["авто", "ремонт"],
    orientation: "portrait",
  },
  {
    year: 2025,
    date: "27 січня · 2025",
    title: "3 ОБ УДА «Волинь»",
    what: "Портативний відеоперехоплювач, антена для передачі зв'язку та плата target.",
    image: "assets/photos/uda-volyn-video-interceptor-2025-01-27.png",
    tags: ["РЕБ", "зв'язок"],
    orientation: "wide-photo",
  },
  {
    year: 2025,
    date: "30 січня · 2025",
    title: "ВЧ А2943",
    what: "БпЛА «Сойка»",
    tags: ["БпЛА"],
  },
  {
    year: 2025,
    date: "5 лютого · 2025",
    title: "ВЧ А2943",
    what: "Засоби зв'язку, РЕБ і детекції дронів",
    tags: ["РЕБ", "зв'язок"],
  },
  {
    year: 2025,
    date: "19 березня · 2025",
    title: "12 бригада НГУ",
    what: "Автомобіль у співпраці з іншими волонтерами",
    image: "assets/photos/legacy-inline-15.jpg",
    tags: ["авто", "партнерство"],
    orientation: "portrait",
  },
  {
    year: 2025,
    date: "7 липня · 2025",
    title: "102 ОБр ТрО",
    what: "Дрони Mavic 3T Thermal: 2 шт., у співпраці з волонтером Світланою Вінтонюк.",
    image: "assets/photos/102-tro-mavic-3t-2025-07-07.jpg",
    tags: ["дрони", "партнерство"],
    spotlight: true,
  },
  {
    year: 2025,
    date: "21 серпня · 2025",
    title: "Підрозділ рекрутингу",
    what: "Транспорт для підрозділу рекрутингу та комплектації",
    image: "assets/photos/recruiting-unit-transport-2025-08-21.png",
    tags: ["авто", "рекрутинг"],
    orientation: "wide-photo",
  },
  {
    year: 2025,
    date: "27 серпня · 2025",
    title: "Падел · Місто Спорту",
    what: "Відкриття нової локації для паделу на Долобецькому острові.",
    image: "assets/photos/padel-hydropark-opening.jpg",
    tags: ["спорт", "соцпроєкт"],
    social: true,
    spotlight: true,
  },
  {
    year: 2025,
    date: "1 жовтня · 2025",
    title: "ВЧ А2860",
    what: "Автомобіль Citroën Jumper. Передано 30.09.2025, опубліковано в День захисників.",
    image: "assets/photos/legacy-inline-16.jpg",
    tags: ["авто"],
    orientation: "wide-photo",
  },
  {
    year: 2026,
    date: "9 лютого · 2026",
    title: "3 ОБ УДА «Волинь»",
    what: "Тепловізор INFIRAY Saim SCL35 і зарядна станція EcoFlow River 2 MAX.",
    tags: ["тепловізор", "енергія"],
  },
  {
    year: 2026,
    date: "22 лютого · 2026",
    title: "ВЧ А2943",
    what: "Виріб РЕБ «Намет-Д»",
    tags: ["РЕБ"],
  },
  {
    year: 2026,
    date: "2 березня · 2026",
    title: "ВЧ А5049",
    what: "Пристрій РЕБ «Чуйка 3.0» і виносна антена.",
    tags: ["РЕБ"],
  },
  {
    year: 2026,
    date: "4 березня · 2026",
    title: "Адресна допомога військовослужбовцю",
    what: "Цільова благодійна допомога 432 982 грн на придбання житла.",
    tags: ["адресна допомога", "432 982 грн"],
    key: true,
  },
  {
    year: 2026,
    date: "4 квітня · 2026",
    title: "ВЧ А2943",
    what: "Запасні частини та витратні матеріали для автомобілів",
    tags: ["авто", "запчастини"],
  },
  {
    year: 2026,
    date: "4 травня · 2026",
    title: "ВЧ А3892",
    what: "Засоби управління та комплектуючі для збору БпЛА.",
    tags: ["дрони", "комплектуючі"],
  },
  {
    year: 2026,
    date: "травень · 2026",
    title: "109 ОГШБ · 10 ОГШБр «Едельвейс»",
    what: "Підсилення FPV-напрямку: пульти управління, FPV-окуляри, зарядні пристрої, модулі, контролери, підвіси для камер і пластик для 3D-друку.",
    image: "assets/photos/109-edelweiss-fpv-may-2026.png",
    tags: ["FPV", "комплектуючі"],
    spotlight: true,
  },
];

const years = [2023, 2024, 2025, 2026];
const root = document.getElementById("timeline-root");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function eventCard(item) {
  const card = el("article", [
    "event-card",
    item.image ? "has-image" : "text-only",
    item.social ? "social" : "",
    item.key ? "key" : "",
    item.spotlight ? "spotlight" : "",
    item.orientation || "",
  ].filter(Boolean).join(" "));

  if (item.image) {
    const media = el("div", "media");
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = `${item.title}: ${item.what}`;
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);
    card.appendChild(media);
  }

  const body = el("div", "body");
  body.appendChild(el("span", "date", item.date));
  body.appendChild(el("h3", "", item.title));
  body.appendChild(el("p", "", item.what));

  const tags = el("div", "tags");
  item.tags.forEach((tag) => tags.appendChild(el("span", "tag", tag)));
  body.appendChild(tags);
  card.appendChild(body);

  return card;
}

function yearBlock(year) {
  const block = el("section", "year-block");
  block.setAttribute("aria-label", String(year));

  const label = el("aside", "year-label");
  label.appendChild(el("strong", "", String(year)));
  label.appendChild(el("span", "", year === 2026 ? "триває" : "події року"));

  const cards = el("div", "cards");
  events
    .filter((item) => item.year === year)
    .forEach((item) => cards.appendChild(eventCard(item)));

  block.appendChild(label);
  block.appendChild(cards);
  return block;
}

function featureBlock(kind) {
  const wrap = document.createElement("div");
  const blocks = {
    "53": `
      <article class="feature feature-53 timeline-feature">
        <div class="container feature-grid">
          <div class="feature-copy">
            <p class="eyebrow">Флагманська партнерська лінія</p>
            <h3>1 рота 53 ОМБр</h3>
            <p>Три роки безперервної допомоги одній роті: від антидронових систем і транспорту до пікапів, гуми, дронів та ремонтів. За цією історією видно, як змінювались потреби підрозділу й сам характер війни.</p>
            <div class="feature-stats">
              <span><strong>13</strong> передач</span>
              <span><strong>2023-2025</strong> період</span>
            </div>
          </div>
          <div class="mini-timeline" aria-label="Передачі 1 роті 53 ОМБр">
            <div><time>7 лис 2023</time><span>Передова антидронова система</span></div>
            <div><time>19 лют 2024</time><span>Автомобіль</span></div>
            <div><time>7 бер 2024</time><span>Звіт про роботу переданих антидронових глушилок</span></div>
            <div><time>26 бер 2024</time><span>Додаткові безпілотники для розвідки й коригування</span></div>
            <div><time>8 жов 2024</time><span>Комплект топової гуми</span></div>
            <div><time>19 гру 2024</time><span>Пікап</span></div>
            <div><time>2025</time><span>Серія авто та оновлення автопарку після втрат</span></div>
          </div>
        </div>
        <div class="container gallery gallery-53" aria-label="Фото 1 роти 53 ОМБр">
          <figure class="wide"><img src="assets/photos/53-ombr-company-documentary-01.png" alt="Бійці 1 роти 53 ОМБр біля автомобіля"><figcaption>1 рота 53 ОМБр</figcaption></figure>
          <figure class="wide"><img src="assets/photos/53-ombr-company-documentary-02.png" alt="Бійці 1 роти 53 ОМБр біля автомобіля підрозділу"><figcaption>Документальний кадр</figcaption></figure>
          <figure><img src="assets/photos/53-ombr-sensum-pickup-side.jpg" alt="Пікап із написом СЕНСУМ для 53 ОМБр"><figcaption>Брендований пікап</figcaption></figure>
          <figure><img src="assets/photos/legacy-inline-01.jpg" alt="Грудень 2024, передача для 53 ОМБр"><figcaption>Грудень 2024</figcaption></figure>
          <figure><img src="assets/photos/legacy-inline-02.jpg" alt="Квітень 2025, передача для 53 ОМБр"><figcaption>Квітень 2025</figcaption></figure>
          <figure><img src="assets/photos/legacy-inline-05.jpg" alt="Серпень 2025, передача для 53 ОМБр"><figcaption>Серпень 2025</figcaption></figure>
        </div>
      </article>`,
    mara: `
      <article class="feature dark timeline-feature">
        <div class="container feature-grid">
          <div class="feature-copy">
            <p class="eyebrow">Показова передача · збір і звіт</p>
            <h3>БпАК «Мара» · 45 ОАБр</h3>
            <p>Великий збір і завершений звіт для 45 окремої артилерійської бригади: комплекси БпАК «Мара» українського виробництва для аеророзвідки, підтвердження від підрозділу й офіційна подяка.</p>
            <div class="feature-stats">
              <span><strong>1 716 696,33 ₴</strong> зібрано та передано</span>
              <span><strong>45 ОАБр</strong> отримувач</span>
            </div>
          </div>
          <div class="mosaic">
            <figure class="tall"><img src="assets/photos/bpak-mara-operator-snow.jpg" alt="Боєць із двома БпАК Мара на снігу"><figcaption>Звіт з підрозділу</figcaption></figure>
            <figure><img src="assets/photos/bpak-mara.jpg" alt="БпАК Мара на кейсах"><figcaption>Комплекси</figcaption></figure>
            <figure><img src="assets/photos/bpak-mara-snow.jpg" alt="Два БпАК Мара на снігу"><figcaption>На позиціях</figcaption></figure>
            <figure><img src="assets/photos/45-oabr-thanks.jpg" alt="Подяка від 45 окремої артилерійської бригади"><figcaption>Подяка 45 ОАБр</figcaption></figure>
          </div>
        </div>
      </article>`,
    madyar: `
      <article class="feature timeline-feature">
        <div class="container feature-grid">
          <div class="feature-copy">
            <p class="eyebrow">Опорне партнерство</p>
            <h3>«Птахи Мадяра»</h3>
            <p>Фінансова допомога на FPV та розвідувальні дрони для підрозділу Роберта Бровді. У відповідь фонд отримав офіційну подяку та прапор «Очі та жало» з підписами бійців.</p>
            <div class="feature-stats">
              <span><strong>25 сер 2023</strong> закриття збору</span>
              <span><strong>6 жов 2023</strong> FPV і розвіддрони</span>
            </div>
          </div>
          <div class="mosaic madyar">
            <figure class="featured-madyar"><img src="assets/photos/ptakhy-madyara-thanks.jpg" alt="Бійці Птахів Мадяра з подякою фонду"><figcaption>Звіт від підрозділу</figcaption></figure>
            <figure><img src="assets/photos/ptakhy-madyara-plaque.jpg" alt="Подяка від підрозділу Птахи Мадяра"><figcaption>Офіційна подяка</figcaption></figure>
            <figure><img src="assets/photos/ptakhy-madyara-flag.jpg" alt="Прапор Птахів Мадяра з підписами"><figcaption>Прапор із підписами</figcaption></figure>
            <figure><img src="assets/photos/legacy-inline-12.jpg" alt="Фото з архіву подяки Птахів Мадяра"><figcaption>Архів фонду</figcaption></figure>
          </div>
        </div>
      </article>`,
    "45": `
      <article class="feature dark compact-feature timeline-feature">
        <div class="container feature-grid">
          <div class="feature-copy">
            <p class="eyebrow">Окрема вдячність</p>
            <h3>45 ОАБр</h3>
            <p>Подяка від 45 окремої артилерійської бригади закріплює історію «Мари» як завершену передачу: збір, обладнання, звіт, визнання підрозділу.</p>
          </div>
          <figure class="single-photo">
            <img src="assets/photos/45-oabr-thanks.jpg" alt="Офіційна подяка від 45 окремої артилерійської бригади">
          </figure>
        </div>
      </article>`,
  };
  wrap.innerHTML = blocks[kind].trim();
  return wrap.firstElementChild;
}

root.appendChild(featureBlock("53"));
root.appendChild(yearBlock(2023));
root.appendChild(featureBlock("mara"));
root.appendChild(yearBlock(2024));
root.appendChild(featureBlock("madyar"));
root.appendChild(yearBlock(2025));
root.appendChild(featureBlock("45"));
root.appendChild(yearBlock(2026));
