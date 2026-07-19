# Svit Academy — сайт

Статичний сайт: чистий HTML + CSS + JavaScript. Без фреймворків, без npm, без build step.
GitHub → Cloudflare Pages · домен `svitacademy.com`

---

## Локальний перегляд

**Найпростіше:** двічі клікніть `▶︎ ЗАПУСТИТИ САЙТ.command` — відкриється браузер із сайтом.
Сторінка **оновлюється сама**, коли у файли вносяться зміни (працює лише локально).

Або вручну:
```bash
python3 -m http.server 8000
# відкрити http://localhost:8000
```

---

## Структура

```
index.html                     Головна
kursy-dlya-ditey.html          Курси для дітей
kursy-dlya-batkiv.html         Курси для батьків (мінікурс + 3 тарифи)
kursy-dlya-pedagogiv.html      Хаб для педагогів
klub-tvorchiy-vchytel.html     Лендінг клубу (річна + 11 місяців)
litniy-klub-repetytoram.html   Лендінг «Перший крок до школи»
navchalni-materialy.html       Каталог матеріалів (фільтри)
pro-nas.html                   Про нас (Оксана, команда, відгуки)
pro-oksanu-nagornu.html        Персональна сторінка засновниці
blog.html + blog/              Блог і статті
kontakty.html                  Контакти + форма
legal.html                     Оферта (#oferta) + Політика (#privacy)
404.html                       Сторінка помилки

assets/css/    variables → base → layout → components → utilities → pages/
assets/js/     include.js (хедер/футер), main.js (меню), catalog.js,
               blog-list.js, forms.js, live-reload.js (лише локально)
assets/data/   materials.js (23 товари), blog.js (статті)
assets/img/    logo, courses, materials, team, kids, testimonials, icons, oksana

robots.txt · sitemap.xml · _redirects · _headers · .gitignore
```

---

## Як редагувати контент без програміста

**Товари в каталозі матеріалів** — файл `assets/data/materials.js`.
Кожен рядок: назва, опис, ціна, категорія, обкладинка, посилання на оплату.
Змінили ціну чи посилання — збережіть файл, сайт одразу підхопить.

**Статті блогу** — файл `assets/data/blog.js` (список) + HTML-файл статті в папці `blog/`.

**Хедер і футер** — файл `assets/js/include.js`. Правите в одному місці — оновлюється на всіх сторінках.

**Кольори, шрифти, відступи** — файл `assets/css/variables.css`. Єдине джерело правди для дизайну.

---

## Публікація на Cloudflare Pages

1. Залийте папку в репозиторій GitHub.
2. Cloudflare Pages → **Create a project** → Connect to Git → оберіть репозиторій.
3. Налаштування збірки:
   - **Framework preset:** None
   - **Build command:** *(залишити порожнім)*
   - **Build output directory:** `/`
4. Deploy. Сайт запрацює на технічному домені `*.pages.dev`.
5. Перевірте всі сторінки й кнопки оплати.
6. **Custom domains** → додати `svitacademy.com`.
7. Відключити домен від SendPulse і перевести DNS на Cloudflare.
8. Дочекатися SSL (автоматично) і перевірити редіректи.

Кожен `git push` у `main` автоматично оновлює сайт.

---

## Що вже налаштовано

- `_redirects` — старі URL SendPulse (`/konsultacji-dla-batkiv`, `/seo`) ведуть на правильні сторінки; працюють і короткі адреси без `.html`
- `_headers` — кеш статики та базові заголовки безпеки
- `sitemap.xml` — 15 сторінок, `robots.txt` дозволяє індексацію
- `404.html` — брендована сторінка помилки з навігацією
- Адаптив, доступність (focus, alt, aria), підтримка `prefers-reduced-motion`

---

## TODO перед запуском

- [ ] Звірити e-mail у футері й контактах (`admin@kazkoviysvit.com.ua` — домен відрізняється від svitacademy.com)
- [ ] За потреби замінити тексти статей блогу на власні
- [ ] Перевірити всі кнопки оплати після переїзду домену
