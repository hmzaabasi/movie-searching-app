import React from "react";

import "./Searchbar.css";

const SearchBar = props => {
  const { handleChange } = props;
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
