'use strict';

(function () {
  var menu = document.querySelector('.main-nav');
  var menuToggle = document.querySelector('.main-nav__toggle');

  menu.classList.remove('main-nav--nojs');

  if (menuToggle) {
    menuToggle.addEventListener('click', function (evt) {
      if (menu) {
        // evt.currentTarget.classList.toggle('main-nav__menu-toggle--active');
        menu.classList.toggle('main-nav--opened');
      }
    });
  }
})();
