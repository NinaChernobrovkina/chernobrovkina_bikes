const submitButton = document.querySelector('.form__submit');
const phoneInput = document.querySelector('[name="phone"]');
if (submitButton && phoneInput) {
  submitButton.addEventListener('click', () => {
    if (phoneInput.value.match(/[a-zа-я]/i)) {
      phoneInput.setCustomValidity('В поле телефонного номера нельзя вводить буквы');
      return false;
    }
    phoneInput.setCustomValidity('');
    return true;
  });
}
