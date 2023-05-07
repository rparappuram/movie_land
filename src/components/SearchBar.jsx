import React from 'react';
import SearchIcon from '../assets/search.svg';

function SearchBar({ searchTerm, setSearchTerm, searchMovies}) {
    return (
        <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(event) => { setSearchTerm(event.target.value); }}
          onKeyDown={(event) => { event.key === "Enter" && searchMovies(searchTerm) }}
        />
        <img src={SearchIcon} alt="search" onClick={() => { searchMovies(searchTerm) }} />
      </div>
    );
}

export default SearchBar;