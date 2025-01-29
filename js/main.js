// 1
const button1 = document.createElement('button');
button1.textContent = 'Натисни мене';
document.body.appendChild(button1);
button1.addEventListener('click', () => alert('Hello World!'));

// 2
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

// 6.
const bankAccount = {
    ownerName: 'John Doe',
    accountNumber: '123456789',
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        alert(`Поповнено! Новий баланс: ${this.balance} грн`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            alert('Недостатньо коштів!');
        } else {
            this.balance -= amount;
            alert(`Готівка видана! Новий баланс: ${this.balance} грн`);
        }
    }
};

// 7.
const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isFreezing() {
        return this.temperature < 0;
    }
};
const checkWeather = () => {
    weather.temperature = parseFloat(document.getElementById('tempInput').value);
    alert(weather.isFreezing() ? 'Температура нижче 0 градусів Цельсія' : 'Температура вище або рівна 0 градусів Цельсія');
};

// 8
const user = {
    name: '',
    email: '',
    password: '',
    login() {
        const inputEmail = document.getElementById('emailInput').value;
        const inputPassword = document.getElementById('passwordInput').value;
        alert((inputEmail === this.email && inputPassword === this.password) ? 'Успішний вхід!' : 'Невірні дані!');
    }
};

// 9
const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8,
    isHighRated() {
        return this.rating > 8;
    }
};
const displayMovie = () => {
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieDirector').textContent = movie.director;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieRating').textContent = movie.rating;
    if (movie.isHighRated()) {
        document.getElementById('movieTitle').style.color = 'green';
    }
};
