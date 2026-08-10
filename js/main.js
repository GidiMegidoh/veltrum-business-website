/* Veltrum — minimal site behavior: mobile navigation toggle only. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (!toggle || !menu) {
    return;
  }

  function setMenu(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });

  /* Close the mobile menu after choosing a page */
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      setMenu(false);
    }
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  /* Close when clicking outside the header */
  document.addEventListener('click', function (event) {
    if (menu.classList.contains('open') && !event.target.closest('.site-header')) {
      setMenu(false);
    }
  });
})();
