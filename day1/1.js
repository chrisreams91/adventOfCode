var { readInput } = require("../util");
const input = readInput("./input.txt");

const elvesAndCaloriesTheyhold = [[]];
input.forEach((x) => {
  const num = Number(x);
  const lastInGroup = elvesAndCaloriesTheyhold.length - 1;
  if (num) {
    elvesAndCaloriesTheyhold[lastInGroup].push(num);
  } else {
    elvesAndCaloriesTheyhold.push([]);
  }
});

const elvesWithCaloriesCounted = elvesAndCaloriesTheyhold.map((elf) =>
  elf.reduce((acc, cV) => acc + cV, 0)
);

const elfWithDaMost = elvesWithCaloriesCounted.sort((a, b) => b - a)[0];

console.log(JSON.stringify(elfWithDaMost));
