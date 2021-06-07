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
          return '<li class=\'pagination__item ' +
            className + '\'>' + (index + 1) + '</li>';
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
            renderFraction: function (currentClass, totalClass) {
              return '<li class=\'pagination__item ' +
                currentClass + '\'></li>' +
                ' of ' +
                '<li class=' + totalClass + '></li>';
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
            renderFraction: function (currentClass, totalClass) {
              return '<li class=\'pagination__item ' +
                currentClass + '\'></li>' +
                ' of ' +
                '<li class=' + totalClass + '></li>';
            }
          }
        },
      }
    });
  }
})();
