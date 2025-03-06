// const targetBtn = document.querySelector('.js-target-btn')
// const addBtn = document.querySelector('.js-add-btn')
// const removeBtn = document.querySelector('.js-remove-btn')

// const click = () => {
//     console.log('click');
// }

// addBtn.addEventListener('click', () => {
//     console.log('add click even');
//     targetBtn.addEventListener('click', click);
// });

// removeBtn.addEventListener('click', () => {
//     console.log('remove click even');
//     targetBtn.removeEventListener('click', click);
// })



// const mouseBox = document.getElementById('boxMouse');

// mouseBox.addEventListener('mousedown', () => mouseBox.style.backgroundColor = 'blue');
// mouseBox.addEventListener('mouseup', () => mouseBox.style.backgroundColor = 'lightblue');
// mouseBox.addEventListener('mouseover', () => mouseBox.style.backgroundColor = 'green');
// mouseBox.addEventListener('mouseout', () => mouseBox.style.backgroundColor = 'lightgreen');

// mouseBox.addEventListener('mousemove', (event) => {
//     console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
// });



// const coords = document.getElementById('coords');

// mouseBox.addEventListener('mousemove', (event) => {
//     coords.textContent = `Координати: X: ${event.clientX}, Y: ${event.clientY}`;
// });




const box = document.getElementById('box');

document.addEventListener('keydown', (event) => {
    if (event.key === 'y') {
        box.style.background = 'yellow';
    } else if (event.key === 'g') {
        box.style.background = 'green';
    }
});

// Гра "Натисни правильну клавішу"
const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const keyDisplay = document.getElementById('key');
const message = document.getElementById('message');
let currentKey = '';

function startNewGame() {
    currentKey = keys[Math.floor(Math.random() * keys.length)];
    keyDisplay.textContent = currentKey;
    message.textContent = 'Натисни правильну клавішу!';
}

document.addEventListener('keydown', (event) => {
    if (event.key === currentKey) {
        message.textContent = 'Правильно!';
    } else {
        message.textContent = 'Спробуй ще раз!';
    }
});

// Запуск гри при завантаженні сторінки
startNewGame();