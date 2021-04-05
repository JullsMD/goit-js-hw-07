const input = document.querySelector('#validation-input');

input.addEventListener('input', () => {
  input.value.length !== +input.getAttribute('data-length')
    ? input.classList.add('invalid')
    : input.classList.remove('invalid');
});

input.addEventListener('input', () => {
  input.value.length === +input.getAttribute('data-length')
    ? input.classList.add('valid')
    : input.classList.remove('valid');
});

input.addEventListener('input', () => {
  if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  }
});