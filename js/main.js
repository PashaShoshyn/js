// console.log('Привіт світ' .length);
// console.warn('Жовтий'.toUpperCase());
// console.error('Червоний');






const name = "Pasha"; 
console.log("My name is " + name);


const  age = 13; 
console.log("My age " + age);


const isStudent = true;
console.log("Your are a student ? " + isStudent);

const  myString  = "Тільки при втраті всього ми маємо все"; 
console.log(myString);

const myNumber = 10;
console.log(myNumber);

const myNull = null;
console.log(null);

const userData = prompt("Ім'я та фамілія")

const inConfirm = confirm('Підтвердження');
console.log(inConfirm);


alert("Увага! Ви збираєтеся виконати небезпечну дію.");


if (confirm("Ви впевнені, що хочете продовжити?")) {
    
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}


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