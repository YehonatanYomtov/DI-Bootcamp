// Components
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import UsersDisplay from "./components/UsersDisplay";

// Styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greeting name={"Alex Moore"} />

      <Counter />

      <UserCard name={"Mike"} age={32} />

      <UsersDisplay />
    </div>
  );
}

export default App;
