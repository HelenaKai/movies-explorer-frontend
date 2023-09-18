import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../../utils/FilmsDB";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList() {
  const [isLoading, setLoading] = React.useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="movies-list">
      <ul className="movies-list__grid">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </ul>

      {isLoading ? (<Preloader />) : (
        <button aria-label='Показать еще'
          className="movies-list__more-button"
          type="button"
          onClick={handlePreloader}
        >
          Ещё
        </button>

      )}
    </section>
  );
}

export default MoviesCardList;
