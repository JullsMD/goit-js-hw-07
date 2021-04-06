const input = document.querySelector('#validation-input');

function validationInput() {
  if
  (input.value.length <input.dataset.length || input.value.length > input.dataset.length) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
  else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}

input.addEventListener('blur', validationInput);