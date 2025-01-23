
// function voterResults(voters) {
//   return voters.reduce((acc, voter) => {
//       if (voter.age >= 18 && voter.age <= 25) {
//           acc.numYoungPeople++;
//           if (voter.voted) acc.numYoungVotes++;
//       } else if (voter.age >= 26 && voter.age <= 35) {
//           acc.numMidsPeople++;
//           if (voter.voted) acc.numMidVotesPeople++;
//       } else if (voter.age >= 36 && voter.age <= 55) {
//           acc.numOldsPeople++;
//           if (voter.voted) acc.numOldVotesPeople++;
//       }
//       return acc;
//   }, {
//       numYoungVotes: 0,
//       numYoungPeople: 0,
//       numMidVotesPeople: 0,
//       numMidsPeople: 0,
//       numOldVotesPeople: 0,
//       numOldsPeople: 0
//   });
// }


// const voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// console.log(voterResults(voters));


// let age = 1;

// while (age <= 18){
//     console.log(`Age ${age}`);
//     age++;
// }


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

// do {
//     console.log('Age ${age}');
//     age++;
// } while (age <= 18);

// for(let i = 0; i <= 18; i++){
//     console.log('Age ${i}');
// }






// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (let i = 0; i < friends.length; i++) {
//     string += friends[i];
//     if (i !== friends.length - 1) {
//         string += ','; 
//     }
// }

// console.log(string); 



// const fr = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const str = fr.join(','); 
// console.log(str); 



// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
// ];


// const cardToRemove = 'Карточка-3';
// const indexToRemove = cards.indexOf(cardToRemove);
// if (indexToRemove !== -1) {
//     cards.splice(indexToRemove, 1); 
// }
// console.log(cards); 


// const cardToInsert = 'Карточка-6';
// cards.push(cardToInsert); 
// console.log(cards); 

// const cardToUpdate = 'Карточка-4';
// const indexToUpdate = cards.indexOf(cardToUpdate);
// if (indexToUpdate !== -1) {
//     cards[indexToUpdate] = 'Карточка-4.1'; 
// }
// console.log(cards); 







// let arr = ['hello', 1, 3.14, 'brown' ];
// console.log(arr[0]);

// arr[0] = 10;
// console.log(arr[0]);

// function output(name, ){
// console.log(`My name is ${name}`);
// }
// output(`Pasha`);




// Завдання 1: Функція для логування елементів масиву
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax']); 

// Завдання 2: Розрахунок вартості гравіювання за кількістю слів
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript унікальна мова", 10)); 
console.log(calculateEngravingPrice("HTML CSS JavaScript", 5));      

// Завдання 3: Пошук найдовшого слова в рядку
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

// Завдання 4: Форматування рядка (обрізання після 40 символів)
function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + '...';
}

console.log(formatString("Цей рядок коротший за 40 символів")); 
console.log(formatString("Цей рядок занадто довгий і буде обрізаний після 40 символів")); 

// Завдання 5: Перевірка наявності слів "spam" або "sale" у повідомленні
function checkForSpam(message) {
  const lowerCased = message.toLowerCase();
  return lowerCased.includes('spam') || lowerCased.includes('sale');
}

console.log(checkForSpam("Великий розпродаж у вашому місті")); 
console.log(checkForSpam("Купуйте зараз, ціна краща на ринку")); 
console.log(checkForSpam("SPAM пропозиція, не пропустіть")); 

// Завдання 6: Підрахунок загальної суми введених чисел
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

// Завдання 7: Перевірка та додавання нового логіну
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
