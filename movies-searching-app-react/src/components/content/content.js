import React from 'react';

import SearchBar from "../SearchBar/Searchbar";
import SearchResult from "../SearchList/SearchList";

const Content = (props) => {
    const { loading, onError, moviesList, handleChange, pageTitle } = props;

    return (
        <div className="App">
            <div className="content-container">
                <h2 className="app-title">{pageTitle}</h2>
                <SearchBar handleChange={handleChange} />
                {moviesList.length > 0 && <SearchResult moviesList={moviesList} />}
                {onError.showError && (
                    <div>
                        <strong>{onError.message}</strong>
                    </div>
                )}
                {loading && <div>Loading...</div>}
            </div>
        </div>
    );
}

export default Content;