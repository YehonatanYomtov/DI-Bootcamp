const db = require("../config/db.js");

function _getAllPosts() {
  return db("posts").select("id", "title", "content").orderBy("id");
}

function _getAPost(post_id) {
  return db("posts").where({ id: post_id }).select("id", "title", "content");
}

function _createAPost(title, content) {
  return db("posts")
    .insert({ title, content })
    .returning(["id", "title", "content"]);
}

function _updateAPost(title, content, post_id) {
  const updateData = {};

  if (title) {
    updateData.title = title;
  }

  if (content) {
    updateData.content = content;
  }

  return db("posts")
    .where({ id: post_id })
    .update(updateData)
    .returning(["id", "title", "content"]);
}

function _deleteAPost(post_id) {
  return db("posts").where({ id: post_id }).del();
}

module.exports = {
  _getAllPosts,
  _getAPost,
  _createAPost,
  _updateAPost,
  _deleteAPost,
};
