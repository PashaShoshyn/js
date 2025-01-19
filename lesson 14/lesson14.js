const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];


  // const contedTags = allTags.reduce((acc, value) => {
  //   acc[value] = acc[value] ? acc[value] = 1;
  //   return acc;
  // }, {})


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sortedNum = numbers2.reduce((acc, num) => {
  if(num % 2 === 0){
    acc['even'].push(num);
  } else{
    acc['odd'].push(num);
  }
  return acc;
}, {even: [], odd: []});
 


function voterResults(voters) {
  return voters.reduce((acc, voter) => {
      if (voter.age >= 18 && voter.age <= 25) {
          acc.numYoungPeople++;
          if (voter.voted) acc.numYoungVotes++;
      } else if (voter.age >= 26 && voter.age <= 35) {
          acc.numMidsPeople++;
          if (voter.voted) acc.numMidVotesPeople++;
      } else if (voter.age >= 36 && voter.age <= 55) {
          acc.numOldsPeople++;
          if (voter.voted) acc.numOldVotesPeople++;
      }
      // return acc;
  }, {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0
  });
}

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

console.log(voterResults(voters));