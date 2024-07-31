import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => res.send(`Hello From Express`));

app.post("/api/world", (req, res) => {
  const { text } = req.body;
  console.log("text: ", text);

  res.send(`I received your POST request. This is what you sent me: ${text}`);
});

const port = 3000;

app.listen(port, () => console.log(`Port is running on port ${port}`));
