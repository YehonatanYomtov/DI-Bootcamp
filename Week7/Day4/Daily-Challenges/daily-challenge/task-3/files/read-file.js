const fs = require("fs");

const readFileData = (filePath = "./file-data.txt") => {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("There was an error reading the file", err);
      return;
    }

    console.log(data);
  });
};

module.exports = readFileData;
