const users = [
    {
        name: "John",
        balance: 1500,
        friends: ["Mike", "Anna"],
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        name: "Alice",
        balance: 2300,
        friends: ["John", "Bob"],
        skills: ["Python", "Django", "Machine Learning"]
    },
    {
        name: "Bob",
        balance: 1800,
        friends: ["Alice", "Anna"],
        skills: ["Java", "Spring", "Hibernate", "Machine Learning"]
    },
    {
        name: "Anna",
        balance: 1700,
        friends: ["John", "Bob"],
        skills: ["HTML", "CSS", "JavaScript"]
    }
];

// Завдання 1
const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log("Загальна сума балансу:", totalBalance);

// Завдання 2
const getUsersWithFriend = (friendName) => users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

console.log("Користувачі, у яких є друг Anna:", getUsersWithFriend("Anna"));

// Завдання 3
const sortedUsersByFriends = users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

console.log("Імена користувачів, відсортовані за кількістю друзів:", sortedUsersByFriends);

// Завдання 4
const uniqueSkills = [...new Set(users.flatMap(user => user.skills))].sort();
console.log("Унікальні вміння користувачів:", uniqueSkills);

