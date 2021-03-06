// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};
const unknown = refs.nameOutput.textContent;

function nameInputFilled(event) {
  refs.nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.nameOutput.textContent = unknown;
  }
}
refs.nameInput.addEventListener('input', nameInputFilled);
