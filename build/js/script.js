const pageHeader = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');
const headerText = document.querySelector('.header__text');

pageHeader.classList.remove('header__nav--nojs');
headerText.classList.remove('header__text--nojs');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('header__nav--open')
});
