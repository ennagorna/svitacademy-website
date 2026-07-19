/* ============================================================
   Svit Academy — catalog.js
   Рендерить каталог навчальних матеріалів із window.MATERIALS
   та фільтрує за категоріями. Підтримує #хеш для прямих переходів
   з меню (#sezonni, #tabirni тощо).
   ============================================================ */
(function () {
  var CATS = [
    { key: 'all',      label: 'Усі' },
    { key: 'games',    label: 'Ігри' },
    { key: 'seasonal', label: 'Сезонні та свята' },
    { key: 'neuro',    label: 'Нейро' },
    { key: 'camps',    label: 'Табірні програми' },
    { key: 'reading',  label: 'Читання' }
  ];
  var HASH = { sezonni: 'seasonal', tabirni: 'camps', igry: 'games', neuro: 'neuro', chytannya: 'reading' };
  var current = 'all';

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function plural(n) {
    var t = n % 100, o = n % 10;
    if (t > 10 && t < 20) return 'наборів';
    if (o === 1) return 'набір';
    if (o > 1 && o < 5) return 'набори';
    return 'наборів';
  }
  function card(m) {
    return '<article class="mat-card">'
      + '<div class="mat-card__media"><img class="mat-card__img" src="/assets/img/materials/' + m.cover + '" alt="' + esc(m.title) + '" loading="lazy"></div>'
      + '<div class="mat-card__body">'
      + '<h3 class="mat-card__title">' + esc(m.title) + '</h3>'
      + '<p class="mat-card__desc">' + esc(m.desc) + '</p>'
      + '<div class="mat-card__foot"><span class="mat-card__price num">' + m.price + ' грн</span>'
      + '<a class="btn btn--cta" href="' + m.link + '" target="_blank" rel="noopener">Купити набір</a></div>'
      + '</div></article>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('materials-grid');
    var filters = document.getElementById('materials-filters');
    var countEl = document.getElementById('materials-count');
    if (!grid || !window.MATERIALS) return;

    function render() {
      var list = current === 'all' ? MATERIALS : MATERIALS.filter(function (m) { return m.cat === current; });
      grid.innerHTML = list.map(card).join('');
      if (countEl) countEl.textContent = list.length + ' ' + plural(list.length);
    }
    function setActive() {
      filters.querySelectorAll('.filter-btn').forEach(function (b) {
        var on = b.dataset.cat === current;
        b.classList.toggle('filter-btn--active', on);
        b.setAttribute('aria-pressed', String(on));
      });
    }

    filters.innerHTML = CATS.map(function (c) {
      return '<button class="filter-btn" type="button" data-cat="' + c.key + '" aria-pressed="false">' + c.label + '</button>';
    }).join('');
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('.filter-btn');
      if (!b) return;
      current = b.dataset.cat;
      setActive();
      render();
    });

    var h = (location.hash || '').replace('#', '');
    if (HASH[h]) current = HASH[h];
    setActive();
    render();
  });
})();
