import React, { useState, useEffect } from "react";
import "./MovieList.css";

const MovieList = (data) => {
  const FavouriteComponent = data.favComp;
  const WatchListComponent = data.watchComp;
  const filteredMovies = data.movies.filter((movie) => movie.Poster !== "N/A");
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const fetchDetails = async (movie) => {
    const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=4e476b6f`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    return responseJSON;
  };

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = {};
      for (let i = 0; i < filteredMovies.length; i++) {
        const movie = filteredMovies[i];
        const response = await fetchDetails(movie);
        details[movie.imdbID] = response;
      }
      setMovieDetails(details);
      setIsLoading(false); // Set loading state to false when data is loaded
    };

    getMovieDetails();
  }, [filteredMovies]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const FavClicked = (movie) => {
    data.handleFavouritesClick(movie);
  };
  const WatchClicked = (movie) => {
    data.handleWatchClick(movie);
  };

  return (
    <div className="d-flex ">
      {filteredMovies.map((movie, index) => {
        const details = movieDetails[movie.imdbID] || {};
        return (
          <div
            className="image-container m-3"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={movie.Poster} alt="" />
            {hoveredIndex === index && (
              <div className="overlay">
                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <>
                    <p className="movie-title">
                      {details.Title} "{details.Type}"
                    </p>
                    <p className="movie-type">{details.Genre}</p>
                    <p className="movie-duration">
                      Duration: {details.Runtime}
                    </p>
                    <p className="movie-release">Release: {details.Released}</p>
                    <p className="description">{details.Plot}</p>
                    <p className="rate">Rate: {details.imdbRating}</p>
                  </>
                )}
                <button className="FavButton" onClick={() => FavClicked(movie)}>
                  <FavouriteComponent />
                </button>
                <button
                  className="WatchButton"
                  onClick={() => WatchClicked(movie)}
                >
                  <WatchListComponent />
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
