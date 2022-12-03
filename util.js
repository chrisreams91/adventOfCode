const fs = require("fs");
const path = require("path");

module.exports = {
  readInput: (path) => {
    const x = fs.readFileSync(path, "utf8");
    return x.split("\n");
  },
  logResults: (test) => {
    const dir = path.basename(test);
    console.log(`${dir} - Part 1 : `);
    require(`${test}/1`);

    console.log(" ");
    console.log(" ");

    console.log(`${dir} - Part 2 : `);
    require(`${test}/2`);

    console.log(" ");
    console.log(" ");
  },
};
