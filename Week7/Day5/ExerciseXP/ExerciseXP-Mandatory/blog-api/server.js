const express = require("express");
const app = express();

app.use(express.json());

const postsDb = [
  {
    id: 0,
    title: "JavaScript",
    content: "jfdk jdksf jjmdk dm karwerwerfd sff ew fsd ",
  },
  {
    id: 1,
    title: "React",
    content: "jfdk jdksf jjmdk dm ka dsaf dfe fw dfsf sw fw dsf fwedfsdf",
  },
  {
    id: 2,
    title: "NodeJs",
    content: "jfdk jdksf jjmdk dm ka dfg f afd safdsfasdf",
  },
  {
    id: 3,
    title: "Python",
    content:
      "jfdk jdksf djsakld dj skads jamkld jjmdk dm ka dfg fy afd safdsfasdf",
  },
];

app.get("/posts", (req, res) => {
  res.json(postsDb);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const match = postsDb.find((blog) => blog.id === Number(id));

  if (!match) {
    res.status(404).json({ error: "Post not found." });
  }

  res.json(match);
});

app.post(
  "/posts",

  (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(400).json({ error: "Title and Content are required." });
    }

    const id = postsDb.length;

    const newPost = {
      id,
      title,
      content,
    };

    postsDb.push(newPost);

    res.status(201).json(newPost);
  }
);

app.put("/posts/:id", (req, res) => {
  const id = req.params.id;
  const match = postsDb.find((blog) => blog.id === Number(id));

  if (!match) {
    return res
      .status(404)
      .json({ error: "Could not find the post to update." });
  }

  const { title, content } = req.body;

  if (title) {
    match.title = title;
  }

  if (content) {
    match.content = content;
  }

  if (!title && !content) {
    return res.status(400).json({ error: "Title and Content are required." });
  }

  res.json({ message: "Post updated successfully." });
});

app.delete("/posts/:id", (req, res) => {
  const id = req.params.id;
  const postIndex = postsDb.findIndex((blog) => blog.id === Number(id));

  if (postIndex === -1) {
    return res
      .status(404)
      .json({ error: "Could not find the post to update." });
  }

  postsDb.splice(postIndex, 1);

  res.json({ message: "Post deleted successfully." });
});

app.get("*", (req, res) => {
  res.send("Page not found.");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost: 3000");
});
