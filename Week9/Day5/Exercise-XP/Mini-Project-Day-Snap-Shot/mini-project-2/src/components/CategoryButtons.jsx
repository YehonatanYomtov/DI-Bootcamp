import { Link } from "react-router-dom";

function CategoryButtons() {
  return (
    <div className="category-buttons">
      <Link to="mountain">Mountain</Link>
      <Link to="beach">Beach</Link>
      <Link to="bird">Bird</Link>
      <Link to="food">Food</Link>
    </div>
  );
}

export default CategoryButtons;
