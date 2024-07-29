import "./App.css";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <>
      <Car carInfo={carinfo} />

      <Events />

      <Phone />
    </>
  );
}

export default App;
