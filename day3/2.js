const { readInput } = require("../util");
const input = readInput("./input.txt");

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const priority = (lower + upper).split("");

const grouped = [[]];
input.forEach((rucksack, i) => {
  if (rucksack) {
    if (grouped[grouped.length - 1].length < 3) {
      grouped[grouped.length - 1].push(rucksack);
    } else {
      grouped.push([rucksack]);
    }
  }
});

const groupedResults = grouped.map((group) => {
  console.log(group);

  const splitIntoArr = group.map((rucksack) => rucksack.split(""));
  const commonItem = splitIntoArr[0].filter((item) => {
    const secondContains = splitIntoArr[1].find((x) => x === item);
    const thirdContains = splitIntoArr[2].find((x) => x === item);

    return secondContains && thirdContains;
  });

  console.log(commonItem);
  return priority.indexOf(commonItem[0]) + 1;
});

console.log(groupedResults);
const total = groupedResults.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(total);
