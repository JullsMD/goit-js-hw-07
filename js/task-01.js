const сategories = document.querySelectorAll('.item');
console.log(`В списке ${сategories.length} категории.`);

сategories.forEach(element => 
    console.log(`Категория: ${element.querySelector('h2').textContent} 
Количество элементов: ${element.querySelectorAll('li').length}`)
)