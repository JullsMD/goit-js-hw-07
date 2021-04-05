const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
}
const incognita = ref.nameOutput.textContent;
function nameInputFilled (event) {
    ref.nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        ref.nameOutput.textContent = incognita;
    }
}
ref.nameInput.addEventListener('input', nameInputFilled);