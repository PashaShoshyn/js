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



