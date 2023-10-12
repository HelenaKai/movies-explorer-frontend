import React, { useState, useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMoviesFilms, filterDurationTime } from "../../utils/utils";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ savedMovies, onDeleteCard }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);  //отфильтрованные по запросу и чекбоксу
  const [isShortMovies, setisShortMovies] = useState(false);  //включен ли чекбокс короткометражек
  const [isNotFound, setIsNotFound] = useState(false); //фильмы по запросу не найдены
  const [searchQuery, setSearchQuery] = useState("");

  //submit
  function searchFilterMovie(query) {
    setSearchQuery(query);
  }

  function handleShortFilterCheckbox() {
    setisShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const moviesCardList = filterMoviesFilms(savedMovies, searchQuery);
    setFilteredMovies(
      isShortMovies ? filterDurationTime(moviesCardList) : moviesCardList
    );
  }, [savedMovies, isShortMovies, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <section className="movies">
      <SearchForm
        searchFilterMovie={searchFilterMovie}
        onfilterMoviesFilms={handleShortFilterCheckbox}
      />
      <MoviesCardList
        cards={filteredMovies}
        savedMovies={savedMovies}
        isNotFound={isNotFound}
        isSavedFilms={true}
        onDeleteCard={onDeleteCard}
      />
     </section>
  );
}

export default SavedMovies;

