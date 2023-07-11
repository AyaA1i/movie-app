import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox from "./Components/SearchBox";
<<<<<<< HEAD
import MovieListHeading from "./Components/MovieListHeading";
=======
import MovieHeading from "./Components/MovieListHeading";
>>>>>>> ab1214b7f9ff93018d3458c959aa8801eae02d5a
import AddFavourite from "./Components/AddFavourites";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [SearchValue, setSearchValue] = useState("");

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

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox SearchValue={SearchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} favComp={AddFavourite} />
      </div>
    </div>
  );
};

export default App;
