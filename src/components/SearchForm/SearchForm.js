import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search">
      <div className="search__container">
        <input
          className="search__input"
          placeholder="Фильмы"
          type="text"
          required
        />
        <button className="search__button" type="submit"/>
      </div>
      <div className="search__toggle">
        <label className="search__tumbler">
          <input
            id="short-films"
            type="checkbox"
            className="search__checkbox"
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
