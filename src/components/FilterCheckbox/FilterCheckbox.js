import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onfilterMoviesFilms, isShortMovies }) {
  return (
    <div className="search__toggle">
      <input
        className="search__checkbox"
        type="checkbox"
        onChange={onfilterMoviesFilms}
        checked={isShortMovies}
      ></input>
      <span className="search__toggle-title">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;

