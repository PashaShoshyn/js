let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

const arr = [1, 2, 3, 4, 5];
let index = 0;
while (index < arr.length) {
    console.log(arr[index]);
    index++;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 7) {
        break;
    }
    console.log(numbers[i]);
}

let n = 8; 
for (let i = 1; i <= 20; i++) {
    if (i >= n) {
        break;
    }
    console.log(i);
}

let num = 1;
while (num <= 20) {
    if (num % 3 === 0) {
        num++;
        continue;
    }
    console.log(num);
    num++;
}