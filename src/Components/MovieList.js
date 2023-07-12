import React, { useState } from "react";
import "./MovieList.css";

const MovieList = (data) => {
  console.log(data.movies);
  const FavouriteComponent = data.favComp;
  const filteredMovies = data.movies.filter((movie) => movie.Poster !== "N/A");

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="d-flex ">
      {filteredMovies.map((movie, index) => (
        <div
          className="image-container m-3"
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={movie.Poster} alt="" />
          {hoveredIndex === index && (
            <div className="overlay">
              <p className="movie-title">{movie.Title}</p>
              <p className="description">{movie.Plot}</p>
              <p className="rate">Rate: {movie.imdbRating}</p>

              <div
                onClick={() => data.handleFavouritesClick(movie)}
                className="overlay-content d-flex align-items-center justify-content-center"
              >
                <FavouriteComponent />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
