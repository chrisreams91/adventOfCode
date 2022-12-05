const { readInput } = require("../util");
const input = readInput("./input.txt");

const formattedRounds = input.map((round) => round.replace(" ", "").split(""));
console.log(formattedRounds);
// win 6
// tie 3
// loss 0
const calculatePointsForResultr = (choice) => {
  if (choice === "X") {
    return 0;
  }
  if (choice === "Y") {
    return 3;
  }
  if (choice === "Z") {
    return 6;
  }
};
const calculatePointsForChoice = (them, me) => {
  if (them === "A") {
    if (me === "X") {
      return 3;
    }
    if (me === "Y") {
      return 1;
    }
    if (me === "Z") {
      return 2;
    }
  }
  if (them === "B") {
    if (me === "X") {
      return 1;
    }
    if (me === "Y") {
      return 2;
    }
    if (me === "Z") {
      return 3;
    }
  }
  if (them === "C") {
    if (me === "X") {
      return 2;
    }
    if (me === "Y") {
      return 3;
    }
    if (me === "Z") {
      return 1;
    }
  }
};

const scoresPerRound = formattedRounds.map((round) => {
  const pointsForChoice = calculatePointsForResultr(round[1]);
  const pointsForResult = calculatePointsForChoice(...round);
  return pointsForChoice + pointsForResult;
});

const totalScore = scoresPerRound.filter(Boolean).reduce((a, c) => a + c, 0);

console.log("scoresPerRound : ", scoresPerRound);
console.log("totalScore : ", totalScore);
