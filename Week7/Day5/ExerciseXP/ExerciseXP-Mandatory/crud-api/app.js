import express from "express";

import fetchPosts from "./data/dataService.js";

const app = express();

app.use(express.json());

app.get("/api/posts", async (req, res) => {
  try {
    const allPosts = await fetchPosts();
    console.log("All posts data has been successfully retrieved");
    res.status(200).json(allPosts);
  } catch (err) {
    console.error("Error making GET request:", err);
    res.status(500).json({ error: "Initial Server Error" });
  }
});

app.listen(3000, () => console.log("Listening on port 3000."));
