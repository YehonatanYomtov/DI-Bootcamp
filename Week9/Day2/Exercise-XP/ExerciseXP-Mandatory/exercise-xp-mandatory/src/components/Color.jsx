import { useEffect, useState } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  function changeColor() {
    setFavoriteColor("blue");
  }

  useEffect(() => {
    alert("useEffect reached");
  }, [favoriteColor]);

  return (
    <>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default Color;
