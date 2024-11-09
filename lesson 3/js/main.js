

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


// const inputValube = 120;
// const numbers = inputValube / 60;
// const hours = Math.floor(number % 24);
// const strHours = String(hours);
// const strMinutes = String(inputValube % 60);

// console.log('${strHours}:${strMinutes}');

// console.log( mes1.slice(0,6));
// console.log( mes1.substring(8,2));
// console.log( mes1.replace('JavaScript', "HTML") );
// console.log( mes1.replaceAll('JavaScript', "HTML").repeat(4) );
// console.log( mes1.repeat(4) );
// console.log( mes1.charAt(4) );


// const x = "Іван";
// const y = "Горганчук";
// const n = "Перший";
// const g = "All";
// console.log('Гість')

// console.log(`Гість ${x} ${y} поселяєтсья в ${n} номер кімнати ${g}`);

// let message = "Ваш баланс поповненно на 1";
// message += '000';
// let lengthessage = message.length;

// console.log(message);
// console.log(message.lenght);
// lengthessage = message.length;

// console.log(1 && 5 && 7 & 'car');
// console.log(1 && 0 && 'car');
// console.log  ('name' || '' || null || undefined || 0);
// console.log(! " ")

// const salary = 800; 
// if(salary <= 500 && salaty >=1000){
//     console("Тобі достатньо на айфон")
// } else if(salary >= 1500 && salary <= 3000){
//     console.log("Тобі достатньо")
// }
// else if(salary >= 3000){
//     console.log("Тобі достатньо")
// }
// else{
//     console("Працюй більше")
// }


// let message = prompt('Ви хочете кредит?'); 
//     if (message.includes("Так")){
//         console.log("Добре")
//     }
//     else {
//         console.log("Ні")
//     }

let result = 5 + 5 + '5';
console.log(result);         



console.log(typeof result);       

let email = 'your.email@example.com';
if (email.includes('@')) {
console.log("Email містить '@'"); 
} 

    
    

 
console.log("Email не містить '@'");

console.log("Кількість символів у email:", email.length);


let word1 = 'My';
let word2 = 'name';
let word3 = 'is';
let fullName = `${word1} ${word2} ${word3} Viktor`;


console.log(fullName); 

let userName = 'Олександр';
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);