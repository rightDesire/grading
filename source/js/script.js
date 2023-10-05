/* в этот файл добавляет скрипты*/
let menuMain = document.querySelector('.header-menu');
let menuToggle = document.querySelector('.header-menu__toggle');

menuMain.classList.remove('header-menu--nojs');

menuToggle.addEventListener('click', function () {
  if (menuMain.classList.contains('header-menu--closed')) {
    menuMain.classList.remove('header-menu--closed');
    menuMain.classList.add('header-menu--opened');
  } else {
    menuMain.classList.add('header-menu--closed');
    menuMain.classList.remove('header-menu--opened');
  }
});
