import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";

const genres = ["All", "Horror", "Fantasy", "Science Fiction"];

function SelectionFilters({ setGenre }) {
  const selectRef = useRef(null);

  return (
    <select ref={selectRef} onChange={() => setGenre(selectRef.current.value)}>
      <option value={-1}>Select a Genre</option>

      {genres.map((gen) => (
        <option value={gen} key={nanoid()}>
          {gen}
        </option>
      ))}
    </select>
  );
}

export default SelectionFilters;
