import "./App.css";
import DemoCarousel from "./DemoCarousel.jsx.jsx";

function App() {
  const imagesUrl = [
    {
      name: "Hong Kong",
      url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
    },
    {
      name: "Macao",
      url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
    },
    {
      name: "Japan",
      url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
    },
    {
      name: "Las Vegas",
      url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp",
    },
  ];

  return (
    <div className="container">
      <DemoCarousel imagesUrl={imagesUrl} />
    </div>
  );
}

export default App;
