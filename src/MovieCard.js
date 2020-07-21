import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w280_and_h400_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h2 className="card--title">{movie.title}</h2>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--desc">DESCRIPTION: {movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
