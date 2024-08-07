import { useSelector, useDispatch } from "react-redux";
import { addBoth, decrement, increment, reset } from "./counterSlice";
import { useRef } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const input1Ref = useRef();
  const input2Ref = useRef();

  function handleAdd() {
    const value1 = Number(input1Ref.current.value);
    const value2 = Number(input2Ref.current.value);

    dispatch(addBoth({ value1, value2 }));
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <input type="text" ref={input1Ref} />
      <input type="text" ref={input2Ref} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Counter;
