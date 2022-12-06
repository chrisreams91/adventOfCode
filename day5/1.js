const { readInput } = require("../util");
const input = readInput("./input.txt");

const rows = [];
const actions = [];

const formatActions = (line) => {
  const chunks = line.split(" ");
  return chunks
    .filter((chunk) => Number(chunk))
    .map((shitInt) => Number(shitInt));
};

input.forEach((line, i) => {
  if (i < 8) {
    const row = [];
    for (let i = 0; i < 35; i += 4) {
      const columnPerRow = line.substring(i, i + 4);

      row.push(columnPerRow);
    }
    rows.push(row);
  } else if (i > 9) {
    actions.push(formatActions(line));
  }
});

const stacksOfCrates = Array.from({ length: 9 }, () => []);

rows.reverse();
rows.forEach((row, i) => {
  if (row !== "    ") {
    stacksOfCrates[i] = row;
  }
});

const theRealStacks = Array.from({ length: 9 }, () => []);

stacksOfCrates.forEach((row) => {
  row.forEach((crate, i) => {
    if (crate !== "    ") {
      theRealStacks[i].push(crate);
    }
  });
});
console.log(actions);
actions.forEach((action, i) => {
  const [amount, from, to] = action;
  const startIndex = from - 1;
  const destinationIndex = to - 1;

  for (let i = 0; i < amount; i++) {
    const popped = theRealStacks[startIndex].pop();
    theRealStacks[destinationIndex].push(popped);
  }
});

const result = theRealStacks.map((stack) => {
  if (stack.length) {
    const one = stack[stack.length - 1].replace("[", "");
    const two = one.replace("]", "");
    return two.trim();
  }
});

console.log(result.join(""));
