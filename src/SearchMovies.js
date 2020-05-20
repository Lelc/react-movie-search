import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const search = async (e) => {
    e.preventDefault();

    let url = `https://api.themoviedb.org/3/search/movie?api_key=2e8dc3bec89e9bcc169cfcabbaa16316&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={search}>
        <label htmlFor="query" className="label">
          Find a Movie:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Type a movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default SearchMovies;
