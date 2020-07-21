import React, { useState } from "react";
import MovieCard from "./MovieCard";
import apikey from "./apikey";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const search = async (e) => {
    e.preventDefault();

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey.themoviedb}&language=en-US&query=${query}&page=1&include_adult=false`;

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
