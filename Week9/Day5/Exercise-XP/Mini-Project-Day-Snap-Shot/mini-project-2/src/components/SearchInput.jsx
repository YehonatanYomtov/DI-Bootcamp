import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CategoryButtons from "./CategoryButtons";

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>SnapShot</h1>

      <div className="input-container">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          name="search"
          placeholder="Search..."
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <CategoryButtons />
    </form>
  );
}

export default SearchInput;
