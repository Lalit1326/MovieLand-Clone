import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=dbb5497e";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",

  Title: "Spiderman the Verse",
  Type: "series",
  Year: "2019",
  imdbID: "tt12122034",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <a
        style={{ textDecoration: "none" }}
        href="https://www.imdb.com/title/tt4087382/"
      >
        <h1>MovieLand</h1>
      </a>

      <div clasName="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div classname="empty">
          <h2>No movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
