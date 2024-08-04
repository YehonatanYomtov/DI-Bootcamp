import "./App.css";
import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

import ThemeSwitcher from "./components/ThemeSwitcher";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />

      <h1>Character Counter</h1>
      <CharacterCounter />

      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
