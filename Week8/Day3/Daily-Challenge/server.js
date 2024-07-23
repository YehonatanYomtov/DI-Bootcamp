const express = require("express");
const cors = require("cors");
const path = require("path");

const router = require("./routes/user.router.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.use("/api", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on ${port}`));
