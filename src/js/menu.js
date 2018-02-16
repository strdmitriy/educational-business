'use strict';
(function() {
var navToggle = document.querySelector('.toggle');
var menuToggle = document.querySelector('.main-navigation--visible');

navToggle.addEventListener('click', toggle);
function toggle(e) {
  e.preventDefault();
  menuToggle.classList.toggle('main-navigation--visible');
  navToggle.classList.toggle('toggle--opened');
}

$(window).scroll(function() {
    var $block = $('.main-header'); // ID шапки

    if($(window).scrollTop() > 100) { // Тут идея в том, что блок привязывается к верху, как только "прилипает" к верху окна браузера. Замените $block.offset().top на любое значение и получится, что когда вы проскроллили на большее кол-во пиксейлей, чем указали, добавиться класс к шапке.
        $block.addClass('fixed'); // Добавляем класс fixed. В стилях указываем для него position:fixed, height и прочее, чтобы сделать шапку фиксированной.
    } else {
        $block.removeClass('fixed'); // удаляем класс
    }
});
})();
