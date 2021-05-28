/* eslint-disable */
'use strict';

(function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    speed: 1500,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<li class=\'pagination__item '.concat(className, '\'>').concat(index + 1, '</li>');
      }
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
            return '<li class=\''.concat(currentClass, '\' type=\'button\'>0').concat(index, '</li> of <li~npm test class=\'').concat(totalClass, '\' type=\'button\'>0').concat(total, '</li>');
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
        pagination: {
          type: 'bullets'
        }
      }
    }
  });
})();
/* eslint-enable */
