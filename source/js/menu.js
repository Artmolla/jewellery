'use strict';

(function () {
  if (document.querySelector('.header__open-menu-button')) {
    var page = document.querySelector('.page');
    var header = page.querySelector('.header');
    var menuButton = header.querySelector('.header__open-menu-button');
    var siteSearch = header.querySelector('.site-search');
    var logInField = header.querySelector('.user-area__item--log-in');
    var navigation = header.querySelector('.navigation');

    var menuOpen = function () {
      page.classList.add('page--disabled');
      header.classList.add('header--menu-open');
      siteSearch.classList.add('site-search--menu-open');
      logInField.classList.add('user-area__item--menu-open');
      navigation.classList.add('navigation--menu-open');
      page.addEventListener('keydown', keyPressHandler);
    };

    var menuClose = function () {
      page.classList.remove('page--disabled');
      header.classList.remove('header--menu-open');
      siteSearch.classList.remove('site-search--menu-open');
      logInField.classList.remove('user-area__item--menu-open');
      navigation.classList.remove('navigation--menu-open');
      page.removeEventListener('keydown', keyPressHandler);
    };

    var keyPressHandler = function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();

        menuClose();
      }
    };

    header.classList.remove('header--menu-open');
    siteSearch.classList.remove('site-search--menu-open');
    logInField.classList.remove('user-area__item--menu-open');
    navigation.classList.remove('navigation--menu-open');
    header.classList.remove('header--menu-no-js');

    menuButton.classList.remove('header__open-menu-button--no-js');

    menuButton.addEventListener('click', function () {
      if (header.classList.contains('header--menu-open')) {
        menuClose();
      } else {
        menuOpen();
      }
    });
  }
})();
