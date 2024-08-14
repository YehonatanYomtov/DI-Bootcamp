import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter">
      <button onClick={() => setCount((cur) => --cur)}>-</button>
      <h3>{count}</h3>
      <button onClick={() => setCount((cur) => ++cur)}>+</button>
    </div>
  );
}

export default Counter;
