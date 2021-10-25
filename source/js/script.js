const pageHeader = document.querySelector('.header__nav');
const headerToggle = document.querySelector('.header__toggle');
const headerText = document.querySelector('.header__text');

pageHeader.classList.remove('header__nav--nojs');
headerText.classList.remove('header__text--nojs');

headerToggle.addEventListener('click', function () {
  pageHeader.classList.toggle('header__nav--open')
});

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

const menuLinks = document.querySelectorAll('.header__menu-link');
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', function (evt) {
    evt.preventDefault();

    pageHeader.classList.remove('header__nav--open');

    const anchor = menuLink.href.match(/#.*/);
    if (!anchor) {
      return;
    }

    const anchorElm = document.querySelector(anchor[0]);
    if (!anchorElm) {
      return;
    }

    window.scrollTo({
      top: getCoords(anchorElm).top,
      behavior: 'smooth'
    });
  });
});

const submitButton = document.querySelector('.form__submit');
const phoneInput = document.querySelector('[name="phone"]')
submitButton.addEventListener('click', function () {
  if (phoneInput.value.match(/[a-zа-я]/i)) {
    phoneInput.setCustomValidity('В поле телефонного номера нельзя вводить буквы');
    return false;
  }
  phoneInput.setCustomValidity('');
  return true;
});
