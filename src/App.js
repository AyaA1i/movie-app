import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import MovieListHeading from "./Components/MovieListHeading";
import AddFavourite from "./Components/AddFavourites";
import RemoveFavourites from "./Components/RemoveFavourites";
import Logo from "./Components/FlixHubLogo.png";

const App = () => {
  const [movies, setMovies] = useState([
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg",
      imdbID: "tt1840309",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
      imdbID: "tt4154796",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg",
      imdbID: "tt2948356",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
      imdbID: "tt6751668",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
      imdbID: "tt1790864",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      imdbID: "tt3228774",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
      imdbID: "tt0087182",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2YyNTJjYmMtOGQxZC00N2UxLWEzNjMtOGU3ZjA2MGU1NjA5XkEyXkFqcGdeQXVyMTE1Nzg4NjY0._V1_SX300.jpg",
      imdbID: "tt2677722",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_SX300.jpg",
      imdbID: "tt2369135",
    },
  ]);
  const [SearchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (SearchValue) => {
    const url = `http://www.omdbapi.com/?s=${SearchValue}&apikey=4e476b6f`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(SearchValue);
  }, [SearchValue]);

  const AddFavouriteMovie = (Movie) => {
    if (!favourites.includes(Movie)) {
      const newFavList = [...favourites, Movie];
      setFavourites(newFavList);
    }
  };

  const RemoveFavouriteMovie = (Movie) => {
    const newFavList = favourites.filter(
      (favourite) => favourite.imdbID !== Movie.imdbID
    );
    setFavourites(newFavList);
  };
  return (
    <div className="container-fluid movie-app">
      <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
        <div>
          <img src={Logo} width="150px" height="130px" alt="Logo" />
        </div>
        <SearchBox SearchValue={SearchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={AddFavouriteMovie}
          favComp={AddFavourite}
        />
      </div>
      {favourites.length > 0 && (
        <>
          <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Favourites" />
          </div>
          <div className="row">
            <MovieList
              movies={favourites}
              handleFavouritesClick={RemoveFavouriteMovie}
              favComp={RemoveFavourites}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
