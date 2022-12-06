const { readInput } = require("../util");
const input = readInput("./input.txt");

const findRange = (first, second) => {
  const range = [];
  range.push(first);
  while (range[range.length - 1] !== second) {
    range.push(range[range.length - 1] + 1);
  }
  return range;
};

const formattedInput = input.map((line) => {
  const splitPairs = line.split(",");
  const pairRanges = splitPairs.map((pair) => {
    const splitNumbers = pair.split("");
    const splitIndex = splitNumbers.indexOf("-");

    const firstNums = splitNumbers.slice(0, splitIndex);
    const secondNums = splitNumbers.slice(splitIndex + 1, splitIndex.length);

    const range = findRange(
      Number(firstNums.join("")),
      Number(secondNums.join(""))
    );

    return range;
  });

  const firstContainedInSecond = !pairRanges[0].some(
    (num) => !pairRanges[1].find((x) => x === num)
  );

  const secondContainedInSecond = !pairRanges[1].some(
    (num) => !pairRanges[0].find((x) => x === num)
  );

  return firstContainedInSecond || secondContainedInSecond;
});

console.log(formattedInput);

const finalCount = formattedInput.filter(Boolean).length;
console.log(finalCount);
