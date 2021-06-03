/* eslint-disable */
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
              return '<li class=\'pagination__item pagination__item--active '.concat(currentClass, '\' type=\'button\'>0').concat(index, '</li> of <li class=\'pagination__item ').concat(totalClass, '\' type=\'button\'>0').concat(total, '</li>');
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
  }
})();
/* eslint-enable */
