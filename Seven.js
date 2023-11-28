// onload: виконується після завантаження сторінки
window.onload = function() {
    alert("Вітаю. Сторінка повністю завантажена!");
};

window.onresize = function() {
    alert("Розмір вікна браузера змінився.");
};

function imageDoubleClick(element) {
    alert("Ви подвійно клацнули на зображенні!");
    // Додайте більше дій чи модифікацій за необхідності
 }
 function mouseOut(element) {
    alert("Миша вийшла з області зображення");
    // Додайте більше дій чи модифікацій за необхідності при виході миші з області елементу
 }
 function pageScroll() {
    console.log("Сторінка прокручується!");
    // Додайте більше дій чи модифікацій за необхідності при прокручуванні сторінки
 }
 function mouseUp(event) {
    alert("Кнопка миші відпущена. Координати: X=" + event.clientX + ", Y=" + event.clientY);
    // Додайте більше дій чи модифікацій за необхідності при відпусканні кнопки миші
 }

 

 function imageClick(imageName) {
    alert('Clicked on ' + imageName);
}

// Додати інші обробники подій за необхідності
// Наприклад, обробник для наведення миші
document.getElementById('Image2').onmouseover = function() {
    alert('Mouse over Image 2');
};

// Обробник для відведення миші
document.getElementById('Image5').onmouseout = function() {
    alert('Mouse out of Image 5');
};



 
 let userArray = []; // Зберігаємо масив, введений користувачем

 // Додаємо елемент до масиву
 function addItem() {
     const userInput = document.getElementById('userInput').value;
     if (userInput.trim() !== '') {
         userArray.push(userInput.trim());
         document.getElementById('userInput').value = ''; // Очищаємо поле введення
         console.log('User Array:', userArray);
     }
 }

 function runTask() {
    const outputTextArea = document.getElementById('output');
    outputTextArea.value = 'User Array:\n' + userArray.join('\n') + '\n\n';
    outputTextArea.value += 'Links:\n' + links.join('\n');


 }


 function searchInfo() {
    const inputText = document.getElementById('inputText').value;
    const regex = /\d/g; // Регулярний вираз для пошуку цифр

    const matches = inputText.match(regex);
    const count = matches ? matches.length : 0;

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Кількість цифр у тексті: ${count}`;
}


 // Глобальний масив для зберігання елементів///////////////////////////////

 function addItem() {
    var userInput = document.getElementById("userInput").value;
    
    // Розділення введеного рядка на елементи за комою
    var elements = userInput.split(",");

    // Отримання або створення масиву для зберігання елементів
    var arrayA = JSON.parse(localStorage.getItem('arrayA')) || [];

    // Додавання елементів до масиву
    arrayA = arrayA.concat(elements.map(function(item) {
        return parseInt(item.trim());
    }));

    // Збереження масиву в локальному сховищі
    localStorage.setItem('arrayA', JSON.stringify(arrayA));

    // Очищення поля введення
    document.getElementById("userInput").value = "";
}

function createNegativeArray(arr) {
    var negativeArray = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeArray.push(arr[i]);
        }
    }

    return negativeArray;
}

function performArrayTask() {
    // Отримання масиву з локального сховища
    var arrayA = JSON.parse(localStorage.getItem('arrayA')) || [];

    // Створення масиву B із від'ємних елементів масиву A
    var arrayB = createNegativeArray(arrayA);

    // Виведення результатів в <textarea>
    var outputTextarea = document.getElementById("output");
    outputTextarea.value = "Масив A: " + arrayA.join(", ") + "\n";
    outputTextarea.value += "Масив B із від'ємних елементів масиву A: " + arrayB.join(", ");

    // Виведення результатів в консоль
    console.log("Масив A:", arrayA);
    console.log("Масив B із від'ємних елементів масиву A:", arrayB);

        }