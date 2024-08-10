import { useSelector } from "react-redux";

function CategorySelector({ onSelectCategory }) {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <select onChange={(e) => onSelectCategory(e.target.value)}>
      <option value={-1}>Select Category</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}

export default CategorySelector;
