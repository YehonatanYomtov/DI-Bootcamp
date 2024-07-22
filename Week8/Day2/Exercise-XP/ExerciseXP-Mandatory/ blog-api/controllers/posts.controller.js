const {
  _getAllPosts,
  _getAPost,
  _createAPost,
  _updateAPost,
  _deleteAPost,
} = require("../models/posts.model.js");

async function getAllPosts(req, res) {
  try {
    const posts = await _getAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    console.error(`Error fetching all posts: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

async function getAPost(req, res) {
  const { id } = req.params;

  try {
    const post = await _getAPost(id);

    if (!post) {
      return res.status(404).json({ error: "Post doesn't exist." });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(`Error fetching post: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

async function createAPost(req, res) {
  const { title, content } = req.body;

  try {
    const newPost = await _createAPost(title, content);

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
    }

    res.status(200).json(newPost);
  } catch (err) {
    console.error(`Error creating post: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

async function updateAPost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title && !content) {
    return res
      .status(400)
      .json({ error: "At least one of title or content is required." });
  }

  try {
    const updatedPost = await _updateAPost(title, content, id);

    if (updatedPost.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json(updatedPost[0]);
  } catch (err) {
    console.error(`Error updating post: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

async function deleteAPost(req, res) {
  const { id } = req.params;

  try {
    const deletedCount = await _deleteAPost(id);

    if (deletedCount === 0) {
      return res.status(404).json({ error: "Post not found." });
    }

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (err) {
    console.error(`Error deleting post: ${err.message}`);
    res.status(500).json({ error: "Internal Server Error." });
  }
}

module.exports = {
  getAllPosts,
  getAPost,
  createAPost,
  updateAPost,
  deleteAPost,
};
