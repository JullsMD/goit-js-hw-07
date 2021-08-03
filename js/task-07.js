// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const refs = {
  fontSizeControl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.fontSizeControl.addEventListener('input', size => {
  refs.textEl.style.fontSize = `${size.currentTarget.value}px`;
});
