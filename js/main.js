// function output(name){
//     console.log(`My name is ${name}`);
// }

// function output2(name){
//    return `My name is ${name}`;
// }


// const add = function(a, b, c){
//     return a + b + c;
// }

// console.log(add());



// output('Vitalii');
// output('Nazar');
// output('Pavlo');

// const value = output2('Oleg');
// console.log(value);



// const num = function(a, b, c){
//     let sum = a + b + c
//     return sum;
// }



// function value(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//       suma += arr[i];
      
//     }
//     return suma / arr.length;
//   }
  
//   let num2 = [1, 2, 3, 4, 10];
//   console.log(value(num2));

//   function everage_value(arr) {
//     let suma = 0;
//     for (let i = 0; i < arr.length; i++) {
//       suma += arr[i];
      
//     }
//     return suma / arr.length;
//   }
  
//   let arr2 = [1, 2, 3, 4, 10];
//   console.log(everage_value(arr2));












const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = ''; 

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i !== friends.length - 1) {
    string += ',';
  }
}

console.log(string);

const end = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const str = end.join(',');

console.log(str);




const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  const indexToDelete = 2; 
  cards.splice(indexToDelete, 1);
  
  console.log(cards);