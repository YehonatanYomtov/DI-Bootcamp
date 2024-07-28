import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from "./BootstrapCard";
import Planet from "./Planet";

function App() {
  return (
    <>
      <BootstrapCard />

      <Planet />
    </>
  );
}

export default App;
