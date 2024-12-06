const str = "Hello, World! Welcom to JavaScript";

const worArr = str.split(" ");
console.log(worArr);


const symwolArr = str.split(" ");
console.log(symwolArr);

console.log(worArr.join(' '));
console.log(worArr.join('-'));
console.log(worArr.join(''));








const url = "Hi, my nane is Pasha!";
const ledArr = url.split(" ");
console.log(ledArr);
console.log(ledArr.join('-'));





const title = 'Top 10 benefits of React framework';
const slug = title.toLowerCase().split(' ');
console.log(slug.join('-'));

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(30));
console.log(numbers.includes(100));
console.log(numbers.includes(30));
console.log(numbers.includes(100));



const message = 'Welcome to Ukraine!';
const lettersArray = message.split('');
console.log(lettersArray);
const indexL = message.indexOf('l');
console.log(`Індекс першої літери 'l': ${indexL}`);
const joinedMessage = lettersArray.join('');
console.log(joinedMessage); 



const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
function calculateArraySum(array) {
    return array.reduce((sum, current) => sum + current, 0);
}
const sum1 = calculateArraySum(array1);
const sum2 = calculateArraySum(array2);
const totalSum = sum1 + sum2;
console.log("Сума елементів array1:", sum1);
console.log("Сума елементів array2:", sum2);
console.log("Загальна сума:", totalSum);