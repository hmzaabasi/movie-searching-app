import React, { useContext } from "react";

import "./Searchbar.css";
import { MoviesContext } from "../../context/movieList.context";

const SearchBar = props => {
  const { setSearchTextVal } = useContext(MoviesContext);

  const handleChange = e => {
    setSearchTextVal(e.target.value.trim());
  };
  return (
    <>
      <div className="searchbar-container">
        <input
          type="text"
          className="searchbar"
          placeholder="Enter search text"
          onChange={handleChange}
          spellCheck={false}
        />
      </div>
    </>
  );
};

export default SearchBar;
