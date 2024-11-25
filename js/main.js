

document.getElementById('drinkSelect').addEventListener('change', function() {
    const message = `Ви обрали: ${this.value}`;
    document.getElementById('drinkMessage').textContent = message;
});


function checkDay() {
    const day = document.getElementById('dayInput').value.toLowerCase();
    const weekdays = ['понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця'];
    const weekends = ['субота', 'неділя'];
    let message = 'Це не день тижня.';
    if (weekdays.includes(day)) {
        message = 'Це робочий день.';
    } else if (weekends.includes(day)) {
        message = 'Це вихідний.';
    }
    document.getElementById('dayMessage').textContent = message;
}


function checkSeason() {
    const month = parseInt(document.getElementById('monthInput').value);
    let message = 'Неправильний номер місяця.';
    if (month >= 1 && month <= 12) {
        if ([12, 1, 2].includes(month)) message = 'Це зима.';
        else if ([3, 4, 5].includes(month)) message = 'Це весна.';
        else if ([6, 7, 8].includes(month)) message = 'Це літо.';
        else if ([9, 10, 11].includes(month)) message = 'Це осінь.';
    }
    document.getElementById('seasonMessage').textContent = message;
}


function getDaysInMonth() {
    const month = parseInt(document.getElementById('daysInMonthInput').value);
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const message = (month >= 1 && month <= 12) ? 
        `У цьому місяці ${days[month - 1]} днів.` : 
        'Неправильний номер місяця.';
    document.getElementById('daysMessage').textContent = message;
}


function trafficLightAction() {
    const color = document.getElementById('colorInput').value.toLowerCase();
    let message = 'Невідомий колір.';
    if (color === 'червоний') message = 'Стоп';
    else if (color === 'зелений') message = 'Йти';
    else if (color === 'жовтий') message = 'Чекати';
    document.getElementById('colorMessage').textContent = message;
}


function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
    if (operation === '/' && num2 === 0) {
        result = 'Ділення на нуль неможливе!';
    } else {
        result = eval(`${num1} ${operation} ${num2}`);
    }
    document.getElementById('calcResult').textContent = `Результат: ${result}`;
}