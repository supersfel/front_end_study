(function (window,document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');  //클래스찾기
    const $toggleBtn = document.getElementById('toggle-btn'); //아이디찾기

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
      });//버튼을 클릭했을때

      window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
          offElements();
        }
      });



      function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
          toggle.classList.toggle('on');
        });
      }

      function offElements() {
        [].forEach.call($toggles, function (toggle) {
          toggle.classList.remove('on');
        });
      }

}) (window,document)

