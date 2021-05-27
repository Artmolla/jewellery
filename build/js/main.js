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

'use strict';

(function () {
  if (document.querySelector('.user-area__log-in-button')) {
    var openModalButton = document.querySelector('.user-area__log-in-button');

    var disablePage = function () {
      document.querySelector('.page').classList.add('page--disabled');
    };

    var enablePage = function () {
      document.querySelector('.page').classList.remove('page--disabled');
    };

    var closeModal = function (modal, buttonClose) {
      modal.classList.remove('modal--open');
      buttonClose.removeEventListener('click', closeModalClickHandler);
      document.removeEventListener('keydown', closeModalKeyPressHandler);
      document.removeEventListener('click', closeModalOutsideClickHandler);
    };

    var closeModalKeyPressHandler = function (evt) {
      var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

      if (isEscKey && document.querySelector('.modal--open')) {
        document.querySelector('.modal--open').classList.remove('modal--open');
        enablePage();
      }
    };

    var closeModalOutsideClickHandler = function (evt) {
      if (evt.target.classList.contains('modal')) {
        document.querySelector('.modal--open').classList.remove('modal--open');
        enablePage();
      }
    };

    var closeModalClickHandler = function (evt) {
      evt.preventDefault();

      var modal = evt.target.closest('.modal--open');
      var buttonClose = evt.target;
      closeModal(modal, buttonClose);
      enablePage();
    };

    var trapFocus = function (element) {
      var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];
      var KEYCODE_TAB = 9;

      element.addEventListener('keydown', function (evt) {
        var isTabPressed = (evt.key === 'Tab' || evt.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
          return;
        }

        if (evt.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            evt.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            evt.preventDefault();
          }
        }
      });
    };

    var openModalClickHandler = function (evt) {
      evt.preventDefault();

      var modal = document.querySelector('.modal');
      modal.classList.add('modal--open');
      disablePage();
      var userEmailField = modal.querySelector('input[name="email"]');
      var modalCloseButton = modal.querySelector('.modal__close-modal-button');

      userEmailField.focus();
      modalCloseButton.addEventListener('click', closeModalClickHandler);
      document.addEventListener('keydown', closeModalKeyPressHandler);
      document.addEventListener('click', closeModalOutsideClickHandler);
      trapFocus(modal);
    };

    openModalButton.addEventListener('click', openModalClickHandler);
  }
})();

'use strict';

(function () {
  if (document.querySelectorAll('.modal form')) {
    var forms = document.querySelectorAll('.modal form');

    forms.forEach(function (form) {
      var userEmail = form.querySelector('input[name="email"]');

      form.addEventListener('submit', function () {
        localStorage.clear();

        localStorage.setItem('email', userEmail.value);
      });
    });
  }
})();
