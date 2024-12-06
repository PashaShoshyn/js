let arr = [1, 'hello', true, 'world', 3.14];
console.log(arr)


// let arr = [1, 'hello', true, 'world', 3.14];
// console.log(arr [4]);
// arr[4] = 10;
// console.log(arr[4]);
// console.log(arr.length);



// let arr1 = [ 1, 5, "4", "hello"] ;
// console.log(arr1);

// let arr2 = [ true, 2, {},  'a', 222 ] ;

// console.log(arr2);


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// for(let elevent of arr){
//     console.log(elevent);
// }


// let arr = [2, hello,  true, 'world'];
// console.log(arr.length);

// let multiArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12]
// ];

// for(let i=0; i < 4; i++){
//     console.log(`Рядок ${i}`);

//    for(let j=0; j < 3; j++){
//     console.log(`Стовпчик ${j} значення ${multiArr[i][j]}`);
//    }
// }



// let multiArr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12]
// ];

// for (let i = 0; i < multiArr.length; i++) {
//     console.log(`Рядок ${i + 1}:`);
//     for (let j = 0; j < multiArr[i].length; j++) {
//         console.log(`  Стовпчик ${j + 1} -> значення: ${multiArr[i][j]}`);
//     }
// }

// let arr = [1, 'hello', true, 'world', 1.1, 'bye', false, 'space', 3.14];

// for (let element of arr) {
//     console.log(`Значення: ${element}, Тип: ${typeof element}`);
// }



// let log = ['Mira', 'Pasha', 'Artem', 'Vanya', 'Andrey']
// let surglog = 'Pasha';
// for (let i = 0; log.length; i++) {
//     if (log[i] === surglog) {
//         console.log(`Користувача ${log[i]} знайдено`);
//         break;
//     }
// };

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
// }
// console.log(`Найменше число ${smallestNumber}`);


let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers); 


let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


let text = ["привіт", "день", "радість", "світло", "великий"];
for (let str of text) {
    if (str.length > 5) {
        console.log(str);
    }
}


let numbers = [3, 17, 22, 5, 8, 99, 34, 2, 77, 6];
for (let num of numbers) {
    if (num % 2 === 0) {
        console.log(num);
    }
}