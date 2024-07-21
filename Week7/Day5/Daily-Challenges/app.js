const express = require("express");
const emojis = require("./data/emojis.js");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let score = 0;
let currentUser = "";

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/user", (req, res) => {
  const { userName, difficulty } = req.body;
  currentUser = userName;
  score = 0;

  res.json({ userName: currentUser, difficulty });
});

app.get("/emojis", (req, res) => {
  res.json(emojis);
});

app.post("/emojis", (req, res) => {
  const { choice, correctAnswer } = req.body;

  if (choice === correctAnswer.name) {
    score++;
    res.status(200).json({
      message: "Your answer is correct! 💪",
      score,
    });
  } else {
    res.status(200).json({
      message: "Your answer is not correct. 🙁",
      score,
    });
  }
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}.`));
