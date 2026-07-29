/* ============================================================
   Svit Academy — include.js
   Вставляє спільні header/footer у #site-header та #site-footer.
   Розмітка тут як рядки — працює і через сервер, і при відкритті
   файлу подвійним кліком (file://), без потреби в build-кроці.
   Правити header/footer треба ТІЛЬКИ тут — оновлюється на всіх сторінках.
   ============================================================ */

const HEADER_HTML = `
<header class="site-header">
  <div class="container header__inner">

    <a href="/index.html" class="header__logo" aria-label="Svit Academy — на головну">
      <img class="header__logo-mark" src="/assets/img/logo/logo-mark.png" alt="" width="44" height="44">
      <span class="header__logo-text">SVIT<small>ACADEMY</small></span>
    </a>

    <button class="header__burger" data-nav-toggle aria-label="Меню" aria-expanded="false" aria-controls="site-nav">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
    </button>

    <nav class="nav" id="site-nav" aria-label="Головне меню">
      <ul class="nav__list">
        <li class="nav__item"><a class="nav__link" href="/index.html">Головна</a></li>
        <li class="nav__item"><a class="nav__link" href="/kursy-dlya-ditey.html">Діти</a></li>
        <li class="nav__item"><a class="nav__link" href="/kursy-dlya-batkiv.html">Батьки</a></li>
        <li class="nav__item" data-dropdown>
          <a class="nav__link" href="/kursy-dlya-pedagogiv.html" aria-haspopup="true" aria-expanded="false">Педагоги
            <svg class="nav__caret" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="nav__dropdown">
            <a href="/klub-tvorchiy-vchytel.html">Клуб «Творчий Вчитель»</a>
            <a href="/litniy-klub-repetytoram.html">Клуб «Перший крок до школи»</a>
          </div>
        </li>
        <li class="nav__item" data-dropdown>
          <a class="nav__link" href="/navchalni-materialy.html" aria-haspopup="true" aria-expanded="false">Матеріали
            <svg class="nav__caret" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="nav__dropdown">
            <a href="https://svitacademy.wayforpay.shop" target="_blank" rel="noopener">Роздрібний магазин</a>
            <a href="/navchalni-materialy.html#sezonni">Сезонні набори</a>
            <a href="/navchalni-materialy.html#tabirni">Табірні програми</a>
          </div>
        </li>
        <li class="nav__item"><a class="nav__link" href="/pro-nas.html">Про нас</a></li>
        <li class="nav__item nav__item--mobile-cta">
          <a class="btn btn--cta" href="/kursy-dlya-ditey.html" style="width:100%;margin-top:12px;">Обрати курс</a>
        </li>
      </ul>
    </nav>

    <div class="header__actions">
      <a class="header__icon-btn" href="https://t.me/SvitAcademyBot" target="_blank" rel="noopener" aria-label="Написати в Telegram">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.6 18.9 19c-.23 1-.83 1.25-1.68.78l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.74 8.63-7.8c.38-.33-.08-.52-.58-.19L7.24 13.1l-4.6-1.44c-1-.31-1.02-1 .21-1.48l17.86-6.88c.83-.31 1.56.2 1.23 1.7Z"/></svg>
      </a>
      <a class="btn btn--cta" href="/kursy-dlya-ditey.html">Обрати курс</a>
    </div>

  </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer__grid">

      <div class="footer__col">
        <a href="/index.html" class="footer__logo" aria-label="Svit Academy">
          <span class="footer__logo-badge"><img src="/assets/img/logo/logo-mark.png" alt="" width="34" height="34"></span>
          <span>SVIT ACADEMY</span>
        </a>
        <p class="footer__desc">Тепла онлайн-академія для дітей, батьків і педагогів: курси, готові матеріали та клуб для вчителів.</p>
        <div class="footer__socials">
          <a class="footer__social" href="https://t.me/SvitAcademyBot" target="_blank" rel="noopener" aria-label="Telegram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.94 4.6 18.9 19c-.23 1-.83 1.25-1.68.78l-4.65-3.43-2.24 2.16c-.25.25-.46.46-.94.46l.33-4.74 8.63-7.8c.38-.33-.08-.52-.58-.19L7.24 13.1l-4.6-1.44c-1-.31-1.02-1 .21-1.48l17.86-6.88c.83-.31 1.56.2 1.23 1.7Z"/></svg></a>
          <a class="footer__social" href="https://www.instagram.com/svit_academy" target="_blank" rel="noopener" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg></a>
          <a class="footer__social" href="https://www.facebook.com/people/Svit-Academy/61550588621350/" target="_blank" rel="noopener" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg></a>
        </div>
      </div>

      <nav class="footer__col" aria-label="Навігація в підвалі">
        <h3 class="footer__col-title">Навігація</h3>
        <ul class="footer__links">
          <li><a href="/index.html">Головна</a></li>
          <li><a href="/kursy-dlya-ditey.html">Курси для дітей</a></li>
          <li><a href="/kursy-dlya-batkiv.html">Курси для батьків</a></li>
          <li><a href="/kursy-dlya-pedagogiv.html">Курси для педагогів</a></li>
          <li><a href="/navchalni-materialy.html">Навчальні матеріали</a></li>
          <li><a href="/pro-nas.html">Про нас</a></li>
          <li><a href="/blog.html">Блог</a></li>
          <li><a href="/kontakty.html">Контакти</a></li>
        </ul>
      </nav>

      <div class="footer__col">
        <h3 class="footer__col-title">Популярне</h3>
        <ul class="footer__links">
          <li><a href="/klub-tvorchiy-vchytel.html">Клуб «Творчий Вчитель»</a></li>
          <li><a href="/kursy-dlya-ditey/navchayemos-chytaty.html">Навчаємось читати</a></li>
          <li><a href="/navchalni-materialy.html">Навчальні матеріали</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h3 class="footer__col-title">Контакти</h3>
        <address class="footer__contact">
          <a href="tel:+380962646264">096 264 62 64</a><br>
          <a href="mailto:admin@kazkoviysvit.com.ua">admin@kazkoviysvit.com.ua</a>
          <ul class="footer__links mt-4">
            <li><a href="/legal.html#oferta">Публічна оферта</a></li>
            <li><a href="/legal.html#privacy">Політика конфіденційності</a></li>
          </ul>
        </address>
      </div>

    </div>

    <div class="footer__bottom">
      <span>© <span data-year>2026</span> Svit Academy. Усі права захищено.</span>
      <span class="footer__pay">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="3"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Оплата через WayForPay
      </span>
    </div>
  </div>
</footer>`;

function inject(id, html) {
  const host = document.getElementById(id);
  if (host) host.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  inject('site-header', HEADER_HTML);
  inject('site-footer', FOOTER_HTML);

  // Активний пункт меню за атрибутом data-page на <body>
  const page = document.body.getAttribute('data-page');
  if (page) {
    const link = document.querySelector(`#site-nav a[href$="${page}"]`);
    if (link) link.classList.add('nav__link--active');
  }

  // Рік у футері
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  if (window.initHeader) window.initHeader();
});
