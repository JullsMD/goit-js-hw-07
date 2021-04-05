const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItem = ingredients.map(element =>
  {
    let item = document.createElement('li');
    item.textContent = element;
    return item;
});
ingredientsList.append(...ingredientsItem)


