import "./SearchForm.css";

function SearchForm({
  isShortFilm,
  setIsShortFilm,
  searchQuery,
  setSearchQuery,
  searchFilms,
}) {
  return (
    <form className="search" onSubmit={searchFilms}>
      <div className="search__container">
        <input
          className="search__input"
          name="film"
          type="text"
          placeholder="Фильмы"
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          required
        />
        <button className="search__button" type="submit" />
      </div>

      <div className="search__toggle">
        <label className="search__tumbler">
          <input
            id="short-films"
            className="search__checkbox"
            name="short"
            type="checkbox"
            checked={isShortFilm}
            onChange={() => setIsShortFilm(!isShortFilm)}
          />
          <span className="search__slider" />
        </label>
        <label htmlFor="short-films" className="search__toggle-title">
          Короткометражки
        </label>
      </div>
    </form>

  );
}

export default SearchForm;
