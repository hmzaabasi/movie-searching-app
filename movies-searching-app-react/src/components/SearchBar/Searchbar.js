import React from "react";

import "./Searchbar.css";

const SearchBar = props => {
  const { handleChange } = props;
  return (
    <>
      <div className="searchbar-container">
        <div className="searchbar-with-icn">
          <input
            type="text"
            className="searchbar"
            placeholder="Search movies..."
            onChange={handleChange}
            spellCheck={false}
          />
          <img src="/icn_search.png" alt="search" className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
