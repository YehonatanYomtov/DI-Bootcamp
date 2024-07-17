import fs from "fs";

const directoryPath = "./";

fs.readdir(directoryPath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading Directory:", err);
    return;
  }

  console.log("Files in Directory:");
  data.forEach((file) => console.log(file));
});
