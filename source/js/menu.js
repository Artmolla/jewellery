'use strict';

(function () {
  if (document.querySelector('.header__open-menu-button')) {
    var header = document.querySelector('.header');
    var menuButton = header.querySelector('.header__open-menu-button');
    var siteSearch = header.querySelector('.site-search');
    var logInField = header.querySelector('.user-area__item--log-in');
    var navigation = header.querySelector('.navigation');
    var introSection = header.querySelector('.header__intro');

    var menuOpen = function () {
      header.classList.add('header--menu-open');
      siteSearch.classList.add('site-search--menu-open');
      logInField.classList.add('user-area__item--menu-open');
      navigation.classList.add('navigation--menu-open');
      introSection.classList.add('header__intro--menu-open');

      header.addEventListener('keydown', keyPressHandler);
    };

    var menuClose = function () {
      header.classList.remove('header--menu-open');
      siteSearch.classList.remove('site-search--menu-open');
      logInField.classList.remove('user-area__item--menu-open');
      navigation.classList.remove('navigation--menu-open');
      introSection.classList.remove('header__intro--menu-open');

      header.removeEventListener('keydown', keyPressHandler);
    };

    var keyPressHandler = function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();

        menuClose();
      }
    };

    header.classList.remove('header--menu-open');
    siteSearch.classList.remove('site-search--menu-open');
    logInField.classList.remove('user-area__item--menu-open');
    navigation.classList.remove('navigation--menu-open');
    introSection.classList.remove('header__intro--menu-open');

    menuButton.addEventListener('click', function () {
      if (header.classList.contains('header--menu-open')) {
        menuClose();
      } else {
        menuOpen();
      }
    });
  }
})();
