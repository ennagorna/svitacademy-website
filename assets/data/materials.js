/* ============================================================
   Svit Academy — дані каталогу навчальних матеріалів
   Редагувати ТУТ (назва, ціна, посилання, категорія) — без правок у розмітці.
   Категорії: games | seasonal | neuro | camps | reading
   ============================================================ */
window.MATERIALS = [
  { title: "Річна програма проєктного читання (1–4 клас)", desc: "Авторська методика на рік: 5 проєктів-сюжетів, списки літератури + бонус NetflixBook.", price: 1945, cat: "reading", cover: "cover-reading-program.webp", link: "https://secure.wayforpay.com/button/b5d9a35f0d77b" },
  { title: "Ігри для читання", desc: "16 ігор для читання: склади, літери, лабіринти, розчитки.", price: 450, cat: "reading", cover: "cover-reading-games.webp", link: "https://secure.wayforpay.com/button/b3bfa90f0212c" },
  { title: "Читання карате", desc: "12 челенджів з читання за системою «поясів» — мотивація читати.", price: 350, cat: "reading", cover: "cover-reading-karate.webp", link: "https://secure.wayforpay.com/button/b29084cd49d0e" },

  { title: "Математичні ігри", desc: "12 математичних ігор + бонус: лічба, приклади, годинник, квест.", price: 400, cat: "games", cover: "cover-math.webp", link: "https://secure.wayforpay.com/button/b4cc897a66065" },
  { title: "Пакет настільних ігор", desc: "9 настільних ігор: лічба, додавання-віднімання, логіка та подорожі.", price: 350, cat: "games", cover: "cover-board-games.webp", link: "https://secure.wayforpay.com/button/b74e20b8b870e" },
  { title: "Лего ігри", desc: "9 ігор з конструктором: будівлі, міста, логіка, хрестики-нолики.", price: 300, cat: "games", cover: "cover-lego.webp", link: "https://secure.wayforpay.com/button/baa28bec304f0" },
  { title: "Ігри до дня народження", desc: "9 ігор до Дня Народження: рамки, бінго, «Я шукаю», медальки та корони.", price: 350, cat: "games", cover: "cover-birthday.webp", link: "https://secure.wayforpay.com/button/b4f1289dab876" },

  { title: "Нейроруханки", desc: "Готові інтерактивні відеоігри: рух, ритм, увага й мовлення. 3 рівні складності.", price: 990, cat: "neuro", cover: "cover-neuro-warmups.webp", link: "https://secure.wayforpay.com/button/bd730b965019a" },
  { title: "Нейрогімнастичні ігри", desc: "14 нейроігор на координацію, увагу та міжпівкульну взаємодію.", price: 400, cat: "neuro", cover: "cover-neuro-games.webp", link: "https://secure.wayforpay.com/button/bda779573e803" },

  { title: "Табір «Веселкова карусель» (1–2 роки)", desc: "92 дні готового табірного контенту для найменших: сенсорика, музика, творчість.", price: 5500, cat: "camps", cover: "cover-camp-rainbow.webp", link: "https://secure.wayforpay.com/button/b301c97089ae9" },
  { title: "«Казковий табір» (3–4 роки)", desc: "92 дні сюжетної програми для дошкільнят: казки, пригоди, творчість.", price: 5500, cat: "camps", cover: "cover-camp-fairytale.webp", link: "https://secure.wayforpay.com/button/b54465b664021" },
  { title: "«Спортивно-ігровий табір» (5–6 років)", desc: "92 дні активного табору: спорт, квести, командні виклики.", price: 5500, cat: "camps", cover: "cover-camp-sports.webp", link: "https://secure.wayforpay.com/button/b71aceb44d07a" },
  { title: "«Пригодницький табір» (6–9 років)", desc: "92 дні пригод для молодших школярів: місії, досліди, проєкти.", price: 5500, cat: "camps", cover: "cover-camp-adventure.webp", link: "https://secure.wayforpay.com/button/ba189a3eb1f39" },
  { title: "«Табір відкриттів» (10–14 років)", desc: "92 дні сучасного табору для підлітків: проєкти, блогінг, soft skills.", price: 5500, cat: "camps", cover: "cover-camp-discovery.webp", link: "https://secure.wayforpay.com/button/bdb693f6869a4" },

  { title: "1 Вересня", desc: "Набір до 1 вересня: декорації, рамки, наліпки, листівки + 2 бонусні гри.", price: 650, cat: "seasonal", cover: "cover-back-to-school.webp", link: "https://secure.wayforpay.com/button/b3352de1c6e5a" },
  { title: "Осінні ігри", desc: "5 осінніх ігор + бонус «Осінній математичний квест».", price: 300, cat: "seasonal", cover: "cover-autumn.webp", link: "https://secure.wayforpay.com/button/b5bf159ce9495" },
  { title: "Хеловіновські ігри", desc: "11 ігор на Хелловін: розмальовки, бінго, настільна гра, декорації.", price: 400, cat: "seasonal", cover: "cover-halloween.webp", link: "https://secure.wayforpay.com/button/b9b98d7d3305c" },
  { title: "Новорічні ігри", desc: "30+ новорічних ігор: прописи, лабіринти, бінго, математика + бонус.", price: 650, cat: "seasonal", cover: "cover-newyear-games.webp", link: "https://secure.wayforpay.com/button/b098f128cc3d8" },
  { title: "Новорічний декор", desc: "Новорічні розтяжки й декорації + бонус «Адвент-календар».", price: 350, cat: "seasonal", cover: "cover-newyear-decor.webp", link: "https://secure.wayforpay.com/button/bee7a8135fcbe" },
  { title: "Великодні ігри", desc: "28 великодніх ігор, нейроігор і настільних ігор + декор.", price: 550, cat: "seasonal", cover: "cover-easter.webp", link: "https://secure.wayforpay.com/button/b70ef1105b9b2" },
  { title: "Весняні ігри", desc: "9 весняних матеріалів: аплікації, рахунок, декор і настільна гра.", price: 350, cat: "seasonal", cover: "cover-spring.webp", link: "https://secure.wayforpay.com/button/bca1ed38e1d38" },
  { title: "Літні ігри та декор", desc: "11 матеріалів: декор, розмальовки, ігри та картки-завдання на літо.", price: 350, cat: "seasonal", cover: "cover-summer-games.webp", link: "https://secure.wayforpay.com/button/b96ec08f32298" },
  { title: "Декор до класу", desc: "15 декорацій: алфавіт, цифри, кольори, правила класу, розтяжки.", price: 450, cat: "seasonal", cover: "cover-classroom-decor.webp", link: "https://secure.wayforpay.com/button/bb7fdc5f03f78" }
];
