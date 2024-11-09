let num = prompt("Введите число:");


num = Number(num);


if (num > 0) {
    console.log(1);
} else if (num < 0) {
    console.log(-1);
} else {
    console.log(0);
}

let result;
if (a + b < 4) {
  result = 'Нижче';
} else {
  result = 'Вище';
}

// let result = (a + b < 4) ? 'Нижче' : 'Вище';

// const balance = -1;
// let message = (balance >= 1) ? "Ваш баланас почувається добре!" : (balance === 0) ? "Ваш баланас на нулі!" : "Ваш баланас почувається погано!";
// console.log(message);


// let totalSpent = 1000;
// let pay = 500;
// let discount;

// if (totalSpent < 100) {
//     discount = 0;
//     console.log("не партнер");
// } else if (totalSpent >= 100 && totalSpent <= 1000) {
//     discount = 2;
//     console.log("бронзовий");
// } else if (totalSpent > 1000 && totalSpent <= 5000) {
//     discount = 5;
//     console.log("срібний");
// } else if (totalSpent > 5000) {
//     discount = 10;
//     console.log("золотий");
// }

// console.log(`Оформляємо замовлення на суму ${pay - (pay * discount) / 100} зі знижкою 