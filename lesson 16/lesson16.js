class User {
    #email;


constructor({ name, email }) {
    this.name = name ;
}
}

const mango = new User({ name: "Манго", email: "mango@mail.com" });
console.log(mango.email);
mango.email = "mango@supermail.com";
console.log(mango.email); 







// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  

//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//     }
//   }
  
 
//   const myDog = new Dog('Buddy', 'Labrador Retriever');
//   console.log(myDog); 




class Animal {
    makeSound() {
      console.log("The animal makes a sound");
    }
  }
  

  class Cat extends Animal {
    makeSound() {
      console.log("Meow");
    }
  }
  

  const animal = new Animal();
  animal.makeSound(); 
  
  const cat = new Cat();
  cat.makeSound(); 