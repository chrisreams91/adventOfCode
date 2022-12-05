const { readInput } = require("../util");
const input = readInput("./input.txt");

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = lower.toUpperCase();
const priority = (lower + upper).split("");

const split = input.map((rucksack) => {
  const half = rucksack.length / 2;
  const first = rucksack.substring(0, half);
  const last = rucksack.substring(half, rucksack.length);

  const firstSplit = first.split("");
  const lastSplit = last.split("");

  const commonElement = firstSplit.filter((letter) => {
    return lastSplit.find((x) => x === letter);
  });

  return priority.indexOf(commonElement[0]) + 1;
});

console.log(split);

const total = split.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(total);
