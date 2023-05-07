import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
    if (movies) {
        return (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        );
    }
    else {
        return (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        );
    }
}

export default MovieGrid;