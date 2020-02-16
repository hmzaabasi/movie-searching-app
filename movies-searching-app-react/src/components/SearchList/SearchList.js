import React from "react";

import "./SearchList.css";

const SearchResult = props => {
  const { moviesList } = props;
  return (
    <>
      <div className="search-result-wrapper">
        {moviesList.map((data, index) => (
          <div className={`result searched-item-${index}`} key={index}>
            <img
              src={data.Poster !== "N/A" ? data.Poster : "no-img.png"}
              alt="post"
              className="post-img"
            />
            <p className="post-title">
              <strong>{data.Title}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchResult;
