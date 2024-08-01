import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout.jsx";
import ImageGallery from "./components/ImageGallery.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:category" element={<ImageGallery />} />
        <Route path="/search/:category" element={<ImageGallery />} />
      </Route>
    </Routes>
  );
}

export default App;
