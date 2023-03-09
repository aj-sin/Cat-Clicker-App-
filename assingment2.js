//initial database blueprint
let database = [
  { Agility_and_Coordination: { score2019: 64, score2024: 71 } },
  { Hunting_and_Predatory_Skills: { score2019: 76, score2024: 70 } },
  { Communication: { score2019: 60, score2024: 75 } },
  { Adaptability: { score2019: 82, score2024: 63 } },
  { Independence: { score2019: 67, score2024: 78 } },
  { Affection_and_Socialization: { score2019: 70, score2024: 84 } },
  { Climbing: { score2019: 90, score2024: 95 } },
  { Balance: { score2019: 88, score2024: 96 } },
  { Senses: { score2019: 86, score2024: 90 } },
  { Flexibility: { score2019: 75, score2024: 83 } },
  { Problem_solving: { score2019: 67, score2024: 78 } },
  { Stealth: { score2019: 59, score2024: 72 } },
]

//Rank on the basis of 2019 score
console.log("--------------------RANK IN 2019--------------------")
let rank2019 = database.slice().sort((a, b) => {
  return b[Object.keys(b)[0]].score2019 - a[Object.keys(a)[0]].score2019;
});
rank2019.forEach((item, index) => {
  const skill = Object.keys(item)[0];
const score2019 = item[skill].score2019;
  console.log(`Rank: ${index + 1} Skill: ${skill}  Score: ${score2019}`);
});


//Rank on the basis of 2024 score
console.log("--------------------RANK IN 2024--------------------")
let rank2024 = database.slice().sort((a, b) => {
  return b[Object.keys(b)[0]].score2024 - a[Object.keys(a)[0]].score2024;
});
rank2024.forEach((item, index) => {
  const skill = Object.keys(item)[0];
  const score2024 = item[skill].score2024;
  console.log(`Rank: ${index + 1} Skill: ${skill}  Score: ${score2024}`);
});

//top 3 in 2019
console.log("------------------TOP 3 IN 2019--------------")
for (let index = 0; index < 3; index++) {
  const element = rank2019[index];
  const skill =Object.keys(element)[0];
  const score2019 = element[skill].score2019;
  console.log(`Rank: ${index + 1} Skill: ${skill}  Score: ${score2019}`);
}

//top 3 in 2024
console.log("-----------------TOP 3 IN 2024------------------")
for (let index = 0; index < 3; index++) {
  const element = rank2024[index];
  const skill =Object.keys(element)[0];
  const score2024 = element[skill].score2024;
  console.log(`Rank: ${index + 1} Skill: ${skill}  Score: ${score2024}`); 
}


//BOTTOM 3 in 2019
console.log("------------------BOTTOM 3 IN 2019--------------")
for (let index = 1; index < 4; index++) {
  const element = rank2019[rank2019.length-index];
  const skill =Object.keys(element)[0];
  const score2019 = element[skill].score2019;
  console.log(`Rank: ${index } Skill: ${skill}  Score: ${score2019}`);
}


//BOTTOM 3 in 2024
console.log("-----------------BOTTOM 3 IN 2024------------------")
for (let index = 1; index < 4; index++) {
  const element = rank2024[rank2024.length-index];
  const skill =Object.keys(element)[0];
  const score2024 = element[skill].score2024;
  console.log(`Rank: ${index } Skill: ${skill}  Score: ${score2024}`); 
}


//Top 3 Accelerating
console.log("-----------------Top 3 ACCELERATING------------------")
let top3accelerating = database.slice().sort((a, b) => {
  return (b[Object.keys(b)[0]].score2024 - b[Object.keys(b)[0]].score2019) - (a[Object.keys(a)[0]].score2024 - a[Object.keys(a)[0]].score2019);
});
for (let index = 0; index < 3; index++) {
  const element = top3accelerating[index];
  const skill = Object.keys(element)[0];
  console.log(`Rank: ${index + 1} Skill: ${skill}  `);
}

//Top 3 Decelerating
console.log("-----------------Top 3 DECELERATING------------------")
let top3decelerating=database.slice().sort((a, b) => {
  return (b[Object.keys(b)[0]].score2019-b[Object.keys(b)[0]].score2024) - (a[Object.keys(a)[0]].score2019-a[Object.keys(a)[0]].score2024);
});
for (let index = 0; index < 3; index++) {
  const element = top3decelerating[index];
  const skill = Object.keys(element)[0];
  console.log(`Rank: ${index + 1} Skill: ${skill}  `);
}

