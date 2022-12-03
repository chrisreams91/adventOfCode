var { readInput } = require("../util");
const input = readInput("./input.txt");

const formattedRounds = input.map((round) => round.replace(" ", "").split(""));
console.log(formattedRounds);

const calculatePointsForChoice = (choice) => {
  if (choice === "X") {
    return 1;
  }
  if (choice === "Y") {
    return 2;
  }
  if (choice === "Z") {
    return 3;
  }
};
const calculatePointsForResultr = (them, me) => {
  if (them === "A") {
    if (me === "X") {
      return 3;
    }
    if (me === "Y") {
      return 6;
    }
    if (me === "Z") {
      return 0;
    }
  }
  if (them === "B") {
    if (me === "X") {
      return 0;
    }
    if (me === "Y") {
      return 3;
    }
    if (me === "Z") {
      return 6;
    }
  }
  if (them === "C") {
    if (me === "X") {
      return 6;
    }
    if (me === "Y") {
      return 0;
    }
    if (me === "Z") {
      return 3;
    }
  }
};

const scoresPerRound = formattedRounds.map((round) => {
  const pointsForChoice = calculatePointsForChoice(round[1]);
  const pointsForResult = calculatePointsForResultr(...round);
  return pointsForChoice + pointsForResult;
});

const totalScore = scoresPerRound.filter(Boolean).reduce((a, c) => a + c, 0);

console.log("scoresPerRound : ", scoresPerRound);
console.log("totalScore : ", totalScore);
