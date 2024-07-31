import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ShopScreen from "./components/ShopScreen";
import ProfileScreen from "./components/ProfileScreen";
import HomeScreen from "./components/HomeScreen";
import MyNavbar from "./components/MyNavbar";
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";

function App() {
  async function makeAFetch() {
    const url = "https://webhook.site/ff0871b0-b4f5-47a6-8d6c-94f9cd1fcbd3";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      }),
    };

    try {
      const res = await fetch(url, options);

      if (!res.ok) {
        throw new Error("Network response was not ok " + res.statusText);
      }
      console.log("res: ", res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/profile"
          element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          }
        />
        <Route
          path="/shop"
          element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          }
        />
      </Routes>

      <PostList />
      <Example1 />
      <Example2 />
      <Example3 />

      <button onClick={makeAFetch}>Display Response</button>
    </>
  );
}

export default App;
