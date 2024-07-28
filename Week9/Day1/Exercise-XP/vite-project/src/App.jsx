import "./App.css";
import Exercise from "./Exercise3";
import UserFavoriteAnimals from "./UserFavoriteAnimals";

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // Exercise 2 : Object
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <Exercise />
    </>
  );
}

export default App;
