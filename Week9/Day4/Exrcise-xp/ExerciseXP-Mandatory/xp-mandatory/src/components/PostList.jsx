import data from "../data.json";
import { v4 as uniqueId } from "uuid";

function PostList() {
  return (
    <>
      <h1>Hi This is a Title</h1>
      {data.map((el) => {
        return (
          <div key={uniqueId()}>
            <h1>{el.title}</h1>
            <p>{el.content}</p>
          </div>
        );
      })}
    </>
  );
}

export default PostList;
