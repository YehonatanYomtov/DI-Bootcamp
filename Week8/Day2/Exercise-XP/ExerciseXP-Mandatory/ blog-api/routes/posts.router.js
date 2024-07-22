const express = require("express");

const {
  getAllPosts,
  getAPost,
  createAPost,
  updateAPost,
  deleteAPost,
} = require("../controllers/posts.controller.js");

const router = express.Router();

router.get("/api/posts", getAllPosts);
router.get("/api/posts/:id", getAPost);
router.post("/api/posts", createAPost);
router.put("/api/posts/:id", updateAPost);
router.delete("/api/posts/:id", deleteAPost);

module.exports = router;
