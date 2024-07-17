const greet = require("../task-1/greeting.js");
const colorfulMessage = require("../task-2/colorful-message.js");
const readFileData = require("../task-3/files/read-file.js");

console.log(greet("Yonski"));

(async () => {
  await colorfulMessage();

  readFileData("../task-3/files/file-data.txt");
})();
