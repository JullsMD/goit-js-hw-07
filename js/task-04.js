let value = 0;

const counterValue = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

function increment() {
    value += 1;
    counterValue.textContent = value;
}

function decrement() {
    value -= 1;
    counterValue.textContent = value;
}

incrementBtn.addEventListener('click', increment)

decrementBtn.addEventListener('click', decrement)





