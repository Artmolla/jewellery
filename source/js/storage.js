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
