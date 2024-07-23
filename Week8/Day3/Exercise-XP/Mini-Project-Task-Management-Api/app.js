const express = require("express");

const router = require("./routes/tasks.router.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on ${port}`));
