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






