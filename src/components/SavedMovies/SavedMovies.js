import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <div className="SavedMovies__empty-place"></div>
    </main>
  );
}

export default SavedMovies;