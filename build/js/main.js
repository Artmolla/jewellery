'use strict';

(function () {
  if (document.querySelector('.accordion')) {

    var accordionContent = document.querySelector('.accordion');
    var accordionItems = Array.from(accordionContent.querySelectorAll('.accordion__item'));
    var accordionButtons = Array.from(accordionContent.querySelectorAll('.accordion__button'));

    var closeAllAccordion = function (element) {
      var currentElement = element || null;

      accordionItems.forEach(function (it) {
        if (it.classList.contains('accordion__item--open') && currentElement !== it && !it.classList.contains('accordion__item--filter')) {
          it.classList.remove('accordion__item--open');
        }
      });
    };

    var closeAccordionKeyPressHandler = function (evt) {
      var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

      if (isEscKey) {
        evt.target.closest('.accordion__item').classList.remove('accordion__item--open');
        evt.target.removeEventListener('keydown', closeAccordionKeyPressHandler);
      }
    };

    var toggleAccordionClickHandler = function (evt) {
      evt.preventDefault();

      closeAllAccordion(evt.target.closest('.accordion__item'));
      evt.target.closest('.accordion__item').classList.toggle('accordion__item--open');
      evt.target.addEventListener('keydown', closeAccordionKeyPressHandler);
    };

    accordionButtons.forEach(function (it) {
      it.classList.remove('accordion__button--no-js');
      it.tabIndex = '0';
      it.addEventListener('click', toggleAccordionClickHandler);
    });

    closeAllAccordion();

  }
})();

'use strict';

(function () {
  if (document.querySelector('.header__open-menu-button')) {
    var header = document.querySelector('.header');
    var menuButton = header.querySelector('.header__open-menu-button');
    var siteSearch = header.querySelector('.site-search');
    var logInField = header.querySelector('.user-area__item--log-in');
    var navigation = header.querySelector('.navigation');

    if (header.querySelector('.header__intro')) {
      var introSection = header.querySelector('.header__intro');
    }

    var menuOpen = function () {
      header.classList.add('header--menu-open');
      siteSearch.classList.add('site-search--menu-open');
      logInField.classList.add('user-area__item--menu-open');
      navigation.classList.add('navigation--menu-open');

      if (introSection) {
        introSection.classList.add('header__intro--menu-open');
      }
    };

    var menuClose = function () {
      header.classList.remove('header--menu-open');
      siteSearch.classList.remove('site-search--menu-open');
      logInField.classList.remove('user-area__item--menu-open');
      navigation.classList.remove('navigation--menu-open');

      if (introSection) {
        introSection.classList.remove('header__intro--menu-open');
      }
    };

    header.classList.remove('header--menu-open');
    siteSearch.classList.remove('site-search--menu-open');
    logInField.classList.remove('user-area__item--menu-open');
    navigation.classList.remove('navigation--menu-open');

    if (introSection) {
      introSection.classList.remove('header__intro--menu-open');
    }

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
  if (document.querySelector('.button--open-modal')) {
    var openModalButtons = document.querySelectorAll('.button--open-modal');

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
      if (evt.target.classList.contains('modal--open')) {
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

    var focusOnEmail = function (element) {
      var userEmailField = element.querySelector('input[name="email"]');
      userEmailField.focus();
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

      var modalName = evt.target.dataset.modal;
      var modal = document.querySelector(modalName);
      modal.classList.add('modal--open');

      if (modal.querySelector('input[name="email"]')) {
        focusOnEmail(modal);
      }

      disablePage();
      var modalCloseButton = modal.querySelector('.button--close-modal');

      modalCloseButton.addEventListener('click', closeModalClickHandler);
      document.addEventListener('keydown', closeModalKeyPressHandler);
      document.addEventListener('click', closeModalOutsideClickHandler);
      trapFocus(modal);
    };

    openModalButtons.forEach(function (button) {
      button.addEventListener('click', openModalClickHandler);
    });
  }
})();

'use strict';

(function () {
  if (document.querySelector('.slider')) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      loop: true,
      speed: 1500,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<li class=\'pagination__item '.concat(className, '\'>').concat(index + 1, '</li>');
        },
      },

      lazy: {
        loadPrevNext: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,

          pagination: {
            type: 'fraction',
            renderFraction: function renderFraction(currentClass, totalClass, index, total) {
              return '<li class=\'pagination__item pagination__item--active '
              .concat(currentClass, '\' type=\'button\'>0')
              .concat(index, '</li> of <li class=\'pagination__item ')
              .concat(totalClass, '\' type=\'button\'>0')
              .concat(total, '</li>');
            }
          }
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,

          pagination: {
            type: 'bullets'
          }
        },

        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        }
      }
    });

    if (document.querySelector('.slider__container--thumbs') && document.querySelector('.slider__container--slides')) {
      var thumbsPagination = new Swiper('.slider__container--thumbs', {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {
          768: {
            direction: 'horizontal',
            spaceBetween: 'auto',
          },

          1024: {
            direction: 'vertical',
            spaceBetween: 30,
          }
        }
      });
    }

    var slides = new Swiper('.slider__container--slides', {
      slidesPerView: 1,

      thumbs: {
        swiper: thumbsPagination,
      },

      breakpoints: {
        320: {
          pagination: {
            el: '.card__pagination',
            type: 'fraction',
            renderFraction: function renderFraction(currentClass, totalClass, index, total) {
              return '<li class=\'pagination__item pagination__item--active '
              .concat(currentClass, '\' type=\'button\'>0')
              .concat(index, '</li> of <li class=\'pagination__item ')
              .concat(totalClass, '\' type=\'button\'>0')
              .concat(total, '</li>');
            }
          }
        },
      }
    });
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
