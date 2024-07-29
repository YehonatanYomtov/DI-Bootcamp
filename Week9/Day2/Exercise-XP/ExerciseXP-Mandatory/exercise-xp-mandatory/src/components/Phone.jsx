import { useState } from "react";

function Phone() {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  function changeColor() {
    setPhoneInfo((cur) => ({ ...cur, color: "blue" }));
  }

  return (
    <>
      <h1>My phone is a {phoneInfo.brand}</h1>
      <p>
        It is a {phoneInfo.color} {phoneInfo.model} from {phoneInfo.year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default Phone;
