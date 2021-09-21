const iconMenu = document.querySelector('.menu');
const headerNav = document.querySelector('.header__nav');
const navItem  = document.querySelector('.nav__list');

iconMenu.addEventListener('click', function(e) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  headerNav.classList.toggle('_active');
});

navItem.addEventListener('click', function(e) {
  document.body.classList.remove('_lock');
  iconMenu.classList.remove('_active');
  headerNav.classList.remove('_active');
});