import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=dd5ea5ad";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Movie");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1><h2>🍿</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchMovies={searchMovies} />
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
