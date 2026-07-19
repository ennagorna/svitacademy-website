/* ============================================================
   Svit Academy — forms.js
   Валідація форми контактів + компонування листа (mailto).
   Сайт статичний (без бекенду), тож форма відкриває поштовий
   застосунок із уже заповненим листом. Найшвидший канал — Telegram.
   ============================================================ */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var status = document.getElementById('form-status');
    var EMAIL = 'admin@kazkoviysvit.com.ua';

    function field(name) { return form.querySelector('[name="' + name + '"]'); }
    function setInvalid(el, on) { el.closest('.field').classList.toggle('field--invalid', on); }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = field('name'), contact = field('contact'), message = field('message');
      var ok = true;
      [name, contact, message].forEach(function (el) {
        var empty = !el.value.trim();
        setInvalid(el, empty);
        if (empty) ok = false;
      });
      if (!ok) {
        var first = form.querySelector('.field--invalid input, .field--invalid textarea');
        if (first) first.focus();
        return;
      }
      var subject = 'Заявка з сайту Svit Academy';
      var body = 'Ім\'я: ' + name.value + '\nКонтакт: ' + contact.value + '\n\nПовідомлення:\n' + message.value;
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      status.textContent = 'Дякуємо! Ми відкрили ваш поштовий застосунок — надішліть листа, і ми звʼяжемося з вами. Найшвидше — написати нам у Telegram.';
      status.classList.add('form__status--show');
      form.reset();
    });

    form.querySelectorAll('input, textarea').forEach(function (el) {
      el.addEventListener('input', function () { el.closest('.field').classList.remove('field--invalid'); });
    });
  });
})();
