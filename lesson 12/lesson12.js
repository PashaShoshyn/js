// Завдання 1
const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true,
  };
  
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
  
  // Завдання 2
  function countProps(obj) {
    return Object.keys(obj).length;
  }
  
  console.log(countProps(user));
  
  // Завдання 3
  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
    return bestEmployee;
  }
  
  const employees = {
    John: 5,
    Alice: 10,
    Bob: 8,
  };
  console.log(findBestEmployee(employees));
  
  // Завдання 4
  function countTotalSalary(employees) {
    return Object.values(employees).reduce((sum, salary) => sum + salary, 0);
  }
  
  const salaries = {
    John: 1000,
    Alice: 1500,
    Bob: 900,
  };
  console.log(countTotalSalary(salaries));
  
  // Завдання 5
  function getAllPropValues(arr, prop) {
    return arr.map(item => item[prop]).filter(value => value !== undefined);
  }
  
  const products = [
    { name: "Laptop", price: 1000, quantity: 3 },
    { name: "Phone", price: 500, quantity: 5 },
    { name: "Tablet", price: 700, quantity: 2 },
  ];
  console.log(getAllPropValues(products, "name"));
  
  // Завдання 6
  function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(item => item.name === productName);
    return product ? product.price * product.quantity : 0;
  }
  
  console.log(calculateTotalPrice(products, "Laptop"));
  
  // Завдання 7 (Додаткове)
  const account = {
    balance: 0,
    transactions: [],
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount });
    },
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Недостатньо коштів на рахунку!");
        return;
      }
      this.balance -= amount;
      this.transactions.push({ type: "withdrawal", amount });
    },
  
    getBalance() {
      return this.balance;
    },
  
    getTransactionHistory() {
      return this.transactions;
    }
  };
  
  account.deposit(2000);
  account.withdraw(500);
  console.log("Баланс:", account.getBalance());
  console.log("Історія транзакцій:", account.getTransactionHistory());
  



 

