let message = [1, 2, 3];
message[1] = 10;
console.log(message); 


let number = [10, 20, 30, 40, 50];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
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