const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tasks.json");

function readTasks() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error("Error reading tasks file");
  }
}

function writeTasks(tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 4));
  } catch (err) {
    throw new Error("Error writing tasks file");
  }
}

module.exports = {
  readTasks,
  writeTasks,
};
