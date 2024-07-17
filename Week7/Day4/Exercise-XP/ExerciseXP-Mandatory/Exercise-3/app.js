import { readFile, writeFile } from "./fileManager.js";

readFile("./Hello-World.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

writeFile("./Bye-World.txt", "Writing to the file");

readFile("./Bye-World.txt")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
