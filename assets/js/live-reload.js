/* ============================================================
   Svit Academy — live-reload.js
   Тільки для локального перегляду (localhost). Опитує ключові
   файли й сам перезавантажує сторінку, коли щось змінилось.
   На реальному сайті (svitacademy.com) не робить нічого.
   ============================================================ */
(function () {
  var host = location.hostname;
  if (host !== 'localhost' && host !== '127.0.0.1' && host !== '') return;

  var files = [
    '/index.html',
    '/assets/css/variables.css',
    '/assets/css/base.css',
    '/assets/css/layout.css',
    '/assets/css/components.css',
    '/assets/css/utilities.css',
    '/assets/css/pages/home.css',
    '/assets/js/include.js',
    '/assets/js/main.js'
  ];
  var stamps = {};

  function tagOf(res) {
    return (res.headers.get('Last-Modified') || '') + '|' + (res.headers.get('Content-Length') || '');
  }

  async function check() {
    for (var i = 0; i < files.length; i++) {
      var f = files[i];
      try {
        var res = await fetch(f + '?_lr=' + Date.now(), { method: 'HEAD', cache: 'no-store' });
        var tag = tagOf(res);
        if (stamps[f] !== undefined && stamps[f] !== tag) { location.reload(); return; }
        stamps[f] = tag;
      } catch (e) { /* ігноруємо */ }
    }
  }

  setInterval(check, 1000);
  check();
})();
