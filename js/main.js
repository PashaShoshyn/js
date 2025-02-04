
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
