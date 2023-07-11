import React from "react";

const MovieList = (data) => {
  console.log(data.movies);
  const FavouriteComponent = data.favComp;
  const filteredMovies = data.movies.filter((movie) => movie.Poster !== "N/A");

  return (
    <div className="d-flex ">
      {filteredMovies.map((movie, index) => (
        <div className="image-container m-3" key={index}>
          <img src={movie.Poster} alt="" />
          <div
            onClick={() => data.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
