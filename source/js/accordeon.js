'use strict';

(function () {
  if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  var answersToggles = document.querySelectorAll('.answers__accordeon-container button');
  var answersSections = document.querySelectorAll('.answers__section div');

  answersToggles.forEach(function (toggle) {
    toggle.addEventListener('click', onToggleClicked);
  });

  function onToggleClicked(e) {
    var section = e.target.closest('.answers__accordeon-container').parentElement;
    if (section.classList.contains('answers__accordeon-container--opened')) {
      section.classList.remove('answers__accordeon-container--opened');
    } else {
        answersSections.forEach(function (section) {
            section.classList.remove('answers__accordeon-container--opened');
      });
      section.classList.add('answers__accordeon-container--opened');
    }
  }
})();
