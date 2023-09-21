import { useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  const [isShortFilm, setIsShortFilm] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const searchFilms = (evt) => {
    evt.preventDefault();
    console.log(isShortFilm, searchQuery);
  };

  return (
    <main className="movies">
      <SearchForm
        isShortFilm={isShortFilm}
        searchQuery={searchQuery}
        setIsShortFilm={setIsShortFilm}
        setSearchQuery={setSearchQuery}
        searchFilms={searchFilms}

      />
      <MoviesCardList />

      {isLoading ? (
        <Preloader />
      ) : (
        <button
          aria-label="Показать еще"
          className="movies-list__more-button"
          type="button"
          onClick={handlePreloader}
        >
          Ещё
        </button>
      )}
    </main>
  );
}

export default Movies;
