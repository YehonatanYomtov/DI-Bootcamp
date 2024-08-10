import CategorySelector from "./CategorySelector";

function CategorySection({
  onSelectCategory,
  onAddCategory,
  newCategory,
  setNewCategory,
}) {
  return (
    <div className="category-section">
      <h2>Select Category</h2>
      <CategorySelector onSelectCategory={onSelectCategory} />
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category"
      />
      <button onClick={onAddCategory}>Add Category</button>
    </div>
  );
}

export default CategorySection;
