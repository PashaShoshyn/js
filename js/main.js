// console.log('Привіт світ' .length);
// console.warn('Жовтий'.toUpperCase());
// console.error('Червоний');






// const name = "Pasha"; 
// console.log("My name is " + name);


// const  age = 13; 
// console.log("My age " + age);


// const isStudent = true;
// console.log("Your are a student ? " + isStudent);

// const  myString  = "Тільки при втраті всього ми маємо все"; 
// console.log(myString);

// const myNumber = 10;
// console.log(myNumber);

// const myNull = null;
// console.log(null);

// const userData = prompt("Ім'я та фамілія")

// const inConfirm = confirm('Підтвердження');
// console.log(inConfirm);


// alert("Увага! Ви збираєтеся виконати небезпечну дію.");


// if (confirm("Ви впевнені, що хочете продовжити?")) {
    
//     alert("Дякую за підтвердження!");
// } else {
//     alert("Дію відмінено!");
// }





// Друге заняття




// const x = 5;
// const y = 10; 
// const z = 5;


// console.log(x > y);
// console.log(x <= z);
// console.log(5 == "5");
// console.log(5 != "5");
// console.log(5 === "5");
// console.log(5 !== "5");
// console.log(10 % 5);
// console.log(15 % 4);

// if(y%3===0){
//     console.log('парне');
// }else {
//     console.log('непарне');
// }

// const a = 'Not a number';
// console.log(Number(a));
// console.log(typeof a);
// console.log(typeof Number(a));

// console.log(Number.parseInt('5px'));

// console.log (Number.parseInt('14swesr786y8'));

// console.log (Number.parseInt('dfgdfg'));


// console.log (Number.parseInt('789678апрчавп'));
// console.log (Number.parseInt('890790укерпа'));

// document.getElementById('calc').addEventListener('click', function(){
//     const num1 = Number.parseInt(document.getElementById("num1").value);
//     const num2 = Number.parseInt(document.getElementById("num2").value);
//     const result = num1 + num2;
//     document.getElementById('result').textContent = result;
// });






let tempCelsius = 25; 
let tempFahrenheit = (tempCelsius * 9/5) + 32; 
console.log("Температура в Фаренгейтах:", tempFahrenheit);



let daysInMonth = 30; 
let hoursInMonth = daysInMonth * 24; 
let minutesInMonth = hoursInMonth * 60;
console.log("Кількість годин у місяці:", hoursInMonth);
console.log("Кількість хвилин у місяці:", minutesInMonth);

let playerHealth = 100; 
let playerEnergy = 80; 
playerHealth -= 20;
playerEnergy -= 15; 
console.log("Рівень здоров'я гравця:", playerHealth);
console.log("Рівень енергії гравця:", playerEnergy);

let purchaseAmount = 200; 
let discount = 0.10; 
let discountedAmount = purchaseAmount * (1 - discount); 
console.log("Сума після застосування знижки:", discountedAmount);


let floatNumber = 12.75; 
let roundedDownNumber = Math.floor(floatNumber); 
console.log("Округлене число:", roundedDownNumber);


let floatString = "45.67"; 
let parsedFloat = parseFloat(floatString); 
console.log("Перетворене в десяткове число:", parsedFloat);


let intString = "123"; 
let parsedInt = parseInt(intString); 
console.log("Перетворене ціле число:", parsedInt);

let number = 49; // число
let squareRoot = Math.sqrt(number); 
console.log("Квадратний корінь числа:", squareRoot);


let integerValue = 42; 
let stringNumber = "56"; 
let parsedStringToInt = parseInt(stringNumber); 
let integerToString = integerValue.toString(); 
console.log("Рядок, перетворений у ціле число:", parsedStringToInt);
console.log("Ціле число, перетворене у рядок:", integerToString);






// третє заняття


// const message = 'JavaScript ' + 'is' + ' awesome!';
// console.log(message);

// let result;
// result = 5 + '5';
// console.log(result);
// console.log(typeof result);

// result = 5 + '5' + 5;
// console.log(result);
// console.log(typeof result);

// result = 5 + 5 + '5';
// console.log(result);
// console.log(typeof result);

// let firsName = "Pasha";
// let lastName = "Shoshyn";
// let num = 13;
// let year = 2010;
// console.log(`Привіт мене звати ${firsName} ${lastName} мені ${num} я народився ${year}`);

// console.log (message. indexOf('is')) ;
// console.log (message. indexOf('JavaScript')) ;

// console.log (message. includes('is')) ;
// console.log (message. includes('JavaScript')) ;


