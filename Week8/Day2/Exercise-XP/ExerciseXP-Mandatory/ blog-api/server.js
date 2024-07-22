const express = require("express");
const cors = require("cors");

const router = require("./routes/posts.router.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Running on ${port}`));

app.use("/", router);
