import { useRef, useState } from "react";

function CharacterCounter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCount(textLength);
  };

  return (
    <div>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
      ></textarea>
      <p>Character Count: {count}</p>
    </div>
  );
}

export default CharacterCounter;
