import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox from "./Components/SearchBox";
import MovieListHeading from "./Components/MovieListHeading";
import AddFavourites from "./Components/AddFavourites";
import RemoveFavourites from "./Components/RemoveFavourites";
import AddWatchList from "./Components/AddWatchList";
import RemoveWatchList from "./Components/RemoveWatchList";
import Logo from "./Components/FlixHubLogo.png";
import FavouriteList from "./Components/FavouritesList";
import WatchList from "./Components/WatchList";

const App = () => {
  const staticmovies = [
    {
      Title: "Cruella",
      Year: "2021",
      Rated: "PG-13",
      Released: "28 May 2021",
      Runtime: "134 min",
      Genre: "Adventure, Comedy, Crime",
      Director: "Craig Gillespie",
      Writer: "Dana Fox, Tony McNamara, Aline Brosh McKenna",
      Actors: "Emma Stone, Emma Thompson, Joel Fry",
      Plot: "A live-action prequel feature film following a young Cruella de Vil.",
      Language: "English, French",
      Country: "United States, United Kingdom",
      Awards: "Won 1 Oscar. 29 wins & 42 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.3/10" },
        { Source: "Rotten Tomatoes", Value: "75%" },
        { Source: "Metacritic", Value: "59/100" },
      ],
      Metascore: "59",
      imdbRating: "7.3",
      imdbVotes: "246,457",
      imdbID: "tt3228774",
      Type: "movie",
      DVD: "27 Aug 2021",
      BoxOffice: "$86,103,234",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Need for Speed",
      Year: "2014",
      Rated: "PG-13",
      Released: "14 Mar 2014",
      Runtime: "132 min",
      Genre: "Action, Adventure, Crime",
      Director: "Scott Waugh",
      Writer: "George Gatins, John Gatins",
      Actors: "Aaron Paul, Dominic Cooper, Imogen Poots",
      Plot: "Fresh from prison, a street racer who was framed by a wealthy business associate joins a cross-country race with revenge in mind. His ex-partner, learning of the plan, places a massive bounty on his head as the race begins.",
      Language: "English",
      Country: "United States, India",
      Awards: "1 win & 5 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ3ODY4NzYzOF5BMl5BanBnXkFtZTgwNjI3OTE4MDE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "6.4/10" },
        { Source: "Rotten Tomatoes", Value: "22%" },
        { Source: "Metacritic", Value: "39/100" },
      ],
      Metascore: "39",
      imdbRating: "6.4",
      imdbVotes: "174,772",
      imdbID: "tt2369135",
      Type: "movie",
      DVD: "05 Aug 2014",
      BoxOffice: "$43,577,636",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Zootopia",
      Year: "2016",
      Rated: "PG",
      Released: "04 Mar 2016",
      Runtime: "108 min",
      Genre: "Animation, Adventure, Comedy",
      Director: "Byron Howard, Rich Moore, Jared Bush",
      Writer: "Byron Howard, Rich Moore, Jared Bush",
      Actors: "Ginnifer Goodwin, Jason Bateman, Idris Elba",
      Plot: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
      Language: "English",
      Country: "United States",
      Awards: "Won 1 Oscar. 48 wins & 75 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.0/10" },
        { Source: "Rotten Tomatoes", Value: "98%" },
        { Source: "Metacritic", Value: "78/100" },
      ],
      Metascore: "78",
      imdbRating: "8.0",
      imdbVotes: "519,468",
      imdbID: "tt2948356",
      Type: "movie",
      DVD: "07 Jun 2016",
      BoxOffice: "$341,268,248",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "The Maze Runner",
      Year: "2014",
      Rated: "PG-13",
      Released: "19 Sep 2014",
      Runtime: "113 min",
      Genre: "Action, Mystery, Sci-Fi",
      Director: "Wes Ball",
      Writer: "Noah Oppenheim, Grant Pierce Myers, T.S. Nowlin",
      Actors: "Dylan O'Brien, Kaya Scodelario, Will Poulter",
      Plot: 'Thomas is deposited in a community of boys after his memory is erased, soon learning they\'re all trapped in a maze that will require him to join forces with fellow "runners" for a shot at escape.',
      Language: "English",
      Country: "United Kingdom, United States",
      Awards: "4 wins & 12 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "6.8/10" },
        { Source: "Rotten Tomatoes", Value: "65%" },
        { Source: "Metacritic", Value: "57/100" },
      ],
      Metascore: "57",
      imdbRating: "6.8",
      imdbVotes: "486,226",
      imdbID: "tt1790864",
      Type: "movie",
      DVD: "16 Dec 2014",
      BoxOffice: "$102,427,862",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Divergent",
      Year: "2014",
      Rated: "PG-13",
      Released: "21 Mar 2014",
      Runtime: "139 min",
      Genre: "Action, Adventure, Mystery",
      Director: "Neil Burger",
      Writer: "Evan Daugherty, Vanessa Taylor, Veronica Roth",
      Actors: "Shailene Woodley, Theo James, Kate Winslet",
      Plot: "In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's...",
      Language: "English, Spanish",
      Country: "United States",
      Awards: "7 wins & 11 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYxMzYwODE4OV5BMl5BanBnXkFtZTgwNDE5MzE2MDE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "6.6/10" },
        { Source: "Rotten Tomatoes", Value: "41%" },
        { Source: "Metacritic", Value: "48/100" },
      ],
      Metascore: "48",
      imdbRating: "6.6",
      imdbVotes: "473,097",
      imdbID: "tt1840309",
      Type: "movie",
      DVD: "05 Aug 2014",
      BoxOffice: "$150,947,895",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Me Before You",
      Year: "2016",
      Rated: "PG-13",
      Released: "03 Jun 2016",
      Runtime: "106 min",
      Genre: "Drama, Romance",
      Director: "Thea Sharrock",
      Writer: "Jojo Moyes",
      Actors: "Emilia Clarke, Sam Claflin, Janet McTeer",
      Plot: "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
      Language: "English, French",
      Country: "United Kingdom, United States",
      Awards: "6 wins & 6 nominations",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.4/10" },
        { Source: "Rotten Tomatoes", Value: "54%" },
        { Source: "Metacritic", Value: "51/100" },
      ],
      Metascore: "51",
      imdbRating: "7.4",
      imdbVotes: "268,028",
      imdbID: "tt2674426",
      Type: "movie",
      DVD: "30 Aug 2016",
      BoxOffice: "$56,245,075",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Top Gun: Maverick",
      Year: "2022",
      Rated: "PG-13",
      Released: "27 May 2022",
      Runtime: "130 min",
      Genre: "Action, Drama",
      Director: "Joseph Kosinski",
      Writer: "Jim Cash, Jack Epps Jr., Peter Craig",
      Actors: "Tom Cruise, Jennifer Connelly, Miles Teller",
      Plot: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to ...",
      Language: "English",
      Country: "United States",
      Awards: "Won 1 Oscar. 94 wins & 215 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.3/10" },
        { Source: "Rotten Tomatoes", Value: "96%" },
        { Source: "Metacritic", Value: "78/100" },
      ],
      Metascore: "78",
      imdbRating: "8.3",
      imdbVotes: "603,505",
      imdbID: "tt1745960",
      Type: "movie",
      DVD: "22 Aug 2022",
      BoxOffice: "$718,732,821",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "Coco",
      Year: "2017",
      Rated: "PG",
      Released: "22 Nov 2017",
      Runtime: "105 min",
      Genre: "Animation, Adventure, Drama",
      Director: "Lee Unkrich, Adrian Molina",
      Writer: "Lee Unkrich, Jason Katz, Matthew Aldrich",
      Actors: "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt",
      Plot: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      Language: "English, Spanish",
      Country: "United States, Japan",
      Awards: "Won 2 Oscars. 109 wins & 40 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.4/10" },
        { Source: "Rotten Tomatoes", Value: "97%" },
        { Source: "Metacritic", Value: "81/100" },
      ],
      Metascore: "81",
      imdbRating: "8.4",
      imdbVotes: "540,143",
      imdbID: "tt2380307",
      Type: "movie",
      DVD: "13 Feb 2018",
      BoxOffice: "$210,460,015",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
    {
      Title: "The Hunger Games",
      Year: "2012",
      Rated: "PG-13",
      Released: "23 Mar 2012",
      Runtime: "142 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Gary Ross",
      Writer: "Gary Ross, Suzanne Collins, Billy Ray",
      Actors: "Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth",
      Plot: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
      Language: "English",
      Country: "United States",
      Awards: "Won 1 BAFTA Award33 wins & 48 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.2/10" },
        { Source: "Rotten Tomatoes", Value: "84%" },
        { Source: "Metacritic", Value: "68/100" },
      ],
      Metascore: "68",
      imdbRating: "7.2",
      imdbVotes: "952,048",
      imdbID: "tt1392170",
      Type: "movie",
      DVD: "18 Aug 2012",
      BoxOffice: "$408,010,692",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ];
  const [movies, setMovies] = useState(staticmovies);
  const [SearchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const setLocalStorageFavourites = (items) => {
    localStorage.setItem("Favourites", JSON.stringify(items));
  };
  const setLocalStorageWatchlist = (items) => {
    localStorage.setItem("Watchlist", JSON.stringify(items));
  };

  const getMovieRequest = async (SearchValue) => {
    if (SearchValue.trim() === "") {
      setMovies(staticmovies);
    }
    const url = `http://www.omdbapi.com/?s=${SearchValue}&apikey=4e476b6f&Plot=full&r=json`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(SearchValue);
    const MovieFav = JSON.parse(localStorage.getItem("Favourites"));
    setFavourites(MovieFav);
    const MovieList = JSON.parse(localStorage.getItem("Watchlist"));
    setWatchlist(MovieList);
  }, [SearchValue]);

  const AddFavouriteMovie = (movie) => {
    const storedFavourites = JSON.parse(localStorage.getItem("Favourites"));

    if (
      !storedFavourites ||
      !storedFavourites.some((item) => item.imdbID === movie.imdbID)
    ) {
      const newFavList = [...favourites, movie];
      setFavourites(newFavList);
      setLocalStorageFavourites(newFavList);
    }
  };
  const AddWatchMovie = (movie) => {
    const storedWatchlist = JSON.parse(localStorage.getItem("Watchlist"));

    if (
      !storedWatchlist ||
      !storedWatchlist.some((item) => item.imdbID === movie.imdbID)
    ) {
      const newWatchlist = [...watchlist, movie];
      setWatchlist(newWatchlist);
      setLocalStorageWatchlist(newWatchlist);
    }
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavList);
    setLocalStorageFavourites(newFavList);
  };
  const RemoveWatchMovie = (movie) => {
    const newWatchlist = watchlist.filter(
      (watch) => watch.imdbID !== movie.imdbID
    );
    setWatchlist(newWatchlist);
    setLocalStorageWatchlist(newWatchlist);
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
          handleWatchClick={AddWatchMovie}
          favComp={AddFavourites}
          watchComp={AddWatchList}
          />
      </div>
      {favourites && favourites.length > 0 && (
        <>
          <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Favourites" />
          </div>
          <div className="row">
            <FavouriteList
              movies={favourites}
              handleFavouritesClick={RemoveFavouriteMovie}
              favComp={RemoveFavourites}
            />
          </div>
        </>
      )}
      {watchlist && watchlist.length > 0 && (
        <>
          <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading="Watchlist" />
          </div>
          <div className="row">
            <WatchList
              movies={watchlist}
              handleWatchClick={RemoveWatchMovie}
              watchComp={RemoveWatchList}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
