const fs = require("fs");

module.exports = {
  readInput: (path) => {
    const x = fs.readFileSync(path, "utf8");
    return x.split("\n");
  },
};
