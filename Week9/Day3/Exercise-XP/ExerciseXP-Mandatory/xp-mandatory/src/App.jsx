import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import { Color, Child } from "./components/Color";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <Color />

      <Child />
    </div>
  );
}

export default App;
