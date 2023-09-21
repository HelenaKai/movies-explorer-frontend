import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css"

function SavedMovies() {
  return (
    
    <main className="movies saved-movies">
      <SearchForm />
      <MoviesCardList />
      <div className="saved-movies__saved-devider "></div>
    </main>
  );
}

export default SavedMovies;