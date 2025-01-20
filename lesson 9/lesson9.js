function squareArray(arr) {
 
    if (!Array.isArray(arr)) {
        throw new Error("Вхідний аргумент повинен бути масивом чисел");
    }

    
    return arr.map(function(num) {
        return num * num;
    });
}


const inputArray = [1, 2, 3, 4, 5];
const squaredArray = squareArray(inputArray);
console.log(squaredArray); 



function output(name){
    console.log(`My name is ${name}`);
}

function output2(name){
   return `My name is ${name}`;
}


const add = function(a, b, c){
    return a + b + c;
}

console.log(add());



output('Vitalii');
output('Nazar');
output('Pavlo');

const value = output2('Oleg');
console.log(value);



const num = function(a, b, c){
    let sum = a + b + c
    return sum;
}



function value(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
      
    }
    return suma / arr.length;
  }
  
  let num2 = [1, 2, 3, 4, 10];
  console.log(value(num2));

  function everage_value(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
      
    }
    return suma / arr.length;
  }
  
  let arr2 = [1, 2, 3, 4, 10];
  console.log(everage_value(arr2));

















  function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}


logItems(['Mango', 'Poly', 'Ajax']); 






function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}


console.log(calculateEngravingPrice("JavaScript унікальна мова", 10)); 
console.log(calculateEngravingPrice("HTML CSS JavaScript", 5));      




function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
      if (word.length > longestWord.length) {
          longestWord = word;
      }
  }
  return longestWord;
}

console.log(findLongestWord("JavaScript це чудова мова програмування")); 





function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + '...';
}


console.log(formatString("Цей рядок коротший за 40 символів")); 
console.log(formatString("Цей рядок занадто довгий і буде обрізаний після 40 символів")); 





function checkForSpam(message) {
  const lowerCased = message.toLowerCase();
  return lowerCased.includes('spam') || lowerCased.includes('sale');
}


console.log(checkForSpam("Великий розпродаж у вашому місті")); 
console.log(checkForSpam("Купуйте зараз, ціна краща на ринку")); 
console.log(checkForSpam("SPAM пропозиція, не пропустіть")); 




let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введіть число:');
    if (input === null) break;
    const number = Number(input);
    if (isNaN(number)) {
        alert('Було введено не число, попробуйте ще раз');
        continue;
    }
    numbers.push(number);
}

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log('Масив чисел порожній');
}





const logins = ['Admin', 'User123', 'Guest'];

function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}


console.log(addLogin(logins, 'SuperUser')); 
console.log(addLogin(logins, 'Ad'));       
console.log(addLogin(logins, 'Admin'));    