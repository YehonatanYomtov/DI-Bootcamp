import axios from "axios";

export default async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const res = await axios.get(url);
    return await res.data;
  } catch (err) {
    console.error("Error making GET request:", err);
    throw err;
  }
}
