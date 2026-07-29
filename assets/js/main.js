/* ============================================================
   Svit Academy — main.js
   Поведінка хедера: бургер-меню + випадаючі підменю.
   Викликається з include.js після вставки шапки (window.initHeader).
   ============================================================ */

window.initHeader = function () {
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('site-nav');
  const isMobile = () => window.matchMedia('(max-width: 1023px)').matches;

  /* --- Бургер: відкрити/закрити меню --- */
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      burger.setAttribute('aria-expanded', String(!open));
      document.body.classList.toggle('no-scroll', !open);
    });
  }

  /* --- Випадаючі підменю --- */
  const dropdowns = document.querySelectorAll('[data-dropdown]');

  dropdowns.forEach(item => {
    const trigger = item.querySelector('.nav__link');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      // На мобільному лінк-заголовок дропдауна лише розкриває підменю
      if (isMobile()) {
        e.preventDefault();
        const open = item.classList.toggle('nav__item--open');
        trigger.setAttribute('aria-expanded', String(open));
        // закриваємо інші відкриті
        dropdowns.forEach(d => { if (d !== item) d.classList.remove('nav__item--open'); });
      }
    });
  });

  /* --- Клік поза меню закриває десктопні дропдауни --- */
  document.addEventListener('click', (e) => {
    if (isMobile()) return;
    dropdowns.forEach(item => {
      if (!item.contains(e.target)) item.classList.remove('nav__item--open');
    });
  });

  /* --- Escape закриває все --- */
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    dropdowns.forEach(d => d.classList.remove('nav__item--open'));
    if (nav && nav.getAttribute('data-open') === 'true') {
      nav.setAttribute('data-open', 'false');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
    }
  });

  /* --- Скидаємо стан меню при переході на десктоп --- */
  window.addEventListener('resize', () => {
    if (!isMobile() && nav) {
      nav.setAttribute('data-open', 'false');
      document.body.classList.remove('no-scroll');
      dropdowns.forEach(d => d.classList.remove('nav__item--open'));
    }
  });
};

/* ============================================================
   Поява елементів при скролі (scroll-reveal)
   Працює на всіх сторінках — main.js підключений усюди.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const selector = [
    '.course-card', '.benefit', '.audience', '.perk', '.club-perk',
    '.month-card', '.topic-card', '.week-card', '.idea-step', '.level-card',
    '.media-split', '.offer', '.pricing__card', '.plan', '.year-plan',
    '.testimonial', '.aud-chip', '.cta-banner', '.trustbar__card'
  ].join(', ');

  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el, i) => {
    el.classList.add('reveal');
    // невелика хвиля-затримка для сусідніх карток
    el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
    io.observe(el);
  });
});
