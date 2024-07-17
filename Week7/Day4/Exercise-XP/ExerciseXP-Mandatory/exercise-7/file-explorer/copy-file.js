import fs from "fs";

const sourceFilePath = "./source.txt";
const destinationFilePath = "./destination.txt";

fs.readFile(sourceFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  fs.writeFile(destinationFilePath, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }

    console.log(`${sourceFilePath} has been copied to ${destinationFilePath}`);

    fs.readFile(destinationFilePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }

      console.log(`This is the text in ${destinationFilePath}: ${data}`);
    });
  });
});
