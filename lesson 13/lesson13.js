
// // Імперативний підхід
// let arr = [1, 2, 3, 4, 5];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2);
// }

// console.log(newArr); // [2, 4, 6, 8, 10]

// // Декларативний підхід
// const doubleArr = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
// };

// console.log(doubleArr(arr)); // [2, 4, 6, 8, 10]

// let arr2 = [1, 2, 3, 4, 5];

// // Не чиста функція
// const doubleArr2 = function (arr2) {
//     for (let i = 0; i < arr2.length; i
// // Не чиста функція
// const doubleArr2 = function (arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         arr[i] * 2;
//     }
// };

// console.log(doubleArr2(arr2)); // undefined
// // Чиста функція
// const doubleArr3 = function (arr2) {
//     let newArr = [];

//     for (let i = 0; i < arr2.length; i++) {
//         newArr.push(arr2[i] * 2);
//     }

//     return newArr;
// };
// console.log(doubleArr3(arr2)); // [2, 4, 6, 8, 10]


// let arr2 = [1, 2, 3, 4, 5];
// // Не чиста функція
// const doubleArr2 = function (arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr2[i] * 2;
//   }
// };
// console.log(doubleArr2(arr2));


// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// // forEach - перебирає масив
// players.forEach(el => console.log(el.name));

// // map - перебирає масив і повертає новий масив
// const playerNames = players.map(el => el.name + ' - ' + el.points);
// console.log(playerNames);

// // filter - фільтрує масив
// const onlinePlayers = players.filter(el => el.online);
// console.log(onlinePlayers);



function getEvenNumbers(numbers) {
    // Фільтруємо масив, залишаючи лише парні числа
    return numbers.filter(num => num % 2 === 0);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = getEvenNumbers(numbers);

console.log("Оригінальний масив:", numbers);
console.log("Масив парних чисел:", evenNumbers);









function getNamesAbove18(people) {
    return people.reduce((names, person) => {
      if (person.age > 18) {
        names.push(person.name); 
      }
      return names;
    }, []);
  }
  
  const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
  ];
  
  console.log(getNamesAbove18(people)); 





  const users = [
    { name: "Alice", eyeColor: "blue", gender: "female", isActive: true, email: "alice@example.com", age: 25 },
    { name: "Bob", eyeColor: "green", gender: "male", isActive: false, email: "bob@example.com", age: 30 },
    { name: "Charlie", eyeColor: "blue", gender: "male", isActive: true, email: "charlie@example.com", age: 35 },
    { name: "David", eyeColor: "brown", gender: "male", isActive: false, email: "david@example.com", age: 40 },
    { name: "Emma", eyeColor: "green", gender: "female", isActive: true, email: "emma@example.com", age: 22 },
];

// Завдання 1
const getUserNames = users => users.map(({ name }) => name);
console.log(getUserNames(users));

// Завдання 2
const getUsersByEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);
console.log(getUsersByEyeColor(users, "blue"));

// Завдання 3
const getUserNamesByGender = (users, gender) => users.filter(user => user.gender === gender).map(({ name }) => name);
console.log(getUserNamesByGender(users, "male"));

// Завдання 4
const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
console.log(getInactiveUsers(users));

// Завдання 5
const getUserByEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserByEmail(users, "charlie@example.com"));

// Завдання 6
const getUsersByAgeRange = (users, min, max) => users.filter(({ age }) => age >= min && age <= max);
console.log(getUsersByAgeRange(users, 25, 35));
