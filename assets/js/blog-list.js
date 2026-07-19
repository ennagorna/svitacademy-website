/* ============================================================
   Svit Academy — blog-list.js
   Рендерить картки статей блогу з window.POSTS у #blog-grid.
   ============================================================ */
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function fmtDate(iso) {
    var months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    var d = new Date(iso);
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }
  function card(p) {
    return '<article class="post-card">'
      + '<a class="post-card__media" href="' + p.url + '"><img src="' + p.cover + '" alt="' + esc(p.title) + '" loading="lazy"></a>'
      + '<div class="post-card__body">'
      + '<span class="badge badge--category">' + esc(p.cat) + '</span>'
      + '<h2 class="post-card__title"><a href="' + p.url + '">' + esc(p.title) + '</a></h2>'
      + '<p class="post-card__excerpt">' + esc(p.excerpt) + '</p>'
      + '<div class="post-card__meta">' + fmtDate(p.date) + ' · ' + esc(p.readtime) + ' читання</div>'
      + '</div></article>';
  }
  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('blog-grid');
    if (!grid || !window.POSTS) return;
    var posts = window.POSTS.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
    grid.innerHTML = posts.map(card).join('');
  });
})();
