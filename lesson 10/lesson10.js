// 1. 
const button1 = document.createElement('button');
button1.textContent = 'Натисни мене';
document.body.appendChild(button1);
button1.addEventListener('click', () => alert('Hello World!'));

// 2.
const randomNumber = Math.floor(Math.random() * 100) + 1;
const checkGuess = () => {
    const userGuess = parseInt(document.getElementById('guessField').value);
    const result = document.getElementById('guessResult');
    if (userGuess === randomNumber) {
        result.textContent = 'Правильно! Ви вгадали число!';
    } else if (userGuess < randomNumber) {
        result.textContent = 'Занадто мало!';
    } else {
        result.textContent = 'Занадто багато!';
    }
};

// 3. 
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    console.log(`Кількість кліків: ${clickCount}`);
});

// 4.
const applyCallbackToEachElement = (arr, callback) => arr.map(callback);
const arr = [1, 2, 3, 4, 5];
const squareCallback = num => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// 5.
const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};
const showDiscountedPrice = price => console.log(`Знижена ціна: ${price} грн`);
calculateDiscountedPrice(100, 10, showDiscountedPrice);
