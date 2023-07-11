import React from "react";

const MovieList = (data) => {
  console.log(data.movies);
  const FavouriteComponent = data.favComp;

  function check(poster) {
    if (poster !== "N/A") return true;
    else return false;
  }
  return (
    <div className="d-flex justify-content-between">
      {data.movies.map((movie, index) => (
        <div className="image-container m-3" key={index}>
          {check(movie.Poster) && (
            <>
              <img src={movie.Poster} />
              <div className="overlay d-flex align-items-center justify-content-center">
                <FavouriteComponent />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
