(function () {
  var lang = 'zh';
  try { lang = localStorage.getItem('lang') || 'zh'; } catch (e) {}

  function apply() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    document.querySelectorAll('[data-zh]').forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });
  }

  document.getElementById('lang').addEventListener('click', function () {
    lang = lang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    apply();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  apply();
})();
