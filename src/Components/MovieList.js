import React from "react";
//4e476b6f
const MovieList = (data) => {
  return (
    <div className="d-flex justify-content-between">
      {data.movies.map((movie, index) => (
        <div className="m-3">
          <img src={movie.Poster} alt="movie-poster"></img>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
